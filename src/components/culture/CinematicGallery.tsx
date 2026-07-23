"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPool, GalleryItem } from "@/data/gallery";
import { H3 } from "@/components/ui/Typography";
import Image from "next/image";

const getRandomItem = (excludeIds: string[]) => {
  const available = galleryPool.filter((item) => !excludeIds.includes(item.id));
  if (available.length === 0) return galleryPool[Math.floor(Math.random() * galleryPool.length)];
  return available[Math.floor(Math.random() * available.length)];
};

function GalleryTile({ initialItem, index }: { initialItem: GalleryItem; index: number }) {
  const [currentItem, setCurrentItem] = useState(initialItem);

  useEffect(() => {
    // Randomize the swap interval between 4s to 8s so the tiles swap independently
    const intervalTime = Math.floor(Math.random() * 4000) + 4000;
    
    // Add a slight initial delay based on index so they don't all swap at once initially
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentItem((prev) => getRandomItem([prev.id]));
      }, intervalTime);
      return () => clearInterval(interval);
    }, index * 1000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 bg-carbon h-[350px] group cursor-default">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={currentItem.imageUrl} 
            alt={currentItem.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-obsidian/80 backdrop-blur border border-white/10 rounded text-[10px] font-mono tracking-widest uppercase text-gold">
            {currentItem.category}
          </span>
        </div>
        <H3 className="text-lg md:text-xl font-medium text-white">{currentItem.title}</H3>
      </div>
    </div>
  );
}

export function CinematicGallery() {
  // Select initial grid of 6 items deterministically to prevent hydration mismatch
  const [initialTiles] = useState<GalleryItem[]>(() => {
    return galleryPool.slice(0, 6);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {initialTiles.map((item, index) => (
        <div key={index} className={index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""}>
           <GalleryTile initialItem={item} index={index} />
        </div>
      ))}
    </div>
  );
}
