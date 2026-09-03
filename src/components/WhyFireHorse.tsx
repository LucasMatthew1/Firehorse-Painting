import React from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Check, Sparkle, Clock, House, Phone, ArrowRight } from "@phosphor-icons/react";

interface WhyFireHorseProps {
  onOpenEstimateModal: () => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const WhyFireHorse: React.FC<WhyFireHorseProps> = ({ onOpenEstimateModal }) => {
  const pillars = [
    {
      title: "Quality Workmanship",
      desc: "We prioritize thorough surface preparation—scraping, sanding, caulking, and priming—to ensure paint adheres properly and lasts for years.",
      icon: <ShieldCheck weight="fill" className="w-5 h-5 text-orange-400" />,
    },
    {
      title: "Attention to Detail",
      desc: "Razor-sharp paint lines, seamless cut-ins, and complete protection of your landscaping, floors, furniture, and hardware.",
      icon: <Sparkle weight="fill" className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "Professional Results",
      desc: "Uniform coverage, smooth textures, and durable finishes using premium commercial and residential grade coatings.",
      icon: <Check weight="bold" className="w-5 h-5 text-orange-400" />,
    },
    {
      title: "Reliable Service",
      desc: "Dependable scheduling, direct communication, respectful crew members on-site, and spotless daily cleanup.",
      icon: <Clock weight="fill" className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "Residential & Property Painting",
      desc: "From single-room repaints and kitchen cabinets to multi-story homes, decks, barns, and rural outbuildings.",
      icon: <House weight="fill" className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0e1015] relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 subtle-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Craftsmanship Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Visual Box */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-black/80 group">
              <img
                src="/assets/painter-craft.jpg"
                alt="FireHorse Painting skilled painter applying professional finish"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-black/20" />
              
              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80">
                <p className="text-xs uppercase font-display font-semibold tracking-wider text-amber-400 mb-1">
                  The FireHorse Standard
                </p>
                <p className="text-sm text-slate-200 font-medium leading-snug">
                  "We take pride in every surface we paint, treating your home and property with the respect it deserves."
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-xl bg-[#171a22] border border-orange-500/40 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600/20 flex items-center justify-center text-orange-400">
                <ShieldCheck weight="fill" className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Quality Focused</div>
                <div className="text-sm font-bold font-display text-white">Proper Prep • Clean Finish</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pillars & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30">
                <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
                  Why FireHorse Painting
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-5.5xl font-display font-bold text-white tracking-tight leading-tight">
                BUILT ON QUALITY.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  FINISHED WITH PRIDE.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                When you hire FireHorse Painting, you get dedicated professionals who treat your project with high standards. No cutting corners, no rushed prep—just dependable service and durable paint work.
              </p>
            </div>

            {/* 5 Pillars List */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-4 rounded-xl bg-[#14171e] border border-slate-800/80 hover:border-orange-500/40 transition-all flex items-start gap-4 group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white tracking-wide group-hover:text-orange-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimateModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-lg shadow-black/70 cursor-pointer border border-orange-400/40"
              >
                <span>Request Free Estimate</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-display text-base font-bold tracking-wider uppercase transition-all border border-slate-700"
              >
                <Phone weight="fill" className="w-4 h-4 text-orange-400" />
                <span>502-296-8106</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyFireHorse;
