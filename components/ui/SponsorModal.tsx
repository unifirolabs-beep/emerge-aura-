"use client";

import { X, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SponsorModal({ isOpen, onClose }: SponsorModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl z-10 custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Form Content */}
            <div className="p-6 sm:p-8 lg:p-10 font-sans text-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Submit Sponsorship Request</h2>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your company name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Website URL
                    </label>
                    <input
                      type="url"
                      placeholder="Enter sponsor company website URL"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company Logo
                  </label>
                  <div className="border-2 border-dashed border-[#8EAEFB] bg-[#F8FAFF] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#F0F5FF] transition-colors group">
                    <div className="w-16 h-12 bg-[#2D88FF] rounded flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-[#2D88FF] font-semibold text-sm mb-1">
                      Drop or Upload Your File Here
                    </p>
                    <p className="text-gray-500 text-xs">
                      File size: Up to 30 MB
                      <br />
                      Supported file types: JPG, JPEG, PNG, GIF, WEBP
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter sponsor description"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm resize-y"
                  ></textarea>
                </div>

                {/* Sponsor Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Sponsor Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236B7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.2em'
                    }}
                  >
                    <option value="">Select sponsor type</option>
                    <option value="title">Title Sponsor</option>
                    <option value="platinum">Platinum Sponsor</option>
                    <option value="gold">Gold Sponsor</option>
                    <option value="silver">Silver Sponsor</option>
                    <option value="in-kind">In-Kind Sponsor</option>
                  </select>
                </div>

                {/* Contact Details Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Details</h3>
                  
                  <div className="bg-[#F8F9FA] rounded-xl border border-gray-200 p-6 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your first name"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Enter email address"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your company name"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Designation
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your designation"
                          className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone
                        </label>
                        <div className="flex border border-gray-300 rounded-md bg-white focus-within:border-[#C89B3C] focus-within:ring-1 focus-within:ring-[#C89B3C] transition-colors">
                          <div className="flex items-center px-3 border-r border-gray-300 bg-gray-50 rounded-l-md select-none text-sm font-medium text-gray-700">
                            🇮🇳 +91
                          </div>
                          <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-3 py-2.5 outline-none bg-transparent text-sm rounded-r-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-6 mt-2 flex items-center justify-end gap-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm rounded hover:bg-gray-50 transition-colors uppercase tracking-wide"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2.5 bg-black text-[#C89B3C] border border-black font-semibold text-sm rounded shadow-md hover:bg-gray-900 transition-colors uppercase tracking-wide"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
