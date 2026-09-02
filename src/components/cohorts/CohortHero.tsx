"use client";
import { Container } from "@/components/ui/Container";
import { H1, Body, Mono } from "@/components/ui/Typography";
import { motion } from "framer-motion";

export function CohortHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden flex flex-col justify-center">
      {/* Animated SVG Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-obsidian overflow-hidden">
        <motion.div 
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-20"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cohort-hero-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="rgba(255,255,255,1)"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cohort-hero-grid)" />
          </svg>
        </motion.div>
        
        {/* Gradients to fade out the grid edges without completely blacking it out */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(10,10,10,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian opacity-50" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <H1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
            Start with the fundamentals.
            <br />
            <span className="text-white/60">
              Stay long enough to understand them.
            </span>
          </H1>
        </motion.div>
      </Container>
    </section>
  );
}
