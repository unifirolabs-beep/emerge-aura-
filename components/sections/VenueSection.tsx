"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Sparkles,
} from "lucide-react";
import { venuesData } from "@/data/venues";

export default function VenueSection() {
  const [selectedVenueId, setSelectedVenueId] = useState("bharat-nivas");
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeVenue =
    venuesData.find((v) => v.id === selectedVenueId) || venuesData[0];

  const handleCopyAddress = () => {
    const fullText = `${activeVenue.name}, ${activeVenue.addressLines.join(
      ", "
    )}, ${activeVenue.country}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="venue"
      aria-label="Conclave Venue & Location"
      className="relative w-full bg-[#F5CB62] text-[#063522] py-20 sm:py-28 lg:py-32 overflow-hidden select-none"
    >
      {/* Subtle Ambient Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg
          className="absolute -top-12 -right-12 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="#063522"
            strokeWidth="1"
            strokeDasharray="6 8"
            opacity="0.15"
          />
          <circle
            cx="300"
            cy="300"
            r="190"
            stroke="#063522"
            strokeWidth="1"
            opacity="0.1"
          />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-[500px] h-[500px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M 50,450 C 150,300 350,350 450,150"
            stroke="#063522"
            strokeWidth="1.2"
            opacity="0.12"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            1. SECTION HEADER
            ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#063522]/30" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#063522]/80 uppercase">
              LOCATION & ACCESS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-editorial text-[44px] sm:text-[54px] lg:text-[62px] font-bold text-[#063522] leading-tight tracking-tight mb-2">
            Venue
          </h2>

          {/* Subheading */}
          <p className="font-sans text-[16px] sm:text-[18px] text-[#063522]/85 font-normal leading-relaxed">
            Our location and how you can get here
          </p>

          {/* Venue Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {venuesData.map((venue) => {
              const isSelected = venue.id === selectedVenueId;
              return (
                <button
                  key={venue.id}
                  onClick={() => setSelectedVenueId(venue.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    isSelected
                      ? "bg-[#063522] text-[#F5CB62] shadow-md scale-100"
                      : "bg-[#063522]/10 hover:bg-[#063522]/20 text-[#063522] backdrop-blur-sm"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {venue.name} ({venue.days})
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================
            2. VENUE MAIN CARD (Split Layout: Photo & Address | Map)
            ======================================================== */}
        <motion.div
          key={activeVenue.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(6,53,34,0.12)] border border-white/60 flex flex-col lg:flex-row items-stretch"
        >
          {/* LEFT COLUMN: Venue Photo & Address Details */}
          <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EBE4D3] bg-[#FCFAF6]">
            {/* Venue Image */}
            <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden group">
              <Image
                src={activeVenue.image}
                alt={activeVenue.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Floating Days Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#063522]/90 backdrop-blur-md text-[#F5CB62] text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                <Calendar className="w-3 h-3" />
                <span>
                  {activeVenue.days} • {activeVenue.dates}
                </span>
              </div>

              {/* Conclave Role Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] uppercase tracking-widest text-white/90 font-medium font-sans">
                  {activeVenue.badge}
                </span>
              </div>
            </div>

            {/* Address Content Block */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8C733E] uppercase font-sans mb-1.5">
                  Address
                </p>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#063522] leading-tight mb-2">
                  {activeVenue.name}
                </h3>

                <div className="text-[14px] sm:text-[15px] font-sans text-[#233F33] leading-relaxed mb-4">
                  {activeVenue.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                  <p className="font-medium text-[#063522]">{activeVenue.country}</p>
                </div>

                {/* Venue Highlights Checklist */}
                <div className="space-y-2 py-3 border-t border-b border-[#EBE4D3]/80 my-4">
                  {activeVenue.highlights.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-[13px] text-[#243E33]/90 font-sans"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#B8932C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Get Directions & Copy Address */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={activeVenue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#063522] hover:bg-[#0A4D32] text-[#F5CB62] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group/btn"
                >
                  <Navigation className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#063522]/20 hover:border-[#063522]/50 bg-white hover:bg-[#F5CB62]/10 text-[#063522] font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span className="text-emerald-700 font-semibold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C733E]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Map Embed with Luxury Overlays */}
          <div className="flex-1 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] bg-[#EBE7DF] overflow-hidden">
            {/* Live Interactive Google Maps Embed */}
            <iframe
              title={`Map of ${activeVenue.name}`}
              src={activeVenue.mapEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[520px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Floating "View Full Map" Pill Badge */}
            <div className="absolute top-4 right-4 z-20">
              <a
                href={activeVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#063522] text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg backdrop-blur-md transition-all duration-300 border border-[#063522]/10 group"
              >
                <span>VIEW FULL MAP</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8C733E]" />
              </a>
            </div>

            {/* Bottom Floating Info Pill: Transport & Plus Code */}
            <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-3.5 shadow-md border border-[#063522]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#233F33]">
                <div className="flex items-center gap-2 pointer-events-auto">
                  <span className="font-semibold text-[#063522]">
                    Plus Code:
                  </span>
                  <span className="font-mono bg-[#063522]/5 px-2 py-0.5 rounded text-[#063522]">
                    {activeVenue.plusCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
