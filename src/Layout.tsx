import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom';
import { LinkData } from "./config/links.config";
import Logger from "./Logger";
import { Mail } from "lucide-react";

const Layout = () => {
  return (
    <>
      <Logger />
      <ScrollRestoration />
      <div className="container max-w-4xl mx-auto min-h-screen flex flex-col px-4 pt-4">
        <img
          src="https://res.cloudinary.com/dwdbqwqxk/image/upload/v1730213921/gradient_zecf4g.webp"
          alt="Gradient IMG"
          className="fixed left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover"
        />
        <Navbar />
        <div className="flex-grow mt-16 md:mt-20 px-2">
          <Outlet />
        </div>
        <footer className="mt-5 text-sm">
          <Separator />
          <p className="font-[300] px-2 flex justify-between items-center h-8">
            <Link to={LinkData.twitter} className="hover:underline">
              made by @{LinkData.twitter.split("/").pop()}
            </Link>
            <a href={LinkData.mail} className='dark:hover:text-white hover:text-black  duration-300' about="Mail Link">
              <Mail size={18} className='inline-block' />
              <b className="ml-1 hover:underline">{LinkData.gmail}</b>
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout