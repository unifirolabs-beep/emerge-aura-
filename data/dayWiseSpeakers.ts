export interface PanelSpeaker {
  id: string;
  name: string;
  role: "MODERATOR" | "PANELLIST";
  designation: string;
  img?: string;
  initials?: string;
}

export interface PanelSession {
  id: string;
  day: "dec5" | "dec6";
  dayLabel: string;
  dayDate: string;
  trackName: string;
  trackColor: "merge" | "emerge";
  topic: string;
  speakers: PanelSpeaker[];
}

export const dayWiseSessions: PanelSession[] = [
  // ==========================================
  // SATURDAY 5 DECEMBER · MERGE
  // ==========================================
  {
    id: "session-hydrogen",
    day: "dec5",
    dayLabel: "Saturday 5 December",
    dayDate: "5 December 2026",
    trackName: "Merge",
    trackColor: "merge",
    topic: "Hydrogen: Fuel of the Future",
    speakers: [
      {
        id: "karunanidhi-kasinathan",
        name: "Karunanidhi Kasinathan",
        role: "MODERATOR",
        designation: "Founder & Chairman, KCCS India Pvt. Ltd.",
        img: "/images/speakers/5th dec speakers/Karunanidhi Kasinathan.png",
      },
      {
        id: "dr-r-velraj",
        name: "Dr. R. Velraj",
        role: "PANELLIST",
        designation: "Vice Chancellor, Anna University",
        img: "/images/speakers/5th dec speakers/Dr. R. Velraj.png",
      },
      {
        id: "dr-balasubramanian-vengatesan",
        name: "Dr. Balasubramanian Vengatesan",
        role: "PANELLIST",
        designation: "Global Advisor – Energy, Pharma & Education, K-KCCS India Pvt. Ltd",
        img: "/images/speakers/5th dec speakers/Dr. Balasubramanian Vengatesan.png",
      },
      {
        id: "dr-gurumoorthy-chandrasekharan",
        name: "Dr. Gurumoorthy Chandrasekharan",
        role: "PANELLIST",
        designation: "Chief Technology Officer (CTO), H₂ Innovation India",
        img: "/images/speakers/5th dec speakers/Dr. Gurumoorthy Chandrasekharan.png",
      },
    ],
  },
  {
    id: "session-bharatiya-wisdom",
    day: "dec5",
    dayLabel: "Saturday 5 December",
    dayDate: "5 December 2026",
    trackName: "Merge",
    trackColor: "merge",
    topic: "Bharatiya Wisdom for Startups",
    speakers: [
      {
        id: "dr-sai-giridhar",
        name: "Dr. Sai Giridhar",
        role: "MODERATOR",
        designation: "Chief Values Officer, SKM Organics; Values Coach",
        img: "/images/speakers/5th dec speakers/Dr. Sai Giridhar.png",
      },
      {
        id: "prof-vinay-pandurang-kulkarni",
        name: "Prof. Vinay Pandurang Kulkarni",
        role: "PANELLIST",
        designation:
          "Founder & CEO, ALCHMI; Adjunct Faculty, RV Institute of Management; Founder, IKS Conclaves and Upadesha Academy",
        img: "/images/speakers/5th dec speakers/Prof. Vinay Pandurang Kulkarni.png",
      },
      {
        id: "arun-janarthanan",
        name: "Arun Janarthanan",
        role: "PANELLIST",
        designation: "Panellist & Ecosystem Leader",
        img: "/images/speakers/5th dec speakers/Arun Janarthanan.png",
      },
    ],
  },
  {
    id: "session-cultural-enterprises",
    day: "dec5",
    dayLabel: "Saturday 5 December",
    dayDate: "5 December 2026",
    trackName: "Merge",
    trackColor: "merge",
    topic: "Enabling Investments in Cultural Enterprises",
    speakers: [
      {
        id: "nice-network",
        name: "NICE",
        role: "MODERATOR",
        designation: "Network of Indian Cultural Enterprises",
        img: "/images/speakers/5th dec speakers/nice.png",
      },
      {
        id: "sriram-shankaran",
        name: "Sriram Shankaran",
        role: "PANELLIST",
        designation: "Native Lead Foundation",
        img: "/images/speakers/5th dec speakers/Sriram Shankaran.png",
      },
      {
        id: "chandu-nair",
        name: "Chandu Nair",
        role: "PANELLIST",
        designation: "Chennai Angels",
        img: "/images/speakers/5th dec speakers/Chandu Nair.png",
      },
      {
        id: "prof-thillai-rajan-a",
        name: "Prof. Thillai Rajan A",
        role: "PANELLIST",
        designation:
          "Professor, Department of Management Studies, IIT Madras; Founder, YNOS Venture Engine",
        img: "/images/speakers/5th dec speakers/Prof. Thillai Rajan A.png",
      },
      {
        id: "charanya-chittam",
        name: "Charanya",
        role: "PANELLIST",
        designation:
          "Founder, Chittam – a games startup rooted in Indian stories and values",
        img: "/images/speakers/5th dec speakers/charanya-chittam.png",
      },
      {
        id: "entrepreneur-auroville",
        name: "Entrepreneur, Auroville",
        role: "PANELLIST",
        designation: "Auroville Conscious Enterprise Innovator",
        initials: "AV",
      },
    ],
  },

  // ==========================================
  // SUNDAY 6 DECEMBER · EMERGE
  // ==========================================
  {
    id: "session-incubators",
    day: "dec6",
    dayLabel: "Sunday 6 December",
    dayDate: "6 December 2026",
    trackName: "Emerge",
    trackColor: "emerge",
    topic: "Incubators are the factories for conscious businesses",
    speakers: [
      {
        id: "prof-pallav-baruah",
        name: "Prof. Pallav Baruah",
        role: "MODERATOR",
        designation:
          "Professor, Sri Sathya Sai Institute of Higher Learning (SSSIHL)",
        img: "/images/speakers/6th december/Prof. Pallav Baruah.png",
      },
      {
        id: "dr-c-chandramouli",
        name: "Dr. C. Chandramouli",
        role: "PANELLIST",
        designation:
          "CEO, Atal Incubation Centre, Sri Krishnadevaraya University (AIC-SKU), Anantapur",
        img: "/images/speakers/6th december/Dr. C. Chandramouli.png",
      },
      {
        id: "mohammad-azhar",
        name: "Mohammad Azhar",
        role: "PANELLIST",
        designation: "Practice Lead, Entrepreneurship, TechnoServe",
        img: "/images/speakers/6th december/Mohammad Azhar.png",
      },
      {
        id: "periasamy-s",
        name: "Periasamy S",
        role: "PANELLIST",
        designation:
          "Advisor, AIC-NIFT TEA Incubation Centre for Textiles and Apparels, Tiruppur",
        img: "/images/speakers/6th december/Periasamy S.png",
      },
      {
        id: "shalabh-mittal",
        name: "Shalabh Mittal",
        role: "PANELLIST",
        designation: "CEO, School for Social Entrepreneurs India (SSE India)",
        img: "/images/speakers/6th december/Shalabh Mittal.png",
      },
    ],
  },
  {
    id: "session-government-enabler",
    day: "dec6",
    dayLabel: "Sunday 6 December",
    dayDate: "6 December 2026",
    trackName: "Emerge",
    trackColor: "emerge",
    topic:
      "Government as an enabler: insights from the past for the future of Puducherry's innovation landscape",
    speakers: [
      {
        id: "dr-saravanan-sundaramoorthy",
        name: "Dr. Saravanan Sundaramoorthy",
        role: "MODERATOR",
        designation: "Convenor, FICCI Puducherry; Founder, Skill Angels",
        img: "/images/speakers/6th december/Dr. Saravanan Sundaramoorthy.png",
      },
      {
        id: "dr-mohammad-adil",
        name: "Dr. Mohammad Adil",
        role: "PANELLIST",
        designation: "Managing Director, Bangalore Bioinnovation Centre",
        img: "/images/speakers/6th december/Dr. Mohammad Adil.png",
      },
      {
        id: "b-shaheena",
        name: "B Shaheena",
        role: "PANELLIST",
        designation:
          "Programme Specialist, Office of the Principal Scientific Adviser (PSA), Government of India",
        img: "/images/speakers/6th december/B Shaheena.png",
      },
    ],
  },
];
