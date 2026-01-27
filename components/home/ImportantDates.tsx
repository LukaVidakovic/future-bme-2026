'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const dates = [
  { date: 'May 15, 2026', event: 'Deadline for Abstract Submission' },
  { date: 'May 1, 2026', event: 'Deadline for Early Bird Payment' },
  { date: 'August 15, 2026', event: 'Submission of Full Papers' },
  { date: 'August 30, 2026', event: 'Notification of Paper Acceptance' },
  { date: 'September 15, 2026', event: 'Deadline for Registration' },
  { date: 'September 11, 2026', event: 'Payment Deadline' },
  { date: 'September 29-30, 2026', event: 'Conference Dates', highlight: true },
];

export default function ImportantDates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[var(--navy)] via-[var(--teal)]/20 to-[var(--navy)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 md:mb-24"
        >
          Important Dates
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[var(--blue-light)] to-transparent" />

          <div className="space-y-24 py-8">
            {dates.map((item, index) => {
              const side = index % 2 === 0 ? 'left' : 'right';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: side === 'left' ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative min-h-[120px] flex items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`absolute ${
                      side === 'left' 
                        ? 'right-1/2 pr-16 text-right' 
                        : 'left-1/2 pl-16 text-left'
                    } w-[45%]`}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.08 : 1,
                        y: hoveredIndex === index ? -8 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`p-8 rounded-2xl backdrop-blur-lg border-2 transition-all duration-400 cursor-pointer ${
                        item.highlight
                          ? hoveredIndex === index
                            ? 'bg-[var(--purple)]/50 border-[var(--purple)] shadow-[0_0_50px_rgba(105,80,222,0.7)]'
                            : 'bg-[var(--purple)]/35 border-[var(--purple)]/80 shadow-[0_0_35px_rgba(105,80,222,0.5)]'
                          : hoveredIndex === index
                          ? 'bg-[var(--blue)]/40 border-[var(--purple)] shadow-[0_0_35px_rgba(105,80,222,0.4)]'
                          : 'bg-[var(--blue)]/25 border-[var(--blue-light)]/60 shadow-lg'
                      }`}
                    >
                      <h3
                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          item.highlight || hoveredIndex === index
                            ? 'text-[var(--purple)]'
                            : 'text-white'
                        }`}
                      >
                        {item.date}
                      </h3>
                      <p className="text-[var(--gray-light)] text-base leading-relaxed">{item.event}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 2.2 : 1,
                      boxShadow: hoveredIndex === index
                        ? '0 0 40px rgba(105,80,222,1), 0 0 60px rgba(105,80,222,0.5)'
                        : item.highlight
                        ? '0 0 25px rgba(105,80,222,0.9)'
                        : '0 0 0px rgba(0,0,0,0)',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 border-4 border-[var(--navy)] ${
                      item.highlight || hoveredIndex === index
                        ? 'bg-[var(--purple)]'
                        : 'bg-[var(--blue-light)]'
                    }`}
                  />

                  <motion.div
                    animate={{
                      width: hoveredIndex === index ? '80px' : '64px',
                      opacity: hoveredIndex === index ? 1 : 0.6,
                      backgroundColor: hoveredIndex === index ? 'var(--purple)' : 'var(--blue-light)',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute top-1/2 h-0.5 ${
                      side === 'left'
                        ? 'right-1/2 mr-3'
                        : 'left-1/2 ml-3'
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[var(--blue-light)] to-transparent" />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                <div
                  className={`absolute left-8 top-4 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[var(--navy)] z-10 ${
                    item.highlight ? 'bg-[var(--purple)]' : 'bg-[var(--blue-light)]'
                  }`}
                />

                <div
                  className={`p-6 rounded-xl backdrop-blur-lg border-2 ${
                    item.highlight
                      ? 'bg-[var(--purple)]/35 border-[var(--purple)]/80 shadow-[0_0_30px_rgba(105,80,222,0.5)]'
                      : 'bg-[var(--blue)]/25 border-[var(--blue-light)]/60'
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      item.highlight ? 'text-[var(--purple)]' : 'text-white'
                    }`}
                  >
                    {item.date}
                  </h3>
                  <p className="text-[var(--gray-light)] text-sm">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
