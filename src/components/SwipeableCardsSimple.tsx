import React, { useState, useRef, useEffect } from 'react';
import { Photographer } from '../types/Photographer';
import ExpandedProfile from './ExpandedProfile';
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
  const [expandedProfileOpen, setExpandedProfileOpen] = useState(false);
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

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragData.isDragging) return;

    setDragData(prev => ({
      ...prev,
      currentX: e.clientX,
      currentY: e.clientY,
    }));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!dragData.isDragging) return;

    const touch = e.touches[0];
    setDragData(prev => ({
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY,
    }));
  };

  const handleMouseUp = () => {
    if (!dragData.isDragging) return;

    const deltaX = dragData.currentX - dragData.startX;
    const deltaY = dragData.currentY - dragData.startY;
    const threshold = 100;
    const dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // If drag distance is small, treat as click to open expanded profile
    if (dragDistance < 10) {
      setExpandedProfileOpen(true);
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

  const handleTouchEnd = () => {
    handleMouseUp();
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

  // Mouse and touch event listeners
  useEffect(() => {
    if (dragData.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragData.isDragging]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const isTopCard = index === 0;
    const deltaX = dragData.isDragging && isTopCard ? dragData.currentX - dragData.startX : 0;
    const deltaY = dragData.isDragging && isTopCard ? dragData.currentY - dragData.startY : 0;
    
    const rotation = deltaX * 0.1;
    const scale = 1 - (index * 0.05);
    const translateY = index * 10;
    const opacity = 1 - (index * 0.2);

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

  const getCategoryColor = (category: string) => {
    const colors = {
      sports: '#ff6b6b',
      wildlife: '#4ecdc4',
      street: '#45b7d1',
      festivals: '#f9ca24',
      portrait: '#f0932b',
      landscape: '#6c5ce7'
    };
    return colors[category as keyof typeof colors] || '#95a5a6';
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
            className="card-wrapper"
            style={getCardStyle(index)}
            onMouseDown={index === 0 ? handleMouseDown : undefined}
            onTouchStart={index === 0 ? handleTouchStart : undefined}
          >
            <div className="photographer-card">
              <div className="card-image">
                <img 
                  src={photographer.image} 
                  alt={photographer.name}
                  draggable={false}
                />
                <div 
                  className="category-badge" 
                  style={{ backgroundColor: getCategoryColor(photographer.category) }}
                >
                  {photographer.category.toUpperCase()}
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="photographer-name">{photographer.name}</h3>
                <p className="photographer-bio">{photographer.bio}</p>
                <div className="card-location">
                  <span>📍</span>
                  {photographer.location}
                </div>
                
                <button 
                  className="more-details-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedProfileOpen(true);
                  }}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
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
      {expandedProfileOpen && currentIndex < photographers.length && (
        <ExpandedProfile
          photographer={photographers[currentIndex]}
          isOpen={expandedProfileOpen}
          onClose={() => setExpandedProfileOpen(false)}
        />
      )}
    </div>
  );
};

export default SwipeableCards;