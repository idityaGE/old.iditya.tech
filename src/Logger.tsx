//@ts-nocheck
import { useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";
import { LinkData } from "@/config/links.config";
import { ProjectData } from "@/config/project.config";
import { PersonalData } from "@/config/personal.config";
import { skillList } from "@/config/skill.config";

// ASCII Art for Logger
const LOGGER_ASCII = `
 _____         _   _                
|  __ \\       | | | |               
| |__) |__ ___| |_| | ___   _       
|  ___/ __/ __| __| |/ _ \\ (_)      
| |   \\__ \\__ \\ |_| | (_) | _       
|_|   |___/___/\\__|_|\\___/ (_)      
`;

// Define terminal commands and their actions
interface TerminalCommand {
  name: string;
  description: string;
  action: () => void;
}

const createColoredLog = (text: string, color: string, style: string = '') =>
  `%c${text}`;

const commands: TerminalCommand[] = [
  {
    name: "help",
    description: "Show available commands",
    action: () => {
      console.clear();
      console.log(createColoredLog(LOGGER_ASCII, '#007acc'), 'color: #007acc; font-family: monospace;');
      console.log(
        "%c🛠 Available Commands:",
        "color: #4caf50; font-size: 18px; font-weight: bold;"
      );
      commands.forEach((cmd) => {
        console.log(
          `%c${cmd.name.padEnd(10)} %c- ${cmd.description}`,
          "color: #e91e63; font-weight: bold;",
          "color: #2196f3;"
        );
      });
    },
  },
  {
    name: "about",
    description: "Learn about me",
    action: () => {
      console.clear();
      console.log(
        `%c👤 ${PersonalData.name} (${PersonalData.nickname})`,
        "color: #673ab7; font-size: 18px; font-weight: bold;"
      );
      console.log(
        `%c${PersonalData.description}`,
        "color: #4caf50; font-size: 14px;"
      );
      console.log("%cMore about me:", "color: #ff9800; font-size: 16px;");
      PersonalData.about.forEach((line, index) => {
        console.log(`%c${index + 1}. ${line}`, "color: #2196f3;");
      });
    },
  },
  {
    name: "skills",
    description: "View my technical skills",
    action: () => {
      console.clear();
      console.log(
        "%c🛠 Technical Skills:",
        "color: #009688; font-size: 18px; font-weight: bold;"
      );
      Object.entries(skillList).forEach(([category, skills]) => {
        console.log(`%c${category}:`, "color: #e91e63; font-weight: bold;");
        console.log(`%c${skills.join(', ')}`, "color: #2196f3;");
      });
    },
  },
  {
    name: "projects",
    description: "See my projects",
    action: () => {
      console.clear();
      console.log(
        "%c🚀 Featured Projects:",
        "color: #009688; font-size: 18px; font-weight: bold;"
      );
      ProjectData.forEach((project, index) => {
        console.log(
          `%c${index + 1}. ${project.title}`,
          "color: #e91e63; font-weight: bold;"
        );
        console.log(`%c${project.description}`, "color: #2196f3;");
        console.log(
          `%c🔗 Tech Stack: ${project.techStack.join(', ')}`,
          "color: #ff9800;"
        );
        console.log(
          `%c🌐 Live: ${project.liveLink} | 💻 Code: ${project.githubLink}`,
          "color: #4caf50;"
        );
      });
    },
  },
  {
    name: "contact",
    description: "Get in touch",
    action: () => {
      console.clear();
      console.log(
        "%c📫 Contact Information:",
        "color: #ff5722; font-size: 18px; font-weight: bold;"
      );
      Object.entries(LinkData).forEach(([platform, link]) => {
        const url = typeof link === 'string' ? link : link.link;
        console.log(`%c${platform.toUpperCase()}: ${url}`,
          platform === 'instagram' ? "color: #e91e63;" :
            platform === 'twitter' ? "color: #1da1f2;" :
              platform === 'github' ? "color: #333;" :
                platform === 'linkedin' ? "color: #0077b5;" :
                  "color: #ff9800;"
        );
      });
    },
  },
  {
    name: "clear",
    description: "Clear the console",
    action: () => {
      console.clear();
      console.log(
        "%cConsole cleared!",
        "color: #f44336; font-size: 16px;"
      );
    },
  },
];

const Logger = () => {
  const isMobile = useDevice(); // Check if the device is mobile

  useEffect(() => {
    // Enable logger only on non-mobile devices
    if (isMobile) return;

    // Welcome Message
    console.log(
      `%cWelcome to ${PersonalData.name}'s Portfolio! 🚀`,
      "color: white; background: #007acc; font-size: 20px; font-weight: bold; padding: 5px; border-radius: 5px;"
    );

    // Hint Message
    console.log(
      "%c💡 Type 'help' to explore available commands!",
      "color: #4caf50; font-size: 16px;"
    );

    // Dynamically register commands
    const commandMap = commands.reduce((acc, cmd) => {
      acc[cmd.name] = cmd.action;
      return acc;
    }, {} as Record<string, () => void>);

    // Attach commands to window object safely
    Object.assign(window, commandMap);

    // Optional: Custom error handling for undefined commands
    const originalError = console.error;
    console.error = function (msg, ...args) {
      if (typeof msg === 'string' && msg.includes('is not defined')) {
        console.log(
          "%c❌ Unknown command. Type 'help' to see available commands.",
          "color: #f44336;"
        );
      } else {
        originalError.apply(console, [msg, ...args]);
      }
    };

  }, [isMobile]);

  return null; // No UI rendering
};

export default Logger;