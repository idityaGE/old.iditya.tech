import React from 'react';
import ReactMarkdown from 'react-markdown';
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
      "w-full max-w-4xl mx-auto p-6",
      "prose prose-stone dark:prose-invert",
      "bg-transparent",
      className
    )}>
      <div className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
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