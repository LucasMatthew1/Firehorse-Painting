import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
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
    }, 400);
  };

  const projectTypes = [
    "Exterior Home",
    "Interior Home",
    "Cabinets",
    "Decks",
    "Buildings / Barns",
    "Other",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#121419] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X weight="bold" className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <h3 className="text-2xl font-display font-bold text-white uppercase">
                  Estimate Request Received
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto font-light">
                  Thank you, {formData.name}. We will contact you at {formData.phone} shortly.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5022968106"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#c2410c] text-white font-display text-sm font-bold uppercase tracking-wider text-center"
                  >
                    Call 502-296-8106
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-display text-sm font-semibold uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
                    Free Estimate
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
                    Request A Free Estimate
                  </h3>
                  <p className="text-xs text-slate-400">
                    Or call/text us directly at{" "}
                    <a href="tel:5022968106" className="text-amber-400 font-bold">
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
                      placeholder="Full name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Phone *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="502-296-8106"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Email (Optional)
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email address"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
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
                      placeholder="Brief details about what you need painted..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181b22] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer border border-orange-400/30"
                  >
                    {loading ? "Submitting..." : "Submit Free Estimate Request"}
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
