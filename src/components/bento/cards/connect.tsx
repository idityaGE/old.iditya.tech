import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { LinkData } from "@/config/links.config";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const ConnectCard = () => {
  const socialLinks = [
    {
      Icon: Github,
      href: LinkData.github,
      about: "GitHub Link"
    },
    {
      Icon: Twitter,
      href: LinkData.twitter,
      about: "Twitter Link"
    },
    {
      Icon: Linkedin,
      href: LinkData.linkedin,
      about: "Linkedin Link"
    },
    {
      Icon: Instagram,
      href: LinkData.instagram.link,
      about: "Instagram Link"
    }
  ]

  return (
    <div className="relative z-20">
      <Dock magnification={60} distance={100} className="flex gap-5">
        {socialLinks.map(({ Icon, href, about }) => (
          <DockIcon
            key={href}
            className="bg-black/10 dark:bg-white/10 p-1 mb-2 scale-110"
          >
            <a href={href} target="_blank" rel="noopener noreferrer" about={about}>
              <Icon className="size-full" />
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default ConnectCard;