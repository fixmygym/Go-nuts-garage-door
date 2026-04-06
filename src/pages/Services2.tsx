import React from 'react';
import { ChevronRight, ChevronDown, ArrowRight, Phone, CheckCircle2, Star, MapPin, Briefcase, ShieldCheck } from 'lucide-react';

interface Services2Props {
  setCurrentPage: (page: string) => void;
}

export default function Services2({ setCurrentPage }: Services2Props) {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-40 pb-12 lg:pt-44 lg:pb-16 overflow-hidden bg-brand-cream border-b-8 border-brand-brown">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/garage%20door%202.jpg"
            alt="Modern Garage Door"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/60 via-brand-cream/30 to-brand-cream/50"></div>
        </div>
        {/* Retro Background Pattern */}
        <div className="absolute inset-0 z-[1] opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #292524 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="inline-flex items-center border-2 border-brand-brown px-4 py-2 font-body text-sm mb-8 bg-white shadow-[4px_4px_0px_0px_rgba(41,37,36,1)]">
            <div className="flex items-center mr-3 gap-0.5">
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
            </div>
            <span className="font-bold text-brand-brown mr-2">5.0</span>
            <span className="text-brand-brown/80 font-medium">Google Rating (250+ Reviews)</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-brown uppercase leading-tight tracking-tight mb-8">
            Our <span className="text-brand-orange">Services</span>
          </h1>
          
          <p className="font-body text-lg lg:text-xl text-brand-brown/80 mb-10 leading-relaxed max-w-2xl mx-auto font-medium tracking-wide">
            Professional garage door solutions tailored to your home. Fast, reliable, and ready when you need us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="tel:8175551234"
              className="bg-brand-orange text-white border-2 border-brand-brown font-display text-lg uppercase tracking-widest px-8 py-4 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </a>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-cream text-brand-brown border-2 border-brand-brown font-display text-lg uppercase tracking-widest px-8 py-4 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Book Now
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center text-brand-brown font-display text-sm uppercase tracking-widest">
              <MapPin className="w-5 h-5 mr-2 text-brand-green" /> Locally Owned
            </div>
            <div className="flex items-center text-brand-brown font-display text-sm uppercase tracking-widest">
              <Briefcase className="w-5 h-5 mr-2 text-brand-green" /> Professional
            </div>
            <div className="flex items-center text-brand-brown font-display text-sm uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 mr-2 text-brand-green" /> Trustworthy
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: H1 - Intro */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative border-4 border-brand-brown shadow-2xl">
                <img 
                  src="/garage%20door%203.jpg"
                  alt="Service Intro" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl text-brand-brown mb-6 uppercase tracking-wider">H1 - Intro</h2>
              <p className="font-body text-lg text-brand-brown/80 mb-6 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-body text-lg text-brand-brown/80 mb-8 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Services Top */}
      <section className="py-24 bg-brand-brown border-y-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-brand-cream uppercase tracking-wider">Featured Services Top</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-brand-cream border-2 border-brand-orange p-10 text-center hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-display text-2xl text-brand-brown mb-4 uppercase tracking-widest">Example {item}</h3>
                <p className="font-body text-brand-brown/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sidebar 1 */}
      <section className="py-24 bg-[#F0E6D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-brown mb-6 uppercase tracking-wider">Sidebar 1</h2>
              <p className="font-body text-lg text-brand-brown/80 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut finibus libero. Sed ut fermentum lorem, non imperdiet urna. Phasellus sed metus felis. Donec egestas et felis ac commodo. Nulla ultrices, turpis eget viverra posuere, sapien dolor ornare justo, quis porttitor turpis dui eu quam.
              </p>
              <p className="font-body text-lg text-brand-brown/80 leading-relaxed">
                Pellentesque ultrices metus a magna suscipit, ac varius enim mollis. Maecenas condimentum rutrum ipsum, quis gravida neque lobortis sit amet. Sed eu tincidunt massa. In id mi cursus, condimentum velit non, condimentum tortor. Nullam magna orci, consectetur non sodales vitae, varius id massa. Vivamus vestibulum massa pharetra justo interdum consequat.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-brand-cream border-8 border-brand-orange p-8 text-center relative transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(62,43,31,1)] transition-all duration-300">
                {/* Brutalist accents */}
                
                <div className="mb-6">
                  <span className="font-display text-6xl tracking-tighter uppercase block text-brand-brown transform -rotate-3 scale-105 drop-shadow-[4px_4px_0px_rgba(232,113,33,1)]">
                    GO NUTS!
                  </span>
                  <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-brand-cream bg-brand-brown px-4 py-2 inline-block mt-4">
                    Limited Time Offer
                  </span>
                </div>
                
                <h3 className="font-display text-4xl mb-4 text-brand-orange uppercase tracking-widest">$50 OFF</h3>
                <p className="font-body text-brand-brown/80 mb-8 text-sm leading-relaxed font-bold">
                  ANY GARAGE DOOR REPAIR OR NEW INSTALLATION. MENTION THIS OFFER WHEN YOU CALL!
                </p>
                <a 
                  href="tel:8175551234"
                  className="inline-flex items-center justify-center bg-brand-orange text-brand-brown font-display text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-brown hover:text-brand-cream transition-colors duration-300 w-full font-bold border-2 border-transparent hover:border-brand-orange"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services List Top Title */}
      <section className="py-24 bg-brand-orange text-center border-y-8 border-brand-brown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-brand-brown mb-8 uppercase tracking-widest">Services List Top Title</h2>
          <div className="bg-brand-cream border-2 border-brand-brown p-2 flex items-center max-w-md mx-auto mb-4">
            <select className="w-full bg-transparent border-none text-brand-brown font-body focus:ring-0 px-6 py-2 appearance-none cursor-pointer font-bold">
              <option>First Item Entry</option>
              <option>Second Item Entry</option>
              <option>Third Item Entry</option>
            </select>
            <ChevronRight className="w-6 h-6 text-brand-brown mr-4" />
          </div>
          <p className="font-body text-brand-brown mb-8 text-sm font-bold uppercase tracking-wider">Services List Bottom Text</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Section 5: Split 1 */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">Split 1</h2>
              <p className="font-body text-brand-brown/80 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-brand-brown/80 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">Lorem ipsum</h2>
              <p className="font-body text-brand-brown/80 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-brand-brown/80 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Split 2 */}
      <section className="py-24 bg-brand-brown border-t-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative border-4 border-brand-orange">
                <img 
                  src="/garage%20door%204.jpg"
                  alt="Garage Door Installation" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-brand-cream">
              <h2 className="font-display text-4xl md:text-5xl mb-6 uppercase tracking-widest text-brand-orange">Split 2</h2>
              <p className="font-body text-brand-cream/80 mb-6 leading-relaxed">
                Dolor sit amet, consectetur adipiscing elit. Quisque faucibus arcu eu neque varius dignissim. Nullam interdum justo risus, dignissim pharetra sem auctor quis. Aenean id interdum nisl, nec condimentum arcu.
              </p>
              <p className="font-body text-brand-cream/80 mb-8 leading-relaxed">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque molestie luctus tortor. Donec sodales arcu diam, consectetur ultrices nulla vestibulum eget.
              </p>
              <a 
                href="tel:8175551234"
                className="inline-flex items-center bg-transparent border-2 border-brand-orange text-brand-orange font-display text-sm tracking-[0.2em] uppercase px-10 py-5 hover:bg-brand-orange hover:text-brand-brown transition-colors duration-300 font-bold"
              >
                Call (817) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Main (Complex Section) */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-brown mb-6 uppercase tracking-wider">Main</h2>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="space-y-4 mb-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-brand-cream border-2 border-brand-brown p-6 flex items-center justify-between cursor-pointer hover:bg-brand-orange hover:text-white transition-colors group">
                    <span className="font-display text-brand-brown group-hover:text-white text-lg uppercase tracking-wider font-bold">Accordion Title For More Content</span>
                    <ChevronRight className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  </div>
                ))}
              </div>

              <h3 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">H2 Title</h3>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <a 
                href="tel:8175551234"
                className="inline-flex items-center bg-brand-brown text-brand-cream font-display text-sm tracking-[0.2em] uppercase px-10 py-5 hover:bg-brand-orange transition-colors duration-300"
              >
                Call (817) 555-1234
              </a>
            </div>

            <div className="lg:w-1/3 space-y-8">
              {/* Expert Tips Box */}
              <div className="bg-brand-cream border-4 border-brand-brown p-8 relative">
                <h3 className="font-display text-2xl text-brand-brown mb-6 text-center uppercase tracking-widest">Expert Tips</h3>
                <ul className="space-y-4">
                  {[
                    "5 Reasons Why You Should Hire An Expert",
                    "Go Nuts Garage Door 24-Hour AC Repair",
                    "4 Reasons You Need An Annual Tune-Up"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-brand-brown font-bold">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financing Box */}
              <div className="bg-brand-orange border-4 border-brand-brown p-8 text-center text-brand-brown">
                <h3 className="font-display text-2xl mb-4 uppercase tracking-widest font-bold">Financing Available</h3>
                <p className="font-body text-brand-brown/90 mb-8 text-sm font-medium">
                  Don't let timing hold you back. We offer flexible financing options through Wells Fargo to fit your budget.
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all w-full"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Split 3 */}
      <section className="py-24 bg-brand-cream border-t-8 border-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative border-4 border-brand-brown">
                <img src="/garage%20door%205.jpg" alt="Garage Door Service" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">Split 3</h2>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: H2 Split 4 */}
      <section className="py-24 bg-[#2A2320] text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 border-l-4 border-brand-orange pl-8">
              <h2 className="font-display text-3xl mb-6 uppercase tracking-wider text-brand-orange">H2 Split 4</h2>
              <p className="font-body text-brand-cream/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
            <div className="md:w-1/2 border-l-4 border-brand-orange pl-8">
              <h2 className="font-display text-3xl mb-6 uppercase tracking-wider text-brand-orange">H2 Split 4</h2>
              <p className="font-body text-brand-cream/70 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Secondary Main */}
      <section className="py-24 bg-brand-cream border-t-8 border-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="font-display text-4xl text-brand-brown mb-6 uppercase tracking-wider">Secondary Main</h2>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all mb-12">
                Book Now
              </button>
              
              <div className="space-y-4 mb-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white border-2 border-brand-brown p-6 flex items-center justify-between cursor-pointer hover:bg-brand-orange hover:border-brand-orange group transition-colors">
                    <span className="font-display text-brand-brown group-hover:text-white text-lg uppercase tracking-wider font-bold">Accordion Title For More Content</span>
                    <ChevronRight className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  </div>
                ))}
              </div>
              <p className="font-body text-brand-brown/80 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-brand-orange border-4 border-brand-brown p-10 text-center text-brand-brown relative">
                <h3 className="font-display text-2xl mb-4 uppercase tracking-widest font-bold">Join The Club</h3>
                <p className="font-body text-brand-brown/90 mb-8 text-sm font-bold">
                  For less than a streaming subscription, you can protect your system, lock in priority service, and save on every repair - all year long.
                </p>
                <button onClick={() => setCurrentPage('contact')} className="bg-brand-cream text-brand-brown border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-orange hover:text-white transition-all w-full">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: H2 Split 5 Title */}
      <section className="py-24 bg-[#E8E0D0] border-y-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative border-4 border-brand-brown overflow-hidden h-[420px]">
                <img src="/garage%20door%206.jpg" alt="Garage Door Repair" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">H2 Split 5 Title</h2>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all">
                Button Text
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: FAQ Top Title */}
      <section className="py-12 bg-brand-cream border-y-8 border-brand-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl text-brand-brown mb-4 uppercase tracking-widest drop-shadow-[2px_2px_0px_rgba(232,113,33,0.5)]">FAQS</h2>
            <p className="font-body text-lg text-brand-brown/80 font-bold uppercase tracking-wider">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4 mb-10">
            {[
              "How much does a new garage door cost?",
              "Do you offer 24/7 emergency repair?",
              "How long does a typical installation take?"
            ].map((question, idx) => (
              <div key={idx} className="bg-white text-brand-brown border-4 border-brand-brown p-5 flex items-center justify-between cursor-pointer shadow-[6px_6px_0px_0px_rgba(62,39,35,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(62,39,35,1)] transition-all group">
                <span className="font-display text-lg md:text-xl font-bold uppercase tracking-wider pr-4">{question}</span>
                <div className="w-10 h-10 flex-shrink-0 bg-brand-orange border-4 border-brand-brown flex items-center justify-center group-hover:bg-brand-brown transition-colors">
                  <span className="text-brand-brown group-hover:text-brand-orange text-2xl font-display font-bold leading-none mt-1">+</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center bg-brand-orange border-4 border-brand-brown p-8 shadow-[6px_6px_0px_0px_rgba(62,39,35,1)]">
            <h3 className="font-display text-2xl text-brand-brown uppercase tracking-widest font-bold mb-4">Still need help?</h3>
            <a href="tel:8175551234" className="inline-flex items-center bg-brand-cream text-brand-brown font-display text-base tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors duration-300 font-bold border-4 border-brand-brown shadow-[4px_4px_0px_0px_rgba(62,39,35,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(62,39,35,1)]">
              <Phone className="w-5 h-5 mr-3" />
              Call (817) 555-1234
            </a>
          </div>
        </div>
      </section>
      {/* Section 14: H2 Two Column Split 6 Title */}
      <section className="py-24 bg-brand-cream border-b-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">H2 Two Column Split 6 Title</h2>
              <p className="font-body text-brand-brown/80 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">H2 Two Column Split 6 Title</h2>
              <p className="font-body text-brand-brown/80 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi sapien, vulputate non pulvinar at, convallis non metus. Ut in sapien in augue varius fringilla eget ac nunc. Integer iaculis enim metus, ac ultrices arcu lacinia vehicula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: Swappable Split */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl text-brand-brown mb-6 uppercase tracking-wider">Swappable Split</h2>
              <p className="font-body text-brand-brown/80 mb-8 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut finibus libero. Sed ut fermentum lorem, non imperdiet urna. Phasellus sed metus felis. Donec egestas et felis ac commodo.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all">
                Book Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative border-4 border-brand-brown">
                <img src="/garage%20door%201.jpg" alt="Garage Door" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16: CTA Section */}
      <section className="py-24 bg-brand-cream border-t-8 border-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              {/* Mascot */}
              <div className="flex items-center justify-center p-4">
                <img 
                  src="/GoNuts_Logo_mascot_PNG (2).png" 
                  alt="Go Nuts Mascot" 
                  className="w-full max-w-lg h-auto object-contain transform -rotate-2 drop-shadow-[12px_12px_0px_rgba(232,113,33,0.6)]"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl text-brand-brown mb-6 uppercase tracking-widest">CTA</h2>
              <p className="font-body text-lg text-brand-brown/80 mb-8 leading-relaxed font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: We Show Up For Our Community */}
      <section className="py-24 bg-brand-brown text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl mb-6 uppercase tracking-widest text-brand-orange">Proudly Serving <br/>Our Community</h2>
              <p className="font-body text-brand-cream/80 mb-6 leading-relaxed font-medium">
                Granbury isn't just where we work; it's our home. We believe in giving back to the community that has supported us for years.
              </p>
              <p className="font-body text-brand-cream/80 mb-8 leading-relaxed font-medium">
                From sponsoring local youth sports teams to participating in Granbury's historic downtown events, we are committed to helping our community thrive. A portion of every installation goes directly to local Hood County charities.
              </p>
              <button onClick={() => setCurrentPage('about')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all">
                Learn About Our Initiatives
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative border-4 border-brand-orange">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600" alt="Community Event" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative border-4 border-brand-orange mt-12">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" alt="Local Sponsorship" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 19: Your Neighborhood Is Our Neighborhood */}
      <section className="py-24 bg-[#2A2320] text-brand-cream border-t-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="font-display text-brand-orange text-sm tracking-[0.2em] uppercase mb-4 font-bold">Proudly serving Texas for 25+ years</p>
              <h2 className="font-display text-4xl mb-8 uppercase tracking-widest">Your Neighborhood Is Our Neighborhood</h2>
              
              <div className="space-y-4 mb-8 border-t-2 border-brand-orange/30 pt-4">
                {['Granbury, TX', 'Weatherford, TX', 'Stephenville, TX'].map((city) => (
                  <div key={city} className="flex justify-between items-center border-b-2 border-brand-orange/30 pb-4 cursor-pointer hover:text-brand-orange transition-colors">
                    <span className="font-display text-xl uppercase tracking-wider">{city}</span>
                    <span className="text-2xl font-bold text-brand-orange">+</span>
                  </div>
                ))}
              </div>
              
              <p className="font-body text-brand-cream/70 mb-8 text-sm font-medium">
                We've been running calls across Hood County and the surrounding area for over 25 years. Chances are, we already know your street.
              </p>
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-orange text-white border-2 border-brand-brown font-display text-sm uppercase tracking-widest px-8 py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:bg-brand-brown transition-all">
                Book Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-square bg-black/40 border-4 border-brand-brown flex items-center justify-center relative">
                <span className="text-brand-cream/50 font-display tracking-widest uppercase font-bold">MAP PLACEHOLDER</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
