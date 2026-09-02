"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Body, Mono, H2 } from "@/components/ui/Typography";
import { testimonials } from "@/data/testimonials";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Briefcase,
  GitBranch,
} from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideLeft = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slideRight = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-slide every 3 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      slideLeft();
    }, 3000);
    // Reset timer when currentIndex changes manually
    return () => clearInterval(timer);
  }, [slideLeft, isHovered, currentIndex]);

  const handleDragEnd = (e: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      slideLeft();
    } else if (info.offset.x > 50) {
      slideRight();
    }
  };

  const getVariant = (index: number) => {
    const total = testimonials.length;
    let diff = index - currentIndex;

    // Adjust for infinite wrap
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      // Active center card
      return {
        x: "0%",
        scale: 1,
        opacity: 1,
        zIndex: 10,
        filter: "blur(0px)",
      };
    } else if (diff === -1) {
      // Prev card (Left)
      return {
        x: "-110%",
        scale: 0.9,
        opacity: 0.4,
        zIndex: 5,
        filter: "blur(2px)",
      };
    } else if (diff === 1) {
      // Next card (Right)
      return {
        x: "110%",
        scale: 0.9,
        opacity: 0.4,
        zIndex: 5,
        filter: "blur(2px)",
      };
    } else {
      // Hidden cards
      return {
        x: diff > 0 ? "200%" : "-200%",
        scale: 0.8,
        opacity: 0,
        zIndex: 0,
        filter: "blur(4px)",
      };
    }
  };

  return (
    <section className="py-24 md:py-40 bg-carbon border-t border-white/5 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <H2 className="text-white text-3xl md:text-5xl font-display tracking-tight uppercase">
            Testimonials
          </H2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-[1200px] h-[500px] md:h-[400px] flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, idx) => {
            const total = testimonials.length;
            let diff = idx - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;
            const isActive = diff === 0;

            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={getVariant(idx)}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  mass: 0.8,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={isActive ? handleDragEnd : undefined}
                onClick={() => {
                  if (diff === -1) slideRight();
                  if (diff === 1) slideLeft();
                }}
                className={`absolute w-[90%] md:w-[700px] p-8 md:p-12 border border-white/10 bg-obsidian/90 backdrop-blur-xl flex flex-col justify-between h-auto min-h-[300px] max-h-[100%] overflow-y-auto custom-scrollbar rounded-2xl shadow-2xl transition-colors duration-300 ${
                  isActive
                    ? "cursor-grab active:cursor-grabbing shadow-gold/10 border-gold/30 hover:border-gold/50 hover:shadow-gold/20"
                    : "cursor-pointer"
                }`}
              >
                {/* Top accent */}
                <div className="w-8 h-[2px] bg-gold/80 mb-8 shrink-0 shadow-[0_0_8px_rgba(255,215,0,0.8)]" />

                {/* Quote */}
                <Body className="text-white/90 leading-relaxed text-lg md:text-xl mb-10 font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </Body>

                {/* Attribution */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10 mt-auto shrink-0">
                  <div className="flex items-center gap-4 md:gap-5">
                    {testimonial.avatarUrl ? (
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-white/5 border border-white/20 shadow-inner flex items-center justify-center font-mono text-gold text-base md:text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-white text-base md:text-lg font-medium font-display tracking-wide drop-shadow-md">
                        {testimonial.author}
                      </p>
                      <p className="text-white/50 text-xs md:text-sm font-mono mt-1">
                        {testimonial.role}
                        {testimonial.organization
                          ? `, ${testimonial.organization}`
                          : ""}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  {testimonial.socialLinks && (
                    <div className="flex items-center gap-3">
                      {testimonial.socialLinks.twitter && (
                        <a
                          href={testimonial.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => !isActive && e.preventDefault()}
                          className={`p-2 md:p-3 border border-white/10 hover:border-gold/50 hover:text-gold hover:bg-gold/5 rounded-full transition-all duration-300 ${!isActive && "pointer-events-none"}`}
                        >
                          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                      {testimonial.socialLinks.linkedin && (
                        <a
                          href={testimonial.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => !isActive && e.preventDefault()}
                          className={`p-2 md:p-3 border border-white/10 hover:border-gold/50 hover:text-gold hover:bg-gold/5 rounded-full transition-all duration-300 ${!isActive && "pointer-events-none"}`}
                        >
                          <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                      {testimonial.socialLinks.github && (
                        <a
                          href={testimonial.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => !isActive && e.preventDefault()}
                          className={`p-2 md:p-3 border border-white/10 hover:border-gold/50 hover:text-gold hover:bg-gold/5 rounded-full transition-all duration-300 ${!isActive && "pointer-events-none"}`}
                        >
                          <GitBranch className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-6 mt-8 md:mt-12 z-20">
          <button
            onClick={slideRight}
            aria-label="Previous Testimonial"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-white/70 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <Mono className="text-white/60 text-xs tracking-widest font-bold">
            {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
            {testimonials.length.toString().padStart(2, "0")}
          </Mono>

          <button
            onClick={slideLeft}
            aria-label="Next Testimonial"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-white/70 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
