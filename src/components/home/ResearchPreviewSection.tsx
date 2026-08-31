"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, H3 } from "@/components/ui/Typography";
import { projects, Project } from "@/data";
import { ArrowRight, Beaker, GitBranch, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ResearchPreviewSection() {
  // Take only the first 2 projects for the preview
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="py-32 bg-[#F5F5F7] border-t border-black/5 relative overflow-hidden">
      {/* Animated SVG Network Background Layer */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%]"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="research-nodes-light"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="2" fill="#6D28D9" />
                <circle cx="80" cy="50" r="3" fill="black" />
                <circle cx="40" cy="80" r="1.5" fill="black" />
                <path
                  d="M 20 20 L 80 50 L 40 80 Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#research-nodes-light)"
            />
          </svg>
        </motion.div>
      </div>
      {/* Purple radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(109,40,217,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <H2 className="mb-6 text-obsidian">Research & Engineering</H2>
            <Body className="text-lg text-obsidian/70">
              Where our thinking becomes real. See the actual projects, security
              research, and open-source tools built by the Lab.
            </Body>
          </div>
          <Link href="/research">
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-900 hover:bg-purple-800 border border-purple-900 rounded-lg text-sm font-mono text-white transition-all group shadow-sm">
              View All Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1} direction="up">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-black/10 bg-white hover:border-purple-900/30 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300 flex flex-col h-full block"
                >
                  <ProjectCardContent project={project} />
                </a>
              ) : (
                <div className="group overflow-hidden rounded-xl border border-black/10 bg-white hover:border-purple-900/30 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-300 flex flex-col h-full">
                  <ProjectCardContent project={project} />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="h-48 md:h-64 overflow-hidden relative border-b border-black/10">
        <Image
          src={project.imageUrl || "/images/shared/shared-asset-1.jpeg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 transition-all duration-700 transform group-hover:scale-105"
        />
        {/* Dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <Mono className="text-xs text-white bg-purple-900 px-3 py-1 rounded-full font-bold shadow-sm">
            {project.category}
          </Mono>
          <Mono className="text-xs text-obsidian bg-white/90 backdrop-blur border border-black/10 px-3 py-1 rounded-full shadow-sm">
            {project.status}
          </Mono>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white">
        <H3 className="text-xl mb-3 text-obsidian group-hover:text-purple-800 transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-800" />
        </H3>
        <p className="text-obsidian/70 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <div className="flex items-center gap-1.5 text-purple-800">
            <GitBranch className="w-4 h-4" />
            <Mono className="text-xs tracking-wider text-obsidian">
              {project.date}
            </Mono>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string) => (
              <span
                key={tech}
                className="text-xs font-mono text-purple-900 bg-purple-50 px-2 py-1 rounded border border-purple-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
