import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  id: string;
  url: string;
  title: string;
  caption?: string;
  depth?: string;
  category?: string;
}

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9990] bg-[#10100F]/96 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between text-xs tracking-[0.25em] text-[#77736A] uppercase font-mono z-10">
          <div className="flex items-center gap-3">
            <span className="text-[#C5AE8B]">{currentImage.depth || 'Subterranean'}</span>
            <span>·</span>
            <span>{currentImage.category || 'Architecture'}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#EAE4D9]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-[#EAE4D9] hover:text-[#C5AE8B] transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#191918]/80 text-[#EAE4D9] hover:text-[#C5AE8B] hover:bg-[#292825] transition-all border border-[#292825]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Current Image */}
          <motion.div
            key={currentImage.id || currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl max-h-[75vh] w-full flex flex-col items-center justify-center select-none"
          >
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="max-h-[70vh] w-auto max-w-full object-contain border border-[#292825] shadow-2xl"
            />
          </motion.div>

          {/* Next Arrow */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#191918]/80 text-[#EAE4D9] hover:text-[#C5AE8B] hover:bg-[#292825] transition-all border border-[#292825]"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details Bar */}
        <div className="max-w-3xl mx-auto w-full text-center z-10">
          <h3 className="font-serif text-lg sm:text-2xl text-[#EAE4D9] font-light tracking-wide mb-1">
            {currentImage.title}
          </h3>
          {currentImage.caption && (
            <p className="text-xs sm:text-sm text-[#77736A] font-light leading-relaxed max-w-xl mx-auto">
              {currentImage.caption}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
