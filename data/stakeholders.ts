export interface StakeholderItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  iconType: "startups" | "industries" | "investors" | "students" | "policy" | "media";
}

export const stakeholdersData: StakeholderItem[] = [
  {
    id: "startups",
    number: "01",
    title: "Startups",
    description: "Find capital, customers, mentors and partners.",
    image: "/images/stakeholders/stakeholder-01-startups.jpg",
    alt: "Sustainable startup rocket emerging from fertile organic soil",
    iconType: "startups",
  },
  {
    id: "industries",
    number: "02",
    title: "Industries",
    description: "Discover the next generation of ideas and businesses.",
    image: "/images/stakeholders/stakeholder-02-industries.jpg",
    alt: "Sustainable timber architecture and ecological industrial innovation",
    iconType: "industries",
  },
  {
    id: "investors",
    number: "03",
    title: "Investors",
    description: "Find startups that combine purpose with potential.",
    image: "/images/stakeholders/stakeholder-03-investors.jpg",
    alt: "Nurturing hands holding thriving sapling representing conscious capital",
    iconType: "investors",
  },
  {
    id: "students",
    number: "04",
    title: "Students",
    description: "Solve real problems. Build something that matters.",
    image: "/images/stakeholders/stakeholder-04-students.jpg",
    alt: "Young students conversing outdoors with Auroville Matrimandir sphere in view",
    iconType: "students",
  },
  {
    id: "policy-makers",
    number: "05",
    title: "Policy Makers",
    description: "Shape the policy architecture conscious capital needs.",
    image: "/images/stakeholders/stakeholder-05-policy.jpg",
    alt: "Classical architectural dome representing policy architecture and governance",
    iconType: "policy",
  },
  {
    id: "media",
    number: "06",
    title: "MEDIA",
    description: "Amplify the purpose-driven narratives conscious capital needs.",
    image: "/images/stakeholders/stakeholder-06-media.jpg",
    alt: "Professional broadcast camera capturing outdoor conclave dialogue",
    iconType: "media",
  },
];
