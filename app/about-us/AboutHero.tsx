"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import the local assets
import conveyorBelt from "./conveyor-belt-isolated-transparent-background-3d-rendering-illustration.png";
import legoBox from "./lego-box-with-box-it-that-says-box-bottom.png";
import goldenBlouse from "./silky-shiny-golden-blouse.png";

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: goldenBlouse,
      tag: "Frictionless Flow",
      title: "Silk-Smooth Transit",
      description: "Engineered for silent, seamless, and zero-friction material movement.",
    },
    {
      image: conveyorBelt,
      tag: "Mechanical Precision",
      title: "3D Engineered Assemblies",
      description: "Custom heavy-duty conveyor lines configured for structural durability.",
    },
    {
      image: legoBox,
      tag: "Automated Logistics",
      title: "Modular Sorting & Pack",
      description: "Flexible parcel routing and packaging systems optimized for speed.",
    },
  ];

  // Auto cycle every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white pt-32 pb-16 font-sans text-[#083C75]">
      {/* Decorative Blueprint Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#083C75]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#F18805]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,5vw,4.5rem)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Title and Slide Text Carousel */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#F18805]/20 bg-[#F18805]/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F18805] animate-pulse" />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2rem] text-[#F18805]">
                Engineering Excellence
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,4.5vw,4rem)] font-black leading-[1.05] tracking-tight text-[#083C75]">
              Next-Gen Conveying{" "}
              <span className="bg-gradient-to-r from-[#F18805] via-[#ffaa3a] to-[#F18805] bg-clip-text text-transparent">
                Infrastructure.
              </span>
            </h1>

            {/* Slide Information Panel (Fades when activeIndex changes) */}
            <div className="mt-8 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-[0.8rem] font-extrabold uppercase tracking-widest text-[#F18805]">
                    {slides[activeIndex].tag}
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-[#083C75]">
                    {slides[activeIndex].title}
                  </h2>
                  <p className="text-sm font-medium leading-relaxed text-[#083C75]/75">
                    {slides[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress/Navigation dots */}
            <div className="mt-6 flex items-center gap-2.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300 bg-[#083C75]/15"
                  style={{ width: activeIndex === idx ? "28px" : "8px" }}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute inset-0 bg-[#F18805]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Transparent Compact Image Carousel Card */}
          <div className="relative mt-8 flex w-full items-center justify-center lg:col-span-6 lg:mt-0 xl:col-span-7">
            <div className="relative h-[360px] w-full max-w-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={slides[activeIndex].image}
                    alt={slides[activeIndex].title}
                    placeholder="blur"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
