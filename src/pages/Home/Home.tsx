import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SUITES, EXPERIENCES, GALLERY_ITEMS, PRESS_ACCOLADES, HOTEL_INFO } from '../../data/hotelData';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import type { LightboxImage } from '../../components/Lightbox/Lightbox';

export const Home: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const featuredSuites = SUITES.slice(0, 3);
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  const lightboxImages: LightboxImage[] = previewGallery.map((item) => ({
    id: item.id,
    url: item.image,
    title: item.title,
    caption: item.caption,
    depth: item.depth,
    category: item.category,
  }));

  const openLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollToIntro = () => {
    const el = document.getElementById('introduction-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#10100F] text-[#EAE4D9]">
      {/* =========================================================================
          HERO SECTION (100vh)
          ========================================================================= */}
      <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden">
        {/* Cinematic Architectural Background Image with Subtle Ken Burns Zoom */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="NOCTRA Subterranean Architecture"
              className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
            />
          </motion.div>
          {/* Subtle dark vignettes and noise gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/40 to-[#10100F]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(16,16,15,0.75)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full pt-20 pb-16 flex flex-col justify-between h-full">
          {/* Top Metadata */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5AE8B] animate-pulse" />
              <span>Sanctuary Sector 04 · {HOTEL_INFO.depth || '-380M'}</span>
            </div>
            <span className="hidden sm:inline">{HOTEL_INFO.coordinates}</span>
          </motion.div>

          {/* Center Titles */}
          <div className="my-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-xs sm:text-sm font-light uppercase tracking-[0.4em] text-[#C5AE8B] mb-4">
                Deep Sahyadri Subterranean Haven · India
              </span>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#EAE4D9] uppercase leading-[0.92] mb-6">
                Escape the <br />
                <span className="italic font-normal text-[#C5AE8B]">Surface.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="text-sm sm:text-base md:text-lg text-[#EAE4D9]/80 font-light max-w-xl leading-relaxed mb-10"
            >
              Carved deep within the monolithic Deccan volcanic rock of the Western Ghats, NOCTRA merges prehistoric geological formations with futuristic brutalist design, thermal mineral waters, and absolute acoustic silence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <Link
                to="/residence"
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium text-[#10100F] bg-[#C5AE8B] hover:bg-[#DFCDB4] transition-all duration-300 group shadow-[0_8px_30px_rgba(197,174,139,0.2)]"
              >
                <span>Explore the Residence</span>
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>

              <button
                onClick={scrollToIntro}
                className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.25em] font-light text-[#EAE4D9] border border-[#292825] hover:border-[#C5AE8B] hover:bg-[#191918]/60 transition-all duration-300"
              >
                <span>Discover NOCTRA</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom Bar: Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-between text-xs text-[#77736A]"
          >
            <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase font-mono">
              <span>Temp 17.5°C Constant</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">Glacial Aquifer 100% Purity</span>
            </div>

            <button
              onClick={scrollToIntro}
              className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#77736A] hover:text-[#C5AE8B] transition-colors"
              aria-label="Scroll down to introduction"
            >
              <span>Descend Below</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300 text-[#C5AE8B]" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTION PHILOSOPHY
          ========================================================================= */}
      <section id="introduction-section" className="py-28 md:py-40 relative border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Header Tag */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
              01 / The Concept & Philosophy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#EAE4D9] uppercase tracking-tight max-w-4xl leading-[1.05]">
              Below the world. <br />
              <span className="italic font-normal text-[#C5AE8B]">Beyond expectation.</span>
            </h2>
          </div>

          {/* Editorial Grid: Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image with architectural crop */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden border border-[#292825]">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85"
                  alt="Carved Stone Vaults"
                  className="w-full h-[450px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest uppercase font-mono text-[#EAE4D9]">
                  <span className="bg-[#10100F]/80 px-3 py-1.5 border border-[#292825]">
                    Sector 04 Chamber · Depth -210M
                  </span>
                  <span className="text-[#C5AE8B]">Deccan Volcanic Basalt</span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Architectural Pillars */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
              <p className="text-lg md:text-xl font-light text-[#EAE4D9] leading-relaxed">
                NOCTRA was born from a singular architectural ambition: to create an unassailable sanctuary where the noise, velocity, and visual saturation of the surface dissolve.
              </p>
              <p className="text-sm text-[#77736A] font-light leading-relaxed">
                Carved into the subterranean core of Mount Sahyadri in India’s Western Ghats, every space is sculpted directly from 66-million-year-old Deccan Traps rock formations. We have preserved the natural texture of the volcanic basalt while integrating circadian optical systems, private geothermal pools, and museum-grade finishes.
              </p>

              <div className="pt-6 border-t border-[#292825] grid grid-cols-2 gap-6 font-mono text-xs">
                <div>
                  <span className="block text-[#C5AE8B] text-2xl font-serif mb-1">100%</span>
                  <span className="text-[#77736A] uppercase tracking-wider text-[10px]">
                    Subterranean Geothermal Stability
                  </span>
                </div>
                <div>
                  <span className="block text-[#C5AE8B] text-2xl font-serif mb-1">-380M</span>
                  <span className="text-[#77736A] uppercase tracking-wider text-[10px]">
                    Deepest Sanctuary Vault
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors pb-1 border-b border-[#C5AE8B]"
                >
                  <span>Explore Architectural Principles</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED RESIDENCES
          ========================================================================= */}
      <section className="py-28 md:py-40 relative border-b border-[#292825] bg-[#141413]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
                02 / Private Accommodations
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9] uppercase tracking-tight">
                Sculpted from stone.
              </h2>
            </div>
            <Link
              to="/residence"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors pb-1 border-b border-[#292825] hover:border-[#C5AE8B]"
            >
              <span>View All 5 Residences</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Suite Cards (3 Residences) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSuites.map((suite, idx) => (
              <div
                key={suite.id}
                className="group relative bg-[#191918]/60 border border-[#292825] hover:border-[#C5AE8B]/50 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={suite.heroImage}
                    alt={suite.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#10100F]/85 backdrop-blur-sm border border-[#292825] px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-[#C5AE8B]">
                      {suite.depth}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-serif text-[#EAE4D9] bg-[#10100F]/80 px-2.5 py-1 border border-[#292825]">
                      From {suite.priceFormatted} <span className="text-[10px] text-[#77736A]">/ Night</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736A] font-mono block mb-1">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#EAE4D9] group-hover:text-[#C5AE8B] transition-colors mb-3">
                      {suite.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed mb-6 line-clamp-3">
                      {suite.overview}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="pt-6 border-t border-[#292825] flex items-center justify-between text-xs text-[#77736A] font-mono">
                    <div>
                      <span className="text-[10px] uppercase block text-[#77736A]">Capacity</span>
                      <span className="text-[#EAE4D9]">{suite.capacity} Guests</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase block text-[#77736A]">Scale</span>
                      <span className="text-[#EAE4D9]">{suite.sizeM2} m²</span>
                    </div>
                    <div>
                      <Link
                        to={`/residence/${suite.id}`}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#C5AE8B] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Discover</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXPERIENCES (Asymmetric Editorial Grid)
          ========================================================================= */}
      <section className="py-28 md:py-40 relative border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Header */}
          <div className="mb-20 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
              03 / Subterranean Living
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9] uppercase tracking-tight mb-4">
              A deeper dimension <br />
              <span className="italic font-normal text-[#C5AE8B]">of experience.</span>
            </h2>
            <p className="text-sm text-[#77736A] font-light leading-relaxed">
              From two Michelin-starred private cavern gastronomy to natural thermal salt grottos and zero-decibel acoustic sanctuaries, every experience is designed to restore sensory balance.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Experience 1: Large Featured (Spa) */}
            <div className="md:col-span-8 group relative overflow-hidden border border-[#292825]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={EXPERIENCES[0].image}
                  alt={EXPERIENCES[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-2">
                    {EXPERIENCES[0].category} · {EXPERIENCES[0].depth}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#EAE4D9] font-light mb-3">
                    {EXPERIENCES[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAE4D9]/80 font-light max-w-xl leading-relaxed mb-6">
                    {EXPERIENCES[0].description}
                  </p>
                  <Link
                    to="/experiences"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors"
                  >
                    <span>Explore Spa Rituals</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Experience 2: Vertical Card (Private Dining) */}
            <div className="md:col-span-4 group relative overflow-hidden border border-[#292825] flex flex-col justify-between bg-[#191918]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={EXPERIENCES[1].image}
                  alt={EXPERIENCES[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-2">
                  {EXPERIENCES[1].category} · {EXPERIENCES[1].depth}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EAE4D9] font-light mb-2">
                  {EXPERIENCES[1].title}
                </h3>
                <p className="text-xs text-[#77736A] font-light leading-relaxed mb-4">
                  {EXPERIENCES[1].subtitle}
                </p>
                <Link
                  to="/experiences"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5AE8B]"
                >
                  <span>Discover Cripta</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Experience 3: The Abyss Pool */}
            <div className="md:col-span-5 group relative overflow-hidden border border-[#292825] flex flex-col justify-between bg-[#191918]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={EXPERIENCES[2].image}
                  alt={EXPERIENCES[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-2">
                  {EXPERIENCES[2].category} · {EXPERIENCES[2].depth}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#EAE4D9] font-light mb-2">
                  {EXPERIENCES[2].title}
                </h3>
                <p className="text-xs text-[#77736A] font-light leading-relaxed mb-4">
                  {EXPERIENCES[2].description}
                </p>
                <Link
                  to="/experiences"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5AE8B]"
                >
                  <span>Explore The Pool</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Experience 4: The Expedition */}
            <div className="md:col-span-7 group relative overflow-hidden border border-[#292825]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={EXPERIENCES[3].image}
                  alt={EXPERIENCES[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-[#10100F]/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-2">
                    {EXPERIENCES[3].category} · {EXPERIENCES[3].depth}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#EAE4D9] font-light mb-2">
                    {EXPERIENCES[3].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAE4D9]/80 font-light max-w-xl leading-relaxed mb-6">
                    {EXPERIENCES[3].description}
                  </p>
                  <Link
                    to="/experiences"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors"
                  >
                    <span>View Expeditions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ARCHITECTURE STORYTELLING TEASER
          ========================================================================= */}
      <section className="py-28 md:py-40 relative border-b border-[#292825] bg-[#10100F]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block">
                04 / Architectural Vision
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9] uppercase tracking-tight leading-[1.05]">
                Carved by nature. <br />
                <span className="italic font-normal text-[#C5AE8B]">Refined by design.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#77736A] font-light leading-relaxed">
                Rather than forcing geometric dominance over nature, NOCTRA’s architecture is an act of geological choreography. Over 85% of all exposed rock faces are left raw and unaltered, complemented by warm patinated bronze, smoked oak, and acoustic dampening.
              </p>

              {/* Pillars Preview list */}
              <div className="space-y-4 pt-4 border-t border-[#292825]">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#C5AE8B] mt-0.5">01</span>
                  <div>
                    <h4 className="text-sm font-medium text-[#EAE4D9]">Acoustic Isolation Engineering</h4>
                    <p className="text-xs text-[#77736A] font-light mt-0.5">
                      Subterranean decoupling chambers yielding 55dB of true acoustic stillness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#C5AE8B] mt-0.5">02</span>
                  <div>
                    <h4 className="text-sm font-medium text-[#EAE4D9]">Circadian Solar Simulation</h4>
                    <p className="text-xs text-[#77736A] font-light mt-0.5">
                      Dynamic color spectrum calibrating human melatonin and sleep wellness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#C5AE8B] mt-0.5">03</span>
                  <div>
                    <h4 className="text-sm font-medium text-[#EAE4D9]">Passive Geothermal Thermodynamics</h4>
                    <p className="text-xs text-[#77736A] font-light mt-0.5">
                      17.5°C constant bedrock temperature reducing HVAC carbon output by 82%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/architecture"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium text-[#EAE4D9] border border-[#C5AE8B] hover:bg-[#C5AE8B] hover:text-[#10100F] transition-all duration-300"
                >
                  <span>Read The Full Architectural Monograph</span>
                </Link>
              </div>
            </div>

            {/* Right Large Image with Offset Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative border border-[#292825] group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
                  alt="Subterranean Corridor of Light"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-6 bg-[#191918] p-5 border border-[#292825] max-w-xs shadow-2xl backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-widest text-[#C5AE8B] font-mono block mb-1">
                  The Art of Disappearing
                </span>
                <p className="text-xs text-[#77736A] font-light">
                  Zero visual surface footprint. The mountain entrance remains completely invisible from the sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: GALLERY PREVIEW
          ========================================================================= */}
      <section className="py-28 md:py-40 relative border-b border-[#292825] bg-[#141413]/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5AE8B] font-mono block mb-3">
                05 / Visual Monograph
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#EAE4D9] uppercase tracking-tight">
                Architectural exhibition.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors pb-1 border-b border-[#292825] hover:border-[#C5AE8B]"
            >
              <span>Explore Full Gallery (16 Photographs)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden border border-[#292825] bg-[#191918] aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#C5AE8B]">
                    <span>{item.category}</span>
                    <span>{item.depth}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#EAE4D9] font-light mb-1 group-hover:text-[#C5AE8B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#77736A] font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRESS ACCOLADES
          ========================================================================= */}
      <section className="py-24 relative border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#191918]/40 border border-[#292825] flex flex-col justify-between">
                <p className="font-serif text-base sm:text-lg text-[#EAE4D9] font-light italic leading-snug mb-6">
                  "{item.quote}"
                </p>
                <div className="pt-4 border-t border-[#292825] flex justify-between items-center text-[11px] font-mono">
                  <span className="text-[#C5AE8B] uppercase tracking-wider">{item.publication}</span>
                  <span className="text-[#77736A]">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FINAL HERO CTA
          ========================================================================= */}
      <section className="py-32 md:py-44 relative overflow-hidden bg-[#10100F] text-center">
        {/* Background ambient radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,174,139,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-4">
            Subterranean Sanctuary Invitation
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#EAE4D9] uppercase tracking-tight mb-8 leading-tight">
            Your world <br />
            <span className="italic font-normal text-[#C5AE8B]">begins below.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#77736A] font-light max-w-xl mx-auto leading-relaxed mb-12">
            Descend into the volcanic heart of Mount Sahyadri in the Western Ghats. Reserve your subterranean residence and experience seclusion at another level of human existence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/reservations"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium text-[#10100F] bg-[#C5AE8B] hover:bg-[#DFCDB4] transition-all duration-300 shadow-[0_10px_35px_rgba(197,174,139,0.2)]"
            >
              <span>Reserve Your Escape</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.25em] font-light text-[#EAE4D9] border border-[#292825] hover:border-[#C5AE8B] transition-colors"
            >
              <span>Contact Concierge Desk</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentLightboxIndex}
        images={lightboxImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
        }
        onNext={() =>
          setCurrentLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  );
};
