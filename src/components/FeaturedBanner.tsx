import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FeaturedBanner: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden my-6 bg-[#022C22] text-white">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Radha Driving School Adyar Banner"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125 img-hover-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22]/95 via-[#064E3B]/85 to-[#022C22]/95" />
      </div>

      <ScrollReveal className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D97706]/50 text-[#F59E0B] text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          <span>SAFETY & CONFIDENCE FIRST</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Empowering <span className="text-[#F59E0B]">Confident Drivers</span>
        </h2>

        <p className="text-base sm:text-xl text-[#FAF8F5]/90 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
          Radha Driving School in Adyar, Chennai is a well-established motor training school providing professional driving instruction with personalized attention, practical guidance and a strong focus on safe and confident driving.
        </p>

        <a
          href="#courses"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-glow-gold transition-all duration-300 active:scale-95"
        >
          <span>Explore Training</span>
          <ArrowDown className="w-5 h-5" />
        </a>

      </ScrollReveal>
    </section>
  );
};

