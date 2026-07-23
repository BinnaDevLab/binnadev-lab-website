"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";

export function ArchitectSection() {
  return (
    <section id="architect" className="py-32 md:py-48 bg-obsidian">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Mono className="mb-4 block text-gold">The Architect</Mono>
            <H2 className="mb-8 leading-tight">Obinna Franklin Duru</H2>
            <div className="space-y-6">
              <Body>
                Smart Contract Engineer focused on building reliable, secure, and efficient onchain systems.
              </Body>
              <Body>
                The vision behind BinnaDev Lab is simple: to build decentralized technologies people can trust by blending deep technical knowledge with a reflective approach. 
              </Body>
              <blockquote className="pl-6 border-l-2 border-royal italic text-muted text-lg my-8">
                "Let's build something you can trust with clarity, purpose, and excellence."
              </blockquote>
              <Link 
                href="/architect" 
                className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm mt-4"
              >
                Read the Profile →
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mr-0 border border-white/5 bg-carbon p-4"
          >
            <Link href="/architect" className="relative w-full h-full overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 block cursor-pointer group">
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image 
                src="/BinnaDev Branding/B1.jpg" 
                alt="Obinna Franklin Duru"
                fill
                className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
            {/* Architectural accent corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-royal" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-royal" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
