"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { heroSlides } from "@/data/heroSlides";
import { HeroSlide } from "./HeroSlide";
import HeroControls from "./HeroControls";
import HeroProgress from "./HeroProgress";

const AUTOPLAY_DURATION = 5000; // 5 seconds
const SLIDE_COUNT = heroSlides.length;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // References
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isTransitioningRef = useRef(false);
  const currentIndexRef = useRef(0);
  const isPausedRef = useRef(false);
  const progressStartTimeRef = useRef<number>(0);
  const elapsedBeforePauseRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Sync ref with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
    isPausedRef.current = isPaused;
  }, [currentIndex, isPaused]);

  // Check reduced motion
  const isReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // GSAP Cinematic Slide Transition
  const transitionToSlide = useCallback(
    (nextIdx: number) => {
      if (isTransitioningRef.current && nextIdx === currentIndexRef.current) return;
      isTransitioningRef.current = true;

      const prevIdx = currentIndexRef.current;
      const prevSlide = slidesRef.current[prevIdx];
      const nextSlide = slidesRef.current[nextIdx];

      setCurrentIndex(nextIdx);
      currentIndexRef.current = nextIdx;

      // Reset progress to 0 and restart 5-second timer
      setProgress(0);
      progressStartTimeRef.current = Date.now();
      elapsedBeforePauseRef.current = 0;

      if (!prevSlide || !nextSlide) {
        isTransitioningRef.current = false;
        return;
      }

      const reduced = isReducedMotion();

      if (reduced) {
        gsap.to(prevSlide, { opacity: 0, duration: 0.4 });
        gsap.fromTo(
          nextSlide,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            onComplete: () => {
              isTransitioningRef.current = false;
            },
          }
        );
        return;
      }

      // Cinematic scale + opacity transition
      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });

      const prevImg = prevSlide.querySelector(".slide-image-wrapper");
      const nextImg = nextSlide.querySelector(".slide-image-wrapper");

      // Slide z-indexes
      gsap.set(prevSlide, { zIndex: 1 });
      gsap.set(nextSlide, { zIndex: 2 });

      // Outgoing: opacity 1 -> 0, scale 1 -> 1.03
      if (prevImg) {
        tl.to(
          prevImg,
          {
            opacity: 0,
            scale: 1.03,
            duration: 1.1,
            ease: "power2.inOut",
          },
          0
        );
      }

      // Incoming: opacity 0 -> 1, scale 1.03 -> 1
      if (nextImg) {
        tl.fromTo(
          nextImg,
          {
            opacity: 0,
            scale: 1.03,
          },
          {
            opacity: 1,
            scale: 1.0,
            duration: 1.1,
            ease: "power2.out",
          },
          0.05
        );
      }
    },
    [isReducedMotion]
  );

  // Next and Previous navigation
  const handleNext = useCallback(() => {
    const nextIdx = (currentIndexRef.current + 1) % SLIDE_COUNT;
    transitionToSlide(nextIdx);
  }, [transitionToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndexRef.current - 1 + SLIDE_COUNT) % SLIDE_COUNT;
    transitionToSlide(prevIdx);
  }, [transitionToSlide]);

  const handleSelectSlide = useCallback(
    (index: number) => {
      if (index === currentIndexRef.current) return;
      transitionToSlide(index);
    },
    [transitionToSlide]
  );

  // 5-Second Autoplay Loop with Smooth Progress
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

  // Desktop Hover: Pause autoplay on mouse enter, resume on mouse leave
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

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe for Mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - (touchStartYRef.current ?? touchEndY);

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] min-h-[100dvh] max-h-none overflow-hidden select-none bg-black"
      role="region"
      aria-label="Conclave Hero Carousel"
    >
      {/* 3 Full-Viewport Banner Slides */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, idx) => (
          <HeroSlide
            key={slide.id}
            ref={(el) => {
              slidesRef.current[idx] = el;
            }}
            slide={slide}
            isActive={idx === currentIndex}
            isFirst={idx === 0}
          />
        ))}
      </div>

      {/* Hero Navigation Arrows */}
      <HeroControls onPrev={handlePrev} onNext={handleNext} />

      {/* Bottom Right Minimal Slide Indicator & 5s Progress Bar */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-30 pointer-events-auto">
        <HeroProgress
          currentIndex={currentIndex}
          totalSlides={SLIDE_COUNT}
          progress={progress}
          onSelectSlide={handleSelectSlide}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
}
