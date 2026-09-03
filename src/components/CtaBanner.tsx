import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, PaintBrush, Chats } from "@phosphor-icons/react";
import { FireHorseLogo } from "./FireHorseLogo";

interface CtaBannerProps {
  onOpenEstimateModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0e1015] via-[#14171f] to-[#0b0d10] overflow-hidden border-t border-b border-orange-500/30">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#171a22] via-[#1f242e] to-[#171a22] border-2 border-orange-500/40 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black/90 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-orange-500/40">
              <PaintBrush className="w-4 h-4 text-orange-400" />
              <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
                Residential & Property Painting
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase leading-[0.98]">
              READY FOR A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                FRESH COAT?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-200 font-medium">
              Let's transform your home or property.
            </p>

            <p className="text-sm text-slate-400 max-w-lg">
              Get an honest, detailed free estimate for your exterior, interior, cabinets, deck, or barn painting project.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full sm:w-auto">
            <a
              href="tel:5022968106"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-lg sm:text-xl font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/80 hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer border border-orange-400/40"
            >
              <Phone weight="fill" className="w-5 h-5 flex-shrink-0" />
              <span>CALL OR TEXT FOR A FREE ESTIMATE</span>
            </a>

            <div className="flex items-center justify-center gap-3 w-full">
              <button
                onClick={onOpenEstimateModal}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-display text-sm font-semibold uppercase tracking-wider border border-slate-700 transition-all cursor-pointer"
              >
                <span>Online Form</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>

              <a
                href="sms:5022968106"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-display text-sm font-semibold uppercase tracking-wider border border-slate-700 transition-all"
              >
                <Chats weight="fill" className="w-4 h-4" />
                <span>Text 502-296-8106</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
