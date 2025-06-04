import { useEffect } from "react";
import { LinkData } from "@/config/links.config";
import { ProjectData } from "@/config/project.config";
import { PersonalData } from "@/config/personal.config";
import { skillList } from "@/config/skill.config";

const COLORS = {
  primary: '#60A5FA',     // Light Blue for titles
  secondary: '#A3A3A3',   // Light Gray for descriptions
  accent: '#34D399',      // Green for commands/links
  success: '#10B981',     // Emerald for success messages
  warning: '#FBBF24',     // Amber for warnings/tips
  error: '#F87171',       // Red for errors
  text: '#F3F4F6',        // Light gray for main text
  muted: '#9CA3AF',       // Muted gray for secondary text
  highlight: '#A78BFA',   // Purple for highlights
  bg: '#1F2937'           // Dark background
};

const STYLES = {
  title: 'font-size: 18px; font-weight: 700; padding: 8px 16px; border-radius: 6px;',
  heading: 'font-size: 16px; font-weight: 600;',
  body: 'font-size: 14px; line-height: 1.5;',
  code: 'font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace; font-size: 13px;',
  badge: 'padding: 4px 8px; border-radius: 8px; font-size: 12px; font-weight: 500;'
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const commands = [
  {
    name: "help",
    description: "Show available commands",
    action: async () => {
      console.group(`%c💼 Portfolio Console`,
        `${STYLES.title} background: ${COLORS.primary}; color: ${COLORS.bg};`);

      console.log(`%cAvailable Commands:`,
        `${STYLES.heading} color: ${COLORS.text};`);

      for (const cmd of commands) {
        await delay(150);
        console.log(`%c${cmd.name}()%c - ${cmd.description}`,
          `${STYLES.code} color: ${COLORS.accent}; font-weight: 600;`,
          `${STYLES.body} color: ${COLORS.secondary};`);
      }

      console.groupEnd();
    },
  },
  {
    name: "about",
    description: "Learn about me",
    action: async () => {
      console.group(`%c👋 About Me`,
        `${STYLES.heading} color: ${COLORS.primary};`);

      console.log(`%c${PersonalData.name}`,
        `${STYLES.heading} color: ${COLORS.text}; font-size: 18px;`);

      await delay(200);
      console.log(`%c${PersonalData.title}`,
        `${STYLES.badge} background: ${COLORS.accent}; color: ${COLORS.bg};`);

      console.log(`\n%c${PersonalData.description}`,
        `${STYLES.body} color: ${COLORS.secondary};`);

      if (PersonalData.about?.length) {
        await delay(300);
        console.log(`\n%cHighlights:`,
          `${STYLES.body} color: ${COLORS.highlight}; font-weight: 600;`);
        for (const point of PersonalData.about) {
          await delay(150);
          console.log(`%c• ${point}`,
            `${STYLES.body} color: ${COLORS.muted};`);
        }
      }

      console.groupEnd();
    },
  },
  {
    name: "skills",
    description: "View technical skills",
    action: async () => {
      console.group(`%c⚡ Skills`,
        `${STYLES.heading} color: ${COLORS.primary};`);

      for (const [category, skills] of Object.entries(skillList)) {
        await delay(400);
        console.log(`%c${category}`,
          `${STYLES.body} color: ${COLORS.highlight}; font-weight: 600;`);
        console.log(`%c${Array.isArray(skills) ? skills.join(' • ') : skills}`,
          `${STYLES.body} color: ${COLORS.text}; margin-left: 12px;`);
        console.log('');
      }

      console.groupEnd();
    },
  },
  {
    name: "projects",
    description: "Browse my projects",
    action: async () => {
      console.group(`%c🚀 Projects`,
        `${STYLES.heading} color: ${COLORS.primary};`);

      for (const project of ProjectData) {
        await delay(500);
        console.group(`%c${project.title}`,
          `${STYLES.body} color: ${COLORS.text}; font-weight: 600; font-size: 15px;`);

        console.log(`%c${project.description}`,
          `${STYLES.body} color: ${COLORS.secondary};`);

        console.log(`%cTech Stack: %c${project.techStack.join(', ')}`,
          `${STYLES.body} color: ${COLORS.highlight}; font-weight: 500;`,
          `${STYLES.body} color: ${COLORS.muted};`);

        if (project.liveLink) {
          console.log(`%c🔗 ${project.liveLink}`,
            `${STYLES.body} color: ${COLORS.accent}; text-decoration: underline;`);
        }

        console.groupEnd();
      }

      console.groupEnd();
    },
  },
  {
    name: "contact",
    description: "Get in touch",
    action: async () => {
      console.group(`%c📬 Contact`,
        `${STYLES.heading} color: ${COLORS.primary};`);

      for (const [platform, link] of Object.entries(LinkData)) {
        await delay(150);
        const url = typeof link === 'string' ? link : link.link;
        console.log(`%c${platform.charAt(0).toUpperCase() + platform.slice(1)}: %c${url}`,
          `${STYLES.body} color: ${COLORS.highlight}; font-weight: 500;`,
          `${STYLES.body} color: ${COLORS.accent}; text-decoration: underline;`);
      }

      console.groupEnd();
    },
  },
  {
    name: "clear",
    description: "Clear console",
    action: () => {
      console.clear();
      console.log(`%c✨ Console cleared`,
        `${STYLES.body} color: ${COLORS.success};`);
    },
  },
];

const Logger = () => {
  useEffect(() => {
    console.clear();

    // Welcome message with gradient-like effect
    console.log(`%c🎉 Welcome to ${PersonalData.name}'s Portfolio`,
      `${STYLES.title} background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent}); color: ${COLORS.bg}; border-radius: 8px;`);

    console.log(`%cInteractive console - type help() to explore`,
      `${STYLES.body} color: ${COLORS.secondary}; font-style: italic;`);

    console.log('');

    // Register commands globally
    const commandMap = commands.reduce((acc, cmd) => {
      acc[cmd.name] = cmd.action;
      return acc;
    }, {} as Record<string, () => void>);

    Object.assign(window, commandMap);

    setTimeout(() => {
      console.log(`%c💡 Try: about() | projects() | skills() | contact()`,
        `${STYLES.body} color: ${COLORS.bg}; background: ${COLORS.warning}; padding: 6px 12px; border-radius: 6px; font-weight: 500;`);
    }, 1500);

  }, []);

  return null;
};

export default Logger;
