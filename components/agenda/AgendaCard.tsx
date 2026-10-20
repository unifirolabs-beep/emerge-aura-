"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Calendar,
  ChevronDown,
  Landmark,
  Lightbulb,
  GraduationCap,
  Building2,
  Trophy,
  Sparkles,
  Users,
  Sunrise,
  Presentation,
  Handshake,
  BookOpen,
  Mic2,
  Compass,
  MessageCircle,
  Music,
  Sun,
  Coins,
  TrendingUp,
  FileText,
  HeartHandshake,
  Award,
  CheckCircle2,
} from "lucide-react";
import type { DayAgenda } from "@/data/agenda";

// Icon mapping helper
function renderAgendaIcon(iconName: string) {
  const props = { className: "w-3.5 h-3.5 text-[#10251D]" };
  switch (iconName) {
    case "Landmark":
      return <Landmark {...props} />;
    case "Lightbulb":
      return <Lightbulb {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Trophy":
      return <Trophy {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Users":
      return <Users {...props} />;
    case "Sunrise":
      return <Sunrise {...props} />;
    case "Presentation":
      return <Presentation {...props} />;
    case "Handshake":
      return <Handshake {...props} />;
    case "BookOpen":
      return <BookOpen {...props} />;
    case "Mic2":
      return <Mic2 {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "MessageCircle":
      return <MessageCircle {...props} />;
    case "Music":
      return <Music {...props} />;
    case "Sun":
      return <Sun {...props} />;
    case "Coins":
      return <Coins {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "FileText":
      return <FileText {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    case "Award":
      return <Award {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

// Color theme tokens per day (as requested in Section 24: Submerge blue accent, Merge natural green/gold, Emerge terracotta/warm gold)
const dayThemes: Record<string, {
  pillBg: string;
  pillBorder: string;
  pillText: string;
  pillDot: string;
  titleColor: string;
  locationColor: string;
  mapPinColor: string;
  cardBorder: string;
  cardHoverShadow: string;
  iconBg: string;
  iconColor: string;
  iconHoverBg: string;
  hoverBar: string;
}> = {
  "1": {
    pillBg: "bg-white/90",
    pillBorder: "border-[#1D5E7A]/20",
    pillText: "text-[#103E50]",
    pillDot: "text-[#1D5E7A]",
    titleColor: "text-[#0F3746]",
    locationColor: "text-[#285A6F]",
    mapPinColor: "text-[#1D5E7A]",
    cardBorder: "border-[#1D5E7A]/25",
    cardHoverShadow: "hover:shadow-[0_28px_65px_rgba(29,94,122,0.25)]",
    iconBg: "bg-[#1D5E7A]/10",
    iconColor: "text-[#1D5E7A]",
    iconHoverBg: "group-hover/item:bg-[#1D5E7A]/20",
    hoverBar: "bg-[#1D5E7A]",
  },
  "2": {
    pillBg: "bg-white/90",
    pillBorder: "border-[#4A6436]/20",
    pillText: "text-[#273B1B]",
    pillDot: "text-[#55773C]",
    titleColor: "text-[#1E3015]",
    locationColor: "text-[#4A5D3E]",
    mapPinColor: "text-[#55773C]",
    cardBorder: "border-[#D4AF37]/35",
    cardHoverShadow: "hover:shadow-[0_28px_65px_rgba(212,175,55,0.25)]",
    iconBg: "bg-[#55773C]/10",
    iconColor: "text-[#4A6436]",
    iconHoverBg: "group-hover/item:bg-[#55773C]/20",
    hoverBar: "bg-[#55773C]",
  },
  "3": {
    pillBg: "bg-white/90",
    pillBorder: "border-[#A04D2D]/20",
    pillText: "text-[#6A2B14]",
    pillDot: "text-[#B65633]",
    titleColor: "text-[#4B1E0E]",
    locationColor: "text-[#754432]",
    mapPinColor: "text-[#B65633]",
    cardBorder: "border-[#C97A52]/35",
    cardHoverShadow: "hover:shadow-[0_28px_65px_rgba(182,86,51,0.25)]",
    iconBg: "bg-[#B65633]/10",
    iconColor: "text-[#A04D2D]",
    iconHoverBg: "group-hover/item:bg-[#B65633]/20",
    hoverBar: "bg-[#B65633]",
  },
};

interface AgendaCardProps {
  day: DayAgenda;
  index?: number;
}

export default function AgendaCard({ day }: AgendaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = dayThemes[day.dayNumber] || dayThemes["2"];

  return (
    <article
      tabIndex={0}
      aria-label={`${day.dayLabel} — ${day.title} at ${day.location}`}
      className={`group relative flex flex-col w-full h-auto min-h-[580px] lg:min-h-[600px] rounded-[22px] bg-[#FAF8F2] border ${theme.cardBorder} shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${theme.cardHoverShadow} transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden select-none`}
    >
      {/* ========================================================
          CARD TOP: IMAGE & DAY PILL
          ======================================================== */}
      <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[255px] shrink-0 overflow-hidden bg-black/20">
        <Image
          src={day.image}
          alt={day.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
          className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient to blend smoothly into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F2] via-transparent to-black/30 pointer-events-none" />

        {/* Day Pill Overlay */}
        <div className={`absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.pillBg} backdrop-blur-md border ${theme.pillBorder} shadow-sm`}>
          <Calendar className={`w-3.5 h-3.5 ${theme.pillDot}`} />
          <span className={`font-sans text-xs font-semibold tracking-wider ${theme.pillText}`}>
            {day.dayLabel} · {day.date}
          </span>
        </div>
      </div>

      {/* ========================================================
          CARD HEADER: TITLE & LOCATION
          ======================================================== */}
      <div className="px-6 pt-2 pb-3 shrink-0">
        <h3 className={`font-editorial text-[38px] sm:text-[44px] lg:text-[46px] font-medium tracking-tight ${theme.titleColor} leading-none mb-1.5`}>
          {day.title}
        </h3>
        <div className={`flex items-center gap-1.5 text-xs ${theme.locationColor} font-sans font-medium`}>
          <MapPin className={`w-3.5 h-3.5 ${theme.mapPinColor} shrink-0`} />
          <span>{day.location}</span>
        </div>
      </div>

      {/* Decorative hairline divider */}
      <div className="mx-6 h-[1px] bg-[#10251D]/12 shrink-0 mb-3" />

      {/* ========================================================
          CARD BODY: AGENDA ITEMS LIST
          ======================================================== */}
      <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Always visible preview items (first 4 items) */}
          {day.items.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 py-1.5 border-b border-[#10251D]/8 last:border-b-0 group/item"
            >
              <div className={`w-6 h-6 rounded-full ${theme.iconBg} flex items-center justify-center shrink-0 mt-0.5 ${theme.iconHoverBg} transition-colors`}>
                <div className={theme.iconColor}>
                  {renderAgendaIcon(item.iconName)}
                </div>
              </div>
              <div className="text-[12px] sm:text-[12.5px] leading-snug font-sans text-[#26352D]">
                <span className={`font-semibold ${theme.titleColor}`}>{item.tag}</span>
                <span className="mx-1 text-[#10251D]/60">—</span>
                <span className="opacity-90">{item.description}</span>
              </div>
            </div>
          ))}

          {/* Expandable remaining items */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="expanded-sessions"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden space-y-2.5"
              >
                {day.items.slice(4).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 py-1.5 border-b border-[#10251D]/8 last:border-b-0 group/item"
                  >
                    <div className={`w-6 h-6 rounded-full ${theme.iconBg} flex items-center justify-center shrink-0 mt-0.5 ${theme.iconHoverBg} transition-colors`}>
                      <div className={theme.iconColor}>
                        {renderAgendaIcon(item.iconName)}
                      </div>
                    </div>
                    <div className="text-[12px] sm:text-[12.5px] leading-snug font-sans text-[#26352D]">
                      <span className={`font-semibold ${theme.titleColor}`}>{item.tag}</span>
                      <span className="mx-1 text-[#10251D]/60">—</span>
                      <span className="opacity-90">{item.description}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Action Button with Down Arrow */}
        {day.items.length > 4 && (
          <div className="pt-4 mt-auto">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? `Show less sessions for ${day.title}` : `View more sessions for ${day.title}`}
              className="w-full group/btn flex items-center justify-center gap-2 py-2 px-3.5 rounded-full bg-white/80 hover:bg-white border border-[#10251D]/12 hover:border-[#10251D]/25 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300 cursor-pointer select-none"
            >
              <span className={`text-[11.5px] sm:text-xs font-sans font-medium tracking-wide ${theme.titleColor}`}>
                {isExpanded ? "Show less" : `View more (${day.items.length - 4} more)`}
              </span>
              <div
                className={`w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center transition-all duration-300 ${
                  !isExpanded ? "animate-bounce group-hover/btn:animate-none" : ""
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 ${theme.iconColor} transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Subtle Bottom Accent Highlight Bar on Hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${theme.hoverBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </article>
  );
}
