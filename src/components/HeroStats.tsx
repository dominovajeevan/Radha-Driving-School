import React, { useEffect, useState } from 'react';
import { Calendar, Star, MessageSquareQuote, Award, CheckCircle2, XCircle } from 'lucide-react';
import { getBusinessStatus, type BusinessStatus, RATING_VALUE, REVIEWS_COUNT, YEARS_EXPERIENCE, ESTABLISHED_YEAR } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';

export const HeroStats: React.FC = () => {
  const [status, setStatus] = useState<BusinessStatus>(getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: RATING_VALUE,
      label: "Rating",
      sublabel: "Highest Rated in Adyar",
      icon: Star,
      highlight: true
    },
    {
      value: REVIEWS_COUNT,
      label: "Customer Ratings",
      sublabel: "Verified Feedback",
      icon: MessageSquareQuote,
      highlight: false
    },
    {
      value: `${YEARS_EXPERIENCE} Years`,
      label: "Years in Business",
      sublabel: "Experienced Guidance",
      icon: Award,
      highlight: false
    },
    {
      value: ESTABLISHED_YEAR,
      label: "Established",
      sublabel: "Serving Since 1998",
      icon: Calendar,
      highlight: false
    }
  ];

  return (
    <section id="stats" className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 75}>
              <Tilt3D maxTilt={6} scale={1.03}>
                <div
                  className={`relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-300 card-3d-glow ${
                    stat.highlight
                      ? 'bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] text-white border-2 border-[#D97706] shadow-glow-emerald'
                      : 'bg-white border border-[#E8DEC8] hover:border-[#D97706]/60 shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 translate-z-10">
                    <div className={`p-2.5 rounded-xl ${stat.highlight ? 'bg-[#D97706]/20 text-[#F59E0B]' : 'bg-[#F4EFE6] text-[#064E3B]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {idx === 0 && (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                        status.isOpen ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-800 border border-amber-500/30'
                      }`}>
                        {status.isOpen ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <XCircle className="w-3 h-3 text-amber-600" />}
                        {status.isOpen ? 'Open Now' : 'Closed Now'}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 translate-z-20">
                    <span className={`block text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      stat.highlight ? 'text-[#F59E0B]' : 'text-[#064E3B]'
                    }`}>
                      {stat.value}
                    </span>
                    <span className={`block text-xs sm:text-sm font-bold mt-0.5 ${
                      stat.highlight ? 'text-white' : 'text-[#111827]'
                    }`}>
                      {stat.label}
                    </span>
                    <span className={`block text-[11px] mt-0.5 truncate ${
                      stat.highlight ? 'text-[#F4EFE6]/90' : 'text-gray-500'
                    }`}>
                      {stat.sublabel}
                    </span>
                  </div>
                </div>
              </Tilt3D>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

