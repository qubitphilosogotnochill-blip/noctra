import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../../data/hotelData';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import type { LightboxImage } from '../../components/Lightbox/Lightbox';

export const Experiences: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [currentLightboxIdx, setCurrentLightboxIdx] = useState(0);

  const openExpGallery = (expId: string) => {
    const exp = EXPERIENCES.find((e) => e.id === expId);
    if (!exp) return;
    const imgs: LightboxImage[] = exp.galleryImages.map((img, idx) => ({
      id: `${exp.id}-${idx}`,
      url: img,
      title: `${exp.title} — Perspective 0${idx + 1}`,
      caption: exp.subtitle,
      depth: exp.depth,
      category: exp.category,
    }));
    setLightboxImages(imgs);
    setCurrentLightboxIdx(0);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 md:py-40 border-b border-[#292825] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=85"
            alt="The Abyss Subterranean Pool"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/60 to-[#10100F]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-4">
              Curated Subterranean Rites
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#EAE4D9] mb-6 leading-[0.95]">
              Submerged in <br />
              <span className="italic font-normal text-[#C5AE8B]">wonder.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#EAE4D9]/80 font-light max-w-2xl leading-relaxed mb-8">
              At NOCTRA, experiences are not mere activities — they are transformative spatial immersions.
              From mineral-dense thermal chambers to two-starred subterranean gastronomy and silent meditation spheres.
            </p>

            <div className="flex flex-wrap items-center gap-8 text-xs text-[#77736A] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5AE8B]" />
                <span>5 Dedicated Sanctuaries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5AE8B]" />
                <span>Geothermal Mineral Waters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5AE8B]" />
                <span>Zero-Noise Isolation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPERIENCE SECTIONS (5 DEDICATED SECTIONS, EACH VISUALLY DISTINCT)
          ========================================================================= */}
      <div className="divide-y divide-[#292825]">
        {/* SECTION 1: THE UNDERGROUND SPA */}
        <section id="underground-spa" className="py-24 md:py-36 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B]">
                  <span>Rite 01</span>
                  <span>·</span>
                  <span>{EXPERIENCES[0].depth}</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9]">
                  {EXPERIENCES[0].title}
                </h2>
                <p className="text-base font-serif italic text-[#C5AE8B]">
                  "{EXPERIENCES[0].subtitle}"
                </p>
                <p className="text-sm text-[#77736A] font-light leading-relaxed">
                  {EXPERIENCES[0].longDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A]">
                    Key Hydrothermal Elements:
                  </span>
                  {EXPERIENCES[0].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EAE4D9] font-light">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                  <button
                    onClick={() => openExpGallery(EXPERIENCES[0].id)}
                    className="px-6 py-3 bg-[#C5AE8B] text-[#10100F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFCDB4] transition-colors flex items-center gap-2"
                  >
                    <span>View Spa Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-[#77736A] font-mono">
                    {EXPERIENCES[0].pricingNote}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative group overflow-hidden border border-[#292825]">
                  <img
                    src={EXPERIENCES[0].image}
                    alt={EXPERIENCES[0].title}
                    className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/90 backdrop-blur-md border border-[#292825] flex justify-between text-xs font-mono text-[#EAE4D9]">
                    <span>Subterranean Hydrotherapy</span>
                    <span className="text-[#C5AE8B]">4 Thermal Pools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PRIVATE DINING AT CRIPTA */}
        <section id="private-dining" className="py-24 md:py-36 relative bg-[#141413]/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden border border-[#292825]">
                    <img
                      src={EXPERIENCES[1].image}
                      alt="Cripta Dining Vault"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden border border-[#292825] mt-8">
                    <img
                      src={EXPERIENCES[1].galleryImages[1]}
                      alt="Subterranean Wine Cellar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B]">
                  <span>Rite 02</span>
                  <span>·</span>
                  <span>{EXPERIENCES[1].depth}</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9]">
                  {EXPERIENCES[1].title}
                </h2>
                <p className="text-base font-serif italic text-[#C5AE8B]">
                  "{EXPERIENCES[1].subtitle}"
                </p>
                <p className="text-sm text-[#77736A] font-light leading-relaxed">
                  {EXPERIENCES[1].longDescription}
                </p>

                <div className="space-y-3 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A]">
                    Gastronomic Elements:
                  </span>
                  {EXPERIENCES[1].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EAE4D9] font-light">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    onClick={() => openExpGallery(EXPERIENCES[1].id)}
                    className="px-6 py-3 bg-[#C5AE8B] text-[#10100F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFCDB4] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Gastronomy Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to="/reservations"
                    className="px-6 py-3 border border-[#292825] hover:border-[#C5AE8B] text-xs uppercase tracking-[0.2em] font-light text-[#EAE4D9] text-center"
                  >
                    Reserve Tasting Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE ABYSS POOL */}
        <section id="the-abyss" className="py-24 md:py-36 relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B] mb-3">
                <span>Rite 03</span>
                <span>·</span>
                <span>{EXPERIENCES[2].depth}</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#EAE4D9] mb-4">
                {EXPERIENCES[2].title}
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-[#C5AE8B] mb-6">
                "{EXPERIENCES[2].subtitle}"
              </p>
              <p className="text-sm text-[#77736A] font-light leading-relaxed">
                {EXPERIENCES[2].longDescription}
              </p>
            </div>

            {/* Monumental Panorama Display */}
            <div className="relative group overflow-hidden border border-[#292825] aspect-[21/9] max-h-[560px] mb-8">
              <img
                src={EXPERIENCES[2].image}
                alt={EXPERIENCES[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#EAE4D9]">
                <span>40-Meter Heated Monolithic Infinity Pool</span>
                <button
                  onClick={() => openExpGallery(EXPERIENCES[2].id)}
                  className="bg-[#10100F]/90 px-4 py-2 border border-[#292825] text-[#C5AE8B] hover:text-[#DFCDB4] flex items-center gap-2"
                >
                  <span>Explore Abyss Perspectives</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {EXPERIENCES[2].highlights.map((h, i) => (
                <div key={i} className="p-4 bg-[#191918]/60 border border-[#292825]">
                  <span className="text-[10px] uppercase font-mono text-[#C5AE8B] block mb-1">
                    Feature 0{i + 1}
                  </span>
                  <p className="text-xs text-[#EAE4D9] font-light">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: THE EXPEDITION */}
        <section id="the-expedition" className="py-24 md:py-36 relative bg-[#141413]/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B]">
                  <span>Rite 04</span>
                  <span>·</span>
                  <span>{EXPERIENCES[3].depth}</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9]">
                  {EXPERIENCES[3].title}
                </h2>
                <p className="text-base font-serif italic text-[#C5AE8B]">
                  "{EXPERIENCES[3].subtitle}"
                </p>
                <p className="text-sm text-[#77736A] font-light leading-relaxed">
                  {EXPERIENCES[3].longDescription}
                </p>

                <div className="space-y-3 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A]">
                    Expedition Highlights:
                  </span>
                  {EXPERIENCES[3].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EAE4D9] font-light">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                  <button
                    onClick={() => openExpGallery(EXPERIENCES[3].id)}
                    className="px-6 py-3 bg-[#C5AE8B] text-[#10100F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFCDB4] transition-colors flex items-center gap-2"
                  >
                    <span>View Expedition Archive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-[#77736A] font-mono">
                    {EXPERIENCES[3].pricingNote}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative group overflow-hidden border border-[#292825]">
                  <img
                    src={EXPERIENCES[3].image}
                    alt={EXPERIENCES[3].title}
                    className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: THE SILENT SANCTUARY */}
        <section id="the-silent-sanctuary" className="py-24 md:py-36 relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative group overflow-hidden border border-[#292825]">
                  <img
                    src={EXPERIENCES[4].image}
                    alt={EXPERIENCES[4].title}
                    className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#10100F]/90 backdrop-blur-sm border border-[#292825] flex justify-between text-xs font-mono text-[#EAE4D9]">
                    <span>Acoustic Decoupled Chamber</span>
                    <span className="text-[#C5AE8B]">-2.5 dB Ambient</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.25em] text-[#C5AE8B]">
                  <span>Rite 05</span>
                  <span>·</span>
                  <span>{EXPERIENCES[4].depth}</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9]">
                  {EXPERIENCES[4].title}
                </h2>
                <p className="text-base font-serif italic text-[#C5AE8B]">
                  "{EXPERIENCES[4].subtitle}"
                </p>
                <p className="text-sm text-[#77736A] font-light leading-relaxed">
                  {EXPERIENCES[4].longDescription}
                </p>

                <div className="space-y-3 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A]">
                    Silence Protocols:
                  </span>
                  {EXPERIENCES[4].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EAE4D9] font-light">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5AE8B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-6">
                  <button
                    onClick={() => openExpGallery(EXPERIENCES[4].id)}
                    className="px-6 py-3 bg-[#C5AE8B] text-[#10100F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DFCDB4] transition-colors flex items-center gap-2"
                  >
                    <span>View Sanctuary Visuals</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-[#77736A] font-mono">
                    {EXPERIENCES[4].pricingNote}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentLightboxIdx}
        images={lightboxImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentLightboxIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
        }
        onNext={() =>
          setCurrentLightboxIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  );
};
