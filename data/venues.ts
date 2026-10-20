export interface VenueItem {
  id: string;
  name: string;
  badge: string;
  days: string;
  dates: string;
  addressTitle: string;
  addressLines: string[];
  plusCode: string;
  country: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  mapEmbedUrl: string;
  googleMapsUrl: string;
  directionsUrl: string;
}

export const venuesData: VenueItem[] = [
  {
    id: "bharat-nivas",
    name: "Bharat Nivas",
    badge: "MAIN CONCLAVE VENUE",
    days: "Days 2 & 3",
    dates: "5–6 December 2026",
    addressTitle: "Bharat Nivas, Auroville",
    addressLines: [
      "2R43+MZX, Auroville",
      "Irumbai, Tamil Nadu - 605101",
    ],
    plusCode: "2R43+MZX",
    country: "India",
    image: "/images/venue/bharat-nivas.jpg",
    imageAlt: "Bharat Nivas Pavilion and Amphitheatre in Auroville, Tamil Nadu",
    description:
      "The Pavilion of India at Auroville, hosting the Conclave deal lounge, startup showcases, masterclasses, and conscious capital summits amidst lush tropical reforestation.",
    highlights: [
      "Pavilion of India, Auroville International Township",
      "Open-air amphitheatre & modern auditorium halls",
      "Complimentary conclave shuttle & dedicated parking",
      "Eco-conscious campus powered by solar energy",
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Bharat+Nivas,+Auroville,+Tamil+Nadu+605101&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bharat+Nivas+Auroville+Tamil+Nadu+605101",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Bharat+Nivas+Auroville+Tamil+Nadu+605101",
  },
  {
    id: "pondicherry-university",
    name: "Pondicherry University",
    badge: "OPENING DAY & EXPO",
    days: "Day 1",
    dates: "28 October 2026",
    addressTitle: "Pondicherry University Campus",
    addressLines: [
      "R.V. Nagar, Kalapet",
      "Puducherry - 605014",
    ],
    plusCode: "4V4Q+59 Kalapet",
    country: "India",
    image: "/images/venue/pondicherry-university.jpg",
    imageAlt: "Pondicherry University 1000-acre lush green campus at Kalapet",
    description:
      "Day 1 opens at the 1,000-acre coastal campus of Pondicherry University, featuring the Innovation Challenge finale, School Science Model Expo, and Academic IPR Commercialisation Showcase.",
    highlights: [
      "1,000-acre Central University campus at Kalapet",
      "J.N. Auditorium & academic innovation complexes",
      "Direct coastal East Coast Road (ECR) access",
      "Research showcases with IIT Madras, NIT & JIPMER",
    ],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Pondicherry+University,+Kalapet,+Puducherry+605014&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pondicherry+University+Kalapet+Puducherry+605014",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Pondicherry+University+Kalapet+Puducherry+605014",
  },
];
