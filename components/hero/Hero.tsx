"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { heroSlides } from "@/data/heroSlides";

const AUTOPLAY_DURATION = 6000; // 6 seconds per slide

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const progressStartTimeRef = useRef<number>(Date.now());
  const elapsedBeforePauseRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;
  }, []);

  const handleSelectSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;
  };

  // 6s Autoplay Timer
  useEffect(() => {
    progressStartTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;

    const tick = () => {
      if (!isPausedRef.current) {
        const now = Date.now();
        const elapsed = now - progressStartTimeRef.current + elapsedBeforePauseRef.current;
        const currentProgress = (elapsed / AUTOPLAY_DURATION) * 100;

        if (currentProgress >= 100) {
          handleNext();
        } else {
          setProgress(currentProgress);
        }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [handleNext]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    isPausedRef.current = true;
    elapsedBeforePauseRef.current += Date.now() - progressStartTimeRef.current;
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    isPausedRef.current = false;
    progressStartTimeRef.current = Date.now();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      id="hero"
      aria-label="Emerge Auro Conclave Hero Carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-[#031C13] text-[#F5F1E8] overflow-hidden select-none flex flex-col items-center justify-center"
    >
      {/* ========================================================
          1. BACKGROUND IMAGES SLIDESHOW (Banyan & Matrimandir)
          ======================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              quality={92}
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}

        {/* Balanced Scrim Overlays: keeps the background image visible while giving rich contrast for text */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#021810]/90 via-[#032317]/60 to-[#021810]/50 z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,28,19,0.35)_0%,rgba(2,16,11,0.75)_100%)] z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient Gold Orbital Rings in corner */}
        <div
          className="absolute -top-20 -right-20 sm:-top-28 sm:-right-28 lg:-top-32 lg:-right-32 pointer-events-none select-none z-10 opacity-50"
          aria-hidden="true"
        >
          <svg
            className="absolute -top-24 -left-24 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] lg:w-[720px] lg:h-[720px] pointer-events-none animate-[spin_120s_linear_infinite]"
            viewBox="0 0 700 700"
            fill="none"
          >
            <circle cx="350" cy="350" r="280" stroke="rgba(229, 193, 90, 0.3)" strokeWidth="1" />
            <circle cx="350" cy="350" r="330" stroke="rgba(229, 193, 90, 0.18)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>
        </div>
      </div>

      {/* ========================================================
          2. SLIDE CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Eyebrow Pill / Rule */}
            <div className="flex items-center justify-center gap-3 pt-32 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-8 sm:w-14 h-[1.5px] bg-[#E5C15A]" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] sm:tracking-[0.28em] text-[#E5C15A] uppercase select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {currentSlide.eyebrow}
              </span>
              <span className="w-8 sm:w-14 h-[1.5px] bg-[#E5C15A]" />
            </div>

            {/* Grand Headline */}
            <h1 className="font-editorial text-[44px] sm:text-[62px] md:text-[78px] lg:text-[92px] xl:text-[104px] font-semibold text-[#FFFFFF] tracking-tight leading-[0.94] mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              {currentSlide.headlineMain}{" "}
              <span className="text-[#E5C15A] font-normal italic">
                {currentSlide.headlineAccent}
              </span>
            </h1>

            {/* Editorial Sub-Headline */}
            <p className="font-editorial text-[19px] sm:text-[23px] lg:text-[27px] font-normal text-[#FAF6EE] tracking-tight leading-snug max-w-[850px] text-balance mb-2.5 sm:mb-3.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {currentSlide.subHeadline}
            </p>

            {/* Narrative Description */}
            <p className="font-sans text-[14px] sm:text-[15.5px] lg:text-[16px] text-[#F0EAE0] leading-relaxed max-w-[720px] text-balance mb-5 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {currentSlide.narrative}
            </p>

            {/* Slide 1: Event Metadata Chips */}
            {currentSlide.chips && currentSlide.chips.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-7">
                {currentSlide.chips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#E5C15A]/50 shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-[11.5px] sm:text-xs font-sans text-[#FFFFFF]"
                  >
                    {chip.icon === "calendar" && <Calendar className="w-3.5 h-3.5 text-[#E5C15A]" />}
                    {chip.icon === "map" && <MapPin className="w-3.5 h-3.5 text-[#E5C15A]" />}
                    {chip.icon === "sparkles" && <Sparkles className="w-3.5 h-3.5 text-[#E5C15A]" />}
                    <span className="font-semibold tracking-wide drop-shadow-sm">{chip.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Slide 2: Participating Ecosystem Tags */}
            {currentSlide.ecosystemTags && currentSlide.ecosystemTags.length > 0 && (
              <div className="pt-0.5 pb-0.5 mb-5 sm:mb-6 w-full max-w-[840px]">
                <p className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-[0.24em] text-[#E5C15A] uppercase text-center mb-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  PARTICIPATING ECOSYSTEM
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-xs font-sans text-[#FFFFFF] font-medium">
                  {currentSlide.ecosystemTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-[#E5C15A]/45 hover:border-[#E5C15A] hover:bg-black/75 transition-colors duration-200 shadow-md drop-shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-[480px]">
              <a
                href={currentSlide.primaryCta.href}
                target={currentSlide.primaryCta.isExternal ? "_blank" : undefined}
                rel={currentSlide.primaryCta.isExternal ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#E5C15A] text-[#050E0B] hover:bg-[#D4A63A] hover:text-[#000000] transition-all duration-300 font-sans text-[12.5px] sm:text-[13.5px] font-bold tracking-[0.14em] uppercase shadow-[0_4px_24px_rgba(229,193,90,0.4)] hover:shadow-[0_8px_32px_rgba(229,193,90,0.6)] hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C15A]"
              >
                <span>{currentSlide.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#050E0B] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={currentSlide.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-[#FFFFFF] hover:bg-white hover:text-[#050E0B] hover:border-white transition-all duration-300 font-sans text-[12.5px] sm:text-[13.5px] font-semibold tracking-[0.14em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{currentSlide.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================
          3. CONTROLS: ARROWS & BOTTOM PROGRESS
          ======================================================== */}
      {/* Left Chevron Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="group absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/75 border border-white/35 hover:border-[#E5C15A] backdrop-blur-md text-[#F7F3E8] hover:text-[#E5C15A] transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>

      {/* Right Chevron Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="group absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full flex items-center justify-center bg-black/45 hover:bg-black/75 border border-white/35 hover:border-[#E5C15A] backdrop-blur-md text-[#F7F3E8] hover:text-[#E5C15A] transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Bottom Progress Bar & Slide Dots */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-30 pointer-events-auto">
        <div
          className="flex items-center gap-3 sm:gap-4 bg-black/55 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.4)] select-none"
          role="region"
          aria-label="Slide Indicator"
        >
          {/* Slide Number 01 / 02 */}
          <div className="flex items-baseline gap-1 text-[13px] sm:text-sm font-medium tracking-widest text-[#F7F3E8] font-sans">
            <span className="font-semibold text-[#E5C15A]">{currentSlide.slideNumber}</span>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/60 text-xs">0{heroSlides.length}</span>
          </div>

          {/* Autoplay Progress Line */}
          <div className="relative w-14 sm:w-20 h-[2.5px] bg-white/25 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 bottom-0 bg-[#E5C15A] rounded-full transition-[width] ease-linear"
              style={{
                width: `${Math.min(100, Math.max(0, progress))}%`,
                transitionDuration: isPaused ? "0ms" : "50ms",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Interactive Slide Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide selector">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => handleSelectSlide(idx)}
                className="p-1 focus:outline-none rounded-full"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-3.5 h-1.5 bg-[#E5C15A]"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
