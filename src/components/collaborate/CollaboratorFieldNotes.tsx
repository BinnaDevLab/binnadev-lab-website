"use client";

import { useState, useEffect, useRef } from "react";
import { clientTestimonials } from "@/data";
import { H3, Mono } from "@/components/ui/Typography";
import {
  FileText,
  ChevronRight,
  Terminal,
  Play,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export function CollaboratorFieldNotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000; // 5 seconds per testimonial for readability
  const activeTestimonial = clientTestimonials[activeIndex];
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused) {
        progressRef.current += (deltaTime / DURATION) * 100;

        if (progressRef.current >= 100) {
          progressRef.current = 0;
          setActiveIndex((prev) => (prev + 1) % clientTestimonials.length);
        }
        setProgress(progressRef.current);
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualSelect = (idx: number) => {
    setActiveIndex(idx);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <section className="py-32 border-y border-white/5 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-carbon/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <Mono className="text-gold mb-2 flex items-center gap-2 text-sm uppercase tracking-widest">
            <FileText className="w-4 h-4" /> Case Files
          </Mono>
          <H3 className="text-3xl text-white">Collaborator Field Notes</H3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Index Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-2">
            {clientTestimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => handleManualSelect(idx)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`text-left p-4 rounded border transition-all flex items-center justify-between relative overflow-hidden ${
                  activeIndex === idx
                    ? "bg-carbon/50 border-gold text-white"
                    : "bg-transparent border-white/5 text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {/* Progress Background */}
                {activeIndex === idx && (
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-gold/5 z-0"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="relative z-10">
                  <div className="font-mono text-xs uppercase tracking-widest mb-1 opacity-70">
                    Case // 00{idx + 1}
                  </div>
                  <div className="font-medium">{t.company}</div>
                </div>
                {activeIndex === idx && (
                  <ChevronRight className="w-4 h-4 text-gold relative z-10" />
                )}
              </button>
            ))}
          </div>

          {/* Field Note Content */}
          <div
            className="md:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-carbon/30 border border-white/10 p-8 md:p-12 relative min-h-[450px] flex flex-col">
              <div className="absolute top-0 right-0 p-4 border-l border-b border-white/10 bg-obsidian/50 text-xs font-mono text-muted uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" /> STATUS: VERIFIED
              </div>

              <div className="mb-8 border-b border-white/10 pb-8 mt-4 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative w-20 h-20 border border-white/10 rounded-sm overflow-hidden shrink-0">
                  <Image
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="80px"
                  />
                </div>
                <div>
                  <Mono className="text-gold mb-2 text-sm uppercase tracking-widest">
                    Client Identity
                  </Mono>
                  <div className="text-2xl text-white font-medium mb-1 flex items-center gap-3">
                    {activeTestimonial.name}
                    {activeTestimonial.socialLinks && (
                      <div className="flex items-center gap-2">
                        {activeTestimonial.socialLinks.x && (
                          <a
                            href={activeTestimonial.socialLinks.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-white transition-colors"
                            aria-label="X (Twitter)"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {activeTestimonial.socialLinks.linkedin && (
                          <a
                            href={activeTestimonial.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-white transition-colors"
                            aria-label="LinkedIn"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="text-muted font-mono text-sm">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <Mono className="text-gold mb-4 text-sm uppercase tracking-widest">
                  Review Notes
                </Mono>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic font-light">
                  &quot;{activeTestimonial.content}&quot;
                </p>
              </div>

              {activeTestimonial.videoUrl && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={activeTestimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 bg-carbon hover:bg-white hover:text-black transition-colors font-mono text-sm uppercase tracking-widest group"
                  >
                    <Play className="w-4 h-4 group-hover:fill-black" /> Watch
                    their experience
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
