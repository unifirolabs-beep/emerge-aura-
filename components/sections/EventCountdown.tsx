"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Conclave Date: 28 October 2026, 09:00:00 IST (Asia/Kolkata)
const CONCLAVE_TIMESTAMP = new Date("2026-10-28T09:00:00+05:30").getTime();

interface TimeValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isCompleted: boolean;
}

function calculateTimeLeft(): TimeValues {
  const now = Date.now();
  const diff = CONCLAVE_TIMESTAMP - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isCompleted: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isCompleted: false,
  };
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeValues>({
    days: "64",
    hours: "23",
    minutes: "03",
    seconds: "49",
    isCompleted: false,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setHasMounted(true);
      // Initial dynamic calculation
      setTimeLeft(calculateTimeLeft());
    }, 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(mountTimer);
      clearInterval(timer);
    };
  }, []);

  const countdownUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section
      aria-label="Conclave Introduction and Countdown"
      className="relative w-full bg-[#F5F1E8] text-[#112019] py-24 sm:py-28 lg:py-36 overflow-hidden transition-colors"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Subtle Short Gold Accent Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="w-10 sm:w-12 h-[1.5px] bg-[#C59B4E] mb-5 origin-center"
            aria-hidden="true"
          />

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.28em] text-[#8C733E] uppercase select-none"
          >
            THE MOMENT IS NEAR
          </motion.span>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="font-editorial font-medium text-[#112019] text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.02] tracking-tight mt-5 mb-6 text-balance"
          >
            History is being made and you need to be part of the moment.
          </motion.h2>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="font-sans font-normal text-[#26352D] text-base sm:text-lg md:text-[18px] leading-relaxed max-w-[700px] text-balance opacity-90"
          >
            India&apos;s first Conscious Capital Conclave is almost here. Be part of
            it — don&apos;t miss your chance.
          </motion.p>

          {/* Live Editorial Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="w-full mt-14 sm:mt-16 lg:mt-20 pt-8"
            role="region"
            aria-label="Event countdown to October 28, 2026"
          >
            {timeLeft.isCompleted ? (
              <div className="py-6 px-8 rounded-xl border border-[#C59B4E]/30 bg-[#EFE9DD]/60">
                <span className="font-editorial text-3xl sm:text-4xl text-[#112019] tracking-wider uppercase">
                  EMERGE AURO IS HERE
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center max-w-3xl mx-auto relative">
                {countdownUnits.map((unit, idx) => (
                  <div
                    key={unit.label}
                    className="relative flex flex-col items-center justify-center py-4 px-2 sm:px-4"
                  >
                    {/* Number Display */}
                    <div className="font-editorial text-[50px] sm:text-[62px] md:text-[68px] lg:text-[74px] font-normal leading-none text-[#112019] tracking-tight select-none">
                      {hasMounted ? unit.value : unit.value}
                    </div>

                    {/* Unit Label */}
                    <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.24em] text-[#5B6E63] uppercase mt-2 select-none">
                      {unit.label}
                    </span>

                    {/* Desktop Vertical Divider between items (except last) */}
                    {idx < 3 && (
                      <div
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 lg:h-14 bg-[rgba(20,30,25,0.15)]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Mobile 2x2 Divider: Vertical divider for odd items on mobile */}
                    {idx % 2 === 0 && (
                      <div
                        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[rgba(20,30,25,0.15)]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Mobile 2x2 Divider: Horizontal divider between row 1 and row 2 */}
                    {idx < 2 && (
                      <div
                        className="md:hidden absolute bottom-0 left-4 right-4 h-[1px] bg-[rgba(20,30,25,0.1)]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
