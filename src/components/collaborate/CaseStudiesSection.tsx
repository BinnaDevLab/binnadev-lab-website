"use client";

import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono, Meta } from "@/components/ui/Typography";
import { caseStudies, ArchNode } from "@/data/caseStudies";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";

function ArchitectureDiagram({ nodes }: { nodes: ArchNode[] }) {
  return (
    <div className="font-mono text-sm text-white/70 leading-loose space-y-4">
      {nodes.map((node, idx) => {
        if (node.style === "flow") {
          return (
            <div
              key={idx}
              className="p-4 border border-white/10 bg-carbon rounded-md flex justify-between items-center hover:border-white/20 transition-colors"
            >
              <span>{node.label}</span>
              <span className="text-white/30">→</span>
              <span className="text-gold">{node.value}</span>
            </div>
          );
        }
        if (node.style === "box") {
          return (
            <div
              key={idx}
              className="p-4 border border-white/30 bg-white/10 rounded-md text-center text-white"
            >
              {node.label}
            </div>
          );
        }
        if (node.style === "milestone") {
          return (
            <div
              key={idx}
              className="p-3 border-l-2 border-green-500/50 bg-green-500/5 flex justify-between"
            >
              <span>{node.label}</span>
              <span>{node.value}</span>
            </div>
          );
        }
        if (node.style === "note") {
          return (
            <div
              key={idx}
              className="mt-8 pt-4 border-t border-white/10 text-xs text-white/60"
            >
              {node.label}
            </div>
          );
        }
        if (node.style === "split") {
          return (
            <div key={idx} className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gold/30 bg-gold/5 rounded text-center text-xs">
                {node.label}
              </div>
              <div className="p-4 border border-white/30 bg-white/5 rounded text-center text-xs">
                {node.secondaryLabel}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

import { motion } from "framer-motion";

export function CaseStudiesSection() {
  return (
    <section
      id="architectural-evidence"
      className="py-24 relative z-10 border-t border-white/5 bg-carbon/20 overflow-hidden"
    >
      {/* Real Animated SVG Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -80] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[200%] opacity-20"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="case-studies-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#case-studies-grid)" />
          </svg>
        </motion.div>

        {/* Gradients to fade out the grid edges so it blends nicely into the dark theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,rgba(10,10,10,1)_100%)] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <FadeIn className="mb-32 max-w-2xl">
          <H2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            Architectural Evidence
          </H2>
        </FadeIn>

        <div className="space-y-40">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              {/* Left Side: Technical Diagram / Concept Representation */}
              <FadeIn
                delay={0.1}
                direction="none"
                className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <div className="sticky top-32 rounded-xl overflow-hidden border border-white/10 bg-obsidian p-8 shadow-2xl relative group">
                  {/* Subtle Image Background/Header */}
                  {study.imageUrl && (
                    <div className="relative h-48 -mx-8 -mt-8 mb-8 border-b border-white/10 overflow-hidden">
                      <Image
                        src={study.imageUrl}
                        alt={study.title}
                        fill
                        className="object-cover opacity-60 mix-blend-screen group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <Mono className="text-gold text-xs tracking-widest uppercase block">
                      Architecture Concept
                    </Mono>
                  </div>

                  <ArchitectureDiagram nodes={study.architectureNodes} />

                  <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/50 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highly Visible Repository Link - MOVED TO ALIGN WITH IMAGE */}
                  {study.projectLink && (
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <a
                        href={study.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between gap-3 px-6 py-4 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-lg text-white/80 hover:text-gold transition-all duration-300 font-mono text-xs tracking-widest uppercase group"
                      >
                        <span className="flex items-center gap-3">
                          <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          View Source
                        </span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* Right Side: Content */}
              <StaggerGroup className="lg:col-span-7 space-y-12">
                <div>
                  <Meta className="text-gold mb-4 text-xs tracking-widest uppercase">
                    Project 0{idx + 1}
                  </Meta>
                  <H3 className="text-3xl md:text-4xl mb-4 leading-tight">
                    {study.title}
                  </H3>

                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono tracking-widest text-white/60 uppercase">
                    {study.clientWebsite ? (
                      <a
                        href={study.clientWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-white transition-colors"
                      >
                        Client: {study.client}{" "}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>Client: {study.client}</span>
                    )}

                    {study.parentCompany && (
                      <>
                        <span className="text-white/20">|</span>
                        {study.parentWebsite ? (
                          <a
                            href={study.parentWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-white transition-colors"
                          >
                            Parent: {study.parentCompany}{" "}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>Parent: {study.parentCompany}</span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <StaggerItem>
                  <Mono className="text-sm text-white/60 uppercase tracking-widest mb-3">
                    The Problem
                  </Mono>
                  <Body className="text-lg text-white/70 leading-relaxed font-light">
                    {study.challenge}
                  </Body>
                </StaggerItem>

                <StaggerItem>
                  <Mono className="text-sm text-white/60 uppercase tracking-widest mb-3">
                    Architectural Insight
                  </Mono>
                  <Body className="text-lg text-white/90 leading-relaxed font-medium">
                    {study.architectureInsight}
                  </Body>
                </StaggerItem>

                <StaggerItem>
                  <Mono className="text-sm text-white/60 uppercase tracking-widest mb-3">
                    The Evidence
                  </Mono>
                  <Body className="text-lg text-white/70 leading-relaxed font-light">
                    {study.approach}
                  </Body>
                </StaggerItem>

                <StaggerItem className="pt-8 border-t border-white/10">
                  <Mono className="text-sm text-gold uppercase tracking-widest mb-3">
                    Commercial Lesson
                  </Mono>
                  <Body className="text-xl text-white leading-relaxed italic font-light">
                    &quot;{study.outcome}&quot;
                  </Body>
                </StaggerItem>
              </StaggerGroup>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
