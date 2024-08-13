import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom';

const Layout = () => {
  document.title = "Portfolio"
  return (
    <>
      <div className="container max-w-4xl mx-auto min-h-screen flex flex-col px-4 pt-4">
        <img src="/gradient.webp" alt="Gradient IMG" className="absolute left-0 sm:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover" />
        <Navbar />
        <div className="flex-grow mt-8 md:mt-16 px-2">
          <Outlet />
        </div>
        <footer>
          <Separator />
          <p className="italic font-[500] pl-2 flex">made by
            <Link to='#intagram' className="px-2 font-bold">
              @idity_dx
            </Link>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout