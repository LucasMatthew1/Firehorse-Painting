import React from "react";

interface FireHorseLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const FireHorseLogo: React.FC<FireHorseLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeMap = {
    sm: "h-11 sm:h-12",
    md: "h-16 sm:h-20",
    lg: "h-24 sm:h-28",
    xl: "h-32 sm:h-40",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/assets/pasted-image-2026-09-03T00-51-46-555Z.png"
        alt="FireHorse Painting Logo"
        className={`${sizeMap[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]`}
      />
    </div>
  );
};

export default FireHorseLogo;
