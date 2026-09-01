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
    title: "Reasoning Precedes Coding",
    desc: "We don't just write code. We engineer systems from first principles.",
    image: "/images/shared/shared-asset-13.jpeg",
  },
  {
    id: "02",
    phase: "The Philosophy",
    title: "Security is Architecture",
    desc: "Security isn't a checklist. It is the natural outcome of a deeply understood system.",
    image: "/images/shared/shared-asset-17.jpeg",
  },
  {
    id: "03",
    phase: "The Foundation",
    title: "Infrastructure That Holds",
    desc: "Master state, components, and execution flows. The core of systems that do not fail.",
    image: "/images/shared/shared-asset-18.jpeg",
  },
  {
    id: "04",
    phase: "The Offense",
    title: "Anticipate the Attack",
    desc: "To defend a system, you must know how to compromise it.",
    image: "/images/shared/shared-asset-19.jpeg",
  },
  {
    id: "05",
    phase: "The Cohort",
    title: "Collective Intelligence",
    desc: "Engineering in isolation is flawed. We research, challenge assumptions, and build together.",
    image: "/images/shared/shared-asset-2.jpeg",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-black/5"
    >
      {/* Animated SVG Background Layer */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[200%] h-[100%]"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="story-lines"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="40"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-lines)" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <H2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl tracking-tight text-black">
            Engineering from <br className="hidden md:block" />
            First Principles.
          </H2>
        </motion.div>

        <div className="flex flex-col border-t border-black/10">
          {narrative.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-12 md:py-24 border-b border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
              >
                {/* Image Side */}
                <div
                  className={cn(
                    "relative w-full aspect-video lg:aspect-[16/9] overflow-hidden bg-black/5 rounded-2xl shadow-lg border border-black/10 group-hover:border-purple-800/40 transition-all duration-700",
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
                    className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/30" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/30" />
                </div>

                {/* Text Side */}
                <div
                  className={cn(
                    "flex flex-col gap-6",
                    isEven
                      ? "lg:col-span-7 lg:order-2 lg:pl-12"
                      : "lg:col-span-7 lg:order-1 lg:pr-12",
                  )}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <Meta className="text-purple-800">[{item.id}]</Meta>
                    <Mono className="text-black/60 uppercase tracking-widest text-sm font-semibold">
                      {item.phase}
                    </Mono>
                  </div>
                  <H3 className="text-3xl lg:text-5xl font-display tracking-tight text-black group-hover:text-purple-800 transition-colors duration-500">
                    {item.title}
                  </H3>
                  <Body className="text-lg lg:text-xl text-black/80 leading-relaxed max-w-2xl font-light">
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
