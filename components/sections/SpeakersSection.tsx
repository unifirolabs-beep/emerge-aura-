"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Users, Lightbulb, Globe, ArrowRight } from "lucide-react";

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      aria-label="Our Speakers — Voices of Change"
      className="relative w-full bg-[#F4F0E6] text-[#10251D] py-20 sm:py-28 lg:py-36 overflow-hidden select-none"
    >
      {/* ========================================================
          BACKGROUND DECORATIVE FLOURISHES & BOTANICALS
          ======================================================== */}
      {/* 1. Top-Left Botanical Leaves */}
      <div
        className="absolute -top-6 -left-6 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none select-none z-10 opacity-70"
        aria-hidden="true"
      >
        <Image
          src="/images/botanical-leaves.jpg"
          alt=""
          fill
          className="object-contain object-top-left mix-blend-multiply"
        />
      </div>

      {/* 2. Right-side Ambient Curved Overlay Waves */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none z-0 opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 700 800"
          fill="none"
          className="w-full h-full object-cover"
        >
          <path
            d="M200 0C320 250 240 550 500 800H700V0H200Z"
            fill="url(#ivory-curve-grad)"
            fillOpacity="0.35"
          />
          <path
            d="M380 0C460 300 390 600 650 800"
            stroke="#C9A15B"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M480 0C540 280 480 580 720 800"
            stroke="#C9A15B"
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />
          <defs>
            <linearGradient id="ivory-curve-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2D7C3" />
              <stop offset="100%" stopColor="#C9A15B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HEADINGS & THREE HIGHLIGHT PILLS
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            {/* Eyebrow: ────── VOICES OF CHANGE ────── */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/60" />
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.26em] text-[#C9A15B] uppercase">
                VOICES OF CHANGE
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/60" />
            </div>

            {/* Main Title: Our Speakers */}
            <h2 className="font-editorial text-[48px] sm:text-[60px] lg:text-[72px] font-normal leading-[1.0] text-[#10251D] tracking-tight mb-2.5">
              Our <span className="text-[#C9A15B]">Speakers</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[15px] sm:text-[17px] text-[#3D4C43] font-normal leading-relaxed mb-8">
              Exciting speakers to follow at the event
            </p>

            {/* 3 Value Pillars (Thought Leaders, Inspiring Ideas, Global Perspectives) */}
            <div className="flex flex-wrap sm:flex-nowrap lg:flex-wrap items-center gap-5 sm:gap-6 pt-2 border-t border-[#10251D]/10">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-[#E8E0D0] flex items-center justify-center shrink-0 text-[#10251D] shadow-sm">
                  <Users className="w-4 h-4 text-[#8C6D34]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[12.5px] font-semibold text-[#10251D]">Thought Leaders</div>
                  <div className="font-sans text-[11px] text-[#55675C]">Visionaries shaping a better tomorrow</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-[#E8E0D0] flex items-center justify-center shrink-0 text-[#10251D] shadow-sm">
                  <Lightbulb className="w-4 h-4 text-[#8C6D34]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[12.5px] font-semibold text-[#10251D]">Inspiring Ideas</div>
                  <div className="font-sans text-[11px] text-[#55675C]">Bold conversations for real impact</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-[#E8E0D0] flex items-center justify-center shrink-0 text-[#10251D] shadow-sm">
                  <Globe className="w-4 h-4 text-[#8C6D34]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans text-[12.5px] font-semibold text-[#10251D]">Global Perspectives</div>
                  <div className="font-sans text-[11px] text-[#55675C]">Diverse voices, unified by purpose</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CENTER COLUMN: EDITORIAL PODIUM LINE ILLUSTRATION & CALLOUT
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-center justify-center text-center px-4"
          >
            {/* Elegant Line Art Speaker Podium Illustration with Gold Aura */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-5">
              {/* Radial Aura Rings */}
              <div className="absolute inset-0 rounded-full border border-[#C9A15B]/25" />
              <div className="absolute inset-4 rounded-full border border-[#C9A15B]/35" />
              <div className="absolute inset-8 rounded-full bg-[#EAE2D2]/60 backdrop-blur-sm" />

              {/* Vector Podium Line Art matching the design */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-24 h-24 text-[#8C6D34] z-10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Person Head & Torso */}
                <circle cx="50" cy="23" r="8" strokeWidth="1.8" />
                <path d="M37 40C37 34 43 32 50 32C57 32 63 34 63 40" strokeWidth="1.8" />
                {/* Microphone */}
                <path d="M57 33L63 26" stroke="#C9A15B" strokeWidth="1.6" />
                <circle cx="64" cy="25" r="1.5" fill="#C9A15B" stroke="none" />
                {/* Radiating Speech Waves */}
                <path d="M30 20L26 17" stroke="#C9A15B" strokeWidth="1.5" />
                <path d="M33 27L28 27" stroke="#C9A15B" strokeWidth="1.5" />
                {/* Podium Desk Top */}
                <path d="M28 40H72V47H28Z" strokeWidth="1.8" fill="#F4F0E6" />
                {/* Podium Stand Column */}
                <path d="M36 47L40 76H60L64 47" strokeWidth="1.8" fill="#F4F0E6" />
                <path d="M50 51V72" strokeWidth="1.2" strokeOpacity="0.5" />
                {/* Podium Base */}
                <path d="M30 76H70V81H30Z" strokeWidth="1.8" fill="#F4F0E6" />
              </svg>
            </div>

            {/* Announcement Message */}
            <p className="font-editorial text-[20px] sm:text-[23px] text-[#10251D] font-medium leading-snug max-w-[340px] mb-6">
              Our exciting speaker lineup will be announced soon
            </p>

            {/* CTA Button: VIEW SPEAKERS -> */}
            <Link
              href="#speakers"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#092E1F] text-[#FAF8F2] border border-[#C9A15B]/40 font-sans text-xs tracking-[0.2em] uppercase font-semibold shadow-[0_8px_20px_rgba(9,46,31,0.25)] hover:bg-[#041A11] hover:border-[#C9A15B] transition-all duration-300"
            >
              <span>VIEW SPEAKERS</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15B] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: EDITORIAL KEYNOTE SPEAKER AT PODIUM PHOTOGRAPH
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative flex justify-end"
          >
            <div className="relative w-full max-w-[430px] h-[340px] sm:h-[400px] lg:h-[440px] rounded-[24px] overflow-hidden border border-[#C9A15B]/30 shadow-[0_24px_50px_rgba(16,37,29,0.2)] group">
              <Image
                src="/images/speaker-podium.jpg"
                alt="Keynote Speaker at Conclave Podium"
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Warm Soft Amber Gradient Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251D]/60 via-transparent to-transparent pointer-events-none" />
              {/* Subtle Golden Hairline Accent Border */}
              <div className="absolute inset-0 rounded-[24px] border border-white/20 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
