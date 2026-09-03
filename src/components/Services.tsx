import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, House, PaintBrush, Sparkle, Wrench, Warehouse } from "@phosphor-icons/react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: "exterior",
    title: "Exterior Home",
    subtitle: "Siding, Trim, Brick & Entryways",
    description: "Protect and refresh your home's exterior with a professional finish designed to endure harsh weather and boost curb appeal.",
    image: "/assets/exterior-home.jpg",
    tags: ["Siding & Trim", "Brick & Stucco", "Doors & Shutters", "Weatherproof Seal"],
    icon: <House className="w-6 h-6 text-orange-400" weight="duotone" />,
  },
  {
    id: "interior",
    title: "Interior Home",
    subtitle: "Living Rooms, Bedrooms & Trim",
    description: "Give your interior spaces a clean, fresh, professional look with sharp lines, thorough surface repair, and flawless wall coatings.",
    image: "/assets/interior-home.jpg",
    tags: ["Walls & Ceilings", "Doors & Trim", "Drywall Patching", "Clean Edge Cut-Ins"],
    icon: <PaintBrush className="w-6 h-6 text-amber-400" weight="duotone" />,
  },
  {
    id: "cabinets",
    title: "Cabinets",
    subtitle: "Kitchen & Vanity Transformations",
    description: "Transform outdated cabinets with a smooth, durable finish without the massive expense of total replacement.",
    image: "/assets/cabinets.jpg",
    tags: ["Spray-Smooth Finish", "Kitchen Cabinets", "Bathroom Vanities", "Durable Enamel"],
    icon: <Sparkle className="w-6 h-6 text-orange-400" weight="duotone" />,
  },
  {
    id: "decks",
    title: "Decks",
    subtitle: "Wood Restoration, Staining & Sealing",
    description: "Restore and refresh your deck with quality preparation, pressure washing, and premium paint or penetrating stain.",
    image: "/assets/deck.jpg",
    tags: ["Deck Staining", "Wood Prep & Clean", "Solid & Semi-Transparent", "Water Sealing"],
    icon: <Wrench className="w-6 h-6 text-amber-400" weight="duotone" />,
  },
  {
    id: "buildings-barns",
    title: "Buildings / Barns",
    subtitle: "Outbuildings, Pole Barns & Property Structures",
    description: "Professional painting solutions for barns, outbuildings, detached garages, and large property structures.",
    image: "/assets/barn.jpg",
    tags: ["Agricultural Barns", "Detached Garages", "Metal & Wood Siding", "Property Structures"],
    icon: <Warehouse className="w-6 h-6 text-orange-400" weight="duotone" />,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0b0d10] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30">
            <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
              Expert Craftsmanship
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">PAINT</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From single-room refreshers to large residential transformations and rural property structures, we deliver reliable, long-lasting finishes.
          </p>
        </div>

        {/* 5 Service Cards Grid: 3 columns on top row, 2 columns on bottom row for balanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const isLastTwoOnDesktop = index >= 3;
            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className={`group relative rounded-2xl bg-[#13161c] border border-slate-800/90 hover:border-orange-500/60 transition-all duration-300 flex flex-col overflow-hidden shadow-xl shadow-black/40 hover:shadow-orange-950/40 hover:-translate-y-1 ${
                  isLastTwoOnDesktop && index === 3 ? "lg:col-span-1 lg:col-start-1 lg:ml-auto w-full" : ""
                } ${
                  isLastTwoOnDesktop && index === 4 ? "lg:col-span-2 lg:col-start-2 w-full" : ""
                }`}
              >
                {/* Image Container with Dark Scrim Overlay */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={`${service.title} painting service`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-[#13161c]/40 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-md">
                    {service.icon}
                  </div>

                  {/* Title Floating over Bottom Edge */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs uppercase font-display font-semibold tracking-wider text-amber-400">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-xs px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-[#1b2029] hover:bg-orange-600 text-slate-200 hover:text-white font-display text-sm uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/80 hover:border-orange-500 cursor-pointer group/btn"
                  >
                    <span>Request {service.title} Quote</span>
                    <ArrowRight weight="bold" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Estimate Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171a22] via-[#1c202a] to-[#171a22] border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
              Need A Custom Painting Scope or Multi-Surface Project?
            </h4>
            <p className="text-sm text-slate-300">
              We inspect the site, evaluate all prep requirements, and give you an upfront, clear estimate.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:5022968106"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c2410c] hover:bg-[#ea580c] text-white font-display text-sm font-bold tracking-wider uppercase transition-all shadow-lg border border-orange-400/40"
            >
              <span>Call 502-296-8106</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
