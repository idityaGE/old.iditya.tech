
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Data from "@/config/Data.json"
import { EducationList } from "./EducationSection"

const skills = {
  Frontend: ["React", "Next.js", "TailwindCSS", "SCSS", "Headless UI", "ShadCN UI", "Framer Motion", "GSAP", "Redux", "Recoil", "Zustand", "SWR", "Tanstack Query", "Tanstack Router", "React Hook Form", "Jest", "Vitest", "Cypress", "Playwright", "Storybook"],
  "Javascript runtime": ["Node.js", "Bun", "Deno", "Edge runtime (Vercel)", "CF Worker"],
  Backend: ["Hono.js", "Express.js", "Fastapi", "Flask", "Go", "Fiber", "Mux"],
  Firmware: ["C", "C++", "Go", "Rust", "Python", "Javascript"],
  DevOps: ["AWS", "GCP", "Docker", "Kubernetes"]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-75"></div>
              <Avatar className="w-48 h-48 border-4 border-background relative flex items-center justify-center">
                <img src={Data.avatar} alt="Avatar" className="rounded-full" />
              </Avatar>
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-2 text-center">{Data.name}</h1>
            <p className="text-xl text-muted-foreground mb-4 text-center">{Data.title}</p>
            <div className="flex space-x-4">
              <a href={Data.socials.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href={Data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href={Data.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href={Data.socials.mail}>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {Data.about[0]}
              </p>
              <p className="leading-relaxed">
                {Data.about[1]}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <div className="flex flex-wrap gap-1">
                  <h3 className="text-md font-semibold mb-1">{category}: </h3>
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ol className="relative border-l border-primary/30 space-y-8 pl-5">
            {Data.education.map((item, index) => (
              <EducationList key={index} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}