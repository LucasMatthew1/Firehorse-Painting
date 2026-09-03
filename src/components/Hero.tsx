import React from "react";
import { motion, type Variants } from "framer-motion";
import { PaintBrush, Phone, ArrowRight, ShieldCheck, Sparkle, HouseLine, Check } from "@phosphor-icons/react";

interface HeroProps {
  onOpenEstimateModal: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-[#080a0e] py-8 sm:py-12 lg:py-14 subtle-grid-bg"
    >
      {/* Background Photography with Ambient Radial Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/exterior-home.jpg"
          alt="Professional house painting finish"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-90 contrast-110"
        />
        {/* Multi-layered fiery gradient meshes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/85 to-[#080a0e]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a0e] via-[#080a0e]/80 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-1/4 w-[30rem] h-[30rem] bg-amber-600/12 rounded-full blur-3xl" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 motion-safe:animate-pulse" />
              <span>Louisville & Surrounding Areas • Residential & Property</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h1 className="text-4xl sm:text-5.5xl md:text-6xl lg:text-[4.5rem] font-display font-extrabold uppercase tracking-tight text-white leading-[1.1]">
                QUALITY PAINTING.{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                  BUILT TO LAST.
                  <span className="absolute -bottom-2 left-0 right-0 h-2 sm:h-2.5 bg-gradient-to-r from-orange-600/70 to-amber-500/70 -rotate-1 rounded-sm -z-10" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
                Precision interior and exterior painting for homes, cabinets, decks, outbuildings, and barns. Clean lines and durable finishes.
              </p>
            </motion.div>

            {/* Direct Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <button
                onClick={onOpenEstimateModal}
                className="btn-flame inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-display text-base sm:text-lg uppercase tracking-wider font-bold text-white transition-all duration-300 active:translate-y-0 cursor-pointer text-center"
              >
                <span>GET A FREE ESTIMATE</span>
                <ArrowRight weight="bold" className="w-5 h-5" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-display text-base sm:text-lg uppercase tracking-wider font-bold text-slate-100 bg-[#12161f]/90 hover:bg-[#1a202c] border border-slate-700/80 hover:border-orange-500/60 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-center backdrop-blur-sm"
              >
                <Phone weight="fill" className="w-4 h-4 text-amber-400" />
                <span>CALL 502-296-8106</span>
              </a>
            </motion.div>

            {/* Credibility Highlights Pill Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 pt-2 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12161f]/80 border border-slate-800 shadow-sm">
                <Check weight="bold" className="text-orange-400 w-4 h-4" />
                <span className="font-medium text-slate-200">Free Detailed Estimates</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12161f]/80 border border-slate-800 shadow-sm">
                <Sparkle weight="fill" className="text-amber-400 w-4 h-4" />
                <span className="font-medium text-slate-200">Meticulous Prep & Finish</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12161f]/80 border border-slate-800 shadow-sm">
                <HouseLine weight="fill" className="text-orange-400 w-4 h-4" />
                <span className="font-medium text-slate-200">Interior, Exterior & Decks</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Card with Outlined Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[370px] rounded-2xl bg-gradient-to-b from-[#141822]/95 via-[#0f121a]/95 to-[#0a0c10]/95 border border-orange-500/30 shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] shadow-black/90 p-5 sm:p-6 text-center backdrop-blur-xl relative overflow-hidden">
              
              {/* Radial Glow inside card */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-b from-orange-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Official Outlined FireHorse Logo */}
              <div className="relative z-10 flex flex-col items-center justify-center mb-1.5">
                <div className="relative group">
                  <img
                    src="/assets/pasted-image-2026-09-03T01-29-47-197Z.png"
                    alt="FireHorse Painting"
                    className="h-32 sm:h-36 md:h-40 w-auto object-contain mx-auto filter drop-shadow-[0_4px_16px_rgba(249,115,22,0.35)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="text-slate-300 text-xs pt-2 max-w-[260px] mx-auto leading-tight font-normal opacity-80">
                  Premium Paint Applications • Clean Cut Lines • Durable Protection
                </p>
              </div>

              {/* Divider */}
              <div className="relative z-10 border-t border-slate-800/70 my-3" />

              {/* Inset Box: FAST LOCAL RESPONSE & 502-296-8106 */}
              <div className="relative z-10 bg-gradient-to-br from-[#0c0e14] to-[#07090d] rounded-xl p-3.5 border border-slate-800/90 shadow-inner text-left space-y-1 mb-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    FAST LOCAL RESPONSE
                  </span>
                  <span className="text-slate-400 font-medium">
                    Direct with Crew
                  </span>
                </div>

                <a
                  href="tel:5022968106"
                  className="block text-2xl sm:text-2.5xl font-display font-extrabold text-white tracking-wide hover:text-amber-400 transition-colors leading-none"
                >
                  502-296-8106
                </a>

                <p className="text-xs text-slate-400 leading-tight font-light">
                  Free estimates for interior, exterior, decks, and cabinets.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 space-y-2">
                <button
                  onClick={onOpenEstimateModal}
                  className="btn-flame w-full py-2.5 px-4 rounded-xl text-white font-display text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 active:scale-[0.98]"
                >
                  <PaintBrush weight="bold" className="w-4 h-4" />
                  <span>START FREE ESTIMATE</span>
                </button>

                <a
                  href="sms:5022968106"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#141822] hover:bg-[#1d2230] text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/80 hover:border-orange-500/40 flex items-center justify-center transition-all duration-200 block text-center uppercase tracking-widest font-display"
                >
                  Tap to Send a Quick Text
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
