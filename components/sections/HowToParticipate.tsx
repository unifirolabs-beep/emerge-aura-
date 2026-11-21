"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  X,
  Sparkles,
  Ticket,
  Store,
  ArrowUpRight,
  Info,
  Calendar,
  MapPin,
  Star,
  Rocket,
  Clock,
} from "lucide-react";
import {
  participateData,
  REGISTRATION_URL,
  STARTUP_PITCH_REGISTRATION_URL,
  PassItem,
  StallItem,
} from "@/data/participate";

type TabFilter = "all" | "passes" | "stalls" | "pitchfest";

export default function HowToParticipate() {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const {
    eyebrow,
    heading,
    description,
    passesHeading,
    passesDescription,
    passes,
    stallsHeading,
    stallsDescription,
    stallsNote,
    stalls,
  } = participateData;

  const showPasses = activeTab === "all" || activeTab === "passes";
  const showStalls = activeTab === "all" || activeTab === "stalls";
  const showPitchFest = activeTab === "all" || activeTab === "pitchfest";

  return (
    <section
      id="participate"
      aria-label="How to Participate — Conclave Passes and Stall Booking"
      className="relative w-full bg-[#032D1D] text-[#F4EFE6] py-20 sm:py-28 lg:py-36 overflow-hidden select-none border-t border-[#09422C]"
    >
      {/* Anchor alias so any legacy #featured-sessions link scrolls here */}
      <span id="featured-sessions" className="absolute -top-24 opacity-0 pointer-events-none" />

      {/* Ambient Lighting Background Accents */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,161,91,0.08)_0%,transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(201,161,91,0.05)_0%,transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            HEADER: EYEBROW + EDITORIAL HEADLINE + SUBTITLE
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3.5 mb-4">
            <span className="text-[10.5px] sm:text-[11.5px] font-sans font-medium tracking-[0.32em] text-[#C9A15B] uppercase">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-editorial text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-normal leading-[1.0] tracking-tight text-[#F4EFE6] mb-4">
            {heading.prefix}{" "}
            <span className="text-[#C9A15B]">{heading.highlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[14.5px] sm:text-[16.5px] text-[#E5DED2]/85 font-normal leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex p-1.5 rounded-full bg-[#06281C]/90 border border-[#C9A15B]/30 backdrop-blur-md shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-[#C9A15B] text-[#032D1D] shadow-md"
                    : "text-[#E5DED2]/80 hover:text-white"
                }`}
              >
                All Options (7)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("passes")}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "passes"
                    ? "bg-[#C9A15B] text-[#032D1D] shadow-md"
                    : "text-[#E5DED2]/80 hover:text-white"
                }`}
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>Passes (3)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("stalls")}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "stalls"
                    ? "bg-[#C9A15B] text-[#032D1D] shadow-md"
                    : "text-[#E5DED2]/80 hover:text-white"
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Stall Booking (3)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("pitchfest")}
                className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] font-sans font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === "pitchfest"
                    ? "bg-[#C9A15B] text-[#032D1D] shadow-md"
                    : "text-[#E5DED2]/80 hover:text-white"
                }`}
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Startup Pitching (1)</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CATEGORY 1: CONCLAVE PASSES (3 CARDS)
            ======================================================== */}
        <AnimatePresence mode="wait">
          {showPasses && (
            <motion.div
              key="passes-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={showStalls ? "mb-20 sm:mb-28" : "mb-8"}
            >
              {/* Category Subheading */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#C9A15B]/20">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A15B] uppercase mb-1">
                    <Ticket className="w-3.5 h-3.5" />
                    <span>INDIVIDUAL &amp; DELEGATE ACCESS</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EFE6] font-normal">
                    {passesHeading}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#E5DED2]/70 max-w-md sm:text-right">
                  {passesDescription}
                </p>
              </div>

              {/* Passes Cards Grid (Exact Design from Image 2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6 sm:pt-8">
                {passes.map((pass: PassItem, idx: number) => {
                  const isPop = pass.isPopular;

                  return (
                    <motion.div
                      key={pass.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className={`relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                        isPop
                          ? "bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FCF4E3] border-2 border-[#ECC980] shadow-[0_18px_50px_rgba(0,0,0,0.35)] scale-[1.02] md:scale-105 z-20"
                          : "bg-white border border-[#E3D9C3] hover:border-[#C9A15B]/60 shadow-[0_14px_38px_rgba(0,0,0,0.22)] hover:-translate-y-1"
                      }`}
                    >
                      {/* Inner Overflow Container for Corner Watercolor Waves */}
                      <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
                        <svg
                          viewBox="0 0 160 160"
                          className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-tr-[28px] overflow-hidden select-none"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M40 0C65 45 110 40 160 85V0H40Z"
                            fill={isPop ? "#F5E6C7" : "#E3ECE6"}
                            fillOpacity={isPop ? "0.65" : "0.8"}
                          />
                          <path
                            d="M0 0C35 25 80 75 160 120V0H0Z"
                            fill={isPop ? "#F9EED9" : "#EDF3EF"}
                            fillOpacity={isPop ? "0.45" : "0.6"}
                          />
                        </svg>

                        {!isPop && (
                          <svg
                            viewBox="0 0 120 120"
                            className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none rounded-bl-[28px] overflow-hidden select-none"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M0 65C35 65 55 90 65 120H0V65Z"
                              fill="#EDF3EF"
                              fillOpacity="0.65"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Popular Floating Gold Ribbon Badge - Fully Visible */}
                      {isPop && (
                        <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-30">
                          <span className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#ECC980] to-[#DFB76C] text-[#3D2905] text-[10.5px] sm:text-[11px] font-sans font-bold tracking-[0.16em] uppercase shadow-md border border-[#F5DC9C] whitespace-nowrap">
                            <Star className="w-3 h-3 fill-[#3D2905] text-[#3D2905]" />
                            <span>MOST POPULAR</span>
                          </span>
                        </div>
                      )}

                      <div className="relative z-10">
                        {/* Top Pill Badge (for non-popular cards, e.g. OPEN ACCESS / NETWORKING · EARLY BIRD) */}
                        {!isPop && pass.badge ? (
                          <div className="flex items-center gap-1.5 flex-wrap mb-3">
                            <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF0EC] text-[#244234] text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.16em] uppercase">
                              {pass.badge}
                            </span>
                            {pass.badgeSecondary && (
                              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.16em] uppercase">
                                {pass.badgeSecondary}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className={isPop ? "h-6" : ""} />
                        )}

                        {/* Pass Title */}
                        <h4 className="font-editorial text-[30px] sm:text-[34px] lg:text-[36px] text-[#10251D] font-normal leading-[1.1] tracking-tight">
                          {pass.name}
                        </h4>

                        {/* Subtitle / Period */}
                        <span className="text-[11px] font-sans text-[#5A6D61] tracking-[0.22em] uppercase font-semibold block mt-1.5 mb-3.5">
                          {pass.period}
                        </span>

                        {/* Gold Accent Line */}
                        <div className="w-12 h-[1.5px] bg-[#C9A15B] mb-5" />

                        {/* Price Block */}
                        <div className="flex items-baseline gap-2 mb-3.5 flex-wrap">
                          <span className="font-editorial text-[42px] sm:text-[46px] lg:text-[50px] text-[#073B2A] font-medium leading-none tracking-tight">
                            {pass.price}
                          </span>
                          {pass.price !== "Free" && (
                            <div className="flex flex-col">
                              <span className="text-xs sm:text-[13px] text-[#5A6D61] font-sans font-normal">
                                {pass.priceSuffix || "/ delegate"}
                              </span>
                              {pass.originalPrice && (
                                <span className="text-[11px] text-[#8C9891] line-through font-sans">
                                  {pass.originalPrice}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Pricing Schedule Box (if present, e.g. Early Bird B2B) */}
                        {pass.pricingBox && (
                          <div className="bg-[#FAF7F0] rounded-xl p-3 border border-[#E7DEC8] text-[12px] font-sans text-[#17352B]/85 space-y-1.5 mb-5 shadow-xs">
                            <div className="space-y-0.5">
                              <div className="text-[#073B2A] font-semibold text-[12px]">
                                {pass.pricingBox.earlyBird}
                              </div>
                              <div className="text-[#5A6D61] text-[11.5px]">
                                {pass.pricingBox.standard}
                              </div>
                            </div>
                            {pass.pricingBox.note && (
                              <p className="text-[#17352B]/75 text-[11px] border-t border-[#E7DEC8]/70 pt-1.5 mt-1 leading-relaxed">
                                {pass.pricingBox.note}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Description */}
                        <p className="font-sans text-[13px] sm:text-[13.5px] text-[#42544A] leading-relaxed mb-6 min-h-[42px]">
                          {pass.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#5A6D61] uppercase block">
                            WHAT&apos;S INCLUDED
                          </span>
                          <ul className="space-y-3">
                            {pass.features.map((feat, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-3 text-xs sm:text-[13px] leading-snug"
                              >
                                {feat.included ? (
                                  <div className="w-4 h-4 rounded-full bg-[#073B2A] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                                  </div>
                                ) : (
                                  <div className="w-4 h-4 rounded-full bg-[#E5EAE7] flex items-center justify-center shrink-0 mt-0.5 text-[#8C9891]">
                                    <X className="w-2.5 h-2.5 stroke-[2.5]" />
                                  </div>
                                )}
                                <span
                                  className={
                                    feat.included
                                      ? "text-[#1E3027] font-normal"
                                      : "text-[#8C9891]"
                                  }
                                >
                                  {feat.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="relative z-10 pt-2">
                        <a
                          href={pass.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-300 ${
                            isPop
                              ? "py-3.5 px-6 bg-[#073B2A] hover:bg-[#042017] text-[#FAF8F2] shadow-[0_4px_16px_rgba(7,59,42,0.3)] hover:shadow-[0_6px_22px_rgba(7,59,42,0.4)] hover:-translate-y-0.5"
                              : "py-3 px-6 bg-white hover:bg-[#073B2A] text-[#10251D] hover:text-[#FAF8F2] border border-[#10251D]/25 hover:border-[#073B2A] shadow-xs hover:-translate-y-0.5"
                          }`}
                        >
                          <span>{pass.ctaText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            CATEGORY 2: STALL BOOKING (3 CARDS)
            ======================================================== */}
        <AnimatePresence mode="wait">
          {showStalls && (
            <motion.div
              key="stalls-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Subheading */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#C9A15B]/20">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A15B] uppercase mb-1">
                    <Store className="w-3.5 h-3.5" />
                    <span>EXHIBITION &amp; SHOWCASE SPACES</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EFE6] font-normal">
                    {stallsHeading}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#E5DED2]/70 max-w-md sm:text-right">
                  {stallsDescription}
                </p>
              </div>

              {/* Stalls Cards Grid (Matching White Luxury Design) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6 sm:pt-8">
                {stalls.map((stall: StallItem, idx: number) => {
                  const isPop = stall.isPopular;

                  return (
                    <motion.div
                      key={stall.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className={`relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                        isPop
                          ? "bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FCF4E3] border-2 border-[#ECC980] shadow-[0_18px_50px_rgba(0,0,0,0.35)] scale-[1.02] md:scale-105 z-20"
                          : "bg-white border border-[#E3D9C3] hover:border-[#C9A15B]/60 shadow-[0_14px_38px_rgba(0,0,0,0.22)] hover:-translate-y-1"
                      }`}
                    >
                      {/* Inner Overflow Container for Corner Watercolor Waves */}
                      <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
                        <svg
                          viewBox="0 0 160 160"
                          className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-tr-[28px] overflow-hidden select-none"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M40 0C65 45 110 40 160 85V0H40Z"
                            fill={isPop ? "#F5E6C7" : "#E3ECE6"}
                            fillOpacity={isPop ? "0.65" : "0.8"}
                          />
                          <path
                            d="M0 0C35 25 80 75 160 120V0H0Z"
                            fill={isPop ? "#F9EED9" : "#EDF3EF"}
                            fillOpacity={isPop ? "0.45" : "0.6"}
                          />
                        </svg>

                        {!isPop && (
                          <svg
                            viewBox="0 0 120 120"
                            className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none rounded-bl-[28px] overflow-hidden select-none"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M0 65C35 65 55 90 65 120H0V65Z"
                              fill="#EDF3EF"
                              fillOpacity="0.65"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Popular Floating Gold Ribbon Badge - Fully Visible */}
                      {isPop && (
                        <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-30">
                          <span className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-[#DFB76C] via-[#ECC980] to-[#DFB76C] text-[#3D2905] text-[10.5px] sm:text-[11px] font-sans font-bold tracking-[0.16em] uppercase shadow-md border border-[#F5DC9C] whitespace-nowrap">
                            <Star className="w-3 h-3 fill-[#3D2905] text-[#3D2905]" />
                            <span>MOST POPULAR</span>
                          </span>
                        </div>
                      )}

                      <div className="relative z-10">
                        {/* Top Row: Badge & Dimensions */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          {!isPop && stall.badge ? (
                            <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF0EC] text-[#244234] text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.18em] uppercase">
                              {stall.badge}
                            </span>
                          ) : (
                            <div className={isPop ? "h-6" : ""} />
                          )}
                          <span className="px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#244234] text-[10.5px] font-mono font-medium">
                            {stall.dimensions}
                          </span>
                        </div>

                        {/* Stall Title */}
                        <h4 className="font-editorial text-[30px] sm:text-[34px] lg:text-[36px] text-[#10251D] font-normal leading-[1.1] tracking-tight">
                          {stall.name}
                        </h4>

                        {/* Subtitle / Period */}
                        <span className="text-[11px] font-sans text-[#5A6D61] tracking-[0.22em] uppercase font-semibold block mt-1.5 mb-3.5">
                          {stall.period}
                        </span>

                        {/* Gold Accent Line */}
                        <div className="w-12 h-[1.5px] bg-[#C9A15B] mb-5" />

                        {/* Price Block */}
                        <div className="flex items-baseline gap-1.5 mb-3.5">
                          <span className="font-editorial text-[42px] sm:text-[46px] lg:text-[50px] text-[#073B2A] font-medium leading-none tracking-tight">
                            {stall.price}
                          </span>
                          <span className="text-xs text-[#5A6D61] font-sans">
                            (exclusive of GST)
                          </span>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-[13px] sm:text-[13.5px] text-[#42544A] leading-relaxed mb-6 min-h-[42px]">
                          {stall.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                          <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#5A6D61] uppercase block">
                            STALL PROVISIONS
                          </span>
                          <ul className="space-y-3">
                            {stall.features.map((feat, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-3 text-xs sm:text-[13px] text-[#1E3027] font-normal leading-snug"
                              >
                                <div className="w-4 h-4 rounded-full bg-[#073B2A] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                                <span>{feat.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="relative z-10 pt-2">
                        <a
                          href={stall.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 rounded-full font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-300 ${
                            isPop
                              ? "py-3.5 px-6 bg-[#073B2A] hover:bg-[#042017] text-[#FAF8F2] shadow-[0_4px_16px_rgba(7,59,42,0.3)] hover:shadow-[0_6px_22px_rgba(7,59,42,0.4)] hover:-translate-y-0.5"
                              : "py-3 px-6 bg-white hover:bg-[#073B2A] text-[#10251D] hover:text-[#FAF8F2] border border-[#10251D]/25 hover:border-[#073B2A] shadow-xs hover:-translate-y-0.5"
                          }`}
                        >
                          <span>{stall.ctaText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ========================================================
                  EXHIBITION LOCATION & PRICING POLICY CALLOUT
                  ======================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-10 sm:mt-12 rounded-2xl bg-[#063321]/90 border border-[#C9A15B]/35 p-5 sm:p-7 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A15B]/20 border border-[#C9A15B]/50 flex items-center justify-center text-[#C9A15B] shrink-0 mt-0.5">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-editorial text-lg sm:text-xl text-[#F4EFE6] font-normal">
                        Exhibition Grounds at Bharat Nivas, Auroville
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A15B]/15 text-[#C9A15B] text-[11px] font-sans font-semibold">
                        <Calendar className="w-3 h-3" />
                        5 &amp; 6 December 2026
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#E5DED2]/85 leading-relaxed max-w-3xl">
                      {stallsNote}
                    </p>
                  </div>
                </div>

                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C9A15B] text-[#032D1D] font-sans text-xs tracking-wider uppercase font-semibold hover:bg-[#D8B56A] transition-colors shadow-md"
                >
                  <span>Register Stall Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            CATEGORY 3: STARTUP PITCHING (PITCHFEST)
            ======================================================== */}
        <AnimatePresence mode="wait">
          {showPitchFest && (
            <motion.div
              key="pitchfest-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-20 sm:mt-28"
            >
              {/* Category Subheading */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 pb-4 border-b border-[#C9A15B]/20">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A15B] uppercase mb-1">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>FOUNDER SHOWCASE &amp; INVESTOR TRACK</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EFE6] font-normal">
                    Startup PitchFest
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#E5DED2]/70 max-w-md sm:text-right">
                  Direct investor pitch stage for high-impact and revenue-generating startups.
                </p>
              </div>

              {/* Startup Pitching Card */}
              <div className="max-w-2xl mx-auto pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[28px] p-7 sm:p-10 bg-white border border-[#E3D9C3] hover:border-[#C9A15B]/60 shadow-[0_18px_45px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Decorative corner watercolor waves */}
                  <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
                    <svg
                      viewBox="0 0 160 160"
                      className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-tr-[28px] overflow-hidden select-none"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M40 0C65 45 110 40 160 85V0H40Z"
                        fill="#E3ECE6"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M0 0C35 25 80 75 160 120V0H0Z"
                        fill="#EDF3EF"
                        fillOpacity="0.6"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 120 120"
                      className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none rounded-bl-[28px] overflow-hidden select-none"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 65C35 65 55 90 65 120H0V65Z"
                        fill="#EDF3EF"
                        fillOpacity="0.65"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    {/* Top Badges / Tags */}
                    <div className="flex items-center gap-2 flex-wrap mb-3.5">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF0EC] text-[#244234] text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.16em] uppercase">
                        PITCH TO INVESTORS
                      </span>
                      <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.16em] uppercase">
                        FREE TO APPLY
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 className="font-editorial text-[32px] sm:text-[38px] lg:text-[42px] text-[#10251D] font-normal leading-[1.1] tracking-tight">
                      Startup Pitching
                    </h4>

                    {/* Subtitle / Period */}
                    <span className="text-[11px] font-sans text-[#5A6D61] tracking-[0.22em] uppercase font-semibold block mt-1.5 mb-3.5">
                      PITCHFEST · AUROVILLE 2026
                    </span>

                    {/* Gold Accent Line */}
                    <div className="w-12 h-[1.5px] bg-[#C9A15B] mb-5" />

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                      <span className="font-editorial text-[42px] sm:text-[48px] text-[#073B2A] font-medium leading-none tracking-tight">
                        Free
                      </span>
                      <span className="text-xs sm:text-[13px] text-[#5A6D61] font-sans">
                        to apply (No upfront application fee)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#42544A] leading-relaxed mb-6">
                      Shortlisted startups pitch directly to investors at PitchFest. Open to revenue-generating startups creating social or environmental impact. Applying is completely free.
                    </p>

                    {/* Info Box */}
                    <div className="rounded-2xl bg-[#FAF7F0] border border-[#E7DEC8] p-5 sm:p-6 mb-7 shadow-xs space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-[#E7DEC8]">
                        <span className="text-[11px] font-sans font-bold tracking-[0.18em] text-[#073B2A] uppercase flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-[#C9A15B]" />
                          PitchFest Details
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/60 text-[11px] font-sans font-bold w-fit">
                          <Clock className="w-3 h-3 text-amber-700" />
                          Last date to apply: 28 November
                        </span>
                      </div>

                      <ul className="space-y-3 font-sans text-[12.5px] sm:text-[13px] text-[#17352B]/85 leading-relaxed">
                        <li className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B] mt-2 shrink-0" />
                          <span>
                            <strong className="text-[#073B2A] font-semibold">Top 25 teams</strong> will be shortlisted from applications.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B] mt-2 shrink-0" />
                          <span>
                            Shortlisted teams confirm their pitching slot by paying <strong className="text-[#073B2A] font-semibold">₹3,999 + GST</strong>, which includes meals and event facilities.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B] mt-2 shrink-0" />
                          <span>
                            Conditional fee waivers are available for strong startups with a valid reason. Request one in the application form.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1">
                      <a
                        href={STARTUP_PITCH_REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 px-8 bg-[#073B2A] hover:bg-[#042017] text-[#FAF8F2] font-sans text-xs sm:text-[13px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(7,59,42,0.3)] hover:shadow-[0_6px_22px_rgba(7,59,42,0.4)] hover:-translate-y-0.5"
                      >
                        <span>Apply for PitchFest</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
