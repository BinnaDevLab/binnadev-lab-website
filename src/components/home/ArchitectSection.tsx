"use client";

import Link from "next/link";
import { BlueprintImage } from "@/components/ui/BlueprintImage";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";

export function ArchitectSection() {
  return (
    <section id="architect" className="py-32 md:py-48 bg-carbon relative overflow-hidden border-t border-white/5">
      {/* Animated SVG Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-5%"], y: ["0%", "5%"] }} 
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%]"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="architect-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="1" fill="gold" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#architect-grid)" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,transparent_0%,#0c0c0c_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Mono className="mb-4 block text-gold tracking-widest uppercase text-xs">
              The Origin
            </Mono>
            <H2 className="mb-8 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Obinna Franklin Duru
            </H2>
            <div className="space-y-6 max-w-lg">
              <Body className="text-lg md:text-xl text-white/80 font-light">
                BinnaDev is the origin, a single engineer committed to
                thoughtful, reliable work.
              </Body>
              <Body className="text-lg md:text-xl text-white/80 font-light">
                BinnaDevLab is what emerged when that practice became an
                environment. A place for others to learn, research, and build
                resilient systems together.
              </Body>
              <div className="pt-8">
                <Link
                  href="/architect"
                  className="group inline-flex items-center gap-4 text-white hover:text-gold transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-gold flex items-center justify-center transition-colors bg-white/5 group-hover:bg-gold/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <Mono className="uppercase tracking-widest text-sm">
                    Read the Origin
                  </Mono>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto lg:mr-0 p-4 order-1 lg:order-2"
          >
            <Link
              href="/architect"
              className="block relative aspect-[4/5] w-full h-full"
            >
              <BlueprintImage
                src="/images/architect/architect-asset-1.jpeg"
                alt="Obinna Franklin Duru"
                fill
                overlayColor="gold"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
