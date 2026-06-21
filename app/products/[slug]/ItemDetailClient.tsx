"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import { ConveyorItem } from "@/data/conveyorData";
import {
  ArrowLeft,
  ArrowRight,
  Settings,
  Disc,
  Wrench,
  Shield,
  FileSpreadsheet,
  Clock,
  Briefcase,
  AlertTriangle,
  FileText,
  Sliders,
  Play,
  HeartHandshake,
  Download,
  Phone,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ItemDetailClientProps {
  item: ConveyorItem;
  categoryName: string;
}

type TabType = "overview" | "features" | "process" | "applications";

const TABS: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <Sliders className="size-3.5" /> },
  { id: "features", label: "Features", icon: <FileText className="size-3.5" /> },
  { id: "process", label: "Process", icon: <Clock className="size-3.5" /> },
  { id: "applications", label: "Applications", icon: <Briefcase className="size-3.5" /> },
];

export default function ItemDetailClient({ item, categoryName }: ItemDetailClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [zoomOpen, setZoomOpen] = useState(false);

  const totalImages = item.images.length;
  const activeImage = item.images[activeIndex] || "";

  const next = useCallback(() => {
    if (totalImages > 0) setActiveIndex((i) => (i + 1) % totalImages);
  }, [totalImages]);

  const prev = useCallback(() => {
    if (totalImages > 0) setActiveIndex((i) => (i - 1 + totalImages) % totalImages);
  }, [totalImages]);

  /* Keyboard nav — works always, but especially in the lightbox */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && zoomOpen) setZoomOpen(false);
      if (zoomOpen) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomOpen, next, prev]);

  /* Lock body scroll when lightbox open */
  useEffect(() => {
    if (zoomOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [zoomOpen]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Engineered Solutions":
        return <Settings className="size-4" />;
      case "Precision Products":
        return <Disc className="size-4" />;
      case "Technical Services":
        return <Wrench className="size-4" />;
      default:
        return <Shield className="size-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Engineered Solutions":
        return "text-[#083C75] bg-[#083C75]/5 border-[#083C75]/20";
      case "Precision Products":
        return "text-[#F18805] bg-[#F18805]/5 border-[#F18805]/20";
      default:
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
    }
  };

  const formatMetricKey = (key: string) => {
    if (key === "MTBF") return "MTBF (Mean Time Between Failures)";
    if (key === "PMCompliance") return "PM Compliance Rate";
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
  };

  /* Smooth scroll to CTA section */
  const scrollToCTA = () => {
    document.getElementById("contact-cta")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafbfd] font-sans text-[#083C75] antialiased">
      <Header />
      <div className="h-24 md:h-28" />

      <main className="mx-auto max-w-[1440px] px-[clamp(1.2rem,4vw,3.5rem)] py-6 md:py-10">
        {/* ── Breadcrumb ── */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/products"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#083C75] transition-colors duration-200 hover:text-[#F18805]"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to Catalog
          </a>

          <div className="flex items-center gap-1.5 text-[0.68rem] font-bold text-[#083C75]/45">
            <span>Home</span>
            <span>/</span>
            <a href="/products" className="hover:text-[#F18805]">
              Catalog
            </a>
            <span>/</span>
            <span className="max-w-[200px] truncate text-[#083C75]/80">{item.title}</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            HERO — Gallery (8 cols) + Sticky Spec Sidebar (4 cols)
            ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ── Gallery side ── */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[0.62rem] font-black uppercase tracking-wider ${getCategoryColor(
                    categoryName
                  )}`}
                >
                  {getCategoryIcon(categoryName)}
                  {categoryName}
                </span>
                <span className="font-mono text-[0.68rem] font-black uppercase tracking-widest text-[#083C75]/40">
                  ID: {item.id}
                </span>
              </div>
              <h1 className="text-3xl font-black leading-[1.05] tracking-[-0.015em] text-[#083C75] md:text-4xl lg:text-[3.25rem]">
                {item.title}
              </h1>
            </motion.div>

            {/* Big interactive image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <button
                onClick={() => setZoomOpen(true)}
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-[#083C75]/10 bg-slate-100 shadow-sm"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={item.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* zoom hint */}
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wider text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="size-3.5" />
                  Click to Zoom
                </div>

                {/* counter */}
                {totalImages > 1 && (
                  <div className="absolute bottom-4 right-4 z-10 rounded-full bg-black/55 px-3 py-1.5 font-mono text-[0.68rem] font-black tracking-wider text-white backdrop-blur-md">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(totalImages).padStart(2, "0")}
                  </div>
                )}
              </button>

              {/* Prev / Next arrows */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#083C75] shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#083C75] shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnails */}
            {totalImages > 1 && (
              <div className="flex flex-wrap gap-2">
                {item.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`relative aspect-[16/10] w-20 overflow-hidden rounded-xl border-2 transition-all duration-200 ${activeIndex === i
                      ? "border-[#F18805] shadow-sm"
                      : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                    {activeIndex === i && (
                      <motion.span
                        layoutId="activeThumb"
                        className="absolute inset-0 ring-2 ring-[#F18805] ring-offset-1 ring-offset-white rounded-xl"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Sticky Spec Sidebar ── */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4 lg:sticky lg:top-32">
              {/* Spec dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-[24px] border border-[#083C75]/10 bg-white p-6 shadow-sm md:p-7"
              >
                <div className="flex items-center gap-3 border-b border-[#083C75]/5 pb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#F18805]/10">
                    <FileSpreadsheet className="size-5 text-[#F18805]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-[#083C75]">
                      Specifications
                    </h3>
                    <p className="mt-0.5 text-[0.68rem] font-bold text-[#083C75]/40">
                      Engineering Reference Sheet
                    </p>
                  </div>
                </div>

                <div className="mt-2 max-h-[340px] overflow-y-auto pr-1">
                  <table className="w-full text-left text-[0.8rem]">
                    <tbody>
                      {Object.entries(item.performanceMetrics).map(([key, value]) => (
                        <tr
                          key={key}
                          className="group/row relative border-b border-[#083C75]/5 last:border-0"
                        >
                          <td className="py-3 pr-4 align-top font-extrabold text-[#083C75]/60 transition-colors group-hover/row:text-[#083C75]">
                            <span className="block border-l-2 border-transparent pl-3 transition-colors duration-200 group-hover/row:border-[#F18805]">
                              {formatMetricKey(key)}
                            </span>
                          </td>
                          <td className="py-3 text-right align-top font-bold text-[#083C75]">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Quick CTA stack (replaces the form) */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={scrollToCTA}
                  className="group flex items-center justify-between rounded-2xl bg-[#F18805] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_-8px_rgba(241,136,5,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-8px_rgba(241,136,5,0.65)] active:translate-y-0"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="size-3.5" />
                    Talk to Engineering
                  </span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  className="group flex items-center justify-between rounded-2xl border border-[#083C75]/15 bg-white px-5 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#083C75] transition-all duration-200 hover:border-[#083C75]/35 hover:bg-[#083C75]/5"
                >
                  <span className="flex items-center gap-2">
                    <Download className="size-3.5" />
                    Download PDF Spec
                  </span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust strip */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-xl border border-[#083C75]/10 bg-white px-3 py-3">
                  <MapPin className="size-4 shrink-0 text-[#F18805]" />
                  <div className="min-w-0">
                    <span className="block text-[0.6rem] font-black uppercase tracking-wider text-[#083C75]/45">
                      Built At
                    </span>
                    <span className="block truncate text-[0.7rem] font-bold text-[#083C75]">
                      Hyderabad, IN
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#083C75]/10 bg-white px-3 py-3">
                  <Award className="size-4 shrink-0 text-[#F18805]" />
                  <div className="min-w-0">
                    <span className="block text-[0.6rem] font-black uppercase tracking-wider text-[#083C75]/45">
                      Standard
                    </span>
                    <span className="block truncate text-[0.7rem] font-bold text-[#083C75]">
                      ISO Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            TABS — full width below
            ══════════════════════════════════════════════════ */}
        <section className="mt-16 md:mt-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F18805]" />
            <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#F18805]">
              Technical Details
            </span>
          </div>

          {/* Tab buttons */}
          <div className="flex gap-2 overflow-x-auto border-b border-[#083C75]/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex shrink-0 items-center gap-2 px-5 py-4 text-xs font-black uppercase tracking-widest transition-colors duration-200 ${activeTab === tab.id
                  ? "text-[#F18805]"
                  : "text-[#083C75]/50 hover:text-[#083C75]"
                  }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeDetailTab"
                    className="absolute -bottom-px left-0 right-0 h-[3px] rounded-full bg-[#F18805]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[360px] pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Overview */}
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#083C75]/8 bg-white p-7 shadow-sm">
                      <h4 className="flex items-center gap-2 border-b border-[#083C75]/5 pb-3 text-sm font-black uppercase tracking-wider text-[#083C75]">
                        <Sliders className="size-4 text-[#F18805]" />
                        Operational Specialty
                      </h4>
                      <p className="mt-4 text-[0.92rem] font-semibold leading-relaxed text-[#083C75]/80">
                        {item.specialty}
                      </p>
                    </div>

                    {item.howItWorks && (
                      <div className="rounded-2xl border border-[#083C75]/8 bg-white p-7 shadow-sm">
                        <h4 className="flex items-center gap-2 border-b border-[#083C75]/5 pb-3 text-sm font-black uppercase tracking-wider text-[#083C75]">
                          <Play className="size-4 text-[#F18805]" />
                          Mechanism & How It Works
                        </h4>
                        <p className="mt-4 text-[0.92rem] font-medium leading-relaxed text-[#083C75]/75">
                          {item.howItWorks}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Features */}
                {activeTab === "features" && (
                  <div className="rounded-2xl border border-[#083C75]/8 bg-white p-7 shadow-sm md:p-8">
                    <h4 className="mb-5 flex items-center gap-2 border-b border-[#083C75]/5 pb-3 text-sm font-black uppercase tracking-wider text-[#083C75]">
                      <FileText className="size-4 text-[#F18805]" />
                      Key Features & Systems
                    </h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {item.keyFeatures.map((feat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.04 }}
                          className="group flex items-start gap-3 rounded-xl border border-transparent bg-[#083C75]/[0.03] p-4 transition-all duration-200 hover:border-[#F18805]/30 hover:bg-[#F18805]/[0.04]"
                        >
                          <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F18805]/15 text-[#F18805] transition-colors duration-200 group-hover:bg-[#F18805] group-hover:text-white">
                            <span className="size-1.5 rounded-full bg-current" />
                          </span>
                          <span className="text-[0.85rem] font-semibold leading-relaxed text-[#083C75]/80">
                            {feat}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Process */}
                {activeTab === "process" && (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="flex items-center gap-4 rounded-2xl border border-[#083C75]/8 bg-white p-6 shadow-sm">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#F18805]/10">
                        <Clock className="size-5 text-[#F18805]" />
                      </div>
                      <div>
                        <span className="text-[0.62rem] font-black uppercase tracking-wider text-[#083C75]/40">
                          Production Timeline
                        </span>
                        <p className="mt-1 text-sm font-black text-[#083C75]">
                          {item.implementation.timeline}
                        </p>
                      </div>
                    </div>

                    {item.implementation.maintenanceRequirements && (
                      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 lg:col-span-2">
                        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" />
                        <div>
                          <span className="text-[0.62rem] font-black uppercase tracking-wider text-amber-800/70">
                            Maintenance Protocol
                          </span>
                          <p className="mt-1 text-[0.85rem] font-semibold leading-relaxed text-amber-900">
                            {item.implementation.maintenanceRequirements}
                          </p>
                        </div>
                      </div>
                    )}

                    {item.implementation.installationProcess && (
                      <div className="rounded-2xl border border-[#083C75]/8 bg-white p-7 shadow-sm lg:col-span-3">
                        <h4 className="mb-5 flex items-center gap-2 border-b border-[#083C75]/5 pb-3 text-sm font-black uppercase tracking-wider text-[#083C75]">
                          <Wrench className="size-4 text-[#F18805]" />
                          Project Phases
                        </h4>
                        <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {item.implementation.installationProcess.map((step, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.06 }}
                              className="flex items-start gap-3 rounded-xl border border-[#083C75]/5 bg-[#083C75]/[0.02] p-4"
                            >
                              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#083C75] font-mono text-[0.7rem] font-black text-white">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[0.85rem] font-semibold leading-snug text-[#083C75]/85">
                                {step}
                              </span>
                            </motion.li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                )}

                {/* Applications */}
                {activeTab === "applications" && (
                  <div className="rounded-2xl border border-[#083C75]/8 bg-white p-7 shadow-sm md:p-8">
                    <h4 className="mb-5 flex items-center gap-2 border-b border-[#083C75]/5 pb-3 text-sm font-black uppercase tracking-wider text-[#083C75]">
                      <Briefcase className="size-4 text-[#F18805]" />
                      Target Environments
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {item.applications.map((app, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.04 }}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#083C75]/10 bg-[#083C75]/[0.03] px-4 py-2.5 text-xs font-bold text-[#083C75] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F18805]/40 hover:bg-[#F18805]/5"
                        >
                          <HeartHandshake className="size-3.5 text-[#F18805]" />
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════════════════
          CTA BANNER — replaces the form
          ══════════════════════════════════════════════════ */}
      <section
        id="contact-cta"
        className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#083C75] via-[#062a55] to-[#041E3D] text-white"
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange aura */}
        <div className="pointer-events-none absolute -right-32 top-1/2 size-[480px] -translate-y-1/2 rounded-full bg-[#F18805]/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-[clamp(1.2rem,4vw,3.5rem)] py-16 md:py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F18805]" />
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#F18805]">
                Next Steps
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.04] tracking-[-0.015em] md:text-5xl lg:text-[3.75rem]">
              Ready to engineer
              <br />
              <span className="text-[#F18805]">for your operation?</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Talk to our engineering team about custom configurations, integration with existing
              lines, throughput targets, and delivery scheduling.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                ["25+", "Years"],
                ["500+", "Installations"],
                ["24/7", "Support"],
              ].map(([n, label]) => (
                <div key={label} className="border-l border-white/20 pl-4">
                  <div className="text-2xl font-black text-[#F18805] md:text-3xl">{n}</div>
                  <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/60">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2 lg:justify-center">
            <a
              href="/contact"
              className="group flex items-center justify-between rounded-2xl bg-[#F18805] px-6 py-5 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_14px_36px_-10px_rgba(241,136,5,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-10px_rgba(241,136,5,0.8)] active:translate-y-0"
            >
              <span className="flex items-center gap-2">
                <Phone className="size-4" />
                Schedule a Call with Engineering
              </span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <button className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-6 py-5 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10">
              <span className="flex items-center gap-2">
                <Download className="size-4" />
                Download PDF Specification Sheet
              </span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="/products"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-transparent px-6 py-5 text-xs font-extrabold uppercase tracking-[0.18em] text-white/85 transition-all duration-200 hover:border-white/30 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="size-4" />
                Browse Similar Systems
              </span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#083C75]/10 bg-white py-8 text-center text-[0.78rem] font-semibold text-[#083C75]/50">
        <p>© 2026 Yoke Conveyors & Equipments Pvt. Ltd. All rights reserved.</p>
        <p className="mt-1">IDA Jeedimetla, Hyderabad, Telangana, India.</p>
      </footer>

      {/* ══════════════════════════════════════════════════
          IMAGE LIGHTBOX
          ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setZoomOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-md"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomOpen(false);
              }}
              aria-label="Close zoom"
              className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            <span className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-black tracking-widest text-white backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalImages).padStart(2, "0")}
            </span>

            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-5 z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next image"
                  className="absolute right-5 z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            <motion.img
              key={activeImage}
              src={activeImage}
              alt={item.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/55">
              Esc to close · ← → to navigate
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}