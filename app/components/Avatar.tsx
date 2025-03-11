"use client";

import Image from 'next/image';

interface AvatarProps {
  size?: number;
  className?: string;
}

export default function Avatar({ size = 80, className = '' }: AvatarProps) {
  return (
    <div 
      className={`relative rounded-full overflow-hidden border-2 border-primary ${className}`}
      style={{ 
        width: size, 
        height: size,
        minWidth: size,
        minHeight: size
      }}
    >
      <Image
        src="/profile.jpg"
        alt="Nathan's profile picture"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </div>
  );
} 