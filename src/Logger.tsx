//@ts-nocheck
import { useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";
import { LinkData } from "@/config/links.config";
import { ProjectData } from "@/config/project.config";
import { PersonalData } from "@/config/personal.config";

// Define terminal commands and their actions
interface TerminalCommand {
  name: string;
  description: string;
  action: () => void;
}

const commands: TerminalCommand[] = [
  {
    name: "help",
    description: "Show available commands",
    action: () => {
      console.clear();
      console.log(
        "%c🛠 Available Commands:",
        "color: #4caf50; font-size: 18px; font-weight: bold;"
      );
      commands.forEach((cmd) => {
        console.log(
          `%c${cmd.name} %c- ${cmd.description}`,
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
        `%c👋 Hi there! I'm ${PersonalData.name} (${PersonalData.nickname})!`,
        "color: #673ab7; font-size: 16px;"
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
    name: "projects",
    description: "See my projects",
    action: () => {
      console.clear();
      console.log(
        "%c🚀 Here are my top projects:",
        "color: #009688; font-size: 18px; font-weight: bold;"
      );
      ProjectData.forEach((project, index) => {
        console.log(
          `%c${index + 1}. ${project.title}`,
          "color: #e91e63; font-weight: bold;"
        );
        console.log(`%c${project.description}`, "color: #2196f3;");
        console.log(
          `%c🔗 Live: ${project.liveLink} | 🔗 Code: ${project.githubLink}`,
          "color: #ff9800;"
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
        "%c📫 Reach out to me through the following platforms:",
        "color: #ff5722; font-size: 18px; font-weight: bold;"
      );
      console.log(`%cInstagram: ${LinkData.instagram.link}`, "color: #e91e63;");
      console.log(`%cTwitter: ${LinkData.twitter}`, "color: #1da1f2;");
      console.log(`%cGitHub: ${LinkData.github}`, "color: #333;");
      console.log(`%cLinkedIn: ${LinkData.linkedin}`, "color: #0077b5;");
      console.log(`%cEmail: ${LinkData.gmail}`, "color: #ff9800;");
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

    console.log(`%cWelcome to ${PersonalData.name}'s Portfolio! 🚀`, "color: white; background: #007acc; font-size: 20px; font-weight: bold; padding: 5px; border-radius: 5px;");

    console.log("%c💡 Type 'help' to explore the commands!", "color: #4caf50; font-size: 16px;");

    // Register commands in the global window object
    commands.forEach((cmd) => {
      window[cmd.name] = cmd.action;
    });
  }, [isMobile]);

  return null; // No UI rendering
};

export default Logger;
