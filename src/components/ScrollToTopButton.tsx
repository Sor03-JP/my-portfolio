"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className="absolute bottom-8 right-8 z-50 rounded-full text-primary shadow-lg"
      onClick={scrollToTop}
      whileHover={{ rotate: -45, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <Rocket className="h-8 w-8" />
    </motion.button>
  );
};

export default ScrollToTopButton;