"use client";

import { Home, Code, User, Send } from "lucide-react";
import NavItem from "@/components/NavItem";

const navLinks = [
  {
    href: "#home",
    label: "HOME",
    icon: <Home className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#products",
    label: "PRODUCTS",
    icon: <Code className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#profile",
    label: "PROFILE",
    icon: <User className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
  {
    href: "#contact",
    label: "CONTACT",
    icon: <Send className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth />,
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 h-[70px] w-full bg-[#0D1117]/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-center">
        <nav>
          <ul className="flex items-center gap-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavItem href={link.href} icon={link.icon}>
                  {link.label}
                </NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;