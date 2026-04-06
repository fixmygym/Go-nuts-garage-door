/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';

// Lazy-load every page so only the current page's code is downloaded
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Repair = lazy(() => import('./pages/Repair'));
const Services1 = lazy(() => import('./pages/Services1'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const Contact = lazy(() => import('./pages/Contact'));
const BookOnline = lazy(() => import('./pages/BookOnline'));
const Careers = lazy(() => import('./pages/Careers'));

// Minimal loading fallback — matches site background so there's no flash
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" aria-hidden="true" />
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'repair':
        return <Repair setCurrentPage={setCurrentPage} />;
      case 'services1':
        return <Services1 setCurrentPage={setCurrentPage} />;
      case 'areas':
        return <ServiceAreas setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'book':
        return <BookOnline setCurrentPage={setCurrentPage} />;
      case 'careers':
        return <Careers setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-brand-brown bg-white selection:bg-brand-orange selection:text-white relative">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {renderPage()}
        </Suspense>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Mobile CTA — pulse ring instead of bounce to save battery */}
      <a
        href="tel:8175551234"
        className="md:hidden fixed bottom-6 right-6 bg-brand-orange text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center"
        aria-label="Call us now"
      >
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-50 animate-ping" style={{ animationDuration: '2s' }} />
        <Phone className="w-7 h-7 relative" />
      </a>
    </div>
  );
}
