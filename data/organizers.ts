export interface OrganizerItem {
  id: string;
  number: string;
  name: string;
  logo: string;
  logoAlt: string;
  url: string;
  buttonText?: string;
  paragraphs: string[];
}

export const organizersData: OrganizerItem[] = [
  {
    id: "section-infin8",
    number: "01",
    name: "Section Infin8 Foundation",
    logo: "/organizerslogos/Section Infin8 Foundation.png",
    logoAlt: "Section Infin8 Foundation Logo",
    url: "https://www.sectioninfin8.org/",
    buttonText: "Visit Website",
    paragraphs: [
      "Section Infin-8 Foundation is the architect of the EMERGE format and its execution lead. A Section 8 not-for-profit based in Mangaluru, SI-8 works to turn Tier-2 and Tier-3 regions into innovation hubs, building on a People, Planet, Prosperity thesis.",
      "EMERGE AURO is the fourth edition of a format SI-8 has already proven. The first, in 2024, was India's first beachside startup festival and drew over 100 startups. The third, in January 2026, was held under the guidance of the Office of the Principal Scientific Advisor to the Government of India, with Director of Strategic Alliance Dr Sapna Poti in attendance, and carried Allcargo Logistics as title sponsor.",
      "Its Silicon Beach Shark Tank drew 120+ applications from across India, with investors travelling from Bengaluru, Hyderabad and Gurugram to hear thirteen startups pitch. SI-8's institutional work runs alongside the festivals: Mission UTTHAN was launched at EMERGE 2025 with the Office of the PSA, and an MoU with CREDAI Mangalore established an Innovation and Incubation Facility focused on green building, ESG frameworks and carbon credit systems.",
    ],
  },
  {
    id: "first-world-community",
    number: "02",
    name: "First World Community",
    logo: "/organizerslogos/First World Community.png",
    logoAlt: "First World Community Logo",
    url: "https://www.firstworldcommunity.org/",
    buttonText: "Visit Website",
    paragraphs: [
      "First World Community is a global business network with chapters across eight countries, from Singapore and Malaysia to Canada, Qatar, Austria, Japan, South Africa and the United States. Founded and chaired by Dr. CK Ashok Kumar, FWC connects entrepreneurs to mentors, capital and visibility, built on the conviction that business aligned to a deeper purpose creates better outcomes for everyone it touches. For EMERGE AURO, FWC serves as on-ground execution lead and Puducherry implementation partner — bringing its network to the conclave floor and carrying operational responsibility across both venues, from government liaison and permits through delegate hospitality, logistics and registration.",
    ],
  },
  {
    id: "auroville-foundation",
    number: "03",
    name: "Auroville Foundation",
    logo: "/organizerslogos/Auroville Foundation.png",
    logoAlt: "Auroville Foundation Logo",
    url: "https://www.auroville.org/",
    buttonText: "Visit Website",
    paragraphs: [
      "Auroville Foundation is the statutory body governing Auroville, constituted under the Auroville Foundation Act, 1988, and operating as an autonomous body under the Government of India. Auroville itself was founded in 1968 as an international township dedicated to human unity, and has been endorsed by UNESCO in successive General Conference resolutions. It spans roughly 20 square kilometres of once-desertified plateau that its residents reforested, and is home to a community drawn from more than fifty countries. Its enterprises are not a side project: they employ thousands of people from surrounding villages and return a third of their profits to a common fund — a fifty-year working experiment in commerce organised around something other than shareholder return, which is precisely the thesis EMERGE AURO exists to test. For the conclave, the Foundation provides venue access across Bharat Nivas and the Matrimandir, curates the cultural and community programme, facilitates the participation of Auroville enterprises, and holds stewardship over values alignment and sustainability across everything held on Auroville premises.",
    ],
  },
  {
    id: "pondicherry-university",
    number: "04",
    name: "Pondicherry University",
    logo: "/organizerslogos/Pondicherry University.png",
    logoAlt: "Pondicherry University Logo",
    url: "https://www.pondiuni.edu.in/",
    buttonText: "Visit Website",
    paragraphs: [
      "Pondicherry University hosts Day 1 of EMERGE AURO. Established by an Act of Parliament in 1985 and funded through the Ministry of Education, it is a central university spanning a 1,000-acre campus at Kalapet with 14 schools and 52 departments across its Puducherry and Karaikal campuses, and more than 100 affiliated colleges across the union territories it serves.",
      "The university opens the conclave with the Innovation Challenge finale, the School Science Model Expo, and an academic IPR and research commercialisation showcase drawing in IIT Madras, NIT Puducherry and JIPMER — putting the region's research base directly in front of the investors and corporates who make up the rest of the weekend.",
    ],
  },
  {
    id: "utthan",
    number: "05",
    name: "UTTHAN",
    logo: "/organizerslogos/UTTHAN.png",
    logoAlt: "UTTHAN Logo",
    url: "https://emergeauro26.zohobackstage.in/EmergeAuro",
    buttonText: "Visit Website",
    paragraphs: [
      "Upscaling Tier 2 and 3 Colleges for the Holistic Advancement of Nation — is a national programme with the Office of the Principal Scientific Advisor to the Government of India, closing the research and innovation gap at the colleges where most of India studies: R&D partnerships and IPR support on one pillar, physical innovation hubs and incubation on the other, with a nationwide institutional research-maturity assessment routing each college to its own roadmap.",
    ],
  },
  {
    id: "dpurpose-foundation",
    number: "06",
    name: "DPurpose Foundation",
    logo: "/organizerslogos/D Purpose.png",
    logoAlt: "DPurpose Foundation Logo",
    url: "https://www.dpurposefoundation.com/",
    buttonText: "Visit Website",
    paragraphs: [
      "DPurpose exists because talent in India is distributed evenly and opportunity is not. It was founded after its founder met two students in Salem who had designed an affordable water purifier but couldn't raise ₹5,000 to build it.",
      "Since then the Foundation has built a full pipeline for young innovators outside the metros: Hack4Purpose, its national hackathon; Skill4Purpose, women's workforce training; and DPurpose Labs, which takes prototypes toward manufacture. Its focus is deliberate — Tier 2, 3 and 4 cities, student and women-led teams, and problem statements drawn from real MSME sectors rather than abstract themes.",
      "At EMERGE AURO, DPurpose brings that method to Puducherry.",
    ],
  },
  {
    id: "village-technology-school",
    number: "07",
    name: "Village Technology School",
    logo: "/organizerslogos/Village Technology School.png",
    logoAlt: "Village Technology School Logo",
    url: "https://www.villagetechnologyschool.com/",
    buttonText: "Visit Website",
    paragraphs: [
      "Village Technology School (VTS) is a Chennai-based STEM education company run by Yumitu Robotics Pvt Ltd. It was founded in 2021 by Balaji Thiru (Founder & CEO) and Balaji Varadhan (Co-Founder & COO). It works to bring good STEM education to schools across India, from cities to remote villages.",
      "VTS sets up Atal Tinkering and innovation labs in schools. It runs training in robotics, IoT, drones, aeromodelling and coding (Python, C++, Arduino), and offers internships. It also designs its own learning kits and humanoid robots, NilaBot and LilliBot.",
    ],
  },
];
