import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Grid2x2, Images, MoveRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';

const featuredGallery = {
  title: 'Modern Showroom Highlights',
  label: 'Latest Gallery',
  image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f6348043-70e2-4d47-a36b-01ceaf38d100.jpg',
  description:
    'A cleaner showroom gallery with stronger framing, practical sections, and premium visual rhythm designed to keep the focus on the cars.',
};

const galleryRows = [
  {
    title: 'Signature Arrivals',
    description: 'Fresh arrivals presented with clearer angles, calmer spacing, and a sharper showroom look.',
    images: [
      'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
      'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
      'https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg',
    ],
  },
  {
    title: 'SUV Showroom',
    description: 'Luxury utility models photographed with stronger presence and more grounded visual weight.',
    images: [
      'https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg',
      'https://storage.googleapis.com/banani-generated-images/generated-images/7f6a738c-6e69-4e00-9e8d-2947672ccb41.jpg',
      'https://storage.googleapis.com/banani-generated-images/generated-images/91d58db2-e424-4936-9228-ea1349875caa.jpg',
    ],
  },
];

const gridGallery = [
  {
    title: 'Studio Perspective',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/586b08e3-0629-4ec8-b24c-62a842f06d3b.jpg',
    tag: 'Electric',
  },
  {
    title: 'Road Character',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e0b41bb2-e3c0-4b92-8d45-198fbbeba9e3.jpg',
    tag: 'Performance',
  },
  {
    title: 'Executive Presence',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f6348043-70e2-4d47-a36b-01ceaf38d100.jpg',
    tag: 'Flagship',
  },
  {
    title: 'Collector Detail',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/8343161c-8430-4e00-928d-2947672ccb40.jpg',
    tag: 'Limited',
  },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] selection:bg-primary selection:text-primary-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary pt-4 md:pt-6 pb-8 md:pb-10 border-b border-foreground/8"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full">
          <Navbar />
        </div>
      </motion.div>

      <main id="gallery-page" className="py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 border border-foreground/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-primary mb-4">
                <Camera size={14} />
                Showroom Gallery
              </div>
              <h1 className="text-[34px] md:text-[52px] leading-[1.04] font-bold text-foreground mb-4">
                A modern gallery page with cleaner sections and stronger showroom presentation
              </h1>
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70 max-w-2xl">
                This layout keeps the page practical and elegant. Bigger image focus, cleaner rows, sharper edges, and less visual noise make the gallery feel more premium and easier to browse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Button href="#gallery-rows" className="px-7">View Photos</Button>
              <Button href="#gallery-contact" variant="outline" className="px-7 bg-white">Book Showroom Tour</Button>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden border border-foreground/10 bg-white shadow-[0_24px_48px_-28px_rgba(0,0,0,0.16)] mb-10 md:mb-14"
          >
            <div className="grid grid-cols-1 xl:grid-cols-[1.25fr,0.75fr]">
              <div className="relative min-h-[320px] md:min-h-[560px] overflow-hidden">
                <img src={featuredGallery.image} alt={featuredGallery.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/72 via-foreground/10 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6">
                  <div className="inline-flex bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary mb-3">
                    {featuredGallery.label}
                  </div>
                  <h2 className="text-[30px] md:text-[44px] font-bold text-white leading-[1.04]">
                    {featuredGallery.title}
                  </h2>
                </div>
              </div>

              <div className="bg-[#faf8f2] p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[2px] text-primary mb-4">
                    Modern Layout
                  </div>
                  <p className="text-[15px] md:text-[16px] leading-[1.9] text-foreground/70">
                    {featuredGallery.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-px bg-foreground/10 mt-8 border border-foreground/10">
                  {[
                    { label: 'Frames', value: '24+' },
                    { label: 'Sections', value: '03' },
                    { label: 'Mood', value: 'Sharp' },
                    { label: 'Style', value: 'Premium' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white p-5">
                      <div className="text-[10px] uppercase tracking-[2px] font-bold text-muted-foreground mb-2">{item.label}</div>
                      <div className="text-[20px] font-bold text-foreground">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <section id="gallery-rows" className="space-y-10 md:space-y-14 mb-10 md:mb-14">
            {galleryRows.map((row, rowIndex) => (
              <motion.section
                key={row.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: rowIndex * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">
                  <div className="max-w-2xl">
                    <h2 className="text-[28px] md:text-[38px] font-bold text-foreground leading-[1.08] mb-3">
                      {row.title}
                    </h2>
                    <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/70">
                      {row.description}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:text-foreground transition-colors">
                    Open Gallery Set
                    <MoveRight size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {row.images.map((image, index) => (
                    <article
                      key={image}
                      className={`overflow-hidden border border-foreground/10 bg-white shadow-[0_18px_34px_-26px_rgba(0,0,0,0.14)] ${index === 0 ? 'md:col-span-2' : ''}`}
                    >
                      <div className={`relative overflow-hidden ${index === 0 ? 'h-[340px] md:h-[420px]' : 'h-[340px] md:h-[420px]'}`}>
                        <img src={image} alt={`${row.title} frame ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      </div>
                    </article>
                  ))}
                </div>
              </motion.section>
            ))}
          </section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[0.85fr,1.15fr] gap-6 md:gap-8 mb-8 md:mb-10"
          >
            <div className="border border-foreground/10 bg-white p-6 md:p-8 shadow-[0_18px_34px_-26px_rgba(0,0,0,0.14)]">
              <div className="inline-flex items-center gap-2 border border-foreground/10 bg-[#faf8f2] px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-primary mb-5">
                <Images size={14} />
                Gallery Notes
              </div>
              <h2 className="text-[30px] md:text-[40px] font-bold text-foreground leading-[1.06] mb-4">
                A practical premium gallery should feel clean, sharp, and easy to scan
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.9] text-foreground/70 mb-6">
                This structure keeps the page elegant without making it abstract. Each image block has room to breathe, and the layout stays rooted in a modern showroom experience.
              </p>
              <div className="space-y-4">
                {[
                  'Large showcase image for stronger first impression',
                  'Horizontal rows for more natural browsing rhythm',
                  'Sharper frames and cleaner borders for a premium look',
                ].map((item) => (
                  <div key={item} className="border border-foreground/10 bg-[#faf8f2] px-4 py-4 text-[14px] font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {gridGallery.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden border border-foreground/10 bg-white shadow-[0_18px_34px_-26px_rgba(0,0,0,0.14)]"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/72 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-primary">
                      {item.tag}
                    </div>
                    <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                      <h3 className="text-[24px] font-bold text-white leading-[1.06]">{item.title}</h3>
                      <div className="bg-white p-3 text-primary">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>

        <section id="gallery-contact" className="pt-16 md:pt-20">
          <div className="w-full px-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-[#e8e1d5] border-t border-foreground/10 p-8 md:p-12 xl:p-16 text-center"
            >
              <div className="max-w-[980px] mx-auto px-5 md:px-8">
                <h2 className="text-[30px] md:text-[42px] font-bold text-foreground mb-4">
                  Book a private gallery presentation in our showroom
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-foreground/70 max-w-2xl mx-auto mb-8">
                  Let our team walk you through the featured arrivals, key details, and premium finishes shown throughout this gallery page.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="px-10 py-4 text-base">Book Gallery Visit</Button>
                  <Button href="#home-page" variant="outline" className="px-10 py-4 text-base bg-white">
                    Return Home
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
