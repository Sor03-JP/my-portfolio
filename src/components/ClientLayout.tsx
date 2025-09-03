"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

type ClientLayoutProps = {
  children: React.ReactNode;
  fontClasses: string;
};

const ClientLayout = ({ children, fontClasses }: ClientLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3000); 

    document.body.style.overflow = "hidden";

    return () => clearTimeout(timer);
  }, []);

  return (
    <body className={`${fontClasses} bg-background text-primary`}>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && children}
    </body>
  );
};

export default ClientLayout;