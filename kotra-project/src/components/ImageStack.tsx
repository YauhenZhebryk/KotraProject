// src/components/ImageStack.tsx

import React, { useState } from 'react';

interface Image {
  id: number;
  src: string;
}

interface ImageStackProps {
  images: Image[];
  width?: string;
  height?: string;
  rotation?: number;
  scaleFactor?: number;
}

const ImageStack: React.FC<ImageStackProps> = ({
  images,
  width = '18rem', // Default width: 288px
  height = '18rem', // Default height: 288px
  rotation = 4, // Default rotation
  scaleFactor = 0.95, // Default scale factor for shrinking
}) => {
  const [currentOrder, setCurrentOrder] = useState<number[]>(images.map(img => img.id));
  const [exitingImageId, setExitingImageId] = useState<number | null>(null);

  // Define the transition duration in ms. This should match the CSS duration.
  const TRANSITION_DURATION = 500;

  const handleClick = () => {
    // Prevent new clicks while an animation is in progress
    if (exitingImageId) return;

    const topImageId = currentOrder[0];
    setExitingImageId(topImageId);

    // Use a timeout to reorder the images after the animation has finished
    setTimeout(() => {
      setCurrentOrder(prevOrder => {
        const newOrder = [...prevOrder];
        const topId = newOrder.shift();
        if (topId) {
          newOrder.push(topId);
        }
        return newOrder;
      });

      // Reset the exiting state after reordering
      setExitingImageId(null);
    }, TRANSITION_DURATION);
  };

  const containerStyle = {
    width,
    height,
  };

  return (
    <div
      className="relative cursor-pointer"
      style={containerStyle}
      onClick={handleClick}
    >
      {currentOrder.map((id, index) => {
        const image = images.find(img => img.id === id);
        if (!image) return null;

        const isExiting = image.id === exitingImageId;
        const zIndex = images.length - index;

        let transform = '';

        // The transform for the exiting image needs to be calculated based on its *final* position
        if (isExiting) {
          const exitIndex = images.length -1; // It will be the last item
          const translateX = exitIndex * 8;
          const translateY = exitIndex * 4;
          const rotate = exitIndex * rotation;
          const scale = Math.pow(scaleFactor, exitIndex);
          transform = `translateX(-${translateX}px) translateY(-${translateY}px) rotate(${rotate}deg) scale(${scale})`;
        } else {
          // Regular transform for images in the stack
          const translateX = index * 8;
          const translateY = index * 4;
          const rotate = index * rotation;
          const scale = Math.pow(scaleFactor, index);
          transform = `translateX(-${translateX}px) translateY(-${translateY}px) rotate(${rotate}deg) scale(${scale})`;
        }

        return (
          <img
            key={image.id}
            src={image.src}
            // We no longer need onTransitionEnd
            className="absolute w-full h-full object-cover rounded-xl shadow-lg transition-all duration-500 ease-in-out"
            style={{
              zIndex,
              transform,
              transformOrigin: 'bottom right',
              opacity: isExiting ? 0 : 1, // Lower opacity if exiting
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageStack;