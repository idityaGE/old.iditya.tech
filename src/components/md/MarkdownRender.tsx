import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils'; // Utility for combining class names

// Types for custom components
type MarkdownComponentProps = {
  node?: any;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

interface VideoPlayerProps {
  url: string;
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const isYouTubeUrl = url.includes('youtube.com') || url.includes('youtu.be');
  const youtubeId = isYouTubeUrl ? getYouTubeId(url) : null;

  if (youtubeId) {
    return (
      <div className="relative w-full pt-[56.25%] mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      className="w-full max-h-[70vh] mb-4 rounded-lg"
      controls
      src={url}
    >
      Your browser does not support the video tag.
    </video>
  );
};

type CustomComponents = {
  [key: string]: React.FC<MarkdownComponentProps>;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  const components: CustomComponents = {
    // Headers with theme-aware styles
    h1: ({ node, ...props }: MarkdownComponentProps) =>
      <h1 className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-6",
        "text-foreground"
      )} {...props} />,
    h2: ({ node, ...props }: MarkdownComponentProps) =>
      <h2 className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight mb-3 mt-5",
        "text-foreground"
      )} {...props} />,
    h3: ({ node, ...props }: MarkdownComponentProps) =>
      <h3 className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight mb-2 mt-4",
        "text-foreground"
      )} {...props} />,

    // Paragraphs and text with theme support
    p: ({ node, children, ...props }: MarkdownComponentProps) => {
      const childArray = React.Children.toArray(children);
      const videoChild = childArray.find(child =>
        typeof child === 'string' &&
        (child.startsWith('video:') || child.startsWith('youtube:'))
      );

      if (videoChild && typeof videoChild === 'string') {
        const url = videoChild.replace(/^(video:|youtube:)/, '').trim();
        return <VideoPlayer url={url} />;
      }

      return (
        <p className={cn(
          "leading-7 mb-4",
          "text-muted-foreground"
        )} {...props}>
          {children}
        </p>
      );
    },

    // Lists with theme support
    ul: ({ node, ...props }: MarkdownComponentProps) =>
      <ul className={cn(
        "list-disc list-inside space-y-2 mb-4",
        "text-muted-foreground"
      )} {...props} />,
    ol: ({ node, ...props }: MarkdownComponentProps) =>
      <ol className={cn(
        "list-decimal list-inside space-y-2 mb-4",
        "text-muted-foreground"
      )} {...props} />,
    li: ({ node, ...props }: MarkdownComponentProps) =>
      <li className="leading-7" {...props} />,

    // Code blocks with theme support
    code: ({ node, inline, className, children, ...props }: MarkdownComponentProps) => {
      const match = /language-(\w+)/.exec(className || '');
      return inline ? (
        <code className={cn(
          "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
          "bg-muted text-muted-foreground"
        )} {...props}>
          {children}
        </code>
      ) : (
        <pre className={cn(
          "mb-4 mt-4 overflow-x-auto rounded-lg p-4",
          "bg-muted font-mono text-sm"
        )}>
          <code className={`language-${match?.[1] || ''}`} {...props}>
            {children}
          </code>
        </pre>
      );
    },

    // Tables with theme support (using shadcn/ui components)
    table: ({ children }: MarkdownComponentProps) => (
      <div className="w-full overflow-auto mb-4">
        <Table>{children}</Table>
      </div>
    ),
    thead: ({ children }: MarkdownComponentProps) =>
      <TableHeader>{children}</TableHeader>,
    tbody: ({ children }: MarkdownComponentProps) =>
      <TableBody>{children}</TableBody>,
    tr: ({ children }: MarkdownComponentProps) =>
      <TableRow>{children}</TableRow>,
    th: ({ children }: MarkdownComponentProps) =>
      <TableHead className="font-bold">{children}</TableHead>,
    td: ({ children }: MarkdownComponentProps) =>
      <TableCell>{children}</TableCell>,

    // Blockquotes with theme support
    blockquote: ({ node, ...props }: MarkdownComponentProps) => (
      <blockquote className={cn(
        "mt-6 border-l-2 pl-6 italic",
        "border-muted-foreground text-muted-foreground"
      )} {...props} />
    ),

    // Links with theme support
    a: ({ node, href, ...props }: MarkdownComponentProps & { href?: string }) => (
      <a
        className={cn(
          "font-medium underline underline-offset-4",
          "text-primary hover:text-primary/80"
        )}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),

    // Images with theme support
    img: ({ node, alt, src, ...props }: MarkdownComponentProps & { alt?: string; src?: string }) => (
      <img
        className={cn(
          "rounded-md border",
          "border-muted max-w-full h-auto mb-4"
        )}
        loading="lazy"
        alt={alt || ''}
        src={src}
        {...props}
      />
    ),
  };

  return (
    <Card className={cn(
      "w-full max-w-4xl mx-auto p-6",
      "prose prose-stone dark:prose-invert", // Add prose styles with dark mode support
      "bg-transparent",
      className
    )}>
      <div className="max-w-none">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </Card>
  );
};

export default MarkdownRenderer;