import React, { useState } from 'react';
import StarRating from './StarRating';
import './ReviewForm.css';

interface ReviewFormProps {
  onSubmitReview: (review: { rating: number; comment: string; reviewerName: string }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    if (comment.trim().length < 10) {
      alert('Please write a review of at least 10 characters');
      return;
    }

    if (reviewerName.trim().length < 2) {
      alert('Please enter your name');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmitReview({
        rating,
        comment: comment.trim(),
        reviewerName: reviewerName.trim()
      });
      
      // Reset form
      setRating(0);
      setComment('');
      setReviewerName('');
      setIsSubmitting(false);
      
      alert('Thank you for your review!');
    }, 1000);
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Rating</label>
          <StarRating
            rating={rating}
            interactive={true}
            size="large"
            onRatingChange={setRating}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviewerName">Your Name</label>
          <input
            type="text"
            id="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="Enter your name"
            maxLength={50}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Your Review</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience working with this photographer..."
            rows={4}
            maxLength={500}
            required
          />
          <div className="character-count">
            {comment.length}/500 characters
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting || rating === 0 || comment.trim().length < 10 || reviewerName.trim().length < 2}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;