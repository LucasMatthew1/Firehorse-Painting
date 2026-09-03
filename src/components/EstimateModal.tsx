import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, PaintBrush, ArrowRight } from "@phosphor-icons/react";
import { toast } from "sonner";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  defaultProjectType = "Exterior Home",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: defaultProjectType,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultProjectType) {
      setFormData((prev) => ({ ...prev, projectType: defaultProjectType }));
    }
  }, [defaultProjectType]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please provide your name and phone number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Free estimate request submitted successfully!");
    }, 500);
  };

  const projectTypes = [
    "Exterior Home",
    "Interior Home",
    "Cabinets",
    "Decks",
    "Buildings / Barns",
    "Other / Multiple",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-[#121419] border border-orange-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Close Modal"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/40">
                  <CheckCircle weight="fill" className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Your request for a <strong>{formData.projectType}</strong> painting estimate has been received. We will reach out to you shortly at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5022968106"
                    className="flex-1 py-3 px-4 rounded-xl bg-orange-600 text-white font-display text-sm font-bold uppercase tracking-wider text-center"
                  >
                    Call Directly (502-296-8106)
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-display text-sm font-semibold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-orange-400">
                    <PaintBrush className="w-4 h-4" />
                    <span>Quick Response Guarantee</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
                    Get A Free Estimate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Need an immediate quote? Call or text{" "}
                    <a href="tel:5022968106" className="text-amber-400 hover:underline font-bold">
                      502-296-8106
                    </a>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="502-296-8106"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Optional"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Project Type
                    </label>
                    <select
                      id="modal-projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-[#181b22] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modal-notes" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      id="modal-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe the rooms, exterior areas, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-display text-base font-bold uppercase tracking-wider shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Free Estimate Request</span>
                        <ArrowRight weight="bold" className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default EstimateModal;
