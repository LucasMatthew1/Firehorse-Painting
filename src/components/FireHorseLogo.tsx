import React from "react";

interface FireHorseLogoProps {
  className?: string;
  imgClassName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero" | "custom";
}

export const FireHorseLogo: React.FC<FireHorseLogoProps> = ({
  className = "",
  imgClassName = "",
  size = "md",
}) => {
  const sizeMap = {
    xs: "h-12 sm:h-13",
    sm: "h-16 sm:h-18",
    md: "h-20 sm:h-24",
    lg: "h-32 sm:h-36 md:h-40",
    xl: "h-40 sm:h-44",
    hero: "h-48 sm:h-56 md:h-64",
    custom: "",
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/assets/pasted-image-2026-09-03T01-29-47-197Z.png"
        alt="FireHorse Painting Logo"
        className={`${sizeMap[size]} ${imgClassName} w-auto object-contain transition-all duration-300 hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(249,115,22,0.35)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]`}
      />
    </div>
  );
};

export default FireHorseLogo;
