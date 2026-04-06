import React from 'react';
import { Wrench, ShieldAlert, Settings, ArrowRight, CheckCircle2, Clock, ThumbsUp, MapPin, PhoneCall, Star } from 'lucide-react';

interface RepairProps {
  setCurrentPage: (page: string) => void;
}

export default function Repair({ setCurrentPage }: RepairProps) {
  const services = [
    {
      id: 'springs',
      title: 'Broken Spring Replacement',
      icon: <Wrench className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'Torsion and extension springs are under immense tension. When they break, your door won\'t open. We safely replace them with high-cycle, durable springs.',
      bullets: ['High-cycle springs available', 'Same-day replacement', 'Safety inspection included']
    },
    {
      id: 'openers',
      title: 'Opener Repair & Installation',
      icon: <Settings className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'Is your opener grinding, humming, or completely dead? We repair all major brands and install quiet, smart openers with Wi-Fi connectivity.',
      bullets: ['LiftMaster & Chamberlain experts', 'Gear and sprocket replacement', 'Smart home integration']
    },
    {
      id: 'cables',
      title: 'Cable Repair',
      icon: <ShieldAlert className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'Frayed or snapped cables can cause your door to hang unevenly or crash down. We replace cables quickly to restore safe operation.',
      bullets: ['Heavy-duty aircraft cables', 'Preventative maintenance', 'Balance adjustment']
    },
    {
      id: 'off-track',
      title: 'Doors Off Track',
      icon: <Wrench className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'A door off its tracks is dangerous and unusable. We realign the tracks, replace damaged rollers, and ensure smooth, quiet movement.',
      bullets: ['Track realignment', 'Roller replacement (nylon/steel)', 'Lubrication service']
    },
    {
      id: 'panels',
      title: 'Panel Replacement',
      icon: <Settings className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'Accidentally backed into your door? We can often replace individual damaged panels instead of the entire door, saving you money.',
      bullets: ['Color and style matching', 'Structural reinforcement', 'Cost-effective solutions']
    },
    {
      id: 'maintenance',
      title: 'Annual Tune-Ups',
      icon: <CheckCircle2 className="w-12 h-12 text-brand-orange mb-4" />,
      desc: 'Prevent costly repairs with our comprehensive annual maintenance plan. We inspect, lubricate, and adjust all moving parts.',
      bullets: ['25-point safety inspection', 'Extend the life of your door', 'Priority scheduling']
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pt-40 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=70&w=1200"
            alt="Garage Door Repair"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight mb-6">
            Expert <span className="text-brand-orange">Repair</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Premium, reliable solutions for every garage door problem in Granbury and the DFW Metroplex.
          </p>
          <button 
            onClick={() => setCurrentPage('book')}
            className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-5 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center group"
          >
            Get It Fixed Today <ArrowRight className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Overview / SEO Content Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-display text-5xl text-brand-brown uppercase tracking-tight mb-8">Comprehensive <br/><span className="text-brand-orange">Solutions</span></h2>
              <div className="prose prose-lg text-brand-brown/80 font-body font-light leading-relaxed mb-10">
                <p>
                  When your garage door stops working, it disrupts your entire day. At Go Nuts Garage Doors, we understand the urgency of getting your door back on track. Our team of certified technicians is equipped to handle everything from routine maintenance to complex repairs and full installations.
                </p>
                <p>
                  We pride ourselves on delivering top-tier service with transparent pricing. Whether you're dealing with a snapped spring, a malfunctioning opener, or a door that's completely off its tracks, we have the expertise to fix it right the first time.
                </p>
              </div>
              <ul className="space-y-6 font-body text-lg text-brand-brown/80 font-light">
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Licensed & Insured Technicians
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Same-Day Service Available
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Upfront, Honest Pricing
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=70&w=900"
                  alt="Garage Door Repair Technician"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">What We <span className="text-brand-orange">Fix</span></h2>
            <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto">
              From broken springs to complete door replacements, our experienced technicians handle it all with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-[#FAF8F5] rounded-[2rem] p-10 shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-brand-brown/5 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<{ className: string }>, { className: "w-8 h-8 text-brand-orange mb-0" })}
                </div>
                <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <p className="font-body text-brand-brown/70 font-light mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <ul className="space-y-4 font-body text-sm text-brand-brown/80 font-light mb-8">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                      <span className="mt-0.5">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setCurrentPage('book')}
                  className="w-full bg-white border border-brand-brown/10 text-brand-green hover:bg-brand-orange hover:text-white hover:border-brand-orange font-display text-sm uppercase tracking-[0.15em] py-4 rounded-full transition-all duration-300 mt-auto"
                >
                  Schedule Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">The Go Nuts <span className="text-brand-orange">Difference</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group bg-white p-12 rounded-[2.5rem] shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#FAF8F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-brown/5 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4">Fast Response</h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed">We know a broken garage door is a major inconvenience. We offer prompt scheduling and same-day service for emergencies.</p>
            </div>
            <div className="text-center group bg-white p-12 rounded-[2.5rem] shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#FAF8F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-brown/5 group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4">Quality Parts</h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed">We use only the highest quality, commercial-grade parts to ensure your repair lasts for years to come.</p>
            </div>
            <div className="text-center group bg-white p-12 rounded-[2.5rem] shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#FAF8F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-brown/5 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4">Local Experts</h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed">As a locally owned business in Granbury, we treat our customers like neighbors, providing honest advice and fair prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">How It <span className="text-brand-orange">Works</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
            {[
              { step: '1', title: 'Contact Us', desc: 'Call or book online to schedule your service appointment.' },
              { step: '2', title: 'Inspection', desc: 'Our tech arrives, inspects the door, and diagnoses the issue.' },
              { step: '3', title: 'Upfront Quote', desc: 'We provide a clear, no-obligation estimate before any work begins.' },
              { step: '4', title: 'Expert Repair', desc: 'We fix the problem quickly and ensure your door operates safely.' }
            ].map((item, index) => (
              <div key={index} className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10 font-display text-3xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="font-body text-white/70 font-light leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="absolute inset-0 bg-brand-orange rounded-[3rem] transform translate-x-2 translate-y-2 opacity-10 -z-10"></div>
          <div className="bg-brand-orange text-white text-center py-20 px-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <ShieldAlert className="w-16 h-16 mx-auto mb-8 opacity-90 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-6">Stuck in the Garage?</h2>
            <p className="font-body text-xl mb-10 font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              We offer 24/7 emergency service for those times when you absolutely need to get out (or in). Don't wait, call us right now!
            </p>
            <a 
              href="tel:8175551234"
              className="bg-white text-brand-orange hover:bg-brand-green hover:text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-5 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
            >
              <PhoneCall className="w-5 h-5 mr-3" /> Call (817) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Expanded Reviews Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">What The Neighborhood <span className="text-brand-orange">Says</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Mark T.', location: 'Granbury, TX', text: 'My garage door spring snapped on a Sunday morning. Go Nuts was here within an hour and had it fixed fast. Amazing service!' },
              { name: 'Sarah L.', location: 'Weatherford, TX', text: 'Very professional and honest. They didn\'t try to upsell me on a new opener, just fixed the gear on my old one. Highly recommend.' },
              { name: 'David W.', location: 'Aledo, TX', text: 'The technician was polite, knowledgeable, and cleaned up after the job. The new rollers make my door so much quieter.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-brand-brown/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-orange fill-current" />
                  ))}
                </div>
                <p className="font-body text-lg text-brand-brown/80 font-light italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-brand-brown/5 flex items-center justify-center font-display text-xl text-brand-orange">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-brand-green uppercase tracking-wider">{review.name}</p>
                    <p className="font-body text-xs text-brand-brown/50 uppercase tracking-[0.15em]">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">Common <span className="text-brand-orange">Questions</span></h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FAF8F5] p-8 rounded-[2rem] border border-brand-brown/5 hover:shadow-md transition-all duration-300">
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4 flex items-center">
                <div className="w-1.5 h-6 bg-brand-orange rounded-full mr-4"></div>
                How much does a spring replacement cost?
              </h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed pl-6">Costs vary depending on the size and weight of your door, which determines the type of spring needed. We always provide a clear, upfront estimate before starting any work.</p>
            </div>
            <div className="bg-[#FAF8F5] p-8 rounded-[2rem] border border-brand-brown/5 hover:shadow-md transition-all duration-300">
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4 flex items-center">
                <div className="w-1.5 h-6 bg-brand-orange rounded-full mr-4"></div>
                Can I replace a broken spring myself?
              </h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed pl-6">We strongly advise against it. Garage door springs are under extreme tension and can cause severe injury or property damage if handled incorrectly. Always call a professional.</p>
            </div>
            <div className="bg-[#FAF8F5] p-8 rounded-[2rem] border border-brand-brown/5 hover:shadow-md transition-all duration-300">
              <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-4 flex items-center">
                <div className="w-1.5 h-6 bg-brand-orange rounded-full mr-4"></div>
                Why is my garage door opener making a grinding noise?
              </h3>
              <p className="font-body text-brand-brown/70 font-light leading-relaxed pl-6">A grinding noise usually indicates a worn-out gear and sprocket assembly inside the opener. This is a common repair that we can typically fix in one visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-brown"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight mb-6">Ready to get your <br/><span className="text-brand-orange">door fixed?</span></h2>
          <p className="font-body text-xl text-white/80 font-light mb-10">
            Schedule your service online or give us a call. We're ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('book')}
              className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Book Online Now
            </button>
            <a 
              href="tel:8175551234"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-brown font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <PhoneCall className="w-5 h-5 mr-3" /> (817) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
