"use client";

import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Clients from "../components/Clients";
import WhatWeDo from "../components/WhatWeDo";
import Industries from "../components/Industries";
import Values from "../components/Values";
import CatalogIndex from "../components/CatalogIndex";
import TestimonialTape from "../components/TestimonialTape";
import AboutStory from "@/components/AboutStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="px-[15px]">
      <Hero />
      <Clients />
      <Industries />

      <About />
      <WhatWeDo />

      <Values />
      <CatalogIndex />
      <TestimonialTape />
      <AboutStory />
      <Footer />
    </div>
  );
}
