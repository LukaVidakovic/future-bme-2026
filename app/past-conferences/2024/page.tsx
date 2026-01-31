'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PastConference2024() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/20 via-[var(--navy)] to-[var(--blue)]/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Future-BME <span className="text-[var(--purple)]">2024</span>
            </h1>
            <p className="text-2xl text-[var(--gray-light)]">
              September 30 - October 1, 2024 • Fruške Terme, Serbia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Link */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">2024 Gallery</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-3xl bg-[var(--navy)]/40 backdrop-blur-xl border border-white/10"
          >
            <p className="text-[var(--gray-light)] mb-8 text-lg">
              Explore the photo gallery and experience the remarkable atmosphere of FUTURE BME 2024
            </p>
            <Link href="/past-conferences/2024/gallery">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full cursor-pointer"
              >
                GALLERY
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Proceedings */}
      <section className="py-16 md:py-24 bg-[var(--navy)]/40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">2024 Proceedings</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[var(--gray-light)] mb-8 text-lg">
              Click on the image to download Future BME 2024 Conference Proceedings
            </p>
            <a
              href="https://www.future-bme.ftn.uns.ac.rs/FUTURE-BME_2024_FINAL_PROCEEDINGS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.img
                src="/future-bme-2026/images/BMEPROCEEDINGS.png"
                alt="Proceedings"
                whileHover={{ scale: 1.05 }}
                className="max-w-xs mx-auto rounded-2xl shadow-2xl cursor-pointer border-4 border-[var(--purple)]/50 hover:border-[var(--purple)] transition-all"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Papers List - Placeholder */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conference Papers</h2>
            <p className="text-[var(--gray-light)]">All papers are available in the proceedings PDF above</p>
          </motion.div>
        </div>
      </section>

      {/* CTA for 2026 */}
      <section className="py-32 md:py-40 bg-[var(--navy)]/40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 md:p-20 rounded-3xl bg-gradient-to-br from-[var(--purple)]/30 to-[var(--blue)]/20 backdrop-blur-xl border-2 border-[var(--purple)]/50"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Us in 2026!
            </h2>
            <p className="text-xl text-[var(--gray-light)] mb-10">
              Be part of the next chapter of Future-BME
            </p>
            <Link href="/registration">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full cursor-pointer"
              >
                <span>Register for 2026</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
