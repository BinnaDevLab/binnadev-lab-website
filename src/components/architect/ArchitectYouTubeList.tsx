"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock } from "lucide-react";
import { Mono } from "@/components/ui/Typography";
import { youtubeVideos } from "@/data/youtube";

export function ArchitectYouTubeList() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getYoutubeId = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
      return parsed.searchParams.get("v") || "";
    } catch {
      return url.split("/").pop() || "";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {youtubeVideos.map((video) => (
        <div 
          key={video.id}
          className="group block overflow-hidden border border-white/10 rounded-xl hover:border-gold/50 transition-colors duration-500 bg-carbon/20"
        >
          {activeVideo === video.id ? (
            <div className="relative aspect-video w-full overflow-hidden bg-obsidian border-b border-white/10">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl)}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div 
              onClick={() => setActiveVideo(video.id)}
              className="relative aspect-video overflow-hidden cursor-pointer"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-royal/80 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                  <Play className="w-6 h-6 ml-1 text-white group-hover:text-obsidian transition-colors" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-obsidian/90 backdrop-blur-sm border border-white/10 rounded-md text-xs font-mono text-white/80">
                <Clock className="w-3 h-3 text-gold" />
                {video.duration}
              </div>
            </div>
          )}
          <div className="p-6">
            <h3 
              className="font-display font-medium text-lg text-white group-hover:text-gold transition-colors leading-tight cursor-pointer"
              onClick={() => !activeVideo && setActiveVideo(video.id)}
            >
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
