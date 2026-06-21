"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings2,
  BoxSelect,
  Disc,
  Truck,
  ArrowRightLeft,
  Cpu,
  Package,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface ProductType {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: "all" | "heavy" | "automated" | "specialty";
  desc: string;
  features: string[];
  spec: string;
  image: string;
}

const products: ProductType[] = [
  {
    id: "conveyors",
    icon: <Settings2 className="size-6 text-[#F18805]" />,
    title: "Conveyor Systems",
    category: "heavy",
    desc: "Complete, custom-manufactured turn-key conveyor systems designed for industrial plants, assembly lines, and material sorting facilities.",
    features: ["Custom CAD blueprints", "Turn-key implementation", "Structural steel frames"],
    spec: "Heavy Fabrication · Heavy-Duty",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "handling",
    icon: <BoxSelect className="size-6 text-[#F18805]" />,
    title: "Material Handling Equipment",
    category: "heavy",
    desc: "Heavy-duty machinery designed to transport, load, stack, and organize materials efficiently across warehouses and distribution hubs.",
    features: ["High weight limits", "Integrated safety sensors", "Modular configuration"],
    spec: "ISO 9001 Compliant · 5T+ Limit",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "rollers",
    icon: <Disc className="size-6 text-[#F18805]" />,
    title: "Conveyor Rollers",
    category: "heavy",
    desc: "Precision-machined steel and polyurethane rollers engineered for maximum durability, low friction, and quiet running characteristics.",
    features: ["Precision ball bearings", "Rust-resistant coatings", "Impact-resistant options"],
    spec: "Standard & Custom Diameters",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "truck-loading",
    icon: <Truck className="size-6 text-[#F18805]" />,
    title: "Truck Loading Conveyors",
    category: "automated",
    desc: "Telescopic and cantilevered loading systems designed to extend directly inside trailers to optimize dock turnaround times.",
    features: ["Telescopic extendability", "Height-adjustable hydraulics", "Mobile lockable casters"],
    spec: "Dock Loading · Motorized",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "gravity",
    icon: <ArrowRightLeft className="size-6 text-[#F18805]" />,
    title: "Gravity Conveyor Belts",
    category: "specialty",
    desc: "Cost-effective, non-powered conveyors utilizing precision gravity rollers or skate wheels for smooth item transport.",
    features: ["Zero electricity costs", "Lightweight modular panels", "Easy maintenance"],
    spec: "Gravity-Fed · Zero-Power",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "motorized",
    icon: <Cpu className="size-6 text-[#F18805]" />,
    title: "Motorised Roller Conveyors",
    category: "automated",
    desc: "Smart, powered accumulation lines using Motorized Drive Rollers (MDR) to control product flow and prevent package collisions.",
    features: ["Smart accumulation control", "Low-power standby mode", "Variable frequency drives"],
    spec: "MDR Powered · Auto-Accumulation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "packing",
    icon: <Package className="size-6 text-[#F18805]" />,
    title: "Packing Conveyor Belts",
    category: "automated",
    desc: "Linear and multi-tier sorting belt tables designed specifically for packaging lines, manual inspection stations, and shipping preparation.",
    features: ["Variable speed belts", "Built-in workstation tables", "Integrated scales"],
    spec: "Variable Speed · Ergonomic",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "food-grade",
    icon: <ShieldCheck className="size-6 text-[#F18805]" />,
    title: "Food Grade Conveyor Belts",
    category: "specialty",
    desc: "FDA-compliant conveyor lines engineered with high-hygiene food-grade PU/PVC belts, ideal for food processing and pharmaceuticals.",
    features: ["FDA & EU compliance", "Easy wash-down design", "Stainless steel SUS304 frames"],
    spec: "FDA Compliant · Anti-Bacterial",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200&auto=format&fit=crop",
  },
];

const filters = [
  { id: "all", name: "All Equipment" },
  { id: "heavy", name: "Heavy-Duty" },
  { id: "automated", name: "Automated Systems" },
  { id: "specialty", name: "Specialized Belts" },
];

export default function WhatWeDo() {
  const [activeFilter, setActiveFilter] = useState<"all" | "heavy" | "automated" | "specialty">("all");

  const filteredProducts = products.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfd] py-24 font-sans text-[#083C75] border-t border-[#083C75]/10">
      {/* Blueprint Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)]">
        {/* Header Block */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[700px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F18805]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
                What We Do
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-[1.08] tracking-tight">
              Leading conveyor systems <span className="text-[#F18805]">manufactured</span> in Jeedimetla, Hyderabad.
            </h2>
          </div>
          <p className="max-w-[450px] text-[0.98rem] font-medium leading-[1.7] text-[#083C75]/70">
            From heavy-duty rollers to sterile food-grade belt systems, Yoke Conveyors & Equipments builds bespoke material handling infrastructure for global industries since 2018.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-[#083C75]/10 pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`relative rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-[#083C75] text-white shadow-lg"
                  : "bg-[#083C75]/5 text-[#083C75]/80 hover:bg-[#083C75]/10"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Dynamic Staggered Card Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#083C75]/10 bg-white p-6 shadow-[0_10px_30px_rgba(8,60,117,0.02)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F18805]/30 hover:shadow-[0_24px_50px_rgba(8,60,117,0.08)]"
              >
                {/* Background image reveal on hover */}
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[#083C75]/92 mix-blend-multiply" />
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon & Spec Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-[16px] bg-[#F18805]/10 border border-[#F18805]/20 shadow-sm transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                      {prod.icon}
                    </div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#083C75]/50 group-hover:text-white/60">
                      {prod.spec}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-[1.38rem] font-black leading-tight text-[#083C75] transition-colors duration-300 group-hover:text-white">
                    {prod.title}
                  </h3>
                  <p className="mb-6 text-[0.88rem] font-medium leading-[1.6] text-[#083C75]/70 transition-colors duration-300 group-hover:text-white/80">
                    {prod.desc}
                  </p>

                  {/* Features Bullet Points */}
                  <ul className="flex flex-col gap-2.5">
                    {prod.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#083C75]/80 transition-colors duration-300 group-hover:text-white/90"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#F18805]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Spec link indicator */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[#083C75]/10 pt-4 transition-colors duration-300 group-hover:border-white/15">
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#F18805] group-hover:text-white">
                    Request Spec Sheet
                  </span>
                  <ArrowUpRight className="size-4 text-[#083C75]/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
