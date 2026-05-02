
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Collector",
    content: "The attention to detail at LuxeRide is unparalleled. From the initial inquiry to the white-glove delivery, everything was perfect.",
    rating: 5,
    avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FEuropean%2F1"
  },
  {
    name: "Elena Rossi",
    role: "Enthusiast",
    content: "Found my dream GTS here. The concierge service helped me customize every aspect of the interior. Simply the best.",
    rating: 5,
    avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F6"
  },
  {
    name: "Julian Brooks",
    role: "Executive",
    content: "Reliable, professional, and exclusive. LuxeRide doesn't just sell cars; they provide a lifestyle upgrade.",
    rating: 5,
    avatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F5"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="bg-secondary/30 py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-[15px] md:text-[16px] text-muted-foreground">Trusted by connoisseurs of fine automobiles worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-6 md:p-8 rounded-3xl shadow-xl shadow-foreground/5 border border-border relative overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 text-primary/10 -rotate-12" />
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[14px] md:text-[15px] italic text-foreground/80 mb-6 md:mb-8 leading-relaxed">
                "{item.content}"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img src={item.avatar} alt={item.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <div className="font-bold text-[13px] md:text-[14px]">{item.name}</div>
                  <div className="text-[11px] md:text-[12px] text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
