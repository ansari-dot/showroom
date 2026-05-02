import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we provide secure, insured white-glove delivery services to over 50 countries worldwide. Our logistics team handles all customs and documentation."
  },
  {
    question: "What financing options are available?",
    answer: "We partner with leading financial institutions to offer bespoke financing plans, including low-interest loans and flexible leasing options for both individual and corporate clients."
  },
  {
    question: "How do I schedule a test drive?",
    answer: "You can schedule a test drive through our website or by contacting your local showroom directly. We offer both showroom visits and private experiences."
  },
  {
    question: "Are all vehicles certified?",
    answer: "Every pre-owned vehicle in our collection undergoes a rigorous 150-point inspection by certified master technicians to ensure the highest standards."
  }
];

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border/60 hover:border-primary/50 transition-colors duration-300">
      <button 
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-[18px] md:text-[20px] font-medium text-foreground group-hover:text-primary transition-colors flex-1 pr-4 tracking-tight">{question}</span>
        <div className={`flex-shrink-0 p-2 md:p-2.5 ${isOpen ? 'bg-primary text-white' : 'bg-transparent text-primary'} border border-primary transition-all duration-300`}>
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 md:py-[120px] relative">
      {/* Decorative sharp accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-primary/30" />
      
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-primary font-bold tracking-[3px] uppercase text-xs md:text-sm mb-4 block">Information</span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-foreground mb-6 tracking-tight">Common Questions</h2>
          <p className="text-[16px] md:text-[18px] text-muted-foreground max-w-2xl mx-auto">Everything you need to know about our luxury services, presented clearly.</p>
        </motion.div>
        
        <div className="bg-transparent border-t border-border/60">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
