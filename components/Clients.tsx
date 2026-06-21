"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ClientLogo {
  name: string;
  url: string;
  industry: string;
  conveyorSystem: string;
}

const clients: ClientLogo[] = [
  {
    name: "Corteva Agriscience",
    url: "https://assets.corteva.com/is/image/Corteva/LOG-Corteva_Logo-Corporate-Global-V1?ts=1717697978079",
    industry: "Agriculture & Seeds",
    conveyorSystem: "Stainless Steel Seed Sortation Lines",
  },
  {
    name: "HM.CLAUSE",
    url: "https://www.hmclause.com/uploads/logo_desktop_e79cf93ed9.svg",
    industry: "Vegetable Seeds",
    conveyorSystem: "FDA-Grade Sorting & Packaging Lines",
  },
  {
    name: "Bayer",
    url: "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg",
    industry: "Life Sciences & Crop Science",
    conveyorSystem: "Variable-Speed Chemical Batching Conveyors",
  },
  {
    name: "Syngenta / Ag Leaders",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuQ6aYemN2MpuTfYqo7MO1jdDmOYkcODTHVRM0pojHA&s=10",
    industry: "Crop Protection & Biotechnology",
    conveyorSystem: "Heavy-Duty Bulk Seed Loading Systems",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Clients() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 border-b border-[#083C75]/10">
      <div className="mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)]">
        
        {/* Subtle Section Header */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#F18805]" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
              Trusted by Industry Leaders
            </span>
          </div>
          <span className="text-[0.8rem] font-medium text-[#083C75]/60 max-w-[420px] md:text-right">
            Custom seed processing & packaging systems engineered for global agricultural giants.
          </span>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#083C75]/10 bg-[#fbfcfd] p-6 transition-all duration-300 hover:border-[#F18805]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(8,60,117,0.04)]"
            >
              {/* Logo Wrapper */}
              <div className="flex h-16 w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-h-full max-w-[70%] object-contain opacity-55 grayscale contrast-[0.9] transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100"
                />
              </div>

              {/* Tooltip detail reveal */}
              <div className="mt-4 flex flex-col items-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.68rem] font-extrabold uppercase tracking-wide text-[#F18805]">
                  {client.industry}
                </span>
                <span className="mt-0.5 text-[0.6rem] font-semibold text-[#083C75]/60">
                  {client.conveyorSystem}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
