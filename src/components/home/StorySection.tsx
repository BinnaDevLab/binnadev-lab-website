"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono, Meta } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const narrative = [
  {
    id: "01",
    phase: "The Problem",
    title: "Syntax Over Reasoning",
    desc: "The industry trains developers to write code, but often ignores how to reason about complex systems. The result is brittle architecture that collapses under pressure.",
    image: "/images/shared/shared-asset-3.jpeg",
  },
  {
    id: "02",
    phase: "The Philosophy",
    title: "Architectural Thinking",
    desc: "Security is not a checklist added at the end of a project. We focus on the mental models required to understand a system so deeply that security becomes a natural outcome of the architecture.",
    image: "/images/shared/shared-asset-13.jpeg",
  },
  {
    id: "03",
    phase: "The Engineering",
    title: "Building the Foundation",
    desc: "Robust infrastructure requires a strong foundation. We train developers to master state management, component design, and execution flows, the core elements of systems that do not fail.",
    image: "/images/shared/shared-asset-5.jpeg",
  },
  {
    id: "04",
    phase: "The Security",
    title: "Threat Modeling",
    desc: "To defend a system, you must know how to compromise it. We teach threat modeling so you can anticipate attacks and build software that survives in adversarial environments.",
    image: "/images/shared/shared-asset-4.jpeg",
  },
  {
    id: "05",
    phase: "The Research",
    title: "Beyond the Norm",
    desc: "We push beyond standard testing. Through adversarial fuzzing and deep invariant research, we work to establish mathematically proven safety guarantees for production systems.",
    image: "/images/shared/shared-asset-14.jpeg",
  },
  {
    id: "06",
    phase: "The Cohort",
    title: "Collective Intelligence",
    desc: "Engineering in isolation is flawed. We learn, research, and build in highly focused cohorts where developers share their insights, challenge assumptions, and write code together.",
    image: "/images/shared/shared-asset-2.jpeg",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="py-16 md:py-32 bg-carbon relative overflow-hidden border-b border-white/5"
    >
      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="w-8 h-[1px] bg-white" />
            <Mono className="text-gold uppercase tracking-widest text-sm">
              The Standard
            </Mono>
            <span className="w-8 h-[1px] bg-white" />
          </div>
          <H2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl">
            Engineering from <br />
            First Principles.
          </H2>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {narrative.map((item, index) => {
            // Alternate layout left/right on desktop
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-12 md:py-24 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Side */}
                <div
                  className={cn(
                    "relative w-full aspect-[4/3] lg:aspect-square overflow-hidden bg-obsidian rounded-sm order-1",
                    isEven
                      ? "lg:col-span-5 lg:order-1"
                      : "lg:col-span-5 lg:order-2",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />
                </div>

                {/* Text Side */}
                <div
                  className={cn(
                    "flex flex-col gap-6 order-2",
                    isEven
                      ? "lg:col-span-7 lg:order-2 lg:pl-12"
                      : "lg:col-span-7 lg:order-1 lg:pr-12",
                  )}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <Meta className="text-gold">[{item.id}]</Meta>
                    <Mono className="text-white/60 uppercase tracking-widest text-sm">
                      {item.phase}
                    </Mono>
                  </div>
                  <H3 className="text-3xl lg:text-5xl font-display tracking-tight text-white">
                    {item.title}
                  </H3>
                  <Body className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
                    {item.desc}
                  </Body>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
