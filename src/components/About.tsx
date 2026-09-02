import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle, UserCheck, Sparkles, Maximize2, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { LightboxModal, type LightboxImage } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const GALLERY_IMAGES: LightboxImage[] = [
  {
    src: '/images/h/img1.png',
    alt: 'State Level Honor Award Presentation Ceremony',
    title: 'State Honor Presentation Ceremony',
    caption: 'Radha Driving School founder receiving State Level Honor Plaque for excellence in motor training.'
  },
  {
    src: '/images/h/img2.png',
    alt: 'Award Felicitation and Dignitary Recognition',
    title: 'Award Felicitation & Dignitary Honor',
    caption: 'Felicitation ceremony celebrating Radha Driving School achievements with dignitaries and family.'
  },
  {
    src: '/images/h/img3.png',
    alt: 'State Excellence Honor Plaque and Medal',
    title: 'State Excellence Honor Plaque & Medal',
    caption: 'Official State Level Honor Plaque and Medal awarded to Radha Driving School in Adyar, Chennai.'
  },
  {
    src: '/images/h/img4.png',
    alt: 'Best Driving School Tamil Nadu 2020 Award Trophy',
    title: 'Best Driving School Tamil Nadu 2020',
    caption: 'Awarded Best Driving School in Tamil Nadu for high safety standards, student satisfaction, and excellence in motor training.'
  },
  {
    src: '/images/h/img5.png',
    alt: 'Star Excellence Driving Trophy',
    title: 'Star Excellence Driving Trophy',
    caption: 'Star Excellence Trophy awarded for outstanding student feedback, patience, and professional instruction.'
  }
];


export const About: React.FC = () => {
  const [activeSlotIdx, setActiveSlotIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const handleOpenLightbox = (idx: number = activeSlotIdx) => {
    setLightboxIdx(idx);
    setIsLightboxOpen(true);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const activeImg = GALLERY_IMAGES[activeSlotIdx];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] bg-radha-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Image Showcase Slot */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={100}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Frame Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D97706]/30 to-[#047857]/25 rounded-3xl blur-xl pointer-events-none" />

                {/* Showcase Area Container */}
                <div className="relative bg-white border-2 border-[#D97706]/60 rounded-3xl p-4 sm:p-5 shadow-card overflow-hidden group">
                  
                  {/* Top Bar inside Showcase */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#E8DEC8]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#064E3B] text-white border border-[#D97706]/60 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Camera className="w-3.5 h-3.5 text-[#F59E0B]" />
                        FACILITY & LESSONS
                      </span>
                      <span className="bg-[#F4EFE6] text-[#064E3B] border border-[#D97706]/40 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                        {activeSlotIdx + 1} / {GALLERY_IMAGES.length}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenLightbox(activeSlotIdx)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#064E3B] bg-[#F4EFE6] hover:bg-[#D97706] hover:text-white px-3 py-1 rounded-full border border-[#D97706]/40 transition-colors cursor-pointer"
                      aria-label="Open Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-3 h-3 text-[#D97706]" />
                      <span>Fullscreen</span>
                    </button>
                  </div>

                  {/* Main Display Image */}
                  <div
                    onClick={() => handleOpenLightbox(activeSlotIdx)}
                    className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer border border-[#E8DEC8] bg-[#022C22]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenLightbox(activeSlotIdx);
                      }
                    }}
                    aria-label={`Click to open fullscreen view for ${activeImg.title}`}
                  >
                    <img
                      key={activeSlotIdx}
                      src={activeImg.src}
                      alt={activeImg.alt}
                      className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                    {/* Previous Button */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Image Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white pointer-events-none">
                      <span className="block text-xs font-extrabold text-[#F59E0B]">
                        {activeImg.title}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 pt-3 border-t border-[#E8DEC8]">
                    <div className="grid grid-cols-5 gap-2 w-full">
                      {GALLERY_IMAGES.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlotIdx(idx)}
                          className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-14 sm:h-18 w-full cursor-pointer ${
                            activeSlotIdx === idx
                              ? 'border-[#D97706] ring-2 ring-[#D97706]/40 scale-105 shadow-glow-gold'
                              : 'border-[#E8DEC8] opacity-70 hover:opacity-100'
                          }`}
                          aria-label={`View Image ${idx + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>


                {/* Floating Experience Badge */}
                <div className="absolute -bottom-5 -right-3 sm:bottom-4 sm:-right-4 bg-white border-2 border-[#D97706] p-3 sm:p-4 rounded-2xl shadow-glow-gold backdrop-blur-md z-20 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] text-[#F59E0B] font-black text-lg flex items-center justify-center shadow-sm">
                      28+
                    </div>
                    <div>
                      <span className="block text-xs font-extrabold text-[#064E3B] uppercase tracking-wider">Est. 1998</span>
                      <span className="block text-[10px] text-gray-500">Near Adyar Signal, Chennai</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#D97706]/50 text-[#064E3B] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>ABOUT RADHA DRIVING SCHOOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight leading-tight">
              About <span className="gradient-text-gold">Radha Driving School</span>
            </h2>

            <p className="text-base sm:text-lg text-[#111827]/85 leading-relaxed font-medium">
              Radha Driving School in Adyar, Chennai is a well-established motor training school providing professional driving instruction with personalized attention, practical guidance and a strong focus on safe and confident driving. Established in 1998, the school has been serving learners for over 28 years.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              The school focuses on practical vehicle handling, road awareness, driving safety and personalized instruction tailored for beginner drivers as well as those looking for refresher training.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-extrabold text-[#064E3B]">Personalized Instruction</span>
                  <span className="block text-xs text-gray-500">Patient guidance paced to your speed</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <UserCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-extrabold text-[#064E3B]">Lady Instructor Available</span>
                  <span className="block text-xs text-gray-500">Dedicated support for women learners</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#064E3B] hover:bg-[#047857] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-glow-emerald transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-[#064E3B] font-bold bg-[#F4EFE6] px-4 py-3 rounded-xl border border-[#E8DEC8]">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>No 114/1, Near Adyar Signal, L B Road, Adyar, Chennai-600020</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIdx}
        images={GALLERY_IMAGES}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIdx(newIdx)}
      />
    </section>
  );
};

