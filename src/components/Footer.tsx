import React from "react";
import { FireHorseLogo } from "./FireHorseLogo";
import { Phone, MapPin, ArrowRight, ShieldCheck, Heart } from "@phosphor-icons/react";

interface FooterProps {
  onOpenEstimateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal }) => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Exterior Home Painting", href: "#services" },
    { name: "Interior Home Painting", href: "#services" },
    { name: "Cabinet Painting", href: "#services" },
    { name: "Deck Painting & Staining", href: "#services" },
    { name: "Buildings / Barns", href: "#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why FireHorse", href: "#why-us" },
    { name: "Project Gallery", href: "#gallery" },
    { name: "Our Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#090b0e] border-t border-slate-800/80 text-slate-400 relative overflow-hidden pb-20 sm:pb-8">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <FireHorseLogo size="lg" />
            </a>
            
            <p className="text-base text-slate-300 font-display uppercase tracking-wide font-semibold text-orange-400">
              Professional Painting Services
            </p>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Dedicated residential and property painting built on thorough preparation, attention to detail, and pride in every coat.
            </p>

            {/* Direct Phone Highlight */}
            <div className="pt-2">
              <a
                href="tel:5022968106"
                className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#13161c] border border-orange-500/30 hover:border-orange-500 text-white transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Phone weight="fill" className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-semibold text-amber-400">Call / Text Direct</span>
                  <span className="text-lg font-bold font-display tracking-wide">502-296-8106</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-orange-500">•</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Free Estimate */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
              Free Estimate & Contact
            </h4>
            <p className="text-sm text-slate-300">
              Ready to discuss your project? Request an on-site or fast digital quote.
            </p>

            <div className="space-y-3 pt-1">
              <button
                onClick={onOpenEstimateModal}
                className="w-full py-3 px-4 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer border border-orange-400/40"
              >
                <span>Request Free Estimate</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <ShieldCheck weight="fill" className="text-amber-400 w-4 h-4 flex-shrink-0" />
                <span>No-pressure, honest project quotes.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Stock Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} FireHorse Painting. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-orange-400 transition-colors">Back to Top ↑</a>
            <span>•</span>
            <a href="tel:5022968106" className="text-amber-400 hover:underline font-semibold">502-296-8106</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
