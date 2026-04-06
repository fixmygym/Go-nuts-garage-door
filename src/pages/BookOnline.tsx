import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface BookOnlineProps {
  setCurrentPage: (page: string) => void;
}

export default function BookOnline({ setCurrentPage }: BookOnlineProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, serviceType: service });
    handleNext();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual booking logic
    alert('Booking confirmed! We will contact you shortly to confirm your appointment.');
    setCurrentPage('home');
  };

  const services = [
    'Emergency Repair',
    'Spring Replacement',
    'Opener Repair/Install',
    'Door Off Track',
    'New Door Estimate',
    'Annual Maintenance',
    'Other/Not Sure'
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pt-36 pb-24 sm:pt-40 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B3B36 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-brand-green uppercase tracking-tight mb-6">
            Book <span className="text-brand-orange">Service</span>
          </h1>
          <p className="font-body text-xl text-brand-brown/70 font-light max-w-2xl mx-auto leading-relaxed">
            Fast, easy scheduling for all your garage door needs. Experience the Go Nuts difference.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-brand-brown/10 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-brand-orange z-0 transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-display text-lg transition-all duration-500 ${
                  step >= num 
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-110' 
                    : 'bg-white border border-brand-brown/10 text-brand-brown/40'
                }`}
              >
                {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 font-display text-xs uppercase tracking-[0.2em] text-brand-brown/50 px-2">
            <span className={step >= 1 ? 'text-brand-orange' : ''}>Service</span>
            <span className={step >= 2 ? 'text-brand-orange' : ''}>Time</span>
            <span className={step >= 3 ? 'text-brand-orange' : ''}>Details</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-brand-green rounded-[3rem] transform translate-x-2 translate-y-2 opacity-5 -z-10"></div>
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-brand-brown/5 p-6 sm:p-10 md:p-16 relative z-10 overflow-hidden">
            
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase tracking-tight mb-10 text-center">What do you need help with?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className={`p-6 rounded-2xl border text-left font-display text-xl uppercase tracking-wide transition-all duration-300 group ${
                        formData.serviceType === service 
                          ? 'border-brand-orange bg-brand-orange/5 text-brand-orange shadow-md' 
                          : 'border-brand-brown/10 text-brand-green hover:border-brand-orange hover:bg-[#FAF8F5] hover:shadow-md hover:-translate-y-1'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service}</span>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${formData.serviceType === service ? 'translate-x-1 text-brand-orange' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-brand-orange'}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase tracking-tight mb-10 text-center">When should we come?</h2>
                
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div>
                    <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-brand-orange" /> Preferred Date
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-brand-orange" /> Preferred Time Window
                    </label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a time window...</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 6pm)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-12 max-w-2xl mx-auto">
                  <button 
                    onClick={handleBack}
                    className="flex items-center text-brand-brown/60 hover:text-brand-orange font-display text-sm uppercase tracking-[0.15em] transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1" /> Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!formData.date || !formData.time}
                    className="bg-brand-orange hover:bg-brand-green disabled:bg-brand-brown/10 disabled:text-brand-brown/40 disabled:cursor-not-allowed text-white font-display text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center group"
                  >
                    Next Step <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-display text-3xl md:text-4xl text-brand-brown uppercase tracking-tight mb-10 text-center">Your Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Full Name *</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Phone Number *</label>
                      <input 
                        type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Email Address</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-brand-orange" /> Service Address *
                    </label>
                    <input 
                      type="text" name="address" required value={formData.address} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300"
                      placeholder="123 Main St, Granbury, TX 76048"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-sm text-brand-brown uppercase tracking-[0.15em] mb-3">Additional Notes</label>
                    <textarea 
                      name="notes" rows={3} value={formData.notes} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-brand-brown/10 bg-[#FAF8F5] focus:bg-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 font-body text-brand-green outline-none transition-all duration-300 resize-none"
                      placeholder="Gate code, specific issues, etc."
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-brand-brown/5">
                    <button 
                      type="button" onClick={handleBack}
                      className="flex items-center text-brand-brown/60 hover:text-brand-orange font-display text-sm uppercase tracking-[0.15em] transition-colors group"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1" /> Back
                    </button>
                    <button 
                      type="submit"
                      className="bg-brand-green hover:bg-brand-orange text-white font-display text-sm uppercase tracking-[0.15em] px-10 py-5 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center group"
                    >
                      Confirm Booking <CheckCircle2 className="w-5 h-5 ml-3 text-brand-orange group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
