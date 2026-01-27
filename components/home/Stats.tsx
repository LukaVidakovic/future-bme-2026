'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Participants' },
  { value: 20, suffix: '+', label: 'Countries' },
  { value: 80, suffix: '+', label: 'Papers' },
  { value: 2, suffix: '', label: 'Days' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[var(--navy)] via-[var(--purple)]/10 to-[var(--navy)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--purple)] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--blue-light)] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-[var(--blue)]/20 backdrop-blur-md border border-[var(--blue-light)]/30 hover:border-[var(--purple)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(105,80,222,0.3)]"
              >
                <div className="text-5xl md:text-6xl font-bold text-[var(--purple)] mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[var(--gray-light)] text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
