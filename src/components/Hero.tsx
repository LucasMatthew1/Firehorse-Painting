import React from "react";
import { motion, type Variants } from "framer-motion";
import { PaintBrush, Phone, ArrowRight, ShieldCheck, Sparkle, HouseLine } from "@phosphor-icons/react";

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
      className="relative min-h-[90dvh] lg:min-h-[94dvh] flex items-center justify-center overflow-hidden bg-[#0a0c0f] py-14 sm:py-20 lg:py-24"
    >
      {/* Background Photography with Ambient Radial Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/exterior-home.jpg"
          alt="Professional house painting finish"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 contrast-110"
        />
        {/* Multi-layered fiery gradient meshes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f] via-[#0a0c0f]/85 to-[#0a0c0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f] via-[#0a0c0f]/80 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-7"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 motion-safe:animate-pulse" />
              <span>Professional Painting • Residential & Property</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-6.5xl lg:text-[4.75rem] font-display font-extrabold uppercase tracking-tight text-white leading-[0.98]">
                QUALITY PAINTING.{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">
                  BUILT TO LAST.
                  <span className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-orange-600/70 to-amber-500/70 -rotate-1 rounded-sm -z-10" />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-xl leading-relaxed pt-2">
                Professional interior and exterior painting for homes, cabinets, decks, buildings, and barns.
              </p>
            </motion.div>

            {/* Direct Dual CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <button
                onClick={onOpenEstimateModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-orange-950/50 hover:shadow-orange-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-400/40 text-center"
              >
                <span>GET A FREE ESTIMATE</span>
                <ArrowRight weight="bold" className="w-5 h-5" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-slate-100 bg-[#14171e]/90 hover:bg-[#1e232e] border border-slate-700 hover:border-orange-500/60 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-center backdrop-blur-sm"
              >
                <Phone weight="fill" className="w-4 h-4 text-amber-400" />
                <span>CALL 502-296-8106</span>
              </a>
            </motion.div>

            {/* Enhanced Trust Highlights Card Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-br from-[#14171f]/80 to-[#0e1015]/90 border border-slate-800/90 shadow-md">
                <ShieldCheck weight="fill" className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-200">Free Detailed Quotes</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-br from-[#14171f]/80 to-[#0e1015]/90 border border-slate-800/90 shadow-md">
                <Sparkle weight="fill" className="text-amber-400 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-200">Meticulous Prep & Finish</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-br from-[#14171f]/80 to-[#0e1015]/90 border border-slate-800/90 shadow-md">
                <HouseLine weight="fill" className="text-orange-400 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-200">Residential & Property</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Refined Hero Card with Enlarged Prominent Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[430px] rounded-3xl bg-gradient-to-b from-[#161a22]/95 via-[#11141a]/95 to-[#0d0f14]/95 border border-orange-500/30 shadow-[0_0_50px_-15px_rgba(234,88,12,0.35)] shadow-black/90 p-6 sm:p-8 text-center backdrop-blur-xl relative overflow-hidden">
              
              {/* Radial Glow inside the card */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Enlarged Prominent Official FireHorse Logo */}
              <div className="relative z-10 flex flex-col items-center justify-center mb-3">
                <div className="relative group">
                  <img
                    src="/assets/pasted-image-2026-09-03T01-29-47-197Z.png"
                    alt="FireHorse Painting"
                    className="h-32 sm:h-36 md:h-40 w-auto object-contain mx-auto filter drop-shadow-[0_4px_24px_rgba(249,115,22,0.4)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="text-slate-300 text-xs sm:text-[13px] pt-3 max-w-xs mx-auto leading-relaxed font-normal">
                  Premium Paint Applications • Clean Lines • Lasting Protection
                </p>
              </div>

              {/* Divider */}
              <div className="relative z-10 border-t border-slate-800/90 my-5" />

              {/* Inset Box: FAST LOCAL RESPONSE & 502-296-8106 */}
              <div className="relative z-10 bg-gradient-to-br from-[#0c0e13] to-[#08090d] rounded-2xl p-4 sm:p-5 border border-slate-800/90 shadow-inner text-left space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    FAST LOCAL RESPONSE
                  </span>
                  <span className="text-slate-300 font-medium">
                    Louisville & Beyond
                  </span>
                </div>

                <a
                  href="tel:5022968106"
                  className="block text-3xl sm:text-3.5xl font-display font-extrabold text-white tracking-wide hover:text-amber-400 transition-colors"
                >
                  502-296-8106
                </a>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Direct communication with the painting crew. No middlemen.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 space-y-3">
                {/* START FREE ESTIMATE Button */}
                <button
                  onClick={onOpenEstimateModal}
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-base font-bold uppercase tracking-wider shadow-xl shadow-orange-950/60 flex items-center justify-center gap-2 cursor-pointer border border-orange-400/40 transition-all duration-300 hover:shadow-orange-600/30 active:scale-[0.99]"
                >
                  <PaintBrush weight="bold" className="w-5 h-5" />
                  <span>START FREE ESTIMATE</span>
                </button>

                {/* Tap to Send a Quick Text Button */}
                <a
                  href="sms:5022968106"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#171b24] hover:bg-[#202532] text-slate-200 hover:text-white text-sm font-medium border border-slate-700/80 hover:border-orange-500/40 flex items-center justify-center transition-all duration-200 block text-center"
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
