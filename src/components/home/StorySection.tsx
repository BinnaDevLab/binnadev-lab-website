"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";

const narrative = [
  {
    phase: "01 / The Problem",
    title: "Syntax Over Reasoning",
    desc: "The industry teaches developers how to write code, but not how to read or reason about complex systems. The result is brittle architecture.",
  },
  {
    phase: "02 / The Philosophy",
    title: "Architectural Thinking",
    desc: "We focus on the mental models required to understand the EVM at a fundamental level. Security is an emergent property of deep comprehension.",
  },
  {
    phase: "03 / The Engineering",
    title: "Building the Foundation",
    desc: "Constructing robust systems requires a rigorous approach to factory patterns, state layout, and complex execution flows.",
  },
  {
    phase: "04 / The Security",
    title: "Threat Modeling",
    desc: "Understanding how attackers exploit trust boundaries, manipulate state, and chain vulnerabilities across DeFi legos.",
  },
  {
    phase: "05 / The Research",
    title: "Beyond the Norm",
    desc: "We push the boundaries of invariant testing, formal verification, and advanced mitigation strategies.",
  },
  {
    phase: "06 / The Cohort",
    title: "Collective Intelligence",
    desc: "Engineering in isolation is flawed. We train in focused, high-intensity cohorts to simulate real-world adversarial environments.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="py-32 bg-carbon relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Architecture" 
          className="w-full h-full object-cover opacity-5 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon" />
      </div>

      <Container className="relative z-10">
        <div className="mb-20 max-w-2xl">
          <Mono className="mb-4 block">The Methodology</Mono>
          <H2>Engineering from First Principles</H2>
        </div>

        {/* Mobile Vertical Stack View */}
        <div className="md:hidden flex flex-col space-y-4">
          {narrative.map((item, index) => (
            <motion.div 
              key={`mobile-${item.phase}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-carbon/50 backdrop-blur-md border border-white/5 p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-royal/30" />
              <Mono className="text-royal mb-2 block tracking-widest text-[10px]">{item.phase}</Mono>
              <H3 className="mb-3 text-lg">{item.title}</H3>
              <Body className="text-sm text-muted">{item.desc}</Body>
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid / Timeline View */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {narrative.map((item, index) => (
            <motion.div
              key={`desktop-${item.phase}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-carbon/50 backdrop-blur-md border border-white/5 p-10 hover:border-royal/50 transition-all duration-500 overflow-hidden transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(107,63,160,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Mono className="text-royal mb-4 block tracking-widest text-[10px]">{item.phase}</Mono>
                <H3 className="mb-4 text-foreground/90 group-hover:text-foreground transition-colors">{item.title}</H3>
                <Body className="text-base text-muted">{item.desc}</Body>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
