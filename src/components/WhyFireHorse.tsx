import React from "react";
import { motion } from "framer-motion";

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
    <section id="why-us" className="py-20 sm:py-24 bg-[#0e1015] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Photography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/80">
              <img
                src="/assets/painter-craft.jpg"
                alt="FireHorse Painting professional painter applying finish"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <span className="text-xs uppercase font-display font-semibold tracking-widest text-amber-400">
                  FireHorse Standard
                </span>
                <p className="text-sm text-slate-200 font-medium pt-1">
                  Built on quality. Finished with pride.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pillars & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
                Why FireHorse Painting
              </span>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight uppercase">
                BUILT ON QUALITY.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  FINISHED WITH PRIDE.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                When you hire FireHorse Painting, you get hardworking professionals who take pride in doing the job right.
              </p>
            </div>

            {/* 5 Pillars: Simple, Sleek, Clean */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-[#13161c] border border-slate-800/90 hover:border-orange-500/40 transition-all flex items-start gap-4"
                >
                  <span className="font-display font-bold text-base text-amber-400 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimateModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-lg shadow-black/70 cursor-pointer border border-orange-400/30"
              >
                REQUEST A FREE ESTIMATE
              </button>

              <a
                href="tel:5022968106"
                className="px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-display text-base font-bold tracking-wider uppercase transition-all border border-slate-700"
              >
                CALL 502-296-8106
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFireHorse;
