"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clientTestimonials } from "@/data";
import { H3, Mono } from "@/components/ui/Typography";
import Image from "next/image";

export function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slow continuous movement tied to scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <section ref={containerRef} className="py-32 border-y border-white/5 bg-carbon/20 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />

      <div className="mb-16 text-center">
        <H3 className="text-2xl text-white">Client Feedback</H3>
      </div>

      <motion.div style={{ x }} className="flex gap-8 items-stretch px-16 w-max">
        {/* Double array for infinite continuous scrolling effect */}
        {[...clientTestimonials, ...clientTestimonials].map((testimonial, idx) => (
          <div 
            key={`${testimonial.id}-${idx}`} 
            className="w-[400px] flex-shrink-0 p-8 rounded-xl border border-white/5 bg-obsidian flex flex-col hover:border-royal/50 transition-colors duration-500"
          >
            <p className="text-muted leading-relaxed mb-8 flex-1 italic text-lg">
              &quot;{testimonial.content}&quot;
            </p>
            
            <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0 relative">
                <Image 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  fill
                  sizes="48px"
                  className="object-cover grayscale opacity-80"
                />
              </div>
              <div>
                <H3 className="text-white text-base">{testimonial.name}</H3>
                <Mono className="text-xs text-royal">{testimonial.role}, {testimonial.company}</Mono>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
