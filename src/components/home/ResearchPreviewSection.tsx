import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, H3 } from "@/components/ui/Typography";
import { projects, Project } from "@/data";
import { ArrowRight, Beaker, GitBranch, ArrowUpRight } from "lucide-react";

export function ResearchPreviewSection() {
  // Take only the first 2 projects for the preview
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(43,76,126,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
              <Beaker className="w-4 h-4" /> The Evidence
            </Mono>
            <H2 className="mb-6">Research & Engineering</H2>
            <Body className="text-lg text-muted">
              Where the Lab&apos;s thinking becomes observable. Protocols,
              security research, and open-source fuzzing harnesses. The actual
              output of the practice.
            </Body>
          </div>
          <Link href="/research">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 rounded-lg text-sm font-mono text-white transition-all group">
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
                  className="group overflow-hidden rounded-xl border border-white/5 bg-carbon hover:border-gold/50 transition-all duration-300 flex flex-col cursor-pointer h-full block"
                >
                  <ProjectCardContent project={project} />
                </a>
              ) : (
                <div className="group overflow-hidden rounded-xl border border-white/5 bg-carbon hover:border-gold/50 transition-all duration-300 flex flex-col h-full">
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
      <div className="h-48 md:h-64 overflow-hidden relative border-b border-white/5">
        <Image
          src={project.imageUrl || "/images/shared/shared-asset-1.jpeg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-60 transition-all duration-700 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <Mono className="text-xs text-obsidian bg-gold px-3 py-1 rounded-full font-bold">
            {project.category}
          </Mono>
          <Mono className="text-xs text-white bg-obsidian/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full">
            {project.status}
          </Mono>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <H3 className="text-xl mb-3 group-hover:text-gold transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
        </H3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <div className="flex items-center gap-1.5 text-gold">
            <GitBranch className="w-4 h-4" />
            <Mono className="text-xs tracking-wider">{project.date}</Mono>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string) => (
              <span
                key={tech}
                className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded"
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
