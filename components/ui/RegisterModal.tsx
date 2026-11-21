"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Ticket, Handshake, Rocket, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PASSES_STALLS_REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms";

export const B2B_REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/FROM/formperma/CiZNCLngp4GIMES69xsXFTyONhnzAebnN61MZRRTf9g";

export const STARTUP_PITCH_REGISTRATION_URL =
  "https://forms.zohopublic.in/infosectio1/form/EmergePitchFest2026StartupRegistration1/formperma/nEA6Ws3ius3a-s-D1AiygAMnBBNwmHcT4nW6JPlOcCc";

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open (both document.body and document.documentElement)
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalBodyTouchAction;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden overscroll-none"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050E0B]/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Box Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            ref={modalContentRef}
            data-lenis-prevent
            className="relative w-full max-w-xl bg-[#FAF7F0] rounded-[28px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-[#E7DEC8] text-[#0F2D25] z-10 my-auto max-h-[90vh] overflow-y-auto overscroll-contain"
          >
            {/* Subtle background ambient lights */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#073B2A]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close registration modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#0F2D25]/5 hover:bg-[#0F2D25]/10 text-[#0F2D25] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-center mb-6 pt-2">
              <span className="text-[11px] font-sans font-bold tracking-[0.24em] text-[#C89B3C] uppercase block mb-1.5">
                EMERGE AURO REGISTRATION
              </span>
              <h2 className="font-editorial text-[30px] sm:text-[36px] font-semibold text-[#073B2A] tracking-tight leading-tight mb-2">
                Choose Registration
              </h2>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#17352B]/70 max-w-md mx-auto">
                Select your category to proceed with booking passes, stalls, B2B meetings, or pitching to investors.
              </p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Option 1: Passes & Stall Registration */}
              <a
                href={PASSES_STALLS_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E7DEC8] hover:border-[#C89B3C] hover:shadow-[0_12px_32px_rgba(7,59,42,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#073B2A]/5 border border-[#073B2A]/10 flex items-center justify-center text-[#073B2A] group-hover:bg-[#073B2A] group-hover:text-[#F7F2E8] transition-colors shrink-0">
                  <Ticket className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-editorial text-[19px] sm:text-[20px] font-bold text-[#073B2A] group-hover:text-[#C89B3C] transition-colors">
                      Passes & Stall Registration
                    </h3>
                  </div>
                  <p className="text-[13px] font-sans text-[#17352B]/75 leading-relaxed">
                    Book Visitor, Delegate, Startup Passes, or open-air exhibition stalls at Bharat Nivas, Auroville.
                  </p>
                </div>
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#073B2A]/50 group-hover:text-[#C89B3C] group-hover:bg-[#C89B3C]/10 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Option 2: B2B Registration */}
              <a
                href={B2B_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-white border border-[#E7DEC8] hover:border-[#C89B3C] hover:shadow-[0_12px_32px_rgba(7,59,42,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 border border-[#C89B3C]/20 flex items-center justify-center text-[#996D18] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors shrink-0">
                    <Handshake className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-editorial text-[19px] sm:text-[20px] font-bold text-[#073B2A] group-hover:text-[#C89B3C] transition-colors">
                        B2B Registration
                      </h3>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#C89B3C] bg-[#C89B3C]/10 px-2 py-0.5 rounded-full">
                        Networking
                      </span>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        Early Bird
                      </span>
                    </div>
                    <p className="text-[13px] font-sans text-[#17352B]/85 leading-relaxed">
                      Round-table rotations where startups, MSMEs, corporates and buyers meet in groups of five for business conversations. Open to businesses from any sector.
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#073B2A]/50 group-hover:text-[#C89B3C] group-hover:bg-[#C89B3C]/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Info box below B2B Registration */}
                <div className="bg-[#FAF7F0] rounded-xl p-3 border border-[#E7DEC8] text-[12px] font-sans text-[#17352B]/85 space-y-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#996D18] shrink-0 mt-0.5" />
                    <span>
                      <strong>Early bird: ₹1,999 + GST</strong> till 25 Nov 2026, 11:59 PM IST. ₹3,999 + GST from 26 Nov 2026.
                    </span>
                  </div>
                  <p className="text-[#17352B]/75 pl-6 leading-relaxed">
                    Includes Day 1 B2B round tables at Bhumika Hall, Bharat Nivas, Auroville, plus meals and a welcome kit.
                  </p>
                </div>
              </a>

              {/* Option 3: Startup Pitching Registration */}
              <a
                href={STARTUP_PITCH_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-white border border-[#E7DEC8] hover:border-[#073B2A] hover:shadow-[0_12px_32px_rgba(7,59,42,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#073B2A]/10 border border-[#073B2A]/20 flex items-center justify-center text-[#073B2A] group-hover:bg-[#073B2A] group-hover:text-[#FAF7F0] transition-colors shrink-0">
                    <Rocket className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-editorial text-[19px] sm:text-[20px] font-bold text-[#073B2A] group-hover:text-[#C89B3C] transition-colors">
                        Startup Pitching
                      </h3>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#073B2A] bg-[#073B2A]/10 px-2 py-0.5 rounded-full">
                        Pitch to Investors
                      </span>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        Free to Apply
                      </span>
                    </div>
                    <p className="text-[13px] font-sans text-[#17352B]/85 leading-relaxed">
                      Shortlisted startups pitch directly to investors at PitchFest. Open to revenue-generating startups creating social or environmental impact. Applying is completely free.
                    </p>
                  </div>
                  <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-[#FAF7F0] flex items-center justify-center text-[#073B2A]/50 group-hover:text-[#073B2A] group-hover:bg-[#073B2A]/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Clarification banner below Startup Pitching */}
                <div className="bg-[#FAF7F0] rounded-xl p-3.5 border border-[#E7DEC8] text-[12px] font-sans text-[#17352B]/85 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#073B2A] shrink-0 mt-0.5" />
                    <span><strong>Top 25 teams</strong> will be shortlisted from applications.</span>
                  </div>
                  <p className="text-[#17352B]/80 pl-6 leading-relaxed">
                    Shortlisted teams confirm their pitching slot by paying <strong>₹3,999 + GST</strong>, which includes meals and event facilities.
                  </p>
                  <p className="text-[#17352B]/75 pl-6 leading-relaxed text-[11.5px]">
                    Conditional fee waivers are available for strong startups with a valid reason. Request one in the application form.
                  </p>
                  <div className="pl-6 pt-1 flex items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-bold bg-[#C89B3C]/15 text-[#855B14] border border-[#C89B3C]/35">
                      ⏰ Last date to apply: 28 November
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Bottom Note */}
            <p className="text-[11.5px] font-sans text-center text-[#17352B]/50 mt-6">
              Need assistance? Reach out to our team via the{" "}
              <a
                href="/help"
                onClick={onClose}
                className="text-[#073B2A] underline underline-offset-2 hover:text-[#C89B3C]"
              >
                Help Desk
              </a>
              .
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
