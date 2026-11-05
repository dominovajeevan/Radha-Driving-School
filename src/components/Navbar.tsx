import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, DISPLAY_PHONE, TEL_LINK } from '../utils/businessStatus';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DEC8] py-3 shadow-card' 
        : 'bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/80 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 group">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Radha Driving School logo"
                className="w-14 h-14 rounded-xl bg-white p-1 object-contain shadow-glow-emerald border border-[#D97706]/40 group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="block text-base sm:text-lg font-extrabold tracking-tight text-[#064E3B] group-hover:text-[#047857] transition-colors uppercase">
                  RADHA DRIVING SCHOOL
                </span>
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  ADYAR, CHENNAI • ESTD 1998
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#F4EFE6]/90 border border-[#E8DEC8] px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-[#111827] hover:text-[#064E3B] px-3 py-1.5 rounded-full hover:bg-[#D97706]/15 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#047857] px-3 py-2 border border-[#064E3B]/30 rounded-xl hover:bg-[#064E3B]/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{DISPLAY_PHONE}</span>
            </a>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-glow-gold transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={TEL_LINK}
              className="bg-[#064E3B] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              Call
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F4EFE6] border border-[#E8DEC8] text-[#064E3B] hover:text-[#047857]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="w-full bg-[#064E3B] text-white font-bold py-3 rounded-xl shadow-glow-emerald flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call Now: {DISPLAY_PHONE}</span>
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
  );
};
