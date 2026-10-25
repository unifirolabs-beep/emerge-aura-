export interface StoryBlock {
  number: string;
  label: string;
  paragraph: string;
}

export interface AboutContentData {
  eyebrow: string;
  mainHeading: {
    line1: string;
    line2: string;
  };
  storyBlocks: StoryBlock[];
  floatingStatement: {
    small: string;
    medium: string;
    largePrefix: string;
    largeAccent: string;
    largeSuffix?: string;
  };
  eventInfo: {
    date: {
      days: string;
      monthYear: string;
    };
    venue: {
      title: string;
      subtitle: string;
    };
    purpose: string;
  };
}

export const aboutData: AboutContentData = {
  eyebrow: "ABOUT",
  mainHeading: {
    line1: "ABOUT",
    line2: "EMERGE AURO",
  },
  storyBlocks: [
    {
      number: "01",
      label: "THE IDEA",
      paragraph:
        "EMERGE AURO is India's first Conscious Capital Conclave — three days that place startup founders at the centre, surround them with serious capital and policy architecture, and ground the whole thing in Auroville's fifty-year practice of human unity and ecological stewardship.",
    },
    {
      number: "02",
      label: "THE CHALLENGE",
      paragraph:
        "The hardest problems on the planet are being worked on right now by founders. Climate breakdown, food insecurity, broken health systems, polluted oceans, fractured communities. EMERGE exists to give those founders what they most lack: capital, connections, and a room where the people holding the cheque book already believe in the premise.",
    },
    {
      number: "03",
      label: "THE EXPERIENCE",
      paragraph:
        "The conclave opens on 28 October at Pondicherry University, setting the stage for high-level engagements before moving to Bharat Nivas, Auroville. Over the following two days, the event will feature a startup showcase, investor deal lounge, founder masterclasses, and dedicated RDI Fund and policy clinics, creating opportunities for collaboration, investment, and innovation-led partnerships.",
    },
    {
      number: "04",
      label: "THE PURPOSE",
      paragraph:
        "Not an expo. Not a pitch competition. A working laboratory of conscious commerce, built to produce commitments that outlast the weekend.",
    },
  ],
  floatingStatement: {
    small: "NOT AN EXPO.",
    medium: "NOT A PITCH COMPETITION.",
    largePrefix: "A WORKING LABORATORY OF ",
    largeAccent: "CONSCIOUS COMMERCE.",
  },
  eventInfo: {
    date: {
      days: "28 Oct, 5–6 Dec",
      monthYear: "2026",
    },
    venue: {
      title: "PONDICHERRY UNIVERSITY",
      subtitle: "& AUROVILLE",
    },
    purpose:
      "Three days bringing founders, investors, institutions and student innovators together to turn conscious capital into commitments.",
  },
};
