'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function RegistrationPage() {
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
              Registration & Fees
            </h1>
            <p className="text-xl md:text-2xl text-[var(--gray-light)] max-w-3xl mx-auto mb-4">
              Registration is mandatory for all participants
            </p>
            <p className="text-lg text-[var(--gray-light)] max-w-2xl mx-auto mb-8">
              Regardless of whether they will be attending the conference in person or not
            </p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(105,80,222,0.6)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Register Here
            </button>
          </motion.div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Fees</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Early Bird */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/10 backdrop-blur-xl border-2 border-[var(--purple)]/50"
            >
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-[var(--purple)] rounded-full text-sm font-bold text-white mb-4">
                  EARLY BIRD
                </div>
                <p className="text-[var(--gray-light)] text-sm">Until May 1, 2026</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Regular</span>
                  <span className="text-[var(--purple)] font-bold text-xl">150€ <span className="text-sm text-[var(--gray-light)]">(17,550 RSD)</span></span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Student</span>
                  <span className="text-[var(--purple)] font-bold text-xl">100€ <span className="text-sm text-[var(--gray-light)]">(11,700 RSD)</span></span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Accompanying Person</span>
                  <span className="text-[var(--purple)] font-bold text-xl">110€ <span className="text-sm text-[var(--gray-light)]">(12,870 RSD)</span></span>
                </div>
              </div>
            </motion.div>

            {/* Regular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[var(--blue)]/20 to-[var(--teal)]/10 backdrop-blur-xl border-2 border-[var(--blue)]/50"
            >
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-[var(--blue-light)] rounded-full text-sm font-bold text-white mb-4">
                  REGULAR
                </div>
                <p className="text-[var(--gray-light)] text-sm">After May 1, 2026</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Regular</span>
                  <span className="text-[var(--blue-light)] font-bold text-xl">180€ <span className="text-sm text-[var(--gray-light)]">(21,000 RSD)</span></span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Student</span>
                  <span className="text-[var(--blue-light)] font-bold text-xl">120€ <span className="text-sm text-[var(--gray-light)]">(14,000 RSD)</span></span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-[var(--navy)]/40">
                  <span className="text-white font-bold">Accompanying Person</span>
                  <span className="text-[var(--blue-light)] font-bold text-xl">130€ <span className="text-sm text-[var(--gray-light)]">(15,210 RSD)</span></span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[var(--navy)]/40 backdrop-blur-xl border border-white/10 mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Regular Registration Fee Includes</h3>
            <ul className="space-y-3 text-[var(--gray-light)]">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Publication of one full paper up to 8 pages (A4) in the conference proceedings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>One certificate of presentation or attendance in e-form for first co-author (delivered via email after the conference)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Refreshment breaks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Gala dinner for first co-author</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Certificate of participation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Additional activities for first co-author</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-xl bg-[var(--blue)]/20 border border-[var(--purple)]/30">
              <p className="text-sm text-[var(--gray-light)] italic">
                <strong className="text-white">Note:</strong> Co-authors who wish to attend the conference and/or receive a certificate are obliged to pay the additional registration fee for Accompanying person (130€ / 15,210 RSD).
              </p>
            </div>
          </motion.div>

          {/* Additional Fees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[var(--blue)]/20 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Fees</h3>
            <div className="space-y-3 text-[var(--gray-light)]">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--blue-light)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>In case there are more than three co-authors, for each additional co-author, <strong className="text-white">20€</strong> will be added to the overall registration fee amount.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--blue-light)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>If a full paper exceeds 8 pages (A4 size), each additional page will be subject to a charge of <strong className="text-white">20€</strong>.</p>
              </div>
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

      {/* Payment Instructions */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 backdrop-blur-xl border-2 border-[var(--purple)]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Payment Instructions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--navy)]/40 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Payment in EUR</h3>
                <p className="text-[var(--gray-light)] mb-6 text-sm">
                  <strong className="text-white">NOTE:</strong> Please enter the conference name (FUTURE-BME 2026) and pro-invoice number in payment details. All transaction charges shall be borne by the payer.
                </p>
                <a
                  href="/files/INSTRUCTIONFOREURPAYMENTS.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold rounded-xl hover:shadow-lg transition-all text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download EUR Instructions
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--navy)]/40 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Payment in RSD</h3>
                <p className="text-[var(--gray-light)] mb-6 text-sm">
                  For payments in Serbian Dinars (RSD), please follow the instructions in the document below.
                </p>
                <a
                  href="/files/InstrukcijezadinarskoplaanjeFUTURE-BME2026.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--blue)] to-[var(--teal)] text-white font-bold rounded-xl hover:shadow-lg transition-all text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download RSD Instructions
                </a>
              </div>
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
              className="relative w-full max-w-4xl h-[calc(95dvh-5rem)] bg-[var(--navy)] rounded-3xl shadow-2xl border border-[var(--purple)]/30 overflow-hidden"
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
                src="https://docs.google.com/forms/d/e/1FAIpQLScxWhWRlRWv8ug9E9mrt0dsUwSBSc-LYCS7mEFHq66H-TtxbQ/viewform?embedded=true" 
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
