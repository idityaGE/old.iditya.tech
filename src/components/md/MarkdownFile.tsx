// MarkdownFile.tsx
import React, { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownFileProps {
  filePath: string;
  className?: string;
}

const MarkdownFile: React.FC<MarkdownFileProps> = ({ filePath, className }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch(`/content/${filePath}.md`)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      })
      .catch((err) => {
        console.error('Error loading markdown file:', err);
        setContent('Error loading content');
      });
  }, [filePath]);

  return <MarkdownRenderer content={content} className={className} />;
};

export default MarkdownFile;