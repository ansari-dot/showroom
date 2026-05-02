import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, SlidersHorizontal, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const inventory = [
  {
    title: 'Lumina S Class',
    type: 'Electric Luxury',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    price: '$220,000',
    meta: '420 miles',
    badge: 'New Arrival',
  },
  {
    title: 'Vantage GT',
    type: 'Performance Touring',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    price: '$185,000',
    meta: '3.2 sec to 60',
    badge: 'Best Seller',
  },
  {
    title: 'Nomad X',
    type: 'Luxury SUV',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg',
    price: '$248,000',
    meta: '7 seat hybrid',
    badge: 'Showroom Pick',
  },
  {
    title: 'Crest Royale',
    type: 'Signature SUV',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f6348043-70e2-4d47-a36b-01ceaf38d100.jpg',
    price: '$205,000',
    meta: 'Panoramic cabin',
    badge: 'Luxury Family',
  },
  {
    title: 'Velora Black',
    type: 'Limited Edition',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg',
    price: '$234,000',
    meta: 'Collector finish',
    badge: 'Limited',
  },
  {
    title: 'Aurelia Crown',
    type: 'Executive Utility',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg',
    price: '$241,000',
    meta: 'AWD comfort',
    badge: 'Private Drive',
  },
  {
    title: 'Apex Grand Touring',
    type: 'Luxury Coupe',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    price: '$192,000',
    meta: 'Hand-finished cockpit',
    badge: 'Sport Prestige',
  },
  {
    title: 'Solstice Elite',
    type: 'Electric Prestige',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    price: '$214,000',
    meta: 'Long-range comfort',
    badge: 'Silent Luxury',
  },
];

const filterGroups = [
  {
    title: 'Category',
    items: ['All Vehicles', 'SUV', 'Electric', 'Coupe', 'Executive'],
  },
  {
    title: 'Price Range',
    items: ['Under $200k', '$200k - $230k', '$230k - $260k', '$260k+'],
  },
  {
    title: 'Fuel Type',
    items: ['Electric', 'Hybrid', 'Petrol'],
  },
  {
    title: 'Availability',
    items: ['In Stock', 'New Arrival', 'Limited Edition'],
  },
];

const CollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary pt-4 md:pt-6 pb-8 md:pb-10"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
          <Navbar />
        </div>
      </motion.div>

      <main id="collection-page-content" className="flex-grow bg-[#fcfdfc]">
        
        {/* Minimalist Page Header */}
        <section className="pt-16 pb-12 md:pt-28 md:pb-16 bg-background border-b border-border/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-primary"></div>
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs">The Showroom</span>
              </div>
              <h1 className="text-[42px] md:text-[56px] font-bold text-foreground leading-[1.1] tracking-tight">
                The Masterpiece Collection
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-md pb-2"
            >
              <p className="text-muted-foreground text-[15px] md:text-[16px] leading-relaxed">
                Explore an impeccably curated selection of the world's finest automotive engineering. Use the filters to refine your search and discover your perfect match.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collection Catalog */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] xl:grid-cols-[300px,1fr] gap-8 md:gap-10 items-start">
            
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="self-start lg:sticky lg:top-8 rounded-[24px] border border-border bg-white p-5 md:p-6 shadow-[0_16px_34px_-24px_rgba(0,0,0,0.12)] lg:min-h-[850px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-secondary text-primary flex items-center justify-center">
                  <SlidersHorizontal size={18} />
                </div>
                <div>
                  <div className="text-[18px] font-bold text-foreground">Filters</div>
                  <div className="text-[12px] text-muted-foreground uppercase tracking-widest font-medium">Refine Catalog</div>
                </div>
              </div>

              <div className="space-y-6 flex flex-col">
                {filterGroups.map((group) => (
                  <div key={group.title} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                    <div className="text-[12px] font-bold uppercase tracking-[2px] text-foreground mb-4">
                      {group.title}
                    </div>
                    <div className="space-y-3">
                      {group.items.map((item, index) => (
                        <label key={item} className="flex items-center gap-3 text-[14px] text-foreground/80 cursor-pointer group hover:text-primary transition-colors">
                          <input
                            type="checkbox"
                            defaultChecked={group.title === 'Category' && index === 0}
                            className="w-4 h-4 rounded-sm border-border accent-primary focus:ring-primary/20"
                          />
                          <span className="font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>

            {/* Inventory Grid */}
            <div className="min-w-0">
              {/* Top Bar */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[24px] border border-border bg-white px-6 py-5 shadow-sm"
              >
                <div>
                  <div className="text-[18px] font-bold text-foreground">Premium Inventory</div>
                  <div className="text-[13px] text-muted-foreground font-medium">Showing {inventory.length} luxury vehicles</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Newest', 'Price Low to High', 'Luxury SUVs', 'Electric'].map((item, index) => (
                    <button
                      key={item}
                      className={`${index === 0 ? 'bg-foreground text-white' : 'bg-secondary/50 text-foreground'} px-4 py-2 rounded-md text-[12px] font-bold transition-all hover:bg-primary hover:text-white border border-transparent`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                {inventory.map((car, index) => (
                  <motion.article
                    key={car.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    onClick={() => window.location.hash = '#car-detail'}
                    className="group overflow-hidden rounded-[24px] border border-border bg-white shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-[280px] overflow-hidden bg-muted">
                      <img
                        src={car.image}
                        alt={car.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute left-5 top-5 rounded-sm bg-primary/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-white shadow-lg">
                        {car.badge}
                      </div>
                      
                      <div className="absolute left-5 right-5 bottom-5">
                        <div className="text-[11px] uppercase tracking-[2px] font-bold text-primary mb-1">
                          {car.type}
                        </div>
                        <h2 className="text-[24px] font-bold text-white leading-tight">
                          {car.title}
                        </h2>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-1">
                            Starting From
                          </div>
                          <div className="text-[22px] font-bold text-foreground">{car.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-1">
                            Highlight
                          </div>
                          <div className="text-[13px] font-bold text-primary">{car.meta}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-5 border-t border-border/60">
                        <a href="#car-detail" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-[14px] font-bold text-foreground group-hover:text-primary transition-colors">
                          View Details
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="px-5 py-2.5 rounded-md bg-secondary text-foreground text-[12px] font-bold hover:bg-foreground hover:text-white transition-all shadow-sm"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collection CTA */}
        <section id="collection-contact" className="relative py-20 md:py-[100px] overflow-hidden mt-10">
          <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-foreground/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
          
          <div className="w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="max-w-[800px] mx-auto px-5 md:px-8">
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Concierge Assistance</span>
                <h2 className="text-[32px] md:text-[46px] font-bold text-white mb-6 leading-tight">
                  Need help choosing the right masterpiece?
                </h2>
                <p className="text-[16px] leading-[1.8] text-white/70 max-w-2xl mx-auto mb-10">
                  Speak with our concierge team for a tailored shortlist, showroom appointment, or direct help comparing vehicles from the collection.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button href="#contact-page" className="px-10 py-5 text-base shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">Talk To Concierge</Button>
                  <Button href="#contact-page" variant="outline" className="px-10 py-5 text-base bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground">Schedule Visit</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionPage;
