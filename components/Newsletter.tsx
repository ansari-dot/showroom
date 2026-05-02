
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Newsletter: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl md:blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-primary-foreground mb-6 leading-tight">
              Get Exclusive Access to Limited Editions
            </h2>
            <p className="text-primary-foreground/80 text-[16px] md:text-[18px] mb-8 md:mb-10">
              Join our elite newsletter and be the first to know about new arrivals and private showroom events.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-primary-foreground/30 text-foreground outline-none text-[14px] md:text-[15px]"
                required
              />
              <Button className="bg-foreground text-white hover:bg-black px-8 py-4 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
            <p className="mt-6 text-[11px] md:text-[12px] text-primary-foreground/60 italic">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
