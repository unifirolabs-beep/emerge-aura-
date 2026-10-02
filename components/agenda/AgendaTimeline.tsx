"use client";

import { motion } from "motion/react";
import { conclaveJourneyData } from "@/data/agenda";

export default function AgendaTimeline() {
  const days = conclaveJourneyData.days;

  return (
    <div className="w-full mt-14 sm:mt-20">
      {/* ========================================================
          DESKTOP HORIZONTAL CONNECTED TIMELINE (●────────────●────────────●)
          ======================================================== */}
      <div className="hidden lg:block relative max-w-[1240px] mx-auto px-12 mb-10">
        {/* Animated Connecting Gold Line */}
        <div className="relative w-full h-[1.5px] bg-[#C9A15B]/25">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[#C9A15B] origin-left"
          />

          {/* 3 Nodes Aligned with Cards */}
          <div className="absolute inset-0 flex items-center justify-between">
            {days.map((day, idx) => (
              <motion.div
                key={day.dayNumber}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.25, ease: "easeOut" }}
                className="relative -top-[4px] flex items-center justify-center"
              >
                {/* Glowing Outer Ring */}
                <div className="absolute w-6 h-6 rounded-full bg-[#C9A15B]/30 animate-ping opacity-75" />
                {/* Gold Center Node */}
                <div className="w-3.5 h-3.5 rounded-full bg-[#C9A15B] border-2 border-[#032D1D] shadow-[0_0_12px_rgba(201,161,91,0.9)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Day Summaries Under the Nodes */}
        <div className="grid grid-cols-3 gap-8 mt-8 text-center">
          {days.map((day, idx) => (
            <motion.div
              key={day.dayNumber}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 + idx * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center px-4"
            >
              <h4 className="font-editorial text-[22px] sm:text-[25px] font-normal text-[#F4EFE6] leading-tight mb-1">
                {day.dayLabel} — {day.title.charAt(0) + day.title.slice(1).toLowerCase()}
              </h4>
              <p className="font-sans text-[13px] text-[#E5DED2]/85 font-normal mb-1">
                {day.date}, {day.location}.
              </p>
              <p className="font-sans text-[12.5px] text-[#C9A15B] font-medium leading-snug">
                Theme: {day.theme}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================
          MOBILE / TABLET VERTICAL SUMMARY LIST
          ======================================================== */}
      <div className="lg:hidden flex flex-col gap-6 max-w-md mx-auto px-4 mt-8">
        {days.map((day, idx) => (
          <motion.div
            key={day.dayNumber}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-[#C9A15B]/25"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#C9A15B] shrink-0 mt-1 shadow-[0_0_8px_rgba(201,161,91,0.8)]" />
            <div>
              <h4 className="font-editorial text-xl text-[#F4EFE6] font-normal leading-tight">
                {day.dayLabel} — {day.title}
              </h4>
              <p className="font-sans text-xs text-[#E5DED2]/80 mt-0.5">
                {day.date}, {day.location}
              </p>
              <p className="font-sans text-xs text-[#C9A15B] font-medium mt-1">
                Theme: {day.theme}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
