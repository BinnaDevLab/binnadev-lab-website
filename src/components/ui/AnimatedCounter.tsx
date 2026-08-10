"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    bounce: 0,
    duration,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      // Format number (e.g., 2400 -> 2.4k, 15000 -> 15k)
      let formatted = Math.floor(latest).toString();
      if (latest >= 10000) {
        formatted = Math.floor(latest / 1000) + "k";
      } else if (latest >= 1000) {
        formatted = (Math.floor(latest / 100) / 10).toFixed(1) + "k";
      }
      setDisplayValue(formatted);
    });
  }, [spring]);

  return (
    <motion.span ref={ref} className="inline-block">
      {displayValue}
      {suffix}
    </motion.span>
  );
}
