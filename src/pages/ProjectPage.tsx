import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { ProjectCard2 } from '@/components/project/card2/project-page-card';
import { ProjectData } from '@/config/project.config';

interface ContentState {
  content: string;
  status: 'loading' | 'success' | 'error';
  error?: Error;
}

const initialState: ContentState = {
  content: '',
  status: 'loading'
};

const MyPage: React.FC = () => {
  const [state, setState] = useState<ContentState>(initialState);

  // Memoize pathname parsing to prevent unnecessary recalculations
  const fileName = useMemo(() => {
    const pathParts = useLocation().pathname.split('/');
    return pathParts[pathParts.length - 1];
  }, [useLocation().pathname]);

  // Memoize project lookup to prevent repeated searches
  const project = useMemo(() =>
    ProjectData.find(project => project.slug.toString() === fileName)
    , [fileName]);

  // Use useCallback to memoize the content loading function
  const loadContent = useCallback(async () => {
    try {
      // Using Vite's glob import feature
      const modules = import.meta.glob('/src/content/*.ts');
      const matchingPath = `/src/content/${fileName}.ts`;
      const moduleLoader = modules[matchingPath];

      if (!moduleLoader) {
        throw new Error(`No content found for "${fileName}"`);
      }

      const module = await moduleLoader();

      setState({
        //@ts-ignore
        content: module.default,
        status: 'success'
      });
    } catch (err) {
      setState({
        content: '',
        status: 'error',
        error: err instanceof Error ? err : new Error('Failed to load content')
      });
    }
  }, [fileName]);

  // Simplified useEffect with error handling
  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      await loadContent();
    };

    if (isMounted) {
      fetchContent();
    }

    return () => {
      isMounted = false;
    };
  }, [loadContent]);

  // Memoized content rendering to prevent unnecessary re-renders
  const renderContent = useMemo(() => {
    switch (state.status) {
      case 'loading':
        return (
          <div className="flex items-center justify-center p-4">
            <div className="animate-pulse text-sm text-gray-500">Loading...</div>
          </div>
        );

      case 'error':
        return (
          <div className="text-red-600 p-4">
            <h2 className="text-lg font-semibold mb-2">Error Loading Content</h2>
            <p>{state.error?.message}</p>
          </div>
        );

      case 'success':
        return (
          <div className="markdown-container">
            <MarkdownRenderer content={state.content} />
          </div>
        );
    }
  }, [state]);

  return (
    <main className="relative w-full lg:h-screen p-4 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8">
          <div className="flex justify-between mb-4">
            <Link
              to="/projects"
              className="group/back text-xs hover:opacity-70 transition-opacity"
            >
              <ArrowLeft
                size={24}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
            </Link>
          </div>
          {project && <ProjectCard2 {...project} />}
        </div>
        <div
          id="tab-section"
          className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll"
        >
          <div className="min-h-screen">{renderContent}</div>
        </div>
      </div>
    </main>
  );
};

export default React.memo(MyPage);