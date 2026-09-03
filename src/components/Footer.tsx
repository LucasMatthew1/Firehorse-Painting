import React from "react";
import { FireHorseLogo } from "./FireHorseLogo";
import { Phone, ArrowUpRight } from "@phosphor-icons/react";

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

  return (
    <footer className="bg-[#07090c] border-t border-slate-800/80 text-slate-400 relative overflow-hidden pb-20 sm:pb-8">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/3 w-[35rem] h-[18rem] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-800/80 items-start">
          {/* Col 1: Brand & Large Prominent Logo */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block group">
              <FireHorseLogo size="xl" />
            </a>
            
            <p className="text-base text-slate-200 font-display uppercase tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Professional Painting Services
            </p>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-light">
              Professional residential and property painting services built on quality and finished with pride.
            </p>

            <div className="pt-2">
              <a
                href="tel:5022968106"
                className="inline-flex items-center gap-2 text-2xl font-display font-extrabold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone weight="fill" className="w-5 h-5" />
                <span>502-296-8106</span>
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
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Free Estimate */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
              Free Estimate
            </h4>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Call, text, or submit a request for an upfront estimate on your painting project.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEstimateModal}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-950/50 cursor-pointer border border-orange-400/30 text-center"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
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
