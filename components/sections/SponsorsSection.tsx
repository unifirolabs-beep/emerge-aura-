"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Handshake, Leaf, Users, Globe2, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import SponsorModal from "@/components/ui/SponsorModal";

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  // Entrance animations
  const fadeUpVariant = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  });

  const fadeVariant = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay, ease: "easeInOut" as const },
    },
  });

  const scaleVariant = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  });

  const imageRevealVariant = (delay: number) => ({
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  });

  return (
    <>
      <section
        ref={sectionRef}
        id="sponsors"
        aria-label="Our Sponsors"
      className="relative w-full bg-[#F5CB62] text-[#063522] py-20 sm:py-28 lg:py-36 overflow-hidden select-none min-h-[750px] flex items-center"
    >
      {/* ========================================================
          1. SECTION BACKGROUND (Depth, Texture, Arcs, Gradient)
          ======================================================== */}
      {/* Base warm radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#F6D378] via-[#F5CB62] to-[#E3B84A] z-0" />
      
      {/* Subtle Paper Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Soft Warm Highlights */}
      <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-white/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#D4A33B]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ========================================================
          2. ORBITAL CIRCLES & BOTANICAL DECORATION
          ======================================================== */}
      <motion.div
        variants={fadeVariant(0.0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        {/* Large Faint Gold Arcs across the background */}
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] flex items-center justify-center opacity-30">
          <div className="absolute w-[1800px] h-[1800px] rounded-full border border-[#9A7B32] opacity-15" />
          <div className="absolute w-[2400px] h-[2400px] rounded-full border border-[#9A7B32] opacity-10" />
        </div>

        {/* Central Orbital Circles (around Handshake) */}
        <div className="absolute top-[45%] lg:top-[50%] left-[50%] lg:left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-[#9A7B32] opacity-30"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] rounded-full border border-[#9A7B32] opacity-20"
          />
          <div className="absolute w-[1100px] h-[1100px] sm:w-[1500px] sm:h-[1500px] rounded-full border border-[#9A7B32] opacity-15" />
          
          {/* Orbit Dots */}
          <div className="absolute top-[10%] left-[40%] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#9A7B32] opacity-80 shadow-[0_0_10px_rgba(154,123,50,0.5)]" />
          <div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#9A7B32] opacity-60 shadow-[0_0_10px_rgba(154,123,50,0.5)]" />
          <div className="absolute top-[35%] right-[15%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#9A7B32] opacity-70 shadow-[0_0_10px_rgba(154,123,50,0.5)]" />
        </div>

        {/* Botanical Foliage Overlays (Soft, Large, Framing) */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.45] mix-blend-multiply">
          <Image
            src="/images/botanical-leaves.jpg"
            alt=""
            fill
            sizes="600px"
            className="object-contain object-top-left"
            style={{ maskImage: "radial-gradient(circle at top left, black 25%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle at top left, black 25%, transparent 60%)" }}
          />
        </div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.35] mix-blend-multiply">
          <Image
            src="/images/botanical-leaves.jpg"
            alt=""
            fill
            sizes="700px"
            className="object-contain object-bottom-left"
            style={{ maskImage: "radial-gradient(circle at bottom left, black 30%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle at bottom left, black 30%, transparent 60%)" }}
          />
        </div>
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.40] mix-blend-multiply">
          <Image
            src="/images/botanical-leaves.jpg"
            alt=""
            fill
            sizes="600px"
            className="object-contain object-top-right transform -scale-x-100"
            style={{ maskImage: "radial-gradient(circle at top right, black 25%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle at top right, black 25%, transparent 60%)" }}
          />
        </div>
        <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] opacity-[0.30] mix-blend-multiply z-30">
          <Image
            src="/images/botanical-leaves.jpg"
            alt=""
            fill
            sizes="650px"
            className="object-contain object-bottom-right transform -scale-x-100 -scale-y-100"
            style={{ maskImage: "radial-gradient(circle at bottom right, black 30%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle at bottom right, black 30%, transparent 60%)" }}
          />
        </div>
      </motion.div>

      {/* ========================================================
          MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="relative z-20 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
        {/* Core Layout: 3 Columns. Adjusted padding to move left content further left. */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-10 w-full pl-0 lg:pl-0">
          
          {/* ========================================================
              LEFT: LARGE EDITORIAL CONTENT
              ======================================================== */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 lg:pt-10 shrink-0">
            
            {/* Top Eyebrow */}
            <motion.div
              variants={fadeUpVariant(0.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="hidden lg:block w-20 h-[1px] bg-[#6B4A16]/50" />
              <span className="text-[13px] font-sans font-semibold tracking-[0.25em] text-[#6B4A16] uppercase">
                PARTNER FOR IMPACT
              </span>
              <span className="w-20 h-[1px] bg-[#6B4A16]/50" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={fadeUpVariant(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-editorial text-[72px] sm:text-[96px] lg:text-[116px] font-medium leading-[0.9] text-[#063522] tracking-tight mb-8"
            >
              Our Sponsors
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUpVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-sans text-[20px] sm:text-[24px] text-[#063522]/90 font-normal leading-[1.5] max-w-[500px] mb-16"
            >
              A special thanks to the individuals who made this event possible
            </motion.p>

            {/* Three Supporting Points (Wider, more horizontal space) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center lg:justify-start gap-10 sm:gap-6 lg:gap-8 w-full max-w-[800px]">
              
              {/* Point 1 */}
              <motion.div
                variants={fadeUpVariant(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-5 group w-[180px] sm:w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF5E6]/80 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(107,74,22,0.1)] border border-[#9A7B32]/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FFF] group-hover:border-[#9A7B32]/50">
                  <Leaf className="w-5 h-5 text-[#063522] stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-[15px] lg:text-[16px] font-bold text-[#063522] mb-1.5">
                    Shared Vision
                  </h4>
                  <p className="font-sans text-[13px] text-[#063522]/75 leading-relaxed">
                    Organizations committed to a better tomorrow.
                  </p>
                </div>
              </motion.div>

              <div className="hidden sm:block w-[1px] h-16 bg-[#9A7B32]/30" />

              {/* Point 2 */}
              <motion.div
                variants={fadeUpVariant(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-5 group w-[180px] sm:w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF5E6]/80 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(107,74,22,0.1)] border border-[#9A7B32]/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FFF] group-hover:border-[#9A7B32]/50">
                  <Users className="w-5 h-5 text-[#063522] stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-[15px] lg:text-[16px] font-bold text-[#063522] mb-1.5">
                    Collective Action
                  </h4>
                  <p className="font-sans text-[13px] text-[#063522]/75 leading-relaxed">
                    Partners driving meaningful change.
                  </p>
                </div>
              </motion.div>

              <div className="hidden sm:block w-[1px] h-16 bg-[#9A7B32]/30" />

              {/* Point 3 */}
              <motion.div
                variants={fadeUpVariant(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-5 group w-[180px] sm:w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF5E6]/80 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(107,74,22,0.1)] border border-[#9A7B32]/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FFF] group-hover:border-[#9A7B32]/50">
                  <Globe2 className="w-5 h-5 text-[#063522] stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-[15px] lg:text-[16px] font-bold text-[#063522] mb-1.5">
                    Lasting Impact
                  </h4>
                  <p className="font-sans text-[13px] text-[#063522]/75 leading-relaxed">
                    Support for a more conscious and inclusive world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ========================================================
              CENTRAL: LARGE HANDSHAKE & CTAs
              ======================================================== */}
          <div className="w-full lg:w-[20%] flex flex-col items-center justify-center relative z-20 shrink-0 mt-10 lg:mt-0 lg:ml-8 lg:pt-16">
            
            {/* Handshake centered in the orbital system */}
            <motion.div
              variants={scaleVariant(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#FAF5E6] shadow-[0_20px_50px_rgba(107,74,22,0.2)] flex items-center justify-center border border-[#9A7B32]/25 z-10 hover:scale-105 transition-transform duration-500"
            >
              <Handshake className="w-16 h-16 sm:w-20 sm:h-20 text-[#063522] stroke-[1.0]" />
              {/* Very inner gold ring */}
              <div className="absolute inset-2 sm:inset-3 rounded-full border border-[#9A7B32]/15" />
            </motion.div>

            {/* Buttons Below Handshake */}
            <motion.div
              variants={fadeUpVariant(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-5 mt-16 w-full max-w-[400px] relative z-20"
            >
              <Link
                href="/sponsors"
                className="group relative flex items-center justify-between w-full h-[58px] sm:h-[64px] px-8 rounded-xl bg-[#063522] text-[#F5CB62] font-sans text-[13px] font-semibold tracking-[0.15em] uppercase shadow-lg border border-[#063522] hover:bg-[#08452d] hover:border-[#F5CB62]/50 hover:-translate-y-[2px] transition-all duration-400"
              >
                <span>VIEW SPONSORS</span>
                <ArrowRight className="w-5 h-5 text-[#F5CB62] group-hover:translate-x-1.5 transition-transform duration-400" />
              </Link>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center justify-between w-full h-[58px] sm:h-[64px] px-8 rounded-xl bg-transparent text-[#063522] font-sans text-[13px] font-semibold tracking-[0.15em] uppercase border border-[#063522] hover:bg-[#063522]/5 hover:-translate-y-[2px] transition-all duration-400"
              >
                <span>BECOME A SPONSOR</span>
                <ArrowRight className="w-5 h-5 text-[#063522] group-hover:translate-x-1.5 transition-transform duration-400" />
              </button>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT: LARGE ORGANIC AUROVILLE IMAGE
              ======================================================== */}
          <motion.div
            variants={imageRevealVariant(0.45)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-[35%] relative flex justify-center lg:justify-end mt-16 lg:mt-0 z-20 shrink-0"
          >
            {/* 15. Large organic circular/arched composition */}
            <motion.div 
              className="relative w-full max-w-[650px] h-[500px] lg:h-[600px] xl:h-[650px] overflow-hidden bg-[#063522]/10"
              style={{
                y: parallaxY,
                borderRadius: "300px 300px 40px 40px", // Classic grand arch shape
                boxShadow: "0 30px 60px rgba(107, 74, 22, 0.25)"
              }}
            >
              <Image
                src="/images/agenda/auroville-landscape.jpg"
                alt="Auroville environment partnership"
                fill
                sizes="(max-width: 1280px) 100vw, 650px"
                className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              
              {/* Natural, Bright Image Treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4A33B]/20 via-[#F5CB62]/5 to-transparent mix-blend-color pointer-events-none" />
              
              {/* Inner Premium Border */}
              <div className="absolute inset-0 rounded-[300px_300px_40px_40px] border-[1px] border-white/30 pointer-events-none" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>

      {/* Sponsor Modal */}
      <SponsorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
