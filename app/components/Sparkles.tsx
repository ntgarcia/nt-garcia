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
    
    // Generate position that avoids the left side where text is located
    let x, y;
    
    // Define the left area to avoid (0% to 40% of the screen width)
    const leftAreaMax = 40;
    
    // Increase top area to avoid on mobile (was 35%)
    // We use window.innerWidth to check if we're on a mobile screen
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const topHeaderAreaMax = isMobile ? 50 : 35; // 50% for mobile, 35% for larger screens
    
    // Decide where to place the sparkle
    const placement = Math.random();
    
    if (placement < 0.4) {
      // Place on the right side (40% to 100% of width)
      x = leftAreaMax + Math.random() * (100 - leftAreaMax);
      y = Math.random() * topHeaderAreaMax; // Top right area
    } else if (placement < 0.7) {
      // Place on the right side but lower
      x = leftAreaMax + Math.random() * (100 - leftAreaMax);
      y = topHeaderAreaMax + Math.random() * (100 - topHeaderAreaMax); // Bottom right area
    } else {
      // Place on the bottom area (below header text)
      x = Math.random() * leftAreaMax; // Left side
      // On mobile, ensure sparkles are further down
      y = isMobile 
        ? Math.max(60, topHeaderAreaMax + Math.random() * (100 - topHeaderAreaMax)) 
        : topHeaderAreaMax + Math.random() * (100 - topHeaderAreaMax); // Below header text
    }
    
    // Make sparkles slightly smaller on mobile
    const sizeMultiplier = isMobile ? 0.8 : 1.0;
    
    return {
      id: generateUniqueId(),
      x,
      y,
      size: (Math.random() * 1.0 + 0.8) * sizeMultiplier, // 0.8 to 1.8, smaller on mobile
      opacity: Math.random() * 0.3 + 0.7, // 0.7 to 1.0
      duration: Math.random() * 2 + 1, // 1 to 3 seconds
      type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
      createdAt: Date.now(),
      lifespan: Math.random() * 1000 + 1000 // 1-2 seconds lifespan
    };
  };
  
  // Add a state to track window size
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  
  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
        // Fewer sparkles on mobile
        const maxSparkles = windowWidth < 640 ? 12 : 20;
        const numToAdd = Math.max(0, Math.min(5, maxSparkles - remainingSparkles.length));
        const newSparkles = Array.from({ length: numToAdd }, createSparkle);
        
        return [...remainingSparkles, ...newSparkles];
      });
    }, 200); // Check frequently (5 times per second)
    
    return () => clearInterval(interval);
  }, [windowWidth]); // Re-run effect when window width changes
  
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