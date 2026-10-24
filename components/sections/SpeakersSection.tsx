"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  animate,
  useTransform,
} from "motion/react";
import { Users, Lightbulb, Globe, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { speakers, Speaker } from "@/data/speaker";

export default function SpeakersSection() {
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const isAnimating = useRef(false);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  // Math for seamless horizontal infinite loop
  const cardWidth = 290;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const totalItems = speakers.length;
  const contentWidth = itemWidth * totalItems;
  const speed = 36; // px per second

  // Repeat speakers 3 times for a completely seamless loop without edge clipping
  const duplicatedSpeakers = [...speakers, ...speakers, ...speakers];

  // Performant continuous loop
  useAnimationFrame((_, delta) => {
    if (isHovered.current || isAnimating.current) return;

    let currentX = x.get() - speed * (delta / 1000);
    if (currentX <= -contentWidth) {
      currentX += contentWidth;
    }
    x.set(currentX);
  });

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let currentX = x.get();
    const jumpAmount = itemWidth * 2;

    if (currentX + jumpAmount > 0) {
      currentX -= contentWidth;
      x.set(currentX);
    }

    animate(x, currentX + jumpAmount, {
      type: "tween",
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let currentX = x.get();
    const jumpAmount = itemWidth * 2;

    if (currentX - jumpAmount < -contentWidth) {
      currentX += contentWidth;
      x.set(currentX);
    }

    animate(x, currentX - jumpAmount, {
      type: "tween",
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  return (
    <section
      id="speakers"
      aria-label="Our Speakers — Voices of Change"
      className="relative w-full bg-[#F4F0E6] text-[#10251D] py-20 sm:py-28 lg:py-32 overflow-hidden select-none"
    >
      {/* Ambient Curved Decorative Waves Background */}
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
            fill="url(#ivory-curve-grad-speakers)"
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
            <linearGradient id="ivory-curve-grad-speakers" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2D7C3" />
              <stop offset="100%" stopColor="#C9A15B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Aura Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[#C9A15B]/15 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full border border-[#C9A15B]/10 pointer-events-none" />

      {/* ========================================================
          1. HEADER & INTRO PILLARS
          ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#10251D]/10">
          {/* Left Title Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/60" />
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.26em] text-[#C9A15B] uppercase">
                VOICES OF CHANGE
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#C9A15B]/60" />
            </div>

            {/* Main Title */}
            <h2 className="font-editorial text-[44px] sm:text-[56px] lg:text-[68px] font-normal leading-[1.05] text-[#10251D] tracking-tight mb-3">
              Our <span className="text-[#C9A15B]">Speakers</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[15px] sm:text-[17px] text-[#3D4C43] font-normal leading-relaxed">
              Pioneers, conscious leaders, visionaries, and change-makers converging to shape a regenerative tomorrow.
            </p>
          </motion.div>

          {/* Right Pillar Badges & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
          >
            {/* 3 Pillars */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#EAE2D2]/70 border border-[#C9A15B]/30 shadow-xs">
                <Users className="w-3.5 h-3.5 text-[#8C6D34]" />
                <span className="font-sans text-xs font-semibold text-[#10251D]">Thought Leaders</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#EAE2D2]/70 border border-[#C9A15B]/30 shadow-xs">
                <Lightbulb className="w-3.5 h-3.5 text-[#8C6D34]" />
                <span className="font-sans text-xs font-semibold text-[#10251D]">Inspiring Ideas</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#EAE2D2]/70 border border-[#C9A15B]/30 shadow-xs">
                <Globe className="w-3.5 h-3.5 text-[#8C6D34]" />
                <span className="font-sans text-xs font-semibold text-[#10251D]">Global Perspectives</span>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous speakers"
                className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#C9A15B]/40 hover:border-[#C9A15B] text-[#10251D] hover:bg-[#073B2A] hover:text-[#FAF8F2] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next speakers"
                className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#C9A15B]/40 hover:border-[#C9A15B] text-[#10251D] hover:bg-[#073B2A] hover:text-[#FAF8F2] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          2. HORIZONTAL INFINITE SCROLL TRACK
          ======================================================== */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#F4F0E6] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#F4F0E6] to-transparent z-20 pointer-events-none" />

        <motion.div
          style={{ x }}
          className="flex gap-[24px] w-max px-6 sm:px-12"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          onTouchStart={() => (isHovered.current = true)}
          onTouchEnd={() => (isHovered.current = false)}
        >
          {duplicatedSpeakers.map((spk, idx) => {
            const imgSrc = spk.img.startsWith("/") ? spk.img : `/${spk.img}`;

            return (
              <div
                key={`${spk.id}-${idx}`}
                className="group relative w-[285px] sm:w-[305px] h-[430px] shrink-0 rounded-[20px] bg-[#FFFFFF] border border-[#E3D9C3] hover:border-[#C9A15B] shadow-[0_6px_24px_rgba(7,59,42,0.05)] hover:shadow-[0_16px_38px_rgba(7,59,42,0.12)] transition-all duration-400 flex flex-col overflow-hidden hover:-translate-y-1.5 cursor-pointer"
                onClick={() => setActiveSpeaker(spk)}
              >
                {/* Gold aura hover glow */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#C9A15B]/0 via-[#C9A15B]/0 to-[#C9A15B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Top Portrait Container */}
                <div className="relative w-full h-[260px] bg-gradient-to-b from-[#FAF6ED] to-[#ECE2D0] p-4 flex items-center justify-center overflow-hidden border-b border-[#EBE3D3]">
                  {/* Subtle Background Radial Ring */}
                  <div className="absolute inset-4 rounded-full border border-[#C9A15B]/20 pointer-events-none" />

                  {/* Speaker Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={imgSrc}
                      alt={spk.name}
                      fill
                      sizes="(max-width: 640px) 280px, 310px"
                      className="object-contain object-bottom drop-shadow-md group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Top Badge: Speaker Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#C9A15B]/30 shadow-xs">
                    <Sparkles className="w-2.5 h-2.5 text-[#C9A15B]" />
                    <span className="font-sans text-[10px] font-bold tracking-wider text-[#8C6D34] uppercase">
                      Speaker
                    </span>
                  </div>
                </div>

                {/* Bottom Speaker Details */}
                <div className="relative z-10 flex-1 p-5 flex flex-col justify-between bg-white">
                  <div>
                    {/* Speaker Name */}
                    <h3 className="font-editorial text-[20px] sm:text-[21px] font-semibold text-[#10251D] group-hover:text-[#8C6D34] transition-colors duration-300 leading-snug line-clamp-1 mb-2">
                      {spk.name}
                    </h3>

                    {/* Speaker Designation */}
                    <p className="font-sans text-[12.5px] sm:text-[13px] text-[#42544A] leading-[1.45] font-normal line-clamp-3">
                      {spk.designation}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="pt-3 border-t border-[#10251D]/6 flex items-center justify-between text-[11px] font-sans text-[#8C6D34] font-medium">
                    <span className="tracking-wider uppercase">EMERGE AURO 2026</span>
                    <span className="text-[#C9A15B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-6 flex items-center justify-between text-xs font-sans text-[#5A6D61]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A15B] animate-pulse" />
          <span>Hover or touch to pause continuous scroll</span>
        </div>
        <div className="hidden sm:block text-[#8C6D34] font-medium">
          13 Distinguished Speakers & Visionaries
        </div>
      </div>
    </section>
  );
}
