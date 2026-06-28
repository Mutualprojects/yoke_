"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Award, MapPin, Settings, ShieldCheck, Star, Zap } from "lucide-react";
const center_image = "/home/btl/yoke_/public/logo-center.png"


export default function AboutStorySection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 lg:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Zap className="h-4 w-4 text-[#F18805]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F18805]">
              Discover Our Story
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#083C75] mb-8"
          >
            About Us
            <div className="mt-4 mx-auto h-[2px] w-24 bg-[#083C75]/20" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#083C75]/80 text-lg lg:text-xl font-medium leading-relaxed"
          >
            Yoke Conveyors & Equipments has emerged as a premier manufacturer of industrial machinery and material handling solutions. Through hands-on expertise and strategic vision, we thoroughly understand the complex logistics and production needs of modern industries, delivering customized engineering solutions that consistently drive efficiency, safety, and operational excellence.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-12 lg:gap-24 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <Factory className="h-6 w-6 text-[#083C75]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">Premier Manufacturer</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                A trusted and innovative name in the engineering sector, delivering customized, high-performance mechanical solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.15 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <Award className="h-6 w-6 text-[#083C75]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">6 Years Experience</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                Backed by six years of deep industry experience and extensive hands-on engineering expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <MapPin className="h-6 w-6 text-[#083C75]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">State-of-the-art Facility</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                Located in IDA Jeedimetla, Hyderabad, operating a modern manufacturing facility for durable systems.
              </p>
            </motion.div>
          </div>

          {/* Center Column (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }} 
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            className="order-1 lg:order-2 flex justify-center px-4 lg:px-8 relative"
          >
            {/* Outer border/frame effect from screenshot */}
            <div className="absolute inset-y-4 inset-x-0 lg:-inset-x-4 border border-[#083C75]/10 rounded-[2.5rem] z-0" />

            <div className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white p-[10px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/logo-center.png"
                  alt="Yoke Conveyors Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Small decorative dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#D4C3B3]" />
            <div className="absolute bottom-12 -left-4 h-4 w-4 rounded-full bg-[#D4C3B3] opacity-50" />
            <div className="absolute top-24 -right-8 h-24 w-24 rounded-full bg-[#D4C3B3]/20 blur-xl" />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-12 lg:gap-24 order-3 lg:order-3">
            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <Settings className="h-6 w-6 text-[#083C75]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">Diverse Systems</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                Fabricating assembly lines, motorized, gravity roller, rubber belt, and stainless steel mesh conveyors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.15 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <ShieldCheck className="h-6 w-6 text-[#083C75]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">Precision & Reliability</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                Backed by advanced technology and a skilled workforce to ensure flawless execution in every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(5px)" }} 
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
              className="flex flex-col lg:items-start text-left relative"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFEFEF]">
                  <Star className="h-6 w-6 text-[#F18805]" />
                </div>
                <h3 className="text-2xl font-bold text-[#083C75]">4.6-Star Rating</h3>
              </div>
              <p className="text-[#083C75]/70 font-medium leading-relaxed text-base lg:text-lg">
                Committed to quality, competitive pricing, timely delivery, and dependable after-sales support.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
