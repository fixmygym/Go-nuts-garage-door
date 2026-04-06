import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, AlertTriangle } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const homeDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Careers', id: 'careers' },
  ];

  const serviceLinks = [
    { name: 'Services 1', id: 'services1' },
    { name: 'Services 2', id: 'services2' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsHomeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target as Node)) {
        setIsHomeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isStyle2 = currentPage === 'home2' || currentPage === 'services2';

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency banner — Home 1 and Services 1 only */}
      {(currentPage === 'home' || currentPage === 'services1') && (
        <a href="tel:8175551234" className="block bg-brand-orange py-3 overflow-hidden flex whitespace-nowrap hover:bg-orange-600 transition-colors cursor-pointer">
          <div className="animate-marquee flex items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-8">
                <AlertTriangle className="w-5 h-5 text-white mr-4" />
                <span className="font-display text-lg text-white uppercase tracking-widest">24/7 Emergency Garage Door Repair</span>
                <span className="mx-8 text-white/50 font-display text-lg">•</span>
                <span className="font-display text-lg text-white uppercase tracking-widest">Call (817) 555-1234</span>
              </div>
            ))}
          </div>
        </a>
      )}
    <nav className={`transition-all duration-500 ${
      isStyle2
        ? scrolled ? 'bg-brand-green shadow-lg py-1' : 'bg-brand-green py-1'
        : scrolled ? 'bg-brand-green/90 backdrop-blur-md shadow-lg py-2' : 'bg-brand-green py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo + CTA buttons + Mobile toggle */}
        <div className="flex justify-between items-center" style={{ minHeight: isStyle2 ? '6rem' : '5rem' }}>
          {/* Logo */}
          {isStyle2 ? (
            <div className="flex-shrink-0 flex items-center mt-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => handleNavClick('home')}>
              <img
                src="/GoNuts_Logo_forTM.png"
                alt="Go Nuts Garage Door Logo"
                className="h-[100px] w-auto object-contain"
              />
            </div>
          ) : (
            <div className="flex-shrink-0 flex items-center cursor-pointer relative" style={{ height: '5rem' }} onClick={() => handleNavClick('home')}>
              <div className={`transition-all duration-500 ${scrolled ? 'w-24' : 'w-48'}`} />
              <img
                src="/GoNuts_Logo_forTM.png"
                alt="Go Nuts Garage Door Logo"
                className={`absolute left-0 object-contain transition-all duration-500 hover:scale-105 z-50 ${
                  scrolled
                    ? 'h-16 w-auto top-1/2 -translate-y-1/2'
                    : 'h-40 w-auto top-0 drop-shadow-2xl'
                }`}
              />
            </div>
          )}

          {/* Desktop CTA buttons — top right */}
          <div className="hidden lg:flex items-center space-x-4">
            {isStyle2 ? (
              <>
                <a
                  href="tel:8175551234"
                  className="flex items-center border-2 border-white text-white font-display text-sm uppercase tracking-[0.15em] px-5 py-2.5 hover:bg-white hover:text-brand-brown transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (817) 555-1234
                </a>
                <button
                  onClick={() => handleNavClick('book')}
                  className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-[0.15em] px-8 py-3 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all"
                >
                  Book Now
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-brand-orange focus:outline-none transition-colors ${isStyle2 ? 'text-white' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Desktop nav links — second row, right-aligned */}
        <div className="hidden lg:flex justify-end items-center space-x-8 pb-3">
          {/* Home Dropdown */}
          <div className="relative" ref={homeDropdownRef}>
            <button
              onClick={() => setIsHomeOpen(!isHomeOpen)}
              className={`font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 flex items-center ${
                (currentPage === 'home' || currentPage === 'home2') ? 'text-brand-orange' : isStyle2 ? 'text-white hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Home <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
            </button>

            {isHomeOpen && (
              <div className="absolute left-0 mt-4 w-48 rounded-xl shadow-2xl bg-white ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="py-2" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => handleNavClick('home')}
                    className="block w-full text-left px-6 py-3 text-xs font-display uppercase tracking-[0.15em] text-brand-brown hover:bg-[#FAF8F5] hover:text-brand-orange transition-colors"
                    role="menuitem"
                  >
                    Home 1
                  </button>
                  <button
                    onClick={() => handleNavClick('home2')}
                    className="block w-full text-left px-6 py-3 text-xs font-display uppercase tracking-[0.15em] text-brand-brown hover:bg-[#FAF8F5] hover:text-brand-orange transition-colors"
                    role="menuitem"
                  >
                    Home 2
                  </button>
                </div>
              </div>
            )}
          </div>

          <span className={`font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
            About Us
          </span>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 flex items-center ${
                currentPage === 'repair' ? 'text-brand-orange' : isStyle2 ? 'text-white hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Services <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
            </button>

            {isServicesOpen && (
              <div className="absolute left-0 mt-4 w-64 rounded-xl shadow-2xl bg-white ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="py-2" role="menu" aria-orientation="vertical">
                  {serviceLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.id)}
                      className="block w-full text-left px-6 py-3 text-xs font-display uppercase tracking-[0.15em] text-brand-brown hover:bg-[#FAF8F5] hover:text-brand-orange transition-colors"
                      role="menuitem"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className={`font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
            Service Areas
          </span>
          <span className={`font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
            Contact
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute w-full shadow-2xl ${isStyle2 ? 'bg-brand-brown border-t border-white/10' : 'bg-brand-green border-t border-white/10'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Mobile Home Dropdown */}
            <div>
              <button
                onClick={() => setIsHomeOpen(!isHomeOpen)}
                className={`flex w-full justify-between items-center px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase transition-colors ${
                  (currentPage === 'home' || currentPage === 'home2') ? 'text-brand-orange' : isStyle2 ? 'text-white hover:text-brand-orange hover:bg-white/5' : 'text-white hover:text-brand-orange hover:bg-white/5'
                }`}
              >
                Home <ChevronDown className={`w-4 h-4 transform transition-transform ${isHomeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isHomeOpen && (
                <div className="pl-8 pr-4 py-2 space-y-2">
                  <button
                    onClick={() => handleNavClick('home')}
                    className={`block w-full text-left py-2 font-display text-xs uppercase tracking-[0.15em] hover:text-brand-orange transition-colors ${isStyle2 ? 'text-white/70' : 'text-white/70'}`}
                  >
                    Home 1
                  </button>
                  <button
                    onClick={() => handleNavClick('home2')}
                    className={`block w-full text-left py-2 font-display text-xs uppercase tracking-[0.15em] hover:text-brand-orange transition-colors ${isStyle2 ? 'text-white/70' : 'text-white/70'}`}
                  >
                    Home 2
                  </button>
                </div>
              )}
            </div>

            <span className={`block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
              About Us
            </span>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex w-full justify-between items-center px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase transition-colors ${
                  currentPage === 'repair' ? 'text-brand-orange' : isStyle2 ? 'text-white hover:text-brand-orange hover:bg-white/5' : 'text-white hover:text-brand-orange hover:bg-white/5'
                }`}
              >
                Services <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-8 pr-4 py-2 space-y-2">
                  {serviceLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.id)}
                      className={`block w-full text-left py-2 font-display text-xs uppercase tracking-[0.15em] hover:text-brand-orange transition-colors ${isStyle2 ? 'text-white/70' : 'text-white/70'}`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className={`block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
              Service Areas
            </span>
            <span className={`block w-full text-left px-4 py-3 rounded-lg font-display text-sm tracking-[0.15em] uppercase cursor-default ${isStyle2 ? 'text-white/50' : 'text-white/70'}`}>
              Contact
            </span>

            <div className="pt-4 flex flex-col gap-3">
              {isStyle2 ? (
                <>
                  <button
                    onClick={() => handleNavClick('book')}
                    className="w-full bg-brand-orange text-white border-2 border-brand-brown font-display text-sm tracking-[0.15em] uppercase py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)]"
                  >
                    Book Online
                  </button>
                  <a
                    href="tel:8175551234"
                    className="w-full border-2 border-white text-white font-display text-sm tracking-[0.15em] uppercase py-4 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}
