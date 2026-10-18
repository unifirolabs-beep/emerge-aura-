"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { stakeholdersData } from "@/data/stakeholders";
import StakeholderCard from "@/components/ui/StakeholderCard";

export default function StakeholderSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax motion for gold circle & orbital elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], [10, -25]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [-1, 3]);
  const ringsY = useTransform(scrollYProgress, [0, 1], [5, -12]);
  const curvesY = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="The Emerge Ecosystem — Why Should You Be There?"
      className="relative w-full bg-[#F4F0E6] text-[#10251D] py-24 sm:py-32 lg:py-40 overflow-hidden select-none"
    >
      {/* ========================================================
          BACKGROUND DECORATIVE LAYER (z-0, completely non-intrusive)
          ======================================================== */}

      {/* 1. UPPER-RIGHT SIGNATURE GOLD CIRCLE & ORBITAL RINGS */}
      <div
        className="absolute -top-16 sm:-top-20 lg:-top-28 -right-16 sm:-right-20 lg:-right-28 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Subtle Orbital Rings */}
        <motion.svg
          style={{ y: ringsY }}
          className="absolute -top-24 -left-24 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] lg:w-[740px] lg:h-[740px] pointer-events-none"
          viewBox="0 0 700 700"
          fill="none"
        >
          {/* Outer ring 1 */}
          <circle
            cx="350"
            cy="350"
            r="260"
            stroke="rgba(180, 140, 70, 0.18)"
            strokeWidth="1"
          />
          {/* Outer ring 2 */}
          <circle
            cx="350"
            cy="350"
            r="325"
            stroke="rgba(180, 140, 70, 0.12)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </motion.svg>

        {/* The Hero Gold Circle (Champagne Gold Texture with subtle paper/foil radial variation) */}
        <motion.div
          style={{ y: circleY, rotate: circleRotate }}
          className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-full shadow-[0_20px_50px_rgba(180,140,70,0.18)] mix-blend-multiply overflow-hidden"
        >
          {/* Radial Champagne Gold Gradient */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#F5E5BE_0%,#E0B872_35%,#C49548_70%,#916928_100%)] opacity-85" />

          {/* Subtle Organic Paper / Foil Texture Overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-35 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%), url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Delicate Highlight Rim */}
          <div className="absolute inset-0 rounded-full border border-[#FFF3D6]/40 pointer-events-none" />
        </motion.div>
      </div>

      {/* 2. SUBTLE ORGANIC SVG CURVES (Barely visible, editorial lines) */}
      <motion.svg
        style={{ y: curvesY }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {/* Top-left organic curve entering gently from outside the viewport */}
        <path
          d="M -60,120 C 180,160 360,280 260,520"
          stroke="rgba(150, 120, 70, 0.12)"
          strokeWidth="1"
        />

        {/* Mid-left to bottom organic sweep */}
        <path
          d="M -40,480 C 140,540 320,620 540,590"
          stroke="rgba(150, 120, 70, 0.08)"
          strokeWidth="1"
        />

        {/* Bottom subtle connective curve */}
        <path
          d="M 680,820 C 920,780 1180,840 1480,760"
          stroke="rgba(150, 120, 70, 0.09)"
          strokeWidth="1"
        />
      </motion.svg>



      {/* ========================================================
          MAIN CONTENT CONTAINER (z-10, clean & centered)
          ======================================================== */}
      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Eyebrow with decorative flanking gold lines */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/70" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.28em] text-[#8C733E] uppercase">
              THE EMERGE ECOSYSTEM
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/70" />
          </div>

          {/* Main Headline */}
          <h2 className="font-editorial text-[48px] sm:text-[68px] md:text-[80px] lg:text-[92px] font-normal leading-[0.94] tracking-tight text-[#10251D] text-balance my-2">
            WHY SHOULD <br />
            YOU BE THERE?
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-[14px] sm:text-[15.5px] md:text-[16.5px] text-[#2C3E35] font-normal leading-relaxed max-w-[760px] text-balance mt-6 opacity-95">
            For the first time in India, EMERGE AURO brings together the people who will explore
            Conscious Capitalism — businesses that create value not only for itself, but for people,
            planet and the future.
          </p>

          {/* Decorative Gold Circular Seal Motif (⊙ flanked by delicate gold lines) */}
          <div className="flex items-center justify-center gap-3 mt-8" aria-hidden="true">
            <span className="w-10 sm:w-16 h-[1px] bg-[#C9A15B]/40" />
            <div className="w-3.5 h-3.5 rounded-full border border-[#C9A15B] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B]" />
            </div>
            <span className="w-10 sm:w-16 h-[1px] bg-[#C9A15B]/40" />
          </div>
        </motion.div>

        {/* ========================================================
            SIX CARDS (3 columns × 2 rows on Desktop, 1 col on Mobile)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {stakeholdersData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <StakeholderCard stakeholder={item} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
