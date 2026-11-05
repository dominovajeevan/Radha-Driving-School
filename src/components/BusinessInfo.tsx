import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Star, Car, Users, Clock, CreditCard, Building2, Phone } from 'lucide-react';
import { getBusinessStatus, type BusinessStatus, DISPLAY_PHONE, TEL_LINK, DISPLAY_WHATSAPP, WHATSAPP_LINK, BUSINESS_NAME_EN, BUSINESS_NAME_TA, FULL_ADDRESS, LANDMARK, ESTABLISHED_YEAR, RATING_VALUE, REVIEWS_COUNT, YEARS_EXPERIENCE } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';

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
            <Tilt3D maxTilt={6} scale={1.02} className="w-full flex">
              <div className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 sm:p-8 shadow-card card-3d-glow flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8DEC8] translate-z-10">
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
                  
                  <div className="flex items-start gap-3.5 translate-z-10">
                    <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider block">Address</span>
                      <span className="text-sm text-[#111827] leading-snug block font-bold">
                        {FULL_ADDRESS}
                      </span>
                    </div>
                  </div>

                  {/* Phone Call Option */}
                  <div className="flex items-center justify-between gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DEC8] hover:border-[#064E3B] transition-colors translate-z-10">
                    <div className="flex items-center gap-3">
                      <a
                        href={TEL_LINK}
                        className="w-10 h-10 rounded-lg bg-[#064E3B] text-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm hover:scale-105 active:scale-95 transition-transform"
                        title="Touch to open dialer"
                        aria-label={`Call ${DISPLAY_PHONE}`}
                      >
                        <Phone className="w-5 h-5 fill-[#F59E0B]" />
                      </a>
                      <div>
                        <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider block">Call Option (Direct Dialer)</span>
                        <a href={TEL_LINK} className="text-base font-extrabold text-[#064E3B] hover:text-[#D97706] transition-colors font-mono tracking-wide">
                          {DISPLAY_PHONE}
                        </a>
                      </div>
                    </div>
                    <a
                      href={TEL_LINK}
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-white bg-[#064E3B] hover:bg-[#047857] px-3 py-1.5 rounded-lg active:scale-95 transition-all shadow-sm"
                    >
                      <Phone className="w-3 h-3 text-[#F59E0B]" />
                      <span>Call</span>
                    </a>
                  </div>

                  {/* WhatsApp Option */}
                  <div className="flex items-center justify-between gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DEC8] hover:border-[#25D366] transition-colors translate-z-10">
                    <div className="flex items-center gap-3">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm hover:scale-105 active:scale-95 transition-transform"
                        title="Touch to open WhatsApp"
                        aria-label={`WhatsApp ${DISPLAY_WHATSAPP}`}
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </a>
                      <div>
                        <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider block">WhatsApp Option</span>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-extrabold text-[#064E3B] hover:text-[#25D366] transition-colors font-mono tracking-wide"
                        >
                          {DISPLAY_WHATSAPP}
                        </a>
                      </div>
                    </div>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-white bg-[#25D366] hover:bg-[#1ebd59] px-3 py-1.5 rounded-lg active:scale-95 transition-all shadow-sm"
                    >
                      <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Chat</span>
                    </a>
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
          </Tilt3D>
        </ScrollReveal>

          {/* Opening Hours Schedule Card */}
          <ScrollReveal delay={200} className="lg:col-span-6 flex">
            <Tilt3D maxTilt={6} scale={1.02} className="w-full flex">
              <div className="bg-white border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl p-6 sm:p-8 shadow-card card-3d-glow flex flex-col justify-between w-full">
              <div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E8DEC8]">
                  <div className="flex items-center gap-3 translate-z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#D97706]/50 flex items-center justify-center text-[#F59E0B] shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#064E3B]">Operating Hours</h3>
                      <span className="text-xs text-gray-500 font-medium">Monday – Sunday Timings</span>
                    </div>
                  </div>

                  <div className="text-right translate-z-20">
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
          </Tilt3D>
        </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

