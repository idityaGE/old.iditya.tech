import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function ConnectCard() {
  return (
    <div className="relative z-20">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href="https://github.com/idityaGE" target="_blank">
          <Github className="size-full" />
        </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href="https://twitter.com/am44910606" target="_blank">
          <Twitter className="size-full" />
        </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3">
          <a href="https://www.linkedin.com/in/aditya-maurya-b0a0b6298/" target="_blank">
          <Linkedin className="size-full" />
        </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 mb-3 ">
          <a href="https://instagram.com/idity_dx" target="_blank">
          <Instagram className="size-full" />
        </a>
        </DockIcon>
      </Dock>
    </div>
  );
}