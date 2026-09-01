"use client";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";

const paths = [
  {
    tag: "Learn",
    label: "Join Cohort",
    description:
      "Learn to think before you code. Understand systems before you implement them. We train developers who want to master architecture and take engineering seriously.",
    href: "/cohorts",
    external: false,
  },
  {
    tag: "Build",
    label: "Commission Lab",
    description:
      "Commercial engineering services. We architect secure smart contracts, conduct rigorous security research, and ship production-grade systems built on first principles.",
    href: "/collaborate",
    external: false,
  },
];

export function CollaborationPreviewSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-obsidian flex items-center justify-center border-t border-white/5">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-obsidian overflow-hidden">
        {/* Animated SVG Grid */}
        <motion.div 
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-15"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="collab-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#collab-grid)" />
          </svg>
        </motion.div>
        
        {/* Clean architectural feel without heavy images */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-carbon/40 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_10%,transparent_80%)]" />
      </div>

      <Container className="relative z-20 px-6 flex flex-col items-center w-full">
        <H2 className="text-4xl md:text-6xl mb-12 leading-[1.05] tracking-tight text-white text-center">
          Learn. Build.
        </H2>

        {/* Two path cards - Premium Monochromatic Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          {paths.map((path) => (
            <Link
              key={path.tag}
              href={path.href}
              target={path.external ? "_blank" : undefined}
              rel={path.external ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col justify-between p-10 md:p-12 border border-white/10 hover:border-gold/50 transition-all duration-500 bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-2xl overflow-hidden min-h-[300px] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent before:pointer-events-none"
            >
              {/* Hover highlight line */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700 ease-out" />

              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Gold corner glow on hover */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gold/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-[80px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

              {/* Inner border sheen */}
              <div className="absolute inset-px rounded-2xl border border-white/[0.04] pointer-events-none" />

              {/* Sheen sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <Meta className="text-white/40 group-hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase">
                  {path.tag}
                </Meta>
                <Body className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                  {path.description}
                </Body>
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10 group-hover:border-white/20 transition-colors relative z-10">
                <Mono className="text-white/70 group-hover:text-white transition-colors tracking-widest uppercase">
                  {path.label}
                </Mono>
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
