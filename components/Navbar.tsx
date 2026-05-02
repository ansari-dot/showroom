
import React, { useState } from 'react';
import { Triangle, Menu, X } from 'lucide-react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isCollectionPage = typeof window !== 'undefined' && window.location.hash.startsWith('#collection');
  const isContactPage = typeof window !== 'undefined' && window.location.hash.startsWith('#contact-page');
  const isServicesPage = typeof window !== 'undefined' && window.location.hash.startsWith('#services-page');
  const isAboutPage = typeof window !== 'undefined' && window.location.hash.startsWith('#about-page');
  
  const handleNavClick = (href: string, closeMenu = false) => {
    const isPageLink = href === '#home-page' || href === '#collection-page' || href === '#contact-page' || href === '#services-page' || href === '#about-page';

    if (isPageLink) {
      window.location.hash = href;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (closeMenu) {
      setIsOpen(false);
    }
  };
  const navItems = [
    { label: 'Home', href: '#home-page' },
    { label: 'Collection', href: '#collection-page' },
    { label: 'Services', href: '#services-page' },
    { label: 'About Us', href: '#about-page' },
    { label: 'Contact', href: '#contact-page' },
  ];

  return (
    <nav className="flex items-center justify-between relative z-50">
      <div className="flex items-center gap-2 text-[20px] font-semibold">
        <div className="w-6 h-6 flex items-center justify-center">
          <Triangle className="w-[22px] h-[22px] text-primary fill-current rotate-180" />
        </div>
        <span>LuxeRide</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7 text-[14px] font-medium">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`${index === 0 ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
          >
            {item.label}
          </a>
        ))}
        <Button className="ml-2">Book Showroom Visit</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-card p-6 rounded-2xl shadow-2xl border border-border flex flex-col gap-5 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] font-medium py-2 border-b border-border/50"
                onClick={() => handleNavClick(item.href, true)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>Book Showroom Visit</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
