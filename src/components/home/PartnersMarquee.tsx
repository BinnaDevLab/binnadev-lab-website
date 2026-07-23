"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { partners } from "@/data";
import Image from "next/image";

export function PartnersMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slowly move the marquee as the user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section ref={containerRef} className="py-16 border-y border-white/5 bg-carbon/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
      
      <motion.div style={{ x }} className="flex gap-16 items-center px-16 w-max">
        {/* We double the array to ensure the scroll feels continuous */}
        {[...partners, ...partners].map((partner, idx) => (
          <div key={`${partner.id}-${idx}`} className="group relative flex-shrink-0 h-12 w-32">
            <Image 
              src={partner.logoUrl} 
              alt={partner.name}
              fill
              sizes="128px"
              className="object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
