"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
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
            className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1 text-gray-800 hover:text-black transition-colors"
            >
              <X className="w-6 h-6 border border-gray-400 rounded-full p-1" />
            </button>

            {/* Form Content */}
            <div className="p-8 sm:p-10 text-gray-800">
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Sign In</h2>
              
              <div className="w-full h-[1px] bg-gray-100 mb-8" />

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div>
                  <label className="block text-sm sm:text-[15px] font-medium text-gray-900 mb-2 font-serif">
                    Email Address or Ticket ID
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] outline-none transition-colors text-sm font-sans"
                  />
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-gray-300 text-[#C89B3C] focus:ring-[#C89B3C] cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-sm font-serif text-gray-900 cursor-pointer">
                    Remember Me
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-black text-[#C89B3C] border border-black font-semibold text-sm rounded hover:bg-gray-900 transition-colors uppercase tracking-widest font-sans"
                  >
                    SIGN IN
                  </button>
                </div>
                
                <div className="w-full h-[1px] border-t border-dashed border-gray-200 mt-8" />
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
