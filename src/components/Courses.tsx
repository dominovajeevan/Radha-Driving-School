import React from 'react';
import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import type { CourseItem } from '../types';
import { MAPS_DIRECTIONS_URL } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';

export const Courses: React.FC = () => {
  const courses: CourseItem[] = [
    {
      id: 'beginner-training',
      title: 'Beginner Training',
      subtitle: 'For first-time learners',
      recommendedFor: 'Complete beginners starting from scratch',
      priceLabel: 'Ask for Price',
      features: [
        'Basic vehicle controls & dashboard familiarization',
        'Steering and braking fundamentals',
        'Gear clutch coordination & smooth acceleration',
        'Starting, stopping & hill hold techniques',
        'Road signs, signals & awareness basics',
        'Practical guided driving sessions'
      ]
    },
    {
      id: 'practical-driving-training',
      title: 'Practical Driving Training',
      subtitle: 'Build real-world driving confidence',
      recommendedFor: 'Learners preparing for daily road traffic',
      priceLabel: 'Ask for Price',
      features: [
        'Practical road training in Chennai traffic',
        'Traffic awareness & lane discipline',
        'Vehicle handling under expert guidance',
        'Turning, reversing & tight curve maneuvering',
        'Parallel & perpendicular parking practice',
        'Safe driving habits & defensive driving'
      ]
    },
    {
      id: 'refresher-training',
      title: 'Refresher Training',
      subtitle: 'For existing drivers',
      recommendedFor: 'License holders returning to driving',
      priceLabel: 'Ask for Price',
      features: [
        'Confidence building on busy Adyar roads',
        'Vehicle control polish & gear timing',
        'Real-world Chennai road navigation',
        'Tight space parking & slope driving',
        'Heavy traffic handling & night driving basics',
        'Safe driving techniques & safety tips'
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#FAF8F5] bg-radha-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-[#F4EFE6] px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              TAILORED MODULES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Driving Courses & <span className="gradient-text-gold">Modules</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Practical instruction designed around your learning pace and experience level.
            </p>
          </div>
        </ScrollReveal>

        {/* Course Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const isFeatured = index === 1; // Highlight middle card
            return (
              <ScrollReveal key={course.id} delay={index * 100} className="flex">
                <Tilt3D maxTilt={7} scale={isFeatured ? 1.04 : 1.02} className="w-full flex">
                  <div
                    className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 w-full card-3d-glow ${
                      isFeatured
                        ? 'bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] text-white border-2 border-[#D97706] shadow-glow-emerald'
                        : 'bg-white text-[#111827] border-2 border-[#E8DEC8] hover:border-[#D97706]/60 shadow-card'
                    }`}
                  >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1 translate-z-30 animate-float-3d">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      MOST POPULAR COURSE
                    </div>
                  )}

                  <div>
                    {/* Card Title & Subtitle */}
                    <div className="mb-6 translate-z-10">
                      <span className={`text-xs font-extrabold uppercase tracking-wider block mb-1 ${
                        isFeatured ? 'text-[#F59E0B]' : 'text-[#047857]'
                      }`}>
                        {course.subtitle}
                      </span>
                      <h3 className={`text-2xl font-extrabold mb-2 ${
                        isFeatured ? 'text-white' : 'text-[#064E3B]'
                      }`}>
                        {course.title}
                      </h3>
                      <p className={`text-xs italic ${
                        isFeatured ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        Recommended for: {course.recommendedFor}
                      </p>
                    </div>

                    {/* Price Banner */}
                    <div className={`p-4 rounded-xl mb-6 flex items-center justify-between border translate-z-20 ${
                      isFeatured 
                        ? 'bg-white/10 border-[#D97706]/40' 
                        : 'bg-[#F4EFE6] border-[#E8DEC8]'
                    }`}>
                      <div>
                        <span className={`text-[11px] uppercase font-bold block ${
                          isFeatured ? 'text-gray-300' : 'text-gray-500'
                        }`}>Training Fee</span>
                        <span className={`text-xl font-extrabold ${
                          isFeatured ? 'text-[#F59E0B]' : 'text-[#064E3B]'
                        }`}>{course.priceLabel}</span>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded ${
                        isFeatured ? 'bg-white/10 text-white' : 'bg-white text-[#064E3B] border border-[#E8DEC8]'
                      }`}>Adyar Branch</span>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-3 mb-8">
                      <span className={`text-xs font-extrabold uppercase tracking-wider block mb-2 ${
                        isFeatured ? 'text-[#F59E0B]' : 'text-[#064E3B]'
                      }`}>
                        Included Modules:
                      </span>
                      {course.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#F59E0B]' : 'text-[#D97706]'
                          }`} />
                          <span className={`text-xs sm:text-sm font-medium ${
                            isFeatured ? 'text-white' : 'text-gray-700'
                          }`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 btn-3d shine-effect ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white shadow-glow-gold'
                        : 'bg-[#064E3B] hover:bg-[#047857] text-white shadow-sm'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#F59E0B]" />
                    <span>Get Directions to School</span>
                  </a>

                </div>
              </Tilt3D>
            </ScrollReveal>
          );
        })}
        </div>

      </div>
    </section>
  );
};

