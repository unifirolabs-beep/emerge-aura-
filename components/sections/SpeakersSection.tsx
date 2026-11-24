"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  animate,
  useTransform,
} from "motion/react";
import { Users, Lightbulb, Globe, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
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
  const speed = 42; // px per second (smoothly increased from 36px/s for a slightly faster continuous flow)

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
    const jumpAmount = itemWidth;

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
    const jumpAmount = itemWidth;

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

      {/* ========================================================
          1. HEADER & INTRO PILLARS
          ======================================================== */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
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
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.26em] text-[#C9A15B] uppercase">
                VOICES OF CHANGE
              </span>
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

          {/* Right Controls: View All Button & Slider Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* View All Speakers Button */}
            <Link
              href="/speakers"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#073B2A] text-[#FAF8F2] hover:bg-[#042017] border border-[#C9A15B]/50 hover:border-[#C9A15B] font-sans text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(7,59,42,0.18)] hover:shadow-[0_8px_24px_rgba(7,59,42,0.28)] hover:-translate-y-0.5 active:scale-95"
            >
              <span>View All Speakers</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15B] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

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
                className="group relative w-[285px] sm:w-[305px] h-[445px] shrink-0 rounded-[22px] bg-[#FFFFFF] border border-[#E3D9C3] hover:border-[#C9A15B] shadow-[0_6px_24px_rgba(7,59,42,0.05)] hover:shadow-[0_16px_38px_rgba(7,59,42,0.12)] transition-all duration-400 flex flex-col overflow-hidden hover:-translate-y-1.5 cursor-pointer"
                onClick={() => setActiveSpeaker(spk)}
              >
                {/* Gold aura hover glow */}
                <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-[#C9A15B]/0 via-[#C9A15B]/0 to-[#C9A15B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Top Portrait Container */}
                <div className="relative w-full h-[260px] bg-gradient-to-b from-[#FAF6ED] to-[#ECE2D0] p-4 flex items-center justify-center overflow-hidden border-b border-[#EBE3D3]">

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
                </div>

                {/* Bottom Speaker Details */}
                <div className="relative z-10 flex-1 p-5 flex flex-col justify-start bg-white">
                  {/* Speaker Name */}
                  <h3 className="font-editorial text-[20px] sm:text-[21px] font-semibold text-[#10251D] group-hover:text-[#8C6D34] transition-colors duration-300 leading-snug line-clamp-2 min-h-[50px] mb-1.5">
                    {spk.name}
                  </h3>

                  {/* Speaker Designation */}
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#42544A] leading-[1.45] font-normal line-clamp-3">
                    {spk.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Hint & View All Link */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#5A6D61]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A15B] animate-pulse" />
          <span>Hover or touch to pause continuous scroll</span>
        </div>
        <Link
          href="/speakers"
          className="group inline-flex items-center gap-1.5 text-[#8C6D34] hover:text-[#073B2A] font-semibold transition-colors duration-200"
        >
          <span>Explore all {speakers.length} speakers in the directory</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
