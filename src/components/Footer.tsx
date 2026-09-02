import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, ExternalLink, Car } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS, ESTABLISHED_YEAR } from '../utils/businessStatus';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#gender-training' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#022C22] text-gray-300 border-t-2 border-[#D97706]/60 pt-16 pb-24 lg:pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D97706]/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#064E3B] border border-[#D97706] p-2 flex items-center justify-center shadow-glow-emerald">
                <Car className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <span className="block text-base font-extrabold text-white uppercase tracking-wider">{BUSINESS_NAME_EN}</span>
                <span className="block text-xs text-[#F59E0B] font-bold">{BUSINESS_NAME_TA}</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
              Radha Driving School in Adyar, Chennai is a well-established motor training school providing professional driving instruction with personalized attention, practical guidance and a strong focus on safe and confident driving.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#F59E0B] font-extrabold">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>ESTABLISHED {ESTABLISHED_YEAR} • 28+ YEARS IN BUSINESS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#F59E0B] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-0.5">{BUSINESS_NAME_EN}</span>
                  <span className="block text-[#F59E0B] font-bold mb-1">{BUSINESS_NAME_TA}</span>
                  <span className="text-gray-300 leading-relaxed font-medium">{FULL_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={TEL_LINK} className="text-white hover:text-[#F59E0B] font-extrabold text-sm font-mono transition-colors">
                  {DISPLAY_PHONE}
                </a>
              </div>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F59E0B] font-bold hover:underline pt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-l-2 border-[#D97706] pl-2.5">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold">Mon – Sat</span>
                  <span className="text-[#F59E0B] font-semibold">6:00 AM – 8:00 PM</span>
                </div>
              </div>
              <div className="pt-1">
                <span className="block text-white font-bold">Sunday</span>
                <span className="text-[#F59E0B] font-semibold">9:00 AM – 12:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p>© 2026 {BUSINESS_NAME_EN}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Adyar, Chennai-600020</span>
            <span>•</span>
            <a href="#services" className="hover:text-[#F59E0B]">Motor Training Services</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

