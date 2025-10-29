import React from 'react';
import { Photographer } from '../types/Photographer';
import './ExpandedProfile.css';

interface ExpandedProfileProps {
  photographer: Photographer;
  isOpen: boolean;
  onClose: () => void;
}

const ExpandedProfile: React.FC<ExpandedProfileProps> = ({
  photographer,
  isOpen,
  onClose
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

  if (!isOpen) return null;

  return (
    <div className="expanded-profile-overlay">
      <div className="expanded-profile">
        {/* Header with main image */}
        <div className="profile-header">
          <button className="close-button" onClick={onClose}>
            <span>×</span>
          </button>
          <div className="header-image">
            <img src={photographer.image} alt={photographer.name} />
            <div className="header-overlay">
              <div className="header-content">
                <h2 className="profile-name">{photographer.name}</h2>
                <div 
                  className="profile-category" 
                  style={{ backgroundColor: getCategoryColor(photographer.category) }}
                >
                  {formatCategory(photographer.category)} Photographer
                </div>
                <div className="location">
                  <span className="location-icon">📍</span>
                  {photographer.location}
                </div>
                <div className="experience-price">
                  <span className="experience">{photographer.experience} experience</span>
                  <span className="price">{photographer.priceRange}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile content */}
        <div className="profile-content">
          {/* Bio */}
          <section className="profile-section">
            <h3>About</h3>
            <p className="bio">{photographer.bio}</p>
          </section>

          {/* Gear */}
          <section className="profile-section">
            <h3>Equipment</h3>
            <div className="gear-info">
              <div className="gear-item">
                <strong>Camera:</strong> {photographer.gear.camera}
              </div>
              <div className="gear-item">
                <strong>Lenses:</strong>
                <ul className="gear-list">
                  {photographer.gear.lenses.map((lens, index) => (
                    <li key={index}>{lens}</li>
                  ))}
                </ul>
              </div>
              {photographer.gear.other && photographer.gear.other.length > 0 && (
                <div className="gear-item">
                  <strong>Other Equipment:</strong>
                  <ul className="gear-list">
                    {photographer.gear.other.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Portfolio */}
          <section className="profile-section">
            <h3>Portfolio</h3>
            <div className="portfolio-grid">
              {photographer.portfolio.map((image, index) => (
                <div key={index} className="portfolio-item">
                  <img src={image} alt={`Portfolio ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* Contact Info */}
          {photographer.contactInfo && (
            <section className="profile-section">
              <h3>Contact</h3>
              <div className="contact-info">
                {photographer.contactInfo.email && (
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href={`mailto:${photographer.contactInfo.email}`}>
                      {photographer.contactInfo.email}
                    </a>
                  </div>
                )}
                {photographer.contactInfo.instagram && (
                  <div className="contact-item">
                    <span className="contact-icon">📸</span>
                    <a href={`https://instagram.com/${photographer.contactInfo.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                      {photographer.contactInfo.instagram}
                    </a>
                  </div>
                )}
                {photographer.contactInfo.website && (
                  <div className="contact-item">
                    <span className="contact-icon">🌐</span>
                    <a href={`https://${photographer.contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                      {photographer.contactInfo.website}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Action buttons */}
          <div className="profile-actions">
            <button className="action-button reject-button">
              <span>✗</span>
              Pass
            </button>
            <button className="action-button like-button">
              <span>✓</span>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedProfile;