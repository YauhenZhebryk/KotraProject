import React, { useState, useEffect, useCallback } from 'react';

interface ClickableImageProps {
  src: string;
  alt: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    setIsModalOpen(true);
    setTimeout(() => setShowContent(true), 50);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку фона
    setShowContent(false);
    setTimeout(() => setIsModalOpen(false), 300);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      {/* Превью изображения для сетки Masonry */}
      <img
        src={src}
        alt={alt}
        className="block w-full cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105"
        onClick={openModal}
      />

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          // Фон (бэкдроп). Теперь клик по нему будет работать всегда.
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 md:p-12 transition-opacity duration-300 ease-in-out
            ${showContent ? 'opacity-100' : 'opacity-0'} 
            bg-black/80 backdrop-blur-md`}
          onClick={closeModal}
        >
          {/* 
            Обертка для масштабирования. С нее УБРАН обработчик onClick.
          */}
          <div
            className={`relative w-full h-full transition-all duration-300 ease-in-out
              ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <img
              src={src}
              alt="Просмотр изображения"
              // КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: обработчик stopPropagation теперь здесь!
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ClickableImage;