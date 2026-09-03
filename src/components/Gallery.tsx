import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowsLeftRight, MagnifyingGlassPlus, PaintBrush, CheckCircle } from "@phosphor-icons/react";

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
    title: "Complete Siding & Trim Modernization",
    scope: "Full Exterior Siding, Fascia & Entry Door",
    image: "/assets/exterior-home.jpg",
    details: "Thorough power wash, caulk seals, premium weatherproof acrylic coating.",
  },
  {
    id: "g-int-1",
    category: "interior",
    categoryLabel: "Interior Room",
    title: "Open-Concept Living & High Ceilings",
    scope: "Interior Walls, Ceilings & Door Casings",
    image: "/assets/interior-home.jpg",
    details: "Drywall prep, ultra-clean tape lines, zero-sheen ceiling & durable eggshell walls.",
  },
  {
    id: "g-cab-1",
    category: "cabinets",
    categoryLabel: "Cabinets",
    title: "Kitchen Cabinet Enamel Refinishing",
    scope: "Full Kitchen Upper & Lower Cabinets",
    image: "/assets/cabinets-after.jpg",
    details: "Degreased, sanded, bond-primed, and sprayed with factory-smooth urethane enamel.",
  },
  {
    id: "g-deck-1",
    category: "deck",
    categoryLabel: "Decks",
    title: "Multi-Level Outdoor Deck Restoration",
    scope: "Deck Flooring, Railings & Stairs",
    image: "/assets/deck.jpg",
    details: "Deep pressure clean, wood brightener, penetrating protective stain.",
  },
  {
    id: "g-barn-1",
    category: "barns",
    categoryLabel: "Buildings / Barns",
    title: "Rural Property Barn Painting",
    scope: "Barn Siding, Trim & Cupola",
    image: "/assets/barn.jpg",
    details: "Heavy-duty agricultural exterior coating built to resist sun fade and moisture.",
  },
  {
    id: "g-cab-2",
    category: "cabinets",
    categoryLabel: "Cabinets",
    title: "Custom Kitchen Island & Pantry",
    scope: "Two-Tone Cabinet Transformation",
    image: "/assets/cabinets.jpg",
    details: "Contrasting island finish with durable moisture-resistant topcoat.",
  },
];

export const Gallery: React.FC<GalleryProps> = ({ onOpenEstimateModal }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "exterior", label: "Exterior Homes" },
    { id: "interior", label: "Interior Rooms" },
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
    <section id="gallery" className="py-20 lg:py-28 bg-[#0b0d10] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30">
            <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
              Project Showcase
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">DIFFERENCE</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore transformations across residential exteriors, fine interior spaces, cabinet refinishing, decks, and property structures.
          </p>
        </div>

        {/* Featured Interactive Before & After Transformation Slider */}
        <div className="mb-16 rounded-2xl bg-[#13161c] border border-orange-500/30 p-4 sm:p-7 shadow-2xl shadow-black/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs font-display uppercase tracking-widest font-semibold text-orange-400">
                Interactive Comparison
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                Cabinet & Surface Refinishing Before / After
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <ArrowsLeftRight className="w-4 h-4 text-amber-400" />
              <span>Drag or swipe slider across image</span>
            </div>
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
            className="relative h-64 sm:h-96 md:h-[460px] w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* "After" Image (Full background) */}
            <img
              src="/assets/cabinets-after.jpg"
              alt="FireHorse Painting Kitchen Cabinet After Transformation"
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
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter brightness-85 contrast-95 sepia-[0.25]"
                style={{ width: "100%", minWidth: "100%" }}
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-lg bg-black/85 text-white font-display text-xs font-bold uppercase tracking-wider border border-slate-700 shadow-md">
                Original Surface
              </div>
            </div>

            {/* Right Badge "FireHorse Finish" */}
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-lg bg-[#c2410c] text-white font-display text-xs font-bold uppercase tracking-wider border border-orange-400 shadow-lg">
              FireHorse Finish
            </div>

            {/* Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-gradient-to-b from-amber-400 via-white to-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-orange-400 flex items-center justify-center text-white shadow-xl">
                <ArrowsLeftRight weight="bold" className="w-4 h-4 text-amber-300" />
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
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
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
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl bg-[#13161c] border border-slate-800 hover:border-orange-500/50 overflow-hidden shadow-xl shadow-black/40 flex flex-col transition-all duration-300"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-[#13161c]/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-slate-950/85 border border-slate-700 text-amber-400 font-display text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>

                  {/* Zoom Trigger Button */}
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="absolute bottom-4 right-4 p-2 rounded-xl bg-slate-950/80 text-white border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-600 hover:border-orange-500 cursor-pointer"
                    aria-label="View larger image"
                  >
                    <MagnifyingGlassPlus className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-400 uppercase tracking-wide mt-1">
                      {item.scope}
                    </p>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <CheckCircle weight="fill" className="text-orange-500 w-4 h-4" />
                      Completed Finish
                    </span>
                    <button
                      onClick={() => onOpenEstimateModal(item.categoryLabel)}
                      className="text-xs font-display font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                    >
                      Get Similar Quote →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox for Project Inspection */}
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
                className="max-w-4xl w-full bg-[#121419] rounded-2xl border border-orange-500/40 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[70vh] overflow-hidden bg-black">
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
                    <p className="text-sm text-slate-300 mt-1">
                      {selectedImage.details}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const cat = selectedImage.categoryLabel;
                      setSelectedImage(null);
                      onOpenEstimateModal(cat);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider whitespace-nowrap shadow-lg border border-orange-400/40"
                  >
                    Request Quote for This
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
