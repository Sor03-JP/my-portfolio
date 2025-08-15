"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  onHoverChange?: (hovered: boolean) => void;
  isHoveredGlobal?: boolean;
};

export default function NavItem({
  href,
  children,
  icon,
  onHoverChange,
  isHoveredGlobal = false,
}: NavItemProps) {
  const [isHoveredLocal, setIsHoveredLocal] = useState(false);
  const showIcon = isHoveredLocal || isHoveredGlobal;

  return (
    <Link
      href={href}
      className="font-en font-bold flex items-center px-1 py-2 text-sm text-gray-300 transition-colors hover:text-white"
      onMouseEnter={() => {
        setIsHoveredLocal(true);
        onHoverChange?.(true);
      }}
      onMouseLeave={() => {
        setIsHoveredLocal(false);
        onHoverChange?.(false);
      }}
    >
      <motion.span
        className="mr-2 flex-shrink-0"
        initial={{ opacity: 0, scale: 0, width: 0 }}
        animate={{
          opacity: showIcon ? 1 : 0,
          scale: showIcon ? 1 : 0,
          width: showIcon ? "auto" : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {icon}
      </motion.span>
      <span>{children}</span>
    </Link>
  );
}
