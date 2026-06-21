"use client";

import React from "react";
import Header from "../../components/Header";
import AboutHero from "./AboutHero";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Navigation Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Custom Premium Image Collage Hero Section (White Background Theme) */}
        <AboutHero />
      </main>
    </div>
  );
}
