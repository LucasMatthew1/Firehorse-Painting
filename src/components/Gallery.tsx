import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle, ArrowRight } from "@phosphor-icons/react";

interface GalleryProps {
  onOpenEstimateModal: (projectType?: string) => void;
}

interface ProjectItem {
  id: string;
  category: "all" | "exterior" | "interior" | "cabinets" | "deck" | "barns";
  title: string;
  categoryLabel: string;
  scope: string;
  image: string;
  details: string;
}

const galleryItems: ProjectItem[] = [
  {
    id: "g-ext-1",
    category: "exterior",
    categoryLabel: "Exterior Home",
    title: "Siding & Exterior Trim",
    scope: "Full Exterior Painting",
    image: "/assets/exterior-home.jpg",
    details: "Thorough power wash, caulk sealing, and durable weatherproof finish.",
  },
  {
    id: "g-int-1",
    category: "interior",
    categoryLabel: "Interior Room",
    title: "Living Room & Ceilings",
    scope: "Interior Walls & Trim",
    image: "/assets/interior-home.jpg",
    details: "Drywall prep, ultra-clean cut lines, and smooth uniform coverage.",
  },
  {
    id: "g-cab-1",
    category: "cabinets",
    categoryLabel: "Cabinets",
    title: "Kitchen Cabinet Refinishing",
    scope: "Full Cabinet Enamel Spray",
    image: "/assets/cabinets-after.jpg",
    details: "Degreased, sanded, primed, and sprayed with factory-smooth urethane enamel.",
  },
  {
    id: "g-deck-1",
    category: "deck",
    categoryLabel: "Decks",
    title: "Deck Staining & Restoration",
    scope: "Deck Flooring & Railings",
    image: "/assets/deck.jpg",
    details: "Deep pressure clean, wood conditioning, and penetrating protective stain.",
  },
  {
    id: "g-barn-1",
    category: "barns",
    categoryLabel: "Buildings / Barns",
    title: "Barn & Outbuilding Painting",
    scope: "Exterior Agricultural Painting",
    image: "/assets/barn.jpg",
    details: "Heavy-duty protective coating built to withstand sun, moisture, and wear.",
  },
  {
    id: "g-cab-2",
    category: "cabinets",
    categoryLabel: "Cabinets",
    title: "Custom Island Transformation",
    scope: "Accent Color Cabinet Painting",
    image: "/assets/cabinets.jpg",
    details: "Clean contrast island finish with durable moisture-resistant topcoat.",
  },
];

export const Gallery: React.FC<GalleryProps> = ({ onOpenEstimateModal }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "cabinets", label: "Cabinets" },
    { id: "deck", label: "Decks" },
    { id: "barns", label: "Buildings & Barns" },
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#0a0c10] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[45rem] h-[25rem] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-orange-400" />
            <span>Project Gallery</span>
          </div>

          <h2 className="text-3.5xl sm:text-4.5xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight block">
            SEE THE <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">DIFFERENCE</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed block">
            Before-and-after transformations and completed residential and property painting projects.
          </p>
        </div>

        {/* Featured Interactive Before & After Slider Card */}
        <div className="mb-8 rounded-3xl bg-gradient-to-b from-[#141822] to-[#0d1017] border border-orange-500/30 p-4 sm:p-6 shadow-2xl shadow-black/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/80">
            <h3 className="text-base sm:text-lg font-display font-extrabold text-white uppercase tracking-wide">
              Cabinet Transformation (Before / After)
            </h3>
            <span className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 motion-safe:animate-pulse" />
              Drag or swipe slider to compare
            </span>
          </div>

          {/* Interactive Before & After Canvas */}
          <div
            role="slider"
            tabIndex={0}
            aria-label="Cabinet Painting Before and After Comparison Slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                setSliderPosition((prev) => Math.max(0, prev - 5));
              } else if (e.key === "ArrowRight") {
                setSliderPosition((prev) => Math.min(100, prev + 5));
              }
            }}
            className="relative h-60 sm:h-80 md:h-[400px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* "After" Image (Full background) */}
            <img
              src="/assets/cabinets-after.jpg"
              alt="FireHorse Painting Kitchen Cabinet After Finish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />

            {/* "Before" Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/cabinets.jpg"
                alt="Original Cabinets Before Painting"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter brightness-85 contrast-95 sepia-[0.15]"
                style={{ width: "100%", minWidth: "100%" }}
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/85 text-white font-display text-xs font-bold uppercase tracking-wider border border-slate-700">
                Before
              </div>
            </div>

            {/* Right Badge "FireHorse Finish" */}
            <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full btn-flame text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg">
              FireHorse Finish
            </div>

            {/* Divider Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.9)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-orange-400 flex items-center justify-center text-amber-400 shadow-2xl font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2 mb-6 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "btn-flame text-white shadow-lg"
                  : "bg-[#141820] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#141822] to-[#0d1017] border border-slate-800/90 hover:border-orange-500/50 overflow-hidden shadow-xl shadow-black/60 hover:shadow-orange-950/40 flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Box */}
                <div
                  className="relative h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141822] via-transparent to-transparent" />
                  
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-orange-500/30 text-amber-400 font-display text-xs font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-display font-extrabold text-white uppercase group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-medium">
                      {item.scope}
                    </span>
                    <button
                      onClick={() => onOpenEstimateModal(item.categoryLabel)}
                      className="text-xs font-display font-bold uppercase tracking-wider text-orange-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Get Quote</span>
                      <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="max-w-3xl w-full bg-[#12151c] rounded-3xl border border-orange-500/30 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[65vh] overflow-hidden bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                  <div>
                    <span className="text-xs font-display uppercase tracking-wider text-orange-400 font-bold">
                      {selectedImage.categoryLabel}
                    </span>
                    <h4 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase">
                      {selectedImage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-light">
                      {selectedImage.details}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const cat = selectedImage.categoryLabel;
                      setSelectedImage(null);
                      onOpenEstimateModal(cat);
                    }}
                    className="btn-flame px-6 py-2.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg cursor-pointer"
                  >
                    Request Free Estimate
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
