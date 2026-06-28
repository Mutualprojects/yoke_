"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";


export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#04091a] font-sans text-white">
      {/* --- Impactful CTA Banner --- */}


      {/* --- Main Footer Content --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-12 lg:px-24"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Column 1: Brand & Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link href="/" className="group mb-8 inline-block rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="rounded bg-white p-2">
                <Image
                  src="/logo-center.png"
                  alt="Yoke Conveyors & Equipments"
                  width={200}
                  height={56}
                  className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <p className="mb-8 max-w-sm text-sm font-medium leading-relaxed text-white/60">
              Precision-engineered material handling systems and automated conveying infrastructure designed to scale with your most demanding production requirements.
            </p>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                { name: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  href="#"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-[#F18805] hover:text-white"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d={social.path} /></svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[#F18805]">
              Company
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              {["About Us", "Our Products", "Solutions", "Services", "Contact"].map((link, i) => (
                <li key={i}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="group flex items-center gap-2 transition-colors hover:text-white">
                    <span className="h-[2px] w-0 bg-[#F18805] transition-all duration-300 group-hover:w-3" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Capabilities */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[#F18805]">
              Capabilities
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              {["Roller Conveyors", "Belt Conveyors", "Sortation Systems", "Automated Packaging", "Custom Fabrication"].map((link, i) => (
                <li key={i}>
                  <Link href={`/products/${link.toLowerCase().replace(" ", "-")}`} className="group flex items-center gap-2 transition-colors hover:text-white">
                    <span className="h-[2px] w-0 bg-[#F18805] transition-all duration-300 group-hover:w-3" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[#F18805]">
              Reach Out
            </h3>
            <ul className="flex flex-col gap-6 text-sm font-medium text-white/60">
              <li className="flex items-start gap-4 transition-colors hover:text-white">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/5 text-[#F18805]">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed">
                  Yoke Conveyors & Equipments<br />
                  Jeedimetla Industrial Area<br />
                  Hyderabad, TS 500055
                </span>
              </li>
              <li className="flex items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/5 text-[#F18805]">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+919999999999">+91 99999 99999</a>
              </li>
              <li className="flex items-center gap-4 transition-colors hover:text-white">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-white/5 text-[#F18805]">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@yokeconveyors.com">info@yokeconveyors.com</a>
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>

      {/* --- Massive Brand Watermark --- */}
      <div className="pointer-events-none relative z-0 flex w-full select-none justify-center overflow-hidden border-t border-white/5 bg-[#030612] pt-8">
        <h1 className="text-[25vw] font-black leading-none tracking-tighter text-white/[0.02] sm:text-[20vw]">
          YOKE
        </h1>

        {/* Bottom Bar positioned absolutely over the watermark */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full px-6 py-8 sm:px-12 lg:px-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs font-medium text-white/40 md:flex-row">
            <p>&copy; {new Date().getFullYear()} Yoke Conveyors & Equipments. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="transition-colors hover:text-[#F18805]">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-[#F18805]">Terms of Service</Link>
              <Link href="/sitemap" className="transition-colors hover:text-[#F18805]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
