"use client";

import Link from "next/link";
import { BlueprintImage } from "@/components/ui/BlueprintImage";
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
            className="order-2 lg:order-1"
          >
            <Mono className="mb-4 block text-gold">The Architect</Mono>
            <H2 className="mb-8 leading-tight">Obinna Franklin Duru</H2>
            <div className="space-y-6">
              <Body>
                Smart Contract Engineer focused on building reliable, secure,
                and efficient onchain systems.
              </Body>
              <Body>
                The vision behind BinnaDev Lab is simple: to build decentralized
                technologies people can trust by blending deep technical
                knowledge with a reflective approach.
              </Body>
              <blockquote className="pl-6 border-l-2 border-royal italic text-muted text-lg my-8">
                &quot;Let&apos;s build something you can trust with clarity,
                purpose, and excellence.&quot;
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
