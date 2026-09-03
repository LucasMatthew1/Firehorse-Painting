import React from "react";

interface MobileCallBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0d0f12]/95 backdrop-blur-md border-t border-orange-500/30 p-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now Button */}
        <a
          href="tel:5022968106"
          className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#171a22] border border-orange-500/40 text-amber-400 active:scale-95 transition-all text-center font-display text-xs font-bold uppercase tracking-wider"
        >
          Call 502
        </a>

        {/* Text SMS Button */}
        <a
          href="sms:5022968106"
          className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#171a22] border border-slate-700 text-slate-200 active:scale-95 transition-all text-center font-display text-xs font-bold uppercase tracking-wider"
        >
          Text Us
        </a>

        {/* Free Estimate Trigger */}
        <button
          onClick={onOpenEstimateModal}
          className="flex items-center justify-center py-2.5 px-1 rounded-xl bg-[#c2410c] hover:bg-orange-600 text-white active:scale-95 transition-all text-center font-display text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer border border-orange-400/30"
        >
          Estimate
        </button>
      </div>
    </div>
  );
};

export default MobileCallBar;
