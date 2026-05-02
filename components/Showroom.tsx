
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ShowroomCardProps {
  image: string;
  title: string;
  description: string;
  ownerName: string;
  ownerAvatar: string;
  metricLabel: string;
  metricValue: string;
  index: number;
}

const ShowroomCard: React.FC<ShowroomCardProps> = ({
  image, title, description, ownerName, ownerAvatar, metricLabel, metricValue, index
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="flex flex-col gap-5 bg-card rounded-3xl p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-border cursor-pointer transition-shadow hover:shadow-2xl group"
  >
    <div className="h-[200px] sm:h-[240px] rounded-2xl overflow-hidden bg-muted relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
          <ArrowRight size={24} />
        </div>
      </div>
    </div>

    <div className="px-1 flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="text-[18px] md:text-[20px] font-bold text-foreground">{title}</div>
        <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">In Stock</div>
      </div>

      <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[1.6] mb-6 line-clamp-2">
        {description}
      </p>

      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={ownerAvatar} alt={ownerName} className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20" />
          <span className="font-semibold text-foreground text-[11px] sm:text-[12px] truncate max-w-[80px] sm:max-w-none">{ownerName}</span>
        </div>
        <div className="text-right">
          <div className="text-muted-foreground text-[9px] uppercase tracking-widest font-bold mb-0.5">{metricLabel}</div>
          <div className="font-bold text-primary text-[12px] sm:text-[14px]">{metricValue}</div>
        </div>
      </div>
    </div>
  </motion.article>
);

const Showroom: React.FC = () => {
  const cars = [
    {
      image: "https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg",
      title: "Vantage GT",
      description: "A compact titan engineered for track-level performance and city elegance.",
      ownerName: "Alexander W.",
      ownerAvatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FSouth%20Asian%2F1",
      metricLabel: "Starting From",
      metricValue: "$185,000"
    },
    {
      image: "https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg",
      title: "Lumina S Class",
      description: "The definition of executive comfort, featuring next-gen AI assistance.",
      ownerName: "Sarah Peterson",
      ownerAvatar: "https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F4",
      metricLabel: "Range",
      metricValue: "420 Miles"
    },
    {
      image: "https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg",
      title: "Nomad X",
      description: "Luxury off-roader with bespoke leather interior and hybrid power.",
      ownerName: "David Robert",
      ownerAvatar: "https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FAfrican%2F2",
      metricLabel: "Off-Road Score",
      metricValue: "9.8/10"
    }
  ];

  return (
    <section id="showroom" className="bg-background py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] leading-[1.1] font-bold text-foreground mb-4">The Showroom</h2>
            <p className="text-[15px] md:text-[16px] text-muted-foreground max-w-lg">
              Explore our current collection of masterpieces. Each vehicle is hand-selected and verified by our specialists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3 sm:gap-4"
          >
            <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-primary text-white font-bold text-[13px] md:text-[14px] hover:bg-primary/90 transition-all">All Models</button>
            <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white border border-border font-bold text-[13px] md:text-[14px] hover:bg-secondary transition-all">Electric</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cars.map((car, idx) => (
            <ShowroomCard key={idx} index={idx} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showroom;
