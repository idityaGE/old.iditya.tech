import { ProjectCard } from "@/components/project/card/project-card"

const Projects = () => {
  return (
    <div>
      Comming Soon...
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="Project 1"
          description="Project 1 description"
          images={["./gradient.webp", "./ava.jpg", "./gradient.webp"]}
          liveLink="https://google.com"
          githubLink="https://github.com/idityage"
          techStack={["React", "TypeScript", "Tailwind CSS"]}
        />
        <ProjectCard
          title="Project 1"
          description="Project 1 description"
          images={["/project-1.png", "/project-1.png", "/project-1.png"]}
          liveLink="https://google.com"
          githubLink="https://github.com/idityage"
          techStack={["React", "TypeScript", "Tailwind CSS"]}
        />
      </div>
    </div>
  )
}

export default Projects