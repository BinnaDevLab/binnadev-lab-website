"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono, Meta } from "@/components/ui/Typography";
import { services } from "@/data";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="py-32 bg-obsidian relative overflow-hidden">
      
      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context & Visual */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <Mono className="text-gold uppercase tracking-widest text-sm">Capabilities</Mono>
            </div>
            <H2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Engineering &<br/>Security Domains.
            </H2>
            <Body className="text-xl text-white/70 max-w-xl font-light mb-12">
              We do not offer commodity packages. We offer deep technical expertise applied to specific problem domains where failure is expensive.
            </Body>

            {/* Visual Addition - Made taller (4/5) to prevent dry space */}
            <div className="mt-12 relative aspect-[4/5] max-h-[500px] rounded-xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-700 shadow-2xl">
              <Image 
                src="/images/shared/shared-asset-1.jpeg" 
                alt="Engineering Capabilities" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 via-transparent to-transparent" />
            </div>

            {/* Stats addition to fill the sticky space gracefully */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-6 border border-white/5 bg-white/[0.02] rounded-lg">
                <Mono className="text-gold text-2xl mb-1">05</Mono>
                <Meta className="text-white/40 uppercase tracking-widest text-[10px]">Specialized Domains</Meta>
              </div>
              <div className="p-6 border border-white/5 bg-white/[0.02] rounded-lg">
                <Mono className="text-gold text-2xl mb-1">E2E</Mono>
                <Meta className="text-white/40 uppercase tracking-widest text-[10px]">Architecture Design</Meta>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Dense Interactive List */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10 mt-12 lg:mt-0">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={service.id}
                  className={cn(
                    "group relative border-b border-white/10 py-12 transition-colors duration-500 cursor-default",
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  )}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 px-6">
                    <div className="flex-shrink-0 mt-1">
                      <Meta className={cn("transition-colors duration-300 font-mono", isActive ? "text-gold" : "text-white/30 group-hover:text-white/50")}>
                        0{idx + 1}
                      </Meta>
                    </div>
                    
                    <div className="flex-grow">
                      <Mono className={cn("text-sm uppercase tracking-widest mb-3 transition-colors duration-300", isActive ? "text-gold" : "text-white/40 group-hover:text-white/60")}>
                        {service.problem}
                      </Mono>
                      <H3 className={cn("text-2xl md:text-3xl mb-4 transition-colors duration-300", isActive ? "text-white" : "text-white/60 group-hover:text-white/80")}>
                        {service.title}
                      </H3>
                      
                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out overflow-hidden",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="min-h-0">
                          <Body className="text-lg text-white/70 mb-8 max-w-2xl font-light leading-relaxed">
                            {service.description}
                          </Body>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {service.capabilities.map((cap, cIdx) => (
                              <div key={cIdx} className="flex items-center gap-3">
                                <span className="w-1 h-1 bg-gold/50 rounded-full" />
                                <Mono className="text-xs text-white/60 uppercase tracking-wider">{cap}</Mono>
                              </div>
                            ))}
                          </div>
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
