import React from 'react';
import { BookOpen, Key, TrendingUp, CheckCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Learn the fundamentals of vehicle controls, dashboard instruments, and road safety rules.",
      icon: BookOpen
    },
    {
      number: "02",
      title: "Practice",
      description: "Build hands-on practical skills with guided 1-on-1 instruction.",
      icon: Key
    },
    {
      number: "03",
      title: "Improve",
      description: "Develop real-world driving confidence through repeated practical road driving.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Drive Confidently",
      description: "Apply safe defensive driving habits and drive independently with total peace of mind.",
      icon: CheckCheck
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-white px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Safety & <span className="gradient-text-gold">Learning Process</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-medium">
              Structured road training designed to build lifelong driving confidence.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Timeline */}
        <div className="relative">
          
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D97706]/30 via-[#064E3B] to-[#D97706]/30 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div
                    className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-card group text-center flex flex-col items-center h-full"
                  >
                    {/* Step Badge Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#064E3B] to-[#047857] text-[#F59E0B] font-extrabold flex items-center justify-center shadow-glow-emerald group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 stroke-[2.2]" />
                      </div>
                      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-xl font-extrabold text-[#064E3B] mb-2 group-hover:text-[#047857] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

