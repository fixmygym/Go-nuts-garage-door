import React from 'react';
import { Heart } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section className="py-16 bg-brand-cream border-t border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Heart className="w-16 h-16 text-brand-orange mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-5xl text-brand-brown uppercase mb-6">Proudly Supporting Our Community</h2>
        <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full mb-8"></div>
        <p className="font-body text-xl text-brand-green max-w-3xl mx-auto leading-relaxed">
          At Go Nuts Garage Door, Granbury isn't just where we work—it's our home. We believe in giving back to the neighborhoods that support us. From sponsoring local youth sports teams to participating in community events, we are dedicated to making the Fort Worth Metroplex a better place for everyone.
        </p>
      </div>
    </section>
  );
}
