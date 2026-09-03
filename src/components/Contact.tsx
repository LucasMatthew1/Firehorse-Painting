import React, { useState } from "react";
import { toast } from "sonner";
import { Phone, PaperPlaneTilt, Sparkle, ShieldCheck } from "@phosphor-icons/react";

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
    <section id="contact" className="py-20 sm:py-28 bg-[#090b0e] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/4 w-[45rem] h-[25rem] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Phone & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/10 border border-orange-500/30 text-amber-400 text-xs font-display font-bold uppercase tracking-wider">
              <Sparkle weight="fill" className="w-3.5 h-3.5 text-orange-400" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
              FREE ESTIMATE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500">CONTACT</span>
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Have questions or ready to discuss your painting project? Give us a call or text directly, or fill out the short form.
            </p>

            {/* Direct Phone Card with Gradient Accent */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#141822] to-[#0d1017] border border-orange-500/30 space-y-3 shadow-2xl shadow-black/80">
              <span className="text-xs uppercase font-display font-bold tracking-wider text-slate-400">
                Call or Text Anytime
              </span>

              <a
                href="tel:5022968106"
                className="block text-3xl sm:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 hover:from-amber-200 hover:to-orange-300 transition-colors"
              >
                502-296-8106
              </a>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-300 font-light">
                <ShieldCheck weight="fill" className="w-4 h-4 text-orange-400" />
                <span>Fast local response across Louisville & surrounding areas.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141822] to-[#0d1017] border border-slate-800/90 hover:border-orange-500/40 transition-all shadow-2xl shadow-black/80">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center mx-auto text-amber-400">
                    <ShieldCheck weight="fill" className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase">
                    Estimate Request Sent!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed">
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
                    className="px-7 py-3 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs uppercase font-display font-bold tracking-wider cursor-pointer border border-slate-700"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1a1e28] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1a1e28] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1a1e28] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1a1e28] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1a1e28] text-white">
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
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1e28] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#c2410c] via-orange-600 to-[#9a3412] hover:from-orange-500 hover:to-amber-500 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-xl shadow-orange-950/70 cursor-pointer border border-orange-400/40 flex items-center justify-center gap-2"
                  >
                    <PaperPlaneTilt weight="bold" className="w-5 h-5" />
                    <span>{loading ? "Sending..." : "SUBMIT FOR FREE ESTIMATE"}</span>
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
