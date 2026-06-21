"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  logoUrl: string;
  clientName: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    logoUrl: "https://assets.corteva.com/is/image/Corteva/LOG-Corteva_Logo-Corporate-Global-V1?ts=1717697978079",
    clientName: "Corteva Agriscience",
    author: "Dr. Robert Vance",
    role: "Director of Seed Operations",
    quote: "Yoke's custom stainless steel seed sortation conveyors exceeded our expectations. The precision engineering has eliminated seed damage entirely.",
    rating: 5,
  },
  {
    logoUrl: "https://www.hmclause.com/uploads/logo_desktop_e79cf93ed9.svg",
    clientName: "HM.CLAUSE",
    author: "Marie Dubois",
    role: "Plant Logistics Manager",
    quote: "Their FDA-grade conveyor systems are stellar. Wash-down and maintenance times have dropped by 40%, keeping our packaging line highly sterile and efficient.",
    rating: 5,
  },
  {
    logoUrl: "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg",
    clientName: "Bayer Crop Science",
    author: "K. Raghunath",
    role: "Operations Head (Jeedimetla Plant)",
    quote: "Reliability is key in chemical batching. Yoke's motorized rollers have operated 24/7 with zero unplanned downtime in over two years.",
    rating: 5,
  },
  {
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuQ6aYemN2MpuTfYqo7MO1jdDmOYkcODTHVRM0pojHA&s=10",
    clientName: "Syngenta / Ag Leaders",
    author: "Sarah Jenkins",
    role: "Supply Chain Director",
    quote: "For bulk seed handling, Yoke's heavy-duty loading conveyors have dramatically reduced trailer loading times and improved worker safety at our major hubs.",
    rating: 5,
  },
];

// Duplicate the array to ensure seamless infinite looping scroll
const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialTape() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 border-t border-[#083C75]/10">
      {/* Background blueprint grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)] mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#F18805]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
              Customer Success
            </span>
            <span className="h-px w-8 bg-[#F18805]" />
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black leading-[1.1] tracking-tight text-[#083C75]">
            What our clients <span className="text-[#F18805]">say</span> about Yoke.
          </h2>
        </div>
      </div>

      {/* Infinite scrolling marquee container */}
      <div className="relative flex w-full overflow-x-hidden py-4">
        {/* Soft edge blur overlays to make it look premium */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Scroll Track */}
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {doubledTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex w-[290px] sm:w-[360px] md:w-[420px] shrink-0 flex-col justify-between rounded-[24px] sm:rounded-[28px] border border-[#083C75]/10 bg-[#fbfcfd] p-6 sm:p-8 shadow-[0_8px_30px_rgba(8,60,117,0.02)] transition-all duration-300 hover:border-[#F18805]/30 hover:bg-white hover:shadow-[0_20px_45px_rgba(8,60,117,0.05)]"
            >
              <div>
                {/* Logo and Rating */}
                <div className="mb-5 sm:mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-8 sm:h-10 max-w-[110px] sm:max-w-[140px] items-center justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.logoUrl}
                      alt={t.clientName}
                      className="max-h-full max-w-full object-contain grayscale contrast-[0.95] opacity-75"
                    />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="size-3 sm:size-3.5 fill-[#F18805] text-[#F18805]" />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-[0.82rem] sm:text-[0.92rem] font-medium leading-[1.6] sm:leading-[1.65] text-[#083C75]/85">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 sm:mt-8 border-t border-[#083C75]/10 pt-4 flex flex-col">
                <span className="text-[0.7rem] sm:text-xs font-black text-[#083C75]">{t.author}</span>
                <span className="mt-0.5 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-[#F18805]">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled inline keyframes for the marquee infinite scroll */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
