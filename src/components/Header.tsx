import React, { useState } from "react";
import { FireHorseLogo } from "./FireHorseLogo";
import { List, X, PhoneCall } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
  onOpenEstimateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25);
  });

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080a0e]/95 backdrop-blur-xl shadow-2xl shadow-black/90 border-b border-orange-500/30 py-1.5 sm:py-2"
          : "bg-[#080a0e]/85 backdrop-blur-md border-b border-white/10 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Dynamic Squeezing FireHorse Logo */}
        <a
          href="#hero"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl group transition-transform duration-300"
        >
          <FireHorseLogo
            size="custom"
            imgClassName={`transition-all duration-300 ${
              isScrolled
                ? "h-10 sm:h-11 md:h-12"
                : "h-14 sm:h-16 md:h-18"
            }`}
          />
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-orange-400 font-medium text-sm tracking-wide transition-all py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Direct Action CTAs */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:5022968106"
            className="flex flex-col text-right group transition-all"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold group-hover:text-slate-300 transition-colors">
              Call or Text
            </span>
            <span className="text-base font-bold font-display tracking-wider text-white group-hover:text-amber-400 transition-colors">
              502-296-8106
            </span>
          </a>

          <button
            onClick={onOpenEstimateModal}
            className={`btn-flame inline-flex items-center justify-center font-display uppercase tracking-wider font-bold text-white rounded-xl transition-all duration-300 active:translate-y-0 cursor-pointer ${
              isScrolled
                ? "px-5 py-2 text-xs"
                : "px-6 py-2.5 text-sm"
            }`}
          >
            FREE ESTIMATE
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href="tel:5022968106"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold font-display tracking-wider hover:bg-orange-500/25 transition-all"
          >
            <PhoneCall weight="fill" className="w-3.5 h-3.5" />
            <span>502-296-8106</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X weight="bold" className="w-5 h-5 text-orange-400" /> : <List weight="bold" className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden fixed inset-x-0 z-30 bg-[#080a0e] border-b border-orange-500/30 shadow-2xl overflow-hidden transition-all duration-300 ${
              isScrolled ? "top-[58px] sm:top-[62px]" : "top-[68px] sm:top-[76px]"
            }`}
          >
            <div className="px-6 py-6 space-y-4 max-w-lg mx-auto">
              <div className="flex flex-col space-y-2 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-lg text-slate-200 hover:text-orange-400 hover:bg-slate-900 text-base font-medium transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimateModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl btn-flame text-white font-display text-base font-bold tracking-wider uppercase text-center shadow-lg"
                >
                  Request Free Estimate
                </button>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <a
                    href="tel:5022968106"
                    className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white font-semibold text-xs hover:bg-slate-800"
                  >
                    Call 502-296-8106
                  </a>
                  <a
                    href="sms:5022968106"
                    className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-semibold text-xs hover:bg-slate-800"
                  >
                    Text 502-296-8106
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
