"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Search, PenTool, Factory, Wrench } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Consultation & Requirement Analysis",
    description: "We begin by understanding your operational needs, production capacity, and workflow challenges. Our team conducts detailed discussions and site evaluations to identify the most efficient and cost-effective conveyor and automation solutions tailored to your industry requirements.",
    icon: Search,
  },
  {
    id: "02",
    title: "Design & Engineering",
    description: "Our expert engineers create precise designs using advanced technology and high-quality materials. Every system is carefully planned to ensure durability, safety, smooth integration, and maximum operational efficiency.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Manufacturing & Quality Testing",
    description: "With state-of-the-art machinery and skilled technicians, we fabricate each component with strict quality control measures. Every system undergoes rigorous testing to guarantee performance, reliability, and long service life.",
    icon: Factory,
  },
  {
    id: "04",
    title: "Installation & After-Sales Support",
    description: "We ensure seamless installation and provide comprehensive after-sales support, including maintenance guidance and technical assistance. Our goal is to deliver long-term performance and complete customer satisfaction.",
    icon: Wrench,
  },
];

export default function OurProcess() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } },
  };

  return (
    <section className="relative w-full bg-[#083C75] py-24 lg:py-32 font-sans overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-4 text-sm font-bold tracking-widest text-[#F18805] uppercase">
            Our Process
          </h2>
          <h3 className="mb-6 text-4xl lg:text-5xl font-light text-white">
            A Guide On How To <span className="font-bold">Work With Us</span>
          </h3>
          <p className="text-lg text-white/70 leading-relaxed">
            At Yoke Conveyors & Equipments, we follow a structured and quality-driven process to ensure every conveyor system delivers optimal performance, durability, and efficiency. From initial consultation to after-sales support, our approach focuses on precision, innovation, and customer satisfaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative flex flex-col rounded-3xl bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl border border-white/10 hover:border-transparent"
            >
              {/* Animated Step Number */}
              <div className="absolute -top-6 -right-4 text-7xl font-black text-white/5 transition-colors duration-500 group-hover:text-[#083C75]/5 z-0 select-none pointer-events-none">
                {step.id}
              </div>

              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#F18805] transition-all duration-500 group-hover:bg-[#083C75]/10 group-hover:scale-110">
                <step.icon className="h-8 w-8" />
              </div>
              <h4 className="relative z-10 mb-4 text-2xl font-bold text-white transition-colors duration-500 group-hover:text-[#083C75]">
                {step.title}
              </h4>
              <p className="relative z-10 text-white/70 leading-relaxed transition-colors duration-500 group-hover:text-[#083C75]/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
