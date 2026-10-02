"use client";

import { forwardRef } from "react";
import Image from "next/image";
import type { HeroSlideData } from "@/data/heroSlides";

interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
  isFirst: boolean;
}

export const HeroSlide = forwardRef<HTMLDivElement, HeroSlideProps>(
  ({ slide, isActive, isFirst }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        aria-label={slide.alt}
        aria-hidden={!isActive}
        className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity ${
          isActive ? "pointer-events-auto z-10" : "pointer-events-none z-0"
        }`}
      >
        {/* Bright, Crisp, Natural Hero Image (No dark overlays, no gradients) */}
        <div className="slide-image-wrapper absolute inset-0 w-full h-full will-change-transform">
          {/* Laptop / Desktop Screens (md and up) */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={isFirst}
              sizes="(min-width: 768px) 100vw, 1px"
              quality={95}
              className="w-full h-full object-cover select-none pointer-events-none"
              style={{
                objectPosition: slide.objectPosition || "center center",
              }}
            />
          </div>

          {/* Mobile & Android Screens (< md, portrait) */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <Image
              src={slide.mobileImage || slide.image}
              alt={`${slide.alt} mobile`}
              fill
              priority={isFirst}
              sizes="(max-width: 767px) 100vw, 1px"
              quality={95}
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    );
  }
);

HeroSlide.displayName = "HeroSlide";
