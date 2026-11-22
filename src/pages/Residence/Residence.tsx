import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bed, Maximize2, Users, CheckCircle2 } from 'lucide-react';
import { SUITES, HOTEL_INFO } from '../../data/hotelData';

export const Residence: React.FC = () => {
  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 md:py-36 border-b border-[#292825] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(197,174,139,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-4">
              Accommodations & Sanctuaries
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#EAE4D9] mb-6 leading-[0.95]">
              Another level <br />
              <span className="italic font-normal text-[#C5AE8B]">of living.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#77736A] font-light max-w-2xl leading-relaxed mb-8">
              Five distinct subterranean accommodations sculpted directly from monolithic mountain rock.
              Each residence offers complete acoustic silence, private geothermal mineral baths,
              and dedicated subterranean butler services.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#77736A] font-mono pt-4 border-t border-[#292825]">
              <div>
                <span className="text-[#C5AE8B] block font-serif text-xl">5</span>
                <span className="uppercase text-[10px]">Private Suites</span>
              </div>
              <div className="h-8 w-[1px] bg-[#292825]" />
              <div>
                <span className="text-[#C5AE8B] block font-serif text-xl">-180M to -380M</span>
                <span className="uppercase text-[10px]">Depth Range</span>
              </div>
              <div className="h-8 w-[1px] bg-[#292825]" />
              <div>
                <span className="text-[#C5AE8B] block font-serif text-xl">100%</span>
                <span className="uppercase text-[10px]">Acoustic Decoupling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUITES SHOWCASE LIST (5 UNIQUE CATEGORIES)
          ========================================================================= */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 space-y-24 md:space-y-36">
          {SUITES.map((suite, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={suite.id}
                id={suite.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden border border-[#292825] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={suite.heroImage}
                      alt={suite.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />

                    {/* Depth and Tag Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#10100F]/90 backdrop-blur-md border border-[#292825] px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#C5AE8B]">
                        {suite.depth}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#EAE4D9] bg-[#10100F]/80 backdrop-blur-sm p-3 border border-[#292825]">
                      <span>Starting at {suite.priceFormatted} <span className="text-[#77736A]">/ night</span></span>
                      <span className="text-[#C5AE8B]">{suite.sizeM2} m² / {suite.sizeSqFt} sq.ft</span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-2">
                      <span>Category 0{index + 1}</span>
                      <span>·</span>
                      <span>{suite.depth}</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#EAE4D9] mb-3">
                      {suite.name}
                    </h2>

                    <p className="text-sm font-light text-[#C5AE8B] italic mb-4">
                      "{suite.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed mb-6">
                      {suite.overview}
                    </p>
                  </div>

                  {/* Room Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#292825] text-xs font-mono text-[#77736A]">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-[#EAE4D9]">
                        <Users className="w-3.5 h-3.5 text-[#C5AE8B]" />
                        <span>Capacity</span>
                      </div>
                      <span>{suite.capacity} Guests</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-[#EAE4D9]">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C5AE8B]" />
                        <span>Floor Area</span>
                      </div>
                      <span>{suite.sizeM2} m²</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-[#EAE4D9]">
                        <Bed className="w-3.5 h-3.5 text-[#C5AE8B]" />
                        <span>Bed</span>
                      </div>
                      <span className="truncate">{suite.bedConfig.split(' ')[0]} King</span>
                    </div>
                  </div>

                  {/* Key Private Highlights */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736A] font-mono block mb-3">
                      Bespoke Inclusions
                    </span>
                    <ul className="space-y-2 text-xs text-[#EAE4D9]/80 font-light">
                      {suite.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5AE8B] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      to={`/residence/${suite.id}`}
                      className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#10100F] bg-[#C5AE8B] hover:bg-[#DFCDB4] transition-all group"
                    >
                      <span>Explore Suite Dossier</span>
                      <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      to={`/reservations?suite=${suite.id}`}
                      className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-light text-[#EAE4D9] border border-[#292825] hover:border-[#C5AE8B] transition-colors"
                    >
                      <span>Reserve This Suite</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          RESERVATION BANNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#141413] border-t border-[#292825]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
            Subterranean Concierge
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#EAE4D9] uppercase tracking-tight mb-6">
            Bespeak your subterranean sanctuary.
          </h2>
          <p className="text-sm text-[#77736A] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Every stay at NOCTRA includes confidential subterranean transit from our private alpine terminal,
            curated organic dining, and full sanctuary access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="px-8 py-4 bg-[#C5AE8B] text-[#10100F] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#DFCDB4] transition-colors"
            >
              Check Availability & Rates
            </Link>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-8 py-4 border border-[#292825] hover:border-[#C5AE8B] text-[#EAE4D9] text-xs uppercase tracking-[0.22em] transition-colors"
            >
              Direct Concierge Dial: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
