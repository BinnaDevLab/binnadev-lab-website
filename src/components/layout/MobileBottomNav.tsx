"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, GraduationCap, Network, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const bottomNavLinks = [
  { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  {
    label: "Architect",
    href: "/architect",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    label: "Cohorts",
    href: "/cohorts",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    label: "Methodology",
    href: "/philosophy",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    icon: <Network className="w-5 h-5" />,
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-xl border-t border-white/10 pb-safe"
    >
      <div className="flex items-center justify-around px-2 py-3">
        {bottomNavLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          const isActive =
            !isExternal &&
            (pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)));

          return (
            <Link
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                isActive ? "text-gold" : "text-muted hover:text-white",
              )}
            >
              <div className={cn("p-1 rounded-full", isActive && "bg-white/5")}>
                {link.icon}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
