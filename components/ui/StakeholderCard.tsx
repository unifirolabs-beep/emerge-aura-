"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { StakeholderItem } from "@/data/stakeholders";

interface StakeholderCardProps {
  stakeholder: StakeholderItem;
  index: number;
}

export default function StakeholderCard({ stakeholder, index }: StakeholderCardProps) {
  // Unique clip-path id for each card
  const clipId = `card-mask-${stakeholder.id}`;

  return (
    <div
      tabIndex={0}
      role="article"
      aria-label={`${stakeholder.title}: ${stakeholder.description}`}
      className="group relative flex flex-row w-full h-[230px] sm:h-[240px] lg:h-[250px] rounded-[20px] lg:rounded-[22px] bg-[#FAF8F2] border border-[#E4DCBC] hover:border-[#C9A15B]/70 overflow-hidden shadow-[0_4px_24px_rgba(20,37,29,0.03)] hover:shadow-[0_16px_40px_rgba(20,37,29,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A15B] cursor-pointer"
    >
      {/* LEFT CONTENT AREA (~54% width) */}
      <div className="relative z-10 flex flex-col justify-between w-[54%] sm:w-[52%] p-5 sm:p-6 lg:p-7 pr-2">
        {/* Top Meta: Number + Arrow Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#C9A15B]">
              {stakeholder.number}
            </span>
            <span className="w-5 sm:w-7 h-[1px] bg-[#C9A15B]/50" />
          </div>

          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D5CBB5] flex items-center justify-center bg-white/70 text-[#10251D] group-hover:border-[#C9A15B] group-hover:bg-[#C9A15B] group-hover:text-white transition-all duration-300 shadow-sm"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Middle Content: Title + Description */}
        <div className="my-auto py-1">
          <h3 className="font-editorial text-[23px] sm:text-[25px] lg:text-[27px] font-medium text-[#10251D] leading-[1.1] tracking-tight group-hover:text-[#0b1f17] transition-colors">
            {stakeholder.title}
          </h3>
          <p className="font-sans text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#4A5850] font-normal leading-snug mt-1.5 max-w-[210px] opacity-90">
            {stakeholder.description}
          </p>
        </div>

        {/* Bottom Line-Art Icon */}
        <div className="pt-1">
          <StakeholderIcon type={stakeholder.iconType} />
        </div>
      </div>

      {/* RIGHT ORGANIC CURVED IMAGE AREA (~46% width) */}
      <div className="relative w-[46%] sm:w-[48%] h-full overflow-hidden">
        {/* SVG Clip Path definition with organic curved left border */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              {/* Organic concave curve sweeping from top to bottom */}
              <path d="M 0.22,0 C 0.04,0.32 0.04,0.68 0.22,1 L 1,1 L 1,0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Masked Image Container */}
        <div
          className="relative w-full h-full will-change-transform"
          style={{ clipPath: `url(#${clipId})` }}
        >
          <Image
            src={stakeholder.image}
            alt={stakeholder.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
            className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />

          {/* Very subtle warm sunlight sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Organic curved accent line bordering the image */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 22,0 C 4,32 4,68 22,100"
            fill="none"
            stroke="#C9A15B"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
        </svg>

      </div>

      {/* Subtle Bottom Gold Highlight Bar on Hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C9A15B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// Custom Elegant Gold Line-Art Icons Matching Reference
function StakeholderIcon({ type }: { type: StakeholderItem["iconType"] }) {
  switch (type) {
    case "startups":
      // Rocket launching from plant sprout
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 3C18.5 6 21 11 20.5 16L23 18.5V21L19 20L16 23L13 20L9 21V18.5L11.5 16C11 11 13.5 6 16 3Z" />
          <path d="M16 11V15" />
          <path d="M12 26C13.5 24 18.5 24 20 26" />
          <path d="M16 23V29" />
          <path d="M7 29C10 27 12 24 13 20" />
          <path d="M25 29C22 27 20 24 19 20" />
        </svg>
      );
    case "industries":
      // Eco industrial building with greenery
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="12" width="10" height="15" rx="1.5" />
          <rect x="15" y="6" width="12" height="21" rx="1.5" />
          <line x1="8" y1="16" x2="12" y2="16" />
          <line x1="8" y1="20" x2="12" y2="20" />
          <line x1="19" y1="10" x2="23" y2="10" />
          <line x1="19" y1="14" x2="23" y2="14" />
          <line x1="19" y1="18" x2="23" y2="18" />
          <path d="M21 6C21 3 24 3 24 3" />
        </svg>
      );
    case "investors":
      // Hands holding sapling / capital seed
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 14C16 10 12 7 9 8C9 11 12 14 16 14Z" />
          <path d="M16 14C16 10 20 7 23 8C23 11 20 14 16 14Z" />
          <path d="M16 14V22" />
          <path d="M7 23C8.5 21.5 12 21 16 23C20 21 23.5 21.5 25 23" />
          <path d="M6 25C8 28 12 28.5 16 28.5C20 28.5 24 28 26 25" />
        </svg>
      );
    case "students":
      // Graduation mortarboard & open book
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 6L4 12L16 18L28 12L16 6Z" />
          <path d="M8 14.5V20.5C8 23 11.5 25 16 25C20.5 25 24 23 24 20.5V14.5" />
          <path d="M28 12.5V22" />
          <circle cx="28" cy="23" r="1" fill="currentColor" />
        </svg>
      );
    case "policy":
      // Classical legislative temple / columns
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12L16 6L27 12H5Z" />
          <line x1="4" y1="26" x2="28" y2="26" />
          <line x1="8" y1="12" x2="8" y2="26" />
          <line x1="13" y1="12" x2="13" y2="26" />
          <line x1="19" y1="12" x2="19" y2="26" />
          <line x1="24" y1="12" x2="24" y2="26" />
        </svg>
      );
    case "media":
      // Broadcasting / Storytelling megaphone
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A15B]"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 13V19H10L16 24V8L10 13H6Z" />
          <path d="M20 11C21.5 12.5 22 14.5 22 16C22 17.5 21.5 19.5 20 21" />
          <path d="M23.5 7.5C26 10 27 13 27 16C27 19 26 22 23.5 24.5" />
          <path d="M10 19V24H13V19" />
        </svg>
      );
    default:
      return null;
  }
}
