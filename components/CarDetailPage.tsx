import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import { ChevronLeft, Share2, Heart, CheckCircle2, Shield, Cog, Battery, Gauge } from 'lucide-react';

const CarDetailPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    'https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg',
    'https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary pt-4 md:pt-6 pb-4"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
          <Navbar />
        </div>
      </motion.div>

      <main id="car-detail-content" className="flex-grow bg-[#fcfdfc]">
        {/* Breadcrumb & Actions Bar */}
        <div className="border-b border-border/40 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
            <a href="#collection-page" className="inline-flex items-center gap-2 text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft size={16} />
              Back to Collection
            </a>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Share2 size={18} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Top Product Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-start">
            
            {/* Left: Gallery */}
            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-[400px] md:h-[600px] rounded-[24px] overflow-hidden bg-muted border border-border shadow-md"
              >
                <img 
                  src={images[activeImage]} 
                  alt="Lumina S Class Showcase" 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute top-5 left-5 rounded-sm bg-primary/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-white shadow-lg">
                  In Showroom
                </div>
              </motion.div>
              
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-[80px] md:h-[120px] rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    {activeImage !== idx && <div className="absolute inset-0 bg-black/20" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Info Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <div className="text-[12px] uppercase tracking-[3px] font-bold text-primary mb-2">
                  Electric Luxury
                </div>
                <h1 className="text-[40px] md:text-[52px] font-bold text-foreground leading-[1.05] mb-4">
                  Lumina S Class
                </h1>
                <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
                  The absolute pinnacle of silent performance and executive comfort. The Lumina S Class redefines what a luxury sedan can be, pairing breathtaking electric acceleration with an interior tailored from sustainable, ultra-premium materials.
                </p>
              </div>

              <div className="p-6 rounded-[24px] bg-white border border-border shadow-[0_14px_30px_-24px_rgba(0,0,0,0.1)] mb-8">
                <div className="flex items-end justify-between mb-6 pb-6 border-b border-border/60">
                  <div>
                    <div className="text-[11px] uppercase tracking-[2px] font-bold text-muted-foreground mb-1">Price</div>
                    <div className="text-[36px] font-bold text-foreground leading-none">$220,000</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-[2px] font-bold text-muted-foreground mb-1">Est. Payment</div>
                    <div className="text-[16px] font-bold text-foreground">$3,840 <span className="text-[13px] text-muted-foreground font-medium">/mo</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-secondary text-primary flex items-center justify-center">
                      <Gauge size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">0-60 mph</div>
                      <div className="text-[15px] font-bold text-foreground">3.2 sec</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-secondary text-primary flex items-center justify-center">
                      <Cog size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">Drivetrain</div>
                      <div className="text-[15px] font-bold text-foreground">Dual Motor AWD</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-secondary text-primary flex items-center justify-center">
                      <Battery size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">Range</div>
                      <div className="text-[15px] font-bold text-foreground">420 miles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-secondary text-primary flex items-center justify-center">
                      <Shield size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[1px] text-muted-foreground">Warranty</div>
                      <div className="text-[15px] font-bold text-foreground">4yr / 50k mi</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="w-full py-4 text-base">Reserve This Vehicle</Button>
                  <Button variant="outline" className="w-full py-4 text-base bg-secondary/50">Contact Concierge</Button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex flex-col gap-3">
                {[
                  "Clean title & verified provenance",
                  "LuxeRide 150-point inspection passed",
                  "Eligible for worldwide enclosed delivery"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[14px] text-foreground/80 font-medium">
                    <CheckCircle2 size={16} className="text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Specifications & Features */}
        <section className="py-20 md:py-[100px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
              
              {/* Left: Tech Specs */}
              <div>
                <h3 className="text-[28px] font-bold text-foreground mb-8">Technical Specifications</h3>
                <div className="rounded-[24px] border border-border bg-white overflow-hidden shadow-sm">
                  {[
                    { label: "Powertrain", value: "Dual Permanent Magnet Synchronous Motors" },
                    { label: "Maximum Power", value: "680 HP (500 kW)" },
                    { label: "Peak Torque", value: "750 lb-ft" },
                    { label: "Top Speed", value: "155 mph (Electronically Limited)" },
                    { label: "Battery Capacity", value: "112 kWh Lithium-Ion" },
                    { label: "Charging (DC Fast)", value: "10% to 80% in 22 mins" },
                    { label: "Drag Coefficient", value: "0.20 Cd" },
                    { label: "Curb Weight", value: "5,250 lbs" },
                    { label: "Cargo Capacity", value: "24 cu ft (Frunk + Trunk)" },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center p-5 border-b border-border/60 last:border-b-0 hover:bg-secondary/20 transition-colors">
                      <span className="text-[14px] text-muted-foreground font-medium">{spec.label}</span>
                      <span className="text-[14px] font-bold text-foreground text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Key Features */}
              <div>
                <h3 className="text-[28px] font-bold text-foreground mb-8">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[14px] uppercase tracking-[2px] font-bold text-primary mb-4">Technology</h4>
                    <ul className="space-y-3">
                      {[
                        "Augmented Reality HUD",
                        "L3 Autonomous Driving Ready",
                        "Over-the-Air (OTA) Updates",
                        "Biometric Driver Authentication",
                        "24-Speaker Immersive Audio"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-[14px] text-foreground/80 font-medium leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] uppercase tracking-[2px] font-bold text-primary mb-4">Comfort & Interior</h4>
                    <ul className="space-y-3">
                      {[
                        "Massaging Front & Rear Seats",
                        "HEPA Cabin Air Filtration",
                        "Active Noise Cancellation",
                        "Electrochromic Glass Roof",
                        "Vegan or Aniline Leather Options"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-[14px] text-foreground/80 font-medium leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-2 pt-4 border-t border-border/60 mt-2">
                    <h4 className="text-[14px] uppercase tracking-[2px] font-bold text-primary mb-4">Safety & Security</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "360° Sentry Monitoring",
                        "Evasive Steering Assist",
                        "Night Vision Camera",
                        "Ultra-High Strength Steel Chassis"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-[14px] text-foreground/80 font-medium leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Deep Dive Feature Section */}
        <section className="py-20 md:py-[100px] bg-card border-y border-border/60">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Design & Engineering</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-foreground">A Masterclass in Detail</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
              <div className="order-2 md:order-1">
                <h3 className="text-[28px] font-bold text-foreground mb-4">Sculpted Aerodynamics</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
                  Every curve of the Lumina S Class was shaped in the wind tunnel. The flush door handles, aerodynamically optimized wheels, and teardrop cabin profile don't just create a stunning silhouette—they result in a drag coefficient of just 0.20, ensuring whisper-quiet cruising at autobahn speeds.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground/80">Active aero grille shutters</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground/80">Acoustic laminated glass all around</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[350px] md:h-[450px] rounded-[24px] overflow-hidden order-1 md:order-2">
                <img src="https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg" alt="Aero" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative h-[350px] md:h-[450px] rounded-[24px] overflow-hidden">
                <img src="https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg" alt="Interior" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-[28px] font-bold text-foreground mb-4">The Executive Suite</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
                  Step inside to a sanctuary crafted from open-pore wood, sustainably sourced leathers, and milled aluminum. The panoramic glass roof floods the cabin with natural light, while the 24-speaker bespoke audio system delivers a concert-hall experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground/80">Massaging, ventilated rear seats</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-foreground/80">Augmented reality heads-up display</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 md:py-[120px] bg-foreground text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
          <div className="max-w-[800px] mx-auto px-5 md:px-10 relative z-10">
            <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Next Steps</span>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-6 leading-tight">Experience the Lumina S Class</h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule a private viewing, arrange an extended test drive, or speak directly with our concierge team to secure your allocation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="#contact-page" className="px-10 py-5 text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                Contact Concierge
              </Button>
              <Button href="#collection-page" variant="outline" className="px-10 py-5 text-lg bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground">
                Back to Collection
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CarDetailPage;
