import { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { ProjectCard2 } from '@/components/project/card2/project-page-card';
import { ProjectData } from '@/config/project.config';

// import { exampleMd } from '@/content/example';
import { sampleMarkdown } from '@/content/sample-md';

interface ContentState {
  content: string;
  status: 'loading' | 'success' | 'error';
  error?: Error;
}

const initialState: ContentState = {
  content: '',
  status: 'loading'
};

const MyPage = () => {
  const [state, setState] = useState<ContentState>(initialState);
  const location = useLocation();

  // Memoize pathname parsing to prevent unnecessary recalculations
  const fileName = useMemo(() => {
    const pathParts = location.pathname.split('/');
    return pathParts[pathParts.length - 1];
  }, [location.pathname]);

  // Memoize project lookup to prevent repeated searches
  const project = useMemo(() =>
    ProjectData.find(project => project.slug.toString() === fileName)
    , [fileName]);

  // Use useCallback to memoize the content loading function
  const loadContent = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, status: 'loading' }));

      // Using Vite's glob import feature
      const modules = import.meta.glob('/src/content/*.ts');
      const matchingPath = `/src/content/${fileName}.ts`;
      const moduleLoader = modules[matchingPath];

      if (!moduleLoader) {
        throw new Error(`No content found for "${fileName}"`);
      }

      const module = await moduleLoader();

      // Check if component is still mounted before updating state
      setState({
        // @ts-ignore
        content: module.default || '',
        status: 'success'
      });
    } catch (err) {
      console.error(`Error loading content for ${fileName}:`, err);
      setState({
        content: '',
        status: 'error',
        error: err instanceof Error ? err : new Error('Failed to load content')
      });
    }
  }, [fileName]);

  // Simplified useEffect with error handling
  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const LoadingState = () => (
    <div className="flex items-center justify-center p-4">
      <div className="animate-pulse text-sm text-gray-500">Loading...</div>
    </div>
  );

  const ErrorState = ({ error, fallbackContent }: { error?: Error; fallbackContent: string }) => (
    <div className="text-red-600 p-4">
      <h2 className="text-lg font-semibold mb-2">Error Loading Content</h2>
      <p>{error?.message}</p>
      <MarkdownRenderer content={fallbackContent} />
    </div>
  );

  const ContentDisplay = ({ content }: { content: string }) => (
    <div className="markdown-container">
      <MarkdownRenderer content={content} />
    </div>
  );

  // Memoized content rendering to prevent unnecessary re-renders
  const renderContent = useMemo(() => {
    switch (state.status) {
      case 'loading':
        return <LoadingState />;
      case 'error':
        return <ErrorState error={state.error} fallbackContent={sampleMarkdown} />;
      case 'success':
        return <ContentDisplay content={state.content} />;
      default:
        return null;
    }
  }, [state]);

  return (
    <main className="relative w-full lg:h-[90vh] p-3 sm:p-2 mt-20 px-4">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <section className="relative w-full lg:w-2/5 p-1.5 md:p-8">
          <div className="flex justify-between mb-4">
            <Link
              to="/projects"
              className="group/back text-xs hover:opacity-70 transition-opacity"
              aria-label="Back to projects"
            >
              <ArrowLeft
                size={24}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
            </Link>
          </div>
          {project && <ProjectCard2 {...project} />}
        </section>
        <section
          id="content-section"
          className="relative w-full lg:h-full lg:w-3/5 p-1.5 md:p-8 overflow-y-auto"
          aria-live="polite"
        >
          <div className="min-h-screen">
            {renderContent}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyPage;
