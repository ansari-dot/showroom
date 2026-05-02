import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import Feature from './Feature';
import LimitedEdition from './LimitedEdition';
import ProductGallery from './ProductGallery';
import Showroom from './Showroom';
import Footer from './Footer';
import Stats from './Stats';
import Reviews from './Reviews';
import CTA from './CTA';

const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-secondary pt-4 md:pt-6 pb-12 md:pb-[72px]"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
          <Navbar />
          <Hero />
        </div>
      </motion.div>

      <main>
        <Stats />
        <Feature />
        <LimitedEdition />
        <ProductGallery />
        <Showroom />
        <Reviews />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

