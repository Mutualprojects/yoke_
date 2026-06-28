"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-24 font-sans">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#083C75]/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#F18805]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F18805]/20 bg-[#F18805]/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#F18805]" />
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2rem] text-[#F18805]">
              Company Overview
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-[#083C75]">
            Engineering a Legacy of <span className="text-[#F18805]">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 justify-center"
          >
            <p className="text-[#083C75]/80 text-lg leading-relaxed font-medium">
              Yoke Conveyors & Equipments has emerged as a premier manufacturer of industrial machinery and material handling solutions. Backed by six years of deep industry experience, the company has become a trusted and innovative name in the engineering sector.
            </p>
            <p className="text-[#083C75]/80 text-lg leading-relaxed font-medium">
              Through hands-on expertise and strategic vision, Yoke thoroughly understands the complex logistics and production needs of modern industries. Today, the company delivers customized engineering solutions that consistently drive efficiency, safety, and operational excellence.
            </p>
          </motion.div>

          {/* Right Column - Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#083C75] to-[#041a33] p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Subtle decorative pattern in card */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#F18805] opacity-10 blur-[50px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-white opacity-[0.03] blur-[40px] rounded-full mix-blend-overlay" />
            
            <div className="relative z-10 flex flex-col h-full">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Located in <strong className="text-[#F18805]">IDA Jeedimetla, Hyderabad</strong>, Yoke Conveyors & Equipments operates a state-of-the-art manufacturing facility producing durable and versatile conveyor systems.
              </p>
              <p className="mt-4 text-white/90 text-base lg:text-lg leading-relaxed">
                We design and fabricate assembly lines, motorized and gravity roller conveyors, rubber belt conveyors, and stainless steel mesh systems to meet diverse automation, packaging, and material handling needs. Backed by advanced technology and a skilled workforce, we ensure precision and reliability in every project.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#F18805]/20 flex items-center justify-center">
                    <span className="text-[#F18805] font-black">4.6</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    With a strong industry rating, we are committed to quality, competitive pricing, timely delivery, and dependable after-sales support, making us a trusted partner for enhancing industrial productivity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
