export interface PortfolioItem {
  id: string;
  src: string;
  category: string;
  aspectRatio: string; // e.g., "aspect-[3/4]"
  alt: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface MonthData {
  current: string;
  next: string;
}

export type PageType = 'home' | 'headshots' | 'portraits' | 'pricing' | 'about' | 'inquire';