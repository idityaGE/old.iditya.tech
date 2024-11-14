import React from 'react';
import MarkdownRenderer from '@/components/md/MarkdownRenderer';
import { exampleMd } from '@/content/example';

const MyPage: React.FC = () => {

  return (
    <div className=''>
      <MarkdownRenderer content={exampleMd} />
    </div>
  );
};

export default MyPage;