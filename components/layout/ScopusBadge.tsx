'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScopusBadge() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsVisible(false)}
            className="fixed bottom-8 left-4 md:left-8 z-40 group flex items-center cursor-pointer md:cursor-default"
          >
            <div className="relative">
              {/* Close button - desktop only, no background */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVisible(false);
                }}
                className="hidden md:flex absolute top-0 right-0 w-6 h-6 items-center justify-center text-white text-2xl font-bold transition-all z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Close Scopus badge"
              >
                ×
              </button>

              {/* Badge */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/future-bme-2026/images/ScopusBedge.png"
                alt="Scopus Indexed"
                className="w-24 md:w-40 h-auto drop-shadow-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show button when hidden */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-8 left-0 z-40 bg-[var(--purple)] hover:bg-[var(--blue)] text-white p-2 md:p-3 rounded-r-lg shadow-lg transition-all"
          aria-label="Show Scopus badge"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      )}
    </>
  );
}
