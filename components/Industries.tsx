"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FactoryIllustration from "./automatic-factory-with-conveyor-line-robotic-arms-assembly-process-illustration.png";

/* ────────────────────────────────────────────────────────────
   12 industries with industrial spec metadata.
   Images are placeholders — swap for your asset/CDN URLs.
   ──────────────────────────────────────────────────────────── */
type Industry = {
  title: string;
  desc: string;
  image: string;
  category: string;
  spec: string;
};

const industries: Industry[] = [
  {
    title: "Food & Beverage",
    desc: "Hygienic, FDA-grade automated conveyors and washing systems for food processing.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    category: "Hygienic Lines",
    spec: "FDA Grade · Stainless Steel · CIP Ready",
  },
  {
    title: "Pharmaceuticals",
    desc: "Precision handling lines for delicate packaging, blister packs, and sterile environments.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&auto=format&fit=crop",
    category: "Cleanroom Class",
    spec: "ISO Class 7 · GMP Compliant",
  },
  {
    title: "Seed & Agriculture",
    desc: "Heavy-duty sorting and bagging conveyor solutions for high-volume agricultural output.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    category: "Bulk Handling",
    spec: "Variable Speed · Up to 80 TPH",
  },
  {
    title: "Warehousing & FMCG",
    desc: "Truck loading, motorized rollers, and gravity belts for rapid logistics and distribution.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
    category: "Logistics Systems",
    spec: "Modular · 24/7 Duty Cycle",
  },
  {
    title: "E-Commerce & Retail",
    desc: "High-speed sorting systems designed for complex distribution hubs and fulfillment centers.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8d256?q=80&w=1200&auto=format&fit=crop",
    category: "Sortation",
    spec: "10,000+ Parcels/Hour",
  },
  {
    title: "Automotive & Assembly",
    desc: "Robust structural assembly lines and heavy-component transfer systems.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    category: "Assembly Transfer",
    spec: "Heavy Payload · Tier-1 Spec",
  },
  {
    title: "Mining & Heavy Duty",
    desc: "Impact-resistant bulk handling conveyors engineered for abrasive and rugged environments.",
    image:
      "https://images.unsplash.com/photo-1578357065094-1a3b1ce121ce?q=80&w=1200&auto=format&fit=crop",
    category: "Bulk · Abrasive",
    spec: "Drop-Forged · IP67 Frame",
  },
  {
    title: "Cement & Building Materials",
    desc: "Abrasion-resistant belt and bucket systems for clinker, aggregate, and bulk material transport.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    category: "Bulk Material",
    spec: "Up to 150°C · Hot Clinker Rated",
  },
  {
    title: "Steel & Metal Processing",
    desc: "Drop-forged yoke chain conveyors and slat lines built for high-temperature, high-load duty.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    category: "High Temp",
    spec: "Yoke Chain · 600°C Tolerance",
  },
  {
    title: "Airport & Baggage Handling",
    desc: "Tilt-tray sorters and pouch systems for fast, accurate baggage and parcel routing.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    category: "Tilt-Tray Sorter",
    spec: "99.98% Read Rate",
  },
  {
    title: "Chemical & Fertilizer",
    desc: "Corrosion-resistant handling and bagging lines engineered for aggressive process environments.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    category: "Corrosion Grade",
    spec: "ATEX Zone 22 · FRP Frame",
  },
  {
    title: "Foundry & Forging",
    desc: "Heat-grade transfer and accumulation conveyors for castings, forgings, and hot components.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200&auto=format&fit=crop",
    category: "Heat Transfer",
    spec: "Forged Steel · Continuous Duty",
  },
];

const EASE = "cubic-bezier(0.21,0.47,0.32,0.98)";

/* ════════════════════════════════════════════════════════════
   Heading
   ════════════════════════════════════════════════════════════ */
