"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

/* Responsive without touching the render path → no SSR/hydration mismatch.
   Starts as desktop, corrects on mount, and tracks resize via matchMedia. */
function useCompact() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return compact;
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    { title: "Featured", description: "Discover amazing content", date: "Just now" },
    { title: "Popular", description: "Trending right now", date: "2 days ago" },
    { title: "New", description: "Latest updates", date: "Today" },
  ];
  const displayCards = cards && cards.length ? cards : defaultCards;
  const n = displayCards.length;
  const mid = (n - 1) / 2;

  const compact = useCompact();
  const reduce = useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  // Layout constants, scaled down on small screens
  const L = compact
    ? { stackX: 16, stackY: 16, fanX: 64, fanRot: 7, lift: 14, arc: 10, pop: 24 }
    : { stackX: 26, stackY: 26, fanX: 178, fanRot: 8, lift: 22, arc: 18, pop: 34 };

  const getTarget = (i: number) => {
    // Entrance state
    if (!inView) return { opacity: 0, x: 24, y: 44, rotate: -8, scale: 1, zIndex: i };

    // Fanned state (any card in the stack is hovered)
    if (hovered !== null && !reduce) {
      const isHot = i === hovered;
      return {
        opacity: 1,
        x: (i - mid) * L.fanX,
        y: -L.lift + Math.abs(i - mid) * L.arc - (isHot ? L.pop : 0),
        rotate: isHot ? 0 : (i - mid) * L.fanRot,
        scale: isHot ? 1.06 : 1,
        zIndex: isHot ? 100 : i,
        filter: isHot ? "grayscale(0%)" : "grayscale(12%)",
      };
    }

    // Resting stacked state — front card (last) in full colour, back cards recede
    return {
      opacity: 1,
      x: i * L.stackX,
      y: i * L.stackY,
      rotate: -8,
      scale: 1,
      zIndex: i,
      filter: `grayscale(${(n - 1 - i) * 22}%)`,
    };
  };

  return (
    <div
      ref={ref}
      onMouseLeave={() => setHovered(null)}
      className="relative grid place-items-center w-full h-[360px] lg:h-[460px] [perspective:1200px]"
    >
      {displayCards.map((card, i) => (
        <motion.div
          key={i}
          onHoverStart={() => setHovered(i)}
          animate={getTarget(i)}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 26,
            delay: inView ? i * 0.08 : 0,
          }}
          className={cn(
            "[grid-area:1/1] flex h-[132px] w-[230px] sm:h-[180px] sm:w-[360px]",
            "cursor-pointer select-none flex-col justify-between overflow-hidden",
            "rounded-2xl border border-white/60 bg-white/85 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5",
            "shadow-[0_18px_45px_-15px_rgba(8,60,117,0.35)]",
            // soft diagonal sheen
            "after:pointer-events-none after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[55%] after:bg-gradient-to-l after:from-white/55 after:to-transparent after:content-['']",
            card.className
          )}
        >
          <div className="relative z-10 flex items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-xl bg-[#083C75]/5 p-2.5",
                card.iconClassName
              )}
            >
              {card.icon || <Sparkles className="size-5 text-[#F18805]" />}
            </span>
            <p
              className={cn(
                "text-[1.1rem] font-black lg:text-[1.25rem]",
                card.titleClassName || "text-[#083C75]"
              )}
            >
              {card.title}
            </p>
          </div>

          <div className="relative z-10 mt-2 flex flex-col gap-1">
            <p className="truncate text-[0.95rem] font-bold text-[#083C75]/80 lg:text-[1.1rem]">
              {card.description}
            </p>
            <p className="text-[0.75rem] font-bold uppercase tracking-wider text-[#083C75]/50 lg:text-[0.85rem]">
              {card.date}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}