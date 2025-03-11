'use client';

import { useEffect, useState, useRef } from 'react';

type Sparkle = {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  type: string;
  createdAt: number;
  lifespan: number;
};

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleCountRef = useRef(0);
  
  // Generate a truly unique ID
  const generateUniqueId = () => {
    sparkleCountRef.current += 1;
    return `sparkle-${Date.now()}-${sparkleCountRef.current}-${Math.random().toString(36).substring(2, 9)}`;
  };
  
  // Create a new sparkle with a unique ID
  const createSparkle = (): Sparkle => {
    const sparkleTypes = ['✦', '✧', '⊹', '⋆', '˚'];
    
    // Generate position that avoids the center area
    let x, y;
    
    // Define the center area to avoid (30% to 70% of the screen)
    const centerXMin = 30;
    const centerXMax = 70;
    const centerYMin = 30;
    const centerYMax = 70;
    
    // Generate random position
    const useTopBottom = Math.random() > 0.5;
    
    if (useTopBottom) {
      // Place on top or bottom areas
      x = Math.random() * 100; // Any x position
      y = Math.random() > 0.5 
        ? Math.random() * centerYMin // Top area
        : centerYMax + Math.random() * (100 - centerYMax); // Bottom area
    } else {
      // Place on left or right areas
      x = Math.random() > 0.5
        ? Math.random() * centerXMin // Left area
        : centerXMax + Math.random() * (100 - centerXMax); // Right area
      y = Math.random() * 100; // Any y position
    }
    
    return {
      id: generateUniqueId(),
      x,
      y,
      size: Math.random() * 1.0 + 0.8, // 0.8 to 1.8 (much larger)
      opacity: Math.random() * 0.3 + 0.7, // 0.7 to 1.0 (more visible)
      duration: Math.random() * 2 + 1, // 1 to 3 seconds (faster animation)
      type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
      createdAt: Date.now(),
      lifespan: Math.random() * 1000 + 1000 // 1-2 seconds lifespan
    };
  };
  
  useEffect(() => {
    // Start with 12 sparkles
    const initialSparkles = Array.from({ length: 12 }, createSparkle);
    setSparkles(initialSparkles);
    
    // Add new sparkles and remove old ones frequently
    const interval = setInterval(() => {
      const now = Date.now();
      
      setSparkles(prevSparkles => {
        // Remove sparkles that have exceeded their lifespan
        const remainingSparkles = prevSparkles.filter(
          sparkle => now - sparkle.createdAt < sparkle.lifespan
        );
        
        // Add new sparkles to maintain around 15-20 total
        const numToAdd = Math.max(0, Math.min(5, 20 - remainingSparkles.length));
        const newSparkles = Array.from({ length: numToAdd }, createSparkle);
        
        return [...remainingSparkles, ...newSparkles];
      });
    }, 200); // Check frequently (5 times per second)
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute text-primary animate-twinkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: `${sparkle.size}rem`,
            opacity: sparkle.opacity,
            '--twinkle-duration': `${sparkle.duration}s`,
          } as React.CSSProperties}
        >
          {sparkle.type}
        </div>
      ))}
    </div>
  );
} 