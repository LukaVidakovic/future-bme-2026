'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Header Image Section with Parallax */}
      <section ref={ref} className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="/future-bme-2026/images/HeaderBME.jpg"
            alt="Future BME 2026"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--navy)]/20 to-[var(--navy)]" />
        </motion.div>
        
        {/* Floating particles */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[var(--purple)] rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, Math.random() * -100 - 50],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}
      </section>

      {/* Hero Content Section */}
      <section className="relative bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/30 to-[var(--navy)] py-20 md:py-32 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, var(--purple) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, var(--purple) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, var(--purple) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Conference Title */}
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              2nd International Conference on Business, Management, and Economics Engineering
            </motion.h2>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">Future-BME 2026</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-[var(--blue-light)] italic font-light mb-8 max-w-4xl mx-auto"
            >
              Forging the Future: Business, Management and Economics Engineering
              in the Age of Sustainability and Digital Transformation
            </motion.h3>

            {/* ISSN */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-[var(--gray-light)] mb-12"
            >
              ISSN 3042-2728 (Print) • ISSN 3042-2868 (Online)
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.a
                href="#call-for-papers"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(105,80,222,0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[var(--purple)] text-white font-semibold rounded-full shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">First Call for Papers</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              <Link href="/registration">
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(105,80,222,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-[var(--purple)] text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                >
                  Register Now
                </motion.div>
              </Link>
            </motion.div>

            {/* Conference Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-block mb-12"
            >
              <Link href="/event-info">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(105,80,222,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-[var(--purple)]/90 to-[var(--blue)]/90 backdrop-blur-xl border-2 border-white/30 hover:border-white/60 rounded-2xl transition-all duration-300 cursor-pointer shadow-2xl"
                >
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white font-bold text-2xl md:text-3xl">September 29-30, 2026</span>
                    </div>
                    <span className="hidden md:inline text-white/60 text-2xl">•</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white/90 font-semibold text-lg md:text-xl">Fruške Terme, Serbia</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Scopus Badge - Emphasized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--purple)] to-[var(--blue)] rounded-full blur-2xl opacity-40 animate-pulse" />
                <img
                  src="/future-bme-2026/images/ScopusBedge.png"
                  alt="Scopus Indexed Conference"
                  className="relative w-40 md:w-56 h-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
