import React, { useState, useEffect } from 'react';

interface MasonryGridProps {
  images: string[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-12">
        {images.map((url, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={url}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(url)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 cursor-pointer"
          onClick={closeModal}
        >
          <div
            className="relative h-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[90vh] h-full object-contain rounded-xl cursor-default "
            />
            
            <button
              onClick={closeModal}
              className="absolute bottom-[90vh] -right-6 size-12 text-button-text text-5xl z-10 hover:text-main-orange hover:bg-button-text transition-colors flex justify-center items-center rounded-full bg-main-orange"
              aria-label="Close image"
            >
              <span className='mb-[5px]'>&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGrid;