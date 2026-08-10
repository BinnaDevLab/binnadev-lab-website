"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data";
import { Home, BookOpen, FlaskConical, Users, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  "Lab": <Home className="w-5 h-5" />,
  "Curriculum": <BookOpen className="w-5 h-5" />,
  "Research": <FlaskConical className="w-5 h-5" />,
  "Culture": <Users className="w-5 h-5" />,
  "Collaborate": <Network className="w-5 h-5" />,
};

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-xl border-t border-white/10 pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        {mainNavigation.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
            
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                isActive ? "text-gold" : "text-muted hover:text-white"
              )}
            >
              <div className={cn("p-1 rounded-full", isActive && "bg-white/5")}>
                {iconMap[link.label]}
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
