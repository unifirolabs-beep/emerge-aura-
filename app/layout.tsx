import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import FloatingBrochureButton from "@/components/ui/FloatingBrochureButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emergeauro.org"),
  title: {
    default: "EMERGE AURO — India's First Conscious Capital Conclave",
    template: "%s | EMERGE AURO"
  },
  description:
    "India's First Conscious Capital Conclave in Auroville and Pondicherry University. We bring together impact investing, conscious business, and startup ecosystems. Join us in Mangalore, Auroville, and beyond for sustainable value creation.",
  keywords: [
    "Emerge Auro",
    "Emerge Mangalore",
    "Conscious Capital Conclave",
    "Auroville",
    "Mangalore startups",
    "Pondicherry University",
    "Impact Investing",
    "Conscious Business",
    "Sustainable Summit",
    "Venture Capital",
    "Founders",
    "India startups",
  ],
  authors: [{ name: "Emerge Aura Team" }],
  creator: "Emerge Aura",
  publisher: "Emerge Aura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://emergeauro.org",
    siteName: "EMERGE AURO",
    title: "EMERGE AURO — Conscious Capital Conclave",
    description:
      "Join India's First Conscious Capital Conclave. Businesses that create value for people, planet, and the future. From Emerge Mangalore to Auroville.",
    images: [
      {
        url: "/images/hero/emerge-hero-01.webp",
        width: 1200,
        height: 630,
        alt: "EMERGE AURO - India's First Conscious Capital Conclave",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMERGE AURO — Conscious Capital Conclave",
    description:
      "Join India's First Conscious Capital Conclave. Businesses that create value for people, planet, and the future. From Emerge Mangalore to Auroville.",
    images: ["/images/hero/emerge-hero-01.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070e0b] text-[#f4efe6] font-sans selection:bg-[#c5a880]/30 selection:text-[#f4efe6] overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingBrochureButton />
      </body>
    </html>
  );
}
   