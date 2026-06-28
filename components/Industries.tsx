"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FactoryIllustration from "./automatic-factory-with-conveyor-line-robotic-arms-assembly-process-illustration.png";

import { conveyorData } from "../data/conveyorData";

/* ────────────────────────────────────────────────────────────
   Industries / Solutions with real data from conveyorData
   ──────────────────────────────────────────────────────────── */
type Industry = {
  title: string;
  desc: string;
  image: string;
  category: string;
  spec: string;
  slug?: string;
};

const industries: Industry[] = conveyorData.conveyorSystemsData.flatMap(
  (categoryData) => categoryData.items.map((item) => ({
    title: item.title,
    desc: item.description,
    image: item.images && item.images.length > 0 ? item.images[0] : "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    category: categoryData.category,
    spec: item.specialty,
    slug: item.slug
  }))
);

const EASE = [0.22, 1, 0.36, 1] as const;

/* ════════════════════════════════════════════════════════════
   Heading Section — Zara-like Minimalist Typography
   ════════════════════════════════════════════════════════════ */
function Heading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: EASE }}
      className="w-full lg:max-w-[620px] z-10"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[1px] w-8 bg-[#04091a]" />
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#04091a]/80">
          Industries Served · 12 Sectors
        </span>
      </div>

      <h2 className="mb-5 text-[clamp(2.2rem,4.5vw,3.6rem)] font-light tracking-tight text-[#04091a] leading-[1.1]">
        Intralogistic solutions
        <br />
        <span className="font-medium italic text-[#F18805]">engineered</span> for scale.
      </h2>

      <p className="text-[0.98rem] font-light leading-[1.7] text-[#04091a]/70 max-w-[500px]">
        Together we build the right system for your individual requirements — from high-precision
        sanitary lines to heavy-duty mining and forging conveyors.
      </p>

      {/* Industrial stats in clean minimalist lines */}
      <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-[#04091a]/10 pt-6">
        {[
          ["12", "Industries"],
          ["500+", "Installations"],
          ["25+", "Years Active"],
        ].map(([n, label]) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl font-light leading-none text-[#04091a]">{n}</span>
            <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[#04091a]/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   Card Component — Zara Aesthetic (Light / High Contrast)
   ════════════════════════════════════════════════════════════ */
function IndustryCard({
  item,
  index,
  total,
  open = false,
  className = "",
}: {
  item: Industry;
  index: number;
  total: number;
  open?: boolean;
  className?: string;
}) {
  const serial = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 100px 0px 0px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE }}
      className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-[4px] border border-neutral-200 bg-white shadow-sm transition-all duration-700 hover:border-[#04091a] ${className}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05] opacity-90 group-hover:opacity-100"
        />
        {/* Zara-like light-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-black/5 transition-opacity duration-500" />
      </div>

      {/* Serial & Total Info — Minimal layout */}
      <div className="absolute left-6 top-6 z-10 flex items-baseline gap-1">
        <span className="font-mono text-lg font-medium tracking-tight text-[#04091a]">
          {serial}
        </span>
        <span className="font-mono text-[0.62rem] font-bold text-[#04091a]/40">
          /{totalStr}
        </span>
      </div>

      {/* Category Tag */}
      <div className="absolute right-6 top-6 z-10">
        <span className="inline-block rounded-[2px] border border-[#04091a]/15 bg-white/70 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-[#04091a] backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* Card Content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-6 sm:p-8 transition-transform duration-500 ${
          open ? "translate-y-0" : "translate-y-12 group-hover:translate-y-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <h3 className="text-xl font-light uppercase tracking-wide text-[#04091a] sm:text-2xl">
          {item.title}
        </h3>

        <p
          className={`text-[0.88rem] font-light leading-relaxed text-neutral-600 transition-all duration-500 ${
            open ? "opacity-100 max-h-[80px]" : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[80px] overflow-hidden"
          }`}
        >
          {item.desc}
        </p>

        {/* Technical Specs */}
        <div
          className={`flex items-center gap-2.5 border-t border-neutral-200 pt-4 transition-all duration-500 ${
            open ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-75"
          }`}
        >
          <span className="h-[1px] w-3 bg-[#F18805]" />
          <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-500">
            {item.spec}
          </span>
        </div>

        {/* Explore Button / CTA */}
        {item.slug ? (
          <Link
            href={`/products/${item.slug}`}
            className={`mt-1 flex items-center justify-between transition-all duration-500 ${
              open
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-100"
            }`}
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#04091a] border-b border-[#04091a] pb-0.5">
              Explore Solutions
            </span>
            <div className="flex size-9 items-center justify-center rounded-full bg-[#04091a] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
              <ArrowRight className="size-4" />
            </div>
          </Link>
        ) : (
          <div
            className={`mt-1 flex items-center justify-between transition-all duration-500 ${
              open
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-100"
            }`}
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#04091a] border-b border-[#04091a] pb-0.5">
              Explore Solutions
            </span>
            <div className="flex size-9 items-center justify-center rounded-full bg-[#04091a] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
              <ArrowRight className="size-4" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   Backdrop Grid Lines (Light Minimalist)
   ════════════════════════════════════════════════════════════ */
function GridBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(to right, #000000 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />
      {/* corner registration marks */}
      {[
        "left-6 top-6",
        "right-6 top-6 rotate-90",
        "left-6 bottom-6 -rotate-90",
        "right-6 bottom-6 rotate-180",
      ].map((pos) => (
        <svg
          key={pos}
          className={`pointer-events-none absolute z-10 size-6 text-[#04091a]/10 ${pos}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 8V2h6M22 8V2h-6M2 16v6h6M22 16v6h-6" />
        </svg>
      ))}
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   DESKTOP RAIL (lg and up) — 160vh overall height, white theme
   ════════════════════════════════════════════════════════════ */
function DesktopRail() {
  const targetRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxScroll = useRef(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, (v) => -(maxScroll.current * v));

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      maxScroll.current = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={targetRef}
      className="relative hidden h-[160vh] bg-white lg:block"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden py-12 justify-between">
        <GridBackdrop />

        {/* Top Header Row */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] shrink-0 items-start px-8 justify-between gap-12">
          <Heading />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="relative flex-1 max-w-[750px] flex items-center justify-center"
          >
            <div className="absolute right-0 top-1/2 h-[80%] w-[80%] -translate-y-1/2 rounded-full bg-[#F18805]/10 blur-[100px]" />
            <Image
              src={FactoryIllustration}
              alt="Automatic factory system illustration"
              className="relative w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
              priority
            />
          </motion.div>
        </div>

        {/* Horizontal Track Row */}
        <div
          ref={viewportRef}
          className="relative z-20 flex w-full flex-grow items-center overflow-hidden my-4"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 px-8"
          >
            {industries.map((item, i) => (
              <IndustryCard
                key={i}
                item={item}
                index={i}
                total={industries.length}
                className="h-[380px] w-[300px] sm:h-[400px] sm:w-[320px] xl:h-[420px] xl:w-[340px]"
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Pagination Row */}
        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-8 flex items-center gap-6">
          <span className="font-mono text-xs font-bold tracking-widest text-[#04091a]/40">
            01
          </span>
          <div className="h-[1px] flex-1 overflow-hidden bg-neutral-200">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-[#04091a]" />
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-[#04091a]/40">
            {String(industries.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   MOBILE / TABLET CAROUSEL (lg and down) — White Theme
   ════════════════════════════════════════════════════════════ */
function MobileRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIdx(Math.max(0, Math.min(industries.length - 1, newIdx)));
  };

  const slide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.clientWidth * 0.85;
    const targetScroll = container.scrollLeft + (direction === "left" ? -cardWidth : cardWidth);
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white pt-16 pb-20 lg:hidden overflow-hidden border-t border-neutral-100">
      <GridBackdrop />

      <div className="relative z-10 mx-auto mb-10 w-full px-6 md:px-12">
        <Heading />
      </div>

      {/* Swipe Container */}
      <div className="relative z-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:px-12 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {industries.map((item, i) => (
            <IndustryCard
              key={i}
              item={item}
              index={i}
              total={industries.length}
              open={activeIdx === i}
              className="h-[420px] w-[80vw] max-w-[320px] snap-center"
            />
          ))}
        </div>

        {/* Navigation Buttons for Tablet */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none hidden md:flex justify-between px-4">
          <button
            onClick={() => slide("left")}
            disabled={activeIdx === 0}
            className={`pointer-events-auto flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white/90 backdrop-blur-md text-[#04091a] shadow-sm transition-all hover:bg-neutral-100 disabled:opacity-40`}
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={() => slide("right")}
            disabled={activeIdx === industries.length - 1}
            className={`pointer-events-auto flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white/90 backdrop-blur-md text-[#04091a] shadow-sm transition-all hover:bg-neutral-100 disabled:opacity-40`}
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>

      {/* Active Dot Indicators */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-4 px-6">
        <div className="flex gap-2">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollRef.current) return;
                const container = scrollRef.current;
                const cardWidth = container.clientWidth * 0.85;
                container.scrollTo({
                  left: i * cardWidth,
                  behavior: "smooth",
                });
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIdx === i ? "w-6 bg-[#04091a]" : "w-1 bg-neutral-200"
              }`}
            />
          ))}
        </div>
        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-[#04091a]/40">
          Swipe to discover ({activeIdx + 1}/{industries.length})
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   REDUCED MOTION FALLBACK
   ════════════════════════════════════════════════════════════ */
function StaticGrid() {
  return (
    <section className="relative bg-white py-20">
      <GridBackdrop />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8">
        <Heading />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((item, i) => (
            <IndustryCard
              key={i}
              item={item}
              index={i}
              total={industries.length}
              open
              className="h-[400px] w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Industries() {
  const reduce = useReducedMotion();
  if (reduce) return <StaticGrid />;
  return (
    <>
      <DesktopRail />
      <MobileRail />
    </>
  );
}