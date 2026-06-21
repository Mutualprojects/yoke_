"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Disc, Wrench, ChevronRight } from "lucide-react";

export default function CatalogIndex() {
  const categories = [
    {
      title: "Engineered Solutions",
      icon: <Settings className="size-5 text-[#F18805]" />,
      items: [
        "Bespoke Conveyor Systems",
        "Truck Loading Conveyors",
        "Motorised Roller Lines",
        "Packing & Sorting Belts",
        "FDA Food-Grade Belts",
        "Gravity Conveyor Systems",
      ],
    },
    {
      title: "Precision Products",
      icon: <Disc className="size-5 text-[#F18805]" />,
      items: [
        "Heavy-Duty Rollers",
        "Drop-Forged Chains",
        "Sprockets & Drive Gears",
        "Replacement Belting",
        "High-Tensile Rollers",
        "Polyurethane Coated Rollers",
      ],
    },
    {
      title: "Technical Services",
      icon: <Wrench className="size-5 text-[#F18805]" />,
      items: [
        "CAD Layout & Prototyping",
        "On-Site Installation",
        "PLC Automation & Control",
        "Audits & Preventive Care",
        "Belt Splicing & Vulcanizing",
        "Emergency Maintenance Support",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans text-[#083C75] border-t border-[#083C75]/10">
      {/* Background blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-14 max-w-[700px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-[#F18805]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
              Capabilities Index
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-tight">
            Comprehensive Capabilities Directory.
          </h2>
        </div>

        {/* 3-Column Index Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col rounded-3xl border border-[#083C75]/10 bg-[#fbfcfd] p-7 sm:p-8 shadow-[0_8px_30px_rgba(8,60,117,0.015)] transition-all duration-300 hover:border-[#F18805]/30 hover:bg-white hover:shadow-[0_16px_40px_rgba(8,60,117,0.05)]"
            >
              {/* Category Title Header */}
              <div className="mb-6 flex items-center gap-3 border-b border-[#083C75]/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#F18805]/10 border border-[#F18805]/20">
                  {cat.icon}
                </div>
                <h3 className="text-[1.2rem] font-black tracking-tight text-[#083C75]">
                  {cat.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="flex flex-col gap-3.5">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="group/item flex items-center gap-2.5 text-[0.92rem] font-semibold text-[#083C75]/80 transition-colors duration-200 hover:text-[#083C75]"
                  >
                    <ChevronRight className="size-4 shrink-0 text-[#F18805] transition-transform duration-200 group-hover/item:translate-x-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
