import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, DISPLAY_WHATSAPP, WHATSAPP_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS } from '../utils/businessStatus';
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

          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8DEC8] mb-8 text-left max-w-xl mx-auto space-y-4">
            
            {/* Phone Call Option */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href={TEL_LINK}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm border border-[#D97706]/40 hover:scale-105 active:scale-95 transition-transform"
                  title="Touch to Call"
                  aria-label={`Call ${DISPLAY_PHONE}`}
                >
                  <Phone className="w-6 h-6 fill-[#F59E0B]" />
                </a>
                <div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Call Option (Direct Dialer)</span>
                  <a
                    href={TEL_LINK}
                    className="text-xl sm:text-2xl font-extrabold text-[#064E3B] hover:text-[#D97706] tracking-wider transition-colors block mt-0.5 font-mono"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-[#064E3B] hover:bg-[#047857] px-3.5 py-2 rounded-xl active:scale-95 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Call</span>
              </a>
            </div>

            {/* WhatsApp Option */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E8DEC8]">
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm hover:scale-105 active:scale-95 transition-transform"
                  title="Touch to Chat on WhatsApp"
                  aria-label={`WhatsApp ${DISPLAY_WHATSAPP}`}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-gray-500 uppercase tracking-wider block">WhatsApp Option</span>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-extrabold text-[#064E3B] hover:text-[#25D366] tracking-wider transition-colors block mt-0.5 font-mono"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                </div>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-[#25D366] hover:bg-[#1ebd59] px-3.5 py-2 rounded-xl active:scale-95 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat</span>
              </a>
            </div>

            {/* Official Location */}
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
              title={`Call ${DISPLAY_PHONE}`}
            >
              <Phone className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              <span>Call: {DISPLAY_PHONE}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-sm transition-all active:scale-95"
              title={`WhatsApp ${DISPLAY_WHATSAPP}`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp: {DISPLAY_WHATSAPP}</span>
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

          </div>

          <p className="text-xs text-gray-500 font-semibold mt-6">
            Adyar, Chennai • Mon–Sat: 6:00 AM – 8:00 PM | Sun: 9:00 AM – 12:00 PM
          </p>

        </div>

      </ScrollReveal>
    </section>
  );
};

