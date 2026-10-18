import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="relative border-t border-[#073B2A]/10 bg-[#F5F1E8] pt-16 sm:pt-20 pb-12 px-6 sm:px-10 lg:px-14 text-[#073B2A] select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========================================================
            MAIN MULTI-COLUMN STANDARD FOOTER GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Column 1: Brand, Tagline, Event Meta (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="inline-block mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm"
              aria-label="Emerge Auro Home"
            >
              <div className="relative w-[150px] h-[56px] sm:w-[170px] sm:h-[64px]">
                <Image
                  src="/logo.webp"
                  alt="EMERGE AURO"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="font-sans text-[14.5px] text-[#073B2A]/80 leading-relaxed max-w-[420px] mb-6">
              India&apos;s First Conscious Capital Conclave uniting visionary
              leaders, institutions, entrepreneurs, and thinkers to foster
              sustainable growth, ethical innovation, and social impact.
            </p>
          </div>

          {/* Column 2: Conclave Navigation (lg:col-span-2 or 3) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-[#073B2A] uppercase mb-4 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C89B3C]" />
              <span>Conclave</span>
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px]">
              <li>
                <Link
                  href="/#about"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  About Conclave
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Conclave Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/#agenda"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Schedule & Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="/#speakers"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Keynote Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/#featured-sessions"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Featured Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem & Partners (lg:col-span-2 or 3) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-[#073B2A] uppercase mb-4 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C89B3C]" />
              <span>Ecosystem</span>
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px]">
              <li>
                <Link
                  href="/#organizers"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Organizers
                </Link>
              </li>
              <li>
                <Link
                  href="/#organizing-team"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Organizing Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#leaders"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Conclave Leaders
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Sponsors & Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Venues & Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-[#073B2A] uppercase mb-4 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#C89B3C]" />
              <span>Venues & Connect</span>
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px] mb-6">
              <li>
                <Link
                  href="/#venue"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Pondicherry University (Day 1)
                </Link>
              </li>
              <li>
                <Link
                  href="/#venue"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Auroville — Bharat Nivas (Days 2 & 3)
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[#073B2A]/75 hover:text-[#C89B3C] transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================
            DIVIDER LINE
            ======================================================== */}
        <div className="w-full h-[1px] bg-[#073B2A]/15 mb-8" />

        {/* ========================================================
            SUB-FOOTER BOTTOM BAR
            ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#073B2A]/80 tracking-wide text-center sm:text-left">
          <p>© 2026 Emerge Auro. All rights reserved.</p>

          <p>
            Designed and Developed by{" "}
            <a
              href="https://unifirolabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C89B3C] hover:text-[#073B2A] font-semibold transition-colors duration-200 underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#073B2A]"
            >
              unifirolabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
