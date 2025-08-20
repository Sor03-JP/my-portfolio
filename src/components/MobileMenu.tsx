"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/nav-data";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // カード外をクリックでメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    // メニューが開いている時だけイベントリスナーを追加
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const baseButtonClasses =
    "fixed top-6 right-6 z-50 font-en font-bold px-6 py-2.5 rounded-full text-sm";

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* MENU / CLOSE ボタン */}
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            key="menu"
            onClick={() => setIsOpen(true)}
            className={`${baseButtonClasses} bg-[#0D1117] text-[#FAF9F6]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            MENU
          </motion.button>
        ) : (
          <motion.button
            key="close"
            onClick={() => setIsOpen(false)}
            className={`${baseButtonClasses} bg-[#FAF9F6] text-[#0D1117]`}
            style={{ originX: 0.8, originY: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            CLOSE
          </motion.button>
        )}
      </AnimatePresence>

      {/* 開閉するメニューパネル */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-4 right-4 z-40 flex h-[320px] w-[200px] flex-col overflow-hidden rounded-lg bg-[#0D1117] shadow-lg"
            style={{ originX: 0.8, originY: 0.05 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="flex flex-1 flex-col justify-center pt-12">
              <ul className="flex flex-col gap-y-2 px-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-en font-bold flex items-center gap-x-4 p-2 text-lg text-gray-300 transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}