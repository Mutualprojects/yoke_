"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Target, Diamond, ShieldCheck, Scale, Award } from "lucide-react";

export default function VisionMissionSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
    },
  };

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          
          {/* Vision Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col rounded-[2.5rem] bg-[#FAFAFA] p-10 lg:p-12 transition-all duration-500 hover:bg-[#083C75] hover:shadow-2xl hover:shadow-[#083C75]/20"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#083C75]/5 text-[#F18805] transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
              <Lightbulb className="h-10 w-10" />
            </div>
            <h3 className="mb-6 text-3xl font-light text-[#083C75] transition-colors duration-500 group-hover:text-white">
              Our <span className="font-bold">Vision</span>
            </h3>
            <p className="text-lg leading-relaxed text-[#083C75]/70 transition-colors duration-500 group-hover:text-white/80">
              Convert ideas to application through innovation, to enhance the customer productivity and ergonomics.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col rounded-[2.5rem] bg-[#FAFAFA] p-10 lg:p-12 transition-all duration-500 hover:bg-[#083C75] hover:shadow-2xl hover:shadow-[#083C75]/20"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#083C75]/5 text-[#F18805] transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
              <Target className="h-10 w-10" />
            </div>
            <h3 className="mb-6 text-3xl font-light text-[#083C75] transition-colors duration-500 group-hover:text-white">
              Our <span className="font-bold">Mission</span>
            </h3>
            <p className="text-lg leading-relaxed text-[#083C75]/70 transition-colors duration-500 group-hover:text-white/80">
              Pooling the people and technology to grow ourselves and associates to meet the customer expectation by 2020.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col rounded-[2.5rem] bg-[#FAFAFA] p-10 lg:p-12 transition-all duration-500 hover:bg-[#083C75] hover:shadow-2xl hover:shadow-[#083C75]/20"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#083C75]/5 text-[#F18805] transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
              <Diamond className="h-10 w-10" />
            </div>
            <h3 className="mb-6 text-3xl font-light text-[#083C75] transition-colors duration-500 group-hover:text-white">
              Our <span className="font-bold">Values</span>
            </h3>
            
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F18805] shadow-sm transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-xl font-semibold text-[#083C75] transition-colors duration-500 group-hover:text-white">Integrity</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F18805] shadow-sm transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                  <Scale className="h-5 w-5" />
                </div>
                <span className="text-xl font-semibold text-[#083C75] transition-colors duration-500 group-hover:text-white">Accountability</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F18805] shadow-sm transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-xl font-semibold text-[#083C75] transition-colors duration-500 group-hover:text-white">Professionalism</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
