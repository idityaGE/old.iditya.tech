import { useTheme } from "@/components/theme-provider";

// Convert to a custom hook (note the "use" prefix)
export const useToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const switchTheme = () => {
            theme === "light" ? setTheme("dark") : setTheme("light");
        };

        // @ts-ignore
        document.startViewTransition
            ? document.startViewTransition(switchTheme)
            : switchTheme();
    };

    return toggleTheme;
};
