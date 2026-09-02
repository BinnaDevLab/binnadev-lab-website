"use client";

import { clientTestimonials } from "@/data";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { ShieldCheck, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CollaboratorFieldNotes() {
  // Hash generator for aesthetic purposes to simulate cryptographic signatures
  const generateHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++)
      hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
    return `0x${Math.abs(hash).toString(16).padStart(8, "0")}`;
  };

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...clientTestimonials, ...clientTestimonials];

  return (
    <section className="py-20 md:py-32 relative bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Real Animated SVG Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-20"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="marquee-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="rgba(212,175,55,0.15)"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#marquee-grid)" />
          </svg>
        </motion.div>
        
        {/* Gradients to fade out the grid edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(10,10,10,1)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 mb-20 max-w-[1800px] mx-auto">
        <H2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-6">
          Verified Attestations
        </H2>
      </div>

      {/* Marquee Track */}
      <div className="relative z-10 flex overflow-hidden w-full py-8 group">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 whitespace-nowrap min-w-max px-4 items-start"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50, // Slow, continuous scroll
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[320px] md:w-[450px] inline-block whitespace-normal bg-carbon/60 border border-white/10 rounded-xl p-6 md:p-8 relative hover:border-gold/30 transition-colors duration-500 shadow-2xl hover:shadow-gold/5 flex flex-col h-auto max-h-min"
            >
              {/* Top Tech Bar */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4 shrink-0">
                <Mono className="text-[10px] md:text-xs text-white/30 tracking-widest truncate max-w-[120px] md:max-w-[150px]">
                  SIG_{generateHash(t.name + t.company)}
                </Mono>
                <div className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[10px] uppercase tracking-widest font-mono text-green-500/70 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded shrink-0">
                  <ShieldCheck className="w-2.5 h-2.5 md:w-3 md:h-3" /> Verified
                </div>
              </div>

              {/* Quote */}
              <div className="flex-grow relative overflow-hidden">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 md:w-12 md:h-12 text-white/5 -rotate-12 pointer-events-none" />
                <p className="text-base md:text-xl text-white/90 leading-relaxed italic font-light relative z-10 line-clamp-6 md:line-clamp-5">
                  &quot;{t.content}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/5">
                <div className="relative w-14 h-14 rounded overflow-hidden opacity-90 transition-opacity duration-300 border border-white/10 shrink-0">
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium mb-1 truncate">
                    {t.name}
                  </div>
                  <Mono className="text-xs text-gold uppercase tracking-widest truncate block">
                    {t.role} <span className="text-white/20 mx-1">||</span>{" "}
                    {t.company}
                  </Mono>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
