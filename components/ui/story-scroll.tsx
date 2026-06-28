"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FlowArtProps {
  children: ReactNode;
  "aria-label"?: string;
}

export default function FlowArt({ children, "aria-label": ariaLabel }: FlowArtProps) {
  return (
    <div aria-label={ariaLabel} className="relative w-full">
      {children}
    </div>
  );
}

interface FlowSectionProps {
  children: ReactNode;
  "aria-label"?: string;
  style?: React.CSSProperties;
  index?: number;
}

export function FlowSection({ children, "aria-label": ariaLabel, style, index = 0 }: FlowSectionProps) {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Alternate the initial rotation based on the index to create a dynamic stacking effect
  const initialRotation = index % 2 === 0 ? -6 : 6;
  const rotate = useTransform(scrollYProgress, [0, 1], [initialRotation, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  return (
    <section
      ref={container}
      aria-label={ariaLabel}
      className="sticky top-0 h-[100dvh] w-full overflow-hidden"
    >
      <motion.div
        style={{
          ...style,
          rotate,
          scale,
          y,
          transformOrigin: "bottom center",
        }}
        className="w-full h-full flex flex-col p-6 md:p-10 lg:p-16 shadow-[0_-20px_40px_rgba(0,0,0,0.3)] origin-bottom overflow-hidden relative"
      >
        {children}
      </motion.div>
    </section>
  );
}
