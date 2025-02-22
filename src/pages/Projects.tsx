import { ProjectCard } from "@/components/project/card/project-card";
import { ProjectData } from "@/config/project.config";
import { LinkData } from "@/config/links.config";

const Projects = () => {
  const projects = [...ProjectData];

  return (
    <div>
      <div className="px-2">
        <h1 className="text-3xl font-bold mb-7">Projects</h1>
        <p className="text-base text-muted-foreground mb-5">
          I love building side projects that solve either my own or someone else's problems. Here is an extensive list of all the stuff I have built.
        </p>
        <p className="text-base text-muted-foreground mb-4">
          Want to discuss on projects or collaborate on something? Feel free to&nbsp;
          <a
            href={LinkData.twitter}
            target="_blank"
            className="dark:hover:text-white hover:text-black duration-300"
          >
            @<b className="font-semibold underline underline-offset-2 px-1">
              <strong>{LinkData.twitter.split("/").pop()}</strong>
            </b>
          </a>
        </p>
        <div className="mb-4 text-sm">
          <p className="text-rose-600 mb-1">
            Note: These Projects are hosted using free services, which may sometimes enter hibernation mode or encounter issues. If something isn't working, please email me, and I'll resolve it as soon as possible.🙏
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
