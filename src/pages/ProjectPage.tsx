import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { useLocation } from 'react-router-dom';

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

  return <div className="min-h-screen">{renderContent()}</div>;
};

export default MyPage;