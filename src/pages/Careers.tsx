import React from 'react';
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

interface CareersProps {
  setCurrentPage: (page: string) => void;
}

export default function Careers({ setCurrentPage }: CareersProps) {
  const jobs = [
    {
      title: 'Garage Door Technician',
      type: 'Full-Time',
      location: 'Granbury, TX',
      desc: 'We are looking for an experienced technician to join our fast-growing team. Must have a clean driving record and excellent customer service skills.'
    },
    {
      title: 'Customer Service Representative',
      type: 'Full-Time',
      location: 'Granbury, TX',
      desc: 'Join our office team! You will be the first point of contact for our customers, scheduling appointments and answering questions.'
    },
    {
      title: 'Apprentice Technician',
      type: 'Full-Time',
      location: 'Granbury, TX',
      desc: 'Looking to start a career in the trades? We offer paid training for motivated individuals who want to learn the garage door business.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight mb-6">
            Join Our <span className="text-brand-orange">Team</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Build a rewarding career with Granbury's top-rated garage door company.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-display text-5xl text-brand-brown uppercase tracking-tight mb-8">Why Choose <br/><span className="text-brand-orange">Go Nuts?</span></h2>
              <div className="prose prose-lg text-brand-brown/80 font-body font-light leading-relaxed mb-10">
                <p>
                  At Go Nuts Garage Door, we believe that taking care of our employees is the best way to take care of our customers. We offer a supportive work environment, competitive pay, and opportunities for advancement.
                </p>
              </div>
              <ul className="space-y-6 font-body text-lg text-brand-brown/80 font-light">
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Competitive Salary & Performance Bonuses
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Health, Dental, and Vision Insurance
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Paid Time Off & Holidays
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Company Vehicle & Tools Provided (for technicians)
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center mr-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  Ongoing Training & Career Development
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team Culture" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">Open <span className="text-brand-orange">Positions</span></h2>
            <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto">
              Find your next career opportunity with us.
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-10 rounded-[2rem] shadow-sm border border-brand-brown/5 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:-translate-y-1">
                <div className="flex-grow">
                  <h3 className="font-display text-3xl text-brand-green uppercase tracking-tight mb-3 group-hover:text-brand-orange transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-display text-brand-brown/60 uppercase tracking-[0.15em] mb-4">
                    <span className="bg-white px-4 py-1 rounded-full border border-brand-brown/10">{job.type}</span>
                    <span>•</span>
                    <span className="bg-white px-4 py-1 rounded-full border border-brand-brown/10">{job.location}</span>
                  </div>
                  <p className="font-body text-brand-brown/70 font-light leading-relaxed max-w-3xl">{job.desc}</p>
                </div>
                <button className="bg-brand-orange hover:bg-brand-green text-white font-display text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap flex-shrink-0">
                  Apply Now
                </button>
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
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight mb-6">Don't See the <br/><span className="text-brand-orange">Right Fit?</span></h2>
          <p className="font-body text-xl text-white/80 font-light mb-10">
            We're always looking for great people. Send us your resume and we'll keep it on file!
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
