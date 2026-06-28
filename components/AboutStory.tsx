"use client";

import React from "react";
import Image from "next/image";
import FlowArt, { FlowSection } from "./ui/story-scroll";

import ImgWhoWeAre from "../app/about-us/abstract-background-with-gears-cogs-blue-shades-paper-blueprint-machine-technical-device-construction-concept-technical-drawing-mechanical-engineering-concept.png";
import ImgMission from "../app/about-us/premium-certified-quality-stamp.png";
import ImgProcess from "../app/about-us/minimalist-design-concept-with-hands-manipulating-clean-style-elements.png";
import ImgVision from "../app/about-us/technology-human-touch-background-modern-remake-creation-adam.png";

export default function AboutStory() {
  return (
    <FlowArt aria-label="Yoke Conveyors Overview">
      {/* SECTION 1: WHO WE ARE */}
      <FlowSection index={0} aria-label="Who we are" style={{ backgroundColor: "#F18805", color: "#fff" }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-overlay">
          <Image src={ImgWhoWeAre} alt="Who We Are Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 flex flex-col h-full w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <div>
            <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight text-black">
              Engineering
              <br />
              Without
              <br />
              Limits
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed text-black">
            We believe every facility deserves high-performance, precision-engineered solutions. No shortcuts, no compromises — just robust automation and the experts who build it.
          </p>
        </div>
      </FlowSection>

      {/* SECTION 2: THE MISSION */}
      <FlowSection index={1} aria-label="The mission" style={{ backgroundColor: "#04091a", color: "#fff" }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] mix-blend-screen">
          <Image src={ImgMission} alt="Quality First Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 flex flex-col h-full w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F18805]">02 — The mission</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Quality
              <br />
              First
              <br />
              Always
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed text-white/90">
            A leading manufacturing powerhouse built by engineers, for industries. We&apos;re redefining how materials move and processes scale.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Manufacturing</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                State-of-the-art fabrication facilities producing high-grade industrial equipment.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Engineering</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                In-house design and R&amp;D teams solving the most complex material handling challenges.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Quality</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Rigorous testing protocols ensuring every system operates flawlessly under load.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Custom Fabrication</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Tailor-made structural frameworks and secondary packaging lines.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Reliability</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Built for 24/7 duty cycles in demanding environments.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Scalability</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Modular designs that grow as your production capacity demands increase.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/90">
            Every system we build starts with one question — does this maximize throughput?
          </p>
        </div>
      </FlowSection>

      {/* SECTION 3: HOW IT WORKS */}
      <FlowSection index={2} aria-label="Our Process" style={{ backgroundColor: "#f8f9fa", color: "#000" }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-multiply">
          <Image src={ImgProcess} alt="Our Process Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 flex flex-col h-full w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#083C75]">03 — Our Process</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight text-[#083C75]">
              Design.
              <br />
              Build.
              <br />
              Deliver.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed text-black/80">
            A streamlined engineering process. Your facility&apos;s throughput starts scaling the moment we begin.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">01 — Consultation</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                We analyze your production bottlenecks and determine the ideal material handling strategy.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">02 — Engineering</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                Our CAD team designs a custom system tailored precisely to your spatial and load requirements.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">03 — Fabrication</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                High-precision manufacturing in our Jeedimetla facility using top-grade materials.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">04 — Assembly</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                Rigorous assembly and quality checks before any component leaves our factory floor.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">05 — Installation</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                Our expert technicians deploy the system on-site with minimal downtime.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#083C75]">06 — Support</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/70">
                Comprehensive maintenance, spare parts, and after-sales support to keep you moving.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 4: THE VISION */}
      <FlowSection index={3} aria-label="The vision" style={{ backgroundColor: "#083C75", color: "#fff" }}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.20] mix-blend-screen">
          <Image src={ImgVision} alt="Future Of Automation Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 flex flex-col h-full w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F18805]">04 — The vision</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight text-white">
              Future
              <br />
              Of
              <br />
              Automation
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed text-white/90">
            We&apos;re not just building conveyors. We&apos;re building the backbone of modern industry.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">500+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Projects successfully delivered and installed across multiple industrial sectors.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">20+</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Years of combined engineering expertise in material handling systems.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">100%</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                In-house manufacturing. Total control over quality from raw material to finished product.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/90">
            Inefficient logistics cost industries millions. We&apos;re here to eliminate bottlenecks and optimize flow — permanently.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Global Standards</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Manufacturing processes that adhere strictly to international safety and quality norms.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Continuous Innovation</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Constantly upgrading our designs to incorporate the latest in automation tech.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F18805]">Engineering Excellence</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Every system is load-tested, stress-tested, and built to outlast expectations.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 5: JOIN US */}
      <FlowSection index={4} aria-label="Partner with us" style={{ backgroundColor: "#000", color: "#fff" }}>
        <div className="relative z-10 flex flex-col h-full w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F18805]">05 — Partner with us</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight text-white">
              Ready
              <br />
              To
              <br />
              Scale?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed text-white/90">
            Take control of your production line. Connect with us and let&apos;s shape the future of your facility together.
          </p>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
