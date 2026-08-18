"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, Body } from "@/components/ui/Typography";

export function CTASection() {
  return (
    <section className="relative py-40 md:py-56 bg-obsidian border-t border-white/5 flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15 filter grayscale contrast-150 mix-blend-screen"
        >
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian" />
      </div>

      {/* Background glow orb */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[800px] h-[400px] bg-royal/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="w-[300px] h-[300px] bg-gold/10 blur-[100px] rounded-full mix-blend-screen absolute" />
      </div>

      <Container className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <H2 className="mb-6 text-5xl md:text-6xl tracking-tight">
            The Lab is Open.
          </H2>
          <Body className="mb-12 text-xl text-muted/80 max-w-lg mx-auto">
            Stop memorizing syntax. Start architecting systems.
          </Body>

          <Link href="/cohorts">
            <button className="group relative px-12 py-5 bg-transparent overflow-hidden rounded-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,63,160,0.3)]">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-royal via-gold to-royal bg-[length:200%_auto] animate-gradient opacity-80" />
              {/* Inner dark background */}
              <div className="absolute inset-[1px] bg-obsidian transition-colors duration-500 group-hover:bg-obsidian/90" />
              {/* Text content */}
              <span className="relative z-10 font-mono text-lg tracking-widest text-foreground group-hover:text-white transition-colors flex items-center gap-3">
                VIEW CURRENT COHORT
                <span className="group-hover:translate-x-2 transition-transform duration-500">
                  -&gt;
                </span>
              </span>
            </button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
