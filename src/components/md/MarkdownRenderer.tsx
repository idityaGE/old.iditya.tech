import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { components } from './Components';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <Card className={cn(
      "w-full mx-auto",
      "prose prose-stone dark:prose-invert",
      "bg-transparent border-none",
      className
    )}>
      <div className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={components}
          skipHtml={false}
        >
          {content}
        </ReactMarkdown>
      </div>
    </Card>
  );
};

export default MarkdownRenderer;