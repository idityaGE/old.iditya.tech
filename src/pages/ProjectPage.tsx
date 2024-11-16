import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { useLocation } from 'react-router-dom';
// import { exampleMd } from '@/content/example';

const MyPage: React.FC = () => {
  const [mdContent, setMdContent] = useState(``)
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<any>(null);

  const location = useLocation();
  const fileName = location.pathname.split('/').pop();
  useEffect(() => {
    async function fetchMd() {
      try {
        const content = await import(/* @vite-ignore */ `/src/content/${fileName}.ts`);
        setMdContent(content.default);
        setIsLoaded(true);
      } catch (error: any) {
        setError(error);
      }
    }
    fetchMd();

    return () => {
      setMdContent('');
    }
  }, [location.pathname]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <MarkdownRenderer content={mdContent} />
    </div>
  );
};

export default MyPage;