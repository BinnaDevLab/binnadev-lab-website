"use client";

import { useState } from "react";
import { testimonials } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Briefcase,
  MessageCircle,
  FileText,
} from "lucide-react";
import { BlueprintImage } from "@/components/ui/BlueprintImage";

export function CaseFileReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const active = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      z: 0,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gold" />
          <span className="font-mono text-sm tracking-widest uppercase text-muted">
            Field Notes
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted">
            FILE {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
            {testimonials.length.toString().padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button aria-label="Previous Testimonial" onClick={handlePrev}
              className="p-2 border border-white/10 hover:border-gold/50 hover:text-gold transition-colors bg-carbon"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button aria-label="Next Testimonial" onClick={handleNext}
              className="p-2 border border-white/10 hover:border-gold/50 hover:text-gold transition-colors bg-carbon"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[450px] md:h-[300px] perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                handleNext();
              } else if (swipe > 10000) {
                handlePrev();
              }
            }}
            className="absolute inset-0 bg-carbon border border-white/10 p-8 md:p-10 flex flex-col justify-between cursor-grab active:cursor-grabbing"
          >
            {/* Top architectural markers */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-royal" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-royal" />

            <p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 flex-grow">
              &quot;{active.quote}&quot;
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 relative shrink-0">
                  {active.avatarUrl ? (
                    <BlueprintImage
                      src={active.avatarUrl}
                      alt={active.author}
                      fill
                      overlayColor="royal"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-obsidian border border-white/10 flex items-center justify-center font-mono text-gold">
                      {active.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-white tracking-wide">
                    {active.author}
                  </div>
                  <div className="text-sm font-mono text-muted">
                    {active.role}
                  </div>
                  {active.organization && (
                    <div className="text-xs text-gold mt-1 uppercase tracking-widest">
                      {active.organization}
                    </div>
                  )}
                </div>
              </div>


              {active.socialLinks && (
                <div className="flex items-center gap-3 shrink-0">
                  {active.socialLinks.twitter && (
                    <a
                      href={active.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/5 hover:border-gold/50 hover:text-gold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {active.socialLinks.linkedin && (
                    <a
                      href={active.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/5 hover:border-gold/50 hover:text-gold transition-colors"
                    >
                      <Briefcase className="w-4 h-4" />
                    </a>
                  )}
                  {active.socialLinks.github && (
                    <a
                      href={active.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/5 hover:border-gold/50 hover:text-gold transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

