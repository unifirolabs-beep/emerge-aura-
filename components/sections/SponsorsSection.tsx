"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  animate,
} from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sponsorLogos, SponsorLogoItem } from "@/data/sponsors";

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SponsorCard({ logo }: { logo: SponsorLogoItem }) {
  return (
    <div className="group relative w-[240px] sm:w-[280px] h-[160px] sm:h-[180px] bg-white/95 rounded-[20px] border border-[#063522]/10 shadow-[0_8px_30px_rgba(6,53,34,0.06)] hover:shadow-[0_16px_40px_rgba(6,53,34,0.14)] hover:border-[#063522]/30 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col items-center justify-between shrink-0 select-none backdrop-blur-sm">

      {/* Logo container */}
      <div className="relative w-full flex-1 flex items-center justify-center my-2">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="280px"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function SponsorsSection() {
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const isAnimating = useRef(false);

  // Layout math for seamless continuous loop
  const cardWidth = 280;
  const gap = 24;
  const itemWidth = cardWidth + gap;
  const totalItems = sponsorLogos.length;
  const contentWidth = itemWidth * totalItems;
  const speed = 40; // px per second

  // Repeat logos 3 times for seamless wrapping
  const duplicatedSponsors = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

  // Infinite scroll loop
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
      ease: EASE_CUBIC,
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
      ease: EASE_CUBIC,
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  return (
    <section
      id="sponsors"
      aria-label="Our Sponsors & Enablers"
      className="relative w-full bg-[#F5CB62] text-[#063522] py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Background radial gradient & noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F6D378] via-[#F5CB62] to-[#E3B84A] z-0" />
      <div
        className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-white/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4A33B]/25 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#063522]/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-sans font-bold tracking-[0.24em] text-[#6B4A16] uppercase">
                PARTNER FOR IMPACT
              </span>
            </div>
            <h2 className="font-editorial text-[48px] sm:text-[64px] lg:text-[76px] font-medium leading-[0.95] text-[#063522] tracking-tight">
              Our Enablers
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-[#063522]/80 font-normal mt-3 max-w-[540px]">
              Thanks to the visionary organisations and partners that make EMERGE AURO possible.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous sponsors"
              className="w-11 h-11 rounded-full border border-[#063522]/20 flex items-center justify-center text-[#063522] hover:bg-[#063522] hover:text-[#F5CB62] hover:border-[#063522] transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next sponsors"
              className="w-11 h-11 rounded-full border border-[#063522]/20 flex items-center justify-center text-[#063522] hover:bg-[#063522] hover:text-[#F5CB62] hover:border-[#063522] transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Infinite Scroll Carousel */}
      <div
        className="relative w-full z-10 cursor-grab active:cursor-grabbing overflow-hidden py-4"
        onMouseEnter={() => {
          isHovered.current = true;
        }}
        onMouseLeave={() => {
          isHovered.current = false;
        }}
      >
        {/* Soft edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F5CB62] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F5CB62] to-transparent z-20 pointer-events-none" />

        <motion.div
          style={{ x }}
          className="flex gap-6 items-center px-4"
        >
          {duplicatedSponsors.map((logo, idx) => (
            <SponsorCard key={`${logo.id}-${idx}`} logo={logo} />
          ))}
        </motion.div>
      </div>

      {/* ── Extended Section: Featured Exclusive Partners ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-14 sm:mt-18 pt-12 sm:pt-16 border-t border-[#063522]/15">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.24em] text-[#6B4A16] uppercase mb-2">
            EXCLUSIVE PARTNERS
          </span>
          <h3 className="font-editorial text-[34px] sm:text-[44px] font-medium leading-[1.05] text-[#063522] tracking-tight">
            Concert Sponsor & Media Partner
          </h3>
          <p className="font-sans text-[14px] sm:text-[16px] text-[#063522]/75 max-w-[520px] mt-2">
            Celebrating our dedicated partners powering our cultural concert and state-wide media coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Rhythmic Energy Concert Sponsor */}
          <div className="group relative bg-white/95 rounded-[22px] border border-[#063522]/12 shadow-[0_8px_30px_rgba(6,53,34,0.06)] hover:shadow-[0_18px_45px_rgba(6,53,34,0.13)] hover:border-[#063522]/30 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col items-center justify-between text-center backdrop-blur-sm">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#063522]/5 border border-[#063522]/10 text-[#063522] text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A33B]" />
              RHYTHMIC ENERGY CONCERT SPONSOR
            </div>

            {/* Logo Image */}
            <div className="relative w-full h-[150px] sm:h-[170px] flex items-center justify-center my-4 sm:my-6">
              <Image
                src="/RHYTHMIC ENERGY CONCERT SPONSOR.png"
                alt="PMC Tech - Rhythmic Energy Concert Sponsor"
                fill
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title & Tagline */}
            <div className="w-full pt-4 border-t border-[#063522]/10">
              <h4 className="font-editorial text-[22px] sm:text-[24px] font-semibold text-[#063522]">
                PMC Tech
              </h4>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#063522]/70 font-medium mt-0.5">
                Inspire to Innovate
              </p>
            </div>
          </div>

          {/* Card 2: Media Partner */}
          <div className="group relative bg-white/95 rounded-[22px] border border-[#063522]/12 shadow-[0_8px_30px_rgba(6,53,34,0.06)] hover:shadow-[0_18px_45px_rgba(6,53,34,0.13)] hover:border-[#063522]/30 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col items-center justify-between text-center backdrop-blur-sm">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#063522]/5 border border-[#063522]/10 text-[#063522] text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A33B]" />
              MEDIA PARTNER
            </div>

            {/* Logo Image */}
            <div className="relative w-full h-[150px] sm:h-[170px] flex items-center justify-center my-4 sm:my-6">
              <Image
                src="/MEDIA PARTNER.png"
                alt="Ananda Vikatan - Media Partner"
                fill
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title & Tagline */}
            <div className="w-full pt-4 border-t border-[#063522]/10">
              <h4 className="font-editorial text-[22px] sm:text-[24px] font-semibold text-[#063522]">
                Ananda Vikatan
              </h4>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#063522]/70 font-medium mt-0.5">
                No. 1 Tamil Weekly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
