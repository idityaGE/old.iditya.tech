import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-75"></div>
                <Avatar className="w-48 h-48 border-4 border-background relative flex items-center justify-center">
                <img src="ava.jpg" alt="Avatar" className="rounded-full" />
                </Avatar>
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-2 text-center">Aditya</h1>
            <p className="text-xl text-muted-foreground mb-4 text-center">Student / Coder</p>
            <div className="flex space-x-4">
              <a href="https://github.com/idityaGE" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/aditya-maurya-b0a0b6298/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="https://twitter.com/am44910606" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </a>
              <a href="mailto:am44910606@gmail.com?subject=Hello%20!">
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
                Hello! I'm a passionate developer with a keen interest in creating elegant and efficient solutions.
                With a strong foundation in computer science and years of hands-on experience, I specialize in
                full-stack development, focusing on modern web technologies.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community meetups. I'm always excited about new challenges
                and opportunities to grow both personally and professionally.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ol className="relative border-l border-primary/30 space-y-8">
            <li className="ml-6">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background"></div>
              <time className="mb-1 text-sm font-normal leading-none text-primary/80">2023 ...</time>
              <h3 className="text-lg font-semibold mt-2">Bachelor's Degree in Computer Science & Engineering</h3>
              <p className="text-base text-muted-foreground">
                <Link target="_blank" to="https://curaj.ac.in" className="hover:text-primary transition-colors">
                  Central University of Rajasthan
                </Link>
                , Ajmer, India
              </p>
            </li>
            <li className="ml-6">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-background"></div>
              <time className="mb-1 text-sm font-normal leading-none text-primary/80">2018 - 2022</time>
              <h3 className="text-lg font-semibold mt-2">High School & Intermediate</h3>
              <p className="text-base text-muted-foreground">
                <Link target="_blank" to="https://cpsmau.com" className="hover:text-primary transition-colors">
                  Chandra Public School
                </Link>
                , Mau</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}