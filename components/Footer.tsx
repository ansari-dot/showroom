import React from 'react';
import { Triangle, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-16 md:pt-20 pb-10 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-2 text-[20px] font-semibold">
              <div className="w-6 h-6 flex items-center justify-center">
                <Triangle className="w-[22px] h-[22px] text-primary fill-current rotate-180" />
              </div>
              <span>LuxeRide</span>
            </div>
            <p className="text-[14px] text-muted-foreground leading-[1.6]">
              Redefining luxury travel since 1995. Our commitment to excellence and innovation ensures every journey is extraordinary.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-bold mb-5 md:mb-6">Company</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-[14px] text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Showrooms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-bold mb-5 md:mb-6">Models</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-[14px] text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">SUVs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electric Vehicles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sports Cars</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Limousines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-bold mb-5 md:mb-6">Support</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-[14px] text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Service & Parts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Test Drive</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-muted-foreground text-center md:text-left">
          <p>&copy; {currentYear} LuxeRide Automotive Group. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
