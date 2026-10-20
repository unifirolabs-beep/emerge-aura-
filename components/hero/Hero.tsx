"use client";

import { motion, useReducedMotion } from "motion/react";
import { Calendar, MapPin, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Emerge Auro Conclave Hero"
      className="relative w-full bg-[#F5F1E8] text-[#073B2A] pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36 overflow-hidden select-none min-h-[92vh] flex items-center justify-center"
    >
      {/* ========================================================
          1. BACKGROUND SACRED GEOMETRY & AMBIENT AURA LAYERS
          ======================================================== */}

      {/* Top-Right Signature Champagne Gold Sphere & Orbital Rings */}
      <div
        className="absolute -top-20 -right-20 sm:-top-28 sm:-right-28 lg:-top-32 lg:-right-32 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-24 -left-24 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] lg:w-[720px] lg:h-[720px] pointer-events-none animate-[spin_120s_linear_infinite]"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="280"
            stroke="rgba(197, 168, 128, 0.25)"
            strokeWidth="1"
          />
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="rgba(197, 168, 128, 0.16)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full shadow-[0_20px_60px_rgba(180,140,70,0.18)] mix-blend-multiply overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#F5E5BE_0%,#E0B872_35%,#C49548_70%,#916928_100%)] opacity-85" />
          <div className="absolute inset-0 rounded-full border border-[#FFF3D6]/40 pointer-events-none" />
        </div>
      </div>

      {/* Bottom-Left Ambient Sacred Orbit */}
      <div
        className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 pointer-events-none select-none z-0 opacity-40"
        aria-hidden="true"
      >
        <svg
          className="w-[420px] h-[420px] sm:w-[560px] sm:h-[560px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="220"
            stroke="#C9A15B"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <circle
            cx="250"
            cy="250"
            r="160"
            stroke="#C9A15B"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* Center Warm Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(216,181,106,0.14)_0%,transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Subtle Ambient SVG Waves across Canvas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M -60,200 C 180,240 380,420 260,680"
          stroke="rgba(180, 140, 70, 0.12)"
          strokeWidth="1"
        />
        <path
          d="M 1200,100 C 1320,300 1460,520 1520,700"
          stroke="rgba(180, 140, 70, 0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* ========================================================
          2. MAIN HERO CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center">
        {/* Eyebrow Pill / Rule */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_CUBIC }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7"
        >
          <span className="w-8 sm:w-14 h-[1.5px] bg-[#C59A45]/70" />
          <span className="text-[11px] sm:text-[12.5px] font-sans font-semibold tracking-[0.26em] sm:tracking-[0.3em] text-[#8C733E] uppercase select-none">
            INDIA&apos;S FIRST CONSCIOUS CAPITAL CONCLAVE
          </span>
          <span className="w-8 sm:w-14 h-[1.5px] bg-[#C59A45]/70" />
        </motion.div>

        {/* Grand Headline: EMERGE AURO */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: EASE_CUBIC }}
          className="font-editorial text-[56px] sm:text-[84px] md:text-[104px] lg:text-[124px] xl:text-[136px] font-semibold text-[#073B2A] tracking-tight leading-[0.92] mb-5 sm:mb-7"
        >
          EMERGE <span className="text-[#C59A45] font-normal italic">AURO</span>
        </motion.h1>

        {/* Editorial Sub-Headline */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_CUBIC }}
          className="font-editorial text-[22px] sm:text-[28px] lg:text-[34px] font-normal text-[#17352B]/90 tracking-tight leading-snug max-w-[880px] text-balance mb-4 sm:mb-5"
        >
          Where Purpose Meets Capital • Innovation Meets Consciousness
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_CUBIC }}
          className="font-sans text-[15px] sm:text-[17px] lg:text-[18px] text-[#243E33]/85 leading-relaxed max-w-[760px] text-balance mb-8 sm:mb-10"
        >
          Uniting startups, investors, researchers, institutions, and thinkers in
          Pondicherry & Auroville to build a regenerative future founded on
          People, Planet, and Prosperity.
        </motion.p>

        {/* Key Event Metadata Chips */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: EASE_CUBIC }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/80 border border-[#EADBCA] shadow-[0_2px_10px_rgba(0,0,0,0.025)] text-xs sm:text-[13px] font-sans text-[#073B2A]">
            <Calendar className="w-3.5 h-3.5 text-[#C59A45]" />
            <span className="font-semibold">28 October 2026 & 5–6 December 2026</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/80 border border-[#EADBCA] shadow-[0_2px_10px_rgba(0,0,0,0.025)] text-xs sm:text-[13px] font-sans text-[#073B2A]">
            <MapPin className="w-3.5 h-3.5 text-[#C59A45]" />
            <span className="font-semibold">Pondicherry & Auroville</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/80 border border-[#EADBCA] shadow-[0_2px_10px_rgba(0,0,0,0.025)] text-xs sm:text-[13px] font-sans text-[#073B2A]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A45]" />
            <span className="font-semibold">Pondicherry Univ & Bharat Nivas</span>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: EASE_CUBIC }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-[480px] mb-14 sm:mb-16"
        >
          <a
            href="https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#073B2A] text-[#F5F1E8] hover:bg-[#0A4D37] hover:text-[#FFFFFF] transition-all duration-300 font-sans text-[12.5px] sm:text-[13.5px] font-semibold tracking-[0.14em] uppercase shadow-[0_4px_20px_rgba(7,59,42,0.22)] hover:shadow-[0_8px_28px_rgba(7,59,42,0.3)] hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A45]"
          >
            <span>REGISTER FOR CONCLAVE</span>
            <ArrowRight className="w-4 h-4 text-[#C59A45] transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/70 border border-[#C5A880]/80 text-[#073B2A] hover:bg-[#C5A880] hover:text-[#FFFFFF] hover:border-[#C5A880] transition-all duration-300 font-sans text-[12.5px] sm:text-[13.5px] font-semibold tracking-[0.14em] uppercase shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <span>EXPLORE CONCLAVE</span>
            <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Participating Ecosystem Strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE_CUBIC }}
          className="pt-7 sm:pt-8 border-t border-[#073B2A]/10 w-full max-w-[880px]"
        >
          <p className="text-[10.5px] sm:text-[11px] font-sans font-semibold tracking-[0.24em] text-[#8C733E] uppercase text-center mb-3 sm:mb-4">
            PARTICIPATING ECOSYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[12.5px] font-sans text-[#073B2A]/85 font-medium">
            {[
              "Startups",
              "Conscious Investors",
              "Academia & Research",
              "Enterprise Leaders",
              "Social Innovators",
              "Policy Makers",
              "Auroville Township",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#EADBCA]/45 border border-[#C5A880]/30 hover:border-[#C5A880] hover:bg-white transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
