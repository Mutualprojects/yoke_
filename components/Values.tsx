"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, ShieldCheck, Workflow, Gauge, ArrowUpRight } from "lucide-react";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  highlight: string;
}

const values: ValueItem[] = [
  {
    icon: <Target className="size-6 text-[#F18805]" />,
    title: "Precision",
    subtitle: "Engineering Accuracy",
    desc: "Every conveyor system is engineered down to the millimeter. We design custom solutions with perfect alignment, minimal friction, and zero-defect tolerances.",
    highlight: "CAD-Verified Designs",
  },
  {
    icon: <ShieldCheck className="size-6 text-[#F18805]" />,
    title: "Reliability",
    subtitle: "Heavy-Duty Integrity",
    desc: "Built to endure the harshest environments. Our drop-forged chains, high-tensile rollers, and reinforced structures guarantee continuous 24/7 industrial operations.",
    highlight: "Zero-Downtime Guarantee",
  },
  {
    icon: <Workflow className="size-6 text-[#F18805]" />,
    title: "Innovation",
    subtitle: "Smart Intralogistics",
    desc: "We integrate smart automation, variable speed drive systems, and custom sortation matrices to seamlessly adapt to your plant's operational flow.",
    highlight: "Automation Ready",
  },
  {
    icon: <Gauge className="size-6 text-[#F18805]" />,
    title: "Efficiency",
    subtitle: "Optimized Velocity",
    desc: "Maximizing material handling speeds while lowering energy draw. We optimize throughput pipelines to ensure rapid, stress-free packaging and sorting.",
    highlight: "High-Throughput Specs",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export default function Values() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 font-sans text-[#083C75] border-t border-[#083C75]/10">
      {/* Background blueprint grid overlay in brand blue */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative technical line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F18805]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,3.5rem)]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[620px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F18805]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
                Corporate Core values
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-[1.08] tracking-tight text-[#083C75]">
              The engineering principles that <span className="text-[#F18805]">drive</span> Yoke.
            </h2>
          </div>
          <p className="max-w-[420px] text-[0.95rem] font-medium leading-[1.6] text-[#083C75]/60">
            For over two decades, our commitment to industrial excellence has shaped conveyor systems that empower plants worldwide.
          </p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((val, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#083C75]/10 bg-[#fbfcfd] p-7 transition-all duration-300 hover:border-[#F18805]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,60,117,0.06)]"
            >
              {/* Radial gradient hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F18805]/5 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

              <div>
                {/* Icon Container with custom technical border */}
                <div className="mb-6 flex size-12 items-center justify-center rounded-[14px] bg-[#F18805]/10 border border-[#F18805]/20 shadow-[0_8px_24px_-6px_rgba(241,136,5,0.15)]">
                  {val.icon}
                </div>

                <div className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#F18805]">
                  {val.subtitle}
                </div>
                <h3 className="mb-3 text-[1.4rem] font-black text-[#083C75]">{val.title}</h3>
                
                <p className="text-[0.88rem] font-medium leading-[1.6] text-[#083C75]/70">
                  {val.desc}
                </p>
              </div>

              {/* Bottom Accent Specification Row */}
              <div className="mt-8 flex items-center justify-between border-t border-[#083C75]/10 pt-4">
                <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-[#083C75]/45">
                  {val.highlight}
                </span>
                <ArrowUpRight className="size-4 text-[#F18805]/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F18805]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
