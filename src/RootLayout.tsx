import { Suspense, lazy, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";

const Logger = lazy(() => import("./Logger"));

const RootLayout = () => {
  const location = useLocation();
  const [isProjectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    // Check if the current path matches /projects/[slug]
    setIsProjectPage(location.pathname.match(/^\/projects\/[^/]+$/) !== null);
  }, [location.pathname]);

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
        <div className="flex-grow mx-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
