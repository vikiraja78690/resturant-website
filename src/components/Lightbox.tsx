import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        handleNext();
      } else {
        // Swiped right -> prev
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      id="gallery-lightbox-modal"
      data-preserve-dark="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 select-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button with touch target & safe area */}
      <button
        id="lightbox-close-button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 text-[#F5F2ED] hover:text-[#D4AF37] hover:bg-white/20 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 sm:bg-white/10 text-[#F5F2ED] hover:text-[#D4AF37] hover:bg-white/20 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next image"
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 sm:bg-white/10 text-[#F5F2ED] hover:text-[#D4AF37] hover:bg-white/20 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div
        className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A] max-w-full">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] sm:max-h-[72vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            {item.categoryLabel}
          </span>
          <h3 className="font-serif text-lg sm:text-2xl text-[#F5F2ED] mt-0.5 font-light">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#F5F2ED]/60 mt-1 font-light line-clamp-2 sm:line-clamp-none">
            {item.description}
          </p>
          <span className="inline-block mt-2 text-[10px] text-[#F5F2ED]/40 font-light">
            {currentIndex + 1} of {items.length} • Swipe or Use Arrows
          </span>
        </div>
      </div>
    </div>
  );
};
