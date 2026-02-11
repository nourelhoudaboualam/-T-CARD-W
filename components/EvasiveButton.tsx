
import React, { useState, useRef, useEffect } from 'react';

const EvasiveButton: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMovingRef = useRef(false);

  const moveButtonWithinCard = () => {
    // Find the main card container to stay within its bounds
    const parent = buttonRef.current?.closest('.kawaii-glass') as HTMLElement;
    if (!parent) return;

    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    
    // Approximate dimensions if not yet rendered
    const btnWidth = buttonRef.current?.offsetWidth || 150;
    const btnHeight = buttonRef.current?.offsetHeight || 60;
    
    // Padding to keep it away from the card's decorative borders - tighter for mobile
    const padding = 20;

    // Current local coordinates relative to the parent card
    let currentX = position?.x;
    let currentY = position?.y;

    // If it's the first move, determine starting relative position
    if (currentX === undefined || currentY === undefined) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        currentX = rect.left - parentRect.left;
        currentY = rect.top - parentRect.top;
      } else {
        // Fallback to center
        currentX = parentWidth / 2 - btnWidth / 2;
        currentY = parentHeight / 2 - btnHeight / 2;
      }
    }

    // Teleport to the opposite quadrant for maximum distance
    // Check if device is small (mobile) to adjust randomness range
    const isMobile = window.innerWidth < 640;
    const margin = isMobile ? 10 : 40;

    const targetX = currentX < parentWidth / 2 
      ? (parentWidth / 2) + (Math.random() * (parentWidth / 2 - btnWidth - margin))
      : margin + (Math.random() * (parentWidth / 2 - btnWidth - margin));

    const targetY = currentY < parentHeight / 2
      ? (parentHeight / 2) + (Math.random() * (parentHeight / 2 - btnHeight - margin))
      : margin + (Math.random() * (parentHeight / 2 - btnHeight - margin));

    // Clamp values to ensure it stays strictly within the card visible area
    const clampedX = Math.min(Math.max(margin, targetX), parentWidth - btnWidth - margin);
    const clampedY = Math.min(Math.max(margin, targetY), parentHeight - btnHeight - margin);

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleTrigger = (e: React.UIEvent | UIEvent) => {
    // Stop event propagation and default behavior immediately
    e.preventDefault();
    e.stopPropagation();

    if (isMovingRef.current) return;

    isMovingRef.current = true;
    setIsVisible(false);

    // Fade out phase
    setTimeout(() => {
      moveButtonWithinCard();
      
      // Short delay before fading back in at the new location
      setTimeout(() => {
        setIsVisible(true);
        // Reset the moving flag after the button starts reappearing
        setTimeout(() => {
          isMovingRef.current = false;
        }, 150);
      }, 50);
    }, 450); 
  };

  useEffect(() => {
    const handleResize = () => setPosition(null);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const style: React.CSSProperties = {
    position: position ? 'absolute' : 'relative',
    left: position ? `${position.x}px` : undefined,
    top: position ? `${position.y}px` : undefined,
    zIndex: 1000,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(15deg)',
    transition: 'opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: isVisible ? 'auto' : 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'none'
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleTrigger}
      onPointerDown={handleTrigger}
      onMouseDown={handleTrigger}
      onClick={handleTrigger}
      style={style}
      className="bratz-button px-6 py-4 sm:px-10 sm:py-5 bg-white text-black border-4 border-black font-chunky rounded-full text-lg sm:text-2xl hover:bg-black hover:text-white group flex items-center justify-center gap-2"
    >
      La al9lawi
      <span className="text-xl sm:text-3xl">🍆</span>
    </button>
  );
};

export default EvasiveButton;
