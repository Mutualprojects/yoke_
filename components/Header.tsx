"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Settings,
  Disc,
  Wrench,
  Shield,
} from "lucide-react";
import { conveyorData, ConveyorItem } from "../data/conveyorData";

type DropdownType = "solutions" | "products" | "services";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to shrink the header and add a backdrop on scroll.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Engineered Solutions":
        return <Settings className="size-5 text-[#F18805]" />;
      case "Precision Products":
        return <Disc className="size-5 text-[#F18805]" />;
      case "Technical Services":
        return <Wrench className="size-5 text-[#F18805]" />;
      default:
        return <Shield className="size-5 text-[#F18805]" />;
    }
  };

  // Find data by category title.
  const solutionsCat = conveyorData.conveyorSystemsData.find((c) => c.category === "Engineered Solutions");
  const productsCat = conveyorData.conveyorSystemsData.find((c) => c.category === "Precision Products");
  const servicesCat = conveyorData.conveyorSystemsData.find((c) => c.category === "Technical Services");

  // Static config that drives each centered mega-menu panel.
  const menuConfig: Record<
    DropdownType,
    {
      categoryName: string;
      items: ConveyorItem[] | undefined;
      sidebar: {
        title: string;
        subtitle: string;
        tag: string;
        image: string;
        badge: string;
        cta: string;
        link: string;
      };
    }
  > = {
    solutions: {
      categoryName: "Engineered Solutions",
      items: solutionsCat?.items,
      sidebar: {
        title: "Bespoke Engineering",
        subtitle: "Custom-configured turn-key conveyors built for demanding environments.",
        tag: "Engineered Solutions",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        badge: "ISO 9001:2015",
        cta: "Explore Solutions",
        link: "/products?tab=solutions",
      },
    },
    products: {
      categoryName: "Precision Products",
      items: productsCat?.items,
      sidebar: {
        title: "Industrial Components",
        subtitle: "High-tensile heavy-duty rollers, sprockets, and wear-resistant belting.",
        tag: "Precision Products",
        image:
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
        badge: "Jeedimetla Plant",
        cta: "View Catalog",
        link: "/products?tab=products",
      },
    },
    services: {
      categoryName: "Technical Services",
      items: servicesCat?.items,
      sidebar: {
        title: "Technical Support",
        subtitle: "Professional CAD layout, on-site installation, and 24/7 breakdown help.",
        tag: "Technical Services",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
        badge: "24/7 Response",
        cta: "Book Support",
        link: "/products?tab=services",
      },
    },
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileCategory(null);
  };

  // Centered mega menu dropdown.
  const renderMegaMenu = (type: DropdownType) => {
    const { categoryName, items, sidebar } = menuConfig[type];
    if (!items) return null;

    return (
      <motion.div
        key={type}
        initial={{ opacity: 0, y: 10, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        exit={{ opacity: 0, y: 10, x: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" as const }}
        style={{ left: "50%" }}
        className="absolute top-full z-50 hidden w-[min(1080px,calc(100vw-2.5rem))] pt-3 lg:block"
      >
        <div className="relative grid grid-cols-12 overflow-hidden rounded-[28px] border border-[#083C75]/10 bg-white shadow-[0_24px_60px_rgba(8,60,117,0.18)]">
          {/* Blueprint accent line */}
          <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-gradient-to-r from-[#083C75] via-[#F18805] to-[#083C75]" />

          {/* Left: menu item columns (Adjusted to col-span-7) */}
          <div className="col-span-7 p-8">
            <div className="mb-4 flex items-center gap-2 border-b border-[#083C75]/5 pb-3">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#F18805]/10">
                {getCategoryIcon(categoryName)}
              </div>
              <h4 className="text-[0.82rem] font-black uppercase tracking-wider text-[#083C75]">
                {categoryName}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={`/products/${item.slug}`}
                  className="group/item flex gap-3 rounded-2xl p-2 transition-all duration-300 hover:bg-[#083C75]/5"
                >
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#083C75]/5 transition-colors duration-300 group-hover/item:bg-white group-hover/item:shadow-sm">
                    <span className="text-xs font-bold text-[#F18805]">{idx + 1}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.9rem] font-bold leading-tight text-[#083C75] transition-colors duration-200 group-hover/item:text-[#F18805]">
                      {item.title}
                    </span>
                    <span className="line-clamp-1 text-[0.72rem] text-[#083C75]/50 transition-colors duration-200 group-hover/item:text-[#083C75]/75">
                      {item.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: showcase sidebar card */}
          <div className="relative col-span-5 flex flex-col justify-between border-l border-[#083C75]/5 bg-[#fbfcfd] p-8">
            <div className="flex flex-col gap-4">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-[#083C75]/5 shadow-sm">
                <img
                  src={sidebar.image}
                  alt={sidebar.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-wider text-[#083C75] shadow-sm backdrop-blur-sm">
                  {sidebar.badge}
                </span>
              </div>
              <div>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#F18805]">
                  {sidebar.tag}
                </span>
                <h5 className="mt-1 text-base font-black leading-tight text-[#083C75]">
                  {sidebar.title}
                </h5>
                <p className="mt-1.5 text-[0.76rem] font-medium leading-relaxed text-[#083C75]/65">
                  {sidebar.subtitle}
                </p>
              </div>
            </div>

            <a
              href={sidebar.link}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#083C75] py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#F18805]"
            >
              {sidebar.cta}
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  // Desktop dropdown trigger.
  const DropdownTrigger = ({
    type,
    label,
    href,
  }: {
    type: DropdownType;
    label: string;
    href: string;
  }) => (
    <a
      href={href}
      onMouseEnter={() => setActiveDropdown(type)}
      className={`flex items-center gap-1 text-sm font-bold tracking-wide transition-colors duration-200 hover:text-[#F18805] ${activeDropdown === type ? "text-[#F18805]" : ""
        }`}
    >
      {label}
      <ChevronDown
        className={`size-3.5 transition-transform duration-300 ${activeDropdown === type ? "rotate-180 text-[#F18805]" : ""
          }`}
      />
    </a>
  );

  return (
    <header
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed left-0 right-0 top-0 z-50 w-full border-b border-[#083C75]/10 bg-white font-sans text-[#083C75] transition-all duration-300 ${isScrolled
        ? "h-20 bg-white/95 shadow-[0_10px_30px_rgba(8,60,117,0.08)] backdrop-blur-md"
        : "h-28 bg-white/85 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center gap-[20px] px-[clamp(1.2rem,4vw,3.5rem)]">
        {/* Brand logo container - exactly 30% width minus half of the gap */}
        <a
          href="/"
          onMouseEnter={() => setActiveDropdown(null)}
          className="group flex shrink-0 items-center lg:w-[calc(30%-10px)] lg:max-w-[calc(30%-10px)]"
        >
          <Image
            src="/logo-center.png"
            alt="Yoke Conveyors & Equipments"
            width={600}
            height={600}
            className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-contain object-left transition-all duration-300 group-hover:scale-[1.01]"
            priority
          />
        </a>

        {/* Desktop navigation — occupies 70% width minus half of the gap, left-aligned (justify-start) */}
        <nav className="hidden items-center justify-start gap-7 lg:flex lg:w-[calc(70%-10px)] lg:max-w-[calc(70%-10px)]">
          <a
            href="/"
            onMouseEnter={() => setActiveDropdown(null)}
            className="text-sm font-bold tracking-wide transition-colors duration-200 hover:text-[#F18805]"
          >
            Home
          </a>
          <a
            href="/about-us"
            onMouseEnter={() => setActiveDropdown(null)}
            className="text-sm font-bold tracking-wide transition-colors duration-200 hover:text-[#F18805]"
          >
            About
          </a>

          <DropdownTrigger type="solutions" label="Solutions" href="/products?tab=solutions" />
          <DropdownTrigger type="products" label="Products" href="/products?tab=products" />
          <DropdownTrigger type="services" label="Services" href="/products?tab=services" />

          <a
            href="/products"
            onMouseEnter={() => setActiveDropdown(null)}
            className="text-sm font-bold tracking-wide transition-colors duration-200 hover:text-[#F18805]"
          >
            Full Catalog
          </a>

        </nav>

        {/* Hamburger trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-auto flex size-11 items-center justify-center rounded-xl border border-[#083C75]/10 bg-[#083C75]/5 transition-colors duration-200 hover:bg-[#083C75]/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Shared centered mega menu (desktop) */}
      <AnimatePresence mode="wait">
        {activeDropdown && renderMegaMenu(activeDropdown)}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex h-full min-h-screen w-full max-w-[300px] flex-col overflow-y-auto border-l border-[#083C75]/10 bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#083C75]/10 px-5 py-4">
                <img
                  src="/Conveyors & Equipments (1).png"
                  alt="Yoke Conveyors & Equipments"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={closeMobile}
                  className="flex size-9 items-center justify-center rounded-lg bg-[#083C75]/5 text-[#083C75]"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 p-6">
                <a
                  href="/"
                  onClick={closeMobile}
                  className="border-b border-[#083C75]/5 pb-2 text-base font-bold tracking-wide"
                >
                  Home
                </a>

                {(["solutions", "products", "services"] as DropdownType[]).map((type) => {
                  const { items } = menuConfig[type];
                  const label = type.charAt(0).toUpperCase() + type.slice(1);
                  const isOpen = activeMobileCategory === type;
                  return (
                    <div key={type} className="flex flex-col gap-2">
                      <button
                        onClick={() => setActiveMobileCategory(isOpen ? null : type)}
                        className="flex items-center justify-between border-b border-[#083C75]/5 pb-2 text-left text-base font-bold tracking-wide"
                      >
                        {label}
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#F18805]" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2 overflow-hidden border-l border-[#F18805]/20 py-1 pl-4"
                          >
                            {items?.map((item, idx) => (
                              <li key={idx}>
                                <a
                                  href={`/products/${item.slug}`}
                                  onClick={closeMobile}
                                  className="block text-sm font-semibold text-[#083C75]/85 hover:text-[#F18805]"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <a
                  href="/products"
                  onClick={closeMobile}
                  className="border-b border-[#083C75]/5 pb-2 text-base font-bold tracking-wide"
                >
                  Full Catalog
                </a>
                <a
                  href="/about-us"
                  onClick={closeMobile}
                  className="border-b border-[#083C75]/5 pb-2 text-base font-bold tracking-wide"
                >
                  About
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}