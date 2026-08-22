"use client";

import { useState } from "react";
import { H2, H3, Body, Mono } from "@/components/ui/Typography";
import { Play, Video, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { youtubeVideos } from "@/data/youtube";

export function YouTubeShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <Mono className="text-gold mb-4 tracking-widest uppercase flex items-center gap-2">
            <Video className="w-4 h-4" /> Archive
          </Mono>
          <H2 className="text-3xl md:text-5xl mb-4 tracking-tight">Ideas Worth Taking Home</H2>
          <Body className="text-xl text-white/60 font-light leading-relaxed mt-2">
            Some conversations deserve more than a passing message. We capture questions, debates, experiments, and lessons that are worth carrying beyond the Lab.
          </Body>
        </div>
        <a
          href="https://www.youtube.com/@obinna-franklin-duru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-gold/50 rounded-lg text-sm font-mono text-white transition-all group"
        >
          Explore Archive
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {youtubeVideos.map((video) => {
          const videoId = video.youtubeUrl.split("/").pop();
          const isActive = activeVideoId === video.id;

          return (
            <div key={video.id} className="group flex flex-col h-full">
              <div 
                className={`relative aspect-video rounded-xl overflow-hidden bg-carbon border mb-4 transition-colors ${isActive ? 'border-gold' : 'border-white/5 group-hover:border-gold/50 cursor-pointer'}`}
                onClick={() => {
                  if (!isActive) setActiveVideoId(video.id);
                }}
              >
                {isActive ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-60 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-obsidian/80 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-royal group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div>
                <a 
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title block flex-1"
                >
                  <H3 className="text-lg font-medium text-white mb-2 leading-tight group-hover/title:text-gold transition-colors line-clamp-2">
                    {video.title}
                  </H3>
                </a>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <Mono className="text-xs text-muted tracking-wider">
                    {video.duration}
                  </Mono>
                  <a 
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-white transition-colors flex items-center gap-1 font-mono uppercase tracking-widest"
                  >
                    Watch on YT <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