function Heading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full lg:w-[50%] lg:max-w-[650px]"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-[#F18805]" />
        <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-[#F18805]">
          Industries Served · 12 Sectors
        </span>
      </div>

      <h2 className="mb-5 text-[clamp(1.8rem,3.2vh,2.8rem)] font-black leading-[1.25] tracking-[-0.015em] text-[#083C75]">
        Intralogistic solutions
        <br />
        <span className="text-[#F18805]">engineered</span> for your industry.
      </h2>

      <p className="max-w-[460px] text-[0.98rem] font-medium leading-[1.75] text-[#083C75]/70">
        Together we find the right solution for your individual requirements — from precision
        food-grade belts to heavy-duty mining and forging conveyors.
      </p>

      {/* Industrial stat strip - smaller padding/margins for laptop compatibility */}
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-[#083C75]/10 pt-5">
        {[
          ["12+", "Industries"],
          ["500+", "Installations"],
          ["25+", "Years"],
        ].map(([n, label]) => (
          <div key={label} className="flex flex-col">
            <span className="text-[1.3rem] font-black leading-normal text-[#083C75]">{n}</span>
            <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#083C75]/55">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   Card — taller, with serial #, category, and spec strip
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
    <div
      className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-[28px] ring-1 ring-black/5 ${className}`}
    >
      {/* image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-[#083C75]/10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.12]"
        />
      </div>

      {/* readability gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#062a55] via-[#083C75]/55 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

      {/* diagonal corner accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 z-20 h-32 w-32 rotate-45 bg-[#F18805]/85 transition-transform duration-700 group-hover:-translate-y-1 group-hover:translate-x-1" />

      {/* top accent line */}
      <div
        className={`absolute left-0 top-0 z-30 h-[6px] w-full bg-[#F18805] transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-full group-hover:translate-y-0"
          }`}
        style={{ transitionTimingFunction: EASE }}
      />

      {/* SERIAL — top-left */}
      <div className="absolute left-7 top-7 z-30 flex items-center gap-2 text-white">
        <span className="font-mono text-[2.25rem] font-black leading-none tracking-tight">
          {serial}
        </span>
        <span className="mt-2 font-mono text-[0.7rem] font-bold tracking-widest text-white/65">
          / {totalStr}
        </span>
      </div>

      {/* CATEGORY chip — top-right (under the orange corner) */}
      <div className="absolute right-7 top-7 z-30">
        <span className="inline-block rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* CONTENT — bottom */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 flex flex-col gap-4 p-7 sm:p-8 transition-transform duration-500 ${open ? "translate-y-0" : "translate-y-8 group-hover:translate-y-0"
          }`}
        style={{ transitionTimingFunction: EASE }}
      >
        <h3 className="text-[1.75rem] font-black leading-[1.2] text-white sm:text-[2rem] lg:text-[2.2rem]">
          {item.title}
        </h3>

        <p
          className={`text-[0.95rem] font-medium leading-[1.7] text-white/85 transition-opacity duration-500 lg:text-[1.02rem] ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-100"
            }`}
        >
          {item.desc}
        </p>

        {/* SPEC strip */}
        <div
          className={`flex items-center gap-3 border-t border-white/20 pt-4 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100 delay-150"
            }`}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F18805]" />
          <span className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white/75">
            {item.spec}
          </span>
        </div>

        {/* CTA row */}
        <div
          className={`mt-2 flex items-center justify-between transition-all duration-500 ease-out ${open
            ? "translate-x-0 opacity-100"
            : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-200"
            }`}
        >
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white">
            Explore Solutions
          </span>
          <div className="flex size-12 items-center justify-center rounded-full bg-[#F18805] shadow-[0_8px_24px_-6px_rgba(241,136,5,0.6)] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
            <ArrowRight className="size-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   Backdrop — blueprint grid + corner registration marks
   ════════════════════════════════════════════════════════════ */
function GridBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* corner registration marks (technical drawing feel) */}
      {[
        "left-6 top-6",
        "right-6 top-6 rotate-90",
        "left-6 bottom-6 -rotate-90",
        "right-6 bottom-6 rotate-180",
      ].map((pos) => (
        <svg
          key={pos}
          className={`pointer-events-none absolute z-10 size-6 text-[#083C75]/25 ${pos}`}
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
   DESKTOP — scroll-pinned horizontal rail (lg and up)
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
      className="relative hidden h-[300vh] bg-gradient-to-b from-white via-[#fafbfd] to-white lg:block"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        <GridBackdrop />

        {/* ── TOP ── heading + much larger absolute illustration */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] shrink-0 items-start px-[clamp(1.5rem,4vw,3.5rem)] pt-[clamp(1.5rem,3.5vh,2.5rem)]">
          <Heading />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute right-[clamp(1.5rem,4vw,3.5rem)] top-[clamp(0.2rem,0.5vh,1rem)] hidden w-[62%] justify-end lg:flex"
          >
            {/* soft orange aura behind the illustration */}
            <div className="absolute right-0 top-1/2 h-[100%] w-[100%] -translate-y-1/2 rounded-full bg-[#F18805]/10 blur-3xl" />
            <Image
              src={FactoryIllustration}
              alt="Automatic factory with conveyor line and robotic arms assembly process"
              className="relative w-full max-w-[1150px] object-contain drop-shadow-[0_30px_60px_rgba(8,60,117,0.22)] max-h-[35vh] xl:max-h-[44vh]"
              priority
            />
          </motion.div>
        </div>

        {/* ── MIDDLE ── taller, more imposing cards */}
        <div
          ref={viewportRef}
          className="relative z-20 mt-[clamp(0.5rem,1.5vh,2rem)] flex w-full flex-grow items-center overflow-hidden"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-[clamp(1.5rem,2.5vw,2rem)] px-[clamp(1.5rem,4vw,3.5rem)]"
          >
            {industries.map((item, i) => (
              <IndustryCard
                key={i}
                item={item}
                index={i}
                total={industries.length}
                className="h-[clamp(480px,68vh,820px)] w-[clamp(380px,40vw,640px)] xl:h-[clamp(560px,72vh,900px)] xl:w-[clamp(440px,42vw,700px)]"
              />
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM ── progress + counter */}
        <div className="relative z-20 mx-[clamp(1.5rem,4vw,3.5rem)] mb-[clamp(2rem,4vh,4rem)] flex items-center gap-4">
          <span className="font-mono text-[0.72rem] font-bold tracking-widest text-[#083C75]/60">
            01
          </span>
          <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-[#083C75]/10">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-[#F18805]" />
          </div>
          <span className="font-mono text-[0.72rem] font-bold tracking-widest text-[#083C75]/60">
            {String(industries.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   MOBILE / TABLET — native swipe carousel
   ════════════════════════════════════════════════════════════ */
function MobileRail() {
  return (
    <section className="relative bg-white pt-6 pb-16 lg:hidden">
      <GridBackdrop />

      <div className="relative z-10 mx-auto mb-8 w-full max-w-[1400px] px-[clamp(1.25rem,5vw,3rem)]">
        <Heading />
      </div>

      {/* compact illustration for mobile */}
      <div className="relative z-10 mx-auto mb-6 w-full max-w-[560px] px-[clamp(1.25rem,5vw,3rem)] sm:mb-10">
        <Image
          src={FactoryIllustration}
          alt="Automatic factory with conveyor line"
          className="w-full object-contain drop-shadow-[0_20px_40px_rgba(8,60,117,0.15)]"
        />
      </div>

      <div className="relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1.25rem,5vw,3rem)] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {industries.map((item, i) => (
          <IndustryCard
            key={i}
            item={item}
            index={i}
            total={industries.length}
            open
            className="h-[clamp(440px,68vh,560px)] w-[82vw] max-w-[360px] snap-center"
          />
        ))}
      </div>

      <p className="relative z-10 mt-4 px-[clamp(1.25rem,5vw,3rem)] font-mono text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#083C75]/45">
        ← Swipe to explore all {industries.length} industries
      </p>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   Reduced-motion fallback
   ════════════════════════════════════════════════════════════ */
function StaticGrid() {
  return (
    <section className="relative bg-white pt-10 pb-20">
      <GridBackdrop />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[clamp(1.25rem,5vw,3.5rem)]">
        <Heading />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, i) => (
            <IndustryCard
              key={i}
              item={item}
              index={i}
              total={industries.length}
              open
              className="h-[480px] w-full"
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