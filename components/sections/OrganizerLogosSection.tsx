"use client";

import Image from "next/image";
import { motion } from "motion/react";

const organizerLogos = [
  {
    src: "/organizerslogos/Auroville Foundation.png",
    alt: "Auroville Foundation",
    name: "Auroville Foundation",
  },
  {
    src: "/organizerslogos/D Purpose.png",
    alt: "D Purpose",
    name: "D Purpose",
  },
  {
    src: "/organizerslogos/First World Community.png",
    alt: "First World Community",
    name: "First World Community",
  },
  {
    src: "/organizerslogos/Pondicherry University.png",
    alt: "Pondicherry University",
    name: "Pondicherry University",
  },
  {
    src: "/organizerslogos/Section Infin8 Foundation.png",
    alt: "Section Infin8 Foundation",
    name: "Section Infin8 Foundation",
  },
  {
    src: "/organizerslogos/UTTHAN.png",
    alt: "UTTHAN",
    name: "UTTHAN",
  },
  {
    src: "/organizerslogos/Village Technology School.png",
    alt: "Village Technology School",
    name: "Village Technology School",
  },
];

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function OrganizerLogosSection() {
  return (
    <section
      id="organizer-logos"
      aria-label="Organizers"
      className="relative w-full bg-[#F7F2E8] text-[#17352B] py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-8%] right-[-4%] w-[500px] h-[500px] rounded-full border-[0.5px] border-[#C89B3C]/20 opacity-40" />
        <div className="absolute bottom-[-10%] left-[-6%] w-[600px] h-[600px] rounded-full border-[0.5px] border-[#C89B3C]/15 opacity-30" />
        <div className="absolute top-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#C89B3C] opacity-35" />
        <div className="absolute bottom-[25%] right-[12%] w-2 h-2 rounded-full bg-[#D4A94F] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE_CUBIC }}
          className="text-center flex flex-col items-center mb-14 sm:mb-18"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <span className="w-8 sm:w-14 h-[1px] bg-[#C89B3C]/60" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] text-[#C89B3C] uppercase">
              PRESENTED BY
            </span>
            <span className="w-8 sm:w-14 h-[1px] bg-[#C89B3C]/60" />
          </div>

          {/* Title */}
          <h2 className="font-editorial text-[42px] sm:text-[56px] lg:text-[68px] font-semibold text-[#073B2A] tracking-tight leading-none mb-4">
            Organ<span className="text-[#C89B3C]">izer</span>
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[15px] sm:text-[17px] text-[#17352B]/70 max-w-[580px] mx-auto leading-relaxed">
            A collective of institutions and communities co-creating EMERGE AURO — from innovation and education to enterprise and social impact.
          </p>

          {/* Divider */}
          <div className="w-16 h-[1.5px] bg-[#C89B3C]/50 mx-auto mt-6" />
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: EASE_CUBIC }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {organizerLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: EASE_CUBIC,
              }}
              className="group relative bg-white rounded-[18px] border border-[#E7DEC8] shadow-[0_4px_20px_rgba(7,59,42,0.03)] hover:shadow-[0_12px_36px_rgba(7,59,42,0.08)] hover:border-[#C89B3C]/60 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col items-center justify-center gap-3 aspect-[4/3]"
            >
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />

              {/* Logo Image */}
              <div className="relative w-full flex-1 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
                  priority={index < 4}
                />
              </div>

              {/* Logo Name */}
              <p className="relative z-10 text-[11px] sm:text-[12px] font-sans font-semibold text-[#17352B]/60 tracking-wide text-center leading-tight line-clamp-2 group-hover:text-[#C89B3C] transition-colors duration-300">
                {logo.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
