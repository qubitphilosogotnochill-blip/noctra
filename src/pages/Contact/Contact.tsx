import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';
import type { ContactFormData } from '../../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    department: 'Private Residence Enquiries',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* =========================================================================
          HERO & CONTACT PHILOSOPHY
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-3">
              Concierge & Sanctuary Inquiries
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#EAE4D9] mb-6 leading-[0.95]">
              Contact the <br />
              <span className="italic font-normal text-[#C5AE8B]">sanctuary.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#77736A] font-light max-w-2xl leading-relaxed">
              Whether you are arranging a discreet private residence takeover, bespoke speleological expedition, or confidential arrival protocols, our Chief Concierge desk remains at your perpetual disposal.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT GRID
          ========================================================================= */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Information & Location Dossier */}
            <div className="lg:col-span-5 space-y-12">
              {/* Direct Lines */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-6">
                  Direct Communications
                </h2>

                <div className="space-y-6">
                  <div className="p-5 bg-[#191918]/60 border border-[#292825] flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#C5AE8B] shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#77736A] block">
                        Direct Sanctuary Switchboard
                      </span>
                      <a
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="font-mono text-base text-[#EAE4D9] hover:text-[#C5AE8B] transition-colors"
                      >
                        {HOTEL_INFO.phone}
                      </a>
                      <span className="text-[11px] text-[#77736A] block mt-0.5">
                        24-Hour International Concierge
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-[#191918]/60 border border-[#292825] flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#C5AE8B] shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#77736A] block">
                        Encrypted Reservations Desk
                      </span>
                      <a
                        href={`mailto:${HOTEL_INFO.reservationsEmail}`}
                        className="font-mono text-sm sm:text-base text-[#EAE4D9] hover:text-[#C5AE8B] transition-colors break-all"
                      >
                        {HOTEL_INFO.reservationsEmail}
                      </a>
                      <span className="text-[11px] text-[#77736A] block mt-0.5">
                        Guaranteed response within 4 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coordinates & Geographic Position */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-4">
                  Subterranean Coordinates
                </h3>
                <div className="p-6 bg-[#141413] border border-[#292825] space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Location</span>
                    <span className="text-[#EAE4D9]">{HOTEL_INFO.location}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Grid References</span>
                    <span className="text-[#C5AE8B]">{HOTEL_INFO.coordinates}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Arrival Protocol</span>
                    <p className="text-[#77736A] font-sans font-light text-xs mt-1 leading-relaxed">
                      {HOTEL_INFO.arrivalDetails}
                    </p>
                  </div>
                </div>
              </div>

              {/* Press & Architecture Atelier */}
              <div className="pt-4 border-t border-[#292825]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A] block mb-2">
                  Architectural & Press Enquiries
                </span>
                <a
                  href={`mailto:${HOTEL_INFO.pressEmail}`}
                  className="text-xs text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors font-mono"
                >
                  {HOTEL_INFO.pressEmail}
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-[#191918] border border-[#292825] shadow-2xl">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B] block mb-2">
                  Encrypted Dispatch
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EAE4D9] font-light mb-6">
                  Initiate Confidential Contact
                </h3>

                {submitted ? (
                  <div className="p-8 bg-[#10100F] border border-[#C5AE8B]/40 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-[#C5AE8B] mx-auto" />
                    <h4 className="font-serif text-2xl text-[#EAE4D9]">
                      Dispatch Received by Sanctuary Desk
                    </h4>
                    <p className="text-xs text-[#77736A] max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Your inquiry has been routed to the {formData.department}. A senior liaison will contact you via {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          department: 'Private Residence Enquiries',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-[#C5AE8B] text-[#10100F] text-xs uppercase font-mono tracking-widest mt-4"
                    >
                      Send Another Dispatch
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3 bg-red-950/50 border border-red-800 text-red-200 text-xs">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full title and name"
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@sanctuary.com"
                          required
                          className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98200 00000"
                          className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Inquiry Department
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        <option value="Private Residence Enquiries">
                          Private Residence Enquiries
                        </option>
                        <option value="Underground Spa & Wellness Packages">
                          Underground Spa & Wellness Packages
                        </option>
                        <option value="Cripta Private Gastronomy Table">
                          Cripta Private Gastronomy Table
                        </option>
                        <option value="Exclusive Sanctuary Buyout & Events">
                          Exclusive Sanctuary Buyout & Events
                        </option>
                        <option value="Architectural Research & Press Liaison">
                          Architectural Research & Press Liaison
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Your Dispatch / Request *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please communicate your desired dates, party size, bespoke requests, or privacy protocols..."
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C5AE8B] hover:bg-[#DFCDB4] text-[#10100F] uppercase text-xs tracking-[0.25em] font-medium transition-all shadow-[0_4px_20px_rgba(197,174,139,0.15)] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Encrypted Dispatch</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
