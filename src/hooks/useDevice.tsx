import { useEffect, useState } from "react";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initialize with actual check instead of false
    return typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check (in case window was resized before component mounted)
    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
};

export { useDevice };
