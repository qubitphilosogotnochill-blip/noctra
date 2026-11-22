import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';
import { SUITES } from '../../data/hotelData';
import type { ReservationFormData } from '../../types';

export const Reservations: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSuiteId = searchParams.get('suite') || 'obsidian-suite';

  // Form State
  const [formData, setFormData] = useState<ReservationFormData>({
    arrivalDate: '2026-12-10',
    departureDate: '2026-12-14',
    guests: 2,
    rooms: 1,
    suiteId: initialSuiteId,
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    flightArrival: 'Private Helicopter to Sahyadri Ridge Airlock',
    dietaryRestrictions: 'Subterranean Indian Mountain Degustation (No Restrictions)',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const suiteParam = searchParams.get('suite');
    if (suiteParam && SUITES.some((s) => s.id === suiteParam)) {
      setFormData((prev) => ({ ...prev, suiteId: suiteParam }));
    }
  }, [searchParams]);

  const selectedSuite = useMemo(() => {
    return SUITES.find((s) => s.id === formData.suiteId) || SUITES[0];
  }, [formData.suiteId]);

  // Calculate nights
  const numberOfNights = useMemo(() => {
    try {
      const arr = new Date(formData.arrivalDate);
      const dep = new Date(formData.departureDate);
      const diffTime = dep.getTime() - arr.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 3;
    }
  }, [formData.arrivalDate, formData.departureDate]);

  // Pricing calculations
  const suiteSubtotal = selectedSuite.priceINR * numberOfNights * formData.rooms;
  const preservationLevy = Math.round(suiteSubtotal * 0.05); // 5% Subterranean Conservation Levy
  const totalINR = suiteSubtotal + preservationLevy;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'guests' || name === 'rooms' ? parseInt(value, 10) || 1 : value,
    }));
    // Clear field error
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email is required for encrypted communications.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Direct telephone number is required.';
    }
    if (!formData.arrivalDate) newErrors.arrivalDate = 'Select arrival date.';
    if (!formData.departureDate) newErrors.departureDate = 'Select departure date.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate random luxury reference code
    const refCode = `NOC-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(refCode);
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-3">
              Direct Subterranean Reservation Portal
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#EAE4D9] mb-4">
              Reserve your <br />
              <span className="italic font-normal text-[#C5AE8B]">sanctuary.</span>
            </h1>
            <p className="text-sm text-[#77736A] font-light leading-relaxed">
              Every stay is strictly limited to preserve absolute acoustic quietude and personal seclusion.
              Submit your dates and suite preference below for immediate verification.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN FORM OR CONFIRMATION SCREEN
          ========================================================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {formSubmitted ? (
            /* ================= BOOKING CONFIRMATION SCREEN ================= */
            <div className="max-w-3xl mx-auto bg-[#191918] border border-[#C5AE8B]/40 p-8 sm:p-12 shadow-2xl relative">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3">
                <span className="px-3 py-1 bg-[#C5AE8B] text-[#10100F] font-mono text-xs uppercase font-bold tracking-widest">
                  Confirmed Demo Status
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-[#C5AE8B] mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#C5AE8B]" />
                <span>Sanctuary Reservation Lodged</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#EAE4D9] font-light mb-2">
                Welcome to NOCTRA, {formData.salutation} {formData.lastName}.
              </h2>
              <p className="text-xs sm:text-sm text-[#77736A] font-light mb-8">
                Your private subterranean dossier has been generated. Our Chief Concierge will coordinate your confidential arrival via private Sahyadri funicular terminal or Sahyadri Ridge helipad.
              </p>

              {/* Reference & Summary Card */}
              <div className="p-6 bg-[#10100F] border border-[#292825] space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-[#292825] gap-2">
                  <span className="text-xs uppercase font-mono text-[#77736A]">Reference Dossier</span>
                  <span className="font-mono text-base text-[#C5AE8B] font-bold tracking-wider">
                    {confirmationCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Residence</span>
                    <span className="text-[#EAE4D9] font-serif text-base">{selectedSuite.name}</span>
                    <span className="text-[#C5AE8B] text-[10px] block">{selectedSuite.depth}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Dates</span>
                    <span className="text-[#EAE4D9]">
                      {formData.arrivalDate} → {formData.departureDate}
                    </span>
                    <span className="text-[#77736A] text-[10px] block">
                      ({numberOfNights} Nights · {formData.guests} Guests)
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Contact</span>
                    <span className="text-[#EAE4D9]">{formData.email}</span>
                    <span className="text-[#77736A] text-[10px] block">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#77736A] uppercase block">Total Estimation</span>
                    <span className="text-[#C5AE8B] font-bold text-sm">
                      ₹{totalINR.toLocaleString('en-IN')} INR
                    </span>
                    <span className="text-[10px] text-[#77736A] block">Includes Conservation Levy</span>
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="pt-3 border-t border-[#292825] text-xs">
                    <span className="text-[10px] text-[#77736A] uppercase block mb-1">
                      Recorded Requests:
                    </span>
                    <p className="text-[#EAE4D9] italic font-light">"{formData.specialRequests}"</p>
                  </div>
                )}
              </div>

              {/* Demo Notice Alert */}
              <div className="p-4 bg-[#141413] border border-[#292825] text-xs text-[#77736A] leading-relaxed mb-8 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#C5AE8B] shrink-0 mt-0.5" />
                <span>
                  <strong>Presentation Prototype:</strong> This is an interactive demo reservation designed for the NOCTRA website. No actual credit card charge has been made, and this confirms seamless frontend state handling.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData((prev) => ({
                      ...prev,
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      specialRequests: '',
                    }));
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C5AE8B] text-[#10100F] uppercase text-xs tracking-[0.2em] font-medium hover:bg-[#DFCDB4] transition-colors"
                >
                  Create Another Reservation
                </button>
                <Link
                  to="/"
                  className="w-full sm:w-auto px-8 py-3.5 border border-[#292825] hover:border-[#C5AE8B] text-xs uppercase tracking-[0.2em] text-[#EAE4D9] text-center transition-colors"
                >
                  Return to Sanctuary Home
                </Link>
              </div>
            </div>
          ) : (
            /* ================= LIVE RESERVATION BOOKING FORM ================= */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Input Columns */}
              <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-10">
                {/* Step 1: Stay Details */}
                <div className="p-8 bg-[#191918]/60 border border-[#292825]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-6">
                    <span>Stage 01</span>
                    <span>·</span>
                    <span>Temporal & Suite Selection</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Arrival Date *
                      </label>
                      <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.arrivalDate && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.arrivalDate}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Departure Date *
                      </label>
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.departureDate && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.departureDate}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num} className="bg-[#10100F] text-[#EAE4D9]">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Number of Suites
                      </label>
                      <select
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        {[1, 2, 3].map((num) => (
                          <option key={num} value={num} className="bg-[#10100F] text-[#EAE4D9]">
                            {num} {num === 1 ? 'Private Suite' : 'Suites (Adjoining)'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Suite Selection Radios */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-3 font-mono">
                      Subterranean Residence Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SUITES.map((suite) => {
                        const isSelected = formData.suiteId === suite.id;
                        return (
                          <div
                            key={suite.id}
                            onClick={() => setFormData((p) => ({ ...p, suiteId: suite.id }))}
                            className={`p-4 border cursor-pointer transition-all flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#292825] border-[#C5AE8B] shadow-md'
                                : 'bg-[#10100F] border-[#292825] hover:border-[#77736A]'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-serif text-lg text-[#EAE4D9]">
                                {suite.name}
                              </span>
                              <span className="text-[10px] font-mono text-[#C5AE8B]">
                                {suite.depth}
                              </span>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#77736A]">
                              <span>{suite.sizeM2} m²</span>
                              <span className="text-[#EAE4D9]">{suite.priceFormatted}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 2: Guest Details */}
                <div className="p-8 bg-[#191918]/60 border border-[#292825]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-6">
                    <span>Stage 02</span>
                    <span>·</span>
                    <span>Confidential Guest Information</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mb-6">
                    <div className="sm:col-span-1">
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Title
                      </label>
                      <select
                        name="salutation"
                        value={formData.salutation}
                        onChange={handleInputChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-3 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Lord">Lord</option>
                        <option value="Lady">Lady</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="e.g. Julian"
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.firstName && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="e.g. Vane"
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.lastName && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Encrypted Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="guest@domain.com"
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Direct Telephone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98200 00000"
                        required
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Arrival Transit Vector
                      </label>
                      <select
                        name="flightArrival"
                        value={formData.flightArrival}
                        onChange={handleInputChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        <option value="Private Helicopter to Sahyadri Ridge Airlock">
                          Private Helicopter to Sahyadri Ridge Airlock
                        </option>
                        <option value="Concealed Subterranean Funicular Gate 07 (Western Ghats Valley Terminal)">
                          Concealed Subterranean Funicular Gate 07 (Western Ghats Valley Terminal)
                        </option>
                        <option value="Chauffeured Luxury Armored Sedan from Mumbai (CSMIA) or Pune">
                          Chauffeured Luxury Armored Sedan from Mumbai (CSMIA) or Pune
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                        Dietary Preference
                      </label>
                      <select
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none"
                      >
                        <option value="Subterranean Indian Mountain Degustation (No Restrictions)">
                          Subterranean Indian Mountain Degustation (No Restrictions)
                        </option>
                        <option value="Vedic Plant-Based & Sattvic Botanical Feast">
                          Vedic Plant-Based & Sattvic Botanical Feast
                        </option>
                        <option value="Jain Subterranean High-Gastronomy (Root-Free)">
                          Jain Subterranean High-Gastronomy (Root-Free)
                        </option>
                        <option value="Gluten-Free & Low-Glycemic Protocol">
                          Gluten-Free & Low-Glycemic Protocol
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#77736A] mb-2 font-mono">
                      Special Requests & Butler Directives
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="e.g. In-suite mineral bath prepared at 38°C upon arrival, specific champagne vintage preferences, acoustic sound bath scheduling."
                      className="w-full bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-4 py-3 text-sm text-[#EAE4D9] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-5 bg-[#C5AE8B] hover:bg-[#DFCDB4] text-[#10100F] uppercase text-xs tracking-[0.25em] font-medium transition-all shadow-[0_8px_30px_rgba(197,174,139,0.2)] flex items-center justify-center gap-2"
                >
                  <span>Submit Subterranean Reservation Request</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>

              {/* Right Column: Live Booking Summary */}
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="p-6 sm:p-8 bg-[#191918] border border-[#292825] shadow-2xl">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5AE8B] block mb-2">
                    Live Booking Computation
                  </span>

                  {/* Suite Preview Snapshot */}
                  <div className="relative aspect-[16/10] overflow-hidden border border-[#292825] my-4">
                    <img
                      src={selectedSuite.heroImage}
                      alt={selectedSuite.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#10100F]/90 px-2 py-0.5 text-[9px] font-mono text-[#C5AE8B]">
                      {selectedSuite.depth}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#EAE4D9] mb-1">
                    {selectedSuite.name}
                  </h3>
                  <p className="text-xs text-[#77736A] font-light mb-6">
                    {selectedSuite.tagline}
                  </p>

                  <div className="space-y-3 py-4 border-y border-[#292825] text-xs font-mono text-[#77736A]">
                    <div className="flex justify-between">
                      <span>Rate / Night</span>
                      <span className="text-[#EAE4D9]">{selectedSuite.priceFormatted} INR</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="text-[#EAE4D9]">{numberOfNights} Nights</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suites Reserved</span>
                      <span className="text-[#EAE4D9]">{formData.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#EAE4D9]">₹{suiteSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subterranean Eco-Levy (5%)</span>
                      <span className="text-[#C5AE8B]">₹{preservationLevy.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 mb-6">
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block">
                      Estimated Total Stay
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl text-[#C5AE8B] block">
                      ₹{totalINR.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-mono text-[#77736A]">INR</span>
                    </span>
                  </div>

                  <div className="space-y-2 text-[11px] text-[#77736A] font-light">
                    <p className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B]" />
                      <span>Complimentary private funicular transit</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B]" />
                      <span>Thermal spa access & breakfast included</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
