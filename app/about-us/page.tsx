"use client";

import React from "react";
import AboutHero from "./AboutHero";
import VisionMissionSection from "../../components/VisionMissionSection";
import AboutStorySection from "../../components/AboutStorySection";
import OurProcess from "../../components/OurProcess";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white">
      {/* Custom Premium Image Collage Hero Section (White Background Theme) */}
      <AboutHero />

      {/* Vision, Mission, Values */}


      {/* Yoke Conveyors Story Overview */}
      <AboutStorySection />
      <OurProcess />
      <VisionMissionSection />

      <Footer />
    </div>
  );
}
