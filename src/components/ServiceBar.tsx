import React from 'react';
import { Wrench, ArrowUpCircle, Settings, AlertTriangle } from 'lucide-react';

interface Props {
  setCurrentPage: (page: string) => void;
}

export default function ServiceBar({ setCurrentPage }: Props) {
  const items = [
    { title: 'Garage Door Repair', icon: <Wrench className="w-8 h-8 mb-3 text-brand-orange" />, id: 'repair' },
    { title: 'Garage Door Installation', icon: <ArrowUpCircle className="w-8 h-8 mb-3 text-brand-orange" />, id: 'repair' },
    { title: 'Garage Door Openers', icon: <Settings className="w-8 h-8 mb-3 text-brand-orange" />, id: 'repair' },
    { title: 'Emergency Service', icon: <AlertTriangle className="w-8 h-8 mb-3 text-brand-orange" />, id: 'contact' },
  ];

  return (
    <div className="bg-brand-green py-6 border-y-4 border-brand-orange shadow-2xl relative z-20 -mt-12 mx-4 md:mx-auto max-w-6xl rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 divide-x-0 md:divide-x divide-brand-brown/30">
        {items.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentPage(item.id)}
            className="flex flex-col items-center justify-center p-4 hover:bg-brand-brown/20 transition-colors rounded-lg group"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="font-display text-white uppercase tracking-wider text-center text-sm md:text-lg mt-2">
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
