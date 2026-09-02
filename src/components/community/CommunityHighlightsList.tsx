"use client";

import { useState } from "react";
import { H3, Mono } from "@/components/ui/Typography";
import { Pagination } from "@/components/ui/Pagination";
import Image from "next/image";
import { communityHighlights } from "@/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ITEMS_PER_PAGE = 4;

export function CommunityHighlightsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(communityHighlights.length / ITEMS_PER_PAGE);

  const currentHighlights = communityHighlights.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {currentHighlights.map((highlight) => (
          <div
            key={highlight.id}
            className="group rounded-2xl border border-white/10 bg-carbon/40 hover:bg-carbon/60 hover:border-white/30 transition-all duration-500 flex flex-col overflow-hidden"
          >
            <div className="h-56 relative overflow-hidden border-b border-white/10">
              <Image
                src={highlight.imageUrl}
                alt={highlight.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <Mono className="text-xs text-obsidian font-bold px-3 py-1.5 bg-gold rounded-full shadow-lg">
                  {highlight.date}
                </Mono>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              {highlight.link ? (
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/link mb-4"
                >
                  <H3 className="text-2xl font-medium text-white group-hover/link:text-gold transition-colors">
                    {highlight.title}
                  </H3>
                </a>
              ) : (
                <H3 className="text-2xl font-medium text-white mb-4 group-hover:text-gold transition-colors">
                  {highlight.title}
                </H3>
              )}
              
              <p className="text-white/70 leading-relaxed mb-6">
                {highlight.summary}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {highlight.actionPoints?.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {highlight.link && (
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <a
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-mono text-sm uppercase tracking-widest group/btn"
                  >
                    View Field Record <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
