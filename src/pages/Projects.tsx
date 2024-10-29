import { ProjectCard } from "@/components/project/card/project-card"
import Data from "@/config/Data.json"

const projects = [...Data.projects]

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
          <a href={Data.socials.instagram.link} target='_blank' className='dark:hover:text-white hover:text-black  duration-300'>@<b className='font-semibold underline underline-offset-2'><strong>{Data.socials.instagram.username}</strong></b> </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects