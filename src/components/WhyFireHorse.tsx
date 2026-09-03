import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, ShieldCheck } from "@phosphor-icons/react";

interface WhyFireHorseProps {
  onOpenEstimateModal: () => void;
}

export const WhyFireHorse: React.FC<WhyFireHorseProps> = ({ onOpenEstimateModal }) => {
  const pillars = [
    {
      title: "Quality Workmanship",
      desc: "Thorough surface preparation—scraping, sanding, caulking, and priming—ensuring paint adheres properly and lasts.",
    },
    {
      title: "Attention to Detail",
      desc: "Clean tape lines, razor-sharp cut-ins, and spotless protection of your floors, landscaping, and hardware.",
    },
    {
      title: "Professional Results",
      desc: "Smooth, even finishes with durable residential and property-grade coatings tailored to each surface.",
    },
    {
      title: "Reliable Service",
      desc: "Dependable communication, prompt project scheduling, respectful crews, and clean job sites every day.",
    },
    {
      title: "Residential & Property Painting",
      desc: "Expertise across homes, cabinets, decks, barns, detached garages, and large property structures.",
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-[#0b0d11] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Gradient Atmosphere */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-6 right-1/4 w-[30rem] h-[30rem] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Photography with Frame */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-black/90 group">
              <img
                src="/assets/painter-craft.jpg"
                alt="FireHorse Painting professional painter applying finish"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/30 to-transparent" />
              
              {/* Bottom Floating Badge Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-gradient-to-b from-slate-950/90 to-[#0c0e12]/95 backdrop-blur-md border border-orange-500/30 shadow-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-display font-bold tracking-widest">
                  <ShieldCheck weight="fill" className="w-4 h-4 text-orange-500" />
                  <span>The FireHorse Standard</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold pt-1">
                  Built on quality. Finished with pride.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pillars & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider">
                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-orange-400" />
                <span>Why FireHorse Painting</span>
              </div>

              <h2 className="text-3xl sm:text-4.5xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
                BUILT ON QUALITY.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                  FINISHED WITH PRIDE.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                When you hire FireHorse Painting, you get hardworking professionals who take pride in doing the job right.
              </p>
            </div>

            {/* 5 Pillars: Distinct Card Views */}
            <div className="space-y-2.5">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#141820] to-[#0f1217] border border-slate-800/90 hover:border-orange-500/50 hover:from-[#181d28] hover:to-[#12161f] transition-all duration-200 flex items-start gap-3.5 shadow-md shadow-black/40 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-display font-extrabold text-xs text-amber-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-display font-bold text-white uppercase tracking-wide group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEstimateModal}
                className="btn-flame inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-white font-display text-sm font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer"
              >
                <span>REQUEST A FREE ESTIMATE</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#141822] hover:bg-[#1d2230] text-slate-100 font-display text-sm font-bold tracking-wider uppercase transition-all border border-slate-700/80 hover:border-orange-500/40 shadow-md"
              >
                <Phone weight="fill" className="w-4 h-4 text-amber-400" />
                <span>CALL 502-296-8106</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFireHorse;
