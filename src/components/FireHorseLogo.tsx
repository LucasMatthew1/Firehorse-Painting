import React from "react";

interface FireHorseLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

export const FireHorseLogo: React.FC<FireHorseLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeMap = {
    sm: "h-12 sm:h-14",
    md: "h-16 sm:h-20 md:h-24",
    lg: "h-24 sm:h-32",
    xl: "h-36 sm:h-44",
    hero: "h-32 sm:h-40 md:h-48",
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/assets/pasted-image-2026-09-03T00-51-46-555Z.png"
        alt="FireHorse Painting Logo"
        className={`${sizeMap[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_20px_rgba(249,115,22,0.25)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]`}
      />
    </div>
  );
};

export default FireHorseLogo;
