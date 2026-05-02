import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

const collection = [
  {
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    title: 'Lumina S Class',
    category: 'Chosen for evening city arrivals',
    description:
      'Finished in a deep metallic tone with a calm cabin atmosphere, this model is ideal for clients who value quiet luxury over noise.',
    curator: 'Curated by Sarah Peterson',
    detail: 'Soft leather cabin and extended electric range',
    price: '$220,000',
  },
  {
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    title: 'Vantage GT',
    category: 'For drivers who prefer sharper response',
    description:
      'A more athletic silhouette with strong road presence, selected for buyers who want something elegant but unmistakably energetic.',
    curator: 'Matched by Alexander W.',
    detail: 'High-performance setup with grand touring comfort',
    price: '$185,000',
  },
  {
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg',
    title: 'Nomad X',
    category: 'For weekend escapes and family presence',
    description:
      'This luxury SUV brings together elevated comfort, richer materials, and a commanding shape for clients who want flexibility without compromise.',
    curator: 'Recommended by David Robert',
    detail: 'Bespoke interior trims and hybrid capability',
    price: '$248,000',
  },
];

const ProductDisplay: React.FC = () => {
  const [featured, ...secondary] = collection;

  return (
    <section id="collection" className="bg-background py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr,1.05fr] gap-10 md:gap-14 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] mb-4">
              <Sparkles size={14} />
              Personal Selection
            </div>
            <h2 className="text-[32px] md:text-[46px] leading-[1.08] font-bold text-foreground mb-5">
              A more personal collection, selected with taste not just inventory
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
              Instead of feeling like a generic product grid, this section presents each vehicle like a considered recommendation. The tone is warmer, more curated, and closer to a luxury buying experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-3xl bg-card border border-border p-5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.1)]">
              <div className="text-[26px] md:text-[34px] font-black text-primary mb-2">12</div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold text-muted-foreground">
                Curated Weekly
              </div>
            </div>
            <div className="rounded-3xl bg-card border border-border p-5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.1)]">
              <div className="text-[26px] md:text-[34px] font-black text-primary mb-2">1:1</div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold text-muted-foreground">
                Client Matching
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-10 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl bg-card border border-border shadow-[0_22px_50px_-26px_rgba(0,0,0,0.12)]"
          >
            <div className="relative h-[320px] md:h-[520px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 text-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] mb-4">
                  <Heart size={14} />
                  Editor's Choice
                </div>
                <h3 className="text-[30px] md:text-[42px] font-bold text-white leading-[1.05] mb-3">
                  {featured.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/85 font-medium">
                  {featured.category}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground mb-6">
                {featured.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-2">
                    Curator Note
                  </div>
                  <div className="text-[13px] font-semibold text-foreground">{featured.curator}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-2">
                    Signature Detail
                  </div>
                  <div className="text-[13px] font-semibold text-foreground">{featured.detail}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-2">
                    Starting From
                  </div>
                  <div className="text-[18px] font-bold text-primary">{featured.price}</div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid grid-cols-1 gap-6">
            {secondary.map((car, index) => (
              <motion.article
                key={car.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-3xl border border-border p-4 shadow-[0_14px_32px_-18px_rgba(0,0,0,0.1)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[180px,1fr] gap-4">
                  <div className="h-[210px] sm:h-full rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[2px] text-primary mb-2">
                        {car.category}
                      </div>
                      <h3 className="text-[22px] font-bold text-foreground mb-3">{car.title}</h3>
                      <p className="text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground mb-4">
                        {car.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-1">
                          {car.curator}
                        </div>
                        <div className="text-[18px] font-bold text-primary">{car.price}</div>
                      </div>
                      <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-bold text-[13px] hover:bg-primary/90 transition-colors">
                        View Detail
                        <ArrowRight size={16} />
                      </button>
                    </div>
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

export default ProductDisplay;
