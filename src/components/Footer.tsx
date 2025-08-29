"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTopButton from "./ScrollToTopButton";

const footerNavLinks = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "PRODUCTS" },
  { href: "/profile", label: "PROFILE" },
  { href: "/connect", label: "CONNECT" },
];

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative p-8">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-y-6">
        {/* logo */}
          <Image
            src="/Sora.svg"
            alt="Sora"
            width={120}
            height={40}
            className="h-auto"
          />

        {/* nav */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {footerNavLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                className="font-en text-xl text-primary"
              >
                {link.label}
              </Link>
              <AnimatePresence>
                {hoveredLink === link.href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-[1px] w-full bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* social links */}
        <div className="flex items-center gap-x-6">
          <a
            href="https://x.com/Sora27_eng"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            <span>X</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Sor03-JP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            <span>GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* copyright */}
        <p className="text-xs text-primary/70">
          &copy; {currentYear} Sora SAWABE Portfolio
        </p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;