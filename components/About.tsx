"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Award, Factory, Wrench, Settings, ShieldCheck, Activity } from "lucide-react";
import Image from "next/image";

import heroImage from "../app/about-us/abstract-background-with-gears-cogs-blue-shades-paper-blueprint-machine-technical-device-construction-concept-technical-drawing-mechanical-engineering-concept.png";

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
    <section className="relative w-full bg-white overflow-hidden font-sans py-12 lg:py-20">
      {/* ── Top accent line ── */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F18805] to-transparent opacity-50" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center">

          {/* ─── LEFT PANEL ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-[#083C75]">
                Welcome to<br />
                <span className="relative inline-block mt-1">
                  Yoke Conveyors
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-[#F18805]/40 rounded-full" />
                </span>
                {" "}&amp;{" "}
                <span className="text-[#F18805]">Equipments</span>
              </h2>

              <div className="flex items-center gap-2 mt-4 text-[#083C75]/60 text-sm font-semibold">
                <MapPin className="size-4 text-[#F18805] shrink-0" />
                <span>IDA Jeedimetla, Hyderabad — Telangana, India</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-[#083C75]/80 text-[1rem] leading-[1.7] font-medium max-w-[540px]">
                Yoke Conveyors &amp; Equipments is one of{" "}
                <strong className="text-[#083C75] font-black">Hyderabad&apos;s leading</strong>{" "}
                industrial engineering companies — renowned for high-performance conveyor systems,
                special purpose machines, secondary packaging lines, and robust structural fabrication.
              </p>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT PANEL: Image & Icons ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center lg:justify-end mt-8 lg:mt-0 w-full"
          >
            <div className="relative h-[300px] lg:h-[450px] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={heroImage}
                alt="Mechanical Engineering Blueprint Concept"
                placeholder="blur"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Icons Under Image */}
            <div className="mt-8 grid grid-cols-4 gap-4 w-full max-w-lg">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083C75]/10 text-[#083C75]">
                  <Settings className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-[#083C75]">Precision</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F18805]/10 text-[#F18805]">
                  <Wrench className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-[#083C75]">Custom Build</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#083C75]/10 text-[#083C75]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-[#083C75]">Durability</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F18805]/10 text-[#F18805]">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-[#083C75]">Performance</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
