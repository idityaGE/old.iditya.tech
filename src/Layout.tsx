import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom';
import Data from "@/config/Data.json";

const Layout = () => {
  document.title = `${Data.nickname} | Portfolio`
  return (
    <>
      <div className="container max-w-4xl mx-auto min-h-screen flex flex-col px-4 pt-4">
        <img src="/gradient.webp" alt="Gradient IMG" className="absolute left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover" />
        <Navbar />
        <div className="flex-grow mt-8 md:mt-16 px-2">
          <Outlet />
        </div>
        <footer className="mt-5">
          <Separator />
          <p className="italic font-[500] pl-2 flex justify-between">
            <Link to={Data.socials.instagram.link} className="px-3 font-bold hover:underline">
              made by @{Data.socials.instagram.username}
            </Link>
            <p className="mt-1 text-xs">
              This personal portfolio is still under development...
            </p>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout