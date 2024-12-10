//@ts-nocheck
import { useEffect } from 'react';
import { useDevice } from '@/hooks/useDevice';

// Define terminal commands and their actions
interface TerminalCommand {
  name: string;
  description: string;
  action: () => void;
}

const commands: TerminalCommand[] = [
  {
    name: 'help',
    description: 'Show available commands',
    action: () => {
      console.clear();
      console.log(
        '%c🛠 Available Commands:',
        'color: #4caf50; font-size: 18px; font-weight: bold;'
      );
      commands.forEach((cmd) => {
        console.log(
          `%c${cmd.name} %c- ${cmd.description}`,
          'color: #e91e63; font-weight: bold;',
          'color: #2196f3;'
        );
      });
    },
  },
  {
    name: 'about',
    description: 'Learn about me',
    action: () => {
      console.clear();
      console.log(
        '%c👋 Hi there! I am Aditya, a passionate developer with a knack for building cool things on the web!',
        'color: #673ab7; font-size: 16px;'
      );
    },
  },
  {
    name: 'projects',
    description: 'See my projects',
    action: () => {
      console.clear();
      console.log(
        '%c🚀 Here are my top projects:\n1. Project A\n2. Project B\n3. Project C',
        'color: #009688; font-size: 16px;'
      );
    },
  },
  {
    name: 'contact',
    description: 'Get in touch',
    action: () => {
      console.clear();
      console.log(
        '%c📫 Reach me at:\nEmail: aditya@example.com\nLinkedIn: https://linkedin.com/in/aditya',
        'color: #ff5722; font-size: 16px;'
      );
    },
  },
  {
    name: 'clear',
    description: 'Clear the console',
    action: () => {
      console.clear();
    },
  },
];

const Logger = () => {
  const isMobile = useDevice(); // Check if the device is mobile

  useEffect(() => {
    // Enable logger only on non-mobile devices
    if (isMobile) return;

    console.log(
      '%c🚀 Welcome to Aditya\'s Portfolio! 🚀',
      'color: white; background: #007acc; font-size: 20px; font-weight: bold; padding: 5px; border-radius: 5px;'
    );

    console.log(
      '%c💡 Tip: You can explore this portfolio by typing commands below in this console.',
      'color: #4caf50; font-size: 16px;'
    );

    console.log(
      '%c Type %c "help" %c to see available commands.',
      'color: #4caf50; font-size: 16px;',
      'color: #e91e63; font-size: 16px; font-weight: bold;',
      'color: #4caf50; font-size: 16px;'
    );

    console.log(
      '%c👉 Follow me on %cTwitter%c and %cGitHub%c for updates!',
      'color: #ff9800; font-size: 16px;',
      'color: #1da1f2; font-size: 16px; text-decoration: underline;',
      'color: #ff9800; font-size: 16px;',
      'color: #333; font-size: 16px; text-decoration: underline;',
      'color: #ff9800; font-size: 16px;'
    );

    console.log(
      '%c🔗 Twitter: https://twitter.com/your_twitter_handle\n🔗 GitHub: https://github.com/your_github_handle',
      'color: #1da1f2; font-size: 14px;'
    );

    console.log(
      '%c📂 Interactive Portfolio Terminal 📂\nType commands to navigate: e.g., %c"about", "projects"%c, or %c"contact".',
      'color: cyan; font-size: 16px; font-weight: bold;',
      'color: #e91e63; font-size: 16px;',
      'color: cyan; font-size: 16px;',
      'color: #4caf50; font-size: 16px;'
    );

    // Register commands in the global window object
    commands.forEach((cmd) => {
      window[cmd.name] = cmd.action;
    });
  }, [isMobile]);

  return null; // No UI rendering
};

export default Logger;
