import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Showroom from './Showroom';
import Stats from './Stats';
import Button from './Button';
import { Award, ShieldCheck, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
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

      <main id="about-page-content" className="flex-grow">
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
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs">Our Heritage</span>
              </div>
              <h1 className="text-[42px] md:text-[56px] font-bold text-foreground leading-[1.1] tracking-tight">
                Defining the Pinnacle of Automotive Excellence
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-md pb-2"
            >
              <p className="text-muted-foreground text-[15px] md:text-[16px] leading-relaxed">
                Since our inception, LuxeRide has been dedicated to sourcing, curating, and delivering the world's most exceptional vehicles to discerning clientele globally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story / Split Section */}
        <section className="py-20 md:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center order-2 lg:order-1"
              >
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">The Vision</span>
                <h2 className="text-[32px] md:text-[48px] font-bold text-foreground mb-6 leading-tight">
                  Born from a Passion for Perfection
                </h2>
                <div className="space-y-6 text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  <p>
                    LuxeRide was founded on a simple principle: acquiring a luxury vehicle should be an experience as refined and exhilarating as the drive itself. We saw an industry that treated masterpieces like commodities, and we set out to change that.
                  </p>
                  <p>
                    Our founders, a collective of automotive purists and luxury concierge experts, built a network that spans across continents. This allows us to source the rarest allocations and most sought-after models before they ever reach the public market.
                  </p>
                  <p className="font-medium text-foreground">
                    Today, we don't just sell cars. We build collections, fulfill lifelong dreams, and forge lasting relationships with clients who demand nothing but the absolute best.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[450px] md:h-[600px] rounded-[32px] overflow-hidden shadow-2xl order-1 lg:order-2"
              >
                <img 
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg" 
                  alt="LuxeRide Founders" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>
          </div>
        </section>

        <Stats />

        {/* Core Values */}
        <section className="py-20 md:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-foreground leading-tight">The Pillars of LuxeRide</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck size={32} />, title: "Unwavering Integrity", desc: "Transparency and honesty form the bedrock of every transaction and client relationship we build." },
                { icon: <Target size={32} />, title: "Curated Exclusivity", desc: "We hand-select only the finest examples of automotive engineering, ensuring every vehicle is a masterpiece." },
                { icon: <Award size={32} />, title: "Bespoke Service", desc: "Our concierge approach means your experience is entirely tailored to your preferences, from sourcing to delivery." }
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-border p-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-[22px] font-bold text-foreground mb-4">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Showroom />

        {/* Final CTA */}
        <section className="py-20 md:py-[120px] bg-foreground text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="max-w-[800px] mx-auto px-5 md:px-10 relative z-10">
            <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">The Invitation</span>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-6">Become Part of the Legacy</h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you are acquiring your first exotic or adding to a generational collection, we invite you to experience the LuxeRide difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="#collection-page" className="px-10 py-5 text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                View Collection
              </Button>
              <Button href="#contact-page" variant="outline" className="px-10 py-5 text-lg bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
