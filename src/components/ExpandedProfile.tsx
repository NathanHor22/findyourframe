import React, { useState } from 'react';
import { Photographer, Review } from '../types/Photographer';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';
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
  const [reviews, setReviews] = useState<Review[]>(photographer.reviews);

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

  const handleSubmitReview = (newReview: { rating: number; comment: string; reviewerName: string }) => {
    const review: Review = {
      id: reviews.length + 1,
      reviewerName: newReview.reviewerName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([review, ...reviews]);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="expanded-profile-overlay" onClick={handleBackdropClick}>
      <div className="expanded-profile">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-main-image">
            <img src={photographer.image} alt={photographer.name} />
            <div 
              className="category-badge" 
              style={{ backgroundColor: getCategoryColor(photographer.category) }}
            >
              {photographer.category.toUpperCase()}
            </div>
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{photographer.name}</h1>
            <p className="profile-bio">{photographer.bio}</p>
            <div className="profile-location">
              <span className="location-icon">📍</span>
              {photographer.location}
            </div>
            
            <div className="rating-section">
              <StarRating rating={photographer.rating} showNumber={true} size="medium" />
              <span className="review-count">({photographer.totalReviews} reviews)</span>
            </div>
            
            {/* Contact Links */}
            <div className="contact-links">
              {photographer.contactInfo?.instagram && (
                <a 
                  href={`https://instagram.com/${photographer.contactInfo.instagram.replace('@', '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link instagram"
                >
                  📷 Instagram
                </a>
              )}
              {photographer.contactInfo?.website && (
                <a 
                  href={`https://${photographer.contactInfo.website}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link website"
                >
                  🌐 Website
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="profile-content">
          {/* Portfolio Section - 5 additional photos */}
          <section className="profile-section">
            <h3>Portfolio</h3>
            <div className="portfolio-grid">
              {photographer.portfolio.map((image, index) => (
                <div key={index} className="portfolio-item">
                  <img src={image} alt={`${photographer.name} portfolio ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>

          {/* Camera Gear Section */}
          <section className="profile-section">
            <h3>Camera Gear & Equipment</h3>
            <div className="gear-section">
              <div className="gear-category">
                <h4>📷 Camera</h4>
                <p className="gear-item">{photographer.gear.camera}</p>
              </div>
              
              <div className="gear-category">
                <h4>🔍 Lenses</h4>
                <ul className="gear-list">
                  {photographer.gear.lenses.map((lens, index) => (
                    <li key={index} className="gear-item">{lens}</li>
                  ))}
                </ul>
              </div>
              
              {photographer.gear.other && photographer.gear.other.length > 0 && (
                <div className="gear-category">
                  <h4>⚡ Additional Equipment</h4>
                  <ul className="gear-list">
                    {photographer.gear.other.map((item, index) => (
                      <li key={index} className="gear-item">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Experience Section */}
          <section className="profile-section">
            <h3>Experience</h3>
            <div className="experience-info">
              <div className="experience-item">
                <span className="experience-label">Years Active:</span>
                <span className="experience-value">{photographer.experience}</span>
              </div>
              <div className="experience-item">
                <span className="experience-label">Price Range:</span>
                <span className="experience-value">{photographer.priceRange}</span>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="profile-section">
            <h3>Reviews ({reviews.length})</h3>
            <div className="reviews-list">
              {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <span className="reviewer-name">{review.reviewerName}</span>
                    <StarRating rating={review.rating} size="small" />
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Review Form */}
          <ReviewForm onSubmitReview={handleSubmitReview} />
        </div>
      </div>
    </div>
  );
};

export default ExpandedProfile;