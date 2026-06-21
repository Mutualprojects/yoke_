"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Clients from "../components/Clients";
import WhatWeDo from "../components/WhatWeDo";
import Industries from "../components/Industries";
import Values from "../components/Values";
import CatalogIndex from "../components/CatalogIndex";
import TestimonialTape from "../components/TestimonialTape";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#04091a]">
      {/* Reusable Premium Header Component */}
      <Header />

      {/* Main Content Areas */}
      <main className="flex-grow">
        <Hero />
        <Clients />
        <About />
        <WhatWeDo />
        <Industries />
        <Values />
        <CatalogIndex />
        <TestimonialTape />
      </main>
    </div>
  );
}
