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
    <footer className="bg-background py-8 px-8">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-y-6">
        {/* Sora.svg ロゴ */}
        <div className="relative mb-4" style={{ height: 40, width: 120 }}>
          <Image
            src="/Sora.svg"
            alt="Sora"
            width={120 * 4} // 4倍のサイズ
            height={40 * 4}  // 4倍のサイズ
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-10" // 1/4に縮小
          />
        </div>

        {/* ナビゲーション */}
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


        {/* コピーライト */}
        <p className="text-xs text-primary/70">
          &copy; {currentYear} Sora SAWABE Portfolio
        </p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;