"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const NavItem = ({ href, children, icon }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="font-en font-bold relative flex items-center px-3 py-2 text-sm text-gray-300 transition-colors hover:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute left-0 top-1/2 -translate-y-1/2 mr-2 origin-right"
            initial={{ opacity: 0, scale: 0, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {icon}
          </motion.span>
        )}
      </AnimatePresence>
      <span className="ml-4">{children}</span>
    </Link>
  );
};

export default NavItem;