import React from 'react';
import { Users, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & Lead Technician',
      bio: 'With over 15 years of experience in the garage door industry, John founded Go Nuts to bring honest, reliable service to Granbury.',
      image: 'https://picsum.photos/seed/john/400/400'
    },
    {
      name: 'Jane Smith',
      role: 'Customer Success Manager',
      bio: 'Jane ensures every customer has a smooth experience from the first call to the final inspection. She\'s the friendly voice on the phone!',
      image: 'https://picsum.photos/seed/jane/400/400'
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Installer',
      bio: 'Mike is our go-to expert for complex custom door installations. His attention to detail is unmatched.',
      image: 'https://picsum.photos/seed/mike/400/400'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pt-40 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70"
            alt="Luxury Home Exterior"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight mb-6">
            Our <span className="text-brand-orange">Story</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Elevating the standard of garage door service in Granbury with uncompromising quality and dedication.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-display text-5xl text-brand-brown uppercase tracking-tight mb-8">A Legacy of <br/><span className="text-brand-orange">Excellence</span></h2>
              <div className="prose prose-lg text-brand-brown/80 font-body font-light leading-relaxed">
                <p className="mb-6">
                  Go Nuts Garage Door was founded on a simple principle: treat every customer like a neighbor. Based right here in Granbury, TX, we saw a need for a garage door company that prioritized honesty, speed, and quality workmanship over high-pressure sales tactics.
                </p>
                <p className="mb-8">
                  We're not a massive national franchise. We're a local team dedicated to serving the Fort Worth Metroplex with the kind of service that makes you want to tell your friends. When you call us, you're getting experienced technicians who know how to fix it right the first time.
                </p>
              </div>
              <div className="flex items-center text-brand-green font-display text-xl uppercase tracking-wider">
                <CheckCircle className="w-6 h-6 mr-3 text-brand-orange" />
                Locally Owned & Operated
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70"
                  alt="Our Team at Work"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">Meet the <span className="text-brand-orange">Experts</span></h2>
            <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto">
              The dedicated professionals behind Granbury's premier garage door service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-brand-green rounded-[2rem] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 -z-10 opacity-0 group-hover:opacity-10"></div>
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-brand-brown/5 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8 text-center relative bg-white">
                    <h3 className="font-display text-3xl text-brand-green uppercase tracking-tight mb-2">{member.name}</h3>
                    <p className="font-display text-brand-orange uppercase tracking-[0.2em] text-xs mb-6">{member.role}</p>
                    <p className="font-body text-brand-brown/70 font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Join the Team CTA */}
          <div className="mt-24 relative rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-green"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 mix-blend-overlay object-cover"></div>
            <div className="relative z-10 p-16 md:p-24 text-center">
              <h3 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">Join Our <span className="text-brand-orange">Legacy</span></h3>
              <p className="font-body text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
                We're always looking for exceptional talent to join the Go Nuts family. Discover your next career move.
              </p>
              <button 
                onClick={() => setCurrentPage('careers')}
                className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center group"
              >
                Explore Careers <ArrowRight className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl text-brand-brown uppercase tracking-tight mb-6">Our <span className="text-brand-orange">Principles</span></h2>
            <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto">
              The core values that guide every installation, repair, and customer interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: "We don't cut corners. From the parts we use to the final inspection, we demand the highest quality in everything we do." },
              { icon: Heart, title: 'Integrity', desc: "Honest pricing, clear communication, and no hidden fees. We recommend what you need, nothing more." },
              { icon: Users, title: 'Community', desc: "Granbury is our home. We're committed to giving back and supporting the neighborhoods we serve." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2rem] shadow-xl border border-brand-brown/5 hover:shadow-2xl transition-shadow duration-300 group">
                <div className="w-20 h-20 rounded-2xl bg-brand-cream flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-3xl text-brand-green uppercase tracking-tight mb-4">{value.title}</h3>
                <p className="font-body text-brand-brown/70 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Mascot */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 bg-white/5 backdrop-blur-md rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl"></div>
                <img
                  src="https://storage.googleapis.com/aistudio-user-uploads-us-central1/01jpd4j941ey7v84v6xnt78c77/Go_Nuts_Garage_Door_Mascot.png"
                  alt="Nutty the Mascot"
                  className="w-48 sm:w-64 md:w-72 h-auto relative z-10 drop-shadow-2xl transform transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-display text-5xl text-white uppercase tracking-tight mb-6">Meet <span className="text-brand-orange">Nutty!</span></h2>
              <p className="font-body text-xl text-white/80 font-light mb-10 leading-relaxed">
                Nutty is our chief morale officer and mascot. He represents our energetic approach to solving your garage door problems. Always ready with a wrench and a thumbs up, Nutty guarantees you'll go nuts for our service!
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-brand-green font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full transition-all duration-300"
              >
                Say Hi to the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-brown"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight mb-10">Experience the <br/><span className="text-brand-orange">Difference</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('book')}
              className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Schedule Service
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
