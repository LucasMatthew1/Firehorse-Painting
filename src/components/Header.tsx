import React, { useState } from "react";
import { FireHorseLogo } from "./FireHorseLogo";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
  onOpenEstimateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0c0f]/95 backdrop-blur-md shadow-2xl shadow-black/90 border-b border-orange-500/25 py-1.5 sm:py-2"
          : "bg-[#0a0c0f]/90 backdrop-blur-sm border-b border-white/5 py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Sleek Compact FireHorse Logo */}
        <a
          href="#hero"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg group"
        >
          <FireHorseLogo size="sm" />
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-orange-400 font-medium text-sm tracking-wide transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Action CTAs */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:5022968106"
            className="flex flex-col text-right group transition-all"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold group-hover:text-slate-300">
              Call or Text
            </span>
            <span className="text-base font-bold font-display tracking-wide text-white group-hover:text-amber-400 transition-colors">
              502-296-8106
            </span>
          </a>

          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-display text-sm uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 transition-all duration-200 shadow-lg shadow-orange-950/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-400/40"
          >
            FREE ESTIMATE
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:5022968106"
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold font-display tracking-wider"
          >
            502-296-8106
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[64px] z-30 bg-[#0a0c0f] border-b border-orange-500/30 shadow-2xl overflow-hidden"
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
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-base font-bold tracking-wider uppercase text-center shadow-lg border border-orange-400/40"
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
