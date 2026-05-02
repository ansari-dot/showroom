
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years', value: '25+' },
  { label: 'Models', value: '150+' },
  { label: 'Technicians', value: '80+' },
  { label: 'Showrooms', value: '12' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-[36px] md:text-[56px] font-bold text-primary mb-2 md:mb-3 leading-none">{stat.value}</div>
              <div className="text-[11px] md:text-[13px] font-bold text-white/60 uppercase tracking-[3px] leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
