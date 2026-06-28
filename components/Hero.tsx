"use client";

import React, { useState, useEffect, useRef } from "react";

interface HeroSlide {
  id: number;
  title: string;
  navLabel: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  videoType: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    title: "All Types of Conveyors",
    navLabel: "All Types of Conveyors",
    subtitle: "Heavy Duty & Precision Systems",
    description:
      "Engineered drop-forged yoke conveyor chains and custom industrial conveyor lines for high-throughput logistics.",
    videoUrl: "https://ik.imagekit.io/ugyhmls22/0_Conveyor_Belts_Factory_1920x1080.mp4",
    videoType: "video/mp4",
  },
  {
    id: 1,
    title: "Special Purpose Machines",
    navLabel: "Special Purpose Machines",
    subtitle: "Custom Engineered Automation",
    description:
      "Bespoke machinery built for custom manufacturing lines, heavy assemblies, and precise materials handling.",
    videoUrl: "https://ik.imagekit.io/ugyhmls22/0_Packages_Conveyor_Belt_1920x1080.mp4",
    videoType: "video/mp4",
  },

  {
    id: 3,
    title: "Fabrication of Structures & Mezzanine Floors",
    navLabel: "Structural Fabrication",
    subtitle: "Industrial Mezzanines & Platforms",
    description:
      "Robust structural steel fabrication, industrial platforms, and custom modular mezzanine flooring for warehouse space optimization.",
    videoUrl: "https://ik.imagekit.io/ugyhmls22/0_Warehouse_Storage_3840x2160.mp4",
    videoType: "video/mp4",
  },
  {
    id: 4,
    title: "Food, Pharma & Seed Industries",
    navLabel: "Food, Pharma & Seed",
    subtitle: "Complete End-to-End Solutions",
    description:
      "Hygienic-grade conveyors, automated washing systems, sorting machinery, and complete processing lines built under strict FDA sanitary standards.",
    videoUrl: "https://ik.imagekit.io/ugyhmls22/2463148_Factory_Agriculture_1920x1080.mp4",
    videoType: "video/mp4",
  },
  {
    id: 5,
    title: "High-Performance Industrial Engineering",
    navLabel: "Industrial Engineering",
    subtitle: "Custom Automation & Structuring",
    description:
      "Turnkey structural and conveyor engineering solutions tailored to optimize workflow throughput and reduce system downtime.",
    videoUrl: "https://ik.imagekit.io/ugyhmls22/0_Abandoned_Swimming_Pool_Swimming_Pool_1280x720.mp4",
    videoType: "video/mp4", // Corrected videoType to mp4
  },
];

const SLIDE_DURATION = 7000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [entered, setEntered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setEntered(false);
    const t = setTimeout(() => setEntered(true), 40);
    return () => clearTimeout(t);
  }, [activeSlide]);

  const goTo = (index: number) => {
    setActiveSlide(index);
    startTimer();
  };

  const active = HERO_SLIDES[activeSlide];

  return (
    <section className="relative isolate w-full h-[90vh] min-h-[500px] overflow-hidden bg-[#0c0f17] font-sans">
      {/* ---------- Video stage with crossfades ---------- */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === idx ? "opacity-70" : "opacity-0 pointer-events-none"
              }`}
          >
            {/* Preloaded and pre-rendered video for zero-delay instant playing */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src={slide.videoUrl} type={slide.videoType} />
            </video>
          </div>
        ))}
        {/* Even darkening overlay to keep footage rich (no gradient) */}
        <div className="absolute inset-0 bg-[#0c0f17]/25" />
      </div>

      {/* ---------- Left tick-rail navigator (lg+) ---------- */}
      <nav
        aria-label="Browse solutions"
        className="absolute left-0 top-0 z-30 hidden h-full items-center pl-[clamp(1.5rem,4vw,3.5rem)] lg:flex"
      >
        <div className="relative flex flex-col gap-6">
          <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-white/20" />
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => goTo(idx)}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-4 outline-none"
              >
                <span
                  className={`block h-px transition-all duration-300 ${isActive
                    ? "w-9 bg-[#F18805]"
                    : "w-4 bg-white/45 group-hover:w-6 group-hover:bg-white/80"
                    }`}
                />
                <span
                  className={`max-w-[200px] truncate text-[0.68rem] font-bold uppercase tracking-[0.15em] [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] transition-colors duration-300 ${isActive ? "text-[#F18805]" : "text-white/70 group-hover:text-white"
                    }`}
                >
                  {slide.navLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ---------- Solid content panel (bottom-right on desktop, full sheet on mobile) ---------- */}
      <div className="absolute inset-x-0 bottom-0 z-30 sm:inset-x-auto sm:bottom-8 sm:right-[clamp(1rem,4vw,3.5rem)] sm:w-[min(480px,90vw)]">
        <div className="relative overflow-hidden bg-[#0b2240] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] sm:rounded-[12px]">

          {/* Auto-advance progress indicator */}
          <span
            className={`absolute left-0 top-0 z-10 h-[3px] bg-[#F18805] transition-[width] ease-linear ${entered ? "w-full duration-[7000ms]" : "w-0 duration-0"
              }`}
          />

          {/* Mobile / Tablet tab navigator */}
          <div className="flex gap-1.5 overflow-x-auto px-5 pt-5 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => goTo(idx)}
                  aria-label={slide.navLabel}
                  aria-current={isActive ? "true" : undefined}
                  className={`shrink-0 rounded px-2.5 py-1 text-[0.65rem] font-black tracking-widest transition-colors duration-200 ${isActive ? "bg-[#F18805] text-[#0b2240]" : "bg-white/10 text-white/60"
                    }`}
                >
                  0{idx + 1}
                </button>
              );
            })}
          </div>

          {/* Compact content */}
          <div
            className={`flex flex-col gap-3 p-5 sm:p-6 transition-all duration-700 ease-out ${entered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#F18805]" />
              <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#F18805]">
                {active.subtitle}
              </span>
            </div>

            <h1 className="text-[clamp(1.3rem,2.8vw,1.8rem)] font-black leading-[1.15] tracking-tight text-white">
              {active.title}
            </h1>

            <p className="max-w-[420px] text-xs font-medium leading-relaxed text-slate-200/85">
              {active.description}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Scroll cue (lg only) ---------- */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/55 lg:flex">
        <span className="text-[0.55rem] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="animate-bounce"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}