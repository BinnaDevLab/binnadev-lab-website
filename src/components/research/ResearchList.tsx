"use client";

import { useState } from "react";
import { projects } from "@/data";
import { H3, Mono } from "@/components/ui/Typography";
import { GitBranch, ArrowUpRight } from "lucide-react";
import { Pagination } from "@/components/ui/Pagination";
import Image from "next/image";

const ITEMS_PER_PAGE = 4;

export function ResearchList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-xl border border-white/5 bg-carbon hover:border-gold/50 transition-all duration-300 flex flex-col cursor-pointer"
          >
            <div className="h-48 overflow-hidden relative border-b border-white/5">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-mono text-white/40 px-1 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
