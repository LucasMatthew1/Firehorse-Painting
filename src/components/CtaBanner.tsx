import React from "react";
import { Phone, PaintBrush } from "@phosphor-icons/react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-18 sm:py-24 bg-gradient-to-b from-[#0e1117] via-[#141822] to-[#0d0f14] border-t border-b border-orange-500/30 relative overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
          READY FOR A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
            FRESH COAT?
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-slate-200 font-normal max-w-xl mx-auto leading-relaxed">
          Let's transform your home or property with quality paint and expert craftsmanship.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5022968106"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-lg uppercase tracking-wider font-bold transition-all shadow-2xl shadow-orange-950/70 hover:-translate-y-0.5 border border-orange-400/40 text-center"
          >
            <PaintBrush weight="bold" className="w-5 h-5" />
            <span>CALL OR TEXT FOR A FREE ESTIMATE</span>
          </a>

          <a
            href="tel:5022968106"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#171b24] hover:bg-[#222734] text-amber-400 hover:text-amber-300 font-display text-lg uppercase tracking-wider font-bold transition-all border border-slate-700/80 hover:border-orange-500/50 shadow-lg"
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
