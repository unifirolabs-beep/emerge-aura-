"use client";

import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-[#050e0b]"
    >
      <h1 className="sr-only">EMERGE AURO - India's First Conscious Capital Conclave in Auroville and Mangalore</h1>
      <HeroCarousel />
    </section>
  );
}
