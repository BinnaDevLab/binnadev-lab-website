"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock } from "lucide-react";
import { youtubeVideos } from "@/data/youtube";

export function ArchitectYouTubeList() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const getYoutubeId = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
      return parsed.searchParams.get("v") || "";
    } catch {
      return url.split("/").pop() || "";
    }
  };

  const handlePlay = (id: string) => {
    setActiveVideo(id);
    setIsVideoLoading(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {youtubeVideos.map((video) => (
        <div
          key={video.id}
          className="group block overflow-hidden border border-white/10 rounded-xl hover:border-gold/50 transition-colors duration-500 bg-carbon/20"
        >
          <div
            onClick={() => activeVideo !== video.id && handlePlay(video.id)}
            className={`relative aspect-video w-full overflow-hidden border-b border-white/10 ${activeVideo !== video.id ? "cursor-pointer" : ""}`}
          >
            {/* Always render the thumbnail as base layer */}
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`object-cover transition-all duration-700 ${activeVideo === video.id ? "opacity-30" : "opacity-70 group-hover:opacity-100 group-hover:scale-105"}`}
            />

            {/* Overlay elements - only show when NOT active */}
            {activeVideo !== video.id && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                    <Play className="w-6 h-6 ml-1 text-white group-hover:text-obsidian transition-colors" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-obsidian/90 backdrop-blur-sm border border-white/10 rounded-md text-xs font-mono text-white/80">
                  <Clock className="w-3 h-3 text-gold" />
                  {video.duration}
                </div>
              </>
            )}

            {/* Iframe & Loading State - only when ACTIVE */}
            {activeVideo === video.id && (
              <>
                {/* Loading Spinner */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {/* Iframe */}
                <iframe
                  className={`absolute inset-0 z-20 w-full h-full transition-opacity duration-500 ${isVideoLoading ? "opacity-0" : "opacity-100"}`}
                  src={`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl)}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsVideoLoading(false)}
                ></iframe>
              </>
            )}
          </div>
          <div className="p-6">
            <h3
              className="font-display font-medium text-lg text-white group-hover:text-gold transition-colors leading-tight cursor-pointer"
              onClick={() => activeVideo !== video.id && handlePlay(video.id)}
            >
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
