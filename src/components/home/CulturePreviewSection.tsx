"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { ArrowRight, Users, Quote } from "lucide-react";
import { CaseFileReview } from "@/components/culture/TestimonialMarquee";

export function CulturePreviewSection() {
  return (
    <section className="py-32 bg-carbon border-t border-white/5 relative overflow-hidden">
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
              <Users className="w-4 h-4" /> Lab Culture
            </Mono>
            <H2 className="mb-6">The Collective</H2>
            <Body className="text-lg text-muted">
              An active global community of security researchers, protocol architects, and smart contract engineers pushing the boundaries of web3 security.
            </Body>
          </div>
          <Link href="/culture">
            <button className="flex items-center gap-2 px-6 py-3 bg-obsidian hover:bg-white/5 border border-white/10 hover:border-gold/50 rounded-lg text-sm font-mono text-white transition-all group">
              Meet the Lab
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </Container>
      
      <div className="mt-8">
        <CaseFileReview />
      </div>

    </section>
  );
}
