"use client";

import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingBrochureButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-700">
      <a
        href="/Emerge Aura Brochure.pdf"
        download="Emerge Aura Brochure.pdf"
        className="group relative flex items-center gap-3 bg-[#063522] hover:bg-[#042416] text-[#F5CB62] p-4 sm:px-6 sm:py-4 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.3)] border border-[#F5CB62]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(245,203,98,0.25)]"
        aria-label="Download Emerge Auro Brochure"
      >
        <FileText className="w-6 h-6 shrink-0" />
        
        {/* Expanded text block for desktop */}
        <div className="hidden sm:flex flex-col items-start pr-2">
          <span className="text-[10px] uppercase tracking-widest text-[#F5CB62]/80 font-semibold leading-none mb-1.5">
            More Information
          </span>
          <span className="text-[14.5px] font-sans font-bold leading-none text-[#FAF5E6]">
            Download Brochure
          </span>
        </div>
        
        {/* Download Icon (animated on hover) */}
        <div className="w-8 h-8 rounded-full bg-[#F5CB62]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5CB62] group-hover:text-[#063522] transition-colors duration-300">
          <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </div>
        
        {/* Mobile Tooltip indicator */}
        <div className="absolute -top-10 right-0 sm:hidden opacity-0 group-hover:opacity-100 transition-opacity bg-[#063522] text-[#F5CB62] text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-lg border border-[#F5CB62]/20">
          Download Brochure
        </div>
      </a>
    </div>
  );
}
