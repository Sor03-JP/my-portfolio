"use client";

import { useState } from "react";
import NavItem from "@/components/NavItem";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav-data";

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="hidden md:flex sticky top-0 z-30 h-[70px] w-full items-center justify-end bg-[#0D1117]/80 px-8 backdrop-blur-sm">
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
    </header>
  );
}
