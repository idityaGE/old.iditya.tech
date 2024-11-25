import { ExternalLink, Github } from 'lucide-react'
import type { ProjectCardProps } from "@/types/project"
import { Button } from '@/components/ui/button'


export function ProjectCard2({ title, description, images, liveLink, githubLink, techStack }: ProjectCardProps) {
  return (
    <div>
      <img
        src={images[0]}
        width={600}
        height={400}
        className='border rounded-xl mx-auto'
      />

      <h1 className="text-3xl font-bold py-1 mt-6 mb-4">{title}</h1>
      <p className="text-sm text-secondary-foreground/80 font-light max-w-2xl mb-4">
        {description}
      </p>
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {techStack.map((tag) => (
            <p
              key={tag}
              className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs cursor-default"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Button asChild variant="link" className='border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        {liveLink && <Button asChild variant="link" className='border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>}
      </div>
    </div>
  )
}