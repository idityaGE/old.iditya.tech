import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { LinkData } from "@/config/links.config";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function ConnectCard() {
  return (
    <div className="relative z-20">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href={LinkData.github} target="_blank" about="GitHub Link">
            <Github className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href={LinkData.twitter} target="_blank" about="Twitter Link">
            <Twitter className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href={LinkData.linkedin} target="_blank" about="Linkedin Link">
            <Linkedin className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3 ">
          <a href={LinkData.instagram.link} target="_blank" about="Instagram Link">
            <Instagram className="size-full" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}