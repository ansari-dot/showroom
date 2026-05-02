
import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Feature: React.FC = () => {
  return (
    <section id="feature" className="bg-card overflow-hidden py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 md:gap-[72px] items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/d2f942e7-6b97-4b9a-97af-5f994cdfbbb7.jpg"
            alt="Mercedes GTS Side View"
            className="w-full h-auto block object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="text-[11px] md:text-[12px] tracking-[2px] uppercase font-bold text-primary mb-3 md:mb-4">Engineering Excellence</div>
          <h2 className="text-[32px] md:text-[44px] leading-[1.1] font-bold text-foreground mb-6">
            The New Mercedes GTS: <span className="text-primary">Performance Redefined.</span>
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground mb-8">
            Experience the perfect synergy of raw power and sophisticated elegance. The GTS features a handcrafted V8 biturbo engine and active aerodynamics for an unmatched driving experience.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <div className="font-bold text-[13px] md:text-[14px]">0-60 in 3.1 Seconds</div>
                <div className="text-[11px] md:text-[12px] text-muted-foreground">Unrivaled acceleration in its class.</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <Button className="w-full sm:w-auto px-10">Configure Yours</Button>
              <button className="w-full sm:w-auto text-[14px] font-bold text-foreground border-b-2 border-primary hover:text-primary transition-colors pb-1">Technical Specs</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
