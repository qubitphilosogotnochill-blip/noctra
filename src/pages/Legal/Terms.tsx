import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#77736A] hover:text-[#C5AE8B] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Sanctuary</span>
        </Link>

        <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#C5AE8B] block mb-3">
          Sanctuary Covenant & Regulations
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#EAE4D9] mb-8">
          Terms & Conditions of Residence
        </h1>
        <p className="text-xs font-mono text-[#77736A] pb-8 border-b border-[#292825] mb-8">
          Effective Date: January 1, 2026 · Document Reference: NOCTRA-TC-2026-V1
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">1. The Subterranean Sanctuary Covenant</h2>
            <p>
              Residence at NOCTRA constitutes agreement to our Covenant of Silence (Mauna). The retreat is engineered as a sanctuary of neurological reset and architectural contemplation. Excessive noise, unauthorized commercial filming, drone operations over Mount Sahyadri, or disturbances to fellow residents are strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">2. Reservations & Cancellation Protocol</h2>
            <p>
              Due to our limited allocation of only five private residences, reservations require a 50% deposit upon formal verification. Cancellations made 30 days prior to scheduled descent are fully refundable. Cancellations within 14 days may be transferred to future calendar windows upon Chief Concierge approval.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">3. Subterranean Hydrotherapy & Safety</h2>
            <p>
              Guests utilizing geothermal mineral pools, cold plunges, and high-heat basalt saunas do so acknowledging their own physical tolerance. The thermal springs at NOCTRA are naturally enriched with Western Ghats sulfur and silica; guests with specific cardiovascular or dermatological sensitivities should consult resident spa Ayurvedic medical staff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">4. Preservation of Monolithic Geological Assets</h2>
            <p>
              The ancient Deccan basalt rock formations and quartz veins within Mount Sahyadri are protected natural patrimony. Any deliberate defacement, extraction of crystals, or alteration to exposed rock surfaces will result in immediate termination of residence and financial restitution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">5. Governing Law & Jurisdiction</h2>
            <p>
              All agreements, covenants, and stays are governed by the laws of the Republic of India, subject exclusively to the jurisdiction of the courts in Mumbai, Maharashtra, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
