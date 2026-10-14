"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import SignInModal from "@/components/ui/SignInModal";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "AGENDA", href: "/#agenda" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "VENUE", href: "/#venue" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname === "/sponsors";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isLightPage
            ? isScrolled
              ? "py-3 bg-[#F7F2E8]/95 backdrop-blur-[12px] border-b border-[#C89B3C]/20 shadow-[0_4px_24px_rgba(7,59,42,0.06)]"
              : "py-4 sm:py-5 bg-[#F7F2E8]/80 backdrop-blur-[8px] border-b border-[#C89B3C]/15"
            : isScrolled
            ? "py-3 bg-black/40 backdrop-blur-[12px] border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "py-4 sm:py-5 bg-black/10 backdrop-blur-[8px] border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A] rounded-sm py-0.5"
            aria-label="Emerge Auro Home"
          >
            <div className="relative w-[130px] h-[52px] sm:w-[155px] sm:h-[62px] lg:w-[170px] lg:h-[68px]">
              <Image
                src="/logo.webp"
                alt="EMERGE AURO"
                fill
                priority
                sizes="(max-width: 640px) 130px, (max-width: 1024px) 155px, 170px"
                className="object-contain object-left drop-shadow-sm select-none"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href === "/sponsors" && pathname.startsWith("/sponsors"));

              if (isActive && isLightPage) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[12px] xl:text-[13px] font-semibold tracking-[0.14em] uppercase text-white bg-[#C89B3C] px-4 py-1.5 rounded-full shadow-xs transition-all duration-200 font-sans"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[12px] xl:text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 py-1 font-sans ${
                    isLightPage
                      ? "text-[#17352B] hover:text-[#C89B3C]"
                      : "text-[#F7F3E8] hover:text-[#D8B56A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Sign In Button */}
            <button
              onClick={() => setIsSignInModalOpen(true)}
              className={`hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[12px] sm:text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 border hover:scale-[1.03] active:scale-[0.98] ${
                isLightPage
                  ? "text-[#17352B] border-[#17352B]/20 hover:border-[#C89B3C] hover:text-[#C89B3C] hover:bg-[#C89B3C]/5"
                  : "text-[#F7F3E8] border-white/20 hover:border-[#D8B56A] hover:text-[#D8B56A] hover:bg-[#D8B56A]/5"
              }`}
            >
              SIGN IN
            </button>
            
            {/* Primary CTA: REGISTER NOW → */}
            <a
              href="https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] sm:text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] group ${
                isLightPage
                  ? "text-white bg-[#C89B3C] hover:bg-[#B3872E] shadow-[0_2px_12px_rgba(200,155,60,0.3)] hover:shadow-[0_4px_20px_rgba(200,155,60,0.45)]"
                  : "text-[#101410] bg-[#D8B56A] hover:bg-[#faebc7] shadow-[0_2px_12px_rgba(216,181,106,0.25)] hover:shadow-[0_4px_20px_rgba(216,181,106,0.4)]"
              }`}
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56A] ${
                isLightPage
                  ? "text-[#17352B] bg-[#073B2A]/5 border border-[#C89B3C]/30 hover:bg-[#073B2A]/10"
                  : "text-[#F7F3E8] bg-black/20 border border-white/20 hover:bg-black/40"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed inset-0 z-40 lg:hidden backdrop-blur-xl pt-24 pb-10 px-6 flex flex-col justify-between ${
              isLightPage ? "bg-[#F7F2E8]/98" : "bg-black/95"
            }`}
          >
            <div className="flex flex-col gap-5 mt-2">
              <div className="relative w-[150px] h-[55px] mb-4">
                <Image
                  src="/logo.webp"
                  alt="EMERGE AURO"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {navItems.map((item, index) => {
                const isActive =
                  item.href === pathname ||
                  (item.href === "/sponsors" &&
                    pathname.startsWith("/sponsors"));

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium tracking-[0.14em] uppercase transition-colors block py-1 font-sans ${
                        isActive
                          ? "text-[#C89B3C] font-bold"
                          : isLightPage
                          ? "text-[#17352B] hover:text-[#C89B3C]"
                          : "text-[#F7F3E8] hover:text-[#D8B56A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div
              className={`space-y-4 pt-6 border-t ${
                isLightPage ? "border-[#073B2A]/10" : "border-white/10"
              }`}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSignInModalOpen(true);
                }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all border ${
                  isLightPage
                    ? "text-[#17352B] border-[#17352B]/20 hover:border-[#C89B3C] hover:text-[#C89B3C] hover:bg-[#C89B3C]/5"
                    : "text-[#F7F3E8] border-white/20 hover:border-[#D8B56A] hover:text-[#D8B56A] hover:bg-[#D8B56A]/5"
                }`}
              >
                <span>SIGN IN</span>
              </button>
              <a
                href="https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase shadow-md transition-all ${
                  isLightPage
                    ? "text-white bg-[#C89B3C] hover:bg-[#B3872E]"
                    : "text-[#101410] bg-[#D8B56A] hover:bg-[#faebc7]"
                }`}
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)} />
    </>
  );
}
