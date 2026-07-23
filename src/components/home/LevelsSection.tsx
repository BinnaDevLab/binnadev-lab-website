"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";

const levels = [
  {
    level: "Level 0",
    title: "How to Read Code",
    desc: "The illusion of sequential reading, boundaries of trust, and mapping execution paths.",
  },
  {
    level: "Level 1",
    title: "How to Read Smart Contracts",
    desc: "The physics of the EVM, the layout of state, and execution environments.",
  },
  {
    level: "Level 2",
    title: "How Protocols Work",
    desc: "The factory pattern, AMMs, and complex execution flows.",
  },
  {
    level: "Level 3",
    title: "How Attackers Think",
    desc: "Flash loans, price manipulation, and hidden exploit vectors.",
  },
  {
    level: "Level 4",
    title: "How Auditors Think",
    desc: "Invariant testing, formal verification, and advanced threat modeling.",
  },
];

export function LevelsSection() {
  return (
    <section id="levels" className="py-32 bg-carbon relative">
      <Container>
        <div className="mb-20 max-w-2xl">
          <Mono className="mb-4 block">The Methodology</Mono>
          <H2>5 Architectural Layers of Reasoning</H2>
        </div>

        <div className="flex flex-col space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] md:before:left-[27px] before:w-[2px] before:bg-white/5">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[15px] md:left-[23px] top-8 w-[10px] h-[10px] rounded-full bg-obsidian border-2 border-royal group-hover:border-gold transition-colors duration-300 shadow-[0_0_10px_rgba(107,63,160,0.5)] group-hover:shadow-[0_0_10px_rgba(214,175,54,0.5)]" />
              
              <div className="relative bg-carbon/50 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-lg group-hover:border-royal/50 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(107,63,160,0.1)]">
                {/* Subtle internal gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <Mono className="text-royal mb-2 block">{item.level}</Mono>
                  <H3 className="mb-4 text-foreground/90 group-hover:text-foreground transition-colors">{item.title}</H3>
                  <Body className="text-sm md:text-base">{item.desc}</Body>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
