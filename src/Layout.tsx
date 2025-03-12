import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom';
import { LinkData } from "./config/links.config";
import { Mail } from "lucide-react";

const Layout = () => {
  return (
    <>
      <div className="flex-grow mt-20 md:mt-20 p-3 md:p-5">
        <Outlet />
      </div>
      <footer className="mt-5 text-sm px-1 md:px-5">
        <Separator />
        <p className="font-[300] px-2 flex justify-between items-center h-8">
          <Link to={LinkData.twitter} className="hover:underline">
            made by @{LinkData.twitter.split("/").pop()}
          </Link>
          <a href={LinkData.mail} className='dark:hover:text-white hover:text-black duration-300' about="Mail Link">
            <Mail size={18} className='inline-block' />
            <b className="ml-1 hover:underline">{LinkData.gmail}</b>
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
