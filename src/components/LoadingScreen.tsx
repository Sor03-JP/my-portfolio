"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedPortfolioLogo from "./AnimatedPortfolioLogo";

type LoadingScreenProps = {
  onAnimationComplete: () => void;
};

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{ scrollbarGutter: 'stable' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }} // フェードアウトの時間
    >
      <AnimatedPortfolioLogo onAnimationComplete={onAnimationComplete} />
    </motion.div>
  );
};

export default LoadingScreen;