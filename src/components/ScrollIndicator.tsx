"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-sm text-gray-300"
      // y軸方向に 0px → 10px → 0px と移動するアニメーション
      animate={{ y: [0, 10, 0] }}
      // アニメーションを無限に繰り返す設定
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
    >
      <span className="font-en">Scroll Down</span>
      <ArrowDown className="h-4 w-4" />
    </motion.div>
  );
}