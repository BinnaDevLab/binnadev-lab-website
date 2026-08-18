"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono } from "@/components/ui/Typography";
import { Play, Video, X } from "lucide-react";
import Image from "next/image";
import { channelIntroVideoId } from "@/data/youtube";

export function VideoIntroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
              <Video className="w-4 h-4" /> Lab Overview
            </Mono>
            <H2 className="mb-6">Watch. Learn. Build.</H2>
            <Body className="text-lg text-muted">
              Get to know the ecosystem. An overview of how we operate, why we focus
              on fundamental architecture, and how to get involved.
            </Body>
          </div>
        </div>

        {/* Video Thumbnail / Player Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-carbon border border-white/10 group">
          {/* Thumbnail Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <Image
              src="/images/shared/shared-asset-1.jpeg"
              alt="BinnaDev Lab Operations"
              fill
              sizes="100vw"
              className="object-cover opacity-60 transition-all duration-700 transform group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Custom Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-24 h-24 rounded-full bg-royal/80 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-gold hover:text-obsidian hover:scale-110 transition-all duration-300 shadow-[0_0_50px_rgba(107,63,160,0.5)] group-hover:shadow-[0_0_80px_rgba(214,175,54,0.6)]"
              >
                <Play className="w-10 h-10 ml-2" />
              </button>
            </div>
          </div>

          {/* Actual Video Iframe */}
          {isPlaying && (
            <div className="absolute inset-0 bg-obsidian">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${channelIntroVideoId}?autoplay=1&modestbranding=1&rel=0`}
                title="BinnaDev Lab Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-obsidian/80 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
