"use client";

interface HeroProgressProps {
  currentIndex: number;
  totalSlides: number;
  progress: number; // 0 to 100
  onSelectSlide?: (index: number) => void;
  isPaused?: boolean;
}

export default function HeroProgress({
  currentIndex,
  totalSlides,
  progress,
  onSelectSlide,
  isPaused = false,
}: HeroProgressProps) {
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <div
      className="flex items-center gap-3.5 sm:gap-4 bg-black/20 backdrop-blur-[8px] px-3.5 sm:px-4 py-2 rounded-full border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)] select-none"
      role="region"
      aria-label="Carousel slide indicator"
    >
      {/* 01 / 03 Indicator */}
      <div className="flex items-baseline gap-1 text-[13px] sm:text-sm font-medium tracking-widest text-[#F7F3E8] font-sans">
        <span className="font-semibold text-[#faebc7]">{currentFormatted}</span>
        <span className="text-white/40 text-xs">/</span>
        <span className="text-white/60 text-xs">{totalFormatted}</span>
      </div>

      {/* Minimal 5-second Progress Bar */}
      <div className="relative w-16 sm:w-24 h-[2px] bg-white/25 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 bottom-0 bg-[#D8B56A] rounded-full transition-[width] ease-linear"
          style={{
            width: `${Math.min(100, Math.max(0, progress))}%`,
            transitionDuration: isPaused ? "0ms" : "50ms",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Quick Clickable Dots for Slides */}
      {onSelectSlide && (
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide indicators">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => onSelectSlide(idx)}
              className="p-1 focus:outline-none rounded-full"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-3 h-1 bg-[#D8B56A]"
                    : "w-1 h-1 bg-white/40 hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
