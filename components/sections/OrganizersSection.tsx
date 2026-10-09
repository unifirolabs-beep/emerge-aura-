"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import { organizersData } from "@/data/organizers";

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Framer Motion animation variants for polished staggered entrance
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_CUBIC,
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_CUBIC },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_CUBIC },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_CUBIC },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_CUBIC },
  },
};

export default function OrganizersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax motion for background gold sphere
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], [15, -20]);
  const ringsY = useTransform(scrollYProgress, [0, 1], [5, -10]);

  return (
    <section
      ref={sectionRef}
      id="organizers"
      aria-label="Our Ecosystem Partners — Organizers"
      className="relative w-full bg-[#FAF7F0] text-[#0F2D25] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* ========================================================
          BACKGROUND DECORATIVE LAYER (Subtle, luxury, spacious)
          ======================================================== */}

      {/* 1. UPPER-RIGHT SIGNATURE GOLD SPHERE & ORBITAL RINGS */}
      <div
        className="absolute -top-16 sm:-top-20 lg:-top-24 -right-16 sm:-right-20 lg:-right-24 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <motion.svg
          style={{ y: shouldReduceMotion ? 0 : ringsY }}
          className="absolute -top-24 -left-24 w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] pointer-events-none"
          viewBox="0 0 700 700"
          fill="none"
        >
          <circle
            cx="350"
            cy="350"
            r="280"
            stroke="rgba(197, 168, 128, 0.22)"
            strokeWidth="1"
          />
          <circle
            cx="350"
            cy="350"
            r="330"
            stroke="rgba(197, 168, 128, 0.14)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </motion.svg>

        {/* Ambient champagne gold sphere */}
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : circleY }}
          className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full shadow-[0_20px_50px_rgba(180,140,70,0.15)] mix-blend-multiply overflow-hidden"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#F5E5BE_0%,#E0B872_35%,#C49548_70%,#916928_100%)] opacity-80" />
          <div className="absolute inset-0 rounded-full border border-[#FFF3D6]/40 pointer-events-none" />
        </motion.div>
      </div>

      {/* 2. SUBTLE ORGANIC SVG CURVES (Left edge accents) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M -40,140 C 160,180 320,320 220,540"
          stroke="rgba(180, 140, 70, 0.12)"
          strokeWidth="1"
        />
        <path
          d="M -30,520 C 140,580 300,640 480,610"
          stroke="rgba(180, 140, 70, 0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* 3. SUBTLE BOTANICAL BRANCH SILHOUETTE (Left side) */}
      <div
        className="hidden md:block absolute top-28 left-6 lg:left-10 pointer-events-none select-none z-0 opacity-[0.05]"
        aria-hidden="true"
      >
        <svg
          width="130"
          height="160"
          viewBox="0 0 130 160"
          fill="none"
          stroke="#0F2D25"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 10,10 Q 50,70 120,150" />
          <path
            d="M 35,45 C 20,35 15,15 35,25 C 50,32 40,45 35,45 Z"
            fill="#0F2D25"
            fillOpacity="0.3"
          />
          <path
            d="M 60,80 C 80,70 85,50 65,60 C 50,68 60,80 60,80 Z"
            fill="#0F2D25"
            fillOpacity="0.3"
          />
          <path
            d="M 85,115 C 70,105 65,85 85,95 C 100,102 90,115 85,115 Z"
            fill="#0F2D25"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* ========================================================
          MAIN SECTION CONTENT
          ======================================================== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* SECTION HEADER */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex flex-col items-center mb-16 sm:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <span className="w-8 sm:w-14 h-[1px] bg-[#C5A880]/60" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] sm:tracking-[0.28em] text-[#8C733E] uppercase">
              OUR ECOSYSTEM PARTNERS
            </span>
            <span className="w-8 sm:w-14 h-[1px] bg-[#C5A880]/60" />
          </div>

          {/* Heading with two-tone editorial serif */}
          <h2 className="font-editorial text-[44px] sm:text-[56px] lg:text-[68px] font-semibold text-[#0F2D25] tracking-tight leading-none mb-4">
            Organ<span className="text-[#C59A45]">izers</span>
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[15px] sm:text-[17px] text-[#2D453B]/80 max-w-[680px] mx-auto leading-relaxed">
            A collective of institutions and communities working together to shape Emerge Auro — from innovation and education to enterprise and social impact.
          </p>

          {/* Divider */}
          <div className="w-16 h-[1.5px] bg-[#C5A880]/50 mx-auto mt-6" />
        </motion.div>

        {/* ORGANIZER CARDS STACK */}
        <div className="space-y-8 sm:space-y-9">
          {organizersData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative bg-[#FFFFFF] rounded-[22px] border border-[#E7DEC8] shadow-[0_4px_28px_rgba(15,45,37,0.025)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,45,37,0.07)] hover:border-[#C5A880] hover:-translate-y-1 group"
            >
              {/* Number Badge (Desktop: Overlapping left border; Mobile: In-card top) */}
              <motion.div
                variants={shouldReduceMotion ? undefined : numberVariants}
                className="hidden sm:flex absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#FAF7F0] border border-[#C5A880]/90 items-center justify-center z-20 shadow-[0_2px_8px_rgba(15,45,37,0.06)]"
                aria-hidden="true"
              >
                <span className="font-sans text-[13px] lg:text-[14px] font-semibold text-[#0F2D25] tracking-wider">
                  {item.number}
                </span>
              </motion.div>

              <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] lg:flex lg:flex-row items-stretch lg:items-center">
                {/* Mobile Number Indicator */}
                <div className="sm:hidden flex items-center gap-2.5 pt-5 px-6 pb-1">
                  <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#C5A880]/90 flex items-center justify-center text-[12px] font-semibold text-[#0F2D25] shadow-2xs">
                    {item.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#8C733E] font-semibold font-sans">
                    Organizer {item.number}
                  </span>
                </div>

                {/* Left: Dedicated Logo Area (Main visual element with elevated logo container) */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : logoVariants}
                  className="w-full md:col-start-1 md:row-start-1 md:row-span-2 lg:col-auto lg:row-auto lg:w-[270px] shrink-0 p-6 sm:p-7 md:p-6 lg:p-7 flex items-center justify-center"
                >
                  <div className="relative w-full h-[130px] sm:h-[140px] md:h-[150px] rounded-[16px] bg-[#FAF8F3] border border-[#EADBCA]/90 shadow-[0_2px_12px_rgba(0,0,0,0.025),inset_0_1px_2px_rgba(255,255,255,0.8)] flex items-center justify-center p-4 sm:p-5 transition-all duration-300 group-hover:border-[#C5A880] group-hover:shadow-[0_4px_16px_rgba(197,168,128,0.12)] group-hover:-translate-y-0.5">
                    {/* Subtle inner highlight */}
                    <div className="absolute inset-0 rounded-[16px] pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-black/[0.015]" />

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={item.logo}
                        alt={item.logoAlt}
                        fill
                        sizes="(max-width: 768px) 240px, 260px"
                        className="object-contain p-2.5 sm:p-3 transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Vertical Divider (Desktop) */}
                <div
                  className="hidden lg:block w-[1px] bg-[#EBE4D3] self-stretch my-6 lg:my-8"
                  aria-hidden="true"
                />

                {/* Horizontal Divider (Mobile) */}
                <div
                  className="md:hidden mx-6 h-[1px] bg-[#EBE4D3]"
                  aria-hidden="true"
                />

                {/* Center: Organizer Content (~55% width) */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : contentVariants}
                  className="flex-1 md:col-start-2 md:row-start-1 lg:col-auto lg:row-auto p-6 md:pt-8 md:pb-2 md:px-8 lg:py-7 lg:px-8"
                >
                  <h3 className="font-editorial text-[24px] sm:text-[27px] font-bold text-[#0F2D25] leading-snug tracking-tight mb-3">
                    {item.name}
                  </h3>
                  <div className="space-y-3 font-sans text-[14.5px] sm:text-[15.5px] leading-[1.72] text-[#243E33]/90 font-normal">
                    {item.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Action Button (~20% width on desktop) */}
                <motion.div
                  variants={shouldReduceMotion ? undefined : buttonVariants}
                  className="shrink-0 md:col-start-2 md:row-start-2 lg:col-auto lg:row-auto p-6 md:pt-2 md:pb-8 md:px-8 lg:p-6 lg:pr-10 lg:pl-2 flex items-center justify-start md:justify-start lg:justify-end self-stretch md:self-auto"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full border border-[#C5A880]/90 text-[#0F2D25] bg-[#FAF7F0]/40 hover:bg-[#C5A880] hover:text-[#FFFFFF] transition-all duration-300 text-[12px] sm:text-[13px] font-sans font-medium tracking-[0.08em] uppercase shadow-2xs group/btn active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                  >
                    <span>{item.buttonText || "VISIT WEBSITE"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 text-current" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
