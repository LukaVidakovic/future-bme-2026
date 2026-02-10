'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're missing the basePath
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const basePath = '/future-bme-2026';
      
      // If path doesn't start with basePath, redirect to it
      if (!currentPath.startsWith(basePath) && currentPath !== '/') {
        window.location.href = basePath + currentPath;
      } else if (currentPath === '/') {
        window.location.href = basePath;
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/20 via-[var(--navy)] to-[var(--blue)]/20" />
        
        {/* Watermark Logo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            opacity: 0.05,
            filter: 'blur(2px)'
          }}
        >
          <img 
            src="/images/BMElogo.png" 
            alt="BME Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[150px] md:text-[200px] font-bold leading-none mb-8"
            style={{
              background: 'linear-gradient(135deg, var(--purple) 0%, var(--blue-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-[var(--gray-light)] mb-12 max-w-2xl mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-lg rounded-full cursor-pointer inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Homepage
              </motion.div>
            </Link>

            <Link href="/event-info">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--navy)]/60 backdrop-blur-xl border border-white/20 text-white font-bold text-lg rounded-full cursor-pointer inline-flex items-center gap-3 hover:border-[var(--purple)]/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Event Info
              </motion.div>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-[var(--gray-light)] mb-4">Quick Links:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/topics" className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors">
                Topics
              </Link>
              <Link href="/submissions" className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors">
                Submissions
              </Link>
              <Link href="/registration" className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors">
                Registration
              </Link>
              <Link href="/committees" className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors">
                Committees
              </Link>
              <Link href="/past-conferences/2024" className="text-[var(--gray-light)] hover:text-[var(--purple)] transition-colors">
                Past Conference 2024
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
