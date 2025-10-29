export interface Review {
  id: number;
  reviewerName: string;
  rating: number; // 1-5 stars
  comment: string;
  date: string;
}

export interface Photographer {
  id: number;
  name: string;
  category: 'sports' | 'wildlife' | 'street' | 'festivals' | 'portrait' | 'landscape';
  image: string;
  bio?: string;
  location: string;
  gear: {
    camera: string;
    lenses: string[];
    other?: string[];
  };
  portfolio: string[]; // Array of up to 5 portfolio images
  experience: string;
  priceRange: string;
  rating: number; // Average rating 1-5
  totalReviews: number;
  reviews: Review[]; // Array of user reviews
  contactInfo?: {
    instagram?: string;
    website?: string;
  };
}

export const PHOTOGRAPHER_CATEGORIES = [
  'sports',
  'wildlife', 
  'street',
  'festivals',
  'portrait',
  'landscape'
] as const;