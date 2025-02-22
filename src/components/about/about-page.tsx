import { memo } from "react"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import EducationList from "./EducationSection"
import { skillList } from "@/config/skill.config"

import { LinkData } from "@/config/links.config"
import { PersonalData } from "@/config/personal.config"
import { EducationData } from "@/config/education.config"

function AboutPage() {

  const links = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: LinkData.github },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: LinkData.linkedin },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: LinkData.twitter },
    { name: 'Mail', icon: <Mail className="h-5 w-5" />, url: LinkData.mail },
  ];

  return (
    <div className="min-h-screen pt-4 md:pt-6 pb-12">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-75"></div>
              <Avatar className="w-48 h-48 border-4 border-background relative flex items-center justify-center">
                <img src={PersonalData.avatar} alt="Avatar" className="rounded-full" />
                {/* <img src="https://i.pinimg.com/originals/75/33/08/753308fa862107cd8800bf6e9ef50e95.gif" alt="Avatar" className="rounded-full" /> */}
              </Avatar>
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-2 text-center">{PersonalData.name}</h1>
            <p className="text-xl text-muted-foreground mb-4 text-center">{PersonalData.title}</p>
            <div className="flex space-x-4">
              {links.map(({ name, icon, url }) => (
                <a href={url} key={name}>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" about={name}>
                    {icon}
                    <span className="sr-only">{name}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="space-y-4">
              {PersonalData.about.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-muted-foreground">
                  {paragraph.split(':').length > 1 ? <span className="font-bold dark:text-white">{paragraph.split(':')[0]}:</span> : null}
                  {paragraph.split(':').length > 1 ? paragraph.split(':').slice(1) : paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-3 pl-3">
            {Object.entries(skillList).map(([category, skillList]) => (
              <div key={category}>
                <div className="flex flex-wrap gap-1">
                  <h3 className="text-md font-bold">{category}: </h3>
                  {skillList.map((skill) => (
                    <p
                      key={skill}
                      className="px-1 py-1 rounded bg-muted text-muted-foreground text-xs cursor-default"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ol className="relative border-l border-primary/30 space-y-8 pl-5">
            {EducationData.map((item, index) => (
              <EducationList key={index} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutPage)