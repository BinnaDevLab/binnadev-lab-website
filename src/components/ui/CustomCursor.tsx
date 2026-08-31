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

  // We use the brand gold (#f0c846) with a subtle dark outline because gold
  // holds strong visual contrast on both the dark obsidian sections and the
  // white/light sections, unlike white which disappears on white backgrounds.
  return (
    <>
      {/* The Core Dot (Immediate Tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] [box-shadow:0_0_0_1px_rgba(0,0,0,0.35),0_0_12px_rgba(240,200,70,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#f0c846",
        }}
      />

      {/* The Aura Ring (Spring Physics Delay) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2 border-[#f0c846] [box-shadow:0_0_0_1px_rgba(0,0,0,0.15),0_0_16px_rgba(240,200,70,0.4)]"
        animate={{
          width: isHovering ? 80 : 48,
          height: isHovering ? 80 : 48,
          backgroundColor: isHovering ? "rgba(240, 200, 70, 0.15)" : "rgba(240, 200, 70, 0)",
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
