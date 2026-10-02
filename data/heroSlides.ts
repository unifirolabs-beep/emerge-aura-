export interface HeroSlideData {
  id: number;
  slideNumber: string;
  image: string;
  mobileImage: string;
  fallbackImage?: string;
  alt: string;
  objectPosition: string; // Configurable per slide
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    slideNumber: "01",
    image: "/images/hero/emerge-hero-01.webp",
    mobileImage: "/images/hero/emerge-hero-01 mbl .webp",
    fallbackImage: "/heropageimg/heropage banner1.webp",
    alt: "Emerge Auro — Conscious Capital Conclave Slide 1",
    objectPosition: "center center",
  },
  {
    id: 2,
    slideNumber: "02",
    image: "/images/hero/emerge-hero-02.webp",
    mobileImage: "/images/hero/emerge-hero-02 mbl.webp",
    fallbackImage: "/heropageimg/heropage banner2.webp",
    alt: "Emerge Auro — Conscious Capital Conclave Slide 2",
    objectPosition: "center center",
  },
  {
    id: 3,
    slideNumber: "03",
    image: "/images/hero/emerge-hero-03.webp",
    mobileImage: "/images/hero/emerge-hero-03 mobile.webp",
    fallbackImage: "/heropageimg/heropage banner3.webp",
    alt: "Emerge Auro — Conscious Capital Conclave Slide 3",
    objectPosition: "center center",
  },
];
