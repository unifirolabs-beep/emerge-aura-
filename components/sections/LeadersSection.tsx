"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    id: "ashok-kumar",
    name: "Dr CK Ashok Kumar",
    role: "Chairperson, EMERGE AURO 2026 / Founder, First World Community",
    bio: "Dr. CK Ashok Kumar comes from one of Tamil Nadu's pioneering business families, known for making everyday products accessible and affordable to millions of Indians. He later spent two decades in spiritual practice at Tiruvannamalai.",
    image: "/leaders/ashok kumar.png",
    layout: "portrait-left",
  },
  {
    id: "jayanti-ravi",
    name: "Dr. Jayanti S. Ravi",
    role: "IAS Secretary,\nAuroville Foundation",
    bio: "Dr. Jayanti S. Ravi has served as Secretary of the Auroville Foundation since July 2021, as chief executive and administrative head of the township. A 1991-batch IAS officer of the Gujarat cadre, she brings three decades of government leadership across healthcare, education and rural development...",
    image: "/leaders/jayanti s ravi.png",
    layout: "portrait-right",
  },
  {
    id: "shivakiran",
    name: "Dr Shivakiran Makam",
    role: "Co-Convenor, EMERGE AURO 2026 / Director, Strategy & Collaboration, Section Infin-8 Foundation",
    bio: "Dr Shivakiran Makam serves as Director for Strategy & Collaboration at Section Infin-8 Foundation. He built and led AIC-SKU, an Atal Incubation Centre, as CEO for over three years, and co-chaired the Startup20 Alliance Group under India's G20 presidency...",
    image: "/leaders/shivakiran.png",
    layout: "portrait-left",
  },
];

export default function LeadersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Intro animations
  const introVariant = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  });

  return (
    <section
      ref={sectionRef}
      id="leaders"
      aria-label="Leaders behind Emerge Auro"
      className="relative w-full bg-[#032F20] text-[#F5EBD5] pt-[120px] pb-[160px] overflow-hidden select-none"
    >
      {/* ========================================================
          BACKGROUND (Plain Deep Forest Green with Subtle Gold Orbits)
          ======================================================== */}
      {/* Subtle Orbital Lines (kept per instructions to retain if part of design) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.25]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full border border-[#D4A63A] opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1200px] h-[1200px] sm:w-[1800px] sm:h-[1800px] rounded-full border border-[#D4A63A] opacity-15"
        />
        {/* Subtle gold dots */}
        <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#D4A63A] opacity-60" />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-[#D4A63A] opacity-50" />
      </div>

      {/* ========================================================
          1. SECTION INTRO
          ======================================================== */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center mb-24 md:mb-32">
        <motion.div
          variants={introVariant(0.0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-12 sm:w-20 h-[1px] bg-[#D4A63A]/60" />
          <span className="text-[11px] sm:text-[13px] font-sans font-semibold tracking-[0.25em] text-[#D4A63A] uppercase">
            VISIONARIES · BUILDERS · CHANGE-MAKERS
          </span>
          <span className="w-12 sm:w-20 h-[1px] bg-[#D4A63A]/60" />
        </motion.div>

        <motion.h2
          variants={introVariant(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-editorial text-[48px] sm:text-[72px] lg:text-[96px] font-medium leading-[1.0] text-[#F5EBD5] tracking-tight mb-6"
        >
          Leaders behind <br className="hidden sm:block" />
          <span className="text-[#D4A63A]">Emerge Auro</span>
        </motion.h2>

        <motion.p
          variants={introVariant(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-sans text-[18px] sm:text-[20px] lg:text-[22px] text-[#F5EBD5]/75 font-normal leading-relaxed max-w-[650px]"
        >
          Guiding with wisdom, building with purpose, creating a more conscious tomorrow.
        </motion.p>
      </div>

      {/* ========================================================
          2. LEADERS (Alternating Storytelling Layout)
          ======================================================== */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col gap-y-[100px] md:gap-y-[160px]">
        {/* Subtle vertical connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4A63A]/15 to-transparent hidden lg:block -translate-x-1/2 z-0" />

        {leaders.map((leader) => {
          const isLeft = leader.layout === "portrait-left";

          return (
            <div
              key={leader.id}
              className={`relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                !isLeft ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Leader Portrait */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 flex justify-center group"
              >
                <motion.div
                  style={{ y: parallaxY }}
                  className="relative w-[260px] h-[300px] sm:w-[320px] sm:h-[380px] lg:w-[420px] lg:h-[480px] transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                >
                  <div
                    className="absolute inset-0 overflow-hidden border border-[#D4A63A]/40 transition-colors duration-500 group-hover:border-[#D4A63A]/80 shadow-[0_0_80px_rgba(212,166,58,0.10)]"
                    style={{
                      borderRadius: "40% 50% 45% 50% / 50% 45% 50% 40%",
                    }}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 1024px) 320px, 420px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#032F20]/40 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Leader Text */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full lg:w-1/2 flex flex-col text-center lg:text-left ${
                  !isLeft ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                }`}
              >
                {/* Name */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                  className="font-editorial text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-[#F5EBD5] mb-2 transition-colors duration-500 group-hover:text-[#D4A63A]"
                >
                  {leader.name}
                </motion.h3>

                {/* Role */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                  className="font-sans text-[16px] lg:text-[18px] text-[#D4A63A] font-semibold tracking-wide whitespace-pre-line"
                >
                  {leader.role}
                </motion.p>

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className={`w-16 h-[1px] bg-[#D4A63A]/40 my-6 ${
                    !isLeft ? "origin-right mx-auto lg:ml-auto lg:mr-0" : "origin-left mx-auto lg:mr-auto lg:ml-0"
                  }`}
                />

                {/* Biography */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                  className="font-sans text-[16px] sm:text-[17px] lg:text-[18px] text-[#F5EBD5]/75 font-normal leading-[1.7] max-w-[560px] mb-8"
                >
                  {leader.bio}
                </motion.p>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
