import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Briefcase, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="relative text-white pt-16 pb-8 overflow-hidden">
      {/* Wood Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/blank-brown-wooden-textured-background (3).jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Dark Overlay to ensure text readability and maintain brand color */}
      <div className="absolute inset-0 z-0 bg-brand-brown/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-cream/20 pb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/GoNuts_Logo_forTM.png" 
              alt="Go Nuts Garage Door" 
              className="h-32 w-auto mb-6 drop-shadow-xl"
            />
            <p className="font-body text-brand-cream/80 mb-6">
              Go Nuts for the Best Garage Door Service in Granbury, TX! Fast, reliable, and local.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-cream hover:text-brand-orange transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-brand-cream hover:text-brand-orange transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-brand-cream hover:text-brand-orange transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-2xl text-brand-orange mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-orange transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">Services</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-2xl text-brand-orange mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 font-body">
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">Emergency Repair</button></li>
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">Spring Replacement</button></li>
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">New Installations</button></li>
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">Maintenance Plans</button></li>
              <li><button onClick={() => setCurrentPage('repair')} className="hover:text-brand-orange transition-colors">Opener Repair</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl text-brand-orange mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                <span>123 Nutty Lane<br />Granbury, TX 76048</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                <a href="tel:8175551234" className="hover:text-brand-orange transition-colors">(817) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" />
                <a href="mailto:info@gonutsgaragedoor.com" className="hover:text-brand-orange transition-colors">info@gonutsgaragedoor.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center font-body text-sm text-brand-cream/60">
          <p>&copy; {new Date().getFullYear()} Go Nuts Garage Door. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
