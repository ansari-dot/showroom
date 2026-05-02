import React, { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-background py-16 md:py-[100px] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm md:text-base mb-3 block"
          >
            Connect With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[48px] font-bold text-foreground mb-4 leading-tight"
          >
            Let's Craft Your <br className="hidden md:block" /> Dream Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            Our concierge team is at your disposal to arrange private viewings, discuss bespoke customization, or answer any inquiries you may have.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 bg-card rounded-[32px] p-2 md:p-3 shadow-2xl shadow-primary/5 border border-primary/10">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-foreground text-white rounded-[24px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg')] bg-cover bg-center mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground to-foreground/95" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Contact Information</h3>
              <p className="text-primary/80 mb-10 text-sm md:text-base font-light">Say something to start a live chat!</p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-all duration-300 shrink-0 shadow-[0_0_0_0_rgba(121,200,180,0)] group-hover:shadow-[0_0_15px_rgba(121,200,180,0.4)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Direct Line</p>
                    <p className="text-base md:text-lg font-medium tracking-wide">+1 (800) 555-LUXE</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-all duration-300 shrink-0 shadow-[0_0_0_0_rgba(121,200,180,0)] group-hover:shadow-[0_0_15px_rgba(121,200,180,0.4)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Inquiry</p>
                    <p className="text-base md:text-lg font-medium tracking-wide">concierge@luxeride.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-all duration-300 shrink-0 shadow-[0_0_0_0_rgba(121,200,180,0)] group-hover:shadow-[0_0_15px_rgba(121,200,180,0.4)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                    <p className="text-base md:text-lg font-medium leading-relaxed tracking-wide">
                      100 Prestige Avenue,<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-all duration-300 shrink-0 shadow-[0_0_0_0_rgba(121,200,180,0)] group-hover:shadow-[0_0_15px_rgba(121,200,180,0.4)]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Business Hours</p>
                    <p className="text-base md:text-lg font-medium leading-relaxed tracking-wide">
                      Mon - Fri: 9:00 AM - 8:00 PM<br />
                      Sat - Sun: Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-12 w-32 h-32 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-6 md:p-10 lg:p-12 flex flex-col justify-center"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Inquiry Sent Successfully</h3>
                <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
                  Thank you for reaching out. Our concierge team will review your request and contact you within 24 hours.
                </p>
                <Button 
                  className="mt-8 px-10 py-4"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4">
                  {/* First Name */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full bg-transparent border-b-2 border-border py-2 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                      placeholder="First Name"
                    />
                    <label 
                      htmlFor="firstName" 
                      className="absolute left-0 top-2 text-muted-foreground text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-5 peer-valid:text-xs font-medium"
                    >
                      First Name
                    </label>
                  </div>
                  
                  {/* Last Name */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full bg-transparent border-b-2 border-border py-2 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                      placeholder="Last Name"
                    />
                    <label 
                      htmlFor="lastName" 
                      className="absolute left-0 top-2 text-muted-foreground text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-5 peer-valid:text-xs font-medium"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {/* Email */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-transparent border-b-2 border-border py-2 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                      placeholder="Email Address"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 top-2 text-muted-foreground text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-5 peer-valid:text-xs font-medium"
                    >
                      Email Address
                    </label>
                  </div>
                  
                  {/* Phone */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-transparent border-b-2 border-border py-2 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                      placeholder="Phone Number"
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-0 top-2 text-muted-foreground text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-5 peer-valid:text-xs font-medium"
                    >
                      Phone Number (Optional)
                    </label>
                  </div>
                </div>

                {/* Subject Type */}
                <div className="pt-2">
                  <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Select Inquiry Type</p>
                  <div className="flex flex-wrap gap-3">
                    {['Vehicle Inquiry', 'Test Drive', 'Bespoke Customization', 'Other'].map((type, idx) => (
                      <label key={idx} className="cursor-pointer">
                        <input type="radio" name="inquiryType" className="peer sr-only" defaultChecked={idx === 0} />
                        <div className="px-5 py-2.5 rounded-full border-2 border-border text-muted-foreground text-sm font-medium transition-all peer-checked:bg-primary peer-checked:text-foreground peer-checked:border-primary hover:border-primary/50">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative group mt-4">
                  <textarea 
                    id="message" 
                    required
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-border py-2 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors resize-none"
                    placeholder="Your Message"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-2 text-muted-foreground text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-5 peer-valid:text-xs font-medium"
                  >
                    Your Message
                  </label>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <p className="text-sm text-muted-foreground">
                    By submitting, you agree to our <a href="#" className="text-primary hover:underline underline-offset-4">Privacy Policy</a>.
                  </p>
                  <Button type="submit" className="w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    Send Message
                    <Send size={18} />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

