import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom';
import { LinkData } from "./config/links.config";
import { Mail } from "lucide-react";

const Layout = () => {
  return (
    <>
      <div className="flex-grow mt-24 md:mt-28 px-2 mx-3 max-w-4xl justify-center w-full">
        <Outlet />
      </div>
      <footer className="mt-5 text-sm">
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
