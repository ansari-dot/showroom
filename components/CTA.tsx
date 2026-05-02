import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-[140px] bg-foreground text-white text-center overflow-hidden">
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg')] bg-cover bg-center mix-blend-luminosity blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
      
      <div className="max-w-[800px] mx-auto px-5 md:px-10 relative z-10">
        <span className="text-primary font-bold tracking-[4px] uppercase text-[11px] md:text-xs mb-6 block">Ready to Elevate</span>
        <h2 className="text-[36px] md:text-[56px] font-bold mb-6 leading-[1.1]">Commission Your Masterpiece</h2>
        <p className="text-[16px] md:text-[18px] text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          Our global network of specialists is ready to source, secure, or commission your next vehicle. Step into a world of uncompromised luxury and performance today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#contact-page" className="px-10 py-5 text-[15px] shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all">
            Contact Concierge
          </Button>
          <Button href="#collection-page" variant="outline" className="px-10 py-5 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground hover:border-white">
            Explore Showroom
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
