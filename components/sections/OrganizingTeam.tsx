"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform, animate, MotionValue } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Team Data based on prompt requirements
const organizers = [
  { 
    name: "Vishwas US", 
    role: "Founder Director", 
    org: "Section Infin8 Foundation", 
    image: "/organizers/vishwas us.png", 
    gradient: "from-[#FF9A3D] to-[#FFC247]" 
  },
  { 
    name: "Desika Prabhakar", 
    role: "Founder, Director", 
    org: "DPurpose Foundation", 
    image: "/organizers/desika prabhakar.png", 
    gradient: "from-[#FF5A6E] to-[#FF8A6B]" 
  },
  { 
    name: "Aravind C Kumar", 
    role: "CEO", 
    org: "Section Infin8 Foundation", 
    image: "/organizers/aravind.png", 
    gradient: "from-[#00B894] to-[#7DFF70]" 
  },
  { 
    name: "Vishwanathan", 
    role: "FWC", 
    org: "", 
    image: "/organizers/vishwnathan.png", 
    gradient: "from-[#3157F5] to-[#6558FF]" 
  },
  { 
    name: "Ashok Reddy", 
    role: "FWC", 
    org: "", 
    image: "/organizers/ashok reddy.png", 
    gradient: "from-[#A83DFF] to-[#D45BFF]" 
  },
  { 
    name: "Senthil K Kumar", 
    role: "Strategic Advisor", 
    org: "Section Infin8 Foundation", 
    image: "/organizers/senthil kumar.png", 
    gradient: "from-[#F33D82] to-[#FF765E]" 
  },
  { 
    name: "M. Kishore Menon", 
    role: "Veteran Brand strategist,", 
    org: "Board member of Biosfera Foundation &\nValley of Words Foundation Trust", 
    image: "/organizers/kishore.png", 
    gradient: "from-[#24B96F] to-[#C7F23A]" 
  },
];

