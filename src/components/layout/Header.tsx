"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/data";

export function Header() {
  const pathname = usePathname();
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

            <Link href="/curriculum" className="hidden md:flex">
              <button className="px-6 py-2 bg-white/5 border border-white/10 hover:border-gold/50 rounded text-sm font-mono transition-all hover:text-gold">
                Enter Lab
              </button>
            </Link>

          </div>
        </Container>
      </header>
    </>
  );
}
