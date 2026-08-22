import React from "react";

export function YouTubeEmbed({ youtubeId }: { youtubeId: string }) {
  if (!youtubeId) return null;

  return (
    <div className="my-10 relative overflow-hidden rounded-2xl border border-white/10 bg-carbon group">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/10 via-transparent to-gold/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="aspect-video relative z-10 p-1 bg-obsidian/50 backdrop-blur-sm">
        <iframe
          className="w-full h-full rounded-xl border border-white/5 shadow-2xl"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