export default function OrganizingTeam() {
  // Carousel logic
  const x = useMotionValue(0);
  const isHovered = useRef(false);
  const isAnimating = useRef(false);
  
  // Fixed dimensions for perfect infinite scrolling math
  const cardWidth = 250; 
  const gap = 24; 
  const itemWidth = cardWidth + gap;
  const contentWidth = itemWidth * organizers.length;
  const speed = 40; // pixels per second
  
  // Duplicate for seamless looping
  const duplicatedOrganizers = [...organizers, ...organizers];

  // Performant CSS-based animation loop
  useAnimationFrame((time, delta) => {
    // Respect hover pause and programmatic jumps
    if (isHovered.current || isAnimating.current) return;
    
    let currentX = x.get() - (speed * (delta / 1000));
    // Wrap instantly when the first set is fully off-screen
    if (currentX <= -contentWidth) {
      currentX += contentWidth;
    }
    x.set(currentX);
  });

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    let currentX = x.get();
    const jumpAmount = itemWidth * 2; // Jump 2 cards
    
    // Wrap instantly if we are too close to the right edge to jump backwards
    if (currentX + jumpAmount > 0) {
      currentX -= contentWidth;
      x.set(currentX);
    }
    
    animate(x, currentX + jumpAmount, {
      type: "tween",
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => { isAnimating.current = false; }
    });
  };

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    let currentX = x.get();
    const jumpAmount = itemWidth * 2;
    
    // Wrap instantly if we are too close to the left edge
    if (currentX - jumpAmount < -contentWidth) {
      currentX += contentWidth;
      x.set(currentX);
    }
    
    animate(x, currentX - jumpAmount, {
      type: "tween",
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => { isAnimating.current = false; }
    });
  };

  // 4-step pagination logic based on current X position
  const activeIndex = useTransform(x, (currentX) => {
    const absX = Math.abs(currentX) % contentWidth;
    return Math.floor((absX / contentWidth) * 4);
  });

  // Reveal variants
  const revealUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <section
      id="organizing-team"
      aria-label="Organizing Team"
      className="relative w-full bg-[#032F20] py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* ========================================================
          1. SECTION HEADER
          ======================================================== */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.h2
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="font-editorial text-[48px] sm:text-[64px] font-semibold leading-tight text-[#E5C15A] mb-4"
        >
          Organizing Team
        </motion.h2>
        
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="font-sans text-[16px] sm:text-[18px] text-[#F5EBD5]/80 font-normal leading-relaxed max-w-[600px] mx-auto"
        >
          Meet the people driving Emerge Auro forward with vision, expertise and dedication.<br className="hidden sm:block" />
          Together, we build a more conscious and inclusive tomorrow.
        </motion.p>
        
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="w-[80px] h-[1px] bg-[#D4A63A]" />
        </motion.div>
      </div>

      {/* ========================================================
          2. CAROUSEL AREA
          ======================================================== */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative w-full z-20"
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous organizing team members"
          className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#032F20]/90 border border-[#D4A63A] flex items-center justify-center group hover:bg-[#D4A63A] transition-colors duration-300 active:scale-95 shadow-lg backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-[#D4A63A] group-hover:text-[#032F20] transition-colors duration-300" />
        </button>
        
        <button
          onClick={handleNext}
          aria-label="Next organizing team members"
          className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#032F20]/90 border border-[#D4A63A] flex items-center justify-center group hover:bg-[#D4A63A] transition-colors duration-300 active:scale-95 shadow-lg backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-[#D4A63A] group-hover:text-[#032F20] transition-colors duration-300" />
        </button>

        {/* Carousel Track */}
        <div className="relative w-full overflow-x-hidden py-8">
          <motion.div
            style={{ x }}
            className="flex gap-[24px] w-max px-4 sm:px-[10vw]"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
            onTouchStart={() => (isHovered.current = true)}
            onTouchEnd={() => (isHovered.current = false)}
          >
            {duplicatedOrganizers.map((organizer, idx) => (
              <div 
                key={idx} 
                className={`relative w-[250px] h-[380px] shrink-0 rounded-[16px] overflow-hidden bg-gradient-to-br ${organizer.gradient} group shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition-all duration-400 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
              >
                {/* Subtle top darkening for text readability extended for longer text */}
                <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />
                
                {/* Text Content */}
                <div className="relative z-20 p-5 flex flex-col pt-5">
                  <h3 className="text-[#FFFFFF] font-editorial text-[20px] font-semibold leading-tight mb-1 drop-shadow-md">
                    {organizer.name}
                  </h3>
                  <p className="text-white/95 text-[13px] font-sans font-medium leading-[1.3] drop-shadow-md">
                    {organizer.role}
                  </p>
                  {organizer.org && (
                    <p className="text-white/85 text-[11.5px] font-sans leading-[1.35] mt-1 italic drop-shadow-md whitespace-pre-line">
                      {organizer.org}
                    </p>
                  )}
                </div>

                {/* Portrait container reduced to 60% height to prevent overlapping with long text */}
                <div className="absolute bottom-0 left-0 w-full h-[60%] z-10 transition-transform duration-500 ease-out group-hover:scale-[1.05] origin-bottom pointer-events-none">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    fill
                    sizes="250px"
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2, 3].map((i) => (
            <PaginationDot key={i} i={i} activeIndex={activeIndex} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PaginationDot({ i, activeIndex }: { i: number; activeIndex: MotionValue<number> }) {
  const width = useTransform(activeIndex, (val: number) => (val === i ? "32px" : "16px"));
  const backgroundColor = useTransform(activeIndex, (val: number) =>
    val === i ? "#D4A63A" : "rgba(212,166,58,0.30)"
  );
  return (
    <motion.div
      style={{ width, backgroundColor }}
      className="h-[6px] rounded-full transition-all duration-300 ease-out"
    />
  );
}
