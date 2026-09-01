import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H1, Body, Mono } from "@/components/ui/Typography";
import { preload } from "react-dom";

export function HeroSection() {
  preload("/videos/hero-poster.jpg", { as: "image" });
  return (
    <section className="relative min-h-[85svh] pt-24 md:pt-12 pb-24 w-full bg-obsidian flex flex-col justify-between overflow-hidden">
      {/* 1. Architectural Notation & Framing (The "Visual Language") */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Frame borders */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/5" />
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-white/5" />

        {/* Lab Origin Coordinates */}
        <div className="absolute top-24 right-6 md:right-12 hidden md:flex flex-col items-end gap-1">
          <Mono className="text-[10px] text-white/30 tracking-widest">
            SYS.INIT.01
          </Mono>
          <Mono className="text-[10px] text-white/30 tracking-widest">
            COORD: 6.4550° N, 3.3841° E
          </Mono>
        </div>
      </div>

      {/* 2. Intelligent Background Video Composition */}
      {/* 
        Desktop: Video occupies the right side of the screen, masked cleanly. 
        Mobile: Video sits absolute at the top right, fading into the background.
      */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] lg:w-[50%] h-[50vh] md:h-full z-0">
        <div className="relative w-full h-full border-b md:border-b-0 md:border-l border-white/10 overflow-hidden">
          <video
            poster="/videos/hero-poster.jpg"
            aria-hidden="true"
            tabIndex={-1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 md:opacity-50"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradients to merge video into the obsidian background */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-transparent to-obsidian md:bg-gradient-to-l md:from-transparent md:to-obsidian" />

          {/* Subtle architectural overlay on the video */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />
        </div>
      </div>

      {/* 3. Main Content Composition */}
      <Container className="relative z-10 w-full max-w-[1800px] px-6 md:px-12 lg:px-24 flex-grow flex flex-col">
        <FadeIn
          delay={0}
          direction="up"
          className="max-w-3xl lg:max-w-4xl w-full md:w-[60%] lg:w-[50%] relative z-10"
        >
          {/* Authored Headline */}
          <H1 className="font-display tracking-tighter leading-[0.9] text-white uppercase flex flex-col gap-1 md:gap-2 mb-10">
            <span className="text-[clamp(4rem,8vw,6rem)]">Reasoning</span>
            <span className="text-[clamp(3.5rem,7vw,5rem)] text-white/60 md:pl-8">
              Precedes
            </span>
            <span className="text-[clamp(4rem,8vw,6rem)] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 relative w-fit">
              Coding.
              {/* Architectural underline on the final word */}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-[60%] h-[4px] bg-gold" />
            </span>
          </H1>

          {/* Clear Value Proposition */}
          <div className="mb-12">
            <Body className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
              <strong className="text-white font-medium">BinnaDevLab</strong>{" "}
              brings thoughtful engineering and local talent to the global Web3
              ecosystem. We build from first principles, guided by security,
              reliability, and excellence.
            </Body>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full max-w-2xl">
            <Link
              href="/cohorts"
              className="group relative flex items-center justify-between gap-6 px-8 py-4 bg-transparent border border-gold hover:bg-gold text-gold hover:text-obsidian rounded-sm transition-all duration-300 w-full sm:w-auto"
            >
              <Mono className="uppercase tracking-widest text-sm font-bold text-current">
                Join Cohort
              </Mono>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/collaborate"
              className="group relative flex items-center justify-between gap-6 px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white/80 hover:text-white rounded-sm transition-all duration-300 w-full sm:w-auto"
            >
              <Mono className="uppercase tracking-widest text-sm font-medium text-current">
                Commission Lab
              </Mono>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
