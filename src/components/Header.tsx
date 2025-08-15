"use client";

import { useState } from "react";
import { Home, Code, User, Send } from "lucide-react";
import NavItem from "@/components/NavItem";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "HOME", icon: <Home className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth /> },
  { href: "#products", label: "PRODUCTS", icon: <Code className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth /> },
  { href: "#profile", label: "PROFILE", icon: <User className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth /> },
  { href: "#contact", label: "CONTACT", icon: <Send className="h-4 w-4" strokeWidth={3} absoluteStrokeWidth /> },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-30 h-[70px] w-full bg-[#0D1117]/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-end pr-8">
        <nav>
          <ul className="flex items-center gap-x-2">
            {navLinks.map((link, index) => {
              const shouldShiftLeft = hoveredIndex !== null && index < hoveredIndex;
              return (
                <motion.li
                  key={link.href}
                  animate={{ x: shouldShiftLeft ? -20 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <NavItem
                    href={link.href}
                    icon={link.icon}
                    isHoveredGlobal={hoveredIndex === index}
                    onHoverChange={(isHovering) => setHoveredIndex(isHovering ? index : null)}
                  >
                    {link.label}
                  </NavItem>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
