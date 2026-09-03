import React from "react";
import { FireHorseLogo } from "./FireHorseLogo";

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
    <footer className="bg-[#090b0e] border-t border-slate-800/80 text-slate-400 relative overflow-hidden pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80 items-start">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <FireHorseLogo size="lg" />
            </a>
            
            <p className="text-base text-slate-300 font-display uppercase tracking-wider font-semibold text-orange-400">
              Professional Painting Services
            </p>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-light">
              Professional residential and property painting services built on quality and finished with pride.
            </p>

            <div className="pt-2">
              <a
                href="tel:5022968106"
                className="inline-block text-2xl font-display font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                502-296-8106
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item.name}
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
            <p className="text-sm text-slate-300 font-light">
              Call, text, or submit a request for an upfront estimate on your painting project.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenEstimateModal}
                className="w-full py-3 px-4 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer border border-orange-400/30"
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
