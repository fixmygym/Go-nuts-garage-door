/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Repair from './pages/Repair';
import Services1 from './pages/Services1';
import Services2 from './pages/Services2';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';
import BookOnline from './pages/BookOnline';
import Careers from './pages/Careers';
import { Phone, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} isHome2={false} />;
      case 'home2':
        return <Home2 setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'repair':
        return <Repair setCurrentPage={setCurrentPage} />;
      case 'services1':
        return <Services1 setCurrentPage={setCurrentPage} />;
      case 'services2':
        return <Services2 setCurrentPage={setCurrentPage} />;
      case 'areas':
        return <ServiceAreas setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'book':
        return <BookOnline setCurrentPage={setCurrentPage} />;
      case 'careers':
        return <Careers setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} isHome2={false} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-brand-brown bg-white selection:bg-brand-orange selection:text-white relative">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Mobile CTA */}
      <a 
        href="tel:8175551234"
        className="md:hidden fixed bottom-6 right-6 bg-brand-orange text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Phone className="w-8 h-8" />
      </a>
    </div>
  );
}
