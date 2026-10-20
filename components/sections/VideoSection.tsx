"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Create a smooth parallax effect for the video container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#050e0b] py-20 sm:py-32 overflow-hidden flex flex-col items-center justify-center border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D8B56A]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16 w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe6] mb-4">
            Experience <span className="italic text-[#e3b873]">EMERGE AURO</span>
          </h2>
          <p className="text-[#a8a192] font-sans text-sm sm:text-base max-w-2xl mx-auto uppercase tracking-[0.15em]">
            A glimpse into the journey of innovation and impact
          </p>
        </motion.div>

        {/* Video Container - responsive on mobile, tablet, and PC */}
        <motion.div
          style={{ opacity }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(216,181,106,0.15)] overflow-hidden"
        >
          {/* YouTube Embed: Autoplay, Muted, Loop, No Controls */}
          <iframe
            src="https://www.youtube.com/embed/l4Mz8i15Tw8?autoplay=1&mute=1&loop=1&playlist=l4Mz8i15Tw8&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Emerge Auro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full pointer-events-none"
          ></iframe>
          
          {/* Inner overlay for styling (vignette effect) */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
