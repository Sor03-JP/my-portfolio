"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPortfolioLogo from "./AnimatedPortfolioLogo";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type LoadingScreenProps = {
  onAnimationComplete: () => void;
};

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"logo" | "line" | "curtain">("logo");
  const [fadeOut, setFadeOut] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleLogoComplete = () => setFadeOut(true);
  const handleFadeOutComplete = () => {
    setPhase(isMobile ? "curtain" : "line");
  };
  const handleLineComplete = () => setPhase("curtain");

  return (
    <motion.div className="fixed inset-0 z-[100] pointer-events-auto overflow-hidden">
      {/* ロゴフェーズ */}
      <AnimatePresence>
        {phase === "logo" && (
          <motion.div
            key="logo"
            className="absolute inset-0 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: fadeOut ? 0 : 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onAnimationComplete={fadeOut ? handleFadeOutComplete : undefined}
            >
              <AnimatedPortfolioLogo onAnimationComplete={handleLogoComplete} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ラインフェーズ（PCのみ） */}
      {!isMobile && phase === "line" && (
        <motion.div className="absolute inset-0 flex justify-center bg-background">
          <motion.div
            className="w-[1px] bg-gray-500"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "100%", opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut", delay: 0.6 },
            }}
            onAnimationComplete={handleLineComplete}
          />
        </motion.div>
      )}

      {/* カーテンフェーズ */}
      {phase === "curtain" && (
        <>
          {isMobile ? (
            // モバイルは1枚カーテン
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-background"
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationComplete={onAnimationComplete}
            />
          ) : (
            // PCは左右2枚
            <>
              <motion.div
                className="absolute left-0 top-0 h-full w-1/2 bg-background"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onAnimationComplete={onAnimationComplete}
              />
              <motion.div
                className="absolute right-0 top-0 h-full w-1/2 bg-background"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                onAnimationComplete={onAnimationComplete} // 右カーテン完了時も発火
              />
            </>
          )}
        </>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
