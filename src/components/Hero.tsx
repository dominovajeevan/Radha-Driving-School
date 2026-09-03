import React from 'react';
import { ArrowDown, MapPin, Phone, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK } from '../utils/businessStatus';

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
            Professional motor training in Adyar with personalized instruction, practical guidance and a strong focus on safe, confident driving.
          </p>

          {/* Action CTAs with 3D Buttons & Shine Effects */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            
            {/* Primary Button */}
            <a
              href="#services"
              className="group relative overflow-hidden bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-base px-7 py-4 rounded-xl shadow-glow-gold btn-3d shine-effect flex items-center justify-center gap-2.5"
            >
              <span>Explore Training</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-[#D97706]/70 font-bold text-base px-7 py-4 rounded-xl btn-3d transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-[#F59E0B]" />
              <span>Get Directions</span>
            </a>

            {/* Phone CTA */}
            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2.5 bg-[#064E3B]/90 hover:bg-[#064E3B] text-white font-bold text-base px-6 py-4 rounded-xl border border-[#D97706]/50 shadow-glow-emerald btn-3d shine-effect transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-[#F59E0B]" />
              <span>Call {DISPLAY_PHONE}</span>
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

