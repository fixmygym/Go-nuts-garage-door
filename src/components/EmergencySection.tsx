import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export default function EmergencySection() {
  return (
    <section className="py-16 bg-brand-orange text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-brand-cream animate-pulse" />
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 drop-shadow-md">24/7 Emergency Garage Door Repair</h2>
        <p className="font-body text-xl mb-8 font-semibold text-brand-cream">
          Stuck in or out of your garage? Broken spring in the middle of the night? We offer round-the-clock emergency service to secure your home and get your life back on track.
        </p>
        <a 
          href="tel:8175551234"
          className="bg-white text-brand-orange hover:bg-brand-cream font-display text-2xl uppercase px-12 py-5 rounded shadow-xl transition-transform transform hover:scale-105 inline-flex items-center"
        >
          <Phone className="w-6 h-6 mr-3" />
          Call Now: (817) 555-1234
        </a>
      </div>
    </section>
  );
}
