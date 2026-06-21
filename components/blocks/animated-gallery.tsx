"use client";

import React, { createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Context to propagate scroll progress down to the moving columns
const ScrollContext = createContext<MotionValue<number> | null>(null);

interface ContainerScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerScroll({ children, className }: ContainerScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this container from start to end
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className={className}>
      <ScrollContext.Provider value={scrollYProgress}>
        {children}
      </ScrollContext.Provider>
    </div>
  );
}

interface ContainerStickyProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerSticky({ children, className }: ContainerStickyProps) {
  return (
    <div className={`sticky top-0 h-screen w-full overflow-hidden ${className || ""}`}>
      {children}
    </div>
  );
}

interface GalleryContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GalleryContainer({ children, className }: GalleryContainerProps) {
  return (
    <div
      className={`grid grid-cols-3 h-full w-full items-center justify-center overflow-hidden [perspective:1200px] [transform-style:preserve-3d] ${className || ""}`}
    >
      {children}
    </div>
  );
}

interface GalleryColProps {
  children: React.ReactNode;
  yRange: [string, string];
  className?: string;
}

export function GalleryCol({ children, yRange, className }: GalleryColProps) {
  const scrollProgress = useContext(ScrollContext);
  
  // Create a default scroll tracker if context is missing (safe fallback)
  const backupScroll = useRef<HTMLDivElement>(null);
  const { scrollYProgress: defaultScroll } = useScroll({
    target: backupScroll,
    offset: ["start end", "end start"]
  });

  const activeProgress = scrollProgress || defaultScroll;
  
  // Transform scroll progress (0 to 1) into translation distance (e.g. -10% to 2%)
  const y = useTransform(activeProgress, [0, 1], yRange);

  return (
    <motion.div
      ref={backupScroll}
      style={{ y }}
      className={`flex flex-col gap-4 will-change-transform ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerStagger({ children, className }: MotionWrapperProps) {
  const staggerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContainerAnimated({ children, className }: MotionWrapperProps) {
  const animateVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <motion.div variants={animateVariants} className={className}>
      {children}
    </motion.div>
  );
}
