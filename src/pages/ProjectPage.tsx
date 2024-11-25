import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
  const fileName = useLocation().pathname.split('/').pop();
  const project = ProjectData.find(project => project.slug.toString() == fileName)

  useEffect(() => {
    let mounted = true;

    const loadContent = async () => {
      try {
        // Using Vite's glob import feature
        const modules: any = import.meta.glob('/src/content/*.ts');
        const matchingPath = `/src/content/${fileName}.ts`;
        const moduleLoader = modules[matchingPath];

        if (!moduleLoader) {
          throw new Error(`No content found for "${fileName}"`);
        }

        const module = await moduleLoader();

        if (mounted) {
          setState({
            content: module.default,
            status: 'success'
          });
        }
      } catch (err) {
        if (mounted) {
          setState({
            content: '',
            status: 'error',
            error: err instanceof Error ? err : new Error('Failed to load content')
          });
        }
      }
    };

    loadContent();

    return () => {
      mounted = false;
      setState(initialState);
    };
  }, [fileName]);

  const renderContent = () => {
    switch (state.status) {
      case 'loading':
        return (
          <div className="flex items-center justify-center p-4">
            <div className="animate-pulse">Loading...</div>
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
  };

  return (
    <>
      <main className="relative w-full lg:h-screen p-4 sm:p-5">
        <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
          <div className="relative w-full lg:w-2/5 p-2 md:p-8">
            <div className="flex justify-between mb-4">
              <Link to="/projects" className="group/back text-xs">
                <ArrowLeft
                  size={24}
                  className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
                />
              </Link>
              {/* <p className="px-2 py-1 text-xs rounded bg-secondary">
                {new Date(project.date).toDateString()}
              </p> */}
            </div>
            {project && <ProjectCard2 {...project} />}
          </div>
          <div
            id="tab-section"
            className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll"
          >
            <div className="min-h-screen">{renderContent()}</div>
          </div>
        </div>
      </main>
    </>
  )
};

export default MyPage;