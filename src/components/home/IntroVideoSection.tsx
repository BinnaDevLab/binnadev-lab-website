"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Mono } from "@/components/ui/Typography";

export function IntroVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Lazy-load trigger: video only mounts when within 300px of viewport
  const isInView = useInView(containerRef, { once: true, margin: "300px" });
  
  const [isPlayingWithAudio, setIsPlayingWithAudio] = useState(false);
  const [hasStartedFullPlayback, setHasStartedFullPlayback] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  const handlePlayClick = () => {
    if (!videoRef.current) return;

    if (isPlayingWithAudio) {
      videoRef.current.pause();
      setIsPlayingWithAudio(false);
    } else {
      // If it's the very first time clicking, restart from the beginning
      if (!hasStartedFullPlayback) {
        videoRef.current.currentTime = 0;
        setHasStartedFullPlayback(true);
      }
      
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlayingWithAudio(true);
        }).catch((error) => {
          console.error("Video playback failed:", error);
          // Fallback if browser blocks audio autoplay unmuting
          setIsPlayingWithAudio(false);
        });
      }
    }
  };

  return (
    <section 
      id="intro-video" 
      className="py-16 md:py-32 bg-obsidian relative border-b border-white/5"
      ref={containerRef}
    >
      <Container className="relative z-10 max-w-[1600px] px-0 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative w-full aspect-[4/5] md:aspect-[21/9] bg-carbon md:border border-white/10 overflow-hidden group transition-all duration-1000 cursor-pointer ${
            isPlayingWithAudio ? "md:scale-[1.02] shadow-2xl shadow-gold/5" : "md:scale-100"
          }`}
          onClick={handlePlayClick}
        >
          {/* Only render video if container is near viewport to save bandwidth on initial load */}
          {isInView && (
            <video
              ref={videoRef}
              src="/videos/intro.mp4"
              poster="/videos/intro.jpg"
              className="w-full h-full object-cover transition-opacity duration-700"
              autoPlay
              muted
              loop
              playsInline
              onWaiting={() => setIsBuffering(true)}
              onPlaying={() => setIsBuffering(false)}
            />
          )}

          {/* Phase 1: Preview Mode UI (Only shows before initial interaction) */}
          {!hasStartedFullPlayback && (
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-700">
              {/* Dark gradient wash to ensure UI legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/80 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Telemetry Data */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <Mono className="text-gold text-[10px] md:text-xs tracking-widest uppercase">
                  [Playback: Preview]
                </Mono>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 hidden md:block">
                <Mono className="text-white/50 text-xs tracking-widest uppercase">
                  Source: Local Archive
                </Mono>
              </div>
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden md:block">
                <Mono className="text-white/50 text-xs tracking-widest uppercase">
                  Audio: Muted
                </Mono>
              </div>

              {/* Centered Play Action */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 transition-transform duration-700 md:group-hover:scale-110">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white md:group-hover:bg-gold md:group-hover:text-obsidian transition-colors duration-500 shadow-2xl">
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" />
                  </div>
                  <Mono className="text-white/70 text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    Click to Unmute & Restart
                  </Mono>
                </div>
              </div>
            </div>
          )}

          {/* Phase 2: Playing State Hover Overlay (Pause) */}
          {isPlayingWithAudio && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-obsidian/10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-xl">
                <Pause className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>
          )}

          {/* Phase 2: Paused State Overlay */}
          {hasStartedFullPlayback && !isPlayingWithAudio && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 bg-obsidian/40 backdrop-blur-[2px] transition-all duration-500">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-obsidian/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" />
              </div>
            </div>
          )}

          {/* Buffering State */}
          {isBuffering && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-obsidian/50 backdrop-blur-sm">
              <Loader2 className="w-12 h-12 text-gold animate-spin" />
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
