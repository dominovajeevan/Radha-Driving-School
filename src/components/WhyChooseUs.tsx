import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Award, Bike, FileCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Personalized Training",
      description: "Customized 1-on-1 motor training tailored to individual confidence, learning pace and comfort level.",
      icon: UserCheck,
      badge: "Tailored Instruction"
    },
    {
      title: "Practical Driving Guidance",
      description: "Hands-on road guidance helping you navigate real Chennai traffic, intersections and parking scenarios.",
      icon: Award,
      badge: "Real Traffic Practice"
    },
    {
      title: "Road Safety Focus",
      description: "Strong emphasis on defensive driving techniques, traffic awareness, lane discipline and signal safety.",
      icon: ShieldCheck,
      badge: "Safety First"
    },
    {
      title: "Learner-Friendly Instruction",
      description: "Patient, supportive instructors (including Lady Instructors) committed to stress-free driving education.",
      icon: HeartHandshake,
      badge: "Lady Instructor Option"
    },
    {
      title: "Two-Wheeler Training",
      description: "Comprehensive motorcycle and scooter riding lessons focused on balance, control and helmet safety.",
      icon: Bike,
      badge: "Two-Wheeler Support"
    },
    {
      title: "License Guidance",
      description: "End-to-end guidance and assistance for RTO driving license procedures, documentation and consultation.",
      icon: FileCheck,
      badge: "RTO Assistance"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] bg-radha-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-[#F4EFE6] px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              28+ YEARS OF EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Why Choose <span className="gradient-text-gold">Radha Driving School?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Built on trust, practical guidance, safety, and 28+ years of dedicated service in Adyar, Chennai.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 75} className="flex">
                <div
                  className="bg-white hover:bg-[#FAF8F5] border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-card flex flex-col justify-between group w-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#D97706]/40 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform shadow-sm">
                        <IconComponent className="w-6 h-6 text-[#F59E0B]" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#064E3B] bg-[#F4EFE6] border border-[#E8DEC8] px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#064E3B] mb-2 group-hover:text-[#047857] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

