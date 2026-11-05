import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, ExternalLink, Car } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, DISPLAY_WHATSAPP, WHATSAPP_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS, ESTABLISHED_YEAR } from '../utils/businessStatus';

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

              {/* Call Option */}
              <div className="flex items-center gap-2.5">
                <a
                  href={TEL_LINK}
                  className="w-7 h-7 rounded-lg bg-[#064E3B] text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#D97706]/40 hover:scale-105 active:scale-95 transition-transform"
                  title="Touch to Call in dialer"
                  aria-label={`Call ${DISPLAY_PHONE}`}
                >
                  <Phone className="w-3.5 h-3.5 fill-[#F59E0B]" />
                </a>
                <div className="flex items-center gap-2">
                  <a href={TEL_LINK} className="text-white hover:text-[#F59E0B] font-extrabold text-sm font-mono transition-colors">
                    {DISPLAY_PHONE}
                  </a>
                  <span className="text-[10px] text-[#F59E0B] font-bold uppercase">(Call)</span>
                </div>
              </div>

              {/* WhatsApp Option */}
              <div className="flex items-center gap-2.5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
                  title="Touch to chat on WhatsApp"
                  aria-label={`WhatsApp ${DISPLAY_WHATSAPP}`}
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-extrabold text-sm font-mono transition-colors"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                  <span className="text-[10px] text-[#25D366] font-bold uppercase">(WhatsApp)</span>
                </div>
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

