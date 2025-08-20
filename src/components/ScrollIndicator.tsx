"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const element = document.getElementById("products");
    if (!element) return;

    if (window.innerWidth >= 768) {
      // PC表示の場合：ヘッダーの高さを考慮してスクロール
      const headerOffset = 70; // ヘッダーの高さ
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // モバイル表示の場合：要素のトップへスクロール
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      className="flex flex-col items-center gap-2 text-sm text-gray-400 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
    >
      <span className="font-en">Scroll Down</span>
      <ArrowDown className="h-4 w-4" />
    </motion.button>
  );
}