import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { LightboxModal, type LightboxImage } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const RADHA_GALLERY_IMAGES: LightboxImage[] = [
  {
    src: '/images/h_img4.png',
    alt: 'Best Driving School Tamil Nadu 2020 Trophy',
    title: 'Best Driving School Tamil Nadu 2020',
    caption: 'State level award trophy presented to Radha Driving School for excellence in motor training and road safety.'
  },
  {
    src: '/images/h_img1.png',
    alt: 'State Honor Presentation Ceremony',
    title: 'State Honor Award Ceremony',
    caption: 'Radha Driving School founder receiving official State Honor Plaque at award presentation.'
  },
  {
    src: '/images/h_img3.png',
    alt: 'State Excellence Honor Plaque and Medal',
    title: 'State Excellence Plaque & Medal',
    caption: 'Official honor plaque and medal recognizing 28+ years of outstanding driving instruction in Chennai.'
  },
  {
    src: '/images/h_img2.png',
    alt: 'Award Felicitation and Dignitary Recognition',
    title: 'Award Felicitation & Dignitaries',
    caption: 'Felicitation ceremony celebrating Radha Driving School achievements with family and dignitaries.'
  },
  {
    src: '/images/h_img5.png',
    alt: 'Star Excellence Driving Trophy',
    title: 'Star Excellence Driving Trophy',
    caption: 'Star Excellence Trophy awarded for top student rating and dedicated driving instruction.'
  },
  {
    src: '/images/hero.png',
    alt: 'Dual-Control Training Vehicle',
    title: 'Dual-Control Training Car',
    caption: 'Equipped with dual safety controls for safe, confidence-building practical road sessions in Adyar.'
  },
  {
    src: '/images/service_simulator.png',
    alt: 'Interactive Driving Simulator Machine',
    title: 'Modern Simulator Motor Training',
    caption: 'Advanced driving simulator setup for initial learner practice in controlled scenarios.'
  },
  {
    src: '/images/women_training.png',
    alt: 'Lady Instructor Training Female Learner',
    title: 'Lady Instructor Training',
    caption: 'Specialized 1-on-1 instruction for women learners with encouraging, patient lady instructors.'
  }
];


export const GallerySection: React.FC = () => {
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === 0 ? RADHA_GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === RADHA_GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const currentImage = RADHA_GALLERY_IMAGES[activeSlotIndex];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-white px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#D97706]" />
              RADHA DRIVING ACADEMY GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
              Training <span className="gradient-text-gold">Gallery</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore our training vehicles, simulator setup, and student instruction sessions in Adyar, Chennai. Click to expand in fullscreen!
            </p>
          </div>
        </ScrollReveal>

        {/* UNIFIED GALLERY CONTAINER */}
        <ScrollReveal delay={100}>
          <div className="max-w-5xl mx-auto bg-white border-2 border-[#D97706]/60 rounded-3xl p-4 sm:p-6 shadow-card relative overflow-hidden group">
            
            {/* Top Info Bar */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8DEC8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#064E3B] text-white border border-[#D97706]/60 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  ADYAR GALLERY SHOWCASE
                </span>
                <span className="bg-[#F4EFE6] text-[#064E3B] border border-[#D97706]/40 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  PHOTO {activeSlotIndex + 1} OF {RADHA_GALLERY_IMAGES.length}
                </span>
              </div>

              <button
                onClick={() => openLightbox(activeSlotIndex)}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#064E3B] bg-[#F4EFE6] hover:bg-[#D97706] hover:text-white px-3.5 py-1.5 rounded-full border border-[#D97706]/50 transition-all cursor-pointer"
                aria-label="Open Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen View</span>
              </button>
            </div>

            {/* Main Featured Image Display */}
            <div
              onClick={() => openLightbox(activeSlotIndex)}
              className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#E8DEC8] shadow-inner bg-[#022C22]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(activeSlotIndex);
                }
              }}
              aria-label={`Click to open fullscreen view for ${currentImage.title}`}
            >
              <img
                key={activeSlotIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Arrow Prev Button */}
              <button
                onClick={handlePrevSlot}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Arrow Next Button */}
              <button
                onClick={handleNextSlot}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Expand Hint Overlay */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:bg-[#D97706] group-hover:text-white transition-all">
                <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Tap to Expand Lightbox</span>
              </div>

              {/* Image Title & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white pointer-events-none space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
                  <Layers className="w-4 h-4 text-[#F59E0B]" />
                  <span>PHOTO {activeSlotIndex + 1}: {currentImage.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-relaxed max-w-2xl font-medium">
                  {currentImage.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-extrabold text-[#064E3B] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#D97706]" />
                Select Photo ({RADHA_GALLERY_IMAGES.length} Items):
              </span>

              {/* Thumbnail Buttons */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 w-full sm:w-auto">

                {RADHA_GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlotIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-14 sm:h-16 w-full sm:w-20 group/thumb cursor-pointer ${
                      activeSlotIndex === idx
                        ? 'border-[#D97706] ring-4 ring-[#D97706]/30 scale-105 shadow-glow-gold'
                        : 'border-[#E8DEC8] opacity-70 hover:opacity-100 hover:border-[#064E3B]'
                    }`}
                    aria-label={`Switch to ${img.title}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase px-1 py-0.2 rounded shadow-sm ${
                      activeSlotIndex === idx
                        ? 'bg-[#D97706] text-white'
                        : 'bg-[#064E3B]/80 text-white'
                    }`}>
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        images={RADHA_GALLERY_IMAGES}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};

