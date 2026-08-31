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
      {/* Animated SVG Graphic */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: ["-10%", "0%"], y: ["-10%", "0%"] }} 
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%]"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="manifesto-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 120 120 M 120 0 L 0 120" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                <rect x="55" y="55" width="10" height="10" fill="none" stroke="gold" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#manifesto-grid)" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0c0c0c_75%)] pointer-events-none" />

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
