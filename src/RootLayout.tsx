import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import ShortcutsDialog from "@/components/shortcut-dialog";
const Logger = lazy(() => import("./Logger"));

const RootLayout = () => {
  const location = useLocation();
  const toggleTheme = useToggleTheme();
  const [isProjectPage, setIsProjectPage] = useState(false);
  const navigate = useNavigate()
  const [showShortcuts, setShowShortcuts] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'm' || event.key === 'M') {
      event.preventDefault();
      toggleTheme();
    } else if (event.key === 'p' || event.key === 'P') {
      event.preventDefault();
      navigate('/projects');
    } else if (event.key === 'h' || event.key === 'H') {
      event.preventDefault();
      navigate('/');
    } else if (event.key === 'a' || event.key === 'A') {
      event.preventDefault();
      navigate('/about');
    } else if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      setShowShortcuts(prev => !prev);
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      if (showShortcuts) {
        setShowShortcuts(false);
      } else {
        navigate(-1);
      }
    }
  }, [toggleTheme])

  useEffect(() => {
    // Check if the current path matches /projects/[slug]
    setIsProjectPage(location.pathname.match(/^\/projects\/[^/]+$/) !== null);
    // Add event listener for 'm' key press
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, handleKeyDown]);

  return (
    <>
      <Suspense fallback={null}>
        <Logger />
      </Suspense>
      <ScrollRestoration />
      <div className={`mx-auto min-h-screen flex flex-col   ${isProjectPage ? '' : 'max-w-4xl'}`}>
        <img
          src="https://res.cloudinary.com/dwdbqwqxk/image/upload/v1730213921/gradient_zecf4g.webp"
          alt="Gradient IMG"
          className="fixed left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover"
          fetchPriority="high"
        />
        <Navbar />
        <div className="flex-grow mx-1">
          <Outlet />
        </div>
        <ShortcutsDialog open={showShortcuts} onOpenChange={setShowShortcuts} />
      </div>
    </>
  );
};

export default RootLayout;
