import React from "react";
import { motion, type Variants } from "framer-motion";
import { PaintBrush, Phone, ArrowRight, CheckCircle } from "@phosphor-icons/react";

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
      className="relative min-h-[90dvh] lg:min-h-[94dvh] flex items-center justify-center overflow-hidden bg-[#0d0f12] py-14 sm:py-20 lg:py-24"
    >
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/exterior-home.jpg"
          alt="Professional house painting finish"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/80 to-[#0d0f12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/75 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenEstimateModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-xl shadow-black/80 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-orange-400/30 text-center"
              >
                <span>GET A FREE ESTIMATE</span>
                <ArrowRight weight="bold" className="w-5 h-5" />
              </button>

              <a
                href="tel:5022968106"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-display text-lg uppercase tracking-wider font-bold text-slate-100 bg-[#16191f] hover:bg-[#20252e] border border-slate-700 hover:border-orange-500/60 transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-center"
              >
                <Phone weight="fill" className="w-4 h-4 text-amber-400" />
                <span>CALL 502-296-8106</span>
              </a>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="text-orange-500 w-4 h-4 flex-shrink-0" />
                <span>Free Detailed Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="text-orange-500 w-4 h-4 flex-shrink-0" />
                <span>Meticulous Prep & Finish</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle weight="fill" className="text-amber-400 w-4 h-4 flex-shrink-0" />
                <span>Residential & Property</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Exact Reference Card Replicated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full max-w-[420px] rounded-3xl bg-[#13161c]/95 border border-slate-800/90 shadow-2xl shadow-black/90 p-6 sm:p-8 text-center backdrop-blur-md relative overflow-hidden">
              
              {/* Centered Top Emblem Box */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#1d2028] to-[#101216] border border-orange-500/40 p-2 shadow-inner flex items-center justify-center mx-auto mb-3.5">
                <img
                  src="/assets/pasted-image-2026-09-03T00-51-46-555Z.png"
                  alt="FireHorse Painting Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
                />
              </div>

              {/* Wordmark: FIREHORSE PAINTING */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-3.5xl font-display font-extrabold uppercase tracking-wider text-white leading-none">
                  FIRE<span className="text-orange-500">HORSE</span>
                </div>
                
                <div className="flex items-center justify-center gap-2.5 pt-0.5">
                  <span className="h-[1.5px] w-6 bg-amber-500/70" />
                  <span className="font-display tracking-[0.25em] text-amber-400 font-bold uppercase text-xs leading-none">
                    PAINTING
                  </span>
                  <span className="h-[1.5px] w-6 bg-amber-500/70" />
                </div>

                <p className="text-slate-300 text-xs sm:text-[13px] pt-2 max-w-xs mx-auto leading-relaxed">
                  Premium Paint Applications • Clean Lines • Lasting Protection
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-800/90 my-5" />

              {/* Inset Box: FAST LOCAL RESPONSE & 502-296-8106 */}
              <div className="bg-[#0e1015] rounded-xl p-4 sm:p-4.5 border border-slate-800 text-left space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-bold uppercase tracking-wider text-amber-400">
                    FAST LOCAL RESPONSE
                  </span>
                  <span className="text-slate-300 font-medium">
                    Louisville & Beyond
                  </span>
                </div>

                <a
                  href="tel:5022968106"
                  className="block text-3xl font-display font-bold text-white tracking-wide hover:text-orange-400 transition-colors"
                >
                  502-296-8106
                </a>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct communication with the painting crew. No middlemen.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* START FREE ESTIMATE Button */}
                <button
                  onClick={onOpenEstimateModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white font-display text-base font-bold uppercase tracking-wider shadow-lg shadow-black/60 flex items-center justify-center gap-2 cursor-pointer border border-orange-400/30 transition-all active:scale-[0.99]"
                >
                  <PaintBrush weight="bold" className="w-5 h-5" />
                  <span>START FREE ESTIMATE</span>
                </button>

                {/* Tap to Send a Quick Text Button */}
                <a
                  href="sms:5022968106"
                  className="w-full py-3 px-4 rounded-xl bg-[#1c222c] hover:bg-[#252c38] text-slate-200 text-sm font-medium border border-slate-700/60 flex items-center justify-center transition-all block text-center"
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
