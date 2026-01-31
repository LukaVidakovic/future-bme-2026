'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function SubmissionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/10 via-transparent to-[var(--blue)]/10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Submissions
            </h1>
            <p className="text-xl md:text-2xl text-[var(--gray-light)] max-w-3xl mx-auto mb-8">
              Registration and peer review process
            </p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(105,80,222,0.6)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Submit Your Abstract
            </button>
          </motion.div>
        </div>
      </section>

      {/* Full Paper Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-[var(--blue)]/20 backdrop-blur-xl border border-white/10 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Full Paper Submission</h2>
            <p className="text-[var(--gray-light)] mb-6 text-lg">
              Full papers should be submitted to: <a href="mailto:future-bme@uns.ac.rs" className="text-[var(--purple)] font-bold hover:underline">future-bme@uns.ac.rs</a>
            </p>
            
            <div className="mb-8">
              <a
                href="/future-bme-2026/files/Template_Future_BME_2026.docx"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Microsoft Word Template
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--navy)]/40 border border-white/5 mb-6">
              <p className="text-[var(--gray-light)] leading-relaxed">
                High quality papers may be invited to be submitted to the <strong className="text-white">IJIEM - International Journal of Industrial Engineering and Management</strong> (ISSN 2217-2661)
              </p>
            </div>
          </motion.div>

          {/* Paper Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-[var(--navy)]/40 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Propositions Regarding Papers/Proceedings</h3>
            
            <div className="space-y-4 text-[var(--gray-light)]">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>All submitted papers will be peer reviewed by the reviewers drawn from the scientific committee or external reviewers depending on the topic, title and the subject matter of the paper.</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Paper publication does not require presentation at the conference venue.</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Publication of one paper requires payment of one registration fee, regardless of the number of authors (one author or two/three co-authors).</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>In case there are more than three co-authors, for each additional co-author, 20€ will be added to the overall registration fee amount.</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>The official language of the conference is <strong className="text-white">English</strong>. Papers may be written and presented in English.</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-[var(--blue)]/20 border border-[var(--purple)]/30">
              <p className="text-[var(--gray-light)] italic leading-relaxed mb-4">
                <strong className="text-white">Full papers are submitted for double-blind peer review after successful acceptance of a conference abstract.</strong> Please be sure that the submitted paper is in accordance with the available template. The paper should have between 5 and 8 pages. If a full paper exceeds 8 pages (A4 size), each additional page will be subject to a charge.
              </p>
              <p className="text-[var(--gray-light)] italic leading-relaxed">
                Peer reviewers provide a critical assessment of the paper, and may recommend improvements. Although the author may choose not to take this advice, it is highly recommended that the author address any issues, explaining why their research process or conclusions are correct.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-[var(--navy)]/40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 backdrop-blur-xl border-2 border-[var(--purple)]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Important Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--purple)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Abstract Submission</p>
                  <p className="text-[var(--gray-light)]">May 15, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--purple)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Early Bird Payment</p>
                  <p className="text-[var(--gray-light)]">May 1, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--blue-light)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Full Paper Submission</p>
                  <p className="text-[var(--gray-light)]">August 15, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--blue-light)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Acceptance Notification</p>
                  <p className="text-[var(--gray-light)]">August 30, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--teal)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Registration Deadline</p>
                  <p className="text-[var(--gray-light)]">September 15, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--teal)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Payment Deadline</p>
                  <p className="text-[var(--gray-light)]">September 11, 2026</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-xl font-bold text-[var(--purple)]">Conference Dates</p>
              <p className="text-2xl text-white font-bold mt-2">September 29-30, 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-24 md:pt-28 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-[90vh] bg-[var(--navy)] rounded-3xl shadow-2xl border border-[var(--purple)]/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[var(--purple)] hover:bg-[var(--purple)]/80 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScdr6eknmeVR6I0ee34g1A8Gn9Z2FKZb9yvlC1bmadY_k4KNQ/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full h-full"
              >
                Loading…
              </iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
