import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ServiceProcess from './ServiceProcess';
import Experience from './Experience';
import Benefits from './Benefits';
import Button from './Button';
import { ShieldCheck, CalendarClock, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
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

      <main id="services-page-content" className="flex-grow">
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
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs">Bespoke Concierge</span>
              </div>
              <h1 className="text-[42px] md:text-[56px] font-bold text-foreground leading-[1.1] tracking-tight">
                Elevating the Standard of Luxury Mobility
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-md pb-2"
            >
              <p className="text-muted-foreground text-[15px] md:text-[16px] leading-relaxed mb-6">
                From worldwide white-glove delivery to exclusive private sourcing, our suite of premium services ensures your experience is as exceptional as the vehicles we curate.
              </p>
              <div className="flex gap-4">
                <Button href="#collection-page" className="px-6 py-3">Explore Now</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Signature Services Split Section */}
        <section className="py-20 md:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left: Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[500px] md:h-[700px] rounded-[32px] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg" 
                  alt="Luxury Service" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-md pointer-events-none">
                  <p className="text-white font-medium text-lg leading-relaxed">"Excellence is not an act, but a habit in everything we do."</p>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">The LuxeRide Standard</span>
                <h2 className="text-[32px] md:text-[48px] font-bold text-foreground mb-6 leading-tight">
                  Uncompromising Quality in Every Detail
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
                  We believe that acquiring a luxury vehicle should be as remarkable as driving one. Our signature services are designed to anticipate your needs and exceed your expectations.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: <ShieldCheck size={24} />, title: "Certified Provenance", desc: "Every vehicle comes with a flawless, verified history and a comprehensive warranty." },
                    { icon: <Globe size={24} />, title: "Global Logistics", desc: "Insured, climate-controlled transport to your doorstep, anywhere in the world." },
                    { icon: <CalendarClock size={24} />, title: "24/7 Availability", desc: "Your dedicated concierge is available around the clock to manage your requests." }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-5 group">
                      <div className="w-14 h-14 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modular Sections */}
        <ServiceProcess />
        <Experience />
        <Benefits />

        {/* Full Width Image Break */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-foreground/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-center px-5"
            >
              Driven by <span className="text-primary italic">Perfection.</span>
            </motion.h2>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 md:py-[120px] bg-foreground text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="max-w-[800px] mx-auto px-5 md:px-10 relative z-10">
            <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Next Steps</span>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-6 leading-tight">Ready to Experience LuxeRide?</h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Allow our dedicated concierge team to craft a bespoke journey for you, from exclusive sourcing to worldwide white-glove delivery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="#contact-page" className="px-10 py-5 text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                Book Consultation
              </Button>
              <Button href="#collection-page" variant="outline" className="px-10 py-5 text-lg bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground">
                View Collection
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
