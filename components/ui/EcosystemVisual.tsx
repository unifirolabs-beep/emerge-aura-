"use client";

import Image from "next/image";

const ICONS = [
  "/icons/startups.png",
  "/icons/industries.png",
  "/icons/investors.png",
  "/icons/media.png",
  "/icons/policymakers.png",
  "/icons/students.png",
  "/icons/investors.png", // Added 7th as per requirement of "seven surrounding circular icon nodes"
];

export default function EcosystemVisual() {
  return (
    <>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-container {
          animation: orbit 60s linear infinite;
        }
        .orbit-item {
          animation: counterOrbit 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-container, .orbit-item {
            animation: none !important;
          }
        }
      `}</style>

      {/* Main Circular Image Frame matching existing Matrimandir styling */}
      <div className="relative w-full h-full bg-[#FAF7F0] overflow-hidden rounded-full border-[2.5px] border-[#C9A15B]/65 shadow-[0_24px_70px_rgba(16,37,29,0.18)] flex items-center justify-center">
        
        {/* Concentric Background Rings */}
        <div className="absolute w-[35%] h-[35%] rounded-full border-[1px] border-[#C9A15B]/20 pointer-events-none" />
        <div className="absolute w-[55%] h-[55%] rounded-full border-[1px] border-[#C9A15B]/20 pointer-events-none" />
        <div className="absolute w-[75%] h-[75%] rounded-full border-[1.5px] border-[#D4A63A]/80 pointer-events-none" />
        <div className="absolute w-[95%] h-[95%] rounded-full border-[1px] border-[#C9A15B]/15 pointer-events-none" />

        {/* Orbit System */}
        <div className="absolute w-[75%] h-[75%] orbit-container pointer-events-none">
          {ICONS.map((icon, i) => {
            const angle = (i * 360) / 7;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* Node positioned at the top edge of the orbit container */}
                <div className="absolute top-0 left-1/2 w-[24%] sm:w-[22%] aspect-square -translate-x-1/2 -translate-y-1/2">
                  {/* Static counter-rotation to make it upright initially */}
                  <div className="w-full h-full" style={{ transform: `rotate(-${angle}deg)` }}>
                    {/* Dynamic counter-rotation to keep it upright during orbit */}
                    <div className="orbit-item w-full h-full bg-[#FDFBF7] rounded-full border-[1.5px] border-[#D4A63A] shadow-md flex items-center justify-center relative p-[15%]">
                      {/* Secondary inner ring as requested */}
                      <div className="absolute inset-1 rounded-full border-[0.5px] border-[#D4A63A]/40" />
                      <Image 
                        src={icon} 
                        alt="Ecosystem Icon" 
                        fill 
                        className="object-contain p-[20%] relative z-10" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Gold Node Point on the Orbit Line (Optional decorative dots) */}
                <div className="absolute top-0 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4A63A] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(212,166,58,0.8)]" />
              </div>
            );
          })}
        </div>

        {/* Stationary Center Logo */}
        <div className="absolute w-[42%] sm:w-[38%] aspect-square bg-[#FDFBF7] rounded-full border-[2px] border-[#C9A15B] shadow-xl flex items-center justify-center z-20">
          <div className="absolute inset-2 rounded-full border border-[#D4A63A]/30" />
          <div className="relative w-[75%] h-[75%] flex items-center justify-center">
            <Image
              src="/logo.webp"
              alt="Emerge Auro Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </>
  );
}
