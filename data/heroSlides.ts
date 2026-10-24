export interface HeroSlideData {
  id: number;
  slideNumber: string;
  image: string;
  mobileImage?: string;
  objectPosition?: string;
  alt: string;
  eyebrow: string;
  headlineMain: string;
  headlineAccent: string;
  subHeadline: string;
  narrative: string;
  chips?: Array<{
    icon: "calendar" | "map" | "sparkles";
    text: string;
  }>;
  ecosystemTags?: string[];
  primaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    slideNumber: "01",
    image: "/images/hero/hero1.webp",
    alt: "Emerge Auro — India's First Conscious Capital Conclave Slide 1",
    eyebrow: "INDIA'S FIRST CONSCIOUS CAPITAL CONCLAVE",
    headlineMain: "EMERGE",
    headlineAccent: "AURO",
    subHeadline: "Where Purpose Meets Capital • Innovation Meets Consciousness",
    narrative:
      "Uniting startups, investors, researchers, institutions, and thinkers in Pondicherry & Auroville to build a regenerative future founded on People, Planet, and Prosperity.",
    chips: [
      {
        icon: "calendar",
        text: "28 October 2026 & 5–6 December 2026",
      },
      {
        icon: "map",
        text: "Pondicherry & Auroville",
      },
      {
        icon: "sparkles",
        text: "Pondicherry Univ & Bharat Nivas",
      },
    ],
    primaryCta: {
      label: "REGISTER FOR CONCLAVE",
      href: "https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms",
      isExternal: true,
    },
    secondaryCta: {
      label: "EXPLORE CONCLAVE",
      href: "#about",
      isExternal: false,
    },
  },
  {
    id: 2,
    slideNumber: "02",
    image: "/images/hero/hero2.webp",
    alt: "Emerge Auro — Regenerative Ecosystem and Conscious Capital Slide 2",
    eyebrow: "COLLABORATIVE CONVERGENCE · 2026",
    headlineMain: "CONSCIOUS",
    headlineAccent: "CAPITAL",
    subHeadline: "Bridging Grassroots Wisdom with Global Enterprise & Thought Leadership",
    narrative:
      "A historic convergence accelerating ventures committed to People, Planet, and Shared Prosperity across Pondicherry University and Bharat Nivas, Auroville.",
    ecosystemTags: [
      "Startups",
      "Conscious Investors",
      "Academia & Research",
      "Enterprise Leaders",
      "Social Innovators",
      "Policy Makers",
      "Auroville Township",
    ],
    primaryCta: {
      label: "REGISTER FOR CONCLAVE",
      href: "https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms",
      isExternal: true,
    },
    secondaryCta: {
      label: "EXPLORE CONCLAVE",
      href: "#about",
      isExternal: false,
    },
  },
];
