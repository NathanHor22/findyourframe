import React from 'react';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'small' | 'medium' | 'large';
  showNumber?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 'medium',
  showNumber = false,
  interactive = false,
  onRatingChange
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleStarHover = (starRating: number) => {
    if (interactive) {
      setHoverRating(starRating);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };

  const getStarFill = (starIndex: number) => {
    const currentRating = hoverRating || rating;
    if (starIndex <= currentRating) {
      return 'filled';
    } else if (starIndex - 0.5 <= currentRating) {
      return 'half';
    }
    return 'empty';
  };

  return (
    <div className={`star-rating ${size} ${interactive ? 'interactive' : ''}`}>
      <div className="stars" onMouseLeave={handleMouseLeave}>
        {Array.from({ length: maxStars }, (_, index) => {
          const starValue = index + 1;
          const fillType = getStarFill(starValue);
          
          return (
            <span
              key={index}
              className={`star ${fillType}`}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
            >
              ★
            </span>
          );
        })}
      </div>
      {showNumber && (
        <span className="rating-number">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;