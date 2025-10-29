import React from 'react';
import { Photographer } from '../types/Photographer';
import './PhotographerCard.css';

interface PhotographerCardProps {
  photographer: Photographer;
  style?: React.CSSProperties;
  isDragging?: boolean;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({
  photographer,
  style,
  isDragging = false
}) => {
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

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div 
      className={`photographer-card ${isDragging ? 'dragging' : ''}`}
      style={style}
    >
      <div className="card-image">
        <img 
          src={photographer.image} 
          alt={photographer.name}
          draggable={false}
        />
        <div className="category-badge" style={{ backgroundColor: getCategoryColor(photographer.category) }}>
          {formatCategory(photographer.category)}
        </div>
        
        {/* Click indicator */}
        <div className="click-indicator">
          <span>👆 Tap for details</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="photographer-name">{photographer.name}</h3>
        {photographer.bio && (
          <p className="photographer-bio">{photographer.bio}</p>
        )}
        <div className="card-location">
          <span className="location-icon">📍</span>
          {photographer.location}
        </div>
      </div>

      {/* Swipe indicators */}
      <div className="swipe-indicator swipe-left">
        <span>✗</span>
      </div>
      <div className="swipe-indicator swipe-right">
        <span>✓</span>
      </div>
    </div>
  );
};

export default PhotographerCard;