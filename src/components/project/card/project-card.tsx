import { useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectCardProps = {
  title: string
  description: string
  images: string[]
  liveLink: string
  githubLink: string
  techStack: string[]
}

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Project image ${currentIndex + 1}`}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={prevImage} className="text-white bg-black/50 hover:bg-black/70">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextImage} className="text-white bg-black/50 hover:bg-black/70">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectCard({ title, description, images, liveLink, githubLink, techStack }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <ImageCarousel images={images} />
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex justify-between w-full">
          <Button asChild variant="outline" className='border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" className='border border-input bg-background hover:bg-accent hover:text-accent-foreground'>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}