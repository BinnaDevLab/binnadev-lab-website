"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function AppLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after a minimum duration to guarantee the splash experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-obsidian"
        >
          <div className="relative flex flex-col items-center">
            {/* The glow effect behind the logo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full animate-pulse" 
            />
            
            {/* The Official BinnaDev Lab Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src="/BinnaDev Branding/logos/L1.svg" 
                alt="BinnaDev Lab" 
                width={180} 
                height={120} 
                className="relative z-10 animate-pulse"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
