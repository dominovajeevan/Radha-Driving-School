import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS, LANDMARK } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const LocationMap: React.FC = () => {
  return (
    <section id="contact-map" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-white px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              CONVENIENT ADYAR LOCATION
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Find Us in <span className="gradient-text-gold">Adyar, Chennai</span>
            </h2>

            <div className="pt-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight">
                {BUSINESS_NAME_EN}
              </h3>
              <span className="block text-xl sm:text-2xl font-bold text-[#047857] font-sans mt-1">
                {BUSINESS_NAME_TA}
              </span>
            </div>

            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-bold">
              {FULL_ADDRESS}
            </p>
            
            <span className="inline-flex items-center gap-1.5 text-xs text-[#064E3B] font-extrabold bg-white border border-[#D97706]/50 px-4 py-2 rounded-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
              Landmark: {LANDMARK}
            </span>
          </div>
        </ScrollReveal>

        {/* Map Container */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D97706]/60 shadow-card bg-white">
          
          {/* Top Banner overlay */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#D97706]/50 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] flex items-center justify-center text-[#F59E0B] shrink-0 shadow-sm">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-extrabold text-[#064E3B]">{BUSINESS_NAME_EN}</span>
                <span className="block text-xs text-[#047857] font-bold">{LANDMARK}, L B Road, Adyar</span>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Iframe Container */}
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[450px] relative group cursor-pointer"
          >
            <iframe
              title="RADHA DRIVING SCHOOL Location Map"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Click overlay prompt */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center pointer-events-none">
              <div className="bg-[#064E3B] text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-glow-emerald border border-[#D97706]/50 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B]" />
                <span>Click Map to Open Directions</span>
              </div>
            </div>
          </a>

          {/* Bottom Bar overlay */}
          <div className="bg-[#FAF8F5] p-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{FULL_ADDRESS}</span>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#064E3B] hover:text-[#D97706] font-extrabold flex items-center gap-1 transition-colors"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

