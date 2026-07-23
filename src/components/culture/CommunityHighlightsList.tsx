"use client";

import { useState } from "react";
import { H3, Mono } from "@/components/ui/Typography";
import { Pagination } from "@/components/ui/Pagination";
import Image from "next/image";
import { communityHighlights } from "@/data";

const ITEMS_PER_PAGE = 3;

export function CommunityHighlightsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(communityHighlights.length / ITEMS_PER_PAGE);

  const currentHighlights = communityHighlights.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {currentHighlights.map((highlight) => (
          <div key={highlight.id} className="group overflow-hidden rounded-xl border border-white/5 bg-carbon/50 hover:border-royal/40 transition-colors">
            <div className="h-48 overflow-hidden relative">
              <Image 
                src={highlight.imageUrl} 
                alt={highlight.title} 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            </div>
            <div className="p-6 relative z-10 -mt-6">
              <Mono className="text-xs text-gold mb-3 block px-3 py-1 bg-obsidian border border-white/10 rounded-full w-fit">
                {highlight.date}
              </Mono>
              <H3 className="text-xl font-medium text-white mb-3 group-hover:text-gold transition-colors">{highlight.title}</H3>
              <p className="text-sm text-muted leading-relaxed">{highlight.description}</p>
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
