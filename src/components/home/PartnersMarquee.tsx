"use client";

import { partners } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, Mono, Body } from "@/components/ui/Typography";

export function PartnersMarquee() {
  return (
    <section className="py-24 border-y border-white/5 bg-obsidian overflow-hidden relative">
      <Container className="relative z-20">
        <div className="text-center mb-16">
          <Mono className="mb-4 block">Organizations &amp; Ecosystem</Mono>
          <H2 className="text-3xl md:text-4xl text-white">
            Protocols & Organisations
          </H2>
          <Body className="mt-4 max-w-2xl mx-auto">
            Protocols and organisations BinnaDevLab has engaged with, built for,
            or is actively building alongside.
          </Body>
        </div>
      </Container>

      <div className="relative max-w-[100vw] mx-auto mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <div className="flex w-max hover:[&>div]:animation-pause">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-20 md:gap-32 items-center px-10"
          >
            {/* Double array for seamless loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="group relative flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 cursor-default"
              >
                {partner.logoUrl === "/images/placeholder.svg" ? (
                  <span className="font-display text-2xl md:text-3xl font-bold tracking-widest text-white uppercase select-none">
                    {partner.name}
                  </span>
                ) : (
                  <div className="relative h-12 md:h-16 w-40 md:w-56">
                    <Image
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 160px, 224px"
                    />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
