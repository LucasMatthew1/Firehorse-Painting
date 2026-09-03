import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, CheckCircle, ArrowRight, Chats, PaintBrush } from "@phosphor-icons/react";
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
    "Multi-Surface / Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please provide at least your name and phone number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you! Your estimate request has been received. We will contact you shortly.");
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0b0d10] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Fast Reach */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-orange-500/30">
                <span className="font-display tracking-widest text-xs font-bold uppercase text-orange-400">
                  Contact Us
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                LET'S TALK ABOUT YOUR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  PAINTING PROJECT
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Have questions or ready for a detailed estimate? Reach out directly by phone, text, or fill out the form for a prompt response.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-[#14171f] border border-orange-500/30 space-y-4 shadow-xl shadow-black/50">
              <span className="text-xs uppercase font-display font-semibold tracking-wider text-amber-400">
                Direct Line • Call or Text
              </span>

              <a
                href="tel:5022968106"
                className="flex items-center gap-3.5 group text-white hover:text-orange-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone weight="fill" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold tracking-wide">
                    502-296-8106
                  </div>
                  <div className="text-xs text-slate-300">
                    Click to call immediately
                  </div>
                </div>
              </a>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <a
                  href="sms:5022968106"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 hover:text-white text-xs font-bold font-display uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Chats weight="fill" className="w-4 h-4" />
                  <span>Send Text Message</span>
                </a>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle weight="fill" className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span>Free On-Site & Digital Estimates</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle weight="fill" className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span>Professional Prep & Flawless Finishes</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle weight="fill" className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span>Serving Residential Homes, Cabinets, Decks & Barns</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl bg-[#13161c] border border-slate-800/90 shadow-2xl shadow-black/80 relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
                  Request Your Free Estimate
                </h3>
                <p className="text-sm text-slate-400">
                  Fill out your details below and we will get back to you with next steps.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-900/90 border border-orange-500/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/40">
                    <CheckCircle weight="fill" className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white uppercase">
                    Estimate Request Sent!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thanks, <strong>{formData.name}</strong>. We've received your request for <strong>{formData.projectType}</strong> painting. We will call or text you at <strong>{formData.phone}</strong> promptly.
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs uppercase font-display font-bold tracking-wider"
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
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="502-XXX-XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
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
                      Project Details & Surface Notes
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the surfaces, approximate size, current condition, or any specific timeline you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1d24] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#c2410c] via-[#b43403] to-[#9a3412] hover:from-orange-600 hover:to-amber-600 text-white font-display text-base sm:text-lg font-bold tracking-wider uppercase transition-all shadow-xl shadow-black/80 cursor-pointer flex items-center justify-center gap-2 border border-orange-400/40"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <PaintBrush weight="bold" className="w-5 h-5" />
                        <span>Get A Free Estimate</span>
                        <ArrowRight weight="bold" className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-400 pt-1">
                    No spam. We respect your privacy and will only use your information to contact you regarding your painting project.
                  </p>
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
