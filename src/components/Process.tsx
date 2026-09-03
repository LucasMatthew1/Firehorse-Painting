import React from "react";
import { motion, type Variants } from "framer-motion";
import { PhoneCall, Palette, PaintBrush, ArrowRight, ShieldCheck } from "@phosphor-icons/react";

interface ProcessProps {
  onOpenEstimateModal: () => void;
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Process: React.FC<ProcessProps> = ({ onOpenEstimateModal }) => {
  const steps = [
    {
      number: "01",
      title: "Request Your Free Estimate",
      subtitle: "Fast & Convenient",
      description: "Call or text 502-296-8106 or submit our quick online form to get started with zero obligation.",
      icon: <PhoneCall weight="fill" className="w-7 h-7 text-orange-400" />,
      highlight: "Direct Contact With Our Team",
    },
    {
      number: "02",
      title: "Plan Your Project",
      subtitle: "Clear Upfront Scope",
      description: "Discuss your project, surfaces, prep requirements, color selections, timeline, and exact scope of work.",
      icon: <Palette weight="fill" className="w-7 h-7 text-amber-400" />,
      highlight: "Detailed Transparent Quote",
    },
    {
      number: "03",
      title: "We Paint",
      subtitle: "Flawless Execution",
      description: "Professional preparation, sharp masking, meticulous painting, and complete cleanup with total respect for your property.",
      icon: <PaintBrush weight="fill" className="w-7 h-7 text-orange-400" />,
      highlight: "Finished With Lasting Pride",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0e1015] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30">
            <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
              Simple 3-Step Experience
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            FROM ESTIMATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">TO FINISH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A straightforward, hassle-free painting experience designed to deliver exceptional quality from your first call to the final walk-through.
          </p>
        </div>

        {/* 3 Step Cards with Flow Connector */}
        <div className="relative">
          {/* Connecting Line across cards (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-orange-500/10 via-orange-500/40 to-amber-500/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={stepVariants}
                className="relative rounded-2xl bg-[#14171e] border border-slate-800 hover:border-orange-500/50 p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/40 hover:shadow-orange-950/40 transition-all group"
              >
                {/* Step Top Bar: Large Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-amber-400/60 group-hover:text-amber-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Details */}
                <div className="space-y-3">
                  <span className="text-xs font-display uppercase tracking-widest font-semibold text-amber-400">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Pill */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
                  <ShieldCheck weight="fill" className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-300">
                    {step.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Action Bar */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-slate-300 text-sm">
            Ready to get started? We make scheduling fast and hassle-free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/70 cursor-pointer border border-orange-400/40"
            >
              <span>Schedule Your Free Estimate</span>
              <ArrowRight weight="bold" className="w-5 h-5" />
            </button>
            <a
              href="tel:5022968106"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-display text-base font-bold tracking-wider uppercase transition-all border border-slate-700"
            >
              <span>Call / Text: 502-296-8106</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
