"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

type ClientLayoutProps = {
  children: React.ReactNode;
  fontClasses: string;
};

const ClientLayout = ({ children, fontClasses }: ClientLayoutProps) => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <body className={`${fontClasses} bg-background text-primary`}>
      {children}
      <AnimatePresence>
        {!loadingDone && (
          <LoadingScreen onAnimationComplete={() => setLoadingDone(true)} />
        )}
      </AnimatePresence>
    </body>
  );
};

export default ClientLayout;
