import React from 'react';
import { ArrowDown, MapPin, Phone, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, DISPLAY_WHATSAPP, WHATSAPP_LINK } from '../utils/businessStatus';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#022C22]">
      
      {/* Full-Width Cinematic Driving Banner Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="RADHA DRIVING SCHOOL Adyar Training Vehicle Banner"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-105"
        />
        {/* Sophisticated Deep Emerald & Forest Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22]/95 via-[#064E3B]/85 to-[#064E3B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-[#022C22]/60" />
        
        {/* Subtle Gold & Emerald Soft Ambient Glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#047857]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content overlaid over banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Location Badge with 3D Floating Depth */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#D97706]/70 text-[#F59E0B] text-xs font-extrabold uppercase tracking-wider mb-6 shadow-glow-gold animate-float-3d">
            <Sparkles className="w-4 h-4 text-[#F59E0B] animate-pulse" />
            <span>ESTABLISHED 1998 • ADYAR, CHENNAI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
            Drive with Skill.{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706]">
              Drive with Confidence.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 leading-relaxed mb-8 font-medium max-w-2xl drop-shadow-sm">
            Professional Motor Training in Adyar, offering personalized driving instruction, hands-on practical guidance, and comprehensive training focused on developing safe, skilled, and confident drivers. Specialized training is available for both Manual and Automatic Transmission Vehicles.
          </p>

          {/* Action CTAs with 3D Buttons & Shine Effects */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            
            {/* Primary Button */}
            <a
              href="#services"
              className="group relative overflow-hidden bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-glow-gold btn-3d shine-effect flex items-center justify-center gap-2"
            >
              <span>Explore Training</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>

            {/* Phone Call CTA - Redirects to dialer */}
            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#047857] text-white font-extrabold text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border border-[#D97706]/50 shadow-glow-emerald btn-3d shine-effect transition-all duration-200"
              title={`Call ${DISPLAY_PHONE}`}
            >
              <Phone className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-base px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl shadow-md btn-3d transition-all duration-200"
              title={`WhatsApp ${DISPLAY_WHATSAPP}`}
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Directions Button */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-[#D97706]/70 font-bold text-base px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl btn-3d transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-[#F59E0B]" />
              <span>Get Directions</span>
            </a>

          </div>

          {/* Trust Highlights with Glassmorphic 3D Card Pill */}
          <div className="inline-flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#FAF8F5]/90 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center gap-1.5 text-[#F59E0B] font-extrabold">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>28+ Years of Driving Excellence</span>
            </div>
            <span className="text-[#D97706]/70">•</span>
            <span className="font-bold">Lady Instructor Available</span>
            <span className="text-[#D97706]/70">•</span>
            <span className="font-bold">Near Adyar Signal</span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#stats"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#FAF8F5]/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#F59E0B]" />
      </a>

    </section>
  );
};

