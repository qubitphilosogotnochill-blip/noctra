import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  Maximize2,
} from 'lucide-react';
import { SUITES, HOTEL_INFO } from '../../data/hotelData';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import type { LightboxImage } from '../../components/Lightbox/Lightbox';

export const SuiteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  const suiteIndex = SUITES.findIndex((s) => s.id === id);
  const suite = SUITES[suiteIndex] || SUITES[0];

  const prevSuite = SUITES[(suiteIndex - 1 + SUITES.length) % SUITES.length];
  const nextSuite = SUITES[(suiteIndex + 1) % SUITES.length];

  const lightboxImages: LightboxImage[] = suite.images.map((img, idx) => ({
    id: `${suite.id}-${idx}`,
    url: img,
    title: `${suite.name} — Architecture Perspective ${idx + 1}`,
    caption: suite.architecturalNote,
    depth: suite.depth,
    category: 'The Residence',
  }));

  const openLightbox = (index: number) => {
    setCurrentPhotoIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 flex items-center justify-between border-b border-[#292825] text-xs font-mono text-[#77736A]">
        <Link
          to="/residence"
          className="inline-flex items-center gap-2 hover:text-[#C5AE8B] transition-colors uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Return to All Residences</span>
        </Link>

        <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-widest">
          <span>{suite.depth}</span>
          <span>·</span>
          <span className="text-[#C5AE8B]">{suite.priceFormatted} / Night</span>
        </div>
      </div>

      {/* =========================================================================
          SUITE HERO SECTION
          ========================================================================= */}
      <section className="relative py-12 md:py-20 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-[0.3em] text-[#C5AE8B] mb-3">
              <span>Sector 04</span>
              <span>·</span>
              <span>{suite.depth}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EAE4D9] uppercase tracking-tight mb-4">
              {suite.name}
            </h1>
            <p className="text-base sm:text-xl text-[#C5AE8B] font-serif italic mb-6">
              "{suite.tagline}"
            </p>
            <p className="text-sm sm:text-base text-[#77736A] font-light max-w-3xl leading-relaxed">
              {suite.description}
            </p>
          </div>

          {/* Large Hero Architectural Image with Fullscreen Prompt */}
          <div
            onClick={() => openLightbox(0)}
            className="group relative cursor-pointer overflow-hidden border border-[#292825] aspect-[16/9] max-h-[640px] mb-8"
          >
            <img
              src={suite.heroImage}
              alt={suite.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 right-6 bg-[#10100F]/90 backdrop-blur-md px-4 py-2 border border-[#292825] text-xs font-mono uppercase tracking-widest text-[#C5AE8B] flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand Gallery ({suite.images.length} views)</span>
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {suite.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden aspect-[4/3] border border-[#292825] hover:border-[#C5AE8B] transition-colors"
              >
                <img
                  src={img}
                  alt={`${suite.name} perspective ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#EAE4D9] bg-[#10100F]/80 px-2 py-0.5">
                  View 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY SPECIFICATIONS & RESERVATION DOCK
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Architectural Specifications */}
            <div className="lg:col-span-7 space-y-12">
              {/* Vital Statistics */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-6">
                  Spatial Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-[#191918]/60 p-6 border border-[#292825]">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Surface Scale
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-[#EAE4D9]">
                      {suite.sizeM2} m²
                    </span>
                    <span className="text-[10px] font-mono text-[#77736A] block">
                      ({suite.sizeSqFt} sq.ft)
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Max Guests
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-[#EAE4D9]">
                      {suite.capacity} Persons
                    </span>
                    <span className="text-[10px] font-mono text-[#77736A] block">
                      Adult Seclusion
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Bedding
                    </span>
                    <span className="font-serif text-lg text-[#EAE4D9] block leading-tight">
                      {suite.bedConfig.split(' ')[0]} King
                    </span>
                    <span className="text-[10px] font-mono text-[#77736A] block">
                      Organic Minerals
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Subterranean Depth
                    </span>
                    <span className="font-mono text-sm text-[#C5AE8B] font-semibold">
                      {suite.depth}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Acoustic Rating
                    </span>
                    <span className="font-mono text-sm text-[#EAE4D9]">
                      55dB Isolation
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#77736A] block mb-1">
                      Temperature
                    </span>
                    <span className="font-mono text-sm text-[#EAE4D9]">
                      17.5°C Bedrock
                    </span>
                  </div>
                </div>
              </div>

              {/* Architectural Notes */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-3">
                  Architectural Dossier
                </h3>
                <div className="p-6 bg-[#191918]/30 border border-[#292825] space-y-3 text-xs sm:text-sm text-[#77736A] font-light leading-relaxed">
                  <p>{suite.architecturalNote}</p>
                  <p className="font-mono text-[11px] text-[#C5AE8B]/90">
                    Floorplan: {suite.floorPlanNote}
                  </p>
                </div>
              </div>

              {/* Private Features */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-4">
                  Signature In-Suite Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suite.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#141413] border border-[#292825] flex items-start gap-2.5 text-xs text-[#EAE4D9] font-light"
                    >
                      <Check className="w-4 h-4 text-[#C5AE8B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities List */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5AE8B] mb-4">
                  Complimentary High Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suite.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#191918]/20 border border-[#292825] flex items-start gap-2.5 text-xs text-[#77736A] font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5AE8B] mt-1.5 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Reservation Box */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="p-8 bg-[#191918] border border-[#292825] shadow-2xl relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="px-2.5 py-1 bg-[#C5AE8B] text-[#10100F] font-mono text-[10px] uppercase font-bold tracking-widest">
                    Available
                  </span>
                </div>

                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#77736A] block mb-2">
                  Subterranean Residence Rate
                </span>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#EAE4D9]">
                    {suite.priceFormatted}
                  </span>
                  <span className="text-xs font-mono text-[#77736A]">/ Night INR</span>
                </div>

                <div className="space-y-4 py-6 border-y border-[#292825] text-xs text-[#77736A] font-light">
                  <div className="flex justify-between items-center">
                    <span>Subterranean Funicular Transfer</span>
                    <span className="text-[#C5AE8B] font-mono">Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>24/7 Dedicated Butler Service</span>
                    <span className="text-[#C5AE8B] font-mono">Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organic Mountain Breakfast</span>
                    <span className="text-[#C5AE8B] font-mono">Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Underground Spa Access</span>
                    <span className="text-[#C5AE8B] font-mono">Unrestricted</span>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <Link
                    to={`/reservations?suite=${suite.id}`}
                    className="w-full py-4 bg-[#C5AE8B] hover:bg-[#DFCDB4] text-[#10100F] uppercase text-xs tracking-[0.25em] font-medium text-center flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(197,174,139,0.2)]"
                  >
                    <span>Reserve {suite.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="w-full py-3.5 border border-[#292825] hover:border-[#C5AE8B] text-[#EAE4D9] uppercase text-[11px] tracking-[0.2em] font-light text-center block transition-colors"
                  >
                    Contact Private Concierge Desk
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-[#292825] text-center text-[10px] text-[#77736A] font-mono">
                  Guaranteed privacy & total biometric isolation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PREV / NEXT SUITE PAGER
          ========================================================================= */}
      <section className="py-16 border-t border-[#292825] bg-[#141413]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/residence/${prevSuite.id}`}
            className="group flex items-center gap-4 text-left"
          >
            <div className="p-3 border border-[#292825] group-hover:border-[#C5AE8B] group-hover:bg-[#191918] transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#77736A] group-hover:text-[#C5AE8B] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A] block">
                Previous Residence
              </span>
              <span className="font-serif text-lg text-[#EAE4D9] group-hover:text-[#C5AE8B] transition-colors">
                {prevSuite.name}
              </span>
            </div>
          </Link>

          <Link
            to={`/residence/${nextSuite.id}`}
            className="group flex items-center gap-4 text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736A] block">
                Next Residence
              </span>
              <span className="font-serif text-lg text-[#EAE4D9] group-hover:text-[#C5AE8B] transition-colors">
                {nextSuite.name}
              </span>
            </div>
            <div className="p-3 border border-[#292825] group-hover:border-[#C5AE8B] group-hover:bg-[#191918] transition-colors">
              <ArrowRight className="w-4 h-4 text-[#77736A] group-hover:text-[#C5AE8B] transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentPhotoIdx}
        images={lightboxImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentPhotoIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
        }
        onNext={() =>
          setCurrentPhotoIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  );
};
