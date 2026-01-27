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
      
      {/* Conference Title Section */}
      <section id="conference-title" className="py-12 md:py-16 bg-gradient-to-b from-[var(--navy)] to-[var(--blue)]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, var(--purple) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Future-BME 2026
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--gray-light)]"
          >
            <strong>ISSN 3042-2728 Print</strong>
            {' • '}
            <strong>ISSN 3042-2868 Online</strong>
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* First Call Section */}
      <section id="call-for-papers" className="py-24 bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/20 to-[var(--navy)] relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">First Call for Papers</h2>
          <p className="text-lg text-[var(--gray-light)] mb-10 leading-relaxed">
            We are pleased to announce that the First Call for Papers is available. 
            Detailed information about conference topics, important dates, and submission 
            guidelines can be found at the link below.
          </p>
          <a
            href="/files/FUTURE-BME_2026_CONFERENCE_INVITATION.pdf"
            target="_blank"
            className="inline-block px-12 py-5 bg-[var(--blue)] hover:bg-[var(--blue-light)] text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(108,149,161,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            DOWNLOAD FIRST CALL
          </a>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 bg-gradient-to-b from-[var(--navy)] to-[var(--purple)]/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--purple)] rounded-full blur-[150px] opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-lg text-[var(--gray-light)] mb-10">
            Register now and be part of the future of business, management, and economics engineering
          </p>
          <a
            href="/registration"
            className="inline-block px-14 py-6 bg-[var(--purple)] hover:bg-[var(--purple)]/80 text-white font-bold text-xl rounded-full shadow-[0_0_40px_rgba(105,80,222,0.6)] hover:shadow-[0_0_60px_rgba(105,80,222,0.9)] transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            REGISTER HERE
          </a>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <ImportantDates />

      {/* Become a Sponsor CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[var(--navy)] via-[var(--blue)]/20 to-[var(--navy)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--blue-light)] rounded-full blur-[120px] opacity-20" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--purple)] rounded-full blur-[120px] opacity-20" />
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--purple)]/20 backdrop-blur-xl border border-[var(--blue-light)]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support the Future</h2>
            <p className="text-base md:text-lg text-[var(--gray-light)] mb-8 max-w-2xl mx-auto">
              Join us as a sponsor and be part of shaping the future of business, management, and economics engineering
            </p>
            <Link
              href="/sponsors"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[var(--blue)] to-[var(--blue-light)] text-white font-bold text-base md:text-lg rounded-full hover:shadow-[0_0_30px_rgba(108,149,161,0.6)] transition-all duration-300 hover:scale-105"
            >
              BECOME A SPONSOR
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IJIEM Info */}
      <section className="py-24 bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/20 to-[var(--navy)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center p-12 rounded-3xl bg-[var(--blue)]/20 backdrop-blur-lg border border-[var(--blue-light)]/30">
            <div className="inline-block p-4 bg-[var(--purple)]/20 rounded-full mb-6">
              <svg className="w-12 h-12 text-[var(--purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-xl text-[var(--gray-light)] leading-relaxed">
              Selected high-quality papers may be invited for submission to the
              <br />
              <br />
              <strong className="text-2xl text-white">IJIEM</strong> -{' '}
              <strong className="text-2xl text-white">
                International Journal of Industrial Engineering and Management
              </strong>
              <br />
              <span className="text-[var(--purple)] font-semibold">(ISSN 2217-2661) Indexed by Scopus</span>
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Scope */}
      <section className="py-32 bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/20 to-[var(--navy)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--purple) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
          >
            Aims and Scope of the Conference
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-block h-1 w-24 bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent" />
          </motion.div>

          {/* Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16 p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--blue)]/30 to-[var(--teal)]/20 backdrop-blur-xl border border-[var(--blue-light)]/40 shadow-2xl"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-[var(--gray-light)] text-lg leading-relaxed mb-6">
                The Second International Scientific Conference <strong className="text-white font-semibold">Future-BME 2026</strong> (<em className="text-[var(--blue-light)]">Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation</em>) builds upon the success of the inaugural 2024 edition, continuing to explore contemporary challenges and forward-looking solutions in business, management, and economics engineering.
              </p>
              
              <p className="text-[var(--gray-light)] text-lg leading-relaxed mb-6">
                In an era defined by sustainability imperatives and rapid digital transformation, organizations, economies, and societies face the dual challenge of achieving technological progress while maintaining environmental and social balance. The conference aims to foster interdisciplinary dialogue that connects theory and practice, encouraging innovative approaches that support both digital advancement and sustainable development.
              </p>
              
              <p className="text-[var(--gray-light)] text-lg leading-relaxed mb-6">
                The <strong className="text-white font-semibold">Future-BME Conference</strong> is hosted and organized by the <strong className="text-white font-semibold">Department of Industrial Engineering and Management</strong>, Faculty of Technical Sciences, University of Novi Sad. It is a biennial conference, and the Conference Proceedings are published every two years.
              </p>
              
              <p className="text-[var(--gray-light)] text-lg leading-relaxed">
                Manuscripts are welcomed from diverse disciplines, including but not limited to <strong className="text-white font-semibold">business, management, entrepreneurship, economics engineering, logistics, law, design, digital economy, sustainability studies, and related fields.</strong>
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group p-8 rounded-2xl bg-[var(--blue)]/20 backdrop-blur-lg border border-[var(--blue-light)]/30 hover:border-[var(--purple)]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(105,80,222,0.3)] hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--purple)] transition-colors">Innovation</h3>
              <p className="text-[var(--gray-light)] leading-relaxed">
                Pioneering approaches in addressing emerging global challenges through sustainable and digitally transformed business practices.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group p-8 rounded-2xl bg-[var(--blue)]/20 backdrop-blur-lg border border-[var(--blue-light)]/30 hover:border-[var(--purple)]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(105,80,222,0.3)] hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--purple)] transition-colors">Collaboration</h3>
              <p className="text-[var(--gray-light)] leading-relaxed">
                A platform for sharing innovative research, best practices, and insights among researchers, practitioners, and policymakers.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group p-8 rounded-2xl bg-[var(--blue)]/20 backdrop-blur-lg border border-[var(--blue-light)]/30 hover:border-[var(--purple)]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(105,80,222,0.3)] hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--purple)] transition-colors">Sustainability</h3>
              <p className="text-[var(--gray-light)] leading-relaxed">
                Fostering interdisciplinary dialogue that connects theory and practice in the age of sustainability and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
