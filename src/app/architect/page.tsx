"use client";

import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import {
  ArrowRight,
  Terminal,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TIMELINE, PRINCIPLES, RESEARCH } from "@/data";

export default function ArchitectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="bg-obsidian min-h-screen pt-32 pb-32 relative selection:bg-gold selection:text-obsidian"
      ref={containerRef}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-royal/5 via-carbon/10 to-transparent opacity-60" />
      </div>

      <Container className="relative z-10">
        {/* 1. Hero Section */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Mono className="text-gold mb-6 block tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4" /> The Architect
            </Mono>
            <H1 className="mb-8 text-5xl md:text-7xl leading-tight">
              Obinna Franklin Duru
            </H1>
            <Body className="text-2xl text-white/90 leading-relaxed mb-6 font-light">
              Smart Contract Engineer. Security Researcher. Founder of BinnaDev
              Lab.
            </Body>
            <Body className="text-lg text-muted leading-relaxed mb-10 max-w-xl">
              My work blends the rigor of secure smart contract engineering with
              the care of ethical design. I engineer systems that endure by
              choosing clarity and security over complexity.
            </Body>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-obsidian rounded-sm font-medium hover:bg-gold transition-colors"
              >
                Collaborate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/obinnafranklinduru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-sm font-medium hover:bg-white/5 transition-colors"
              >
                GitHub Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden border border-white/10 group bg-carbon/50">
              <Image
                src="/images/B2.jpg"
                alt="Obinna Franklin Duru"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-80" />
            </div>

            {/* Tech Stack Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-carbon border border-white/10 p-6 rounded-lg backdrop-blur-md shadow-2xl">
              <Mono className="text-xs text-gold uppercase tracking-widest mb-3">
                Core Stack
              </Mono>
              <div className="flex gap-4 text-white/60">
                <span className="hover:text-white transition-colors cursor-default">
                  Solidity
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Yul
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Foundry
                </span>
                <span className="hover:text-white transition-colors cursor-default">
                  Python
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Engineering Principles */}
        <section className="mb-40">
          <div className="mb-16">
            <H2 className="text-4xl md:text-5xl">Engineering Principles</H2>
            <Body className="text-xl text-muted mt-6 max-w-2xl">
              Smart contracts handle real value. I build with reliability,
              thoughtfulness, and excellence. These are the axioms that govern
              my work.
            </Body>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/10 rounded-xl bg-carbon/30 hover:bg-carbon hover:border-royal/50 transition-all group"
              >
                <Mono className="text-gold mb-4 block">0{idx + 1}</Mono>
                <H3 className="text-xl mb-4 text-white group-hover:text-gold transition-colors">
                  {principle.title}
                </H3>
                <p className="text-muted leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Journey Timeline */}
        <section className="mb-40 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <H2 className="text-4xl md:text-5xl">The Evolution</H2>
            <Body className="text-xl text-muted mt-6">
              How curiosity evolved into building a decentralized engineering
              institution.
            </Body>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-24 pb-12">
            {TIMELINE.map((item, idx) => (
              <div key={item.id} className="relative pl-12 md:pl-20 group">
                {/* Timeline Node */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-obsidian border-2 border-white/20 group-hover:border-gold group-hover:bg-gold/10 transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-gold transition-colors" />
                </div>

                <Mono className="text-gold tracking-widest uppercase text-sm mb-4 block">
                  {item.phase}
                </Mono>
                <H3 className="text-3xl mb-6 text-white">{item.title}</H3>
                <p className="text-lg text-muted leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Featured Research & Projects */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <H2 className="text-4xl md:text-5xl mb-6">Research & Writing</H2>
              <Body className="text-xl text-muted">
                I believe in building in public and sharing knowledge. My
                research focuses on protocol mechanics, security edge cases, and
                adversarial thinking.
              </Body>
            </div>
            <a
              href="https://binnadev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono uppercase tracking-widest text-sm"
            >
              View All Publications <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 border border-white/10 rounded-xl bg-carbon/20 hover:bg-carbon hover:border-white/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-12">
                  <Mono className="text-xs text-muted uppercase tracking-widest">
                    {doc.category}
                  </Mono>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" />
                </div>
                <H3 className="text-2xl text-white group-hover:text-gold transition-colors leading-tight">
                  {doc.title}
                </H3>
              </a>
            ))}
          </div>
        </section>

        {/* 5. Media & Closing */}
        <section className="border-t border-white/10 pt-32 text-center">
          <Mono className="text-gold mb-6 block tracking-widest uppercase">
            The Mission Continues
          </Mono>
          <H2 className="text-4xl md:text-6xl mb-8 max-w-4xl mx-auto">
            &quot;Reliability is the foundation of innovation. Thoughtful design
            prevents risk, and excellence turns code into craftsmanship.&quot;
          </H2>
          <Body className="text-xl text-muted mb-12">
            Let&apos;s build systems that endure.
          </Body>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/BinnaDev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-sm hover:bg-white hover:text-obsidian transition-colors font-medium"
            >
              X (Twitter)
            </a>
            <a
              href="https://linkedin.com/in/obinna-franklin-duru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-sm hover:bg-white hover:text-obsidian transition-colors font-medium"
            >
              LinkedIn
            </a>
            <Link
              href="/collaborate"
              className="px-8 py-4 bg-gold text-obsidian rounded-sm hover:bg-white transition-colors font-medium"
            >
              Work with the Lab
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
