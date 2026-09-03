import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "exterior",
    title: "Exterior Home",
    badge: "Full Weather Protection",
    description: "Protect and refresh your home's exterior with a professional finish designed to endure the elements and enhance curb appeal.",
    image: "/assets/exterior-home.jpg",
  },
  {
    id: "interior",
    title: "Interior Home",
    badge: "Clean Cut Lines",
    description: "Give your interior spaces a clean, fresh, professional look with sharp lines, thorough drywall prep, and smooth finishes.",
    image: "/assets/interior-home.jpg",
  },
  {
    id: "cabinets",
    title: "Cabinets",
    badge: "Factory Smooth Finish",
    description: "Transform outdated cabinets with a smooth, durable finish without the massive expense and hassle of total replacement.",
    image: "/assets/cabinets.jpg",
  },
  {
    id: "decks",
    title: "Decks",
    badge: "Deep Stain & Seal",
    description: "Restore and refresh your deck with quality preparation, pressure washing, and premium paint or penetrating stain.",
    image: "/assets/deck.jpg",
  },
  {
    id: "buildings-barns",
    title: "Buildings / Barns",
    badge: "Heavy Duty Coatings",
    description: "Professional painting solutions for barns, pole buildings, detached structures, and agricultural or property exteriors.",
    image: "/assets/barn.jpg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-12 sm:py-16 bg-[#090b0e] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Radial Gradient Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-orange-400" />
            <span>Professional Painting Services</span>
          </div>
          
          <h2 className="text-3.5xl sm:text-4.5xl md:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">PAINT</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Residential and property painting tailored to your surfaces, built for beauty and long-lasting durability.
          </p>
        </div>

        {/* 5 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className={`group relative rounded-3xl bg-gradient-to-b from-[#141820] to-[#0d1015] border border-slate-800/90 hover:border-orange-500/60 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl shadow-black/80 hover:shadow-orange-950/40 hover:-translate-y-1 ${
                index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
              } ${index === 4 ? "lg:col-span-2 lg:col-start-2" : ""}`}
            >
              {/* Photo Area with Gradient Scrim */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={`${service.title} painting service`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-[#141820]/40 to-transparent" />
                
                {/* Floating Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-orange-500/30 text-amber-400 font-display text-xs font-bold uppercase tracking-wider shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Overlay Title */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-wide uppercase group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#181d26] hover:bg-gradient-to-r hover:from-[#c2410c] hover:to-[#9a3412] text-slate-200 hover:text-white font-display text-xs uppercase tracking-wider font-bold transition-all duration-200 text-center border border-slate-700/80 hover:border-orange-400/50 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request {service.title} Quote</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
