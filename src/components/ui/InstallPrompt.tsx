"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share } from "lucide-react";
import { Body } from "@/components/ui/Typography";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS] = useState(() => {
    if (typeof window === "undefined") return false;
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  });
  const [isStandalone] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone: boolean }).standalone
    );
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // If already installed or dismissed, do nothing
    if (isStandalone) return;

    const dismissed = localStorage.getItem("binnadev_pwa_dismissed");
    if (dismissed) return;

    // Listen for beforeinstallprompt (Chrome/Android/Desktop)
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener,
    );

    // Show prompt after scrolling past hero section
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        // Show if we have the native prompt, or if it's iOS
        if (deferredPrompt || isIOS) {
          setShowPrompt(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener,
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, [deferredPrompt, isIOS, isStandalone]);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("binnadev_pwa_dismissed", "true");
  };

  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-carbon/90 backdrop-blur-xl border border-white/10 p-6 shadow-2xl z-50 flex flex-col gap-4 overflow-hidden"
        >
          {/* Blueprint styling lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/50 to-transparent" />

          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-obsidian border border-white/10 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-white font-medium">Install BinnaDevLab</h3>
            </div>
          </div>

          <Body className="text-sm text-muted">
            Add the Lab to your home screen for faster access and a better
            experience.
          </Body>

          {showIOSInstructions ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-obsidian border border-white/5 p-4 rounded-sm flex flex-col gap-2"
            >
              <Body className="text-sm text-muted flex items-center gap-2">
                1. Tap the <Share className="w-4 h-4 text-gold" /> Share button
                in Safari.
              </Body>
              <Body className="text-sm text-muted">
                2. Scroll down and select{" "}
                <strong>&quot;Add to Home Screen&quot;</strong>.
              </Body>
            </motion.div>
          ) : (
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm py-2 transition-colors font-mono uppercase tracking-wider"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="flex-1 bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-muted hover:text-white text-sm py-2 transition-colors font-mono uppercase tracking-wider"
              >
                Not Now
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
