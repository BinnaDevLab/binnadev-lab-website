"use client";
import { Container } from "@/components/ui/Container";
import { H1, Body, Mono } from "@/components/ui/Typography";
import { motion } from "framer-motion";

export function CohortHero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Subtle map/grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <Mono className="text-gold mb-8 block tracking-[0.2em] uppercase text-sm">
              Engineering Practice
            </Mono>
            <H1 className="text-5xl md:text-7xl lg:text-[5.5rem] mb-10 leading-[1.05] tracking-tight">
              Start with the fundamentals.
              <br />
              <span className="text-white/60">
                Stay long enough to understand them.
              </span>
            </H1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 pb-4 space-y-8"
          >
            <div className="w-12 h-[1px] bg-gold/50 mb-8" />
            <Body className="text-xl text-white/70 leading-relaxed font-light">
              This is not another bootcamp promising to teach you how to stitch together
              AI-generated code. This is an engineering environment that demands you
              understand what you are building.
            </Body>
            <Body className="text-lg text-white/50 leading-relaxed font-light">
              BinnaDev Lab cohorts are intensive technical sprints designed for
              developers willing to do the hard work. We value architectural
              depth, critical reasoning, and deliberate practice over passive
              tutorials.
            </Body>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
