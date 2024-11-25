import { ProjectCard } from "@/components/project/card/project-card"
import { ProjectData } from "@/config/project.config"
import { LinkData } from "@/config/links.config"

const projects = [...ProjectData]

const Projects = () => {
  return (
    <div>
      <div className="px-1">
        <h1 className="text-3xl font-bold mb-7">Projects</h1>
        <p className="text-base text-muted-foreground mb-5">
          I love building side projects that solve either my own or someone else's problems. Here is an extensive list of all the stuff I have built.
        </p>
        <p className="text-base text-muted-foreground mb-4">
          Want to discuss on projects or collaborate on something? Feel free to&nbsp;
          <a href={LinkData.instagram.link} target='_blank' className='dark:hover:text-white hover:text-black  duration-300'>@<b className='font-semibold underline underline-offset-2'><strong>{LinkData.instagram.username}</strong></b> </a>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects