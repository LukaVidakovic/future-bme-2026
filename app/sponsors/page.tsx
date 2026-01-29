'use client';

import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Platinum',
    stars: 5,
    metalGradient: 'linear-gradient(135deg, #E5E7EB 0%, #FFFFFF 50%, #D1D5DB 100%)',
    textGradient: 'from-gray-300 via-white to-gray-400',
    accentGradient: 'from-gray-200/20 to-gray-300/10',
    benefits: [
      'Logo on conference website homepage',
      'Logo on sponsors\' page',
      'Logo in conference program',
      'Sponsor description (up to 40 words)',
      'Logo during video breaks',
      'Logo on conference bags & materials',
      'Brochures in participants\' package',
      'Promotional flyers on seats',
      'Sponsor poster',
      '5 conference registrations + gala dinner'
    ]
  },
  {
    name: 'Gold',
    stars: 4,
    metalGradient: 'linear-gradient(135deg, #F59E0B 0%, #FDE68A 50%, #D97706 100%)',
    textGradient: 'from-yellow-600 via-yellow-200 to-yellow-700',
    accentGradient: 'from-yellow-400/20 to-yellow-500/10',
    benefits: [
      'Logo on conference website homepage',
      'Logo on sponsors\' page',
      'Logo in conference program',
      'Sponsor description (up to 30 words)',
      'Logo during video breaks',
      'Logo on conference bags & materials',
      'Brochures in participants\' package',
      'Promotional flyers on seats',
      'Sponsor poster',
      '4 conference registrations + gala dinner'
    ]
  },
  {
    name: 'Silver',
    stars: 3,
    metalGradient: 'linear-gradient(135deg, #9CA3AF 0%, #E5E7EB 50%, #6B7280 100%)',
    textGradient: 'from-gray-500 via-gray-200 to-gray-600',
    accentGradient: 'from-gray-400/20 to-gray-500/10',
    benefits: [
      'Logo on conference website homepage',
      'Logo on sponsors\' page',
      'Logo in conference program',
      'Logo during video breaks',
      'Logo on conference bags & materials',
      'Brochures in participants\' package',
      'Promotional flyers on seats',
      'Sponsor poster',
      '3 conference registrations + gala dinner'
    ]
  },
  {
    name: 'Bronze',
    stars: 2,
    metalGradient: 'linear-gradient(135deg, #C2410C 0%, #FB923C 50%, #9A3412 100%)',
    textGradient: 'from-orange-800 via-orange-300 to-orange-900',
    accentGradient: 'from-orange-600/20 to-orange-700/10',
    benefits: [
      'Logo on sponsors\' page',
      'Logo in conference program',
      'Logo during video breaks',
      'Logo on conference bags & materials',
      'Brochures in participants\' package',
      'Sponsor poster',
      '2 conference registrations + gala dinner'
    ]
  },
  {
    name: 'Conference Friend',
    stars: 1,
    metalGradient: 'linear-gradient(135deg, #3B82F6 0%, #93C5FD 50%, #1E40AF 100%)',
    textGradient: 'from-blue-700 via-blue-300 to-blue-800',
    accentGradient: 'from-blue-400/20 to-blue-500/10',
    benefits: [
      'Logo on sponsors\' page',
      'Logo in conference program',
      'Logo on conference bags & materials',
      'Brochures in participants\' package',
      'Sponsor poster',
      '1 conference registration + gala dinner'
    ]
  }
];

export default function SponsorsPage() {
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
            <div className="inline-block px-5 py-2 bg-[var(--blue)] rounded-full mb-8 shadow-lg">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Partnership</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sponsorship Packages
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--gray-light)] max-w-3xl mx-auto">
              Join us in shaping the future of business, management, and economics engineering
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers - Asymmetric Zigzag with Watermark */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {tiers.map((tier, index) => (
              <div key={tier.name} className="relative">
                {/* Watermark Logo - Opposite Side */}
                <div
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-4 xl:right-12' : 'left-4 xl:left-12'} w-80 h-80 xl:w-96 xl:h-96 pointer-events-none`}
                  style={{
                    opacity: 0.12,
                    filter: 'blur(0.5px)'
                  }}
                >
                  <img 
                    src="/future-bme-2026/images/BMElogo.png" 
                    alt="BME Logo Watermark"
                    className="w-full h-full object-contain"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative z-10`}
                >
                  <div className="w-full md:max-w-4xl">
                    {/* Title Section - Above Left Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`relative p-8 md:p-10 rounded-t-3xl md:rounded-tr-none ${index % 2 === 0 ? 'md:rounded-tl-3xl' : 'md:col-start-2 md:rounded-tr-3xl'} bg-gradient-to-br ${tier.accentGradient} backdrop-blur-xl border-t border-l border-r md:border-r-0 ${index % 2 === 0 ? '' : 'md:border-l-0 md:border-r'} border-white/10`}
                      >
                        <div className="text-center">
                          {/* Metallic Title */}
                          <h2 
                            className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${tier.textGradient} bg-clip-text text-transparent`}
                            style={{
                              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                            }}
                          >
                            {tier.name}
                          </h2>
                          
                          {/* Metallic Stars */}
                          <div className="flex items-center justify-center gap-2 flex-wrap">
                            {[...Array(tier.stars)].map((_, i) => {
                              const colors = tier.metalGradient.match(/#[A-F0-9]{6}/gi) || ['#E5E7EB', '#FFFFFF', '#D1D5DB'];
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ 
                                    delay: 0.4 + i * 0.1, 
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ 
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                  }}
                                >
                                  <svg
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                    style={{
                                      filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))'
                                    }}
                                  >
                                    <defs>
                                      <linearGradient id={`star-${tier.name}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={colors[0]} />
                                        <stop offset="50%" stopColor={colors[1]} />
                                        <stop offset="100%" stopColor={colors[2]} />
                                      </linearGradient>
                                    </defs>
                                    <path 
                                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                      fill={`url(#star-${tier.name}-${i})`}
                                    />
                                  </svg>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Benefits Section - 2 Columns */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="relative p-8 md:p-10 rounded-b-3xl bg-[var(--navy)]/60 backdrop-blur-xl border-x border-b border-white/10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {tier.benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                            className="flex items-start gap-3 group"
                          >
                            <div 
                              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                              style={{
                                background: tier.metalGradient,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                              }}
                            >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white/90 text-base leading-relaxed group-hover:text-white transition-colors">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 backdrop-blur-xl border-2 border-[var(--purple)]/40"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Interested in Sponsoring?
            </h2>
            <p className="text-lg md:text-xl text-[var(--gray-light)] mb-8">
              For more information about sponsorship packages, please contact us
            </p>
            <a
              href="mailto:future-bme@uns.ac.rs"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(105,80,222,0.6)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              future-bme@uns.ac.rs
            </a>
            
            <div className="mt-12 p-6 bg-[var(--navy)]/50 rounded-xl border border-[var(--blue)]/30">
              <p className="text-sm text-[var(--gray-light)] leading-relaxed">
                <strong className="text-white">Note:</strong> The sponsor is responsible for preparing, printing, and delivering flyers, brochures, and gifts. The conference organizers will print bags, notepads, and materials featuring the sponsor's logo. Custom package compositions are also available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
