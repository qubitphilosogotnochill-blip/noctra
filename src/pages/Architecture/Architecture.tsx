import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, ShieldCheck, Sun, Zap } from 'lucide-react';
import { ARCHITECTURE_PILLARS } from '../../data/hotelData';

export const Architecture: React.FC = () => {
  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 md:py-40 border-b border-[#292825] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85"
            alt="Monolithic Deccan Basalt Excavation"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/50 to-[#10100F]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-4">
              Architectural Monograph & Vision · Sahyadri Monolith
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#EAE4D9] mb-6 leading-[0.95]">
              Carved by nature. <br />
              <span className="italic font-normal text-[#C5AE8B]">Refined by design.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#EAE4D9]/80 font-light max-w-2xl leading-relaxed mb-8">
              NOCTRA represents a radical continuation of India’s millennium-old rock-cut architectural lineage.
              Rather than assembling materials upon the landscape, we removed volcanic mass from the core of Mount Sahyadri
              to reveal monumental subterranean volumes sculpted by tectonic time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#292825] text-xs font-mono text-[#77736A]">
              <div>
                <span className="text-xl font-serif text-[#C5AE8B] block">66M</span>
                <span className="text-[10px] uppercase">Years Geological Age</span>
              </div>
              <div>
                <span className="text-xl font-serif text-[#C5AE8B] block">85%</span>
                <span className="text-[10px] uppercase">Preserved Raw Basalt</span>
              </div>
              <div>
                <span className="text-xl font-serif text-[#C5AE8B] block">-380M</span>
                <span className="text-[10px] uppercase">Deepest Living Vault</span>
              </div>
              <div>
                <span className="text-xl font-serif text-[#C5AE8B] block">0%</span>
                <span className="text-[10px] uppercase">Surface Visual Footprint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: THE ART OF DISAPPEARING
          ========================================================================= */}
      <section className="py-24 md:py-36 border-b border-[#292825] bg-[#141413]/60 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block">
                Chapter 01 / Spatial Invisibility
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#EAE4D9] uppercase tracking-tight">
                The Art of <br />
                <span className="italic font-normal text-[#C5AE8B]">Disappearing.</span>
              </h2>
              <p className="text-sm text-[#EAE4D9]/90 font-light leading-relaxed">
                True luxury is the courage to be invisible. In an era dominated by hyper-visible skyscrapers and ostentatious surface monuments, NOCTRA chose complete subterranean submersion into the Sahyadri mountains.
              </p>
              <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
                From the summit of Mount Sahyadri, satellite scans and aerial photography reveal nothing but virgin Western Ghats forest canopy and natural basalt crests. Arrival is orchestrated through a private concealed funicular terminal hidden inside an ancient volcanic fissure, descending silently into the mountain vault at a 42-degree inclination.
              </p>

              <div className="pt-4 space-y-3 font-mono text-xs text-[#77736A]">
                <div className="flex items-center justify-between p-3 bg-[#191918] border border-[#292825]">
                  <span>Sahyadri Funicular Slope</span>
                  <span className="text-[#C5AE8B]">42° Gradient Descent</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#191918] border border-[#292825]">
                  <span>Arrival Transit Time</span>
                  <span className="text-[#C5AE8B]">3 Minutes 40 Seconds</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#191918] border border-[#292825]">
                  <span>Private Helipad Airlock</span>
                  <span className="text-[#C5AE8B]">Subterranean Drop Shaft</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden border border-[#292825]">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85"
                  alt="Mount Sahyadri Undisturbed Western Ghats Surface"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/90 backdrop-blur-md border border-[#292825] flex justify-between text-xs font-mono text-[#EAE4D9]">
                  <span>Surface Elevation: 1,420M</span>
                  <span className="text-[#C5AE8B]">Zero Visible Surface Structures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE ARCHITECTURAL PILLARS (VERTICAL DOCUMENTARY STORYTELLING)
          ========================================================================= */}
      <section className="py-24 md:py-36 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 space-y-32">
          {ARCHITECTURE_PILLARS.map((pillar, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={pillar.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden border border-[#292825] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-[#10100F]/90 px-3 py-1 border border-[#292825] text-xs font-mono text-[#C5AE8B]">
                    Principle {pillar.number}
                  </div>
                </div>

                {/* Narrative Details */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B]">
                    Architecture Monograph {pillar.number}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#EAE4D9] font-light">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-serif italic text-[#C5AE8B]">
                    "{pillar.subtitle}"
                  </p>
                  <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Technical Specifications Table */}
                  <div className="pt-4 border-t border-[#292825] space-y-2.5">
                    {pillar.specifications.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between text-xs py-1.5 border-b border-[#292825]/50 font-mono"
                      >
                        <span className="text-[#77736A]">{spec.label}</span>
                        <span className="text-[#EAE4D9]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          MATERIALS & TEXTURES MATRIX
          ========================================================================= */}
      <section className="py-24 md:py-36 bg-[#141413]/60 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
              Chapter 03 / Material Palette
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#EAE4D9] uppercase tracking-tight mb-4">
              Tactile geology.
            </h2>
            <p className="text-sm text-[#77736A] font-light leading-relaxed">
              Every finish inside NOCTRA was chosen to complement, rather than disguise, the raw volcanic stone of Mount Sahyadri. We pair ancient mineral strata with warm metals and natural fibres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#191918] border border-[#292825]">
              <div className="w-10 h-10 mb-6 bg-[#292825] flex items-center justify-center text-[#C5AE8B]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#EAE4D9] mb-2">Deccan Flood Basalt</h3>
              <p className="text-xs text-[#77736A] leading-relaxed">
                Formed during volcanic cooling 66 million years ago. Sealed with non-reflective matte silicate to preserve its velvety charcoal touch.
              </p>
            </div>

            <div className="p-6 bg-[#191918] border border-[#292825]">
              <div className="w-10 h-10 mb-6 bg-[#292825] flex items-center justify-center text-[#C5AE8B]">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#EAE4D9] mb-2">Bidri & Champagne Bronze</h3>
              <p className="text-xs text-[#77736A] leading-relaxed">
                Hand-hammered champagne bronze alloy inspired by ancient Deccan metallurgy that acquires a richer subterranean patina through mineral vapours.
              </p>
            </div>

            <div className="p-6 bg-[#191918] border border-[#292825]">
              <div className="w-10 h-10 mb-6 bg-[#292825] flex items-center justify-center text-[#C5AE8B]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#EAE4D9] mb-2">Smoked Indian Teak</h3>
              <p className="text-xs text-[#77736A] leading-relaxed">
                Sustainably salvaged high-altitude teak, kiln-smoked to deep graphite tones, offering warm organic contrast against cool volcanic stone.
              </p>
            </div>

            <div className="p-6 bg-[#191918] border border-[#292825]">
              <div className="w-10 h-10 mb-6 bg-[#292825] flex items-center justify-center text-[#C5AE8B]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#EAE4D9] mb-2">Blackened Titanium</h3>
              <p className="text-xs text-[#77736A] leading-relaxed">
                Aerospace-grade structural fixtures, tension rods, and door thresholds engineered for zero corrosion in subterranean humidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING ARCHITECTURAL CTA
          ========================================================================= */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#EAE4D9] font-light mb-6">
            Witness the architecture in person.
          </h2>
          <p className="text-sm text-[#77736A] font-light mb-8">
            Residence reservations include private architectural viewings guided by our project director.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5AE8B] text-[#10100F] uppercase text-xs tracking-[0.22em] font-medium hover:bg-[#DFCDB4] transition-colors"
          >
            <span>Reserve Your Subterranean Escape</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
