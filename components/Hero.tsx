
import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 md:gap-[60px] items-center">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-left flex flex-col items-center lg:items-start"
      >
        <h1 className="text-[36px] md:text-[52px] leading-[1.1] font-bold text-primary mb-5">
          Elevate Your Drive with <span className="text-foreground">LuxeRide</span>
        </h1>
        <p className="text-[15px] md:text-[16px] leading-[1.6] text-muted-foreground max-w-[460px] mb-8">
          Step into a world of automotive excellence. Our curated collection represents the pinnacle of luxury, performance, and bespoke engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-10 w-full sm:w-auto">
          <Button className="w-full sm:w-auto px-10 py-4 text-base shadow-lg shadow-primary/20">Explore Inventory</Button>
          <Button variant="outline" className="w-full sm:w-auto px-10 py-4 text-base bg-white/50 backdrop-blur-sm">View Showroom</Button>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-4 p-4 rounded-2xl bg-card shadow-xl shadow-foreground/5 border border-border"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F${i}`}
                alt="Client"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-card object-cover"
              />
            ))}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[12px] md:text-[13px] font-bold text-card-foreground">500+ Happy Drivers</span>
            <span className="text-[10px] md:text-[11px] text-muted-foreground">Rated 4.9/5 by experts</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-primary/10 rounded-[32px] blur-3xl -z-10 animate-pulse"></div>
        <div className="rounded-3xl overflow-hidden bg-card shadow-2xl ring-1 ring-border p-1">
          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/f6348043-70e2-4d47-a36b-01ceaf38d100.jpg"
            alt="Hero Luxury SUV"
            className="w-full h-auto block object-cover aspect-[4/3] rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
