import React, { useState, useRef, useEffect } from 'react';
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
  Settings,
  ArrowRight
} from 'lucide-react';
import CommunityInvolvement from '../components/CommunityInvolvement';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home2({ setCurrentPage }: HomeProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [doorOpen, setDoorOpen] = useState(false);
  const doorSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = doorSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // boundingClientRect.top > 0 means the section is entering from below = scrolling down
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setDoorOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitted');
  };

  return (
    <div className="w-full pb-20 md:pb-0 bg-brand-cream selection:bg-brand-brown selection:text-brand-cream">
      
      {/* 1. HERO SECTION WITH LEAD FORM - RETRO LUXURY */}
      <section className="relative flex items-center pt-40 pb-8 lg:pt-44 lg:pb-10 overflow-hidden bg-brand-cream border-b-8 border-brand-brown">
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/garage%20door%201.jpg"
            alt="Modern Garage Door"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/90 via-brand-cream/50 to-transparent"></div>
        </div>
        {/* Retro Background Pattern */}
        <div className="absolute inset-0 z-[1] opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #292524 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center border-2 border-brand-brown px-4 py-2 font-body text-sm mb-4 bg-white shadow-[4px_4px_0px_0px_rgba(41,37,36,1)]">
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
              <h1 className="font-display text-6xl lg:text-8xl xl:text-9xl text-brand-brown uppercase leading-tight tracking-tight mb-4">
                Granbury's <br />
                <span className="text-brand-orange">Trusted Choice</span>
              </h1>
              <p className="font-body text-lg lg:text-xl text-brand-brown/80 mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium tracking-wide border-l-4 border-brand-orange pl-6">
                Fast, reliable, and professional garage door repair and installation. We're here for you 24/7 when emergencies strike.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
                <a 
                  href="tel:8175551234"
                  className="bg-brand-orange text-white border-2 border-brand-brown font-display text-lg uppercase tracking-widest px-8 py-4 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  (817) 555-1234
                </a>
                <button 
                  onClick={() => setCurrentPage('book')}
                  className="bg-brand-cream text-brand-brown border-2 border-brand-brown font-display text-lg uppercase tracking-widest px-8 py-4 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center"
                >
                  Book Now
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 lg:mb-0 mb-12">
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

            {/* Hero Lead Form - Retro Solid */}
            <div className="lg:col-span-5 relative">
              {/* Decorative background offset */}
              <div className="absolute inset-0 bg-brand-green translate-x-4 translate-y-4 border-2 border-brand-brown"></div>
              
              <div className="bg-white border-2 border-brand-brown p-8 relative z-10">
                <div className="border-b-2 border-brand-brown pb-6 mb-6">
                  <h3 className="font-display text-4xl text-brand-brown uppercase tracking-tight">Priority Service</h3>
                  <p className="text-brand-orange font-body font-bold uppercase tracking-widest text-xs mt-2">Secure your appointment today</p>
                </div>
                
                {formStatus === 'idle' ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block font-display text-sm uppercase tracking-widest text-brand-brown mb-2">Full Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 bg-brand-cream/50 border-2 border-brand-brown text-brand-brown focus:bg-white focus:outline-none transition-colors font-body" placeholder="JOHN DOE" />
                    </div>
                    <div>
                      <label className="block font-display text-sm uppercase tracking-widest text-brand-brown mb-2">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 bg-brand-cream/50 border-2 border-brand-brown text-brand-brown focus:bg-white focus:outline-none transition-colors font-body" placeholder="(555) 555-5555" />
                    </div>
                    <div>
                      <label className="block font-display text-sm uppercase tracking-widest text-brand-brown mb-2">Service Needed</label>
                      <div className="relative">
                        <select id="service" required className="w-full px-4 py-3 bg-brand-cream/50 border-2 border-brand-brown text-brand-brown focus:bg-white focus:outline-none transition-colors font-body appearance-none rounded-none">
                          <option value="">SELECT SERVICE...</option>
                          <option value="repair">GENERAL REPAIR</option>
                          <option value="spring">BROKEN SPRING</option>
                          <option value="opener">OPENER ISSUES</option>
                          <option value="install">NEW INSTALLATION</option>
                          <option value="emergency">EMERGENCY SERVICE</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-brand-brown"></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-brand-green text-white border-2 border-brand-brown font-display text-lg uppercase tracking-widest py-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all mt-6">
                      Get Immediate Quote
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-brand-green border-2 border-brand-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)]">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-display text-3xl text-brand-brown uppercase mb-3 tracking-tight">Request Received</h3>
                    <p className="text-brand-brown/80 font-body text-lg font-medium">A specialist will contact you momentarily.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EMERGENCY BANNER - STATIC */}
      <a href="tel:8175551234" className="block bg-brand-brown py-4 border-b-8 border-brand-orange hover:bg-brand-brown/90 transition-colors cursor-pointer group">
        <div className="flex items-center justify-center gap-6">
          <AlertTriangle className="w-6 h-6 text-brand-orange" />
          <span className="font-display text-2xl text-brand-cream uppercase tracking-widest group-hover:text-brand-orange transition-colors">24/7 Emergency Repair in Granbury</span>
          <span className="text-brand-orange font-display text-2xl">•</span>
          <span className="font-display text-2xl text-brand-cream uppercase tracking-widest group-hover:text-brand-orange transition-colors">Call (817) 555-1234</span>
          <AlertTriangle className="w-6 h-6 text-brand-orange" />
        </div>
      </a>

      {/* 3. SERVICE BAR / ICONS - RETRO CARDS */}
      <section ref={doorSectionRef} className="py-20 bg-brand-green border-b-8 border-brand-brown relative overflow-hidden">

        {/* Vintage Carriage House Garage Door Overlay */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: doorOpen ? "-100%" : "0%" }}
          transition={{ duration: 2, delay: 0.5, ease: [0.45, 0, 0.55, 1] }}
          className="absolute inset-0 z-20 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#8b5a2b]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`
          }}
        >
          {/* Top Panel with Windows */}
          <div className="flex-1 border-b-4 border-[#5c3a18] relative flex items-center justify-center px-8 gap-6 bg-[#7a4e24]">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="flex-1 h-1/2 border-4 border-[#4a2e12] bg-[#1a1a1a] rounded-t-full relative overflow-hidden shadow-inner">
                {/* Window reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -rotate-45 translate-x-1/4"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#4a2e12] -translate-x-1/2"></div>
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-[#4a2e12] -translate-y-1/2"></div>
              </div>
            ))}
          </div>

          {/* Middle Panels with Crossbucks */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-[1.5] border-b-4 border-[#5c3a18] relative flex px-8 py-4 gap-6 bg-[#8b5a2b]">
              {[...Array(2)].map((_, j) => (
                <div key={j} className="flex-1 border-4 border-[#6b441f] relative overflow-hidden shadow-inner bg-[#7a4e24]">
                  {/* Crossbuck X pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] h-4 bg-[#6b441f] rotate-45 absolute shadow-sm"></div>
                    <div className="w-[150%] h-4 bg-[#6b441f] -rotate-45 absolute shadow-sm"></div>
                  </div>
                </div>
              ))}
              {/* Decorative Handles on the second panel */}
              {i === 1 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 z-10">
                  <div className="w-3 h-16 bg-[#2a2a2a] rounded-full shadow-md border border-[#1a1a1a]"></div>
                  <div className="w-3 h-16 bg-[#2a2a2a] rounded-full shadow-md border border-[#1a1a1a]"></div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom Panel */}
          <div className="flex-1 border-b-4 border-[#5c3a18] relative flex px-8 py-4 gap-6 bg-[#8b5a2b]">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="flex-1 border-4 border-[#6b441f] bg-[#7a4e24] shadow-inner"></div>
            ))}
          </div>

          {/* Bottom rubber seal */}
          <div className="h-6 bg-[#1a1a1a] w-full border-t-2 border-black shadow-[0_5px_15px_rgba(0,0,0,0.5)]"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Garage Door Repair', icon: <Wrench />, desc: 'Expert fixes for all makes and models.' },
              { title: 'Door Installation', icon: <CheckCircle />, desc: 'Premium doors to elevate your home.' },
              { title: 'Garage Door Openers', icon: <Settings />, desc: 'Smooth, quiet, and reliable operation.' },
              { title: 'Emergency Service', icon: <Clock />, desc: 'Available 24/7 for urgent needs.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-brand-cream border-2 border-brand-brown p-8 shadow-[8px_8px_0px_0px_rgba(41,37,36,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(41,37,36,1)] transition-all cursor-pointer group" onClick={() => setCurrentPage('repair')}>
                <div className="w-16 h-16 bg-white border-2 border-brand-brown text-brand-orange flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="font-display text-2xl text-brand-brown uppercase tracking-tight mb-3">{service.title}</h3>
                <p className="font-body text-brand-brown/80 font-medium">{service.desc}</p>
                <div className="mt-6 flex items-center text-brand-orange font-display uppercase tracking-widest text-sm group-hover:text-brand-green transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTRO PARAGRAPH WITH PHOTO - EDITORIAL STYLE */}
      <section className="py-32 bg-[#F0E6D2] border-b-8 border-brand-brown relative">
        {/* Retro Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #292524 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange translate-x-6 translate-y-6 border-2 border-brand-brown"></div>
              <img 
                src="/garage%20door%203.jpg"
                alt="Granbury Garage Door Experts" 
                className="relative z-10 w-full h-[600px] object-cover border-2 border-brand-brown grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Retro Badge */}
              <div className="absolute -bottom-8 -left-8 z-20 w-40 h-40 bg-brand-cream border-2 border-brand-brown rounded-full flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(41,37,36,1)]">
                <div className="text-center">
                  <span className="block font-display text-brand-brown text-xl uppercase leading-none">10+ Years</span>
                  <span className="block font-body text-brand-orange font-bold text-sm uppercase tracking-widest">Experience</span>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block border-b-4 border-brand-orange pb-2 mb-8">
                <span className="text-brand-brown font-display font-bold tracking-[0.3em] uppercase text-sm">Welcome to Your Local Experts</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-brand-brown uppercase mb-8 tracking-tight leading-tight">
                Granbury's <br/><span className="text-brand-green">Premier</span> Service
              </h2>
              <div className="space-y-6 font-body text-xl text-brand-brown/80 font-medium leading-relaxed">
                <p>
                  For over a decade, we've been the trusted choice for homeowners in Granbury, TX, and the surrounding communities. We understand that a broken garage door isn't just an inconvenience—it's a security risk and a disruption to your daily life.
                </p>
                <p>
                  Our mission is simple: provide rapid, transparent, and high-quality solutions that stand the test of time. Whether you need an emergency spring replacement at 2 AM or are looking to upgrade your home's curb appeal with a custom installation, our elite technicians are ready to deliver uncompromising excellence.
                </p>
              </div>
              <a href="tel:8175551234" className="mt-12 inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-brown text-white font-display text-sm uppercase tracking-widest px-6 py-4 border-2 border-brand-brown shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] transition-colors">
                <Phone className="w-5 h-5" /> (817) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS / SOCIAL PROOF - VINTAGE POSTCARDS */}
      <section className="py-16 bg-brand-cream border-b-8 border-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
            <div>
              <span className="text-brand-orange font-display font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Client Testimonials</span>
              <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight leading-tight">Loved by Granbury</h2>
            </div>
            <div className="bg-white border-2 border-brand-brown p-6 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-brand-orange fill-current" />)}
              </div>
              <span className="font-display text-2xl text-brand-green tracking-widest uppercase">4.9/5 Average</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Michael T.', loc: 'Granbury, TX', text: 'Impeccable service. They arrived within the hour, diagnosed the issue silently, and executed the repair with surgical precision. Highly recommended.' },
              { name: 'Sarah W.', loc: 'Pecan Plantation', text: 'A truly premium experience from the initial phone call to the final handshake. They didn\'t just fix the door; they engineered it to be better than new.' },
              { name: 'David L.', loc: 'DeCordova, TX', text: 'Professionalism at its finest. The technician was knowledgeable, respectful of our property, and the pricing was completely transparent.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white border-2 border-brand-brown p-6 shadow-[8px_8px_0px_0px_rgba(41,37,36,1)] relative">
                {/* Vintage stamp detail */}
                <div className="absolute top-4 right-4 w-12 h-16 border-2 border-brand-brown/20 flex items-center justify-center">
                  <div className="w-8 h-12 border border-brand-brown/10"></div>
                </div>

                <div className="mb-4">
                  <div className="flex text-brand-orange mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="font-body text-xl text-brand-brown font-medium leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-brand-brown/10">
                  <div className="w-14 h-14 bg-brand-green border-2 border-brand-brown flex items-center justify-center font-display text-2xl text-brand-cream">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-brand-brown uppercase tracking-wider text-lg">{review.name}</p>
                    <p className="font-body text-xs text-brand-orange font-bold uppercase tracking-widest">{review.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 ABOUT US - RETRO EDITORIAL */}
      <section className="py-32 bg-brand-green border-b-8 border-brand-brown relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 text-brand-cream">
              <span className="text-brand-orange font-display font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Our Story</span>
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-8 tracking-tight leading-tight">Locally<br/>Owned</h2>
              <div className="w-20 h-2 bg-brand-orange mb-8 border-2 border-brand-brown"></div>
              <p className="font-body text-2xl text-white/90 font-medium leading-relaxed mb-10">
                For over a decade, Go Nuts Garage Doors has been the trusted choice for homeowners in Granbury. We believe in doing things the right way the first time—combining premium materials with expert craftsmanship.
              </p>
              <button className="bg-brand-cream text-brand-brown border-2 border-brand-brown font-display text-xl uppercase tracking-widest px-12 py-5 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                Read Our Story
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-brand-cream border-4 border-brand-brown p-4 shadow-[16px_16px_0px_0px_rgba(41,37,36,1)] transform -rotate-2">
                <img 
                  src="/garage%20door%204.jpg"
                  alt="Go Nuts Garage Doors" 
                  className="w-full h-auto border-2 border-brand-brown object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 text-center">
                  <p className="font-display text-brand-brown uppercase tracking-widest text-xl">Est. 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAINTENANCE MEMBERSHIPS - BOLD POSTER STYLE */}
      <section className="py-12 bg-brand-blue border-b-8 border-brand-brown overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-brand-brown pb-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="inline-block border-4 border-brand-brown px-4 py-1 mb-3">
                <span className="font-display text-brand-brown uppercase tracking-[0.3em] text-sm">Protect Your Investment</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-brand-brown uppercase tracking-tight leading-none">Your Door Won't<br/>Break If We Check It.</h2>
            </div>
            <div className="md:text-right">
              <p className="font-display text-5xl md:text-6xl text-brand-orange leading-none">$149</p>
              <p className="font-body text-brand-brown/50 text-base line-through">$249 value</p>
              <p className="font-display text-brand-brown text-sm uppercase tracking-widest mt-1">Per Year · Cancel Anytime</p>
            </div>
          </motion.div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-0 border-4 border-brand-brown shadow-[8px_8px_0px_0px_rgba(41,37,36,1)]">

            {/* Col 1: What's Included */}
            <motion.div
              className="bg-brand-cream p-6 border-b-4 md:border-b-0 md:border-r-4 border-brand-brown"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="border-b-2 border-brand-brown pb-2 mb-5">
                <h3 className="font-display text-sm uppercase tracking-[0.3em] text-brand-brown">✦ What's Included</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Annual Tune-Up", sub: "Full inspection & adjustment" },
                  { title: "Lubrication", sub: "All moving parts serviced" },
                  { title: "Sensor Calibration", sub: "Safety testing & alignment" },
                  { title: "Hardware Check", sub: "Springs, cables & rollers" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green border-2 border-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-brand-cream" />
                    </div>
                    <div>
                      <p className="font-display text-brand-brown text-base uppercase tracking-wide leading-tight">{item.title}</p>
                      <p className="font-body text-brand-brown/50 text-sm mt-0.5">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Col 2: Center — Hero CTA */}
            <motion.div
              className="bg-brand-green p-6 border-b-4 md:border-b-0 md:border-r-4 border-brand-brown flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FFF 2px, transparent 2px)', backgroundSize: '25px 25px' }}></div>
              <div className="relative z-10">
                <div className="border-t-2 border-b-2 border-brand-cream/30 py-1.5 mb-5 text-center">
                  <p className="font-display text-brand-cream/50 tracking-[0.5em] text-sm uppercase">★ Shield Plan ★</p>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-brand-orange border-4 border-brand-cream/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="font-body text-brand-orange font-bold text-sm bg-brand-orange/20 border border-brand-orange/30 px-2 py-0.5 block mb-1">YOU SAVE $100</span>
                    <p className="font-body text-brand-cream/40 text-sm uppercase tracking-widest">vs. à la carte pricing</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "500+", label: "Members" },
                    { value: "15%", label: "Discount" },
                    { value: "24hr", label: "Priority" },
                    { value: "$0", label: "Call Fee" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 border border-white/10 p-2.5 text-center">
                      <p className="font-display text-2xl text-white leading-none">{stat.value}</p>
                      <p className="font-body text-white/40 text-sm uppercase tracking-wider mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-5">
                <button className="w-full bg-brand-orange text-white border-2 border-brand-brown font-display text-base uppercase tracking-widest py-3.5 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[0px_0px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all">
                  Join Now →
                </button>
                <p className="font-body text-brand-cream/30 text-sm mt-2 uppercase tracking-widest text-center">No Contracts · No Risk</p>
              </div>
            </motion.div>

            {/* Col 3: Member Perks + Social Proof */}
            <motion.div
              className="bg-brand-cream p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div>
                <div className="border-b-2 border-brand-brown pb-2 mb-5">
                  <h3 className="font-display text-sm uppercase tracking-[0.3em] text-brand-brown">✦ Member Perks</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    { perk: "15% Off All Parts & Labor", icon: <CreditCard className="w-3.5 h-3.5" /> },
                    { perk: "Priority 24hr Scheduling", icon: <Clock className="w-3.5 h-3.5" /> },
                    { perk: "No Emergency Call Fees", icon: <Phone className="w-3.5 h-3.5" /> },
                    { perk: "Exclusive Member Promos", icon: <Star className="w-3.5 h-3.5" /> },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-brand-orange border-2 border-brand-brown flex items-center justify-center flex-shrink-0 text-white">
                        {item.icon}
                      </div>
                      <span className="font-display text-brand-brown text-base uppercase tracking-wide">{item.perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-4 border-dashed border-brand-brown/30 pt-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-brand-orange" />)}
                  <span className="font-body text-brand-brown text-sm font-bold ml-1.5">500+ Happy Members</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex -space-x-2">
                    {['#e97b42','#2a5a5a','#c4623b','#4a8a8a'].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-brand-cream" style={{ backgroundColor: c }}></div>
                    ))}
                  </div>
                  <div className="border-2 border-brand-brown px-2 py-0.5">
                    <p className="font-display text-brand-brown text-sm uppercase tracking-widest">Local &amp; Trusted</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FINANCING SECTION - BOLD COLOR BLOCK */}
      <section className="py-14 bg-brand-orange border-b-8 border-brand-brown relative overflow-hidden">
        {/* Geometric Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-brown transform skew-x-12 translate-x-32 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <CreditCard className="w-10 h-10 text-brand-cream mb-4" />
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-4 tracking-tight leading-tight">Flexible Financing</h2>
              <p className="font-body text-lg text-white/90 mb-6 font-medium leading-relaxed">
                Don't let budget hold you back. We offer competitive plans to make any job affordable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "0% Interest for 12 Months (WAC)",
                  "Low Monthly Payment Options",
                  "Instant Approval Process",
                  "No Prepayment Penalties"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white font-display text-base tracking-wide uppercase">
                    <div className="w-6 h-6 bg-brand-cream border-2 border-brand-brown flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-brand-orange" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-brand-cream text-brand-brown border-2 border-brand-brown font-display text-base uppercase tracking-widest px-8 py-3 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                Apply Now
              </button>
            </div>

            <div className="relative lg:pl-12">
              <div className="bg-brand-cream border-4 border-brand-brown p-8 shadow-[8px_8px_0px_0px_rgba(41,37,36,1)] transform lg:rotate-3">
                <div className="text-center mb-6 border-b-4 border-brand-brown pb-6">
                  <p className="font-display text-2xl text-brand-brown uppercase tracking-widest mb-2">As Low As</p>
                  <p className="font-display text-6xl text-brand-green tracking-tight">$49<span className="text-2xl text-brand-brown/50 tracking-normal">/mo</span></p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-brand-brown p-3 flex justify-between items-center shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]">
                    <span className="font-display text-base text-brand-brown uppercase tracking-wide">New Installations</span>
                    <span className="font-body font-bold text-brand-orange uppercase tracking-widest text-sm">Eligible</span>
                  </div>
                  <div className="bg-white border-2 border-brand-brown p-3 flex justify-between items-center shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]">
                    <span className="font-display text-base text-brand-brown uppercase tracking-wide">Major Repairs</span>
                    <span className="font-body font-bold text-brand-orange uppercase tracking-widest text-sm">Eligible</span>
                  </div>
                  <div className="bg-white border-2 border-brand-brown p-3 flex justify-between items-center shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]">
                    <span className="font-display text-base text-brand-brown uppercase tracking-wide">Opener Upgrades</span>
                    <span className="font-body font-bold text-brand-orange uppercase tracking-widest text-sm">Eligible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET THE TEAM - POLAROID/RETRO PORTRAITS */}
      <section className="py-32 bg-brand-cream border-b-8 border-brand-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-display font-bold tracking-[0.3em] uppercase text-sm mb-6 block">The Faces Behind The Quality</span>
            <h2 className="font-display text-5xl md:text-7xl text-brand-brown uppercase tracking-tight leading-tight">Meet The Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group">
              <div className="bg-white border-4 border-brand-brown p-6 pb-12 shadow-[12px_12px_0px_0px_rgba(41,37,36,1)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 mb-8">
                <div className="relative overflow-hidden border-2 border-brand-brown aspect-[4/5] bg-brand-green/10 mb-6">
                  <img 
                    src="/trey.png" 
                    alt="Trey Harless" 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-4xl text-brand-brown uppercase tracking-tight mb-2">Trey Harless</h3>
                  <p className="font-body text-brand-orange font-bold uppercase tracking-widest text-sm">Owner</p>
                </div>
              </div>
              <p className="font-body text-xl text-brand-brown/80 font-medium leading-relaxed text-center px-4">
                Trey brings years of hands-on expertise and a highly energetic approach to ensuring every Granbury home gets top-tier service.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="bg-white border-4 border-brand-brown p-6 pb-12 shadow-[12px_12px_0px_0px_rgba(41,37,36,1)] transform rotate-2 hover:rotate-0 transition-transform duration-500 mb-8">
                <div className="relative overflow-hidden border-2 border-brand-brown aspect-[4/5] bg-brand-orange/10 mb-6">
                  <img 
                    src="/mckena.png" 
                    alt="Mckena Harless" 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-4xl text-brand-brown uppercase tracking-tight mb-2">Mckena Harless</h3>
                  <p className="font-body text-brand-orange font-bold uppercase tracking-widest text-sm">Owner</p>
                </div>
              </div>
              <p className="font-body text-xl text-brand-brown/80 font-medium leading-relaxed text-center px-4">
                Mckena leads our operations with a focus on customer satisfaction, ensuring our team is always ready to leap into action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMMUNITY INVOLVEMENT */}
      <div className="border-b-8 border-brand-brown">
        <CommunityInvolvement />
      </div>

      {/* 10. CAREERS / HIRING - BOLD BANNER */}
      <section className="py-16 bg-brand-orange border-b-8 border-brand-brown relative overflow-hidden">
        {/* Retro Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #754839 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-brand-cream border-8 border-brand-brown shadow-[12px_12px_0px_0px_rgba(41,37,36,1)] p-8 md:p-10 relative overflow-hidden">
            {/* "WANTED" Stamp effect */}
            <div className="absolute -top-10 -right-10 md:top-10 md:right-10 rotate-12 opacity-20 pointer-events-none">
              <span className="font-display text-7xl md:text-[10rem] text-brand-brown uppercase tracking-tighter leading-none">Hiring</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-brown text-brand-cream px-4 py-1.5 border-4 border-brand-brown mb-6 shadow-[4px_4px_0px_0px_rgba(255,244,200,1)]">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-display text-lg uppercase tracking-widest">Careers</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase mb-6 tracking-tighter leading-[0.9]">
                  Join Our<br/>Elite Team
                </h2>
                <p className="font-body text-xl text-brand-brown font-bold mb-8 leading-relaxed max-w-xl">
                  We are looking for driven, professional technicians and support staff to join our growing family in Granbury.
                </p>
                <button className="bg-brand-green text-white border-4 border-brand-brown font-display text-xl uppercase tracking-widest px-8 py-4 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] hover:shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all w-full md:w-auto">
                  View Open Positions
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Top Pay", desc: "Competitive salary & bonuses", icon: <CreditCard className="w-6 h-6" /> },
                  { title: "Benefits", desc: "Health, dental, & vision", icon: <ShieldCheck className="w-6 h-6" /> },
                  { title: "Training", desc: "Paid ongoing education", icon: <Wrench className="w-6 h-6" /> },
                  { title: "Growth", desc: "Clear path to advancement", icon: <Star className="w-6 h-6" /> }
                ].map((perk, i) => (
                  <div key={i} className="bg-white border-4 border-brand-brown p-4 shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] transition-all group">
                    <div className="w-10 h-10 bg-brand-orange border-4 border-brand-brown flex items-center justify-center text-brand-brown mb-3 group-hover:bg-brand-brown group-hover:text-brand-orange transition-colors">
                      {perk.icon}
                    </div>
                    <h3 className="font-display text-xl text-brand-brown uppercase tracking-wide mb-1">{perk.title}</h3>
                    <p className="font-body text-sm font-bold text-brand-brown/70">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SERVICE AREAS */}
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

      {/* STICKY MOBILE CALL BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-cream border-t-4 border-brand-brown z-50 md:hidden">
        <a 
          href="tel:8175551234" 
          className="w-full bg-brand-orange text-white border-2 border-brand-brown text-center py-4 font-display text-xl uppercase tracking-widest flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all"
        >
          <Phone className="w-6 h-6 mr-3" /> Call Now
        </a>
      </div>

    </div>
  );
}
