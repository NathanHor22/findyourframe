import React, { useState, useRef, useEffect } from 'react';
import PhotographerCard from './PhotographerCard';
import ExpandedProfile from './ExpandedProfile';
import { Photographer } from '../types/Photographer';
import './SwipeableCards.css';

interface SwipeableCardsProps {
  photographers: Photographer[];
  onSwipe?: (photographer: Photographer, direction: 'left' | 'right') => void;
  onEndOfDeck?: () => void;
}

const SwipeableCards: React.FC<SwipeableCardsProps> = ({
  photographers,
  onSwipe,
  onEndOfDeck
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProfile, setExpandedProfile] = useState<Photographer | null>(null);
  const [dragData, setDragData] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);

  // Get visible cards (current + next 2)
  const visibleCards = photographers.slice(currentIndex, currentIndex + 3);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (currentIndex >= photographers.length) return;
    
    setDragData({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      currentY: e.clientY,
    });
  };

  const handleCloseProfile = () => {
    setExpandedProfile(null);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragData.isDragging) return;

    setDragData(prev => ({
      ...prev,
      currentX: e.clientX,
      currentY: e.clientY,
    }));
  };

  const handleMouseUp = () => {
    if (!dragData.isDragging) return;

    const deltaX = dragData.currentX - dragData.startX;
    const deltaY = dragData.currentY - dragData.startY;
    const threshold = 100; // Minimum distance to trigger swipe
    const dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // If drag distance is small, treat as click
    if (dragDistance < 10) {
      const currentPhotographer = photographers[currentIndex];
      setExpandedProfile(currentPhotographer);
    } else if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? 'right' : 'left';
      handleSwipe(direction);
    }

    setDragData({
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
    });
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex >= photographers.length) return;

    const currentPhotographer = photographers[currentIndex];
    onSwipe?.(currentPhotographer, direction);

    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= photographers.length) {
        onEndOfDeck?.();
      }
      return newIndex;
    });
  };

  // Mouse event listeners
  useEffect(() => {
    if (dragData.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragData.isDragging]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (currentIndex >= photographers.length) return;
    
    const touch = e.touches[0];
    setDragData({
      isDragging: true,
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragData.isDragging) return;
    
    const touch = e.touches[0];
    setDragData(prev => ({
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY,
    }));
  };

  const handleTouchEnd = () => {
    if (!dragData.isDragging) return;

    const deltaX = dragData.currentX - dragData.startX;
    const deltaY = dragData.currentY - dragData.startY;
    const threshold = 100; // Minimum distance to trigger swipe
    const dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // If drag distance is small, treat as tap
    if (dragDistance < 10) {
      const currentPhotographer = photographers[currentIndex];
      setExpandedProfile(currentPhotographer);
    } else if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? 'right' : 'left';
      handleSwipe(direction);
    }

    setDragData({
      isDragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
    });
  };

  const getCardStyle = (index: number): React.CSSProperties => {
    const isTopCard = index === 0;
    const deltaX = dragData.isDragging && isTopCard ? dragData.currentX - dragData.startX : 0;
    const deltaY = dragData.isDragging && isTopCard ? dragData.currentY - dragData.startY : 0;
    
    const rotation = deltaX * 0.1; // Rotation based on horizontal drag
    const scale = 1 - (index * 0.05); // Each card slightly smaller
    const translateY = index * 10; // Stack cards vertically
    const opacity = 1 - (index * 0.2); // Each card slightly more transparent

    return {
      transform: `
        translateX(${deltaX}px) 
        translateY(${deltaY + translateY}px) 
        rotate(${rotation}deg) 
        scale(${scale})
      `,
      opacity: opacity,
      zIndex: 10 - index,
    };
  };

  const getSwipeClass = () => {
    if (!dragData.isDragging) return '';
    const deltaX = dragData.currentX - dragData.startX;
    const threshold = 50;
    
    if (deltaX > threshold) return 'swiping-right';
    if (deltaX < -threshold) return 'swiping-left';
    return '';
  };

  if (currentIndex >= photographers.length) {
    return (
      <div className="cards-container">
        <div className="end-of-deck">
          <h2>🎉 You've seen all photographers!</h2>
          <p>Check back later for more amazing talent.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-container">
      <div className="cards-stack">
        {visibleCards.map((photographer, index) => (
          <div
            key={photographer.id}
            ref={index === 0 ? cardRef : null}
            className={`card-wrapper ${index === 0 ? getSwipeClass() : ''}`}
            style={getCardStyle(index)}
            onMouseDown={index === 0 ? handleMouseDown : undefined}
            onTouchStart={index === 0 ? handleTouchStart : undefined}
            onTouchMove={index === 0 ? handleTouchMove : undefined}
            onTouchEnd={index === 0 ? handleTouchEnd : undefined}
          >
            <PhotographerCard
              photographer={photographer}
              isDragging={dragData.isDragging && index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Action buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn reject-btn"
          onClick={() => handleSwipe('left')}
          disabled={currentIndex >= photographers.length}
        >
          ✗
        </button>
        <button 
          className="action-btn like-btn"
          onClick={() => handleSwipe('right')}
          disabled={currentIndex >= photographers.length}
        >
          ✓
        </button>
      </div>

      {/* Expanded Profile Modal */}
      <ExpandedProfile
        photographer={expandedProfile!}
        isOpen={expandedProfile !== null}
        onClose={handleCloseProfile}
      />
    </div>
  );
};

export default SwipeableCards;