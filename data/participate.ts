export const REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms";

export const B2B_REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/FROM/formperma/CiZNCLngp4GIMES69xsXFTyONhnzAebnN61MZRRTf9g";

export const STARTUP_PITCH_REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/EmergePitchFest2026StartupRegistration1/formperma/nEA6Ws3ius3a-s-D1AiygAMnBBNwmHcT4nW6JPlOcCc";

export interface FeatureItem {
  included: boolean;
  text: string;
}

export interface PassItem {
  id: string;
  name: string;
  badge?: string;
  badgeSecondary?: string;
  isPopular?: boolean;
  price: string;
  priceSuffix?: string;
  originalPrice?: string;
  pricingBox?: {
    earlyBird: string;
    standard: string;
    note?: string;
  };
  period: string;
  description: string;
  features: FeatureItem[];
  ctaText: string;
  ctaHref: string;
}

export interface StallItem {
  id: string;
  name: string;
  dimensions: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  description: string;
  features: FeatureItem[];
  ctaText: string;
  ctaHref: string;
}

export interface ParticipateData {
  eyebrow: string;
  heading: {
    prefix: string;
    highlight: string;
  };
  description: string;
  passesHeading: string;
  passesDescription: string;
  passes: PassItem[];
  stallsHeading: string;
  stallsDescription: string;
  stallsNote: string;
  stalls: StallItem[];
}

export const participateData: ParticipateData = {
  eyebrow: "PARTICIPATION & ACCESS",
  heading: {
    prefix: "How to",
    highlight: "Participate",
  },
  description:
    "Secure your passes to Bharat's first Conscious Capital Conclave or reserve an exhibition space at Bharat Nivas, Auroville.",
  passesHeading: "Conclave Passes",
  passesDescription:
    "Choose your participation tier — from open showcase access to comprehensive delegate privileges and founder-focused investor tracks.",
  passes: [
    {
      id: "visitor-pass",
      name: "Visitor Pass",
      badge: "Open Access",
      price: "Free",
      period: "Public Access",
      description:
        "Startup Showcase grounds and the Saochi talks and panels only. No other benefits.",
      features: [
        { included: true, text: "Startup Showcase grounds access" },
        { included: true, text: "Saochi talks and panels only" },
        { included: true, text: "Open courtyard networking" },
        { included: false, text: "Aurobindo Hall main sessions" },
        { included: false, text: "Rhythmic Energy concert & dinner" },
      ],
      ctaText: "Register for Free",
      ctaHref: REGISTRATION_URL,
    },
    {
      id: "delegate-pass",
      name: "Delegate Pass",
      badge: "Most Popular",
      isPopular: true,
      price: "₹1,999",
      period: "Both Days • All Sessions",
      description:
        "Both days, all sessions including Aurobindo Hall, Rhythmic Energy concert, networking dinner.",
      features: [
        { included: true, text: "Both days full conclave access" },
        { included: true, text: "All sessions including Aurobindo Hall" },
        { included: true, text: "Rhythmic Energy live concert access" },
        { included: true, text: "Official networking dinner" },
        { included: true, text: "Conclave delegate badge & welcome kit" },
      ],
      ctaText: "Book Delegate Pass",
      ctaHref: REGISTRATION_URL,
    },
    {
      id: "startup-pass",
      name: "Startup Pass",
      badge: "NETWORKING",
      badgeSecondary: "EARLY BIRD",
      price: "₹1,999",
      priceSuffix: "+ GST (Early Bird)",
      originalPrice: "₹3,999 + GST",
      pricingBox: {
        earlyBird: "Early bird: ₹1,999 + GST till 25 Nov 2026, 11:59 PM IST.",
        standard: "₹3,999 + GST from 26 Nov 2026.",
        note: "Includes Day 1 B2B round tables at Bhumika Hall, Bharat Nivas, Auroville, plus meals and a welcome kit.",
      },
      period: "One Person • Investor Track",
      description:
        "One person. B2B Networking and investor access, Rhythmic Energy concert and networking dinner.",
      features: [
        { included: true, text: "One person full conclave access" },
        { included: true, text: "Structured B2B Networking rotations" },
        { included: true, text: "Direct investor access & Deal Lounge" },
        { included: true, text: "Rhythmic Energy concert access" },
        { included: true, text: "Exclusive networking dinner" },
      ],
      ctaText: "Book Startup Pass",
      ctaHref: B2B_REGISTRATION_URL,
    },
  ],
  stallsHeading: "Stall Booking",
  stallsDescription:
    "Showcase your innovations, products, and solutions to founders, institutional leaders, and conscious investors.",
  stallsNote:
    "Sixty open-air stalls at Bharat Nivas, Auroville, on 5 and 6 December. Auroville enterprises, startups and corporates pay the same rate. Rates exclusive of GST.",
  stalls: [
    {
      id: "standard-stall",
      name: "Standard Stall",
      dimensions: "3m × 3m",
      badge: "Premier Booth",
      isPopular: true,
      price: "₹30,000",
      period: "Both Days (5 & 6 Dec)",
      description:
        "Structure, table, seating, power point, 2 exhibitor passes.",
      features: [
        { included: true, text: "Full covered structure (3m × 3m)" },
        { included: true, text: "Display table and seating setup" },
        { included: true, text: "Dedicated power point connection" },
        { included: true, text: "2 Exhibitor passes included" },
        { included: true, text: "Official directory & showcase listing" },
      ],
      ctaText: "Reserve Standard Stall",
      ctaHref: REGISTRATION_URL,
    },
    {
      id: "compact-stall",
      name: "Compact Stall",
      dimensions: "3m × 2m",
      badge: "Optimized Space",
      price: "₹20,000",
      period: "Both Days (5 & 6 Dec)",
      description:
        "Structure, table, seating, power point, 2 exhibitor passes.",
      features: [
        { included: true, text: "Covered structure (3m × 2m)" },
        { included: true, text: "Display table and seating setup" },
        { included: true, text: "Dedicated power point connection" },
        { included: true, text: "2 Exhibitor passes included" },
        { included: true, text: "Full exhibition visibility across 2 days" },
      ],
      ctaText: "Reserve Compact Stall",
      ctaHref: REGISTRATION_URL,
    },
    {
      id: "startup-desk",
      name: "Startup Desk",
      dimensions: "Desk + 2 Seats",
      badge: "Early-Stage Startups",
      price: "₹8,000",
      period: "Both Days (5 & 6 Dec)",
      description: "Desk with two seats.",
      features: [
        { included: true, text: "Dedicated exhibition desk" },
        { included: true, text: "Two seats for founder team" },
        { included: true, text: "Direct attendee & investor interaction" },
        { included: true, text: "Product demonstration setup" },
        { included: true, text: "Access across both showcase days" },
      ],
      ctaText: "Reserve Startup Desk",
      ctaHref: REGISTRATION_URL,
    },
  ],
};
