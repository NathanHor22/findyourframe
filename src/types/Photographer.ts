export interface Photographer {
  id: number;
  name: string;
  category: 'sports' | 'wildlife' | 'street' | 'festivals' | 'portrait' | 'landscape';
  image: string;
  bio?: string;
}

export const PHOTOGRAPHER_CATEGORIES = [
  'sports',
  'wildlife', 
  'street',
  'festivals',
  'portrait',
  'landscape'
] as const;