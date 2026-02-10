'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { papers2024, getFilename } from '@/lib/papers-data';
import { useEffect, useState } from 'react';

export default function PastConference2024() {
  const [highlightedPaper, setHighlightedPaper] = useState<string | null>(null);

  useEffect(() => {
    // Check for hash in URL
    const hash = window.location.hash.replace('#paper-', '');
    if (hash) {
      setHighlightedPaper(hash);
      
      // Scroll to paper after a short delay
      setTimeout(() => {
        const element = document.getElementById(`paper-${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);

      // Remove highlight after 3 seconds
      setTimeout(() => {
        setHighlightedPaper(null);
      }, 3000);
    }
  }, []);

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
              href="/files/FUTURE-BME_2024_FINAL_PROCEEDINGS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.img
                src="/images/BMEPROCEEDINGS.png"
                alt="Proceedings"
                whileHover={{ scale: 1.05 }}
                className="max-w-xs mx-auto rounded-2xl shadow-2xl cursor-pointer border-4 border-[var(--purple)]/50 hover:border-[var(--purple)] transition-all"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conference Papers</h2>
            <p className="text-xl text-[var(--gray-light)] max-w-3xl mx-auto">
              Browse and download individual papers from Future-BME 2024. All papers are peer-reviewed and published in the conference proceedings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative"
          >
            {papers2024.map((paper, index) => (
              <div key={paper.id} className="relative">
                {/* Watermark Logo - Left column (even index) on desktop */}
                {index % 8 === 0 && (
                  <div
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-0"
                    style={{
                      opacity: 0.06,
                      filter: 'blur(1px)'
                    }}
                  >
                    <img 
                      src="/images/BMElogo.png" 
                      alt="BME Logo Watermark"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {/* Watermark Logo - Right column (odd index) on desktop */}
                {index % 8 === 1 && (
                  <div
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-0"
                    style={{
                      opacity: 0.06,
                      filter: 'blur(1px)'
                    }}
                  >
                    <img 
                      src="/images/BMElogo.png" 
                      alt="BME Logo Watermark"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Watermark Logo - Mobile (single column) */}
                {index % 4 === 0 && (
                  <div
                    className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none z-0"
                    style={{
                      opacity: 0.06,
                      filter: 'blur(1px)'
                    }}
                  >
                    <img 
                      src="/images/BMElogo.png" 
                      alt="BME Logo Watermark"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <motion.a
                  id={`paper-${paper.id}`}
                  href={`/files/${getFilename(paper.id)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.005 }}
                  whileHover={{ y: -4 }}
                  className={`relative z-10 flex h-full p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 group ${
                    highlightedPaper === paper.id
                      ? 'bg-[var(--purple)]/30 border-[var(--purple)] shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-pulse'
                      : 'bg-[var(--navy)]/40 border-white/10 hover:border-[var(--purple)]/70 hover:bg-[var(--navy)]/60'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] flex items-center justify-center shadow-lg group-hover:shadow-[var(--purple)]/50 transition-shadow">
                        <span className="text-white font-bold text-sm">{paper.id}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white group-hover:text-[var(--purple)] transition-colors mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-[var(--gray-light)] mb-3 leading-relaxed">
                        {paper.authors}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-[var(--gray-light)] group-hover:text-[var(--purple)] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium">Download PDF</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 rounded-2xl bg-[var(--navy)]/40 backdrop-blur-xl border border-white/10"
          >
            <p className="text-[var(--gray-light)] text-lg">
              <span className="font-bold text-white">{papers2024.length} papers</span> published in Future-BME 2024 Conference Proceedings
            </p>
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
