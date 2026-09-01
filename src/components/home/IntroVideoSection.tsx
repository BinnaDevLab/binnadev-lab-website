"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Mono } from "@/components/ui/Typography";

export function IntroVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Lazy-load trigger: video only mounts when within 300px of viewport
  const isLoadedInView = useInView(containerRef, { once: true, margin: "300px" });
  // For pausing when scrolled out of view
  const isCurrentlyInView = useInView(containerRef, { margin: "-100px" });
  
  const [isPlayingWithAudio, setIsPlayingWithAudio] = useState(false);
  const [hasStartedFullPlayback, setHasStartedFullPlayback] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    if (!isCurrentlyInView && isPlayingWithAudio && videoRef.current) {
      videoRef.current.pause();
      setIsPlayingWithAudio(false);
    }
  }, [isCurrentlyInView, isPlayingWithAudio]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleEnded = () => {
    setIsPlayingWithAudio(false);
    setHasStartedFullPlayback(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(console.error);
    }
  };

  const handlePlayClick = () => {
    if (!videoRef.current) return;

    if (isPlayingWithAudio) {
      videoRef.current.pause();
      setIsPlayingWithAudio(false);
    } else {
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
          {isLoadedInView && (
            <video
              ref={videoRef}
              src="/videos/intro.mp4"
              poster="/videos/intro.jpg"
              className="w-full h-full object-cover transition-opacity duration-700"
              autoPlay
              muted
              loop={!hasStartedFullPlayback}
              playsInline
              onWaiting={() => setIsBuffering(true)}
              onPlaying={() => setIsBuffering(false)}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />
          )}

          {/* Phase 1: Preview Mode UI (Only shows before initial interaction) */}
          {!hasStartedFullPlayback && (
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-700">
              {/* Dark gradient wash to ensure UI legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/80 transition-opacity duration-500 group-hover:opacity-80" />
              {/* Simplified Play UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 transition-transform duration-700 md:group-hover:scale-110">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-obsidian/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white md:group-hover:bg-gold md:group-hover:text-obsidian transition-colors duration-500 shadow-2xl">
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" />
                  </div>
                  <Mono className="text-white/70 text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-1">
                    <span>Watch the Vision</span>
                    {duration > 0 && (
                      <span className="text-white/50 tracking-widest">{formatTime(duration)}</span>
                    )}
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

          {/* Progress Bar (Shows during playback or paused state after interaction) */}
          {hasStartedFullPlayback && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 md:h-2 bg-obsidian/40 backdrop-blur-md z-30 group-hover:h-3 transition-all duration-300">
              <div 
                className="h-full bg-gold transition-all duration-75 relative"
                style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              >
                {/* Subtle glow head on the progress bar */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Time indicator on hover */}
              <div className="absolute bottom-6 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Mono className="text-white text-[10px] md:text-xs drop-shadow-md bg-obsidian/60 px-2 py-1 rounded">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </Mono>
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
