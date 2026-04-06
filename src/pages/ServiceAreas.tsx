import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceAreasProps {
  setCurrentPage: (page: string) => void;
}

export default function ServiceAreas({ setCurrentPage }: ServiceAreasProps) {
  const areas = [
    { name: 'Granbury', desc: 'Our home base! Fast, local service for all of Hood County.' },
    { name: 'Aledo', desc: 'Expert repairs and installations for Aledo homeowners.' },
    { name: 'Benbrook', desc: 'Serving Benbrook with top-rated garage door solutions.' },
    { name: 'Cleburne', desc: 'Reliable service you can count on in Cleburne.' },
    { name: 'DeCordova', desc: 'Quick response times for our neighbors in DeCordova.' },
    { name: 'Fort Worth', desc: 'Comprehensive garage door services across the Fort Worth area.' },
    { name: 'Glen Rose', desc: 'Professional repairs and maintenance in Glen Rose.' },
    { name: 'Godley', desc: 'Your trusted local experts in Godley, TX.' },
    { name: 'Weatherford', desc: 'Serving Parker County with upfront pricing and quality work.' },
  ];

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Luxury Home Exterior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight mb-6">
            Service <span className="text-brand-orange">Areas</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Proudly providing top-tier garage door services across Granbury and the Fort Worth Metroplex.
          </p>
        </div>
      </section>

      {/* Map Placeholder & Intro */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-display text-5xl text-brand-brown uppercase tracking-tight mb-8">Local Experts, <br/><span className="text-brand-orange">Regional Reach</span></h2>
              <div className="prose prose-lg text-brand-brown/80 font-body font-light leading-relaxed">
                <p className="mb-6">
                  While our roots are firmly planted in Granbury, TX, our service area extends throughout Hood, Parker, Johnson, and Tarrant counties. We understand the unique needs of Texas homeowners, from dealing with extreme heat to ensuring your home's security.
                </p>
                <p className="mb-8">
                  No matter where you are in our service area, you can expect the same commitment to excellence, upfront pricing, and fast response times that have made us a local favorite.
                </p>
              </div>
              <button 
                onClick={() => setCurrentPage('book')}
                className="bg-brand-orange hover:bg-brand-green text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center group"
              >
                Schedule Service <ArrowRight className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="lg:w-1/2 relative w-full">
              {/* Placeholder for Interactive Map */}
              <div className="aspect-square md:aspect-video bg-white rounded-[2rem] shadow-2xl border border-brand-brown/5 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="text-center p-8 relative z-10">
                  <div className="w-24 h-24 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <MapPin className="w-12 h-12 text-brand-orange" />
                  </div>
                  <p className="font-display text-brand-brown text-3xl uppercase tracking-tight mb-2">Service Area Map</p>
                  <p className="font-body text-brand-brown/60 font-light">Interactive map showing coverage across DFW.</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* City List */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">Cities We <span className="text-brand-orange">Serve</span></h2>
            <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto">
              Don't see your city listed? Give us a call! We often accommodate requests slightly outside our primary zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:bg-brand-orange transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight">{area.name}</h3>
                </div>
                <p className="font-body text-brand-brown/70 font-light leading-relaxed pl-16">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-brown"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight mb-10">Ready to Get <br/><span className="text-brand-orange">Started?</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('book')}
              className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Book Online
            </button>
            <a 
              href="tel:8175551234"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-brown font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              Call (817) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
