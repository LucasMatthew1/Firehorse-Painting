import React, { useState } from "react";
import { FireHorseLogo } from "./FireHorseLogo";
import { Phone, List, X, ArrowRight, ShieldCheck, PaintBrush } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
  onOpenEstimateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 20;
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
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
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-[#121417] via-[#1a1d24] to-[#121417] border-b border-orange-500/20 text-xs py-1.5 px-4 text-slate-300 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none"></span>
            <span className="text-slate-200 font-medium">
              <strong className="text-amber-400 uppercase font-display tracking-wider">FireHorse Quality:</strong> Residential & Property Painting
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck weight="fill" className="text-amber-400 w-4 h-4" />
              Quality Workmanship & Attention to Detail
            </span>
            <a
              href="tel:5022968106"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors group"
            >
              <Phone weight="fill" className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>Call / Text: 502-296-8106</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d0f12]/95 backdrop-blur-md shadow-xl shadow-black/60 border-b border-orange-500/20 py-3"
            : "bg-[#0d0f12]/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
            <FireHorseLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 font-medium text-sm tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:5022968106"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-slate-700/60"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Phone weight="fill" className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Call or Text</span>
                <span className="text-sm font-bold tracking-tight font-display text-slate-100">502-296-8106</span>
              </div>
            </a>

            <button
              onClick={onOpenEstimateModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-display text-sm uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg shadow-black/80 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-400/40"
            >
              <span>Free Estimate</span>
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Quick Phone Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:5022968106"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold font-display tracking-wide"
            >
              <Phone weight="fill" className="w-3.5 h-3.5" />
              <span>502-296-8106</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X weight="bold" className="w-6 h-6 text-orange-400" /> : <List weight="bold" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-[108px] z-30 bg-[#0f1115] border-b border-orange-500/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-2 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-orange-400 hover:border-orange-500/40 text-base font-medium transition-all"
                  >
                    <PaintBrush className="w-4 h-4 text-orange-500" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimateModal();
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase text-center shadow-lg shadow-orange-950/60 flex items-center justify-center gap-2"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:5022968106"
                    className="py-2.5 px-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-700"
                  >
                    <Phone weight="fill" className="text-orange-400 w-4 h-4" />
                    <span>Call 502-296-8106</span>
                  </a>
                  <a
                    href="sms:5022968106"
                    className="py-2.5 px-3 rounded-lg bg-slate-800/90 border border-slate-700 text-amber-300 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-700"
                  >
                    <span>Text 502-296-8106</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;
