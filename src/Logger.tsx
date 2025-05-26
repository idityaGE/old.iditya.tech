import { useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";
import { LinkData } from "@/config/links.config";
import { ProjectData } from "@/config/project.config";
import { PersonalData } from "@/config/personal.config";
import { skillList } from "@/config/skill.config";

const COLORS = {
  primary: '#3B82F6',     // Blue
  secondary: '#64748B',   // Slate
  accent: '#10B981',      // Emerald
  success: '#059669',     // Green
  warning: '#F59E0B',     // Amber
  text: '#FFFFFF',        // Gray 800
  muted: '#6B7280',       // Gray 500
  bg: '#FFFFFF'           // White
};

const STYLES = {
  title: 'font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 4px;',
  heading: 'font-size: 14px; font-weight: 600; margin: 8px 0;',
  body: 'font-size: 13px; line-height: 1.4;',
  code: 'font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace; font-size: 13px;',
  badge: 'padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;'
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const commands = [
  {
    name: "help",
    description: "Show available commands",
    action: async () => {
      console.group(`%c Portfolio Console`,
        `${STYLES.title} background: ${COLORS.primary}; color: ${COLORS.bg};`);

      console.log(`%cAvailable Commands:`,
        `${STYLES.heading} color: ${COLORS.text};`);

      for (const cmd of commands) {
        await delay(150);
        console.log(`%c${cmd.name}()%c - ${cmd.description}`,
          `${STYLES.code} color: ${COLORS.accent}; font-weight: 600;`,
          `${STYLES.body} color: ${COLORS.secondary};`);
      };

      console.groupEnd();
    },
  },
  {
    name: "about",
    description: "Learn about me",
    action: async () => {
      console.group(`%c About Me`,
        `${STYLES.title}; background: ${COLORS.primary}; color: ${COLORS.text};`);

      console.log(`%c${PersonalData.name}`,
        `${STYLES.heading} color: ${COLORS.text};`);

      await delay(200);
      console.log(`%c${PersonalData.title}`,
        `${STYLES.badge} background: ${COLORS.accent}; color: ${COLORS.bg};`);

      console.log(`\n%c${PersonalData.description}`,
        `${STYLES.body} color: ${COLORS.secondary};`);

      if (PersonalData.about?.length) {
        await delay(300);
        console.log(`\n%cHighlights:`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 600;`);
        for (const point of PersonalData.about) {
          await delay(150);
          console.log(`%c• ${point}`,
            `${STYLES.body} color: ${COLORS.muted};`);
        };
      }

      console.groupEnd();
    },
  },
  {
    name: "skills",
    description: "View technical skills",
    action: async () => {
      console.group(`%c Skills`,
        `${STYLES.title}; background: ${COLORS.primary}; color: ${COLORS.text};`);

      for (const [category, skills] of Object.entries(skillList)) {
        await delay(200);
        console.log(`%c${category}`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 600;`);
        console.log(`%c${skills.join(' • ')}`,
          `${STYLES.body} color: ${COLORS.secondary}; margin-left: 12px;`);
        console.log('')
      }

      console.groupEnd();
    },
  },
  {
    name: "projects",
    description: "Browse my projects",
    action: async () => {
      console.group(`%c Projects`,
        `${STYLES.title}; background: ${COLORS.primary}; color: ${COLORS.text};`);

      for (const project of ProjectData) {
        await delay(300);
        console.group(`%c${project.title}`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 600;`);

        console.log(`%c${project.description}`,
          `${STYLES.body} color: ${COLORS.secondary};`);

        console.log(`%cTech Stack: %c${project.techStack.join(', ')}`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 500;`,
          `${STYLES.body} color: ${COLORS.muted};`);

        if (project.liveLink) {
          console.log(`%c🔗 ${project.liveLink}`,
            `${STYLES.body} color: ${COLORS.accent}; text-decoration: underline;`);
        }

        console.groupEnd();
      };

      console.groupEnd();
    },
  },
  {
    name: "contact",
    description: "Get in touch",
    action: async () => {
      console.group(`%c Contact`,
        `${STYLES.title}; background: ${COLORS.primary}; color: ${COLORS.text};`);

      for (const [platform, link] of Object.entries(LinkData)) {
        await delay(150);
        const url = typeof link === 'string' ? link : link.link;
        console.log(`%c${platform.charAt(0).toUpperCase() + platform.slice(1)}: %c${url}`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 500;`,
          `${STYLES.body} color: ${COLORS.accent}; text-decoration: underline;`);
      };

      console.groupEnd();
    },
  },
  {
    name: "clear",
    description: "Clear console",
    action: () => {
      console.clear();
      console.log(`%c Console cleared`,
        `${STYLES.body} color: ${COLORS.success};`);
    },
  },
];

const Logger = () => {
  const isMobile = useDevice();

  useEffect(() => {
    if (isMobile) return;
    console.clear();
    // Clean welcome message
    console.log(`%c Welcome to ${PersonalData.name}'s Portfolio`,
      `${STYLES.title} background: ${COLORS.primary}; color: ${COLORS.bg};`);

    console.log(`%cInteractive portfolio console - type help() to get started`,
      `${STYLES.body} color: ${COLORS.secondary}; font-style: italic;`);

    console.log(''); // Empty line for spacing

    // Register commands globally
    const commandMap = commands.reduce((acc, cmd) => {
      acc[cmd.name] = cmd.action;
      return acc;
    }, {} as Record<string, () => void>);

    // Add commands to window object
    Object.assign(window, commandMap);

    // Show quick hint
    setTimeout(() => {
      console.log(`%c💡 Quick tip: Try typing about() or projects()`,
        `${STYLES.body} color: ${COLORS.warning}; background: #45b7d1; padding: 4px 8px; border-radius: 4px;`);
    }, 1000);

  }, [isMobile]);

  return null;
};

export default Logger;
