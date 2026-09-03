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
    xs: "h-9 sm:h-10",
    sm: "h-11 sm:h-12",
    md: "h-14 sm:h-16",
    lg: "h-20 sm:h-24 md:h-28",
    xl: "h-28 sm:h-32",
    hero: "h-32 sm:h-38 md:h-44",
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
