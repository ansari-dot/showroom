import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import FAQ from './FAQ';
import { MapPin, Navigation } from 'lucide-react';

const ContactPage: React.FC = () => {
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

      <main id="contact-page-content" className="flex-grow">
        {/* Contact Form & Info Section */}
        <Contact />

        {/* Global Showrooms / Map Section */}
        <section className="py-16 md:py-[100px] bg-white border-t border-border">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-medium tracking-wider uppercase text-sm md:text-base mb-3 block"
              >
                Our Locations
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[32px] md:text-[40px] font-bold text-foreground mb-4"
              >
                Find a Showroom Near You
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-muted-foreground max-w-2xl mx-auto text-base"
              >
                Experience the pinnacle of luxury in person. Visit one of our exclusive showrooms globally to feel, see, and test drive your dream car.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map View */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-border shadow-xl relative group"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26458.077363402772!2d-118.42371900117188!3d34.07590849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1714588960100!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500 group-hover:filter-none"
                ></iframe>
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Global Headquarters</p>
                      <p className="text-xs text-muted-foreground">Beverly Hills, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Locations List */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {[
                  { city: 'Beverly Hills', address: '100 Prestige Avenue', status: 'Flagship HQ' },
                  { city: 'Dubai', address: 'Financial Centre Road', status: 'Boutique' },
                  { city: 'London', address: 'Mayfair, W1K', status: 'Showroom' },
                  { city: 'Tokyo', address: 'Ginza, Chuo City', status: 'Experience Center' }
                ].map((loc, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-2xl p-5 border border-primary/10 hover:border-primary/30 transition-colors group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">{loc.city}</h4>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {loc.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{loc.address}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      <Navigation size={14} />
                      Get Directions
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
