"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Handshake, ArrowRight, CheckCircle2, MinusCircle } from "lucide-react";
import { sponsorTiers, sponsorFeatureRows } from "@/data/sponsorship";
import { useState } from "react";
import SponsorModal from "@/components/ui/SponsorModal";

export default function SponsorsPageSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Hero animations
  const fadeUpVariant = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" as const },
    },
  });

  const iconScaleVariant = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay, ease: "easeOut" as const },
    },
  });

  const tableRevealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <>
    <section
      id="sponsors"
      aria-label="Our Sponsors"
      className="relative w-full bg-[#F7F2E8] text-[#17352B] overflow-hidden select-none"
    >
      {/* ========================================================
          DECORATIVE BACKGROUND
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Thin gold concentric circles */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border-[0.5px] border-[#C89B3C]/20 opacity-50" />
        <div className="absolute top-[-20%] right-[-15%] w-[1000px] h-[1000px] sm:w-[1200px] sm:h-[1200px] rounded-full border-[0.5px] border-[#C89B3C]/15 opacity-40" />
        
        {/* Faint curved lines */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full border-[0.5px] border-[#C89B3C]/15 opacity-40" />
        
        {/* Tiny gold dots */}
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#C89B3C] opacity-40" />
        <div className="absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-[#D4A94F] opacity-30" />
        <div className="absolute top-[60%] left-[5%] w-1 h-1 rounded-full bg-[#C89B3C] opacity-50" />
      </div>

      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariant(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="hidden sm:block w-12 h-[1px] bg-[#C89B3C]" />
            <span className="text-[12px] font-sans font-semibold tracking-[0.2em] text-[#C89B3C] uppercase">
              PARTNER FOR IMPACT
            </span>
            <span className="hidden sm:block w-12 h-[1px] bg-[#C89B3C]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpVariant(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-editorial text-[44px] sm:text-[72px] lg:text-[96px] font-medium leading-[1.05] text-[#073B2A] tracking-tight mb-6"
          >
            OUR SPONSORS
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUpVariant(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-sans text-[18px] sm:text-[20px] lg:text-[22px] text-[#17352B]/80 font-normal leading-relaxed max-w-[540px] mb-10"
          >
            A partnership opportunity for organizations shaping conscious capital, innovation and impact at EMERGE AURO.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={fadeUpVariant(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4A94F] text-[#073B2A] font-sans text-[14px] font-semibold tracking-[0.1em] uppercase shadow-[0_4px_16px_rgba(212,169,79,0.3)] hover:bg-[#C89B3C] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>BECOME A SPONSOR</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right: Icon */}
        <motion.div
          variants={iconScaleVariant(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
            {/* Outline rings */}
            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#C89B3C]/30" />
            <div className="absolute inset-4 rounded-full border-[1px] border-[#C89B3C]/10" />
            
            {/* Inner background circle */}
            <div className="w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] rounded-full bg-[#F5EEDC] shadow-[0_12px_40px_rgba(7,59,42,0.05)] flex items-center justify-center">
              <Handshake className="w-16 h-16 sm:w-28 sm:h-28 text-[#073B2A] stroke-[1]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          SPONSORSHIP INTRO & TABLE
          ======================================================== */}
      <div className="relative z-10 w-full bg-white/40 pb-24 lg:pb-32">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28">
          
          {/* Section Intro */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              variants={fadeUpVariant(0.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.25em] text-[#C89B3C] uppercase mb-4 block">
                PARTNERSHIP OPPORTUNITIES
              </span>
              <h2 className="font-editorial text-[36px] sm:text-[56px] font-medium leading-[1.1] text-[#073B2A] mb-6">
                Sponsor Categories
              </h2>
              <p className="font-sans text-[16px] sm:text-[18px] text-[#17352B]/80 font-normal leading-relaxed max-w-[600px] mx-auto">
                Choose a partnership level aligned with your desired visibility, participation and impact at EMERGE AURO.
              </p>
            </motion.div>
          </div>

          {/* Table Container */}
          <motion.div
            variants={tableRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full bg-white/75 border border-[#B48C3C]/20 rounded-[18px] sm:rounded-[24px] shadow-[0_8px_32px_rgba(7,59,42,0.04)] overflow-hidden"
          >
            <div className="w-full overflow-x-auto custom-scrollbar">
              <table className="w-full min-w-[1000px] border-collapse text-left text-sm font-sans">
                <thead>
                  <tr>
                    <th className="sticky left-0 top-0 z-20 w-[30%] bg-[#FBF9F4] p-4 sm:p-8 border-b border-[#B48C3C]/20 align-bottom shadow-[4px_0_16px_rgba(0,0,0,0.03)] sm:shadow-none">
                      <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-[#17352B]">
                        SPONSOR CATEGORIES
                      </span>
                    </th>
                    {sponsorTiers.map((tier) => (
                      <th
                        key={tier.id}
                        className={`w-[17.5%] p-6 text-center border-b border-[#B48C3C]/20 align-bottom relative ${
                          tier.isFeatured
                            ? "bg-[#073B2A]"
                            : tier.headerBg
                        }`}
                      >
                        {/* Optional outline for featured */}
                        {tier.isFeatured && (
                          <div className="absolute inset-0 border border-[#D4A94F] pointer-events-none" />
                        )}
                        <div className="flex flex-col items-center gap-3">
                          {/* We simulate icons since actual SVGs weren't specified, but using general ones */}
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                              tier.isFeatured ? "border-[#D4A94F]/30 bg-white/5" : "border-black/10 bg-white/30"
                            }`}
                          >
                            <Handshake
                              className={`w-5 h-5 ${tier.isFeatured ? "text-[#EADBCA]" : tier.headerText}`}
                            />
                          </div>
                          <span
                            className={`text-[13px] font-bold tracking-[0.1em] uppercase leading-tight ${
                              tier.isFeatured ? "text-[#EADBCA]" : tier.headerText
                            }`}
                          >
                            {tier.name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* PRICE ROW */}
                  <tr className="group transition-colors hover:bg-black/5">
                    <td className="sticky left-0 z-10 bg-[#FBF9F4] group-hover:bg-[#F3EFE7] p-4 sm:p-6 border-b border-[#B48C3C]/10 transition-colors shadow-[4px_0_16px_rgba(0,0,0,0.03)] sm:shadow-none">
                      <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.1em] uppercase text-[#17352B]">
                        PRICE
                      </span>
                    </td>
                    {sponsorTiers.map((tier) => (
                      <td
                        key={`price-${tier.id}`}
                        className={`p-6 text-center border-b border-[#B48C3C]/10 bg-[#F5E5DC]/50 ${
                          tier.isFeatured ? "border-l border-r border-[#D4A94F]/30" : ""
                        }`}
                      >
                        <span className="text-[18px] sm:text-[20px] font-bold text-[#073B2A]">
                          {tier.price}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* FEATURE ROWS */}
                  {sponsorFeatureRows.map((row) => (
                    <tr key={row.id} className="group transition-colors hover:bg-black/[0.02]">
                      <td className="sticky left-0 z-10 bg-white/95 group-hover:bg-[#f9f8f5] p-4 sm:p-6 border-b border-[#B48C3C]/10 transition-colors shadow-[4px_0_16px_rgba(0,0,0,0.03)] sm:shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
                        <span className="text-[13px] sm:text-[14px] font-medium text-[#073B2A] leading-relaxed">
                          {row.feature}
                        </span>
                      </td>
                      
                      {[row.enabling, row.impact, row.catalyst, row.founding].map((val, idx) => {
                        const isFeaturedCol = idx === 3;
                        return (
                          <td
                            key={`${row.id}-col-${idx}`}
                            className={`p-6 text-center border-b border-[#B48C3C]/10 ${
                              isFeaturedCol ? "bg-[#073B2A]/[0.02] border-l border-r border-[#D4A94F]/20" : ""
                            }`}
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <CheckCircle2 className="w-5 h-5 text-[#073B2A] mx-auto" />
                              ) : (
                                <MinusCircle className="w-5 h-5 text-[#17352B]/20 mx-auto" />
                              )
                            ) : (
                              <span className="text-[14px] text-[#17352B] font-medium">
                                {val}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          CTA FOOTER
          ======================================================== */}
      <div className="relative w-full bg-[#073B2A] overflow-hidden rounded-t-[40px] lg:rounded-t-[80px]">
        {/* Subtle gold circular lines in background */}
        <div className="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] rounded-full border-[1px] border-[#C89B3C]/15 pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-5%] w-[500px] h-[500px] rounded-full border-[1px] border-[#C89B3C]/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center flex flex-col items-center">
          <motion.div
            variants={fadeUpVariant(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="hidden sm:block w-12 h-[1px] bg-[#C89B3C]/60" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.2em] text-[#C89B3C] uppercase">
              READY TO PARTNER WITH EMERGE AURO?
            </span>
            <span className="hidden sm:block w-12 h-[1px] bg-[#C89B3C]/60" />
          </motion.div>

          <motion.h2
            variants={fadeUpVariant(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="font-editorial text-[36px] sm:text-[56px] lg:text-[64px] font-medium leading-[1.1] text-[#EADBCA] mb-8"
          >
            Join the Movement for a <br className="hidden sm:block" /> Regenerative Future
          </motion.h2>

          <motion.p
            variants={fadeUpVariant(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="font-sans text-[18px] sm:text-[20px] text-[#EADBCA]/80 font-normal leading-relaxed max-w-[650px] mb-12"
          >
            Partner with EMERGE AURO and help build meaningful connections between capital, innovation and impact.
          </motion.p>

          <motion.div
            variants={fadeUpVariant(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#EADBCA] text-[#073B2A] font-sans text-[14px] font-semibold tracking-[0.1em] uppercase shadow-lg hover:bg-[#F7F2E8] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>BECOME A SPONSOR</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Global CSS for custom scrollbar within this component scope */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(180,140,60,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(180,140,60,0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(180,140,60,0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}} />
    </section>

      {/* Sponsor Modal */}
      <SponsorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
