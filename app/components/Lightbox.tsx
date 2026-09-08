"use client";

import { useEffect, useCallback } from "react";

type LightboxProps = {
  images: string[];
  title: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({
  images,
  title,
  index,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const goPrev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  );

  const goNext = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl leading-none hover:opacity-60 transition-opacity"
      >
        ×
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-3xl leading-none px-3 py-2 hover:opacity-60 transition-opacity"
        >
          ‹
        </button>
      )}

      <img
        src={images[index]}
        alt={`${title} - Image ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full object-contain"
      />

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-3xl leading-none px-3 py-2 hover:opacity-60 transition-opacity"
        >
          ›
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-white/70">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
