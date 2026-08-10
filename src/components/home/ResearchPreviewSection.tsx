"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { projects } from "@/data";
import { ArrowRight, Beaker } from "lucide-react";

export function ResearchPreviewSection() {
  // Take only the first 2 projects for the preview
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal/5 blur-[200px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Mono className="text-royal mb-4 block tracking-widest uppercase flex items-center gap-2">
              <Beaker className="w-4 h-4" /> Lab Output
            </Mono>
            <H2 className="mb-6">Research & Engineering</H2>
            <Body className="text-lg text-muted">
              We do more than teach. The BinnaDev collective actively builds
              smart contract protocols, publishes security research, and
              develops open-source fuzzing harnesses.
            </Body>
          </div>
          <Link href="/research">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-royal/50 rounded-lg text-sm font-mono text-white transition-all group">
              View All Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-carbon/50 border border-white/5 hover:border-royal/30 rounded-xl transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-obsidian border border-white/10 rounded-full text-xs font-mono text-muted">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-muted/50">
                  {project.date}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted mb-6">{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-wider font-mono text-muted/80 bg-white/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
