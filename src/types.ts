export type PageView = 
  | 'home' 
  | 'about' 
  | 'menu' 
  | 'banquet' 
  | 'catering' 
  | 'gallery' 
  | 'contact' 
  | 'booking' 
  | 'menu-kit';

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'soups-salads' | 'main-course' | 'pasta' | 'seafood' | 'desserts' | 'cocktails';
  description: string;
  price: string;
  image: string;
  tags?: string[];
  isSpecial?: boolean;
  pairing?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'food' | 'cocktails' | 'interior' | 'chef' | 'private-dining' | 'events';
  categoryLabel: string;
  image: string;
  description: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  occasion: string;
  rating: number;
}

export interface BanquetSpace {
  id: string;
  name: string;
  capacity: string;
  seated: number;
  cocktail: number;
  squareFeet: number;
  description: string;
  features: string[];
  image: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: string;
  specialRequest: string;
  celebrationType?: string;
}
