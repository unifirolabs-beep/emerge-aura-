import { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import SponsorsPageSection from "@/components/sections/SponsorsPageSection";
import OrganizerLogosSection from "@/components/sections/OrganizerLogosSection";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description: "Join hands with Emerge Auro and Emerge Mangalore to drive conscious capital. Explore sponsorship opportunities for India's First Conscious Capital Conclave.",
  keywords: ["Sponsors", "Partners", "Emerge Auro", "Emerge Mangalore", "Conscious Capital Conclave", "Invest", "Mangalore startups"],
};

export default function SponsorsPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F2E8] text-[#17352B] overflow-x-hidden selection:bg-[#C89B3C]/30">
      <Navbar />
      <h1 className="sr-only">Emerge Auro and Mangalore Sponsors & Partners</h1>

      <main>
        <SponsorsPageSection />
        <OrganizerLogosSection />
      </main>

      {/* Standard Multi-Column Luxury Footer */}
      <Footer />
    </div>
  );
}
