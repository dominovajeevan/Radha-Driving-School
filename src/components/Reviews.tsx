import React from 'react';
import { Star, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, RATING_VALUE, REVIEWS_COUNT } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Score Header */}
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] text-white border-2 border-[#D97706] rounded-3xl p-8 sm:p-12 mb-12 shadow-glow-emerald relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D97706]/50 text-[#F59E0B] text-xs font-extrabold uppercase animate-float-3d">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>VERIFIED RATING SCORE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Trusted by Learners Across <span className="text-[#F59E0B]">Adyar, Chennai</span>
                </h2>
                <p className="text-[#FAF8F5]/80 text-sm sm:text-base font-medium">
                  Consistent motor training quality and student satisfaction for over 28 years.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 bg-black/30 p-6 rounded-2xl border border-[#D97706]/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-extrabold text-[#F59E0B] tracking-tight">{RATING_VALUE}</span>
                  <div>
                    <div className="flex items-center text-[#F59E0B] gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-xs text-white font-extrabold block">Overall Rating Score</span>
                    <span className="text-xs text-[#F59E0B] font-bold">Based on {REVIEWS_COUNT} Ratings</span>
                  </div>
                </div>

                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-glow-gold btn-3d shine-effect transition-all"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 3 Review Highlight Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Learner Feedback",
              tag: "Car Motor Training",
              comment: "Excellent driving instruction! The trainer was very patient and explained vehicle controls clearly. Helped me build confidence on Adyar roads."
            },
            {
              name: "Learner Feedback",
              tag: "Women Driver Training",
              comment: "The lady instructor option was wonderful. Very polite, encouraging, and focused on road safety and smooth gear management."
            },
            {
              name: "Learner Feedback",
              tag: "License Consultation",
              comment: "Smooth driving license service and guidance. Radha Driving School made the whole process easy and stress-free."
            }
          ].map((card, cardIdx) => (
            <ScrollReveal key={cardIdx} delay={cardIdx * 100} className="flex">
              <Tilt3D maxTilt={7} scale={1.03} className="w-full flex">
                <div
                  className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 flex flex-col justify-between shadow-card card-3d-glow w-full"
                >
                <div>
                  <div className="flex items-center justify-between mb-4 translate-z-10">
                    <div className="flex items-center text-[#F59E0B] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#064E3B] font-extrabold uppercase bg-[#F4EFE6] px-2.5 py-1 rounded border border-[#D97706]/40 translate-z-20">
                      {card.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-4 translate-z-10">
                    <div className="w-9 h-9 rounded-full bg-[#064E3B] flex items-center justify-center text-[#F59E0B] font-bold text-xs shrink-0 shadow-sm border border-[#D97706]/40">
                      <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <div>
                      <span className="block text-sm font-extrabold text-[#064E3B]">{card.name}</span>
                      <span className="block text-[11px] text-gray-500 font-semibold">Radha Driving School Student</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 font-medium italic leading-relaxed bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DEC8]">
                    "{card.comment}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DEC8] flex justify-between items-center text-[11px] text-gray-500">
                  <span className="font-bold text-[#064E3B]">Adyar, Chennai</span>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#064E3B] hover:text-[#D97706] flex items-center gap-1 font-extrabold transition-colors"
                  >
                    View Location <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Tilt3D>
          </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

