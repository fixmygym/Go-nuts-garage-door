import { useState, useEffect } from 'react';
import { Menu, X, Phone, AlertTriangle } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when screen grows past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency banner */}
      <a
        href="tel:8175551234"
        className="block bg-brand-orange py-2 sm:py-3 overflow-hidden flex whitespace-nowrap hover:bg-orange-600 transition-colors cursor-pointer"
      >
        <div className="animate-marquee flex items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 sm:mx-8">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-3 sm:mr-4 flex-shrink-0" />
              <span className="font-display text-sm sm:text-lg text-white uppercase tracking-widest">24/7 Emergency Garage Door Repair</span>
              <span className="mx-6 sm:mx-8 text-white/50 font-display text-sm sm:text-lg">•</span>
              <span className="font-display text-sm sm:text-lg text-white uppercase tracking-widest">Call (817) 555-1234</span>
            </div>
          ))}
        </div>
      </a>

      <nav className={`transition-all duration-500 ${
        scrolled ? 'bg-brand-green/90 backdrop-blur-md shadow-lg py-2' : 'bg-brand-green py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: Logo + CTA buttons + Mobile toggle */}
          <div className="flex justify-between items-center" style={{ minHeight: '4rem' }}>
            {/* Logo — scales down on mobile so it stays within the nav */}
            <div
              className="flex-shrink-0 flex items-center cursor-pointer relative"
              style={{ height: '4rem' }}
              onClick={() => handleNavClick('home')}
            >
              {/* Spacer so the row accounts for logo width */}
              <div className={`transition-all duration-500 ${
                scrolled ? 'w-14 sm:w-18 lg:w-24' : 'w-20 sm:w-28 lg:w-48'
              }`} />
              <img
                src="/GoNuts_Logo_forTM.png"
                alt="Go Nuts Garage Door Logo"
                fetchPriority="high"
                className={`absolute left-0 object-contain transition-all duration-500 hover:scale-105 z-50 ${
                  scrolled
                    ? 'h-12 sm:h-14 lg:h-16 w-auto top-1/2 -translate-y-1/2'
                    : 'h-20 sm:h-28 lg:h-40 w-auto top-0 drop-shadow-2xl'
                }`}
              />
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:8175551234"
                className="flex items-center border border-white/50 text-white font-display text-sm uppercase tracking-[0.15em] px-5 py-2.5 rounded-xl hover:border-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 mr-2" />
                (817) 555-1234
              </a>
              <button
                onClick={() => handleNavClick('book')}
                className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-[0.15em] px-8 py-3 rounded-xl shadow-sm transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-brand-orange focus:outline-none transition-colors p-1"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen
                  ? <X className="h-7 w-7 sm:h-8 sm:w-8" />
                  : <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
                }
              </button>
            </div>
          </div>

          {/* Desktop nav links — second row */}
          <div className="hidden lg:flex justify-end items-center space-x-8 pb-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                currentPage === 'home' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Home
            </button>

            <span className="font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              About Us
            </span>

            <button
              onClick={() => handleNavClick('services1')}
              className={`font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                currentPage === 'services1' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Services
            </button>

            <span className="font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              Service Areas
            </span>
            <span className="font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              Contact
            </span>
          </div>
        </div>

        {/* Mobile Menu — smooth slide-down animation via max-height */}
        <div
          className={`lg:hidden w-full bg-brand-green border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[480px] opacity-100 border-t'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase transition-colors ${
                currentPage === 'home' ? 'text-brand-orange' : 'text-white hover:text-brand-orange hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <span className="block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              About Us
            </span>

            <button
              onClick={() => handleNavClick('services1')}
              className={`block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase transition-colors ${
                currentPage === 'services1' ? 'text-brand-orange' : 'text-white hover:text-brand-orange hover:bg-white/5'
              }`}
            >
              Services
            </button>

            <span className="block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              Service Areas
            </span>
            <span className="block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default text-white/70">
              Contact
            </span>

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('book')}
                className="w-full bg-brand-orange hover:bg-brand-brown text-white font-display text-sm tracking-[0.15em] uppercase py-4 rounded-xl shadow-sm transition-all duration-300"
              >
                Book Online
              </button>
              <a
                href="tel:8175551234"
                className="w-full border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase py-4 rounded-xl flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
