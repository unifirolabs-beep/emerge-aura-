"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Get In Touch — Contact Us"
      className="relative w-full bg-[#03261B] text-[#F4EFE6] py-20 sm:py-28 lg:py-32 overflow-hidden select-none"
    >
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg
          className="absolute -top-24 -left-24 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="300"
            cy="300"
            r="260"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle cx="300" cy="300" r="180" stroke="#D4AF37" strokeWidth="1" />
        </svg>

        <svg
          className="absolute -bottom-20 -right-20 w-[550px] h-[550px]"
          viewBox="0 0 550 550"
          fill="none"
        >
          <path
            d="M 50,50 C 200,150 350,300 500,500"
            stroke="#D4AF37"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.24em] text-[#E5C15A] uppercase">
              REACH OUT
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/50" />
          </div>

          <h2 className="font-editorial text-[42px] sm:text-[52px] lg:text-[58px] font-bold text-[#E5C15A] leading-tight tracking-tight mb-2">
            Get in touch
          </h2>

          <p className="font-sans text-[15px] sm:text-[17px] text-[#F5EBD5]/80 font-normal">
            Got questions? Write to us.
          </p>
        </motion.div>

        {/* Form Card Container */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="bg-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-[#EADBCA]/80 text-[#10251D] max-w-[680px] mx-auto"
        >
          {isSubmitted ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#063522] mb-3">
                Thank you for reaching out!
              </h3>
              <p className="text-[14px] sm:text-[15px] font-sans text-[#334A3E] max-w-md mx-auto leading-relaxed mb-8">
                Your message has been received. Our conclave team will review
                your query and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A880] text-[#063522] hover:bg-[#C5A880] hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium tracking-wide uppercase shadow-xs active:scale-95"
              >
                <span>Send Another Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Form Heading Inside Card (as shown in reference) */}
              <div className="border-b border-[#EBE4D3] pb-4 mb-5">
                <h3 className="font-editorial text-[22px] sm:text-[24px] font-bold text-[#063522] leading-tight">
                  Get in touch
                </h3>
                <p className="font-sans text-[13px] text-[#556960] mt-0.5">
                  Got questions? Write to us.
                </p>
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold text-[#243E33] tracking-wide mb-1.5 font-sans"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-xl border border-[#D8CEBA] bg-[#FAF8F5] text-[#10251D] placeholder-[#8A9B93] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold text-[#243E33] tracking-wide mb-1.5 font-sans"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-xl border border-[#D8CEBA] bg-[#FAF8F5] text-[#10251D] placeholder-[#8A9B93] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-[#243E33] tracking-wide mb-1.5 font-sans"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 rounded-xl border border-[#D8CEBA] bg-[#FAF8F5] text-[#10251D] placeholder-[#8A9B93] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-[#243E33] tracking-wide mb-1.5 font-sans"
                >
                  Phone
                </label>
                <div className="relative flex rounded-xl border border-[#D8CEBA] bg-[#FAF8F5] overflow-hidden focus-within:ring-2 focus-within:ring-[#D4AF37]/50 focus-within:border-[#D4AF37] focus-within:bg-white transition-all duration-200">
                  <div className="flex items-center gap-1.5 px-3.5 bg-[#F2EDE2] border-r border-[#D8CEBA] text-xs font-medium text-[#243E33] select-none shrink-0">
                    <span className="text-sm">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-transparent text-[#10251D] placeholder-[#8A9B93] text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#243E33] tracking-wide mb-1.5 font-sans"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-xl border border-[#D8CEBA] bg-[#FAF8F5] text-[#10251D] placeholder-[#8A9B93] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button (Centered, exactly as shown in reference) */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-10 py-3 rounded-lg bg-[#041D14] hover:bg-[#072F21] text-[#E5C15A] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase border border-[#D4A63A] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-70 disabled:pointer-events-none group"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
