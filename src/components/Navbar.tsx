import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ZoomIn } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK, DISPLAY_WHATSAPP, WHATSAPP_LINK } from '../utils/businessStatus';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close logo modal on Escape key
  useEffect(() => {
    if (!isLogoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLogoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLogoModalOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#gender-training' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DEC8] py-2.5 shadow-card' 
          : 'bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/85 to-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Name with Strict Alignment & Pop-out interaction */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Interactive Logo - Touch to pop out */}
              <button
                type="button"
                onClick={() => setIsLogoModalOpen(true)}
                className="relative group/logo cursor-pointer rounded-xl p-0.5 focus:outline-none focus:ring-2 focus:ring-[#D97706] active:scale-95 transition-all duration-200"
                title="Touch to view popped-out logo"
                aria-label="View Radha Driving School logo pop-out"
              >
                <img
                  src="/logo.png"
                  alt="Radha Driving School logo"
                  className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl bg-white p-1 object-contain shadow-glow-emerald border border-[#D97706]/50 group-hover/logo:scale-105 group-hover/logo:shadow-glow-gold transition-all duration-300"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#064E3B] text-[#F59E0B] p-0.5 rounded-full border border-white shadow-xs group-hover/logo:scale-110 transition-transform">
                  <ZoomIn className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </button>

              {/* Properly Aligned Title & Subtitle */}
              <a href="#hero" className="flex flex-col justify-center text-left group shrink-0">
                <span className="block text-sm sm:text-base md:text-lg font-black tracking-tight text-[#064E3B] group-hover:text-[#047857] transition-colors uppercase whitespace-nowrap leading-tight">
                  RADHA DRIVING SCHOOL
                </span>
                <span className="block text-[9px] sm:text-[10px] md:text-xs font-extrabold uppercase tracking-wider text-[#D97706] mt-0.5 whitespace-nowrap leading-tight">
                  ADYAR, CHENNAI • ESTD 1998
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 bg-[#F4EFE6]/90 border border-[#E8DEC8] px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-semibold text-[#111827] hover:text-[#064E3B] px-2.5 py-1 rounded-full hover:bg-[#D97706]/15 transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right side Selection Area: WhatsApp number placed directly UNDER the phone number */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              
              {/* Stacked Selection Area */}
              <div className="flex flex-col gap-1 items-stretch min-w-[150px]">
                
                {/* 1. Phone Number on Top */}
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-between gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#047857] px-2.5 py-1 border border-[#064E3B]/30 rounded-lg bg-white/90 hover:bg-[#064E3B]/5 transition-all shadow-xs group"
                  title={`Call ${DISPLAY_PHONE} (Direct Dialer)`}
                >
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D97706] fill-[#D97706] group-hover:scale-110 transition-transform" />
                    <span className="font-mono tracking-tight font-extrabold">{DISPLAY_PHONE}</span>
                  </div>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#064E3B] text-white rounded font-extrabold">
                    Call
                  </span>
                </a>

                {/* 2. WhatsApp Number directly UNDER the phone number */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-1.5 text-xs font-bold text-[#065F46] hover:text-[#047857] px-2.5 py-1 border border-[#25D366]/60 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all shadow-xs group"
                  title={`WhatsApp ${DISPLAY_WHATSAPP}`}
                >
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span className="font-mono tracking-tight font-extrabold">{DISPLAY_WHATSAPP}</span>
                  </div>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#25D366] text-white rounded font-extrabold">
                    WhatsApp
                  </span>
                </a>

              </div>

              {/* Get Directions Button */}
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-bold text-xs uppercase tracking-wider px-3.5 py-3 rounded-xl shadow-glow-gold transition-all active:scale-95 shrink-0"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>

            {/* Mobile Actions: WhatsApp stacked under Call, plus Hamburger menu */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <div className="flex flex-col gap-1 items-end">
                <a
                  href={TEL_LINK}
                  className="bg-[#064E3B] hover:bg-[#047857] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-xs flex items-center gap-1 active:scale-95 transition-transform"
                  title={`Call ${DISPLAY_PHONE}`}
                >
                  <Phone className="w-3 h-3 text-[#F59E0B]" />
                  <span>Call</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-xs flex items-center gap-1 active:scale-95 transition-transform"
                  title={`WhatsApp ${DISPLAY_WHATSAPP}`}
                >
                  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat</span>
                </a>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-[#F4EFE6] border border-[#E8DEC8] text-[#064E3B] hover:text-[#047857]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DEC8] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#111827] hover:text-[#064E3B] hover:bg-[#F4EFE6] px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E8DEC8] space-y-2">
              <a
                href={TEL_LINK}
                className="w-full bg-[#064E3B] text-white font-bold py-3 rounded-xl shadow-glow-emerald flex items-center justify-center gap-2 text-sm active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call Now: {DISPLAY_PHONE}</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 text-sm active:scale-98 transition-transform"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp: {DISPLAY_WHATSAPP}</span>
              </a>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold py-3 rounded-xl shadow-glow-gold flex items-center justify-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Logo Pop-Out Modal when touched / clicked */}
      {isLogoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLogoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Radha Driving School Logo View"
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full bg-gradient-to-b from-[#FAF8F5] to-[#F4EFE6] border-2 border-[#D97706] rounded-3xl p-6 sm:p-8 shadow-2xl text-center animate-scaleUp transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-100 text-[#064E3B] border border-[#E8DEC8] shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="Close Logo Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Popped Out Logo Display */}
            <div className="relative mx-auto w-44 h-44 sm:w-56 sm:h-56 mb-5 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#064E3B] via-[#D97706] to-[#F59E0B] blur-xl opacity-40 animate-pulse" />
              <div className="relative w-full h-full rounded-3xl bg-white p-3 shadow-glow-gold border-2 border-[#D97706]/70 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Radha Driving School Popped Out Logo"
                  className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Brand Title in Popout */}
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D97706] bg-white px-3 py-1 rounded-full border border-[#D97706]/30 inline-block mb-2 shadow-xs">
              OFFICIAL IDENTITY • ESTD 1998
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#064E3B] uppercase tracking-tight">
              RADHA DRIVING SCHOOL
            </h3>
            <p className="text-xs sm:text-sm font-bold text-[#047857] mt-1 mb-5">
              Near Adyar Signal, L B Road, Adyar, Chennai
            </p>

            {/* Quick Action Contacts inside Popout */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#E8DEC8]">
              <a
                href={TEL_LINK}
                className="flex items-center justify-center gap-1.5 bg-[#064E3B] hover:bg-[#047857] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-glow-emerald active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Call</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-sm active:scale-95 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-gray-500 mt-3 font-semibold">
              Tap anywhere outside or press Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  );
};
