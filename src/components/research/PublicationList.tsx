"use client";

import { useState } from "react";
import { publications } from "@/data";
import { H3, Mono } from "@/components/ui/Typography";
import { FileText, ExternalLink } from "lucide-react";
import { Pagination } from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 6;

export function PublicationList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(publications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPublications = publications.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPublications.map((pub) => (
          <a
            key={pub.id}
            href={pub.link}
            className="block group p-6 rounded-xl border border-white/5 bg-carbon hover:border-gold/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-gold" />
                <Mono className="text-xs text-white/60 uppercase tracking-widest">
                  {pub.type}
                </Mono>
              </div>
              {pub.isExternal && (
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" />
              )}
            </div>

            <H3 className="text-lg mb-3 group-hover:text-gold transition-colors">
              {pub.title}
            </H3>
            <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-2">
              {pub.summary}
            </p>

            <div className="flex items-center gap-4 border-t border-white/5 pt-4">
              <Mono className="text-xs text-white/40">{pub.date}</Mono>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <Mono className="text-xs text-gold">{pub.readTime}</Mono>
            </div>
          </a>
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
