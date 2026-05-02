
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, CreditCard, Key } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Choose Vehicle",
    desc: "Browse our exclusive digital showroom and select your masterpiece."
  },
  {
    icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Virtual Tour",
    desc: "Schedule a private video walkaround with a personal consultant."
  },
  {
    icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Seamless Finance",
    desc: "Bespoke payment plans tailored to your financial profile."
  },
  {
    icon: <Key className="w-5 h-5 md:w-6 md:h-6" />,
    title: "White Glove Delivery",
    desc: "Your new car delivered directly to your driveway, ready to drive."
  }
];

const ServiceProcess: React.FC = () => {
  return (
    <section id="process" className="bg-white py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">The Process</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] font-bold text-foreground mb-6 leading-tight"
          >
            A Seamless Journey to Ownership
          </motion.h2>
          <p className="text-[15px] md:text-[16px] text-muted-foreground">
            From discovering your perfect match to taking delivery in your driveway, we handle every detail with absolute precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-start p-8 rounded-[24px] bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex w-full items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="text-[32px] font-bold text-border/40 group-hover:text-primary/20 transition-colors">
                  0{idx + 1}
                </div>
              </div>
              <h3 className="text-[20px] font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
