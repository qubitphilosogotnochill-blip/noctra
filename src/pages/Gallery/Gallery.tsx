import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/hotelData';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import type { LightboxImage } from '../../components/Lightbox/Lightbox';

type CategoryFilter = 'all' | 'architecture' | 'residences' | 'experiences' | 'interiors' | 'details';

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: 'All Works', value: 'all' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Residences', value: 'residences' },
  { label: 'Experiences', value: 'experiences' },
  { label: 'Interiors', value: 'interiors' },
  { label: 'Details', value: 'details' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const lightboxImages: LightboxImage[] = useMemo(() => {
    return filteredItems.map((item) => ({
      id: item.id,
      url: item.image,
      title: item.title,
      caption: item.caption,
      depth: item.depth,
      category: item.category.toUpperCase(),
    }));
  }, [filteredItems]);

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#10100F] text-[#EAE4D9] pt-24 min-h-screen">
      {/* =========================================================================
          HERO & CURATORIAL STATEMENT
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-[#292825]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-3">
              Curated Photographic Monograph
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#EAE4D9] mb-6 leading-[0.95]">
              Visual <br />
              <span className="italic font-normal text-[#C5AE8B]">exhibition.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#77736A] font-light max-w-2xl leading-relaxed">
              A comprehensive photographic chronicle documenting the intersection of prehistoric rock formations, subterranean hydrology, and minimalist brutalist architecture deep inside Mount Seraph.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS
          ========================================================================= */}
      <section className="sticky top-20 z-30 bg-[#10100F]/90 backdrop-blur-md border-b border-[#292825] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between overflow-x-auto no-scrollbar gap-6">
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#10100F] bg-[#C5AE8B]'
                      : 'text-[#77736A] hover:text-[#EAE4D9] hover:bg-[#191918]'
                  }`}
                >
                  {cat.label}
                  {cat.value !== 'all' && (
                    <span className="ml-1.5 opacity-60 text-[10px]">
                      (
                      {GALLERY_ITEMS.filter((i) => i.category === cat.value).length}
                      )
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center text-xs font-mono text-[#77736A] tracking-wider shrink-0">
            <span>Showing {filteredItems.length} Photographs</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MASONRY-STYLE PHOTOGRAPHY EXHIBITION GRID
          ========================================================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => {
                // Vary aspect ratios for rich editorial rhythm
                const aspectClasses =
                  item.aspectRatio === 'portrait'
                    ? 'aspect-[3/4]'
                    : item.aspectRatio === 'square'
                    ? 'aspect-square'
                    : 'aspect-[16/11]';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    onClick={() => openLightbox(idx)}
                    className="group relative cursor-pointer overflow-hidden border border-[#292825] bg-[#191918] flex flex-col justify-between"
                  >
                    <div className={`relative w-full ${aspectClasses} overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10100F] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Depth Badge */}
                      <div className="absolute top-3 left-3 bg-[#10100F]/90 backdrop-blur-sm border border-[#292825] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#C5AE8B]">
                        {item.depth}
                      </div>

                      {/* Expand prompt icon on hover */}
                      <div className="absolute top-3 right-3 p-2 bg-[#10100F]/80 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5AE8B]">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Captions & Curatorial Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between bg-[#141413]">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#77736A] mb-1">
                          <span>Plate 0{idx + 1}</span>
                          <span className="text-[#C5AE8B]">{item.category}</span>
                        </div>
                        <h3 className="font-serif text-lg text-[#EAE4D9] font-light group-hover:text-[#C5AE8B] transition-colors mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#77736A] font-light leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Component with keyboard & arrow navigation */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentIdx}
        images={lightboxImages}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
        }
        onNext={() =>
          setCurrentIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  );
};
