'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/topics', label: 'Topics' },
    { href: '/committees', label: 'Committees' },
    { href: '/event-info', label: 'Event' },
    { href: '/submissions', label: 'Submissions' },
    { href: '/registration', label: 'Registration' },
    { href: '/ethics', label: 'Ethics' },
    { href: '/sponsors', label: 'Sponsors' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--navy)]/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-[var(--purple)]/30'
          : 'bg-gradient-to-b from-[var(--navy)]/80 to-transparent backdrop-blur-md'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 z-50 group">
            <Image
              src="/images/BMElogo.png"
              alt="Future BME Logo"
              width={180}
              height={88}
              className="h-11 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(105,80,222,0.5)]"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <div className="px-5 py-2.5 text-sm font-semibold text-[var(--gray-light)] hover:text-white transition-all duration-300 whitespace-nowrap">
                    {link.label}
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="navbar-indicator"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/registration"
              className="px-6 py-2.5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white text-sm font-bold rounded-full hover:shadow-[0_0_25px_rgba(105,80,222,0.6)] transition-all duration-300 hover:scale-105"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-white bg-[var(--purple)]/20 hover:bg-[var(--purple)]/40 transition-all z-50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--navy)]/98 backdrop-blur-2xl border-t border-[var(--purple)]/30"
          >
            <div className="px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-3.5 text-base font-semibold text-[var(--gray-light)] hover:text-white hover:bg-[var(--purple)]/20 rounded-xl transition-all border border-transparent hover:border-[var(--purple)]/30"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/registration"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-5 py-3.5 text-center bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold rounded-xl"
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
