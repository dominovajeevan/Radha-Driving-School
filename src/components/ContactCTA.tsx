import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, WHATSAPP_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E8DEC8] relative overflow-hidden">
      
      {/* Decorative Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D97706]/15 blur-[120px] pointer-events-none rounded-full" />

      <ScrollReveal className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white border-2 border-[#D97706]/60 rounded-3xl p-8 sm:p-14 shadow-card backdrop-blur-md">
          
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-[#F4EFE6] px-4 py-1.5 rounded-full border border-[#D97706]/40 mb-4 inline-block">
            CONTACT RADHA DRIVING SCHOOL
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#064E3B] tracking-tight leading-tight mb-4">
            Get in <span className="gradient-text-gold">Touch</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-medium">
            Have questions about our motor training or driving license services in Adyar, Chennai? Contact Radha Driving School directly.
          </p>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DEC8] mb-8 text-left max-w-xl mx-auto space-y-4">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm border border-[#D97706]/40">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Direct Phone Contact</span>
                <a
                  href={TEL_LINK}
                  className="text-2xl font-extrabold text-[#064E3B] hover:text-[#D97706] tracking-wider transition-colors block mt-0.5"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-3 border-t border-[#E8DEC8]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm border border-[#D97706]/40">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Official Location</span>
                <span className="text-sm font-extrabold text-[#064E3B] block">{BUSINESS_NAME_EN} ({BUSINESS_NAME_TA})</span>
                <span className="text-xs text-gray-700 font-bold block mt-0.5">
                  {FULL_ADDRESS}
                </span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Call Now Button */}
            <a
              href={TEL_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#064E3B] hover:bg-[#047857] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-glow-emerald transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#F59E0B]" />
              <span>Call Now</span>
            </a>

            {/* Get Directions Button */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-sm transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

          </div>

          <p className="text-xs text-gray-500 font-semibold mt-6">
            Adyar, Chennai • Mon–Sat: 6:00 AM – 8:00 PM | Sun: 9:00 AM – 12:00 PM
          </p>

        </div>

      </ScrollReveal>
    </section>
  );
};

