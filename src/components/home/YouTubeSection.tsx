"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { H2, Body, Mono, Meta } from "@/components/ui/Typography";
import { youtubeVideos } from "@/data/youtube";
import { socialLinks } from "@/data/social";

export function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());

  const handleIframeLoad = (id: string) => {
    setLoadedVideos((prev) => new Set(prev).add(id));
  };

  const getYoutubeId = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
      return parsed.searchParams.get("v") || "";
    } catch {
      return url.split("/").pop() || "";
    }
  };

  if (!youtubeVideos || youtubeVideos.length < 3) return null;

  const featured = youtubeVideos[0];
  const secondary = youtubeVideos.slice(1, 3);

  return (
    <section
      id="youtube"
      className="py-24 md:py-48 bg-obsidian relative overflow-hidden"
    >
      <Container className="relative z-10 max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-white" />
              <Mono>Broadcasts</Mono>
            </div>
            <H2 className="text-4xl md:text-6xl mb-6">
              Don&apos;t just read about it.
              <br />
              Watch it.
            </H2>

            <Body className="text-xl">
              Every video goes past the surface. No syntax drills. No
              follow-along tutorials that leave you more confused than when you
              started. Just the real reasoning behind how things work and where
              they break.
            </Body>
          </div>
          <Link
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 flex items-center gap-4 px-6 py-4 border border-white/20 hover:border-gold transition-colors duration-300"
          >
            <Mono className="text-white text-xs group-hover:text-gold transition-colors">
              Subscribe
            </Mono>
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Featured Video (Left 8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 group block relative"
          >
            <div
              onClick={() => setActiveVideo(featured.id)}
              className="relative aspect-video w-full overflow-hidden bg-carbon mb-6 border border-white/5 cursor-pointer"
            >
              {/* Iframe loads behind thumbnail when active */}
              {activeVideo === featured.id && (
                <iframe
                  className="absolute inset-0 w-full h-full z-10"
                  src={`https://www.youtube.com/embed/${getYoutubeId(featured.youtubeUrl)}?autoplay=1`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleIframeLoad(featured.id)}
                ></iframe>
              )}

              {/* Loading State Spinner */}
              {activeVideo === featured.id && !loadedVideos.has(featured.id) && (
                <div className="absolute inset-0 z-15 flex items-center justify-center bg-carbon">
                  <Loader2 className="w-8 h-8 text-gold animate-spin" />
                </div>
              )}

              {/* Thumbnail overlay fades out on click */}
              <div
                className={`absolute inset-0 z-20 transition-opacity duration-1000 ${
                  activeVideo === featured.id && loadedVideos.has(featured.id)
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 group"
                }`}
              >
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-gold transition-colors duration-300">
                    {activeVideo === featured.id ? (
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    ) : (
                      <Play className="w-8 h-8 ml-2 text-white group-hover:text-obsidian transition-colors" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <Meta className="text-gold mb-2 block">
                  Featured // {featured.duration}
                </Meta>
                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors">
                  {featured.title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stack (Right 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12 lg:border-l lg:border-white/10 lg:pl-16">
            {secondary.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group block relative"
              >
                <div
                  onClick={() => setActiveVideo(video.id)}
                  className="relative aspect-video w-full overflow-hidden bg-carbon mb-4 border border-white/5 cursor-pointer"
                >
                  {/* Iframe loads behind thumbnail when active */}
                  {activeVideo === video.id && (
                    <iframe
                      className="absolute inset-0 w-full h-full z-10"
                      src={`https://www.youtube.com/embed/${getYoutubeId(video.youtubeUrl)}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleIframeLoad(video.id)}
                    ></iframe>
                  )}

                  {/* Loading State Spinner */}
                  {activeVideo === video.id && !loadedVideos.has(video.id) && (
                    <div className="absolute inset-0 z-15 flex items-center justify-center bg-carbon">
                      <Loader2 className="w-6 h-6 text-gold animate-spin" />
                    </div>
                  )}

                  {/* Thumbnail overlay fades out on click */}
                  <div
                    className={`absolute inset-0 z-20 transition-opacity duration-1000 ${
                      activeVideo === video.id && loadedVideos.has(video.id)
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100 group"
                    }`}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-obsidian/80 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-gold transition-colors duration-300">
                        {activeVideo === video.id ? (
                          <Loader2 className="w-5 h-5 text-white animate-spin" />
                        ) : (
                          <Play className="w-5 h-5 ml-1 text-white group-hover:text-obsidian transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Meta className="text-white/60 mb-2 block">
                  {video.duration}
                </Meta>
                <h3 className="font-display text-lg text-white/80 group-hover:text-white transition-colors leading-snug">
                  {video.title}
                </h3>
              </motion.div>
            ))}

            {/* View All Prompt */}
            <Link
              href={socialLinks.youtube}
              target="_blank"
              className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between group"
            >
              <Mono className="text-white/60 group-hover:text-white transition-colors">
                View full archive
              </Mono>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
