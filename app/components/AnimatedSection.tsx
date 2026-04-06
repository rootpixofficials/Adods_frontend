"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type AnimationType = 
  | "up" | "down" | "left" | "right" | "none" // Legacy support
  | "fade-up" | "fade-down" | "fade-left" | "fade-right"
  | "zoom-in" | "zoom-out"
  | "flip-left" | "flip-right" | "flip-up" | "flip-down";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: AnimationType; // Can also be AOS styles now (e.g. "zoom-in")
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  direction = "up", 
  duration = 1.2,
  className = "", 
  ...props 
}: AnimatedSectionProps) {
  
  const variants = {
    // Legacy / simple fade directional
    up: { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    
    // AOS style fade
    "fade-up": { initial: { y: 70, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    "fade-down": { initial: { y: -70, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    "fade-left": { initial: { x: 70, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    "fade-right": { initial: { x: -70, opacity: 0 }, animate: { x: 0, opacity: 1 } },

    // AOS style zoom
    "zoom-in": { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
    "zoom-out": { initial: { scale: 1.15, opacity: 0 }, animate: { scale: 1, opacity: 1 } },

    // AOS style flip
    "flip-left": { initial: { rotateY: -90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 } },
    "flip-right": { initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 } },
    "flip-up": { initial: { rotateX: -90, opacity: 0 }, animate: { rotateX: 0, opacity: 1 } },
    "flip-down": { initial: { rotateX: 90, opacity: 0 }, animate: { rotateX: 0, opacity: 1 } },
  };

  const selectedVariant = variants[direction] || variants["up"];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.8, 0.25, 1] 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
