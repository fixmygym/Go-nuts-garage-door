import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ArrowRight, Phone, CheckCircle2, Star, MapPin, Briefcase, ShieldCheck } from 'lucide-react';

interface Services1Props {
  setCurrentPage: (page: string) => void;
}

export default function Services1({ setCurrentPage }: Services1Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-48 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-brand-green">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/garage%20door%202.jpg"
            alt="Garage Door Services" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-brand-cream px-4 py-2 rounded-full font-body text-sm mb-8 shadow-lg">
            <div className="flex items-center mr-3 gap-0.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="font-bold text-white mr-2">5.0</span>
            <span className="text-white/90">Google Rating (250+ Reviews)</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">Services.</span>
          </h1>
          
          <p className="font-body text-lg lg:text-xl text-brand-cream/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            Professional garage door solutions tailored to your home. Fast, reliable, and ready when you need us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <a 
              href="tel:8175551234"
              className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </a>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              Book Now
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
              <MapPin className="w-4 h-4 mr-2 text-brand-orange" /> Locally Owned
            </div>
            <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
              <Briefcase className="w-4 h-4 mr-2 text-brand-orange" /> Professional
            </div>
            <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" /> Trustworthy
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FDFBF7]"></div>
      </section>

      {/* Section 1: H1 - Intro */}
      <section className="relative py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(30,70,60,0.25)]">
                <img
                  src="/garage%20door%203.jpg"
                  alt="Service Intro" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl text-brand-green mb-6 tracking-tight">H1 - Intro</h2>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#001E1E]"></div>
      </section>

      {/* Section 2: Featured Services Top */}
      <section className="relative py-24 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">Featured Services Top</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#FAF8F5] rounded-2xl p-10 text-center shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-display text-2xl text-brand-green mb-4">Example {item}</h3>
                <p className="font-body text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FAF8F5]"></div>
      </section>

      {/* Section 3: Sidebar 1 */}
      <section className="relative py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-green mb-6 tracking-tight">Sidebar 1</h2>
              <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut finibus libero. Sed ut fermentum lorem, non imperdiet urna. Phasellus sed metus felis. Donec egestas et felis ac commodo. Nulla ultrices, turpis eget viverra posuere, sapien dolor ornare justo, quis porttitor turpis dui eu quam.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Pellentesque ultrices metus a magna suscipit, ac varius enim mollis. Maecenas condimentum rutrum ipsum, quis gravida neque lobortis sit amet. Sed eu tincidunt massa. In id mi cursus, condimentum velit non, condimentum tortor. Nullam magna orci, consectetur non sodales vitae, varius id massa. Vivamus vestibulum massa pharetra justo interdum consequat.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-brand-orange rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors duration-500"></div>
                
                <div className="border-2 border-white/30 border-dashed rounded-2xl p-6 relative z-10">
                  <div className="mb-6">
                    <span className="font-display text-5xl tracking-tight block drop-shadow-sm">
                      <span className="text-brand-brown">GO</span> NUTS
                    </span>
                    <span className="font-display text-xs tracking-[0.2em] uppercase text-brand-brown font-bold bg-white/20 px-3 py-1 rounded-full inline-block mt-2">
                      Special Offer
                    </span>
                  </div>
                  
                  <h3 className="font-display text-4xl mb-3 leading-none">$50 OFF</h3>
                  <p className="font-body text-white/90 mb-8 text-sm leading-relaxed">
                    Any garage door repair or new installation. Mention this offer when you call!
                  </p>
                  <a 
                    href="tel:8175551234"
                    className="inline-flex items-center justify-center bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-orange transition-all duration-300 w-full"
                  >
                    Claim Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#1C0800]"></div>
      </section>

      {/* Section 4: Services List Top Title */}
      <section className="relative py-14 text-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C0800] via-[#C2410C] to-[#431407]"></div>
        {/* Center radial glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(234,88,12,0.45) 0%, transparent 70%)' }}></div>
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-6xl mb-2 tracking-tight leading-tight">
            <span className="text-white">Services List </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">Top Title</span>
          </h2>
          <p className="font-body text-white/50 mb-8 text-xs uppercase tracking-[0.2em]">Services List Bottom Text</p>

          {/* Frosted Glass Accordion */}
          <div className="mb-8 text-left">
            <div
              className="rounded-2xl border border-white/15 backdrop-blur-md overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-display text-lg text-white tracking-wide group-hover:text-orange-200 transition-colors duration-200">
                  First Item Entry
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center ml-4 transition-all duration-300 group-hover:bg-white/20">
                  <ChevronDown
                    className={`w-4 h-4 text-orange-200 transition-transform duration-300 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>
              {openAccordion === 0 && (
                <div className="px-6 pb-5 border-t border-white/10">
                  <p className="font-body text-white/70 text-sm leading-relaxed pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#F4F7F5]"></div>
      </section>

      {/* Section 5: Split 1 */}
      <section className="relative py-24 bg-[#F4F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">Split 1</h2>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">Lorem ipsum</h2>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#001E1E]"></div>
      </section>

      {/* Section 6: Split 2 */}
      <section className="relative py-24 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(30,70,60,0.25)] border-4 border-white/10">
                <img 
                  src="/garage%20door%204.jpg"
                  alt="Garage Door Installation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-tight">Split 2</h2>
              <p className="font-body text-white/80 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-white/80 mb-8 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
              <a 
                href="tel:8175551234"
                className="inline-flex items-center bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
              >
                Call (817) 555-1234
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FAF8F5]"></div>
      </section>

      {/* Section 7: Main (Complex Section) */}
      <section className="relative py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-green mb-6 tracking-tight">Main</h2>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="space-y-4 mb-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                    <span className="font-display text-brand-green text-lg">Accordion Title For More Content</span>
                    <ChevronRight className="w-5 h-5 text-brand-orange" />
                  </div>
                ))}
              </div>

              <h3 className="font-display text-3xl text-brand-green mb-6 tracking-tight">H2 Title</h3>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <a 
                href="tel:8175551234"
                className="inline-flex items-center bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300"
              >
                Call (817) 555-1234
              </a>
            </div>

            <div className="lg:w-1/3 space-y-8">
              {/* Expert Tips Box */}
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-3xl p-8">
                <h3 className="font-display text-2xl text-brand-green mb-6 text-center uppercase tracking-wider">Expert Tips</h3>
                <ul className="space-y-4">
                  {[
                    "5 Reasons Why You Should Hire An Expert",
                    "Go Nuts Garage Door 24-Hour AC Repair",
                    "4 Reasons You Need An Annual Tune-Up"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financing Box */}
              <div className="bg-brand-orange rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="font-display text-2xl mb-4 uppercase tracking-wider">Financing Available</h3>
                <p className="font-body text-white/90 mb-8 text-sm">
                  Don't let timing hold you back. We offer flexible financing options through Wells Fargo to fit your budget.
                </p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-orange transition-all duration-300 w-full"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FAF8F5]"></div>
      </section>

      {/* Section 8: Split 3 */}
      <section className="relative py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(30,70,60,0.25)]">
                <img src="/garage%20door%205.jpg" alt="Garage Door Service" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">Split 3</h2>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#1A2E26]"></div>
      </section>

      {/* Section 10: H2 Split 4 */}
      <section className="relative py-24 bg-[#1A2E26] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl mb-6 tracking-tight text-white">H2 Split 4</h2>
              <p className="font-body text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl mb-6 tracking-tight text-white">H2 Split 4</h2>
              <p className="font-body text-white/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#FDFBF7]"></div>
      </section>

      {/* Section 11: Secondary Main */}
      <section className="relative py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-green mb-6 tracking-tight">Secondary Main</h2>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300 mb-12">
                Book Now
              </button>
              
              <div className="space-y-4 mb-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-[#FAF8F5] rounded-xl p-6 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                    <span className="font-display text-brand-green text-lg">Accordion Title For More Content</span>
                    <ChevronRight className="w-5 h-5 text-brand-orange" />
                  </div>
                ))}
              </div>
              <p className="font-body text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-brand-orange rounded-3xl p-10 text-center text-white shadow-xl">
                <h3 className="font-display text-2xl mb-4 uppercase tracking-wider">Join The Club</h3>
                <p className="font-body text-white/90 mb-8 text-sm">
                  For less than a streaming subscription, you can protect your system, lock in priority service, and save on every repair - all year long.
                </p>
                <button onClick={() => setCurrentPage('contact')} className="bg-brand-green text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-brown transition-all duration-300 w-full">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: H2 Split 5 Title */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(30,70,60,0.25)] h-[420px]">
                <img src="/garage%20door%206.jpg" alt="Garage Door Repair" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">H2 Split 5 Title</h2>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-brown transition-all duration-300">
                Button Text
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: FAQ Top Title */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-brand-brown mb-3 tracking-tight">Frequently Asked Questions</h2>
            <p className="font-body text-base text-brand-brown/70 max-w-2xl mx-auto">Everything you need to know about our garage door services.</p>
          </div>
          <div className="space-y-3 mb-8">
            {[
              "How much does a new garage door cost?",
              "Do you offer 24/7 emergency repair?",
              "How long does a typical installation take?"
            ].map((question, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 flex items-center justify-between cursor-pointer border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                <span className="font-display text-lg text-brand-brown font-medium group-hover:text-brand-orange transition-colors pr-4">{question}</span>
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#FAF8F5] flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <ChevronDown className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-body text-brand-brown/70 mb-4">Still have questions?</p>
            <a href="tel:8175551234" className="inline-flex items-center bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-brown shadow-sm transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call (817) 555-1234
            </a>
          </div>
        </div>
      </section>
      {/* Section 14: H2 Two Column Split 6 Title */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">H2 Two Column Split 6 Title</h2>
              <p className="font-body text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-green mb-6 tracking-tight">H2 Two Column Split 6 Title</h2>
              <p className="font-body text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: Swappable Split */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("/blank-brown-wooden-textured-background (3).jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 z-0 bg-brand-brown/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-orange mb-6 tracking-tight">Swappable Split</h2>
              <p className="font-body text-white/80 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut finibus libero. Sed ut fermentum lorem, non imperdiet urna. Phasellus sed metus felis. Donec egestas et felis ac commodo.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300">
                Book Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(30,70,60,0.25)]">
                <img src="/garage%20door%201.jpg" alt="Garage Door" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16: CTA Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              {/* Mascot */}
              <div className="flex items-center justify-center p-4">
                <img 
                  src="/GoNuts_Logo_mascot_PNG (2).png" 
                  alt="Go Nuts Mascot" 
                  className="w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl text-brand-green mb-6 tracking-tight">CTA</h2>
              <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-brown transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: We Show Up For Our Community */}
      <section className="py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-tight">Proudly Serving <br/>Our Community</h2>
              <p className="font-body text-white/80 mb-6 leading-relaxed">
                Granbury isn't just where we work; it's our home. We believe in giving back to the community that has supported us for years.
              </p>
              <p className="font-body text-white/80 mb-8 leading-relaxed">
                From sponsoring local youth sports teams to participating in Granbury's historic downtown events, we are committed to helping our community thrive. A portion of every installation goes directly to local Hood County charities.
              </p>
              <button onClick={() => setCurrentPage('about')} className="bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-brown transition-all duration-300">
                Learn About Our Initiatives
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600" alt="Community Event" className="rounded-3xl w-full h-64 object-cover shadow-xl border-2 border-white/10" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" alt="Local Sponsorship" className="rounded-3xl w-full h-64 object-cover shadow-xl mt-12 border-2 border-white/10" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19: Your Neighborhood Is Our Neighborhood */}
      <section className="py-24 bg-[#1A2E26] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="font-display text-brand-orange text-sm tracking-[0.15em] uppercase mb-4">Proudly serving Texas for 25+ years</p>
              <h2 className="font-display text-4xl mb-8 tracking-tight">Your Neighborhood Is Our Neighborhood</h2>
              
              <div className="space-y-4 mb-8 border-t border-white/10 pt-4">
                {['Granbury, TX', 'Weatherford, TX', 'Stephenville, TX'].map((city) => (
                  <div key={city} className="flex justify-between items-center border-b border-white/10 pb-4 cursor-pointer hover:text-brand-orange transition-colors">
                    <span className="font-display text-xl">{city}</span>
                    <span className="text-2xl font-light">+</span>
                  </div>
                ))}
              </div>
              
              <p className="font-body text-white/70 mb-8 text-sm">
                We've been running calls across Hood County and the surrounding area for over 25 years. Chances are, we already know your street.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300">
                Book Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-square bg-black/20 rounded-3xl border-2 border-white/10 flex items-center justify-center">
                <span className="text-white/50 font-display tracking-widest">MAP PLACEHOLDER</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
