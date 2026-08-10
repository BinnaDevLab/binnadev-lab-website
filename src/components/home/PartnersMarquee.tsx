"use client";

import { partners } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";

export function PartnersMarquee() {
  return (
    <section className="py-16 border-y border-white/5 bg-obsidian overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

      <div className="flex w-max mt-6 hover:[&>div]:animation-pause">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-6 items-center px-4"
        >
          {/* Double array for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="group relative flex-shrink-0 h-32 w-64 border border-white/5 bg-carbon flex flex-col justify-end overflow-hidden transition-colors hover:border-royal/50"
            >
              {/* Temporary Visual Asset */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} Demo Asset`}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
              </div>

              {/* Technical corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-royal opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-royal opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-royal opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-royal opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div className="p-4 relative z-10 w-full mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-royal block mb-1 opacity-80">
                  Partner // {partner.id.padStart(2, "0")}
                </span>
                <span className="font-display font-medium text-base text-white tracking-wide drop-shadow-md">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
