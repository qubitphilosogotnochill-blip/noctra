import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
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
          Legal & Privacy Charter
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#EAE4D9] mb-8">
          Privacy & Confidentiality Policy
        </h1>
        <p className="text-xs font-mono text-[#77736A] pb-8 border-b border-[#292825] mb-8">
          Effective Date: January 1, 2026 · Document Reference: NOCTRA-PRIV-2026-V1
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">1. The Sanctuary Seclusion Guarantee</h2>
            <p>
              At NOCTRA (operated by NOCTRA SANCTUARY HOSPITALITY PVT. LTD., Mount Sahyadri, Western Ghats, Maharashtra, India), discretion is not merely a policy — it is an architectural foundation. Due to our subterranean seclusion, our guests require unconditional confidence that their identity, reservation dates, and private movements remain entirely confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">2. Collection of Private Information</h2>
            <p>
              We collect only the essential personal details required to process your subterranean stay: guest legal identity for statutory Indian hospitality and safety registers, encrypted contact details, dietary and Ayurvedic considerations relevant to geothermal hydrotherapy, and arrival transit preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">3. No Commercial Third-Party Disclosure</h2>
            <p>
              NOCTRA never sells, rents, licenses, or shares guest data with third-party advertisers, social platforms, or commercial registries. All guest profiles are stored on air-gapped encrypted local storage networks located directly inside the Mount Sahyadri subterranean facility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">4. Biometric & Access Cryptography</h2>
            <p>
              Where biometric keys or private funicular transit passes are issued for presidential suites or subterranean chambers, biometric hashes are stored exclusively on secure localized hardware chips and purged within 24 hours of departure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#EAE4D9]">5. Contact Our Data Protection Officer</h2>
            <p>
              For inquiries regarding data erasure, identity shielding, or NDA agreements, please direct communications to:
              <br />
              <span className="font-mono text-[#C5AE8B] block mt-1">
                privacy@noctra-hotel.com · Chief Cryptographic Officer
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
