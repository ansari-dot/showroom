import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Wrench } from 'lucide-react';

const experiences = [
  {
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'Private Sourcing',
    description:
      'Tell us the model, trim, and finish you want, and our sourcing team will quietly locate the right vehicle for you.',
  },
  {
    icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'Personalization Studio',
    description:
      'From interior materials to bespoke detailing, we shape every finish around your taste and lifestyle.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    title: 'Ownership Care',
    description:
      'After delivery, our team supports maintenance, inspections, and ongoing care to keep your vehicle exceptional.',
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-card py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[11px] md:text-[12px] tracking-[2px] uppercase font-bold text-primary mb-4">
              Beyond The Purchase
            </div>
            <h2 className="text-[32px] md:text-[44px] leading-[1.08] font-bold text-foreground mb-5">
              The LuxeRide experience continues long after you choose the car
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
              We built this service around discretion, personalization, and long-term support, so the experience feels tailored from first inquiry to everyday ownership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {experiences.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-[24px] border border-border bg-secondary/40 p-6 md:p-7 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.12)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-white text-primary flex items-center justify-center border border-border flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
