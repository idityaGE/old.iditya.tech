import { ProjectCard } from "@/components/project/card/project-card";
import { ProjectData } from "@/config/project.config";
import { LinkData } from "@/config/links.config";
import { Mail } from "lucide-react";

const Projects = () => {
  const projects = [...ProjectData];

  return (
    <div>
      <div className="px-2">
        <h1 className="text-3xl font-bold mb-7">Projects</h1>
        <p className="text-base text-muted-foreground mb-5">
          I love building side projects that solve either my own or someone else's problems. Here is an extensive list of all the stuff I have built.
        </p>
        <p className="text-base text-muted-foreground mb-6">
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

        <div className="bg-muted/50 rounded-lg p-4 border border-border flex items-start gap-3 mb-9">
          <div className="text-amber-500 mt-0.5 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">
            These projects are hosted on free services that may occasionally enter hibernation mode.
            If you encounter any issues, please{" "}
            <a href={`mailto:${LinkData.gmail || 'contact@example.com'}`} className="text-primary hover:underline inline-flex items-center gap-1">
              contact me <Mail className="h-3 w-3" />
            </a>
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
