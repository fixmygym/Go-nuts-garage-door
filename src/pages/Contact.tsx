import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Thank you for contacting Go Nuts Garage Door! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 sm:pt-40 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595844730298-b960fa25fa48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=70"
            alt="Luxury Garage"
            className="w-full h-full object-cover opacity-20"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tight mb-6">
            Get in <span className="text-brand-orange">Touch</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            We're here to help! Reach out for questions, quotes, or emergency service.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="font-display text-5xl text-brand-brown uppercase tracking-tight mb-8">Connect <br/><span className="text-brand-orange">With Us</span></h2>
              <p className="font-body text-lg text-brand-brown/70 font-light mb-12 leading-relaxed">
                Whether you need a quick repair, a complete installation, or just have a question about your garage door, the Go Nuts team is ready to assist you.
              </p>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-6 group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-1">Phone</h3>
                    <p className="font-body text-brand-brown text-lg font-light">
                      <a href="tel:8175551234" className="hover:text-brand-orange transition-colors">(817) 555-1234</a>
                    </p>
                    <p className="font-body text-sm text-brand-brown/50 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-6 group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-1">Email</h3>
                    <p className="font-body text-brand-brown text-lg font-light">
                      <a href="mailto:info@gonutsgaragedoor.com" className="hover:text-brand-orange transition-colors">info@gonutsgaragedoor.com</a>
                    </p>
                    <p className="font-body text-sm text-brand-brown/50 mt-1">We typically reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-6 group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-1">Location</h3>
                    <p className="font-body text-brand-brown text-lg font-light">
                      123 Nutty Lane<br />
                      Granbury, TX 76048
                    </p>
                    <p className="font-body text-sm text-brand-brown/50 mt-1">Serving the DFW Metroplex</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-brand-brown/5 flex items-center justify-center mr-6 group-hover:bg-brand-orange transition-colors duration-300 flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-brand-green uppercase tracking-tight mb-1">Hours</h3>
                    <p className="font-body text-brand-brown text-lg font-light">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 2pm<br />
                      Sunday: Closed (Emergency Only)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 relative">
              <div className="absolute inset-0 bg-brand-green rounded-[3rem] transform translate-x-2 translate-y-2 opacity-10 -z-10"></div>
              <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-brand-brown/5 relative z-10">
                <h2 className="font-display text-4xl md:text-5xl text-brand-green uppercase tracking-tight mb-10">Send a <span className="text-brand-orange">Message</span></h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                        placeholder="(817) 555-1234"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">How can we help?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300 resize-none"
                      placeholder="Describe your garage door issue..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-green text-white font-display text-sm uppercase tracking-[0.15em] px-8 py-5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
                  >
                    Send Message <Send className="w-5 h-5 ml-3 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-brown"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight mb-6">Need Immediate <br/><span className="text-brand-orange">Assistance?</span></h2>
          <p className="font-body text-xl text-white/80 font-light mb-10">Skip the form and call us directly for emergency service or fast scheduling.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:8175551234"
              className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              Call Now: (817) 555-1234
            </a>
            <button 
              onClick={() => setCurrentPage('book')}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-brown font-display text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Book Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
