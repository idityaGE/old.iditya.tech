import { useMemo, memo } from 'react';
import { ExternalLink, Github, StepForward } from 'lucide-react';
import type { ProjectCardProps } from "@/types/project";
import { Link } from 'react-router-dom';

export const ProjectCard = memo(({
  title,
  description,
  images,
  liveLink,
  githubLink,
  techStack,
  slug
}: ProjectCardProps) => {
  // Memoize tech stack to prevent unnecessary re-renders
  const memoizedTechStack = useMemo(() =>
    techStack.map((tag) => (
      <p
        key={tag}
        className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-default"
      >
        {tag}
      </p>
    )), [techStack]);

  const imageUrl = useMemo(() => images[0], [images]);

  return (
    <div className="flex p-3 md:p-6 flex-col-reverse justify-between gap-2 rounded-xl border overflow-hidden md:flex-row group shadow-sm hover:shadow-lg dark:shadow-[0px_0px_10px_rgba(255,255,255,0.05)] dark:hover:shadow-[0px_0px_20px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out">
      <div className="flex flex-col w-full tablet:w-3/5">
        <Link
          to={`/projects/${slug}`}
          className="block mb-3"
          aria-label={`View details of ${title} project`}
        >
          <div className="inline-flex items-center gap-1 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold font-heading">{title}</h2>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl line-clamp-2">
            {description}
          </p>
        </Link>

        <div className="flex items-center gap-2 flex-wrap mb-3">
          {memoizedTechStack}
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}
            className="inline-flex items-center px-3 py-1.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md transition-colors"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${title}`}
              className="inline-flex items-center px-3 py-1.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="w-full py-3 md:w-2/5 aspect-video overflow-hidden rounded-xl transition-all duration-300 ease-in-out transform-gpu group-hover:scale-[1.02] flex items-center justify-center">
        <Link
          to={`/projects/${slug}`}
          aria-label={`View details of ${title} project`}
        >
          <img
            src={imageUrl}
            alt={`${title} project screenshot`}
            width={400}
            height={225}
            className="object-cover rounded-sm w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
