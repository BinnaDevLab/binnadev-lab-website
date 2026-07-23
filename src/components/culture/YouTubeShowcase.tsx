"use client";

import { Container } from "@/components/ui/Container";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { Play, Video, ArrowRight } from "lucide-react";
import Image from "next/image";

export function YouTubeShowcase() {
  const videos = [
    {
      id: "yt-1",
      title: "Deconstructing AMM Vulnerabilities",
      duration: "45:20",
      thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2"
    },
    {
      id: "yt-2",
      title: "Formal Verification in Practice",
      duration: "32:15",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2"
    },
    {
      id: "yt-3",
      title: "Stateful Fuzzing with Echidna",
      duration: "1:05:10",
      thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2"
    }
  ];

  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <Mono className="text-royal mb-4 block tracking-widest uppercase flex items-center gap-2">
            <Video className="w-4 h-4" /> Lab Media
          </Mono>
          <H2>Official Channel</H2>
          <Body className="text-muted mt-2">Watch full workshops, audits, and research presentations.</Body>
        </div>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-royal/50 rounded-lg text-sm font-mono text-white transition-all group">
          Subscribe
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-carbon border border-white/5 mb-4 group-hover:border-royal/50 transition-colors">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-obsidian/80 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-royal group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-obsidian/90 backdrop-blur rounded text-xs font-mono text-white border border-white/10">
                {video.duration}
              </div>
            </div>
            <H3 className="text-lg group-hover:text-gold transition-colors">{video.title}</H3>
          </div>
        ))}
      </div>
    </section>
  );
}
