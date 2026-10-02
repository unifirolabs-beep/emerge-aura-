"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export default function HeroControls({
  onPrev,
  onNext,
  className = "",
}: HeroControlsProps) {
  return (
    <>
      {/* Left Control Arrow */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className={`group absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center bg-black/15 hover:bg-black/35 border border-white/30 hover:border-[#D8B56A]/80 backdrop-blur-[8px] text-[#F7F3E8] hover:text-[#faebc7] transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A] shadow-[0_4px_20px_rgba(0,0,0,0.25)] ${className}`}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7F3E8] group-hover:text-[#faebc7] transition-transform duration-300 ease-out group-hover:-translate-x-1" />
        <span className="sr-only">Previous Slide</span>
      </button>

      {/* Right Control Arrow */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className={`group absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center bg-black/15 hover:bg-black/35 border border-white/30 hover:border-[#D8B56A]/80 backdrop-blur-[8px] text-[#F7F3E8] hover:text-[#faebc7] transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A] shadow-[0_4px_20px_rgba(0,0,0,0.25)] ${className}`}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7F3E8] group-hover:text-[#faebc7] transition-transform duration-300 ease-out group-hover:translate-x-1" />
        <span className="sr-only">Next Slide</span>
      </button>
    </>
  );
}
