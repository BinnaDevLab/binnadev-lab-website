"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity and scale for the three sentences
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [0, 1, 1, 0],
  );
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [0.95, 1]);
  const filter1 = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["blur(10px)", "blur(0px)"],
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.55, 0.65],
    [0, 1, 1, 0],
  );
  const scale2 = useTransform(scrollYProgress, [0.3, 0.45], [0.95, 1]);
  const filter2 = useTransform(
    scrollYProgress,
    [0.3, 0.45],
    ["blur(10px)", "blur(0px)"],
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1],
    [0, 1, 1, 0],
  );
  const scale3 = useTransform(scrollYProgress, [0.6, 0.75], [0.95, 1]);
  const filter3 = useTransform(
    scrollYProgress,
    [0.6, 0.75],
    ["blur(10px)", "blur(0px)"],
  );

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative h-[250vh] bg-obsidian border-t border-white/5"
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">
        <Container className="text-center relative">
          <motion.div
            style={{ opacity: opacity1, scale: scale1, filter: filter1 }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          >
            <H2 className="text-muted leading-tight">
              We do not teach people how to write Code.
            </H2>
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, scale: scale2, filter: filter2 }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          >
            <H2 className="text-foreground leading-tight">
              We teach people how to think.
            </H2>
          </motion.div>
          <motion.div
            style={{ opacity: opacity3, scale: scale3, filter: filter3 }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
          >
            <H2 className="text-gold leading-tight">
              Code is not meant to be memorized.{" "}
              <br className="hidden md:block" /> It is meant to be interrogated.
            </H2>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
