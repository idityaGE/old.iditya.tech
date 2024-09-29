import { ProjectCard } from "@/components/project/card/project-card"

const projects = [
  {
    title: "Discord Clone",
    description: "Realtime chat application with voice and video call features. Built with Next js, TypeScript, and Tailwind CSS.",
    images: ["./Discord_1.png", "./Discord_2.png", "./Discord_3.png"],
    liveLink: "https://discord-idityage.up.railway.app",
    githubLink: "https://github.com/idityaGE/discord-app",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "LiveKit", "Prisma", "shadcn ui", "tanstack-query", "Uploadthing", "Clerk"],
  },
  {
    title: "Contact Form",
    description: "A contact form that sends an email to the website owner. Built with Next.js, TypeScript, and Tailwind CSS.",
    images: ["./contact.png"],
    liveLink: "https://contactuspage-two.vercel.app/",
    githubLink: "https://github.com/idityaGE/Projects/tree/main/contact_us_form",
    techStack: ["Next.js", "TypeScript", "React Hook Form", "Resend", "Shadcn UI"],
  }
]


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
          <a href="https://instagram.com/idity_dx" target='_blank' className='dark:hover:text-white hover:text-black  duration-300'>@<b className='font-semibold underline underline-offset-2'><strong>idity_dx</strong></b> </a>
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