"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Core dot tracks exactly where the mouse is
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Aura ring has a delayed spring physics effect
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    // Disable entirely on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect if we are hovering over something clickable to animate the aura
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // We check if it's an anchor, button, or explicitly has a pointer cursor
      if (
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Add global class to hide the default operating system cursor
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  // We use a bright neon purple (#9d4edd) instead of the deep white purple (#4c0082)
  // because deep purple is nearly invisible against the obsidian black background.
  return (
    <>
      {/* The Core Dot (Immediate Tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* The Aura Ring (Spring Physics Delay) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-white/40 mix-blend-screen"
        animate={{
          width: isHovering ? 80 : 48,
          height: isHovering ? 80 : 48,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
