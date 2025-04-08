"use client";

import { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";

type ImageLoopProps = {
  images: string[];
};

// Using memo to prevent unnecessary re-renders
const ImageLoop = memo(function ImageLoop({ images }: ImageLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Simple effect to change image in sequence
  useEffect(() => {
    // Only set up interval if we have multiple images
    if (images.length <= 1) return;
    
    // Create interval to advance through images
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]); // Only depend on images.length to prevent unnecessary effect reruns
  
  // If no images, show nothing
  if (images.length === 0) {
    return <div />;
  }
  
  // Show only the current image with a simple cut (no transition)
  return (
    <div 
      className="relative w-full overflow-hidden"
    >
      {/* Wrapper div for applying border/ring */}
      <div className="relative w-full h-auto overflow-hidden rounded-sm ring-1 ring-inset ring-black/10">
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`} 
          className="w-full h-auto object-cover block"
          loading="lazy" 
        />
      </div>
    </div>
  );
});

// Make sure the display name is set for debugging
ImageLoop.displayName = 'ImageLoop';

export default ImageLoop; 