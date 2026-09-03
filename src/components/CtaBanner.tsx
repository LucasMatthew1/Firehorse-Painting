import React from "react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0c0e12] border-t border-b border-orange-500/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight uppercase">
          READY FOR A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            FRESH COAT?
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-slate-200 font-light max-w-xl mx-auto">
          Let's transform your home or property.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5022968106"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-lg uppercase tracking-wider font-bold transition-all shadow-xl shadow-black/80 hover:-translate-y-0.5 border border-orange-400/30 text-center"
          >
            CALL OR TEXT FOR A FREE ESTIMATE
          </a>

          <a
            href="tel:5022968106"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#151820] hover:bg-[#1e222c] text-amber-400 font-display text-lg uppercase tracking-wider font-bold transition-all border border-slate-700"
          >
            502-296-8106
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
