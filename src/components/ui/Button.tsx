"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-sm tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-royal disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-obsidian text-foreground border border-royal/50 hover:border-royal hover:bg-royal/10 hover:shadow-[0_0_15px_rgba(107,63,160,0.5)]",
      secondary:
        "bg-carbon text-foreground border border-white/5 hover:border-white/10 hover:bg-white/5",
      outline:
        "bg-transparent text-gold border border-gold/50 hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(214,175,54,0.3)]",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 px-4",
      lg: "h-14 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
