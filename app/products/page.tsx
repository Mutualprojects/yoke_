"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Header from "@/components/Header";
import { conveyorData } from "@/data/conveyorData";
import { Search, Settings, Disc, Wrench, ArrowRight, ShieldCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";

function CatalogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"all" | "solutions" | "products" | "services">("all");

  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  // Synchronize tab selection with query parameter
  useEffect(() => {
    if (tabParam === "solutions") {
      setSelectedTab("solutions");
    } else if (tabParam === "products") {
      setSelectedTab("products");
    } else if (tabParam === "services") {
      setSelectedTab("services");
    } else {
      setSelectedTab("all");
    }
  }, [tabParam]);

  const categories = [
    { id: "all", label: "All Systems", icon: null },
    { id: "solutions", label: "Engineered Solutions", icon: <Settings className="size-4" /> },
    { id: "products", label: "Precision Products", icon: <Disc className="size-4" /> },
    { id: "services", label: "Technical Services", icon: <Wrench className="size-4" /> }
  ];

  // Flatten items with their category name
  const allItems = useMemo(() => {
    return conveyorData.conveyorSystemsData.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        categoryName: cat.category
      }))
    );
  }, []);

  // Filter items based on search and tab selections
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Filter by Tab
      if (selectedTab === "solutions" && item.categoryName !== "Engineered Solutions") return false;
      if (selectedTab === "products" && item.categoryName !== "Precision Products") return false;
      if (selectedTab === "services" && item.categoryName !== "Technical Services") return false;

      // Filter by Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSpecialty = item.specialty.toLowerCase().includes(query);
        const matchesFeatures = item.keyFeatures.some((f) => f.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesSpecialty || matchesFeatures;
      }

      return true;
    });
  }, [allItems, selectedTab, searchQuery]);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Engineered Solutions":
        return {
          bg: "bg-[#083C75]/5",
          text: "text-[#083C75]",
          border: "border-[#083C75]/20",
          icon: <Settings className="size-3.5" />
        };
      case "Precision Products":
        return {
          bg: "bg-[#F18805]/5",
          text: "text-[#F18805]",
          border: "border-[#F18805]/20",
          icon: <Disc className="size-3.5" />
        };
      default:
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          icon: <Wrench className="size-3.5" />
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfd] font-sans text-[#083C75]">
      {/* Premium Sticky Navigation */}
      <Header />

      {/* Spacer for Fixed Header */}
      <div className="h-24 md:h-28" />

      {/* Main Filter and Directory Section */}
      <section className="mx-auto max-w-[1440px] px-[clamp(1.2rem,4vw,3.5rem)] py-8 pb-24">
        {/* Controls Card */}
        <div className="rounded-3xl border border-[#083C75]/10 bg-white p-6 shadow-[0_15px_40px_rgba(8,60,117,0.06)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    // Update search query params without full reload
                    const params = new URLSearchParams(window.location.search);
                    if (tab.id === "all") params.delete("tab");
                    else params.set("tab", tab.id);
                    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
                    setSelectedTab(tab.id as any);
                  }}
                  className={`flex items-center gap-1.5 rounded-xl px-5 py-3 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${selectedTab === tab.id
                    ? "bg-[#083C75] text-white shadow-md"
                    : "bg-[#083C75]/5 text-[#083C75] hover:bg-[#083C75]/10"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search systems, features or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#083C75]/15 bg-[#fafbfd] py-3.5 pl-11 pr-4 text-sm font-medium text-[#083C75] placeholder-[#083C75]/40 outline-none transition-all duration-200 focus:border-[#F18805] focus:bg-white focus:shadow-md"
              />
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#083C75]/45" />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-8 flex items-center justify-between px-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#083C75]/50">
            Showing {filteredItems.length} of {allItems.length} results
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-extrabold uppercase tracking-wider text-[#F18805] hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Catalog Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => {
              const theme = getCategoryTheme(item.categoryName);
              return (
                <div
                  key={index}
                  className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#083C75]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#083C75]/20 hover:shadow-[0_15px_35px_rgba(8,60,117,0.08)]"
                >
                  {/* Item Image Card */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.images[0] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-sm ${theme.bg} ${theme.text} ${theme.border} bg-white/90`}>
                        {theme.icon}
                        {item.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="flex flex-grow flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-black leading-snug tracking-tight text-[#083C75] transition-colors duration-200 group-hover:text-[#F18805]">
                        {item.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-[0.88rem] leading-relaxed text-[#083C75]/65">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#083C75]/5 pt-4">
                      <div className="mb-4">
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#083C75]/40">
                          Specialty:
                        </span>
                        <p className="line-clamp-2 mt-0.5 text-xs font-semibold text-[#083C75]/80">
                          {item.specialty}
                        </p>
                      </div>

                      <a
                        href={`/products/${item.slug}`}
                        className="flex w-full items-center justify-between rounded-xl bg-[#083C75]/5 px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-[#083C75] transition-all duration-200 hover:bg-[#F18805] hover:text-white"
                      >
                        View Specifications
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#083C75]/5">
              <Search className="size-6 text-[#083C75]/40" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[#083C75]">No products found</h3>
            <p className="mt-2 text-sm text-[#083C75]/50">
              Try adjusting your keywords or category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTab("all");
              }}
              className="mt-6 rounded-xl bg-[#083C75] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Compact Informational Footer */}
      <footer className="border-t border-[#083C75]/10 bg-white py-8 text-center text-[0.78rem] font-semibold text-[#083C75]/50">
        <p>© 2026 Yoke Conveyors & Equipments Pvt. Ltd. All rights reserved.</p>
        <p className="mt-1">IDA Jeedimetla, Phase V, Hyderabad, Telangana, India.</p>
      </footer>
    </div>
  );
}

export default function ProductsCatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafbfd] flex items-center justify-center font-bold">Loading Catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
