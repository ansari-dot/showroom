import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const galleryCars = [
  {
    title: 'Aurelia Crown',
    tag: 'Executive SUV',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f6348043-70e2-4d47-a36b-01ceaf38d100.jpg',
    description: 'A graceful luxury SUV with a commanding silhouette and a calm executive interior.',
  },
  {
    title: 'Noir Velocity',
    tag: 'Performance Coupe',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    description: 'Bold front-end detailing, athletic balance, and a more dynamic drive character.',
  },
  {
    title: 'Solstice Elite',
    tag: 'Electric Sedan',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    description: 'An elegant electric sedan shaped for smooth arrivals and refined everyday luxury.',
  }
];

const ProductGallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-white py-16 md:py-[120px] border-y border-border">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-[11px] md:text-[12px] tracking-[3px] uppercase font-bold text-primary mb-4">
              Signature Portfolio
            </div>
            <h2 className="text-[36px] md:text-[52px] leading-[1.1] font-bold text-foreground mb-6">
              The Defining Silhouettes
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
              Discover the core of the LuxeRide collection. Each model represents a pinnacle of its class, engineered to deliver unparalleled comfort, presence, and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="self-start md:self-auto pb-2"
          >
            <Button href="#collection-page" className="px-8 py-4">
              Explore Full Collection
            </Button>
          </motion.div>
        </div>

        {/* 3-Card Grid matching the requested beautiful e-commerce layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryCars.map((car, idx) => (
            <motion.article
              key={car.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-card border border-border rounded-[24px] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-muted">
                <img 
                  src={car.image} 
                  alt={car.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-foreground">{car.tag}</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-[24px] font-bold text-white mb-1">{car.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                  {car.description}
                </p>

                <a href="#contact-page" className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-secondary border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 text-foreground">
                  <span className="text-[13px] font-bold uppercase tracking-widest">Explore Model</span>
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

export default ProductGallery;
