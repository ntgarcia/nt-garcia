"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start visible by default
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Reset cursor visibility when route changes
  useEffect(() => {
    // Short delay to ensure cursor is visible after navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Also ensure the cursor is positioned properly
      if (typeof window !== 'undefined' && !positionRef.current.x && !positionRef.current.y) {
        positionRef.current = { 
          x: window.innerWidth / 2, 
          y: window.innerHeight / 2 
        };
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);
  
  // Listen for navigation events
  useEffect(() => {
    const handleBeforeNavigate = () => {
      // Ensure cursor stays visible during navigation
      setIsVisible(true);
    };
    
    // Add event listener for before navigation
    window.addEventListener('beforeunload', handleBeforeNavigate);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeNavigate);
    };
  }, []);
  
  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;
    
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };
    
    const updateCursorPosition = () => {
      if (!cursorRef.current) return;
      
      // Smooth interpolation for cursor movement
      currentX = lerp(currentX, positionRef.current.x, 0.15);
      currentY = lerp(currentY, positionRef.current.y, 0.15);
      
      const cursorSize = isHoveringRef.current ? 36 : 24;
      const cursorOffset = isHoveringRef.current ? 18 : 12;
      
      cursorRef.current.style.transform = `translate3d(${currentX - cursorOffset}px, ${currentY - cursorOffset}px, 0)`;
      
      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };
    
    const updatePosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      // Don't hide cursor completely on mouse leave to prevent disappearing during navigation
      // Instead, just make it less visible
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0.3";
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable') ||
        target.closest('.clickable');
      
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      
      if (isClickable) {
        isHoveringRef.current = true;
        setIsHovering(true);
      } else {
        // Add a small delay before turning off hover state to prevent flickering
        hoverTimeoutRef.current = setTimeout(() => {
          isHoveringRef.current = false;
          setIsHovering(false);
        }, 50);
      }
    };

    const handleHoverEnd = () => {
      // Add a small delay before turning off hover state
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      hoverTimeoutRef.current = setTimeout(() => {
        isHoveringRef.current = false;
        setIsHovering(false);
      }, 50);
    };
    
    // Handle clicks to ensure cursor stays visible during navigation
    const handleClick = () => {
      // Force cursor to stay visible
      setIsVisible(true);
    };

    // Start animation loop
    animationFrameId = requestAnimationFrame(updateCursorPosition);
    
    // Initialize cursor position to center of screen to avoid initial jump
    if (typeof window !== 'undefined') {
      positionRef.current = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      };
    }
    
    // Add event listeners with passive option for better performance
    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);
    document.addEventListener("click", handleClick);

    return () => {
      // Clean up
      cancelAnimationFrame(animationFrameId);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.removeEventListener("click", handleClick);
    };
  }, [isVisible]);

  // Update ref when state changes
  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  const cursorSize = isHovering ? 36 : 24;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'cursor-hovering' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    >
      <svg
        width={cursorSize}
        height={cursorSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="6"
          stroke="white"
          strokeWidth="1"
          fill={isHovering ? "white" : "black"}
        />
        <circle cx="12" cy="12" r="2" fill={isHovering ? "black" : "white"} />
      </svg>
    </div>
  );
}
