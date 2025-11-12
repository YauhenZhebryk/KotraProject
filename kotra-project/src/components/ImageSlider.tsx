// src/components/ImageSlider.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- ИЗМЕНЕНИЕ 1 ---
// Обновляем интерфейс, чтобы он принимал массив объектов
interface ImageSliderProps {
  images: {
    id: number | string; // id может быть числом или строкой
    src: string;
  }[];
}

// Иконки для кнопок навигации (без изменений)
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-center gap-2 sm:gap-4 h-full">
        <button
          onClick={() => paginate(-1)}
          className="flex-shrink-0 z-10 w-12 h-12 rounded-full flex items-center justify-center
                     bg-transparent text-main-orange border-2 border-main-orange
                     hover:bg-main-orange hover:text-button-text transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-main-orange"
        >
          <ChevronLeftIcon />
        </button>
        <div className="relative h-96 w-full flex-1 overflow-hidden rounded-2xl">
          <motion.div
            className="flex h-full w-full"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            {/* --- ИЗМЕНЕНИЕ 2 --- */}
            {/* Используем image.id для key и image.src для источника изображения */}
            {images.map((image) => (
              <div key={image.id} className="relative h-full w-full flex-shrink-0">
                <img
                  src={image.src}
                  alt={`Slide for item ${image.id}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={() => paginate(1)}
          className="flex-shrink-0 w-12 z-10 h-12 rounded-full flex items-center justify-center
                     bg-transparent text-main-orange border-2 border-main-orange
                     hover:bg-main-orange hover:text-button-text transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-main-orange"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-3">
        {/* --- ИЗМЕНЕНИЕ 3 --- */}
        {/* Здесь тоже используем image.id для key, но для навигации по-прежнему нужен index */}
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300
                       ${currentIndex === index ? 'bg-main-orange' : 'bg-nostar hover:bg-main-orange/50'}`}
          />
        ))}
      </div>
    </div>
  );
};