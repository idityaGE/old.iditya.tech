import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Data from "@/config/Data.json"

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
            <div className="space-y-4 text-zinc-800 dark:text-zinc-400">
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

type EducationListProps = {
  year: string
  title: string
  institution: string,
  location: string
  link?: string
}

const EducationList = ({
  year,
  title,
  institution,
  location,
  link
}: EducationListProps) => {
  return (
    <li>
      <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background"></div>
      <time className="mb-1 text-sm font-normal leading-none text-primary/80">{year}</time>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-base text-muted-foreground">
        {link ? (
          <Link target="_blank" to={link} className="hover:text-primary transition-colors">
            {institution}
          </Link>
        ) : (
          institution
        )}
        , {location}
      </p>
    </li>
  )
}
