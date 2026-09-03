import React from "react";
import { Phone, Chats, PaintBrush } from "@phosphor-icons/react";

interface MobileCallBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0d0f12]/95 backdrop-blur-md border-t border-orange-500/40 p-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now Button */}
        <a
          href="tel:5022968106"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a22] border border-orange-500/40 text-orange-400 active:scale-95 transition-all text-center"
        >
          <Phone weight="fill" className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-display font-bold uppercase tracking-wider text-white">Call Now</span>
        </a>

        {/* Text SMS Button */}
        <a
          href="sms:5022968106"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a22] border border-amber-500/40 text-amber-400 active:scale-95 transition-all text-center"
        >
          <Chats weight="fill" className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-display font-bold uppercase tracking-wider text-white">Text 502</span>
        </a>

        {/* Free Estimate Trigger */}
        <button
          onClick={onOpenEstimateModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white active:scale-95 transition-all text-center shadow-md cursor-pointer"
        >
          <PaintBrush weight="bold" className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-display font-bold uppercase tracking-wider">Free Quote</span>
        </button>
      </div>
    </div>
  );
};
export default MobileCallBar;
