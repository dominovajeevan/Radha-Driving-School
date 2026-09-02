import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Star, Car, Users, Clock, CreditCard, Building2, Phone } from 'lucide-react';
import { getBusinessStatus, type BusinessStatus, DISPLAY_PHONE, TEL_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS, LANDMARK, ESTABLISHED_YEAR, RATING_VALUE, REVIEWS_COUNT, YEARS_EXPERIENCE } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const BusinessInfo: React.FC = () => {
  const [status, setStatus] = useState<BusinessStatus>(getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => setStatus(getBusinessStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { day: "Monday", hours: "6:00 AM – 8:00 PM" },
    { day: "Tuesday", hours: "6:00 AM – 8:00 PM" },
    { day: "Wednesday", hours: "6:00 AM – 8:00 PM" },
    { day: "Thursday", hours: "6:00 AM – 8:00 PM" },
    { day: "Friday", hours: "6:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "6:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "9:00 AM – 12:00 PM" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] bg-radha-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-[#F4EFE6] px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              OFFICIAL BUSINESS DATA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Business Information & <span className="gradient-text-gold">Hours</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Essential operational details for Radha Driving School in Adyar, Chennai.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Business Details Card */}
          <ScrollReveal delay={100} className="lg:col-span-6 flex">
            <div className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8DEC8]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#D97706]/50 flex items-center justify-center text-[#F59E0B] shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#064E3B]">{BUSINESS_NAME_EN}</h3>
                  <span className="text-sm font-bold text-[#047857] block">{BUSINESS_NAME_TA}</span>
                  <span className="text-xs text-[#D97706] font-extrabold">Adyar, Chennai • Landmark: {LANDMARK}</span>
                </div>
              </div>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Address</span>
                    <span className="text-sm text-[#111827] leading-snug block font-bold">
                      {FULL_ADDRESS}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#D97706] shrink-0" />
                  <div>
                    <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Phone Contact</span>
                    <a href={TEL_LINK} className="text-base font-extrabold text-[#064E3B] hover:text-[#D97706] transition-colors">
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DEC8]">
                    <Calendar className="w-4 h-4 text-[#D97706]" />
                    <div>
                      <span className="text-[10px] text-gray-500 block font-bold">Established</span>
                      <span className="text-sm font-extrabold text-[#064E3B]">{ESTABLISHED_YEAR} ({YEARS_EXPERIENCE} Yrs)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DEC8]">
                    <Star className="w-4 h-4 text-[#D97706] fill-[#D97706]" />
                    <div>
                      <span className="text-[10px] text-gray-500 block font-bold">Rating</span>
                      <span className="text-sm font-extrabold text-[#064E3B]">{RATING_VALUE} / 5 ({REVIEWS_COUNT})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DEC8]">
                    <Car className="w-4 h-4 text-[#D97706]" />
                    <div>
                      <span className="text-[10px] text-gray-500 block font-bold">Specialization</span>
                      <span className="text-xs font-extrabold text-[#064E3B]">Motor Training</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DEC8]">
                    <Users className="w-4 h-4 text-[#D97706]" />
                    <div>
                      <span className="text-[10px] text-gray-500 block font-bold">Instructors</span>
                      <span className="text-xs font-extrabold text-[#064E3B]">Lady & Male Instructors</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-start gap-3 bg-[#F4EFE6] p-4 rounded-xl border border-[#D97706]/40">
                  <CreditCard className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-[#064E3B] uppercase tracking-wider block">Accepted Payment Modes</span>
                    <span className="text-xs text-gray-700 font-bold block mt-0.5">
                      Multiple convenient payment options are available, including cards (Visa, MasterCard, RuPay), Net Banking, UPI and Cash.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>

          {/* Opening Hours Schedule Card */}
          <ScrollReveal delay={200} className="lg:col-span-6 flex">
            <div className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between w-full">
            <div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E8DEC8]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#D97706]/50 flex items-center justify-center text-[#F59E0B] shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#064E3B]">Operating Hours</h3>
                    <span className="text-xs text-gray-500 font-medium">Monday – Sunday Timings</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                    status.isOpen 
                      ? 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/40' 
                      : 'bg-amber-500/15 text-amber-900 border border-amber-500/40'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600 animate-ping' : 'bg-amber-600'}`} />
                    {status.isOpen ? 'OPEN NOW' : 'CLOSED NOW'}
                  </span>
                  <span className="block text-[11px] text-[#064E3B] mt-1 font-bold">
                    {status.nextChangeText}
                  </span>
                </div>
              </div>

              {/* Schedule List */}
              <div className="space-y-2.5">
                {schedule.map((item, idx) => {
                  const todayDayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon
                  const isToday = todayDayIndex === (idx === 6 ? 0 : idx + 1);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        isToday 
                          ? 'bg-[#064E3B] text-white font-extrabold shadow-sm' 
                          : 'bg-[#FAF8F5] border border-[#E8DEC8] text-[#111827]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />}
                        <span className="text-sm">{item.day}</span>
                        {isToday && <span className="text-[10px] uppercase font-extrabold text-[#064E3B] bg-[#F59E0B] px-2 py-0.5 rounded">Today</span>}
                      </div>
                      <span className={`text-sm font-bold ${isToday ? 'text-[#F59E0B]' : 'text-[#064E3B]'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

