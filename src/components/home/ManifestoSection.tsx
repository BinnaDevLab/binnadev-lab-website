"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative min-h-[80vh] flex items-center bg-obsidian border-t border-white/5 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 md:gap-16 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <H2 className="text-4xl md:text-5xl lg:text-7xl text-white/60 font-medium leading-[1.1] tracking-tight">
              Code is not meant <br className="md:hidden" /> to be memorized.
            </H2>
          </motion.div>

          <motion.div variants={itemVariants} className="md:pl-16 lg:pl-32">
            <H2 className="text-4xl md:text-5xl lg:text-7xl text-white font-medium leading-[1.1] tracking-tight">
              It is meant to be <br className="md:hidden" /> understood.
            </H2>
          </motion.div>

          <motion.div variants={itemVariants} className="md:pl-32 lg:pl-64">
            <H2 className="text-4xl md:text-5xl lg:text-7xl text-gold font-medium leading-[1.1] tracking-tight">
              Engineer resilient systems <br className="hidden md:block" /> from
              first principles.
            </H2>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
