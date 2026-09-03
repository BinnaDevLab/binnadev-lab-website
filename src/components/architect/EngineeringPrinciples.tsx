"use client";

import { Container } from "@/components/ui/Container";
import { H2, H3, Body } from "@/components/ui/Typography";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PRINCIPLES } from "@/data/architect";

export function EngineeringPrinciples() {
  return (
    <section className="bg-white py-24 mb-48 relative overflow-hidden border-y border-black/5 w-full">
      {/* Animated SVG Grid Background for White Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-40"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="architect-white-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="rgba(168,85,247,0.25)"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#architect-white-grid)"
            />
          </svg>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      </div>

      <Container className="relative z-10 max-w-5xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <H2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-obsidian">
            Engineering Principles
          </H2>
          <Body className="text-xl text-obsidian/70 font-light">
            Smart contracts handle real value. Building with reliability,
            thoughtfulness, and excellence. These are the axioms that govern the
            engineering practice.
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="group p-8 border border-black/5 bg-white/80 backdrop-blur-xl hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] transition-all duration-300 rounded-2xl flex flex-col items-start h-full"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-purple-600/10 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-500">
                  {Icon && <Icon className="w-6 h-6 text-purple-600" />}
                </div>

                <H3 className="text-2xl text-obsidian mb-3 tracking-tight">
                  {principle.title}
                </H3>
                <p className="text-obsidian/70 leading-relaxed text-sm md:text-base mb-8 font-medium">
                  {principle.summary}
                </p>

                <ul className="space-y-4 mt-auto w-full">
                  {principle.actionPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                      <span className="text-sm md:text-base text-obsidian/70 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
