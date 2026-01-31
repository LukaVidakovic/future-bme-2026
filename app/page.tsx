'use client';

import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ImportantDates from '@/components/home/ImportantDates';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* First Call for Papers - Full Width with Side Content */}
      <section id="call-for-papers" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue)]/20 via-transparent to-[var(--purple)]/10" />
        
        {/* Decorative line */}
        <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-[var(--purple)] to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Icon & Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] rounded-full blur-3xl opacity-20"
                />
                <div className="relative w-48 h-48 bg-gradient-to-br from-[var(--blue)] to-[var(--blue-light)] rounded-3xl flex items-center justify-center shadow-2xl">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-5 py-2 bg-[var(--blue)] rounded-full mb-6 shadow-lg">
                <span className="text-white font-bold text-sm uppercase tracking-wider">Call for Papers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Submit Your Research
              </h2>
              
              <p className="text-lg text-[var(--gray-light)] mb-8 leading-relaxed">
                We are pleased to announce that the First Call for Papers is available. 
                Detailed information about conference topics, important dates, and submission guidelines.
              </p>
              
              <motion.a
                href="/future-bme-2026/files/FUTURE-BME_2026_CONFERENCE_INVITATION.pdf"
                target="_blank"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-[var(--purple)] hover:text-white font-bold text-lg group transition-colors"
              >
                <span>Download First Call</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Register CTA - Centered with Beautiful Button */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/10 via-transparent to-[var(--blue)]/10" />
        
        {/* Large decorative text - subtle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none">
          <span className="text-[20vw] font-bold text-white">2026</span>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-5 py-2 bg-[var(--purple)] rounded-full mb-8 shadow-lg">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Registration Open</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Join the Future
            </h2>
            
            <p className="text-xl md:text-2xl text-[var(--gray-light)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Be part of shaping the future of business, management, and economics engineering. Secure your spot at Future-BME 2026.
            </p>
            
            <Link href="/registration">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(105,80,222,0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Register Now</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IJIEM Info - Enhanced Visibility */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left - Content (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="inline-block px-5 py-2 bg-[var(--purple)] rounded-full mb-6 shadow-lg">
                <span className="text-white font-bold text-sm uppercase tracking-wider">Publication Opportunity</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Publish in IJIEM
              </h2>
              
              <p className="text-lg md:text-xl text-[var(--gray-light)] mb-6 leading-relaxed">
                Selected high-quality papers may be invited for submission to the
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] bg-clip-text text-transparent">
                  International Journal of Industrial Engineering and Management
                </span>
              </h3>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-5 py-3 bg-[var(--purple)]/20 rounded-lg border border-[var(--purple)]/40">
                  <svg className="w-6 h-6 text-[var(--purple)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-bold text-lg">Scopus Indexed</span>
                </div>
                <div className="px-5 py-3 bg-[var(--blue)]/20 rounded-lg border border-[var(--blue)]/40">
                  <span className="text-white font-bold text-lg">ISSN 2217-2661</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Visual (2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)] to-[var(--blue)] rounded-3xl blur-2xl opacity-20" />
                <div className="relative w-full aspect-square bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 rounded-3xl flex items-center justify-center border border-[var(--purple)]/30">
                  <svg className="w-32 h-32 text-[var(--purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <ImportantDates />

      {/* Aims & Scope - Typography Focused */}
      <section className="py-32 md:py-40 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[var(--purple)]/20 rounded-full mb-6">
              <span className="text-[var(--purple)] font-semibold text-sm uppercase tracking-wider">About the Conference</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Aims and Scope
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-[var(--gray-light)] text-lg md:text-xl leading-relaxed mb-20"
          >
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              The Second International Scientific Conference <strong className="font-bold">Future-BME 2026</strong> builds upon the success of the inaugural 2024 edition.
            </p>
            
            <p>
              In an era defined by sustainability imperatives and rapid digital transformation, organizations, economies, and societies face the dual challenge of achieving technological progress while maintaining environmental and social balance.
            </p>
            
            <p>
              The <strong className="text-white">Future-BME Conference</strong> is hosted and organized by the <strong className="text-white">Department of Industrial Engineering and Management</strong>, Faculty of Technical Sciences, University of Novi Sad. It is a biennial conference, and the Conference Proceedings are published every two years.
            </p>
            
            <p>
              Manuscripts are welcomed from diverse disciplines, including but not limited to <strong className="text-white">business, management, entrepreneurship, economics engineering, logistics, law, design, digital economy, sustainability studies, and related fields.</strong>
            </p>
          </motion.div>

          {/* Key Themes - Animated Cards with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: "Innovation",
                description: "Pioneering approaches to global challenges",
                delay: 0.5
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Collaboration",
                description: "Connecting researchers and practitioners",
                delay: 0.6
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Sustainability",
                description: "Balancing progress and responsibility",
                delay: 0.7
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-[var(--blue)]/10 to-[var(--purple)]/5 border border-[var(--blue-light)]/20 hover:border-[var(--purple)]/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-[var(--purple)]/20"
                >
                  <svg className="w-8 h-8 text-[var(--purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[var(--purple)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--gray-light)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support the Future - Sponsor CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/10 via-transparent to-[var(--blue)]/10" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-5 py-2 bg-[var(--blue)] rounded-full mb-8 shadow-lg">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Partnership</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Support the Future
            </h2>
            
            <p className="text-xl md:text-2xl text-[var(--gray-light)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Join us as a sponsor and be part of shaping the future of business, management, and economics engineering
            </p>
            
            <Link href="/sponsors">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(71,118,135,0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[var(--blue)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Become a Sponsor</span>
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
