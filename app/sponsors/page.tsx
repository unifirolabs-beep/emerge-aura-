import Navbar from "@/components/navbar/Navbar";
import SponsorsPageSection from "@/components/sections/SponsorsPageSection";
import Link from "next/link";
import Image from "next/image";

export default function SponsorsPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F2E8] text-[#17352B] overflow-x-hidden selection:bg-[#C89B3C]/30">
      <Navbar />

      <main>
        <SponsorsPageSection />
      </main>

      <footer className="relative border-t border-white/10 bg-[#040a08] py-14 px-4 sm:px-8 lg:px-12 text-[#e5ded2]/70 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3.5">
            <div className="relative w-[130px] h-[48px]">
              <Image
                src="/logo.webp"
                alt="EMERGE AURO"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-sans">
            <Link href="/#about" className="hover:text-[#faebc7] transition-colors">
              About
            </Link>
            <Link href="/#experience" className="hover:text-[#faebc7] transition-colors">
              Experience
            </Link>
            <Link href="/#agenda" className="hover:text-[#faebc7] transition-colors">
              Agenda
            </Link>
            <Link href="/#speakers" className="hover:text-[#faebc7] transition-colors">
              Speakers
            </Link>
            <Link href="/#venue" className="hover:text-[#faebc7] transition-colors">
              Pondicherry & Auroville
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-[#e5ded2]/60 tracking-wider text-center sm:text-left">
            <p>© 2026 Emerge Auro. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>
              Designed and Developed by{" "}
              <a
                href="https://unifirolabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e3b873] hover:text-[#faebc7] font-medium transition-colors duration-200 underline underline-offset-4 decoration-[#e3b873]/40 hover:decoration-[#faebc7]"
              >
                unifirolabs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
