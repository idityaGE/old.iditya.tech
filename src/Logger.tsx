//@ts-nocheck
import { useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";
import { LinkData } from "@/config/links.config";
import { ProjectData } from "@/config/project.config";
import { PersonalData } from "@/config/personal.config";
import { skillList } from "@/config/skill.config";

// Minimalist Color Palette
const COLORS = {
  primary: '#333',      // Deep charcoal
  secondary: '#666',    // Soft gray
  accent: '#0066CC',    // Muted blue
  highlight: '#000',    // Pure black
  background: '#f4f4f4' // Light gray background
};

// Minimalist Typography
const STYLES = {
  base: 'font-size: 14px; line-height: 1.6;',
  heading: 'font-weight: 600; text-transform: uppercase; letter-spacing: 1px;',
  subheading: 'font-weight: 500;'
};

const commands = [
  {
    name: "help",
    description: "Available commands",
    action: () => {
      console.clear();
      console.log(
        `%c  Portfolio CLI  `,
        `background: ${COLORS.primary}; color: ${COLORS.background}; ${STYLES.base} ${STYLES.heading} padding: 4px 8px;`
      );
      console.log('');
      commands.forEach((cmd) => {
        console.log(
          `%c${cmd.name.padEnd(10)} %c${cmd.description}`,
          `color: ${COLORS.accent}; ${STYLES.base} ${STYLES.heading}`,
          `color: ${COLORS.secondary}; ${STYLES.base}`
        );
      });
    },
  },
  {
    name: "about",
    description: "Personal overview",
    action: () => {
      console.clear();
      console.log(
        `%c${PersonalData.name} | ${PersonalData.title}`,
        `color: ${COLORS.highlight}; ${STYLES.base} ${STYLES.heading}`
      );
      console.log('');
      console.log(
        `%c${PersonalData.description}`,
        `color: ${COLORS.secondary}; ${STYLES.base}`
      );
      console.log('');
      PersonalData.about.forEach((line, index) => {
        console.log(
          `%c${index + 1}. ${line}`,
          `color: ${COLORS.primary}; ${STYLES.base}`
        );
      });
    },
  },
  {
    name: "skills",
    description: "Technical skills",
    action: () => {
      console.clear();
      console.log(
        `%cTechnical Skills`,
        `color: ${COLORS.accent}; ${STYLES.base} ${STYLES.heading}`
      );
      console.log('');
      Object.entries(skillList).forEach(([category, skills]) => {
        console.log(
          `%c${category}:`,
          `color: ${COLORS.primary}; ${STYLES.base} ${STYLES.subheading}`
        );
        console.log(
          `%c${skills.join(' • ')}`,
          `color: ${COLORS.secondary}; ${STYLES.base}`
        );
        console.log('');
      });
    },
  },
  {
    name: "projects",
    description: "Featured work",
    action: () => {
      console.clear();
      console.log(
        `%cProjects`,
        `color: ${COLORS.accent}; ${STYLES.base} ${STYLES.heading}`
      );
      console.log('');
      ProjectData.forEach((project, index) => {
        console.log(
          `%c${index + 1}. ${project.title}`,
          `color: ${COLORS.highlight}; ${STYLES.base} ${STYLES.subheading}`
        );
        console.log(
          `%c${project.description}`,
          `color: ${COLORS.primary}; ${STYLES.base}`
        );
        console.log(
          `%cTech: ${project.techStack.join(' • ')}`,
          `color: ${COLORS.secondary}; ${STYLES.base}`
        );
        console.log(
          `%c🔗 ${project.liveLink}`,
          `color: ${COLORS.accent}; ${STYLES.base}`
        );
        console.log('');
      });
    },
  },
  {
    name: "contact",
    description: "Connect with me",
    action: () => {
      console.clear();
      console.log(
        `%cContact`,
        `color: ${COLORS.accent}; ${STYLES.base} ${STYLES.heading}`
      );
      console.log('');
      Object.entries(LinkData).forEach(([platform, link]) => {
        const url = typeof link === 'string' ? link : link.link;
        console.log(
          `%c${platform.toUpperCase()}: %c${url}`,
          `color: ${COLORS.primary}; ${STYLES.base} ${STYLES.subheading}`,
          `color: ${COLORS.secondary}; ${STYLES.base}`
        );
      });
    },
  },
  {
    name: "clear",
    description: "Clear console",
    action: () => {
      console.clear();
      console.log(
        `%cConsole cleared`,
        `color: ${COLORS.secondary}; ${STYLES.base}`
      );
    },
  },
];

const Logger = () => {
  const isMobile = useDevice();

  useEffect(() => {
    if (isMobile) return;

    // Welcome Message
    console.log(
      `%c${PersonalData.name}'s Portfolio CLI`,
      `color: ${COLORS.background}; background: ${COLORS.primary}; ${STYLES.base} ${STYLES.heading} padding: 4px 8px;`
    );

    // Hint Message
    console.log(
      `%cType 'help' to explore commands`,
      `color: ${COLORS.secondary}; ${STYLES.base}`
    );

    // Dynamically register commands
    const commandMap = commands.reduce((acc, cmd) => {
      acc[cmd.name] = cmd.action;
      return acc;
    }, {} as Record<string, () => void>);

    Object.assign(window, commandMap);

    // Custom error handling
    const originalError = console.error;
    console.error = function (msg, ...args) {
      if (typeof msg === 'string' && msg.includes('is not defined')) {
        console.log(
          `%cUnknown command. Type 'help' to see available commands`,
          `color: ${COLORS.accent}; ${STYLES.base}`
        );
      } else {
        originalError.apply(console, [msg, ...args]);
      }
    };

  }, [isMobile]);

  return null;
};

export default Logger;