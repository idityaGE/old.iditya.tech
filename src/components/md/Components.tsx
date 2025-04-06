import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import React from 'react';
import 'highlight.js/styles/github-dark.css';
import { VideoPlayer } from './Videoplayer';
import ImagePreview from '@/components/ImagePreview';

type MarkdownComponentProps = {
  node?: any;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
};

type CustomComponents = {
  [key: string]: React.FC<MarkdownComponentProps>;
};

const components: CustomComponents = {
  p: ({ node, children, ...props }: MarkdownComponentProps) => {
    // Convert to string and check for video/youtube prefix
    const content = React.Children.toArray(children)
      .map(child => {
        if (typeof child === 'string') return child;
        if (React.isValidElement(child) && typeof child.props.children === 'string') {
          return child.props.children;
        }
        return '';
      })
      .join('');

    // Check for video/youtube prefix at the start of the content
    if (content.trim().match(/^(video:|youtube:)\s*https?:\/\/.+/i)) {
      const url = content.replace(/^(video:|youtube:)\s*/i, '').trim();
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

  // Headers with theme-aware styles
  h1: ({ node, ...props }: MarkdownComponentProps) =>
    <h1 className={cn(
      "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-6",
      "text-foreground"
    )} {...props} />,
  h2: ({ node, ...props }: MarkdownComponentProps) =>
    <h2 className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight mb-3 mt-5",
      "text-foreground"
    )} {...props} />,
  h3: ({ node, ...props }: MarkdownComponentProps) =>
    <h3 className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-4",
      "text-foreground"
    )} {...props} />,

  // Lists with theme support
  ul: ({ node, className, children, ...props }: MarkdownComponentProps) => (
    <ul className={cn(
      "my-3 ml-2 list-disc [&>li]:mt-2",
      "text-muted-foreground",
      className
    )} {...props}>
      {children}
    </ul>
  ),

  ol: ({ node, className, children, ...props }: MarkdownComponentProps) => (
    <ol className={cn(
      "my-6 ml-6 list-decimal [&>li]:mt-2",
      "text-muted-foreground",
      className
    )} {...props}>
      {children}
    </ol>
  ),

  li: ({ node, className, children, ...props }: MarkdownComponentProps) => (
    <li className={cn(
      "leading-7 [&>ul]:my-0 [&>ol]:my-0",
      className
    )} {...props}>
      {children}
    </li>
  ),

  blockquote: ({ node, ...props }: MarkdownComponentProps) => (
    <blockquote className={cn(
      "mt-6 border-l-2 pl-6 italic",
      "border-muted-foreground text-muted-foreground"
    )} {...props} />
  ),

  strong: ({ node, children, ...props }: MarkdownComponentProps) => (
    <strong
      className={cn(
        "font-bold",
        "text-foreground"
      )}
      {...props}
    >
      {children}
    </strong>
  ),

  // Code blocks with theme support
  code: ({ node, inline, className, children, ...props }: MarkdownComponentProps) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <pre className={cn(
        "mb-4 mt-4 overflow-x-auto rounded-lg p-4",
        "bg-muted font-mono text-sm"
      )}>
        <code className={cn(className, 'hljs', "rounded-lg")} {...props}>
          {children}
        </code>
      </pre>
    ) : (
      <code className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        "bg-muted text-muted-foreground",
        className
      )} {...props}>
        {children}
      </code>
    );
  },

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

  img: ({ node, alt, src, ...props }: MarkdownComponentProps & { alt?: string; src?: string }) => (
    <ImagePreview
      className="rounded-md border-2 border-muted mb-4"
      alt={alt || 'Project Preview Images'}
      src={src}
      {...props}
    />
  ),
};

export { components, VideoPlayer };
