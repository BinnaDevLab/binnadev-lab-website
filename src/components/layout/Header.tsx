"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/data";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className="w-8 h-8 rounded bg-royal/20 border border-royal/50 flex items-center justify-center group-hover:bg-royal/30 transition-colors">
                <span className="font-mono font-bold text-royal">B</span>
              </div>
              <span className="font-display font-semibold tracking-wider text-foreground">
                BinnaDev<span className="text-royal">_</span>Lab
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {mainNavigation.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm tracking-wider uppercase font-mono transition-colors ${
                      isActive ? "text-gold" : "text-muted hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/curriculum" className="hidden md:flex">
              <button className="px-6 py-2 bg-white/5 border border-white/10 hover:border-gold/50 rounded text-sm font-mono transition-all hover:text-gold">
                Enter Lab
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl flex flex-col justify-center px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {mainNavigation.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-display font-medium tracking-wide transition-colors ${
                        isActive ? "text-gold" : "text-white hover:text-royal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: mainNavigation.length * 0.1 + 0.2 }}
              className="mt-16"
            >
              <Link href="/curriculum" className="block w-full">
                <button className="w-full py-4 bg-royal hover:bg-royal/80 rounded-lg text-white font-mono uppercase tracking-widest text-sm transition-colors">
                  Enter Lab
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
