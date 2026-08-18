"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/data";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-50"
            >
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
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
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

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

        {/* Mobile Navbar Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-obsidian border-b border-white/5 shadow-2xl z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {mainNavigation.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg tracking-wider uppercase font-mono transition-colors ${
                      isActive ? "text-gold" : "text-muted hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
