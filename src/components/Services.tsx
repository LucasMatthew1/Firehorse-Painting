import React from "react";
import { motion, type Variants } from "framer-motion";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "exterior",
    title: "Exterior Home",
    description: "Protect and refresh your home's exterior with a professional finish designed to endure the elements and enhance curb appeal.",
    image: "/assets/exterior-home.jpg",
  },
  {
    id: "interior",
    title: "Interior Home",
    description: "Give your interior spaces a clean, fresh, professional look with sharp lines, thorough drywall prep, and smooth finishes.",
    image: "/assets/interior-home.jpg",
  },
  {
    id: "cabinets",
    title: "Cabinets",
    description: "Transform outdated cabinets with a smooth, durable finish without the massive expense and hassle of total replacement.",
    image: "/assets/cabinets.jpg",
  },
  {
    id: "decks",
    title: "Decks",
    description: "Restore and refresh your deck with quality preparation, pressure washing, and premium paint or penetrating stain.",
    image: "/assets/deck.jpg",
  },
  {
    id: "buildings-barns",
    title: "Buildings / Barns",
    description: "Professional painting solutions for barns, pole buildings, detached structures, and agricultural or property exteriors.",
    image: "/assets/barn.jpg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#0b0d10] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
            Professional Painting Services
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">PAINT</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light">
            Residential and property painting tailored to your surfaces, built for beauty and long-lasting durability.
          </p>
        </div>

        {/* 5 Service Cards: Clean, Sleek, Photo-Driven */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className={`group relative rounded-2xl bg-[#13161c] border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl shadow-black/50 hover:-translate-y-1 ${
                index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
              } ${index === 4 ? "lg:col-span-2 lg:col-start-2" : ""}`}
            >
              {/* Photo Area */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={`${service.title} painting service`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent" />
                
                {/* Overlay Title */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-2xl font-display font-bold text-white tracking-wide uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {service.description}
                </p>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#181c24] hover:bg-[#c2410c] text-slate-200 hover:text-white font-display text-sm uppercase tracking-wider font-bold transition-all duration-200 text-center border border-slate-700/80 hover:border-orange-400 cursor-pointer"
                >
                  Request {service.title} Quote
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
