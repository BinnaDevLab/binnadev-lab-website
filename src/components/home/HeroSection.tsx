import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H1, Body, Mono } from "@/components/ui/Typography";
import { preload } from "react-dom";

export function HeroSection() {
  preload("/videos/hero-poster.jpg", { as: "image" });
  return (
    <section className="relative min-h-[100svh] w-full bg-obsidian flex flex-col justify-between overflow-hidden">
      {/* 1. Architectural Notation & Framing (The "Visual Language") */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Frame borders */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/5" />
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-white/5" />

        {/* Corner markers */}
        <div className="absolute top-24 left-6 md:left-12 w-4 h-[1px] bg-white/30" />
        <div className="absolute top-24 left-6 md:left-12 w-[1px] h-4 bg-white/30" />
        <div className="absolute bottom-12 right-6 md:right-12 w-4 h-[1px] bg-white/30" />
        <div className="absolute bottom-12 right-6 md:right-12 w-[1px] h-4 bg-white/30 transform -translate-y-full translate-x-full" />

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
      <Container className="relative z-10 w-full max-w-[1800px] px-6 md:px-12 lg:px-24 flex-grow flex flex-col justify-center pt-32 pb-24">
        <FadeIn delay={0} direction="up" className="max-w-5xl w-full">
          {/* Lab Identifier */}
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <Mono className="text-gold tracking-widest uppercase text-xs">
              BinnaDev Lab_
            </Mono>
          </div>

          {/* Authored Headline */}
          <H1 className="font-display tracking-tighter leading-[0.85] text-white uppercase flex flex-col gap-2 md:gap-4 mb-12">
            <span className="text-[clamp(3.5rem,10vw,11rem)]">Reasoning</span>
            <span className="text-[clamp(3rem,8vw,9rem)] text-white/60 md:pl-16">
              Precedes
            </span>
            <span className="text-[clamp(4rem,11vw,12rem)] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 relative w-fit">
              Coding.
              {/* Architectural underline on the final word */}
              <span className="absolute -bottom-2 md:-bottom-4 left-0 w-[60%] h-[4px] md:h-[6px] bg-gold" />
            </span>
          </H1>

          {/* Intellectual Tension Copy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
            <div className="md:col-span-8 lg:col-span-6">
              <Body className="text-lg md:text-xl text-white/70 leading-relaxed">
                An engineering laboratory where understanding systems comes
                before writing code. A rigorous environment for research,
                collective learning, and building things that hold up.
              </Body>
            </div>
          </div>

          {/* Interaction & CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12 w-full">
            {/* Primary CTA: "ENTER THE LAB" */}
            <Link
              href="/cohorts"
              className="group relative flex items-center gap-6 cursor-pointer"
            >
              {/* Dynamic Line Extension interaction */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />

              <div className="relative z-10 w-14 h-14 rounded-full border border-gold flex items-center justify-center bg-obsidian transition-colors duration-500 group-hover:bg-gold">
                <ArrowRight className="w-5 h-5 text-gold group-hover:text-obsidian transition-colors duration-500" />
              </div>
              <Mono className="relative z-10 text-white uppercase tracking-widest text-sm font-semibold group-hover:text-gold transition-colors duration-500 bg-obsidian pr-4">
                Enter The Lab
              </Mono>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/collaborate"
              className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
            >
              <Mono className="text-xs uppercase tracking-widest">
                Request Engineering Services
              </Mono>
              <div className="w-4 h-[1px] bg-white/40 group-hover:w-8 group-hover:bg-white transition-all duration-300" />
            </Link>
          </div>
        </FadeIn>
      </Container>

      {/* 4. Reason to Scroll / Narrative Progression */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 pb-8 flex justify-between items-end">
        <div className="flex items-center gap-4">
          <Mono className="text-[10px] text-white/60 tracking-widest">
            01 / 05
          </Mono>
          <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-1/2 bg-white animate-[scroll-line_2s_linear_infinite]" />
          </div>
          <Mono className="text-[10px] text-white/60 tracking-widest uppercase">
            Begin Progression
          </Mono>
        </div>

        {/* Scroll indicator for mobile (hidden on desktop since it might clash with video) */}
        <div className="md:hidden">
          <ArrowDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
