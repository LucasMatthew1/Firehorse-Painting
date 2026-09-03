import React from "react";
import { motion } from "framer-motion";

interface ProcessProps {
  onOpenEstimateModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenEstimateModal }) => {
  const steps = [
    {
      number: "01",
      title: "Request Your Free Estimate",
      description: "Call or text 502-296-8106 or submit our online form to get started.",
    },
    {
      number: "02",
      title: "Plan Your Project",
      description: "Discuss the project, surfaces, colors, timeline, and scope of work.",
    },
    {
      number: "03",
      title: "We Paint",
      description: "Professional preparation and painting with thorough attention to detail.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-[#0e1015] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
            How It Works
          </span>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase">
            FROM ESTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">TO FINISH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light">
            Three simple steps to getting your property beautifully painted.
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl bg-[#13161c] border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between shadow-xl shadow-black/40 space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl font-black text-amber-400">
                  {step.number}
                </span>
                <span className="h-0.5 w-12 bg-gradient-to-r from-orange-500/40 to-transparent" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white uppercase">
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
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEstimateModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/70 cursor-pointer border border-orange-400/30"
          >
            START YOUR FREE ESTIMATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
