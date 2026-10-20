"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CalendarDays, Users } from "lucide-react";
import { aboutData } from "@/data/about";
import EcosystemVisual from "@/components/ui/EcosystemVisual";

export default function AboutEmerge() {
  return (
    <section
      id="about"
      aria-label="About Emerge Auro — India's First Conscious Capital Conclave"
      className="relative w-full bg-[#F4F0E6] text-[#10251D] overflow-hidden flex items-center justify-center select-none py-16 lg:py-6 border-t border-[#E8E2D4]"
    >
      {/* ========================================================
          1. TOP-RIGHT SIGNATURE GOLD CIRCLE & ORBITAL RINGS
          ======================================================== */}
      <div
        className="absolute -top-16 sm:-top-20 lg:-top-24 -right-16 sm:-right-20 lg:-right-24 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Orbital rings */}
        <svg
          className="absolute -top-20 -left-20 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] lg:w-[680px] lg:h-[680px] pointer-events-none"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="260"
            stroke="rgba(180, 140, 70, 0.22)"
            strokeWidth="1"
          />
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="rgba(180, 140, 70, 0.12)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Textured Champagne Gold Circle */}
        <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] rounded-full shadow-[0_20px_50px_rgba(180,140,70,0.2)] mix-blend-multiply overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#F5E5BE_0%,#E0B872_35%,#C49548_70%,#916928_100%)] opacity-85" />
          <div className="absolute inset-0 rounded-full border border-[#FFF3D6]/40 pointer-events-none" />
        </div>
      </div>

      {/* Faint Botanical Leaf Silhouette on Right Edge (Matching Image 2) */}
      <div
        className="hidden xl:block absolute top-28 right-6 pointer-events-none select-none z-0 opacity-[0.10]"
        aria-hidden="true"
      >
        <svg width="100" height="280" viewBox="0 0 100 280" fill="none" stroke="#10251D" strokeWidth="1.2">
          <path d="M 15,10 Q 55,140 35,270" />
          <path d="M 35,40 C 65,30 80,50 55,60 C 40,65 35,40 35,40 Z" fill="#10251D" fillOpacity="0.25" />
          <path d="M 45,100 C 75,90 90,110 65,120 C 50,125 45,100 45,100 Z" fill="#10251D" fillOpacity="0.25" />
          <path d="M 40,165 C 70,155 85,175 60,185 C 45,190 40,165 40,165 Z" fill="#10251D" fillOpacity="0.25" />
          <path d="M 35,225 C 60,215 75,235 55,245 C 40,250 35,225 35,225 Z" fill="#10251D" fillOpacity="0.25" />
        </svg>
      </div>


      {/* ========================================================
          3. MAIN EDITORIAL CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-20 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between">
        {/* Mobile & Desktop Ecosystem View (Fully Visible in Flex Layout) */}
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[580px] xl:h-[580px] 2xl:w-[680px] 2xl:h-[680px] mb-8 lg:mb-0 shrink-0 z-30">
          {/* Outer Thin Champagne-Gold Orbital Ring with Satellite Dot (Desktop only) */}
          <div className="hidden lg:block absolute -inset-6 xl:-inset-8 rounded-full border border-[#C9A15B]/50 pointer-events-none">
            <div className="absolute top-1/2 -right-3 xl:-right-3.5 -translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 rounded-full bg-[#C9A15B] shadow-[0_0_12px_rgba(201,161,91,0.85)] border-2 border-[#F4F0E6]" />
          </div>
          <EcosystemVisual />
        </div>

        {/* Desktop Content Block: Anchored adjacent to the left circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full lg:w-[52%] xl:w-[50%] 2xl:w-[46%] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Eyebrow: ── ABOUT ── */}
          <div className="flex items-center gap-3 mb-2.5 self-center lg:self-start">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/70" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.28em] text-[#8C733E] uppercase">
              {aboutData.eyebrow}
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/70" />
          </div>

          {/* Heading: About EMERGE AURO (Exact title-case typography matching Image 2) */}
          <h2 className="font-editorial text-[42px] sm:text-[54px] lg:text-[60px] xl:text-[68px] 2xl:text-[74px] font-normal leading-[1.0] text-[#10251D] tracking-tight mb-3 sm:mb-3.5 self-center lg:self-start">
            About <span className="font-normal">EMERGE AURO</span>
          </h2>

          {/* Subtle Centered Gold Divider with Dot below Heading (Image 2 detail) */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5 sm:mb-6 self-center lg:self-start" aria-hidden="true">
            <span className="w-12 sm:w-16 h-[1px] bg-[#C9A15B]/50" />
            <span className="w-2 h-2 rounded-full border border-[#C9A15B] bg-[#C9A15B]/80" />
            <span className="w-12 sm:w-16 h-[1px] bg-[#C9A15B]/50" />
          </div>

          {/* Body Content: 4 Paragraphs (Exact width, line-height and spacing matching Image 2) */}
          <div className="space-y-3.5 sm:space-y-4 xl:space-y-4.5 max-w-[700px] xl:max-w-[760px] 2xl:max-w-[800px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] xl:text-[15.5px] font-sans font-normal leading-[1.68] text-[#26352D] opacity-95">
            {aboutData.storyBlocks.map((block) => (
              <p key={block.number} className="text-balance">
                {block.paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Event Information Row (Matching Image 2) */}
          <div className="w-full max-w-[700px] xl:max-w-[760px] 2xl:max-w-[800px] mt-6 sm:mt-7 xl:mt-8 pt-5 sm:pt-6 border-t border-[#10251D]/15 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 bg-white/60 p-4 sm:p-5 rounded-2xl shadow-sm">
            {/* Left Column: Date & Venue */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EADCC2]/60 border border-[#C9A15B]/40 flex items-center justify-center text-[#8C733E]">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-editorial text-[20px] sm:text-[22px] font-medium text-[#10251D] leading-none block">
                  28 Oct, 5–6 Dec 2026
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] tracking-wider uppercase text-[#8C733E] font-medium mt-1 block">
                  Pondicherry University & Auroville
                </span>
              </div>
            </div>

            {/* Subtle Vertical Divider between info blocks */}
            <div className="hidden sm:block w-[1px] h-10 bg-[#10251D]/15 shrink-0" aria-hidden="true" />

            {/* Right Column: Purpose & Commitment */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EADCC2]/60 border border-[#C9A15B]/40 flex items-center justify-center text-[#8C733E] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-sans text-[11.5px] sm:text-[12.5px] text-[#3A4B42] font-normal leading-snug text-left opacity-90">
                Three days bringing founders, investors, institutions and student innovators together to turn conscious capital into commitments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
