'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
        
        {/* Floating particles - only render on client */}
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
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">Future-BME 2026</span>
            </motion.h1>

            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              2nd International Conference on
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-[var(--purple)] via-[var(--blue-light)] to-[var(--purple)] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                Business, Management, and Economics Engineering
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-[var(--gray-light)] italic font-light mb-12 max-w-4xl mx-auto"
            >
              Forging the Future: Business, Management and Economics Engineering
              in the Age of Sustainability and Digital Transformation
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
              <motion.a
                href="/future-bme-2026/registration"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(105,80,222,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-[var(--purple)] text-white font-semibold rounded-full transition-all duration-300"
              >
                Register Now
              </motion.a>
            </motion.div>

            {/* Conference Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-block px-8 py-3 bg-[var(--blue)]/30 backdrop-blur-md border border-[var(--purple)]/50 rounded-full"
            >
              <p className="text-[var(--gray-light)]">
                <span className="text-[var(--purple)] font-bold">September 29-30, 2026</span> • Fruške Terme, Serbia
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
