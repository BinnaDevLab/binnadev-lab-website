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
    for (let i = 0; i < str.length; i++) hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    return `0x${Math.abs(hash).toString(16).padStart(8, "0")}`;
  };

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...clientTestimonials, ...clientTestimonials];

  return (
    <section className="py-32 relative bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 to-transparent pointer-events-none" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 mb-20 max-w-[1800px] mx-auto">
        <Mono className="text-gold mb-4 block tracking-widest uppercase">
          // Peer Review
        </Mono>
        <H2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-6">
          Verified Attestations
        </H2>
        <Body className="text-xl text-white/60 font-light leading-relaxed max-w-3xl">
          The hardest engineering problems require immense trust. Here is what technical leaders, founders, and engineers say after reviewing our code and collaborating with the Lab.
        </Body>
      </div>

      {/* Marquee Track */}
      <div className="relative z-10 flex overflow-hidden w-full py-8 group">
        
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 whitespace-nowrap min-w-max px-4"
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
              className="w-[450px] md:w-[600px] inline-block whitespace-normal bg-carbon/60 border border-white/10 rounded-xl p-8 md:p-10 relative hover:border-gold/30 transition-colors duration-500 shadow-2xl hover:shadow-gold/5 flex flex-col h-[400px]"
            >
              
              {/* Top Tech Bar */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <Mono className="text-xs text-white/30 tracking-widest truncate max-w-[150px]">
                  SIG_{generateHash(t.name + t.company)}
                </Mono>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-green-500/70 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded shrink-0">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </div>
              </div>

              {/* Quote */}
              <div className="flex-grow relative overflow-hidden">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 -rotate-12 pointer-events-none" />
                <p className="text-lg md:text-xl text-white/90 leading-relaxed italic font-light relative z-10 line-clamp-5">
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
                    {t.role} <span className="text-white/20 mx-1">//</span> {t.company}
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
