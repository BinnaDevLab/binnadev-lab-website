"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { mainNavigation, mobileNavigation } from "@/data/navigation";
import { socialLinks } from "@/data/social";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mono } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const menuVariants: Variants = {
    closed: {
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
      },
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const fadeVariants: Variants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100]">
        {/* Dynamic header background to ensure contrast */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${mobileMenuOpen ? "bg-transparent" : "bg-obsidian/80 backdrop-blur-md border-b border-white/5"}`}
        />

        <Container className="relative">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-[110]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* Mobile: Standalone logo only */}
              <Image
                src="/favicon.svg"
                alt="BinnaDevLab"
                width={32}
                height={32}
                className="w-8 h-8 md:hidden transition-transform group-hover:scale-105"
              />
              {/* Desktop: Wordmark only */}
              <span className="hidden md:inline-block font-display font-semibold tracking-wider text-foreground text-xl">
                BinnaDev<span className="text-gold">_</span>Lab
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              className="hidden xl:flex items-center gap-8 relative z-[110]"
            >
              {mainNavigation.map((link) => {
                const isActive =
                  !link.external &&
                  (pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href)));
                
                if (link.isCTA) {
                  return (
                    <div key={link.label} className="relative group">
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3], 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/40 rounded-sm blur-md"
                      />
                      <Link
                        href={link.href}
                        className="relative z-10 overflow-hidden flex items-center justify-center px-6 py-2.5 bg-white rounded-sm text-obsidian text-sm font-mono font-bold tracking-wider hover:bg-white/90 transition-all duration-300 shadow-md"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <motion.div
                          animate={{ x: ["-200%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12 w-full"
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`text-sm tracking-wider uppercase font-mono transition-colors ${
                      isActive ? "text-gold" : "text-muted hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger / Close Button */}
            <button
              className="xl:hidden relative z-[110] w-12 h-12 flex justify-center items-center focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              <div className="relative w-6 h-6">
                <motion.div
                  initial={false}
                  animate={{ opacity: mobileMenuOpen ? 0 : 1, rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col justify-center gap-1.5"
                >
                  <span className="block w-6 h-[2px] bg-white rounded-full" />
                  <span className="block w-6 h-[2px] bg-white rounded-full" />
                  <span className="block w-4 h-[2px] bg-white rounded-full self-end" />
                </motion.div>
                
                <motion.div
                  initial={false}
                  animate={{ opacity: mobileMenuOpen ? 1 : 0, rotate: mobileMenuOpen ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.div>
              </div>
            </button>
          </div>
        </Container>

        {/* Premium Full-Screen Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              data-lenis-prevent="true"
              className="fixed inset-0 z-[100] bg-obsidian flex flex-col pt-28 pb-safe px-6 md:px-12 overflow-y-auto"
            >
              {/* Background ambient gradient to create depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian to-carbon pointer-events-none" />

              <div className="relative z-10 flex-grow flex flex-col">
                <motion.div variants={fadeVariants} className="mb-8 pl-4">
                  <Mono className="text-white/30 text-[10px] tracking-widest uppercase">
                    Navigation
                  </Mono>
                  <div className="w-12 h-[1px] bg-gold mt-4" />
                </motion.div>

                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-2"
                >
                  {mobileNavigation.map((link, idx) => {
                    const isActive =
                      !link.external &&
                      (pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href)));

                    if (link.isCTA) return null; // We'll render CTA at the bottom

                    return (
                      <motion.div key={link.label} variants={itemVariants}>
                        <Link
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
                          onClick={() => setMobileMenuOpen(false)}
                          className="group flex items-center gap-6 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <Mono
                            className={`text-xs transition-colors ${isActive ? "text-gold" : "text-white/60 group-hover:text-white"}`}
                          >
                            0{idx + 1}
                          </Mono>
                          <span
                            className={`text-3xl sm:text-4xl font-display tracking-tight transition-colors ${
                              isActive
                                ? "text-gold"
                                : "text-white/80 group-hover:text-white"
                            }`}
                          >
                            {link.label}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="activeNavIndicator"
                              className="ml-auto"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-gold" />
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* Mobile CTA Button */}
                  <motion.div variants={itemVariants} className="mt-8 px-4">
                    <div className="relative group w-full">
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3], 
                          scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/40 rounded-sm blur-md"
                      />
                      <Link
                        href="/donate"
                        onClick={() => setMobileMenuOpen(false)}
                        className="relative z-10 overflow-hidden w-full flex justify-center items-center py-4 bg-white text-obsidian rounded-sm font-mono font-bold tracking-widest hover:bg-white/90 transition-colors shadow-lg"
                      >
                        <span className="relative z-10 uppercase">Support the Lab</span>
                        <motion.div
                          animate={{ x: ["-200%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12 w-full"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </nav>

                <div className="mt-auto pt-12 pb-8">
                  <motion.div
                    variants={fadeVariants}
                    className="bg-carbon/50 border border-white/5 p-6 rounded-2xl mb-8"
                  >
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-4">
                      Bridging the gap between writing code and architecting
                      resilient digital infrastructure.
                    </p>
                    <Link
                      href="/collaborate"
                      className="inline-flex items-center gap-2 text-gold hover:text-white text-sm font-mono uppercase tracking-widest transition-colors"
                    >
                      Work with the Lab <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={fadeVariants}
                    className="flex flex-wrap gap-x-6 gap-y-4 px-4"
                  >
                    <Link
                      href={socialLinks.youtube}
                      target="_blank"
                      className="font-mono text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      YouTube
                    </Link>
                    <Link
                      href={socialLinks.twitter}
                      target="_blank"
                      className="font-mono text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      X (Twitter)
                    </Link>
                    <Link
                      href={socialLinks.github}
                      target="_blank"
                      className="font-mono text-xs text-white/60 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      GitHub
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
