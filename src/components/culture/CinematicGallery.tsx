"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPool, GalleryItem } from "@/data/gallery";
import { H3 } from "@/components/ui/Typography";
import { BlueprintImage } from "@/components/ui/BlueprintImage";

function GalleryTile({
  itemA,
  itemB,
  index,
}: {
  itemA: GalleryItem;
  itemB: GalleryItem;
  index: number;
}) {
  const [showB, setShowB] = useState(false);
  const currentItem = showB ? itemB : itemA;

  useEffect(() => {
    // Stagger the transitions so the gallery feels alive but not frantic
    const baseInterval = 6000;
    // Add offset based on index so they don't all flip at the same time
    const initialDelay = index * 1500;

    const timeout = setTimeout(() => {
      setShowB(true); // First flip
      const interval = setInterval(() => {
        setShowB((prev) => !prev);
      }, baseInterval);
      return () => clearInterval(interval);
    }, initialDelay);

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
          <BlueprintImage
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            overlayColor="gold"
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
        <H3 className="text-lg md:text-xl font-medium text-white">
          {currentItem.title}
        </H3>
      </div>
    </div>
  );
}

export function CinematicGallery() {
  // Use all 12 items from the pool (6 pairs)
  const tilePairs = [
    { a: galleryPool[0], b: galleryPool[1] },
    { a: galleryPool[2], b: galleryPool[3] },
    { a: galleryPool[4], b: galleryPool[5] },
    { a: galleryPool[6], b: galleryPool[7] },
    { a: galleryPool[8], b: galleryPool[9] },
    { a: galleryPool[10], b: galleryPool[11] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tilePairs.map((pair, index) => (
        <div
          key={index}
          className={
            index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
          }
        >
          <GalleryTile itemA={pair.a} itemB={pair.b} index={index} />
        </div>
      ))}
    </div>
  );
}
