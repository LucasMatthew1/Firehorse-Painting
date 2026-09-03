import React from "react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

interface ProcessProps {
  onOpenEstimateModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenEstimateModal }) => {
  const steps = [
    {
      number: "01",
      title: "Request Your Free Estimate",
      description: "Call or text 502-296-8106 or submit our online form to get started with an upfront project evaluation.",
    },
    {
      number: "02",
      title: "Plan Your Project",
      description: "Discuss surfaces, premium paint/stain options, color selection, prep requirements, and scheduling.",
    },
    {
      number: "03",
      title: "We Paint",
      description: "Professional preparation, clean masking, thorough coating application, and spotless daily cleanup.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#090b0e] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Atmosphere Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[25rem] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-orange-400" />
            <span>How It Works</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
            FROM ESTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">TO FINISH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Three straightforward steps to getting your home or property beautifully painted.
          </p>
        </div>

        {/* 3 Step Cards: Rich Card Views with Gradients and Illuminated Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-[#141820] to-[#0d1015] border border-slate-800/90 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between shadow-2xl shadow-black/60 hover:shadow-orange-950/40 hover:-translate-y-1.5 space-y-6 group relative overflow-hidden"
            >
              {/* Subtle top corner gradient shine */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-orange-500/20 transition-all" />

              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-orange-500">
                  {step.number}
                </span>
                <span className="h-0.5 w-14 bg-gradient-to-r from-orange-500/50 to-transparent" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-display font-bold text-white uppercase group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-xl shadow-orange-950/60 cursor-pointer border border-orange-400/40 hover:-translate-y-0.5"
          >
            <span>START YOUR FREE ESTIMATE</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
