import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SimpleImgSwapperProps {
  images?: Array<string | { src: string; alt?: string }>;
  width?: string;
  height?: string;
  animationSpeed?: number;
}

const defaultImages = [
  { src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format', alt: 'Campfire' },
  { src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format', alt: 'Mountains' },
  { src: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format', alt: 'Lake' },
];

export default function SimpleImgSwapper({ images = defaultImages, width = '400', height = '300', animationSpeed = 0.3 }: SimpleImgSwapperProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Normalize images to object format
  const normalizedImages = images.map(img =>
    typeof img === 'string' ? { src: img, alt: '' } : img
  );

  const prev = () => {
  setDirection(-1);
  setCurrent((current - 1 + images.length) % images.length);
  };
  const next = () => {
  setDirection(1);
  setCurrent((current + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="flex items-center justify-center gap-8">
        <button
          className="min-w-12 min-h-12 w-12 h-12 rounded-full border-2 border-orange-400 text-orange-400 flex items-center justify-center text-2xl hover:bg-orange-500 hover:text-white transition shadow-lg"
          onClick={prev}
          aria-label="Previous"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex items-center justify-center overflow-hidden" style={{ width, height }}>
          <motion.img
            key={current}
            src={normalizedImages[current].src}
            alt={normalizedImages[current].alt || `img-${current}`}
            className="rounded-2xl object-cover shadow-lg"
            style={{ width, height }}
            initial={{ x: direction === 1 ? width : -width, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: animationSpeed, ease: 'easeInOut' }}
          />
        </div>
        <button
          className="min-w-12 min-h-12 w-12 h-12 rounded-full border-2 border-orange-400 text-orange-400 flex items-center justify-center text-2xl hover:bg-orange-500 hover:text-white transition shadow-lg"
          onClick={next}
          aria-label="Next"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div className="flex gap-2 mt-6">
        {normalizedImages.map((_, idx) => (
          <span
            key={idx}
            className={`w-4 h-4 rounded-full transition bg-orange-200 ${current === idx ? 'bg-orange-400' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
