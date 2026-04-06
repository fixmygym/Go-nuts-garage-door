import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  ShieldCheck, 
  Star, 
  Clock, 
  Wrench, 
  CheckCircle, 
  MapPin, 
  AlertTriangle, 
  CreditCard,
  Briefcase,
  Settings
} from 'lucide-react';
import CommunityInvolvement from '../components/CommunityInvolvement';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  isHome2?: boolean;
}

export default function Home({ setCurrentPage, isHome2 = false }: HomeProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitted');
  };

  return (
    <div className="w-full pb-20 md:pb-0 bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION WITH LEAD FORM */}
      <section className="relative flex items-center pt-44 pb-10 sm:pt-52 lg:pt-60 lg:pb-16 overflow-hidden bg-brand-green">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/garage%20door%201.jpg"
            alt="Garage Door Installation"
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
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
              <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl text-white uppercase leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
                Granbury's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">Trusted Choice.</span>
              </h1>
              <p className="font-body text-lg lg:text-xl text-brand-cream/90 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light tracking-wide">
                Fast, reliable, and professional garage door repair and installation. We're here for you 24/7 when emergencies strike.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
                <a 
                  href="tel:8175551234"
                  className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  (817) 555-1234
                </a>
                <button 
                  onClick={() => setCurrentPage('book')}
                  className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
                >
                  Book Now
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 lg:mb-0 mb-12">
                <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-2 text-brand-orange" /> Locally Owned & Operated
                </div>
                <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 mr-2 text-brand-orange" /> Professional
                </div>
                <div className="flex items-center text-brand-cream/90 font-body text-sm uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" /> Trustworthy
                </div>
              </div>
            </div>

            {/* Hero Lead Form - Glassmorphism */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: '-100%' }}
                  transition={{ duration: 2.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 z-50 bg-brand-green flex flex-col border-b-[12px] border-brand-orange shadow-2xl"
                >
                  {/* Luxury Modern Garage Door Panels */}
                  {[1, 2, 3, 4, 5].map(panel => (
                    <div key={panel} className="flex-1 border-b border-black/40 shadow-inner flex items-center justify-center bg-gradient-to-b from-[#234c46] to-brand-green relative overflow-hidden">
                      {/* Wood grain / texture effect */}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
                      
                      {/* Modern frosted glass windows on top panel only, sleek indentations on the rest */}
                      {panel === 1 ? (
                        <div className="w-[92%] h-[65%] border border-black/30 rounded-sm flex gap-3 p-1.5 bg-black/20 relative z-10 shadow-inner">
                          <div className="flex-1 border border-white/10 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                          <div className="flex-1 border border-white/10 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                          <div className="flex-1 border border-white/10 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                          <div className="flex-1 border border-white/10 rounded-sm bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                        </div>
                      ) : (
                        <div className="w-[92%] h-[65%] border border-black/30 rounded-sm flex gap-3 p-1.5 bg-black/10 relative z-10 shadow-inner">
                          <div className="flex-1 border border-black/20 rounded-sm bg-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]"></div>
                          <div className="flex-1 border border-black/20 rounded-sm bg-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]"></div>
                          <div className="flex-1 border border-black/20 rounded-sm bg-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]"></div>
                          <div className="flex-1 border border-black/20 rounded-sm bg-black/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
                
                {formStatus === 'idle' ? (
                  <div className="relative z-10">
                    <h3 className="font-display text-3xl text-white uppercase mb-3 tracking-wide">Priority Service</h3>
                    <p className="text-brand-cream/80 mb-8 font-body font-light">Secure your appointment. We respond immediately.</p>
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div>
                        <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all font-body backdrop-blur-sm" placeholder="Full Name" />
                      </div>
                      <div>
                        <input type="tel" id="phone" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all font-body backdrop-blur-sm" placeholder="Phone Number" />
                      </div>
                      <div>
                        <select id="service" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all font-body backdrop-blur-sm appearance-none">
                          <option value="" className="text-gray-900">Select a service...</option>
                          <option value="repair" className="text-gray-900">General Repair</option>
                          <option value="spring" className="text-gray-900">Broken Spring</option>
                          <option value="opener" className="text-gray-900">Opener Issues</option>
                          <option value="install" className="text-gray-900">New Installation</option>
                          <option value="emergency" className="text-gray-900">Emergency Service</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest py-3.5 rounded-xl shadow-sm transition-all duration-300 mt-4">
                        Request Immediate Quote
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-16 relative z-10">
                    <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-brand-orange" />
                    </div>
                    <h3 className="font-display text-3xl text-white uppercase mb-3 tracking-wide">Request Received</h3>
                    <p className="text-brand-cream/80 font-body text-lg font-light">A specialist will contact you momentarily to confirm your priority appointment.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICE BENTO GRID */}
      <section className="py-14 bg-[#F4F7F5] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section title */}
          <h2 className="font-display text-4xl text-brand-brown uppercase tracking-tight leading-[0.95] mb-10 text-center">
            Every Garage Door Done Right
          </h2>

            {/* 4-card single row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Card: Garage Door Repair — spinning circle + icon */}
              <div
                className="overflow-hidden bg-white rounded-2xl border border-brand-brown/10 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => setCurrentPage('repair')}
              >
                <div className="p-5 pt-6 text-center">
                  <div className="relative mx-auto flex aspect-square size-24 items-center justify-center rounded-full border border-brand-brown/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand-brown/5">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-orange/10 motion-safe:animate-[spin_20s_linear_infinite]" />
                    <Wrench className="size-9 text-brand-orange transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                  </div>
                  <div className="mt-5 space-y-1.5">
                    <h2 className="font-display text-base text-brand-brown uppercase tracking-wide">Garage Door Repair</h2>
                    <p className="font-body text-xs text-gray-400">Springs, cables, panels & tracks. Fixed same day.</p>
                  </div>
                </div>
              </div>

              {/* Card: Emergency Service — waveform chart */}
              <div
                className="overflow-hidden bg-white rounded-2xl border border-brand-brown/10 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setCurrentPage('repair')}
              >
                <div className="p-5 pt-4">
                  <div className="relative flex items-center justify-between mb-1 px-1">
                    <span className="font-body text-xs text-gray-400 uppercase tracking-widest">Response Time</span>
                    <span className="font-display text-xs text-brand-orange">45 min avg</span>
                  </div>
                  <svg className="w-full" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EB692E" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#EB692E" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>
                    <path d="M0 75 C20 75 25 55 35 50 C45 45 50 60 60 58 C70 56 75 40 85 35 C95 30 100 48 110 45 C120 42 125 25 135 20 C145 15 150 30 160 28 C170 26 175 15 185 12 C195 9 200 20 210 18 C220 16 230 10 240 8 L240 80 L0 80 Z" fill="url(#waveGrad)" />
                    <path className="text-brand-orange" d="M0 75 C20 75 25 55 35 50 C45 45 50 60 60 58 C70 56 75 40 85 35 C95 30 100 48 110 45 C120 42 125 25 135 20 C145 15 150 30 160 28 C170 26 175 15 185 12 C195 9 200 20 210 18 C220 16 230 10 240 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <div className="mt-3 space-y-1.5 text-center">
                    <h2 className="font-display text-base text-brand-brown uppercase tracking-wide">Emergency Service</h2>
                    <p className="font-body text-xs text-gray-400">Available 24/7. We show up fast when it matters most.</p>
                  </div>
                </div>
              </div>

              {/* Card: Door Installation — icon + mini door panels */}
              <div
                className="overflow-hidden bg-white rounded-2xl border border-brand-brown/10 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => setCurrentPage('repair')}
              >
                <div className="p-5 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative flex-shrink-0 flex aspect-square size-10 items-center justify-center rounded-full border border-brand-brown/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand-brown/5">
                      <CheckCircle className="size-4 text-brand-orange" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-base text-brand-brown uppercase tracking-wide">Door Installation</h2>
                      <p className="font-body text-xs text-gray-400 mt-0.5">Custom doors installed with precision. All major brands stocked.</p>
                      <p className="font-display text-2xl text-brand-orange mt-1.5">50+ <span className="font-body text-xs text-gray-400 font-normal">door styles</span></p>
                    </div>
                  </div>
                  {/* Mini door panel grid as bottom strip */}
                  <div className="mt-auto -mx-5 -mb-5 border-t border-brand-brown/10 p-3 pt-3">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-6 rounded-sm border border-brand-brown/10 bg-gradient-to-b from-brand-cream/60 to-brand-cream/20 group-hover:border-brand-orange/20 transition-colors duration-500"
                          style={{ transitionDelay: `${i * 20}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card: Garage Door Openers — icon + customer snippets */}
              <div
                className="overflow-hidden bg-white rounded-2xl border border-brand-brown/10 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setCurrentPage('repair')}
              >
                <div className="p-5 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative flex-shrink-0 flex aspect-square size-10 items-center justify-center rounded-full border border-brand-brown/10 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand-brown/5">
                      <Settings className="size-4 text-brand-orange" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-base text-brand-brown uppercase tracking-wide">Garage Door Openers</h2>
                      <p className="font-body text-xs text-gray-400 mt-0.5">Smart openers installed & programmed. LiftMaster, Chamberlain & more.</p>
                    </div>
                  </div>
                  {/* Review snippets */}
                  <div className="mt-auto space-y-2">
                    {[
                      { name: 'Sarah K.', text: 'Same day service!' },
                      { name: 'Mike R.', text: 'Fixed in 30 min.' },
                      { name: 'Lisa T.', text: 'Highly recommend!' },
                    ].map((r, i) => (
                      <div key={i} className={`flex items-center gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {i % 2 === 0 ? (
                          <>
                            <span className="block h-fit rounded-lg border border-brand-brown/15 bg-brand-cream/40 px-2 py-1 text-xs font-body text-brand-brown">{r.text}</span>
                            <div className="size-6 rounded-full bg-brand-orange/15 ring-2 ring-white flex items-center justify-center flex-shrink-0">
                              <span className="font-display text-xs text-brand-orange">{r.name[0]}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="size-6 rounded-full bg-brand-brown/10 ring-2 ring-white flex items-center justify-center flex-shrink-0">
                              <span className="font-display text-xs text-brand-brown">{r.name[0]}</span>
                            </div>
                            <span className="block h-fit rounded-lg border border-brand-brown/15 bg-brand-cream/40 px-2 py-1 text-xs font-body text-brand-brown">{r.text}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          {/* Book Now button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition-all duration-300"
            >
              Book Now
            </button>
          </div>

        </div>
      </section>

      {/* 4. INTRO PARAGRAPH WITH PHOTO */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-green/40 rounded-[2rem] transform -translate-x-4 translate-y-4 transition-transform duration-700 group-hover:-translate-x-6 group-hover:translate-y-6 blur-sm"></div>
              <img
                src="/garage%20door%203.jpg"
                alt="Granbury Garage Door Experts"
                className="relative z-10 w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-[1.5rem] shadow-xl"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-display text-brand-brown text-2xl uppercase tracking-tight leading-none">10+ Years</p>
                <p className="font-body text-brand-orange font-bold text-xs uppercase tracking-widest mt-1">Experience</p>
              </div>
            </div>
            <div>
              <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Welcome to Your Local Experts</span>
              <h2 className="font-display text-4xl md:text-5xl text-brand-brown uppercase mb-6 tracking-tight leading-none">
                Granbury's Premier <br/>Garage Door Service
              </h2>
              <p className="font-body text-lg text-gray-600 mb-6 font-light leading-relaxed">
                For over a decade, we've been the trusted choice for homeowners in Granbury, TX, and the surrounding communities. We understand that a broken garage door isn't just an inconvenience—it's a security risk and a disruption to your daily life.
              </p>
              <p className="font-body text-lg text-gray-600 mb-8 font-light leading-relaxed">
                Our mission is simple: provide rapid, transparent, and high-quality solutions that stand the test of time. Whether you need an emergency spring replacement at 2 AM or are looking to upgrade your home's curb appeal with a custom installation, our elite technicians are ready to deliver uncompromising excellence.
              </p>
              <a href="tel:8175551234" className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300">
                <Phone className="w-5 h-5" /> (817) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS / SOCIAL PROOF */}
      <section
        className="py-14 relative"
        style={{
          backgroundImage: "url('/blank-brown-wooden-textured-background (3).jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-brown/75" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Client Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#FAF8F5] uppercase mb-4 tracking-tight">Loved by Granbury</h2>
            <div className="flex justify-center items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-orange fill-current" />)}
              </div>
              <span className="font-display text-xl text-[#FAF8F5] tracking-widest">4.9/5 AVERAGE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Michael T.', loc: 'Granbury, TX', text: 'They arrived within the hour, diagnosed the issue fast, and executed the repair with precision. Highly recommended.' },
              { name: 'Sarah W.', loc: 'Pecan Plantation', text: "Premium experience from the first call to the final handshake. They didn't just fix the door — they made it better than new." },
              { name: 'David L.', loc: 'DeCordova, TX', text: 'Professional, knowledgeable, and respectful of our property. Pricing was completely transparent from start to finish.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#FAF8F5]/90 p-7 rounded-[1.5rem] shadow-lg relative hover:-translate-y-1 transition-transform duration-500">
                <p className="font-body text-base text-gray-700 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center font-display text-lg text-brand-cream">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-brand-brown uppercase tracking-wider text-sm">{review.name}</p>
                    <p className="font-body text-xs text-brand-orange uppercase tracking-widest">{review.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* 5.5 ABOUT US */}
      <section className="py-24 bg-[#FDFBF7] border-b border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-brand-brown uppercase mb-6 tracking-tight">Locally Owned & Operated</h2>
              <p className="font-body text-lg text-gray-600 font-light leading-relaxed mb-8">
                For over a decade, Go Nuts Garage Doors has been the trusted choice for homeowners in Granbury and the surrounding areas. We believe in doing things the right way the first time—combining premium materials with expert craftsmanship. Whether it's a late-night emergency repair or a complete custom door installation, our family is dedicated to keeping your family safe, secure, and looking great.
              </p>
              <button className="bg-brand-brown hover:bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-brand-green/40 rounded-[2rem] transform translate-x-4 translate-y-4 blur-sm"></div>
              <img
                src="/garage%20door%204.jpg"
                alt="Go Nuts Garage Doors"
                className="relative z-10 w-full h-auto rounded-[2rem] object-cover shadow-xl"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAINTENANCE MEMBERSHIPS - BENTO GRID */}
      <section className="py-10 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Protect Your Investment</span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase tracking-tight leading-tight">Stop Paying for Breakdowns.<br/>Start Preventing Them.</h2>
              <p className="font-body text-gray-400 text-sm max-w-xs sm:text-right leading-relaxed">One low annual fee covers everything. Join 500+ neighbors already protected.</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-4 items-stretch">

            {/* Left: Pricing card */}
            <motion.div
              className="lg:col-span-2 bg-brand-green rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FFF 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Protect Your Investment</span>
                  <div className="flex items-end gap-3 mb-1">
                    <span className="font-display text-6xl text-white leading-none">$149</span>
                    <span className="font-body text-white/30 text-lg line-through mb-1">$249</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-brand-orange/25 border border-brand-orange/40 text-brand-orange font-body font-bold text-sm px-2 py-0.5 rounded-full">Save $100</span>
                    <span className="font-body text-white/40 text-sm">per year</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: "500+", label: "Members" },
                      { value: "15%", label: "Labor Off" },
                      { value: "24hr", label: "Priority" },
                      { value: "$0", label: "Call Fees" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-2.5">
                        <p className="font-display text-2xl text-white leading-none">{stat.value}</p>
                        <p className="font-body text-white/40 text-sm mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-brand-orange hover:bg-white hover:text-brand-brown text-white font-display text-base uppercase tracking-widest py-3 rounded-xl transition-all duration-300">
                    Become a Member →
                  </button>
                  <p className="text-center font-body text-white/30 text-sm mt-2">No contracts · Cancel anytime</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Features */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Included Services */}
              <motion.div
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <h4 className="font-display text-sm uppercase tracking-[0.2em] text-brand-brown/50">Included Services</h4>
                </div>
                <ul className="space-y-2.5">
                  {["Annual Tune-Up & Inspection","Lubrication of All Moving Parts","Safety Sensor Calibration","Springs & Hardware Check"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                      <span className="font-body text-base text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Member Perks */}
              <motion.div
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                  <h4 className="font-display text-sm uppercase tracking-[0.2em] text-brand-brown/50">Member Perks</h4>
                </div>
                <ul className="space-y-2.5">
                  {["15% Off All Parts & Labor","Priority 24hr Scheduling","No Emergency Call Fees","Exclusive Member Promos"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span className="font-body text-base text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Value + Social proof — combined bottom row */}
              <motion.div
                className="sm:col-span-2 bg-brand-brown rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-body text-white/40 text-sm mb-0.5">À la carte value</p>
                    <p className="font-display text-white/30 text-2xl line-through leading-none">$433</p>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div>
                    <p className="font-body text-brand-orange text-sm font-bold mb-0.5">Member price</p>
                    <p className="font-display text-brand-orange text-2xl leading-none">$149</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex -space-x-2">
                    {['#e97b42','#2a5a5a','#c4623b','#4a8a8a'].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-brand-brown" style={{ backgroundColor: c }}></div>
                    ))}
                  </div>
                  <span className="font-body text-white/50 text-sm">500+ neighbors protected</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-brand-orange" />)}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FINANCING SECTION */}
      <section className="py-12 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <CreditCard className="w-10 h-10 text-brand-orange mb-4" />
              <h2 className="font-display text-4xl md:text-5xl text-brand-cream uppercase mb-3 tracking-tight">Flexible Financing Options</h2>
              <p className="font-body text-lg text-white/80 mb-5 font-light leading-relaxed">
                Don't let budget hold you back. We offer competitive plans to make any job affordable.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "0% Interest for 12 Months (WAC)",
                  "Low Monthly Payment Options",
                  "Instant Approval Process",
                  "No Prepayment Penalties"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/90 font-body text-base">
                    <CheckCircle className="w-4 h-4 text-brand-orange mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300">
                Apply Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <div className="text-center mb-5">
                  <p className="font-display text-xl text-brand-cream uppercase tracking-wide mb-1">As Low As</p>
                  <p className="font-display text-5xl text-brand-orange">$49<span className="text-2xl text-white/70">/mo</span></p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="font-body text-base text-white/80">New Installations</span>
                    <span className="font-display text-brand-orange">Eligible</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="font-body text-base text-white/80">Major Repairs</span>
                    <span className="font-display text-brand-orange">Eligible</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="font-body text-base text-white/80">Opener Upgrades</span>
                    <span className="font-display text-brand-orange">Eligible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET THE TEAM */}
      <section className="py-12 bg-transparent border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-brand-orange font-body font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Faces Behind The Quality</span>
            <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase mb-3 tracking-tight">Meet The Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="relative mb-4 max-h-72 overflow-hidden">
                <img
                  src="/trey.png"
                  alt="Trey Harless"
                  className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(30,70,60,0.25)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-brown uppercase tracking-wide mb-1">Trey Harless</h3>
              <p className="font-body text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Owner</p>
              <p className="font-body text-gray-600 font-light">Trey brings years of hands-on expertise and a highly energetic approach to ensuring every Granbury home gets top-tier service.</p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="relative mb-4 max-h-72 overflow-hidden">
                <img
                  src="/mckena.png"
                  alt="Mckena Harless"
                  className="w-full h-72 object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(30,70,60,0.25)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-brown uppercase tracking-wide mb-1">Mckena Harless</h3>
              <p className="font-body text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Owner</p>
              <p className="font-body text-gray-600 font-light">Mckena leads our operations with a focus on customer satisfaction, ensuring our team is always ready to leap into action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMMUNITY INVOLVEMENT */}
      <CommunityInvolvement />

      {/* 10. CAREERS / HIRING */}
      <section className="py-16 bg-[#FDFBF7] border-t border-brand-brown/5 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-brown/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-brown/5 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-display text-sm uppercase tracking-widest mb-6 w-fit">
                  <Briefcase className="w-4 h-4" />
                  <span>We're Hiring</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase mb-4 tracking-tight">Join Our Elite Team</h2>
                <p className="font-body text-base text-gray-600 mb-8 leading-relaxed">
                  We are always looking for driven, professional technicians and support staff to join our growing family in Granbury. Build a career you can be proud of.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <CreditCard className="w-4 h-4" />, text: "Competitive Pay" },
                    { icon: <ShieldCheck className="w-4 h-4" />, text: "Full Benefits" },
                    { icon: <Wrench className="w-4 h-4" />, text: "Ongoing Training" },
                    { icon: <Star className="w-4 h-4" />, text: "Career Growth" }
                  ].map((perk, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center text-brand-orange">
                        {perk.icon}
                      </div>
                      <span className="font-body font-bold text-sm text-brand-brown">{perk.text}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-brand-brown text-white hover:bg-brand-orange font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 w-fit shadow-sm">
                  View Open Positions
                </button>
              </div>
              
              <div className="relative min-h-[300px] lg:min-h-full hidden md:block">
                <img
                  src="/garage%20door%205.jpg"
                  alt="Garage Door Technician"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SERVICE AREAS */}
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
              <button onClick={() => setCurrentPage('contact')} className="bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-brand-orange transition-all duration-300">
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

      {/* STICKY MOBILE CALL BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50 md:hidden shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:8175551234" 
          className="w-full bg-brand-orange hover:bg-brand-brown text-white text-center py-3.5 rounded-xl font-display text-sm uppercase tracking-widest flex items-center justify-center shadow-sm active:scale-95 transition-all duration-300"
        >
          <Phone className="w-5 h-5 mr-2" /> Call Now
        </a>
      </div>

    </div>
  );
}

