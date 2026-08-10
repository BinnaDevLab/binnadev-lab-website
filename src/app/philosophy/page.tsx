"use client";

import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { ArrowRight, Cpu, Network, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { BlueprintImage } from "@/components/ui/BlueprintImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { MANIFESTO_POINTS } from "@/data";

export default function PhilosophyPage() {
  return (
    <div className="bg-obsidian min-h-screen relative selection:bg-gold selection:text-obsidian">
      
      {/* 1. Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Philosophy Background" 
            fill
            sizes="100vw"
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Mono className="text-gold mb-8 block tracking-widest uppercase">The Manifesto</Mono>
            <H1 className="text-6xl md:text-8xl mb-8 leading-tight">Reasoning<br/>Precedes<br/>Coding.</H1>
            <Body className="text-2xl text-muted font-light max-w-2xl mx-auto">
              BinnaDev Lab exists to bridge the gap between writing code and architecting resilient, secure, and permanent digital infrastructure.
            </Body>
          </motion.div>
        </Container>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* 2. The Problem Statement */}
      <section className="py-32 bg-obsidian">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="w-12 h-12 text-white/10 mx-auto mb-8" />
            <H2 className="text-4xl md:text-5xl leading-tight mb-8">
              The industry is optimizing for speed.<br/>
              <span className="text-gold">We are optimizing for truth.</span>
            </H2>
            <Body className="text-xl text-muted leading-relaxed">
              Most educational platforms fail because they treat programming as a trade. They teach you the syntax of a language, but not the architecture of a system. They teach you how to deploy a contract, but not how to mathematically prove it cannot be exploited. We believe this paradigm is broken.
            </Body>
          </div>
        </Container>
      </section>

      {/* 3. Sticky Storytelling Section */}
      <section className="relative bg-carbon/20">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div key={idx} className="min-h-screen flex items-center sticky top-0 bg-obsidian overflow-hidden border-t border-white/5">
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-4">
                    <point.icon className="w-5 h-5" /> Chapter 0{idx + 1}
                  </Mono>
                  <H2 className="text-4xl md:text-6xl mb-8 leading-tight">{point.title}</H2>
                  <Body className="text-xl text-muted leading-relaxed">
                    {point.content}
                  </Body>
                </div>

                <div className={`relative h-[600px] w-full rounded-2xl overflow-hidden ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <BlueprintImage 
                    src={point.image} 
                    alt={point.title} 
                    fill
                    overlayColor={idx % 2 === 0 ? "royal" : "gold"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* 4. The Academy Connection */}
      <section className="py-40 bg-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Container className="relative z-10 text-center max-w-4xl">
          <Mono className="text-gold mb-8 block tracking-widest uppercase">The Consequence</Mono>
          <H2 className="text-5xl md:text-6xl mb-10 leading-tight">From Philosophy to Curriculum</H2>
          <Body className="text-xl text-muted leading-relaxed mb-12">
            The Progressive Smart Contract Security Academy is the direct manifestation of this philosophy. It is not a bootcamp. It is a grueling, comprehensive engineering laboratory designed to strip away bad habits, instill first-principles thinking, and forge elite security researchers.
          </Body>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
            <div className="p-8 bg-carbon/50 border border-white/10 rounded-xl">
              <Cpu className="w-8 h-8 text-white mb-6" />
              <H3 className="text-xl mb-3">EVM Mechanics</H3>
              <p className="text-sm text-muted">We begin at the base layer. Understanding memory, storage, and execution at the byte level.</p>
            </div>
            <div className="p-8 bg-carbon/50 border border-white/10 rounded-xl">
              <Network className="w-8 h-8 text-gold mb-6" />
              <H3 className="text-xl mb-3">Systems Architecture</H3>
              <p className="text-sm text-muted">Designing protocols mathematically before writing a single line of Solidity.</p>
            </div>
            <div className="p-8 bg-carbon/50 border border-white/10 rounded-xl">
              <ShieldAlert className="w-8 h-8 text-royal mb-6" />
              <H3 className="text-xl mb-3">Adversarial Testing</H3>
              <p className="text-sm text-muted">Replacing unit tests with stateful fuzzing, invariants, and formal verification.</p>
            </div>
          </div>

          <Link 
            href="/curriculum" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-obsidian rounded-sm font-medium hover:bg-gold transition-colors"
          >
            Explore the Curriculum <ArrowRight className="w-4 h-4" />
          </Link>
        </Container>
      </section>

      {/* 5. Cinematic Closing */}
      <section className="h-screen flex items-center justify-center bg-carbon relative border-t border-white/10 overflow-hidden">
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <H2 className="text-5xl md:text-8xl text-white/20 font-bold uppercase tracking-tighter mb-8 leading-none">
              Engineering<br/>is a<br/>Responsibility.
            </H2>
            <Body className="text-2xl text-white/60 max-w-2xl mx-auto mb-12">
              Join the collective. Help us build the future of decentralized systems.
            </Body>
            <Link 
              href="/collaborate" 
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm"
            >
              Partner with the Lab <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L16.439 16.035C17.027 14.887 17.321 13.785 17.321 12.729C17.321 11.232 16.791 10.021 15.731 9.09601C14.671 8.17101 13.415 7.70801 11.963 7.70801V3.03601C14.473 3.03601 16.631 3.92201 18.437 5.69401C20.243 7.46601 21.146 9.80301 21.146 12.705C21.146 14.369 20.813 15.961 20.147 17.481C19.481 19.001 18.57 20.174 17.414 21H14.017ZM2.85303 21L5.27503 16.035C5.86303 14.887 6.15703 13.785 6.15703 12.729C6.15703 11.232 5.62703 10.021 4.56703 9.09601C3.50703 8.17101 2.25103 7.70801 0.799026 7.70801V3.03601C3.30903 3.03601 5.46703 3.92201 7.27303 5.69401C9.07903 7.46601 9.98203 9.80301 9.98203 12.705C9.98203 14.369 9.64903 15.961 8.98303 17.481C8.31703 19.001 7.40603 20.174 6.25003 21H2.85303Z" />
    </svg>
  );
}
