export interface SponsorTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  badgeBg: string;
  badgeText: string;
  headerBg: string;
  headerText: string;
  iconName: "leaf" | "plant" | "users" | "diamond";
  isFeatured?: boolean;
}

export interface SponsorFeatureRow {
  id: string;
  feature: string;
  enabling: string | boolean;
  impact: string | boolean;
  catalyst: string | boolean;
  founding: string | boolean;
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "enabling",
    name: "ENABLING PARTNER",
    subtitle: "Entry-level institutional backing",
    price: "₹300,000.00",
    badgeBg: "bg-[#E2EDE6]",
    badgeText: "text-[#285A44]",
    headerBg: "bg-[#E4ECE6]",
    headerText: "text-[#1C4A36]",
    iconName: "leaf",
  },
  {
    id: "impact",
    name: "IMPACT PARTNER",
    subtitle: "High-visibility impact alignment",
    price: "₹750,000.00",
    badgeBg: "bg-[#F7EEDB]",
    badgeText: "text-[#8C6D23]",
    headerBg: "bg-[#F7EEDB]",
    headerText: "text-[#8C6D23]",
    iconName: "plant",
  },
  {
    id: "catalyst",
    name: "CATALYST PARTNER",
    subtitle: "Ecosystem driver & thought leader",
    price: "₹1,500,000.00",
    badgeBg: "bg-[#F5E5DC]",
    badgeText: "text-[#7A4B36]",
    headerBg: "bg-[#F5E5DC]",
    headerText: "text-[#6E3F2A]",
    iconName: "users",
  },
  {
    id: "founding",
    name: "FOUNDING PARTNER",
    subtitle: "Premier patron & headline co-creator",
    price: "₹2,500,000.00",
    badgeBg: "bg-[#073B2A]",
    badgeText: "text-[#EADBCA]",
    headerBg: "bg-[#073B2A]",
    headerText: "text-[#FFFFFF]",
    iconName: "diamond",
    isFeatured: true,
  },
];

export const sponsorFeatureRows: SponsorFeatureRow[] = [
  {
    id: "f1",
    feature: "Logo on the event website and mainstage partner wall",
    enabling: "Grouped",
    impact: "Standard",
    catalyst: "Large",
    founding: "Largest",
  },
  {
    id: "f2",
    feature: "Logo on delegate badges and lanyards",
    enabling: false,
    impact: false,
    catalyst: false,
    founding: true,
  },
  {
    id: "f3",
    feature: "Dedicated social media features",
    enabling: "1 post",
    impact: "2 posts",
    catalyst: "4 posts",
    founding: "6 posts",
  },
  {
    id: "f4",
    feature: "Branded on-site zone or pavilion",
    enabling: false,
    impact: "Shared Footprint",
    catalyst: "Standard Footprint",
    founding: "Premium Footprint",
  },
  {
    id: "f5",
    feature: "Main stage keynote or fireside",
    enabling: false,
    impact: false,
    catalyst: false,
    founding: "20 Mins Main Stage Keynote",
  },
  {
    id: "f6",
    feature: "Seat at the closed Leadership Roundtable",
    enabling: false,
    impact: false,
    catalyst: true,
    founding: true,
  },
  {
    id: "f7",
    feature: "Jury seat — Innovation Challenge",
    enabling: true,
    impact: true,
    catalyst: true,
    founding: true,
  },
  {
    id: "f8",
    feature: "Quoted in the official press release",
    enabling: false,
    impact: false,
    catalyst: true,
    founding: true,
  },
  {
    id: "f9",
    feature: "Startup Showcase floor access",
    enabling: true,
    impact: true,
    catalyst: true,
    founding: true,
  },
  // {
  //   id: "f10",
  //   feature: "Free Passes to Auroville Workshops",
  //   enabling: "2",
  //   impact: "3",
  //   catalyst: "4",
  //   founding: "6",
  // },
  // {
  //   id: "f11",
  //   feature: "Auroville enterprise immersion tour",
  //   enabling: true,
  //   impact: true,
  //   catalyst: true,
  //   founding: true,
  // },
  {
    id: "f12",
    feature: "Complimentary passes",
    enabling: "2",
    impact: "3",
    catalyst: "5",
    founding: "6",
  },
  {
    id: "f13",
    feature: "Reserved seating, main stage",
    enabling: "Reserved Block",
    impact: "Reserved Block",
    catalyst: "Front row",
    founding: "Front row",
  },
  {
    id: "f14",
    feature: "Networking dinner, Day 2 and Day3",
    enabling: true,
    impact: true,
    catalyst: true,
    founding: true,
  },
  {
    id: "f15",
    feature: "Photography and video library, cleared for your use",
    enabling: true,
    impact: true,
    catalyst: true,
    founding: true,
  },
];
