import React, { useState } from 'react';
import { Car, FileCheck, Monitor, UserCheck, Bike, FileSearch, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Tilt3D } from './Tilt3D';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  images: string[];
  altText: string;
  icon: React.ElementType;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "motor-training",
      number: "01",
      title: "Motor Training",
      description: "Professional motor training designed to help learners understand vehicle control, road awareness and safe driving practices.",
      badge: "Four Wheeler",
      images: [
        "/images/drive/img1.jpg",
        "/images/drive/img2.jpg",
        "/images/drive/img3.jpg",
        "/images/drive/img4.jpg",
        "/images/drive/img5.jpg"
      ],
      altText: "Car motor training session",
      icon: Car
    },
    {
      id: "driving-license-service",
      number: "02",
      title: "Driving License Service",
      description: "Complete assistance and support for driving license documentation, slot scheduling, and RTO process compliance.",
      badge: "RTO Service",
      images: [
        "/images/md/img1.jpg",
        "/images/md/img2.jpg",
        "/images/md/img3.jpg",
        "/images/md/img4.jpg",
        "/images/md/img5.jpg",
        "/images/md/img6.jpg"
      ],
      altText: "Driving license service desk",
      icon: FileCheck
    },
    {
      id: "simulator-training",
      number: "03",
      title: "Simulator Motor Training",
      description: "State-of-the-art simulator motor training offering realistic driving scenarios in a safe, controlled environment.",
      badge: "Interactive Practice",
      images: [
        "/images/sim/img1.jpg",
        "/images/sim/img2.jpg",
        "/images/sim/img3.jpg",
        "/images/sim/img4.jpg",
        "/images/sim/img5.jpg"
      ],
      altText: "Driving simulator motor training",
      icon: Monitor
    },
    {
      id: "training-in-person",
      number: "04",
      title: "Training in Person",
      description: "Direct one-on-one personal motor instruction tailored to your confidence level and specific learning pace.",
      badge: "Personalized",
      images: [
        "/images/person/img1.jpg",
        "/images/person/img2.jpg",
        "/images/person/img3.jpg",
        "/images/person/img4.jpg",
        "/images/person/img5.jpg",
        "/images/person/img6.jpg",
        "/images/person/img7.jpg",
        "/images/person/img8.jpg"
      ],
      altText: "In-person one on one driving instructor",
      icon: UserCheck
    },
    {
      id: "two-wheeler-training",
      number: "05",
      title: "Motor Training for Two Wheeler",
      description: "Practical motor training for motorcycles and scooters with guidance on vehicle handling, balance and road safety.",
      badge: "Two Wheeler",
      images: [
        "/images/ls/img1.jpg",
        "/images/ls/img2.jpg",
        "/images/ls/img3.jpg",
        "/images/ls/img4.jpg"
      ],
      altText: "Two wheeler motor training session",
      icon: Bike
    },
    {
      id: "license-consultation",
      number: "06",
      title: "Driving License Consultation",
      description: "Expert guidance and consultation regarding driving license eligibility, procedures, and documentation guidelines.",
      badge: "Consultation",
      images: [
        "/images/l/img1.jpg",
        "/images/l/img2.jpg",
        "/images/l/img3.jpg",
        "/images/l/img4.jpg",
        "/images/l/img5.jpg"
      ],
      altText: "Driving license consultation",
      icon: FileSearch
    }
  ];

  // Store active image index per service ID
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  const getImageIndex = (id: string) => activeImageIndices[id] || 0;

  const handlePrevImage = (id: string, total: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [id]: (getImageIndex(id) === 0 ? total - 1 : getImageIndex(id) - 1)
    }));
  };

  const handleNextImage = (id: string, total: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [id]: (getImageIndex(id) === total - 1 ? 0 : getImageIndex(id) + 1)
    }));
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-white px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Our Driving <span className="gradient-text-gold">Services</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Comprehensive motor training and licensing services in Adyar, Chennai. Explore real photos from each training area!
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Service Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const currentIdx = getImageIndex(service.id);
            const currentImg = service.images[currentIdx];

            return (
              <ScrollReveal key={service.id} delay={idx * 100} className="flex">
                <Tilt3D maxTilt={7} scale={1.02} className="w-full flex">
                  <div
                    className="group relative bg-white hover:bg-[#FAF8F5] border-2 border-[#E8DEC8] hover:border-[#D97706] rounded-2xl overflow-hidden transition-all duration-300 card-3d-glow flex flex-col justify-between w-full"
                  >
                    {/* Top Image Banner with Interactive Carousel */}
                    <div className="relative w-full h-56 overflow-hidden bg-[#022C22]">
                      <img
                        key={currentIdx}
                        src={currentImg}
                        alt={`${service.altText} photo ${currentIdx + 1}`}
                        className="w-full h-full object-cover img-hover-zoom transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                      {/* Prev / Next Buttons */}
                      {service.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrevImage(service.id, service.images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-md backdrop-blur-md transition-all active:scale-90"
                            aria-label="Previous photo"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleNextImage(service.id, service.images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-[#064E3B] text-white border border-[#D97706]/60 shadow-md backdrop-blur-md transition-all active:scale-90"
                            aria-label="Next photo"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Service Number & Photo Indicator */}
                      <div className="absolute top-3 left-4 flex items-center gap-1.5 translate-z-20">
                        <span className="text-xs font-black tracking-widest text-white bg-[#064E3B]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D97706]/50 shadow-sm">
                          SERVICE {service.number}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/30">
                          {currentIdx + 1}/{service.images.length}
                        </span>
                      </div>

                      {/* Badge */}
                      <span className="absolute top-3 right-4 text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#D97706] px-2.5 py-1 rounded-md shadow-sm translate-z-20">
                        {service.badge}
                      </span>
                    </div>

                    {/* Thumbnail Row */}
                    <div className="bg-[#022C22] p-2 border-b border-[#E8DEC8] flex items-center justify-center gap-1.5 overflow-x-auto">
                      {service.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setActiveImageIndices((prev) => ({ ...prev, [service.id]: imgIdx }))}
                          className={`relative rounded-md overflow-hidden border transition-all h-8 w-10 shrink-0 cursor-pointer ${
                            currentIdx === imgIdx
                              ? 'border-[#D97706] ring-2 ring-[#D97706]/60 scale-105'
                              : 'border-white/30 opacity-60 hover:opacity-100'
                          }`}
                          aria-label={`View photo ${imgIdx + 1}`}
                        >
                          <img src={img} alt={`Thumbnail ${imgIdx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Title with Icon */}
                        <div className="flex items-center gap-3 mb-3 translate-z-10">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#047857] border border-[#D97706]/50 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-extrabold text-[#064E3B] group-hover:text-[#047857] transition-colors leading-snug">
                            {service.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>

                      {/* Card Action */}
                      <a
                        href="#courses"
                        className="w-full inline-flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#064E3B] group-hover:text-[#D97706] pt-4 border-t border-[#E8DEC8] transition-colors mt-auto"
                      >
                        <span>Explore Module ({service.images.length} Photos)</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
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

