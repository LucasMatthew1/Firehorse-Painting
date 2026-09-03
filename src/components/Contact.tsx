import React, { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType = "Exterior Home" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: initialProjectType,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectOptions = [
    "Exterior Home",
    "Interior Home",
    "Cabinets",
    "Decks",
    "Buildings / Barns",
    "Other",
  ];

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
      toast.success("Thank you! Your estimate request has been received.");
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0b0d10] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & Information */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-amber-400">
              Get in Touch
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-tight">
              FREE ESTIMATE & CONTACT
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Have questions or ready to discuss your painting project? Give us a call or text directly, or fill out the short form.
            </p>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-[#13161c] border border-slate-800 space-y-3">
              <span className="text-xs uppercase font-display font-semibold tracking-wider text-slate-400">
                Call or Text Anytime
              </span>

              <a
                href="tel:5022968106"
                className="block text-3xl font-display font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                502-296-8106
              </a>

              <p className="text-xs text-slate-400 pt-1 font-light">
                Click to call directly on mobile or send a text message.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#13161c] border border-slate-800 shadow-xl shadow-black/60">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <h3 className="text-2xl font-display font-bold text-white uppercase">
                    Estimate Request Sent!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto font-light">
                    Thank you, {formData.name}. We have received your request for {formData.projectType} painting and will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        projectType: "Exterior Home",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs uppercase font-display font-bold tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="502-296-8106"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1a1d24] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Message / Project Scope
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like painted..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c2410c] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/80 cursor-pointer border border-orange-400/30"
                  >
                    {loading ? "Sending..." : "SUBMIT FOR FREE ESTIMATE"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
