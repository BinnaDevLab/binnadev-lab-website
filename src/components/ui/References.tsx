import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { H3, Mono } from "./Typography";

export function References({ references }: { references?: string[] }) {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-white/10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded bg-carbon border border-white/5">
          <BookOpen className="w-5 h-5 text-gold" />
        </div>
        <H3 className="!mt-0 !mb-0 text-white/90">External References</H3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {references.map((ref, idx) => {
          // Attempt to extract domain for a nicer display
          let domain = ref;
          try {
            const url = new URL(ref);
            domain = url.hostname.replace(/^www\./, "");
          } catch (e) {
            // keep ref if not a valid URL
          }

          return (
            <a
              key={idx}
              href={ref}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-white/5 bg-carbon/30 hover:bg-carbon hover:border-gold/30 transition-all flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <Mono className="text-xs text-muted/70 uppercase tracking-widest">
                  {domain}
                </Mono>
                <ExternalLink className="w-3.5 h-3.5 text-muted/50 group-hover:text-gold transition-colors" />
              </div>
              <span className="text-sm text-white/80 group-hover:text-white transition-colors truncate block">
                {ref}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
