import React from "react";

interface FireHorseLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "horizontal" | "stacked" | "icon-only";
}

export const FireHorseLogo: React.FC<FireHorseLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  variant = "horizontal",
}) => {
  const sizeMap = {
    sm: { icon: "w-8 h-8", title: "text-lg", sub: "text-[10px]" },
    md: { icon: "w-11 h-11", title: "text-2xl", sub: "text-xs" },
    lg: { icon: "w-16 h-16", title: "text-3xl sm:text-4xl", sub: "text-sm" },
    xl: { icon: "w-24 h-24", title: "text-5xl", sub: "text-base" },
  };

  const currentSize = sizeMap[size];

  // Horse Emblem: Cleanly framed and cropped emblem with subtle glow
  const HorseIcon = (
    <div
      className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1d2128] to-[#121417] p-1.5 border border-orange-500/30 shadow-md group-hover:border-orange-500/70 transition-all duration-300`}
    >
      <div className="absolute inset-0 rounded-xl bg-orange-500/10 blur-sm group-hover:bg-orange-500/25 transition-all"></div>
      
      {/* High-fidelity cropped logo presentation */}
      <img
        src="/assets/pasted-image-2026-09-03T00-51-46-555Z.png"
        alt="FireHorse Painting Horse Emblem"
        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
      />
    </div>
  );

  if (variant === "icon-only" || !showText) {
    return <div className={`inline-flex items-center ${className}`}>{HorseIcon}</div>;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="mb-2">{HorseIcon}</div>
        <div className="flex flex-col items-center">
          <span
            className={`font-display font-bold tracking-wider text-white uppercase leading-none ${currentSize.title}`}
          >
            FIRE<span className="text-orange-500">HORSE</span>
          </span>
          <div className="flex items-center gap-2 mt-1 w-full justify-center">
            <span className="h-[2px] w-5 bg-gradient-to-r from-transparent to-amber-500"></span>
            <span
              className={`font-display tracking-[0.25em] text-amber-400 font-semibold uppercase ${currentSize.sub}`}
            >
              PAINTING
            </span>
            <span className="h-[2px] w-5 bg-gradient-to-l from-transparent to-amber-500"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {HorseIcon}
      <div className="flex flex-col justify-center">
        <span
          className={`font-display font-bold tracking-wider text-white uppercase leading-none ${currentSize.title} drop-shadow-sm`}
        >
          FIRE<span className="text-orange-500">HORSE</span>
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="h-[1.5px] w-3 bg-gradient-to-r from-transparent to-amber-500"></span>
          <span
            className={`font-display tracking-[0.22em] text-amber-400 font-semibold uppercase leading-none ${currentSize.sub}`}
          >
            PAINTING
          </span>
          <span className="h-[1.5px] w-6 bg-gradient-to-l from-transparent to-amber-500"></span>
        </div>
      </div>
    </div>
  );
};
export default FireHorseLogo;
