"use client";

import React from "react";

interface ClientLogo {
  name: string;
  url: string;
}

const clients: ClientLogo[] = [
  { name: "MRF Tyres", url: "https://www.mrftyres.com/images/mrf-logo.png" },
  { name: "ITC", url: "https://itcportal.com/content/dam/itc-corporate/ITC-Logo-Updated.png" },
  { name: "Dr. Reddy's", url: "https://www.drreddys.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesktop_logo.b06cd169.png&w=256&q=75" },
  { name: "Usha", url: "https://www.usha.com/themes/custom/framework/images/usha.png" },
  { name: "Ideal Explosives", url: "https://www.idealexplosives.com/images/logo.png" },
  { name: "Mahindra", url: "https://www.mahindra.com//sites/default/files/2025-07/mahindra-red-logo.webp" },
  { name: "Moneycontrol", url: "https://images.moneycontrol.com/images/common/headfoot/logo.png?impolicy=mchigh" },
  { name: "Nucon Aerospace", url: "https://www.nuconaerospace.com/images/logo.png" },
  { name: "Rockwell", url: "https://www.rockwell.co.in/cdn/shop/files/black-logo-svg.svg?v=1754898978&width=832" },
  { name: "Protech Engineering Works", url: "https://protechengg.co.in/images/logowithbg.png" },
  { name: "Signode", url: "https://www.signode.com/Signode/media/Signode/SignodeLogo_White-Final.jpg" },
];

export default function ClientMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 border-b border-[#083C75]/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)]">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#F18805]" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#F18805]">
              Our Clients
            </span>
            <span className="h-px w-8 bg-[#F18805]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#04091a] tracking-tight">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="animate-marquee flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20">
            {/* Double the array for seamless infinite looping (translating to -50% width) */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="group relative flex h-24 w-40 sm:h-28 sm:w-48 shrink-0 items-center justify-center rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#F18805]/20 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.url}
                  alt={client.name}
                  className="max-h-[70%] max-w-[85%] object-contain transition-all duration-300 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
