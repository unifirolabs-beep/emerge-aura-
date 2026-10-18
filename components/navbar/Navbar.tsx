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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4 sm:py-5 bg-[#F5F1E8]`}>
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
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[12px] xl:text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 py-1 font-sans text-[#073B2A] hover:text-[#C89B3C]`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            
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
            className={`fixed inset-0 z-40 lg:hidden backdrop-blur-xl pt-24 pb-10 px-6 flex flex-col justify-between bg-[#F7F2E8]`}
          >
            <div className="flex flex-col gap-5 mt-2">

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
                      className={`text-lg font-medium tracking-[0.14em] uppercase transition-colors block py-1 font-sans text-[#073B2A] hover:text-[#101410]`}
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
              <a
                href="https://forms.zohopublic.in/infosectio1/form/ClientDetails/formperma/Ou2moWIn4JWNQPOqsPB0tHxOEBFwqaz3oXxgB1h3Sms"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase shadow-md transition-all`}
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
