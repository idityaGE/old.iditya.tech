import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { AlignJustify, CodeXml, Contact } from "lucide-react";
import Data from "@/config/Data.json";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-white/30 rounded-lg dark:bg-black/30">
      <div className="h-full container max-w-4xl mx-auto flex justify-between items-center px-4">
        <Logo />
        <div className="flex items-center space-x-5">
          <DesktopLinks />
          <div className="flex space-x-3 items-center">
            <ModeToggle />
            <MobileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="font-bold text-2xl">
      {Data.logo ? (
        <img src={Data.logo} alt="logo" className="h-8" />
      ) : (
        <Link to="/">&#119990;&#119993;&#119998;&#119998;&#46;</Link>
      )}
    </div>
  );
};

const DesktopLinks = () => {
  return (
    <div className="space-x-5 hidden sm:flex">
      <NavItem to="/projects" icon={<CodeXml />} label="projects" />
      <NavItem to="/about" icon={<Contact />} label="about" />
    </div>
  );
};

const MobileDropdown = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={closeMenu}>
            <NavItem to="/projects" icon={<CodeXml />} label="projects" />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={closeMenu}>
            <NavItem to="/about" icon={<Contact />} label="about" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

type NavItemProps = {
  to: string;
  icon: JSX.Element;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <Link to={to} className="font-bold flex gap-1 items-center">
      {icon}
      {label}
    </Link>
  );
};

export default Navbar;
