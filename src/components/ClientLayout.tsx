"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

type ClientLayoutProps = {
  children: React.ReactNode;
  fontClasses: string;
};

const ClientLayout = ({ children, fontClasses }: ClientLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <body className={`${fontClasses} bg-background text-primary`}>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && children}
    </body>
  );
};

export default ClientLayout;