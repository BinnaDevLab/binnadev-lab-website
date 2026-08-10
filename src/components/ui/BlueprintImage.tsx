"use client";

import Image, { ImageProps } from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlueprintImageProps extends ImageProps {
  containerClassName?: string;
  overlayColor?: "royal" | "gold";
}

export function BlueprintImage({ 
  containerClassName, 
  overlayColor = "royal",
  className,
  ...props 
}: BlueprintImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setCoordinates({ x, y });
  };

  const overlayClass = overlayColor === "royal" ? "bg-royal/10" : "bg-gold/10";
  const lineClass = overlayColor === "royal" ? "bg-royal/40" : "bg-gold/40";
  const textClass = overlayColor === "royal" ? "text-royal" : "text-gold";
  const borderClass = overlayColor === "royal" ? "border-royal" : "border-gold";

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden group cursor-crosshair bg-carbon border border-white/5", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Base Image */}
      <Image 
        className={cn("object-cover transition-transform duration-700 ease-out", isHovered ? "scale-105" : "scale-100", className)}
        {...props} 
      />

      {/* Blueprint Base Overlay */}
      <div className={cn("absolute inset-0 transition-opacity duration-500 z-10", overlayClass, isHovered ? "opacity-100" : "opacity-0")} />
      
      {/* Architectural Grid */}
      <div 
        className={cn("absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay")}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px"
        }}
      />

      {/* Crosshairs & Scanning Line */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={isHovered ? { y: "100%" } : { y: "-100%" }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className={cn("absolute top-0 left-0 w-full h-[2px] z-30 opacity-0 group-hover:opacity-100 mix-blend-screen", lineClass)}
      />

      {/* Active Coordinate Display */}
      {isHovered && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Vertical tracking line */}
          <div 
            className={cn("absolute top-0 bottom-0 w-[1px] opacity-40 mix-blend-screen", lineClass)}
            style={{ left: `${coordinates.x}%` }}
          />
          {/* Horizontal tracking line */}
          <div 
            className={cn("absolute left-0 right-0 h-[1px] opacity-40 mix-blend-screen", lineClass)}
            style={{ top: `${coordinates.y}%` }}
          />
          
          {/* Coordinate Box */}
          <div 
            className={cn("absolute bg-obsidian/95 border px-2 py-1 text-[10px] font-mono tracking-widest backdrop-blur-md shadow-2xl transition-all duration-75 ease-out", 
              overlayColor === "royal" ? "border-royal/50" : "border-gold/50",
              textClass
            )}
            style={{ 
              left: `${coordinates.x}%`, 
              top: `${coordinates.y}%`,
              transform: 'translate(12px, 12px)'
            }}
          >
            SYS.LOC [{coordinates.x.toString().padStart(2, '0')}:{coordinates.y.toString().padStart(2, '0')}]
          </div>
        </div>
      )}

      {/* Static Corner Nodes */}
      <div className={cn("absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity z-20", borderClass)} />
      <div className={cn("absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity z-20", borderClass)} />
      <div className={cn("absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity z-20", borderClass)} />
      <div className={cn("absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity z-20", borderClass)} />
    </div>
  );
}
