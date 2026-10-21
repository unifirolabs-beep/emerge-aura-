export interface AgendaItem {
  id: string;
  tag: string;
  description: string;
  iconName: string;
}

export interface DayAgenda {
  dayNumber: string;
  dayLabel: string;
  date: string;
  title: string;
  location: string;
  theme: string;
  image: string;
  alt: string;
  accentColor: string; // for subtle badge & glow accent
  items: AgendaItem[];
}

export const conclaveJourneyData = {
  eyebrow: "THE CONCLAVE JOURNEY",
  heading: {
    prefix: "Three Days. ",
    highlight: "One Purpose.",
  },
  description:
    "A journey from immersion to collaboration to committed action — bringing together founders, investors, institutions and student innovators in Auroville.",
  days: [
    {
      dayNumber: "1",
      dayLabel: "Day 1",
      date: "Wed 28 Oct",
      title: "SUBMERGE",
      location: "Pondicherry University",
      theme: "grounding and immersion before the deal-making days begin.",
      image: "/images/agenda/agenda-day1-submerge.jpg",
      alt: "Day 1 Submerge — Deep ocean immersion with sunbeams and manta ray",
      accentColor: "#2A7B9B",
      items: [
        {
          id: "d1-1",
          tag: "Ceremony",
          description: "Official inauguration, Vice-Chancellor and chief guest",
          iconName: "Landmark",
        },
        {
          id: "d1-2",
          tag: "Keynote",
          description: "Conscious Capital thesis",
          iconName: "Lightbulb",
        },
        {
          id: "d1-3",
          tag: "Young innovators",
          description:
            "School Science Model Competition: student models from schools in and around Puducherry, judged at the desk",
          iconName: "GraduationCap",
        },
        {
          id: "d1-4",
          tag: "Academia",
          description: "IPR & research commercialisation showcase — PU, IITM, NIT, NITP, JIPMER",
          iconName: "Building2",
        },
        {
          id: "d1-5",
          tag: "Competition",
          description: "EMERGE for Good Innovation Challenge. Single round of team pitches to jury panels. Top 3 teams present at the Conclave on 5–6 Dec",
          iconName: "Trophy",
        },
        {
          id: "d1-6",
          tag: "Recognition",
          description: "Awards for both competitions",
          iconName: "Sparkles",
        },
        {
          id: "d1-7",
          tag: "Networking",
          description:
            "Student-founder interactions; closed investor & partner dinner in Puducherry",
          iconName: "Users",
        },
      ],
    },
    {
      dayNumber: "2",
      dayLabel: "Day 2",
      date: "Sat 5 Dec",
      title: "MERGE",
      location: "Bharat Nivas, Auroville",
      theme: "co-creation and deal flow.",
      image: "/images/agenda/agenda-day2-merge.jpg",
      alt: "Day 2 Merge — Matrimandir sphere of Auroville in lush tropical canopy",
      accentColor: "#4B6B4E",
      items: [
        {
          id: "d2-1",
          tag: "Ritual",
          description: "Dawn walk",
          iconName: "Sunrise",
        },
        {
          id: "d2-2",
          tag: "Showcase",
          description:
            "Startup showcase opens — 40 startups, Auroville enterprise, sponsors, institutional partners",
          iconName: "Presentation",
        },
        {
          id: "d2-3",
          tag: "Deal-flow",
          description: "Deal lounge + pre-scheduled investor 1:1s",
          iconName: "Handshake",
        },
        {
          id: "d2-4",
          tag: "Learning",
          description: "Founder masterclasses — fundraising, GTM, impact, ESG",
          iconName: "BookOpen",
        },
        {
          id: "d2-5",
          tag: "Stage",
          description: "Startup pitches batch 1 with live investor reactions",
          iconName: "Mic2",
        },
        {
          id: "d2-6",
          tag: "Immersion",
          description:
            "Auroville enterprise tours",
          iconName: "Compass",
        },
        {
          id: "d2-7",
          tag: "Dialogue",
          description: "Sector roundtables — climate, agri, health, conscious commerce",
          iconName: "MessageCircle",
        },
        {
          id: "d2-8",
          tag: "Culture",
          description: "Art, live sets, film, farmers' market and cultural evening",
          iconName: "Music",
        },
      ],
    },
    {
      dayNumber: "3",
      dayLabel: "Day 3",
      date: "Sun 6 Dec",
      title: "EMERGE",
      location: "Bharat Nivas, Auroville",
      theme: "commitments and close.",
      image: "/images/agenda/agenda-day3-emerge.jpg",
      alt: "Day 3 Emerge — Auroville amphitheater bathed in sunrise golden light",
      accentColor: "#A65B32",
      items: [
        {
          id: "d3-1",
          tag: "Ritual",
          description: "Dawn practice / yoga",
          iconName: "Sun",
        },
        {
          id: "d3-2",
          tag: "Capital access",
          description: "RDI Fund orientations + TDB application clinic (ANRF / DST / TDB officials)",
          iconName: "Coins",
        },
        {
          id: "d3-3",
          tag: "Deal-flow",
          description: "Final showcase day, Deal Lounge, due-diligence clinics",
          iconName: "TrendingUp",
        },
        {
          id: "d3-4",
          tag: "Policy",
          description:
            "Puducherry as a Conscious Innovation Zone — U.T. govt, IFU, DEFS, AVIF = position paper tabled",
          iconName: "FileText",
        },
        {
          id: "d3-5",
          tag: "Wellbeing",
          description: "Auroville builders in dialogue with founders under 35",
          iconName: "HeartHandshake",
        },
        {
          id: "d3-6",
          tag: "Stage",
          description: "Startup pitches batch 2",
          iconName: "Mic2",
        },
        {
          id: "d3-7",
          tag: "Commitments",
          description: "LOI & MoU signing with government witness",
          iconName: "Award",
        },
        {
          id: "d3-8",
          tag: "Close",
          description:
            "Closing keynote, documented totals, multicultural send-off, Year 2 intent",
          iconName: "CheckCircle2",
        },
      ],
    },
  ] as DayAgenda[],
};
