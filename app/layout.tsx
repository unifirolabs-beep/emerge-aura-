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
  metadataBase: new URL("https://emergeaura.emergestartupfest.com"),
  title: "EMERGE AURA — India's First Conscious Capital Conclave",
  description:
    "India's First Conscious Capital Conclave. Businesses that create value for people, planet and the future. 23–25 October 2026, Pondicherry University & Auroville.",
  keywords: [
    "Emerge Aura",
    "Conscious Capital Conclave",
    "Auroville",
    "Pondicherry University",
    "Impact Investing",
    "Conscious Business",
    "Sustainable Summit",
  ],
  openGraph: {
    title: "EMERGE AURA — India's First Conscious Capital Conclave",
    description:
      "Businesses that create value for people, planet, and the future. Pondicherry University & Auroville.",
    images: [{ url: "/images/hero/emerge-hero-01.webp" }],
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
   