
import React from 'react';

const Info: React.FC = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">Experience Service</h3>
          <p className="text-[13px] md:text-[14px] leading-[1.6] text-white/90">
            From comprehensive maintenance and repair services to custom modifications and personalization, our experienced technicians ensure your luxury vehicle remains in exceptional condition.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">Frequently Asked Questions</h3>
          <p className="text-[13px] md:text-[14px] leading-[1.6] text-white/90">
            Find answers to common questions about our showroom, premium services, and purchasing process. Our dedicated team is here to support every step of your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
