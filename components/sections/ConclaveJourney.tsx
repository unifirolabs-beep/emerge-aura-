"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { conclaveJourneyData } from "@/data/agenda";
import AgendaCard from "@/components/agenda/AgendaCard";
import AgendaTimeline from "@/components/agenda/AgendaTimeline";

export default function ConclaveJourney() {
  const { eyebrow, heading, description, days } = conclaveJourneyData;

  return (
    <section
      id="agenda"
      aria-label="The Conclave Journey — Three Days. One Purpose."
      className="relative w-full bg-[#032D1D] text-[#F4EFE6] py-28 sm:py-36 lg:py-44 overflow-hidden select-none border-t border-[#09422C]"
    >
      {/* ========================================================
          DECORATIVE BACKGROUND ELEMENTS
          ======================================================== */}

      {/* 1. Top-Right Sacred Geometry / Mandala Gold Ornament */}
      <div
        className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 pointer-events-none select-none z-0 opacity-40"
        aria-hidden="true"
      >
        <svg
          className="w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          {/* Flower of Life / Sacred Orbital Geometry */}
          <circle cx="250" cy="250" r="220" stroke="#C9A15B" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="250" cy="250" r="160" stroke="#C9A15B" strokeWidth="0.8" strokeOpacity="0.3" />
          <circle cx="250" cy="250" r="100" stroke="#C9A15B" strokeWidth="0.8" strokeOpacity="0.35" />
          <circle cx="250" cy="90" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="250" cy="410" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="90" cy="250" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="410" cy="250" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="137" cy="137" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="363" cy="137" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="137" cy="363" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx="363" cy="363" r="100" stroke="#C9A15B" strokeWidth="0.6" strokeOpacity="0.25" />
        </svg>
      </div>

      {/* 3. Subtle Ambient Radial Light behind Heading */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,161,91,0.08)_0%,transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ========================================================
          MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            HEADER: EYEBROW + EDITORIAL HEADLINE + INTRO
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Eyebrow: ────── THE CONCLAVE JOURNEY ────── */}
          <div className="flex items-center justify-center gap-3.5 mb-5">
            <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/50" />
            <span className="text-[10.5px] sm:text-[11.5px] font-sans font-medium tracking-[0.32em] text-[#C9A15B] uppercase">
              {eyebrow}
            </span>
            <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/50" />
          </div>

          {/* Main Heading: Three Days. One Purpose. */}
          <h2 className="font-editorial text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-normal leading-[0.98] tracking-tight text-[#F4EFE6] text-balance">
            {heading.prefix}{" "}
            <span className="text-[#C9A15B] font-normal">{heading.highlight}</span>
          </h2>

          {/* Short Supporting Description */}
          <p className="font-sans text-[14.5px] sm:text-[16px] md:text-[17px] text-[#E5DED2]/85 font-normal leading-relaxed max-w-[760px] mx-auto text-balance mt-6">
            {description}
          </p>

          {/* Center Gold Dot Motif: ────────── ● ────────── */}
          <div className="flex items-center justify-center gap-3 mt-7" aria-hidden="true">
            <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/40" />
            <div className="w-3 h-3 rounded-full border border-[#C9A15B] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B]" />
            </div>
            <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/40" />
          </div>
        </motion.div>

        {/* ========================================================
            THREE CARDS IN HORIZONTAL ROW (Desktop 3 Cols, Mobile Stack)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {days.map((day, idx) => (
            <motion.div
              key={day.dayNumber}
              initial={{ opacity: 0, y: 70, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex"
            >
              <AgendaCard day={day} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            CONNECTED THREE-POINT TIMELINE & DAY SUMMARIES
            ======================================================== */}
        <AgendaTimeline />

        {/* ========================================================
            BOTTOM CENTER LOTUS FLOURISH MOTIF
            ======================================================== */}
        <div className="flex items-center justify-center gap-3 mt-16 sm:mt-24 mb-4" aria-hidden="true">
          <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/40" />
          {/* Sacred Lotus Icon */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-6 h-6 text-[#C9A15B]"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M16 22C16 22 18 16 16 10C14 16 16 22 16 22Z" fill="#C9A15B" fillOpacity="0.3" />
            <path d="M16 22C18 19 22 18 25 15C22 13 18 15 16 22Z" />
            <path d="M16 22C14 19 10 18 7 15C10 13 14 15 16 22Z" />
            <path d="M16 22C19 21 24 22 28 20C26 17 21 18 16 22Z" />
            <path d="M16 22C13 21 8 22 4 20C6 17 11 18 16 22Z" />
          </svg>
          <span className="w-12 sm:w-20 h-[1px] bg-[#C9A15B]/40" />
        </div>
      </div>

    </section>
  );
}
