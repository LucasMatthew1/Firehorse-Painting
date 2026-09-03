import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="gallery" className="py-20 sm:py-24 bg-[#0b0d10] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
            Project Gallery
          </span>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase">
            SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">DIFFERENCE</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light">
            Before-and-after transformations and completed residential and property painting projects.
          </p>
        </div>

        {/* Featured Interactive Before & After Slider */}
        <div className="mb-14 rounded-2xl bg-[#13161c] border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-black/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wide">
              Cabinet Transformation (Before / After)
            </h3>
            <span className="text-xs text-slate-400 font-medium">
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
            className="relative h-64 sm:h-96 md:h-[440px] w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* "After" Image (Full background) */}
            <img
              src="/assets/cabinets-after.jpg"
              alt="FireHorse Painting Kitchen Cabinet After Finish"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* "Before" Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/cabinets.jpg"
                alt="Original Cabinets Before Painting"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter brightness-85 contrast-95 sepia-[0.2]"
                style={{ width: "100%", minWidth: "100%" }}
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/85 text-white font-display text-xs font-bold uppercase tracking-wider border border-slate-700">
                Before
              </div>
            </div>

            {/* Right Badge "FireHorse Finish" */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-[#c2410c] text-white font-display text-xs font-bold uppercase tracking-wider border border-orange-400">
              FireHorse Finish
            </div>

            {/* Divider Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-orange-400 flex items-center justify-center text-amber-400 shadow-xl font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2 mb-10 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#c2410c] text-white shadow-lg shadow-black/60 border border-orange-400"
                  : "bg-[#14171d] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl bg-[#13161c] border border-slate-800 hover:border-orange-500/40 overflow-hidden shadow-xl shadow-black/40 flex flex-col transition-all duration-300"
              >
                {/* Image Box */}
                <div
                  className="relative h-60 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/85 border border-slate-700 text-amber-400 font-display text-xs font-semibold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light mt-1.5 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-medium">
                      {item.scope}
                    </span>
                    <button
                      onClick={() => onOpenEstimateModal(item.categoryLabel)}
                      className="text-xs font-display font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                    >
                      Get Quote →
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
                className="max-w-3xl w-full bg-[#121419] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[65vh] overflow-hidden bg-black">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                  <div>
                    <span className="text-xs font-display uppercase tracking-wider text-orange-400 font-semibold">
                      {selectedImage.categoryLabel}
                    </span>
                    <h4 className="text-xl font-display font-bold text-white uppercase">
                      {selectedImage.title}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1 font-light">
                      {selectedImage.details}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const cat = selectedImage.categoryLabel;
                      setSelectedImage(null);
                      onOpenEstimateModal(cat);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider whitespace-nowrap shadow-lg border border-orange-400/30"
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
