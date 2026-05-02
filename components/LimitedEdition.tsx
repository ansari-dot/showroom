import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hexagon } from 'lucide-react';
import Button from './Button';

const limitedCars = [
  {
    title: 'Velora Black Series',
    production: '01 / 50',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg',
    specs: { power: '810 HP', speed: '218 MPH' },
    price: '$450,000'
  },
  {
    title: 'Vantage GT Track',
    production: '12 / 100',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    specs: { power: '680 HP', speed: '202 MPH' },
    price: '$285,000'
  },
  {
    title: 'Aurelia Crown Edition',
    production: '05 / 25',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg',
    specs: { power: '720 HP', speed: '195 MPH' },
    price: '$320,000'
  }
];

const LimitedEdition: React.FC = () => {
  return (
    <section className="relative bg-secondary py-24 md:py-[100px] overflow-hidden border-y border-border">
      {/* Background Ambience Removed for lighter weight */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-[3px] uppercase text-xs mb-4">
              <Hexagon size={14} className="fill-primary" />
              Exclusive Allocations
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold leading-tight text-foreground">The Limited Series</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end"
          >
            <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed max-w-sm md:text-right mb-6">
              Rare, highly sought-after production runs. These vehicles are currently secured in our global network and available for immediate commission.
            </p>
            <Button href="#collection-page" className="px-8 py-3">
              Explore Collection
            </Button>
          </motion.div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {limitedCars.map((car, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-card border border-border rounded-[24px] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-muted">
                <img 
                  src={car.image} 
                  alt={car.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                
                {/* Production Badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-foreground">{car.production}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-[24px] font-bold text-white mb-1">{car.title}</h3>
                  <div className="text-primary font-bold text-[18px]">{car.price}</div>
                </div>
              </div>

              {/* Specs & Action */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border-l-2 border-border pl-4">
                    <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground mb-1 font-bold">Power</div>
                    <div className="text-[15px] font-bold text-foreground">{car.specs.power}</div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground mb-1 font-bold">Top Speed</div>
                    <div className="text-[15px] font-bold text-foreground">{car.specs.speed}</div>
                  </div>
                </div>

                <a href="#contact-page" className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-secondary border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 text-foreground">
                  <span className="text-[13px] font-bold uppercase tracking-widest">Inquire Now</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LimitedEdition;
