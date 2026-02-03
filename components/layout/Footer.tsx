'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StaticImage from '../StaticImage';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--navy)] to-[var(--teal)]/40 border-t border-[var(--purple)]/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo & University Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StaticImage
                src="/images/BMElogo.png"
                alt="Future BME Logo"
                className="h-12 md:h-14 w-auto mb-4 md:mb-6"
              />
              <div className="space-y-2 text-[var(--gray-light)] text-sm md:text-base">
                <p className="font-semibold text-white">University of Novi Sad</p>
                <p>Faculty of Technical Sciences</p>
                <p>Department of Industrial Engineering and Management</p>
                <p className="text-xs md:text-sm">Trg Dositeja Obradovića 7, Novi Sad, Serbia</p>
                <a 
                  href="mailto:future-bme@uns.ac.rs" 
                  className="inline-block mt-3 md:mt-4 text-[var(--purple)] hover:text-white font-bold transition-colors"
                >
                  future-bme@uns.ac.rs
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              {[
                { href: '/topics', label: 'Conference Topics' },
                { href: '/committees', label: 'Committees' },
                { href: '/submissions', label: 'Submissions' },
                { href: '/registration', label: 'Registration' },
                { href: '/event-info', label: 'Event Info' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">Conference Info</h3>
            <div className="space-y-2 md:space-y-3 text-[var(--gray-light)] text-sm md:text-base">
              <p>
                <span className="text-white font-semibold">Date:</span><br />
                September 29-30, 2026
              </p>
              <p>
                <span className="text-white font-semibold">Location:</span><br />
                Fruške Terme, Serbia
              </p>
              <div className="pt-3 md:pt-4 space-y-1 text-xs md:text-sm">
                <p className="font-semibold text-white">ISSN 3042-2728 Print</p>
                <p className="font-semibold text-white">ISSN 3042-2868 Online</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Institutional Logos and Scopus Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* University Logos - Left */}
          <StaticImage
            src="/images/transparentlogobelitriinstitucije.png"
            alt="University Logos"
            className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          
          {/* Scopus Badge - Right */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/future-bme-2026/images/ScopusBedge.png"
            alt="Scopus Indexed Conference"
            className="h-16 md:h-20 w-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--blue-light)]/30 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-[var(--gray-light)] text-xs md:text-sm">
              © 2026 Future-BME. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
              <Link 
                href="/ethics" 
                className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors"
              >
                Ethics & Policy
              </Link>
              <span className="text-[var(--gray-light)]">|</span>
              <Link 
                href="/sponsors" 
                className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors"
              >
                Sponsors
              </Link>
              <span className="text-[var(--gray-light)]">|</span>
              <Link 
                href="/past-conferences/2024" 
                className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors"
              >
                Past Conferences
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent opacity-50" />
    </footer>
  );
}
