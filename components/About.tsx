"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Award, Factory, Wrench } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const aboutCards = [
  {
    icon: <Award className="size-5 lg:size-6 text-[#F18805]" />,
    title: "Industry Leaders",
    description: "Conveyor System Manufacturers",
    date: "IDA Jeedimetla, Hyderabad",
    titleClassName: "text-[#083C75]",
  },
  {
    icon: <Factory className="size-5 lg:size-6 text-[#F18805]" />,
    title: "Full Spectrum",
    description: "Special Purpose Machines",
    date: "Telangana, India",
    titleClassName: "text-[#083C75]",
  },
  {
    icon: <Wrench className="size-5 lg:size-6 text-[#F18805]" />,
    title: "End-to-End Solutions",
    description: "Design, Fabricate, Install",
    date: "Food, Pharma & Seed",
    titleClassName: "text-[#083C75]",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function About() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans pt-20 pb-10 lg:pt-28 lg:pb-16">
      {/* ── Top accent line ── */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#F18805] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-[clamp(1rem,4vw,3.5rem)]">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-10 items-center">

          {/* ─── LEFT PANEL ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-[clamp(2.1rem,4.2vw,3.2rem)] font-black leading-[1.08] tracking-tight text-[#083C75]">
                Welcome to<br />
                <span className="relative inline-block mt-2">
                  Yoke Conveyors
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-[#F18805]/40 rounded-full" />
                </span>
                {" "}&amp;{" "}
                <span className="text-[#F18805]">Equipments</span>
              </h2>

              <div className="flex items-center gap-2 mt-5 text-[#083C75]/60 text-[0.85rem] font-semibold">
                <MapPin className="size-4 text-[#F18805] shrink-0" />
                <span>IDA Jeedimetla, Hyderabad — Telangana, India</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-[#083C75]/80 text-[1.05rem] leading-[1.8] font-medium max-w-[540px]">
                Yoke Conveyors &amp; Equipments is one of{" "}
                <strong className="text-[#083C75] font-black">Hyderabad&apos;s leading</strong>{" "}
                industrial engineering companies — renowned for high-performance conveyor systems,
                special purpose machines, secondary packaging lines, and robust structural fabrication.
              </p>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT PANEL: Stacked Cards ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-lg flex items-center justify-center py-10 lg:py-0">
              <DisplayCards cards={aboutCards} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
