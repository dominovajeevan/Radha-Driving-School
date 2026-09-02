import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const GenderTraining: React.FC = () => {
  const highlights = [
    {
      icon: UserCheck,
      title: "Lady Instructor Option",
      description: "Patient, supportive female instructors available for women learners seeking comfortable 1-on-1 instruction."
    },
    {
      icon: ShieldCheck,
      title: "Personalized Instruction",
      description: "Structured learning tailored to individual comfort, skill level, and pace for both men and women."
    },
    {
      icon: Compass,
      title: "Practical Vehicle Handling",
      description: "Hands-on steering, gear control, slope control, and tight space maneuvering in real Chennai traffic."
    },
    {
      icon: HeartHandshake,
      title: "Confidence & Safety Focus",
      description: "Building strong road awareness, safe defensive driving habits, and stress-free driving confidence."
    }
  ];

  return (
    <section id="gender-training" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D97706]/50 text-[#064E3B] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>INCLUSIVE MOTOR INSTRUCTION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight mt-3">
                Training for <span className="gradient-text-gold">Every Learner</span>
              </h2>

              <p className="text-base sm:text-lg text-[#111827]/85 leading-relaxed font-medium mt-3">
                At Radha Driving School, we welcome all learners — including women, men, senior citizens, and beginners. Our dedicated instructors focus on creating a supportive, calm atmosphere so every student gains genuine road confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm space-y-2">
                      <div className="w-9 h-9 rounded-lg bg-[#F4EFE6] text-[#064E3B] flex items-center justify-center border border-[#D97706]/30">
                        <Icon className="w-4 h-4 text-[#D97706]" />
                      </div>
                      <h4 className="text-sm font-extrabold text-[#064E3B]">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#064E3B] font-bold">
                <span className="inline-flex items-center gap-1 bg-[#F4EFE6] px-3 py-1.5 rounded-lg border border-[#E8DEC8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706]" /> Lady Instructor Available
                </span>
                <span className="inline-flex items-center gap-1 bg-[#F4EFE6] px-3 py-1.5 rounded-lg border border-[#E8DEC8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706]" /> Women & Male Learners
                </span>
                <span className="inline-flex items-center gap-1 bg-[#F4EFE6] px-3 py-1.5 rounded-lg border border-[#E8DEC8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706]" /> Dual Control Safety Cars
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={150}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D97706]/50 shadow-card group">
                <img
                  src="/images/women_training.png"
                  alt="Lady Instructor giving personalized driving training to female student"
                  className="w-full h-[360px] sm:h-[440px] object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-[#D97706] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                    CONFIDENCE-BUILDING
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Patient, Reassuring & Professional Instruction
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/90 font-medium leading-relaxed">
                    Designed so every driver feels comfortable, safe, and fully prepared behind the wheel.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
