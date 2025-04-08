"use client";

import Image from 'next/image';

interface AvatarProps {
  size?: number;
  className?: string;
}

export default function Avatar({ size = 80, className = '' }: AvatarProps) {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden ring-1 ring-inset ring-black/10 ${className}`}
      style={{ 
        width: size, 
        height: size,
        minWidth: size,
        minHeight: size
      }}
    >
      <Image
        src="/me-2.png"
        alt="Nathan's profile picture"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
} 