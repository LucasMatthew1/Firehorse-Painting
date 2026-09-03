import React from "react";
import { Phone, PaintBrush } from "@phosphor-icons/react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#0c0e14] via-[#141822] to-[#090b0e] border-t border-b border-orange-500/30 relative overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[18rem] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5 relative z-10">
        <h2 className="text-3.5xl sm:text-4.5xl md:text-5.5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
          READY FOR A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
            FRESH COAT?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 font-normal max-w-xl mx-auto leading-relaxed">
          Let's transform your home or property with quality paint and expert craftsmanship.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:5022968106"
            className="btn-flame w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-white font-display text-base uppercase tracking-wider font-bold transition-all shadow-xl hover:-translate-y-0.5 text-center cursor-pointer"
          >
            <PaintBrush weight="bold" className="w-5 h-5" />
            <span>CALL OR TEXT FOR A FREE ESTIMATE</span>
          </a>

          <a
            href="tel:5022968106"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#151922] hover:bg-[#1f2432] text-amber-400 hover:text-amber-300 font-display text-base uppercase tracking-wider font-bold transition-all border border-slate-700/80 hover:border-orange-500/50 shadow-lg"
          >
            <Phone weight="fill" className="w-4 h-4" />
            <span>502-296-8106</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
