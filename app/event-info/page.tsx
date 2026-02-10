'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StaticImage from '@/components/StaticImage';

export default function EventInfoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/30 to-[var(--navy)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, var(--purple) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Event Information
            </h1>
            <div className="inline-block h-1 w-24 bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent mb-8" />
            <p className="text-lg md:text-xl text-[var(--gray-light)] max-w-3xl mx-auto">
              Join us at Fruške Terme Resort for an unforgettable conference experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--navy)] to-[var(--teal)]/20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--teal)]/20 backdrop-blur-xl border border-[var(--blue-light)]/40 hover:border-[var(--purple)]/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-xl flex items-center justify-center text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">September 29, 2026</h3>
                  <p className="text-[var(--purple)] font-semibold">Students' Competition</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Science and Technology Park Novi Sad</span>
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[var(--purple)]/30 to-[var(--blue)]/20 backdrop-blur-xl border border-[var(--purple)]/60 shadow-[0_0_30px_rgba(105,80,222,0.3)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-xl flex items-center justify-center text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">September 30, 2026</h3>
                  <p className="text-[var(--purple)] font-semibold">Main Conference Event</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-[var(--purple)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Fruške Terme Resort and Residences</span>
              </div>
            </motion.div>
          </div>

          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--teal)]/20 backdrop-blur-xl border border-[var(--blue-light)]/40 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About the Venue</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              FUTURE-BME 2026 will be hosted at the{' '}
              <a 
                href="https://www.frusketerme.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--purple)] hover:text-white font-semibold transition-colors underline"
              >
                Fruške Terme Resort and Residences
              </a>
              , a modern resort nestled in the scenic surroundings of the Fruška Gora National Park. Special accommodation rates are available for registered conference participants.
            </p>
            
            <div className="p-6 rounded-xl bg-[var(--purple)]/10 border border-[var(--purple)]/30">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">Accommodation Discount:</strong> Please fill out{' '}
                <a 
                  href="/files/Future_BME_2026-Movenpick_Fruske_Terme_Hotel.docx"
                  className="text-[var(--purple)] hover:text-white font-semibold transition-colors underline"
                >
                  this document
                </a>
                {' '}if you wish to stay at the Mövenpick Fruške Terme Hotel, and send it to{' '}
                <a 
                  href="mailto:info@frusketerme.com"
                  className="text-[var(--purple)] hover:text-white font-semibold transition-colors"
                >
                  info@frusketerme.com
                </a>
                {' '}to receive a discount on accommodation.
              </p>
            </div>
          </motion.div>

          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-[var(--blue-light)]/40 shadow-2xl mb-12"
          >
            <StaticImage
              src="/images/FrukeTermeHotelHR.png"
              alt="Fruške Terme Resort"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-[var(--blue-light)]/40 shadow-2xl"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.753982565471!2d19.77715597574121!3d45.14143545491707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b091af0d55d01%3A0xeffa0a200d3ef13e!2sM%C3%B6venpick%20hotel%20Fruske%20Terme!5e1!3m2!1sen!2srs!4v1764532635604!5m2!1sen!2srs"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fruške Terme Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[var(--teal)]/20 to-[var(--navy)]">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 backdrop-blur-xl border border-[var(--purple)]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-[var(--gray-light)] mb-8">
              Register now and secure your spot at Future-BME 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration"
                className="px-8 py-4 bg-[var(--purple)] hover:bg-[var(--purple)]/80 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(105,80,222,0.6)]"
              >
                Register Now
              </Link>
              <a
                href="https://www.frusketerme.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[var(--purple)] text-white font-bold rounded-full hover:bg-[var(--purple)]/20 transition-all duration-300 hover:scale-105"
              >
                Visit Venue Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
