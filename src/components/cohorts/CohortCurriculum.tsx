"use client";

import { Container } from "@/components/ui/Container";
import { H2, H3, Mono } from "@/components/ui/Typography";
import { CohortCurriculumItem } from "@/data/cohorts";

interface CohortCurriculumProps {
  curriculum: CohortCurriculumItem[];
}

import { motion } from "framer-motion";

export function CohortCurriculum({ curriculum }: CohortCurriculumProps) {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Real Animated SVG Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-40"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cohort-curriculum-grid"
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
            <rect width="100%" height="100%" fill="url(#cohort-curriculum-grid)" />
          </svg>
        </motion.div>
        
        {/* Gradients to fade out the grid edges so it blends nicely into the white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <H2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-obsidian">
            What you will master.
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {curriculum.map((item, idx) => {
            // Check if it's Theory or Practical for visual distinction
            const isPractical = item.id.includes("Practical");
            return (
              <div
                key={item.id}
                className="p-10 border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] rounded-2xl relative group overflow-hidden transition-all duration-500 flex flex-col"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 font-display text-[8rem] leading-none text-obsidian -mt-10 -mr-4 pointer-events-none">
                  0{idx + 1}
                </div>

                <Mono className="text-purple-600 mb-6 block text-xs tracking-widest uppercase relative z-10">
                  {item.id.replace("Session ", "S")}
                </Mono>

                <H3 className="text-2xl mb-4 text-obsidian relative z-10">
                  {item.title}
                </H3>

                {item.facilitator && (
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600/80 uppercase mb-3 relative z-10">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    {item.facilitator}
                  </span>
                )}

                <p className="text-base text-obsidian/70 font-light leading-relaxed relative z-10 flex-grow">
                  {item.description}
                </p>

                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between relative z-10">
                  <span className="text-xs uppercase tracking-wider font-mono text-obsidian/40 group-hover:text-purple-600/60 transition-colors">
                    Interactive Session
                  </span>
                  {isPractical && (
                    <span className="text-xs uppercase tracking-wider font-mono text-purple-600/80 transition-colors">
                      Live coding
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
