"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FeaturedSessions() {
  return (
    <section
      id="featured-sessions"
      aria-label="Featured sessions — Explore Insights"
      className="relative w-full bg-[#032D1D] text-[#F4EFE6] py-20 sm:py-28 lg:py-36 overflow-hidden select-none border-t border-[#09422C]"
    >

      {/* 2. Top-Right Faint Gold Sacred Geometry Orbit */}
      <div
        className="absolute -top-20 -right-20 pointer-events-none select-none z-0 opacity-20"
        aria-hidden="true"
      >
        <svg
          className="w-[420px] h-[420px] sm:w-[540px] sm:h-[540px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="220" stroke="#C9A15B" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="250" cy="250" r="160" stroke="#C9A15B" strokeWidth="0.8" strokeOpacity="0.4" />
          <circle cx="250" cy="250" r="100" stroke="#C9A15B" strokeWidth="0.8" strokeOpacity="0.45" />
        </svg>
      </div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ========================================================
            CENTER TOP: EYEBROW & SECTION HEADINGS
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          {/* Eyebrow: ────── EXPLORE INSIGHTS ────── */}
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="w-10 sm:w-16 h-[1px] bg-[#C9A15B]/60" />
            <span className="text-[10.5px] sm:text-[11.5px] font-sans font-medium tracking-[0.3em] text-[#C9A15B] uppercase">
              EXPLORE INSIGHTS
            </span>
            <span className="w-10 sm:w-16 h-[1px] bg-[#C9A15B]/60" />
          </div>

          {/* Heading: Featured sessions */}
          <h2 className="font-editorial text-[48px] sm:text-[60px] lg:text-[70px] font-normal leading-[1.0] text-[#F4EFE6] tracking-tight mb-2.5">
            Featured <span className="text-[#C9A15B]">sessions</span>
          </h2>

          {/* Subtitle: Interesting sessions at a glance */}
          <p className="font-sans text-[15px] sm:text-[17px] text-[#E5DED2]/85 font-normal leading-relaxed">
            Interesting sessions at a glance
          </p>
        </motion.div>

        {/* ========================================================
            3-COLUMN EDITORIAL COMPOSITION MATCHING REFERENCE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: LARGE AUROVILLE MATRIMANDIR SUNSET PANORAMA
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[24px] overflow-hidden border border-[#C9A15B]/30 shadow-[0_24px_50px_rgba(0,0,0,0.45)] group">
              <Image
                src="/images/agenda/agenda-day2-merge.jpg"
                alt="Auroville Matrimandir Golden Dome"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#032D1D]/70 via-transparent to-transparent pointer-events-none" />
              {/* Gold Hairline Inner Border */}
              <div className="absolute inset-0 rounded-[24px] border border-white/15 pointer-events-none" />
            </div>
          </motion.div>

          {/* ========================================================
              CENTER COLUMN: PRESENTATION SCREEN VECTOR & ORBITAL AURA
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col items-center justify-center text-center"
          >
            {/* Presentation Screen Vector with Gold Orbit */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
              {/* Thin Golden Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-[#C9A15B]/30" />
              <div className="absolute inset-4 rounded-full border border-[#C9A15B]/20 border-dashed" />
              <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-[#C9A15B]" />
              <div className="absolute bottom-6 left-2 w-2 h-2 rounded-full bg-[#C9A15B]" />

              {/* Vector Presentation Board Art */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-24 h-24 text-[#C9A15B] z-10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Screen Top Bar */}
                <path d="M22 28H78" strokeWidth="2.5" />
                {/* Screen Box */}
                <rect x="25" y="32" width="50" height="34" rx="2" strokeWidth="1.8" fill="#062F20" fillOpacity="0.8" />
                {/* Star Motif Inside Screen */}
                <polygon
                  points="50,40 52.5,45.5 58.5,46 54,50 55.5,56 50,53 44.5,56 46,50 41.5,46 47.5,45.5"
                  strokeWidth="1.4"
                  stroke="#C9A15B"
                  fill="#C9A15B"
                  fillOpacity="0.4"
                />
                {/* Tripod Stand Legs */}
                <path d="M50 66V82" strokeWidth="2" />
                <path d="M50 72L36 84" strokeWidth="1.8" />
                <path d="M50 72L64 84" strokeWidth="1.8" />
              </svg>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: CALLOUT TEXT & CTA BUTTON
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center"
          >
            {/* Announcement text */}
            <p className="font-editorial text-[22px] sm:text-[25px] lg:text-[26px] text-[#F4EFE6] font-normal leading-snug mb-7 max-w-[380px]">
              Stay tuned for interesting picks from our schedule.
            </p>

            {/* CTA Button: VIEW AGENDA -> */}
            <Link
              href="#agenda"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-transparent text-[#FAF8F2] border border-[#C9A15B] font-sans text-xs tracking-[0.2em] uppercase font-semibold shadow-[0_4px_16px_rgba(201,161,91,0.15)] hover:bg-[#C9A15B] hover:text-[#032D1D] transition-all duration-300"
            >
              <span>VIEW AGENDA</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15B] group-hover:text-[#032D1D] transition-all duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
