import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  { value: '24/7', label: 'Concierge Assistance' },
  { value: '48h', label: 'Private Response Time' },
  { value: '100%', label: 'Verified Inventory' },
  { value: '1:1', label: 'Client Advisory' },
];

const Benefits: React.FC = () => {
  return (
    <section className="bg-foreground text-white py-16 md:py-[92px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">The Advantage</span>
          <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.1] mb-6">
            Built for clients who expect a more thoughtful luxury experience
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-white/70">
            Every touchpoint is designed to feel more refined, more personal, and easier to trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-[32px] md:text-[44px] font-bold text-primary mb-3 leading-none">{item.value}</div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-[2px] text-white/80 font-bold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
