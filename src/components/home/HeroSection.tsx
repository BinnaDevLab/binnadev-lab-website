"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H1, Body, Mono } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian border-b border-white/5">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 filter grayscale"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-digital-network-background-22606-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-transparent" />
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Abstract Grid (Keep as secondary texture) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />

      <Container className="relative z-10 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <H1 className="mt-8 mb-8 leading-[1.1]">
            Reasoning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-gold">
              Precedes Coding.
            </span>
          </H1>

          <Body className="mb-12 text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
            The elite architecture lab for Smart Contract Engineers. Learn how
            to think, not just how to type.
          </Body>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/curriculum">
              <Button
                size="lg"
                className="px-10 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Explore the Curriculum</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-royal opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </Button>
            </Link>
            <Link
              href="#manifesto"
              className="group flex items-center gap-2 text-muted hover:text-foreground transition-colors py-4"
            >
              <Mono className="text-sm">Read the Manifesto</Mono>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
