import React from "react";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, CheckCircle, Sparkle, PaintBrush, House } from "@phosphor-icons/react";
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="hero" className="relative min-h-[92dvh] lg:min-h-[96dvh] flex items-center justify-center overflow-hidden bg-[#0d0f12] pt-8 pb-16 lg:py-24">
      {/* Background Media with Multi-Layered Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/exterior-home.jpg"
          alt="Professional painter transforming home exterior"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-90 contrast-110 scale-105"
        />
        {/* Scrim Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/80 to-[#0d0f12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/75 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Subtle Paint Stroke Accent SVG behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 text-left space-y-6"
          >
            {/* Top Brand Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-orange-500/50 shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse motion-reduce:animate-none" />
              <span className="font-display tracking-wider text-xs sm:text-sm font-semibold uppercase text-amber-300">
                FireHorse Painting • Residential & Property Specialists
              </span>
            </motion.div>

            {/* Headline with Custom Paint Brush Stroke Accent */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-bold uppercase tracking-tight text-white leading-[0.98] text-balance">
                QUALITY PAINTING.{" "}
                <span className="relative inline-block mt-1 sm:mt-0 text-white">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                    BUILT TO LAST.
                  </span>
                  {/* Decorative paint stroke sweep */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-6 text-orange-500/80 -z-10"
                    viewBox="0 0 350 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3.5 14.5C65.5 5.5 185 -1.5 346.5 9.5C310 14.5 120 19 3.5 14.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed text-balance"
            >
              Professional interior and exterior painting for homes, cabinets, decks, buildings, and barns. Finished with unmatched attention to detail and lasting durability.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenEstimateModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-xl shadow-black/80 hover:shadow-orange-700/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-500/40"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-slate-100 bg-[#16191f] hover:bg-[#1f242d] border border-orange-500/40 hover:border-orange-500/80 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-amber-400">
                  <Phone weight="fill" className="w-4 h-4" />
                </div>
                <span>Call 502-296-8106</span>
              </a>
            </motion.div>

            {/* Fast Trust Indicators / Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80"
            >
              <div className="flex items-center gap-2.5 text-slate-300 text-sm">
                <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-medium">Free Detailed Quotes</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-sm">
                <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-medium">Meticulous Prep & Finish</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-sm col-span-2 sm:col-span-1">
                <CheckCircle weight="fill" className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-medium">Residential & Commercial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Prominent Horse Logo Crest & Quick Estimator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="w-full max-w-md bg-gradient-to-b from-[#181b22]/95 to-[#111317]/95 border border-orange-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/80 backdrop-blur-md relative overflow-hidden group">
              {/* Corner Amber Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

              {/* Horse Logo Showcase */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-slate-800">
                <FireHorseLogo size="lg" variant="stacked" className="mb-1" />
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Premium Paint Applications • Clean Lines • Lasting Protection
                </p>
              </div>

              {/* Quick Quote Highlight Box */}
              <div className="mt-5 space-y-4">
                <div className="bg-[#121419] p-3.5 rounded-xl border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-amber-400">Fast Local Response</span>
                    <span className="text-slate-300 font-medium">Louisville & Beyond</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-display text-white tracking-wide">502-296-8106</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Direct communication with the painting crew. No middlemen.
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={onOpenEstimateModal}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#c2410c] hover:bg-[#ea580c] text-white font-display text-base font-bold tracking-wider uppercase shadow-lg shadow-black/60 transition-all flex items-center justify-center gap-2 border border-orange-400/40"
                  >
                    <PaintBrush weight="bold" className="w-5 h-5" />
                    <span>Start Free Estimate</span>
                  </button>

                  <a
                    href="sms:5022968106"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <span>Tap to Send a Quick Text</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
