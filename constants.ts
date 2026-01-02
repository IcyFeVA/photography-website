import { PortfolioItem, Testimonial } from './types';

// Using placeholder images that mimic high-end portrait photography
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '0',
    src: '/img/front9.png',
    category: 'CREATIVE',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Artistic portrait with shadow play'
  },
  {
    id: '3',
    src: '/img/front14.png',
    category: 'CORPORATE',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Executive portrait'
  },

  {
    id: '2',
    src: '/img/front12.png',
    category: 'EDITORIAL',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Fashion forward editorial shot'
  },

  {
    id: '4',
    src: '/img/front11.png',
    category: 'LIFESTYLE',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Outdoor natural light portrait'
  },
  // {
  //   id: '5',
  //   src: '/img/front12.png',
  //   category: 'THEATRICAL',
  //   aspectRatio: 'aspect-[8/10]',
  //   alt: 'Intense cinematic headshot'
  // },
  {
    id: '6',
    src: '/img/front13.png',
    category: 'CORPORATE',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Tech CEO headshot'
  },
  // {
  //   id: '7',
  //   src: '/img/front7.png',
  //   category: 'FAMILY',
  //   aspectRatio: 'aspect-[8/10]',
  //   alt: 'Candid family moment'
  // },
  {
    id: '8',
    src: '/img/front8.png',
    category: 'CREATIVE',
    aspectRatio: 'aspect-[8/10]',
    alt: 'Artistic portrait with shadow play'
  },
  // {
  //   id: '1',
  //   src: '/img/front12.png',
  //   category: 'THEATRICAL',
  //   aspectRatio: 'aspect-[8/10]',
  //   alt: 'Dramatic actor headshot in black and white'
  // }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "Pascal understood my casting type immediately. The shots aren't just pretty; they are getting me into rooms I couldn't access before.",
    author: "Elena R.",
    role: "Actress, Vancouver Film"
  },
  {
    id: 't2',
    text: "As a realtor, trust is my currency. Pascal captured a look that is approachable yet undeniably authoritative. The ROI was immediate.",
    author: "David C.",
    role: "Sotheby's International Realty"
  },
  {
    id: 't3',
    text: "I hate having my photo taken. Pascal made the process feel like a workshop. Calm, professional, and surprisingly enjoyable.",
    author: "Sarah J.",
    role: "VP of Engineering, FinTech"
  },
  {
    id: 't4',
    text: "We didn't want 'cheese'. We wanted a document of who our family is right now. The results look like they belong in a magazine.",
    author: "The Morrison Family",
    role: "South Surrey"
  }
];

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  email: "mailto:hello@pascalzirn.com"
};