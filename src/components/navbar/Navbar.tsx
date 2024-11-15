import { ModeToggle } from "@/components/mode-toggle"
import { Link } from "react-router-dom"
import { AlignJustify } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { Contact } from 'lucide-react';
import Data from "@/config/Data.json"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";


const Navbar = () => {
  return (
    <div className="w-full h-12 bg-white/30 rounded-lg dark:bg-black/30">
      <div className="h-full container max-w-4xl mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-2xl">
          {
            (Data.logo) ? <img src={Data.logo} alt="logo" className="h-8" /> : <Link to="/">&#119990;&#119993;&#119998;&#119998;&#46;</Link>
          }
        </div>
        <div className="flex items-center space-x-5">
          <div className="space-x-5 sm:flex hidden">
            <Link to="/projects" className="font-bold">
              <div className="flex gap-1">
                <CodeXml />
                projects
              </div>
            </Link>
            <Link to="/about" className="font-bold">
              <div className="flex gap-1">
                <Contact />
                about
              </div>
            </Link>
          </div>
          <div>
            <div className="flex space-x-3">
              <div>
                <ModeToggle />
              </div>
              <div className="sm:hidden p-2">
                <DropdownNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

const DropdownNav = () => {
  const [open, setOpen] = useState(false)

  const handleStateChange = () => {
    setOpen(false)
  }

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleStateChange}>
            <Link to="/projects" className="font-bold">
              <div className="flex gap-1">
                <CodeXml />
                projects
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleStateChange}>
            <Link to="/about" className="font-bold">
              <div className="flex gap-1">
                <Contact />
                about
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}