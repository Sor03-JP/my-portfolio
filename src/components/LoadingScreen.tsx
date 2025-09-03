"use client";

import { motion } from "framer-motion";
import AnimatedSoraLogo from "./AnimatedSoraLogo";
import AnimatedSawabeLogo from "./AnimatedSawabeLogo";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid grid-cols-1 bg-background md:grid-cols-2"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      {/* --- 左カラム (Sora.svg用) --- */}
      <div className="flex h-full flex-col">
        <div className="relative h-[65%]">
          <div className="absolute z-20 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center px-8">
            <div className="relative w-full max-w-[440px] aspect-[440/190] flex justify-center items-center">
              <div className="relative w-1/2 aspect-[220/190]">
                <AnimatedSoraLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[35%]" />
      </div>

      {/* --- 右カラム (SAWABE.svg用) --- */}
      <div className="hidden h-full items-start justify-center md:flex">
        <div className="relative h-[65%] w-full">
            <div className="absolute px-8 top-[35%] left-1/2 w-full -translate-x-1/2 flex flex-col items-center">
              <div className="h-[190px] w-auto">
                <AnimatedSawabeLogo />
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;