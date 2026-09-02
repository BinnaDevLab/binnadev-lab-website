"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { H2, H3, Mono } from "@/components/ui/Typography";
import { services } from "@/data";

import { motion } from "framer-motion";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
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
                id="services-grid"
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
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </motion.div>
        
        {/* Gradients to fade out the grid edges so it blends nicely into the white */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      </div>

      <Container className="relative z-10 max-w-[1400px] px-6 md:px-12 lg:px-24">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <H2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-obsidian leading-[1.1]">
            Engineering &<br /> Software Development
          </H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 lg:p-10 border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] rounded-2xl relative group overflow-hidden transition-all duration-500 flex flex-col"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 font-display text-[8rem] leading-none text-obsidian -mt-10 -mr-4 pointer-events-none">
                  0{idx + 1}
                </div>

                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center mb-8 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600/20 transition-all duration-500 relative z-10">
                  <Icon className="w-6 h-6" />
                </div>

                <H3 className="text-xl md:text-2xl mb-8 text-obsidian relative z-10 min-h-[3.5rem]">
                  {service.title}
                </H3>

                <div className="flex flex-col gap-4 relative z-10 flex-grow">
                  {service.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full mt-1.5 shrink-0 group-hover:bg-purple-600 transition-colors" />
                      <span className="text-sm text-obsidian/70 font-light leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
