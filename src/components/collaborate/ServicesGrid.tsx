"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono, Display, Meta } from "@/components/ui/Typography";
import { services } from "@/data";
import { cn } from "@/lib/utils";

const serviceImages = [
  "/images/collaborate/collaborate-asset-1.jpeg",
  "/images/shared/shared-asset-1.jpeg",
  "/images/shared/shared-asset-3.jpeg"
];

export function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="py-24 md:py-48 bg-obsidian border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambience based on active service */}
      <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={serviceImages[activeIdx % serviceImages.length]}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
          </motion.div>
        </AnimatePresence>
      </div>

      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <Mono className="text-gold">Core Capabilities</Mono>
            </div>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Engineering &<br/>Security Services.
            </H2>
            <Body className="text-xl text-white/70 max-w-xl font-light mb-12">
              We provide deep technical expertise across the entire blockchain
              stack. From the architecture of novel tokenomics to the low-level
              security auditing of EVM bytecodes.
            </Body>
          </div>

          {/* Right Column: Dense Interactive List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={service.id}
                  className={cn(
                    "group relative border-b border-white/10 py-10 transition-colors duration-500 cursor-default",
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  )}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 px-6">
                    <div className="flex-shrink-0">
                      <Meta className={cn("transition-colors duration-300", isActive ? "text-gold" : "text-white/30 group-hover:text-white/50")}>
                        0{idx + 1} // {service.id}
                      </Meta>
                    </div>
                    
                    <div className="flex-grow">
                      <H3 className={cn("text-2xl md:text-3xl mb-4 transition-colors duration-300", isActive ? "text-white" : "text-white/50 group-hover:text-white/80")}>
                        {service.title}
                      </H3>
                      
                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out overflow-hidden",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="min-h-0">
                          <Body className="text-lg text-white/60 mb-8 max-w-2xl font-light">
                            {service.description}
                          </Body>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.capabilities.map((cap, cIdx) => (
                              <li key={cIdx} className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-gold/50" />
                                <Mono className="text-xs text-white/80">{cap}</Mono>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
