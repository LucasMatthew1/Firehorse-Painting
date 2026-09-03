import React from "react";
import { motion, type Variants } from "framer-motion";
import { FireHorseLogo } from "./FireHorseLogo";

interface HeroProps {
  onOpenEstimateModal: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85dvh] sm:min-h-[88dvh] flex items-center justify-center overflow-hidden bg-[#0d0f12] py-16 sm:py-24"
    >
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/exterior-home.jpg"
          alt="Professional house painting finish"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/80 to-[#0d0f12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/70 to-[#0d0f12]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-8"
        >
          {/* Prominent Hero Logo */}
          <motion.div variants={itemVariants} className="pt-2 pb-1">
            <FireHorseLogo size="lg" />
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-3 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] uppercase">
              QUALITY PAINTING.{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                BUILT TO LAST.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-orange-600/60 to-amber-500/60 -rotate-1 rounded-sm -z-10" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed pt-2">
              Professional interior and exterior painting for homes, cabinets, decks, buildings, and barns.
            </p>
          </motion.div>

          {/* Direct Dual CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={onOpenEstimateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-xl shadow-black/80 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-400/30"
            >
              GET A FREE ESTIMATE
            </button>

            <a
              href="tel:5022968106"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-slate-100 bg-[#16191f] hover:bg-[#20252e] border border-slate-700 hover:border-orange-500/60 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              CALL 502-296-8106
            </a>
          </motion.div>

          {/* Simple Clean Scope Footer Line */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider"
          >
            <span>Exterior Home</span>
            <span className="text-orange-500/60">•</span>
            <span>Interior Home</span>
            <span className="text-orange-500/60">•</span>
            <span>Cabinets</span>
            <span className="text-orange-500/60">•</span>
            <span>Decks</span>
            <span className="text-orange-500/60">•</span>
            <span>Buildings & Barns</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
