import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function CommunityInvolvement() {
  return (
    <section className="py-24 bg-brand-cream border-t border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Heart className="w-12 h-12 text-brand-orange mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-brand-brown uppercase mb-6 tracking-tight">Proudly Serving <br/>Our Community</h2>
            <p className="font-body text-lg text-gray-700 mb-6 font-light leading-relaxed">
              Granbury isn't just where we work; it's our home. We believe in giving back to the community that has supported us for years. 
            </p>
            <p className="font-body text-lg text-gray-700 mb-8 font-light leading-relaxed">
              From sponsoring local youth sports teams to participating in Granbury's historic downtown events, we are committed to helping our community thrive. A portion of every installation goes directly to local Hood County charities.
            </p>
            <button className="font-display text-brand-green uppercase tracking-widest text-sm font-bold flex items-center hover:text-brand-orange transition-colors">
              Learn About Our Initiatives <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600" alt="Community Event" className="rounded-2xl w-full h-72 object-cover shadow-md" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" alt="Local Sponsorship" className="rounded-2xl w-full h-72 object-cover shadow-md mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}
