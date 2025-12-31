import { PortfolioItem, Testimonial } from './types';

// Using placeholder images that mimic high-end portrait photography
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    src: 'https://picsum.photos/800/1067?random=1',
    category: 'THEATRICAL',
    aspectRatio: 'aspect-[3/4]',
    alt: 'Dramatic actor headshot in black and white'
  },
  {
    id: '2',
    src: 'https://picsum.photos/800/1200?random=2',
    category: 'EDITORIAL',
    aspectRatio: 'aspect-[2/3]',
    alt: 'Fashion forward editorial shot'
  },
  {
    id: '3',
    src: 'https://picsum.photos/800/800?random=3',
    category: 'CORPORATE',
    aspectRatio: 'aspect-square',
    alt: 'Executive portrait'
  },
  {
    id: '4',
    src: 'https://picsum.photos/800/1000?random=4',
    category: 'LIFESTYLE',
    aspectRatio: 'aspect-[4/5]',
    alt: 'Outdoor natural light portrait'
  },
  {
    id: '5',
    src: 'https://picsum.photos/800/1200?random=5',
    category: 'THEATRICAL',
    aspectRatio: 'aspect-[2/3]',
    alt: 'Intense cinematic headshot'
  },
  {
    id: '6',
    src: 'https://picsum.photos/800/1067?random=6',
    category: 'CORPORATE',
    aspectRatio: 'aspect-[3/4]',
    alt: 'Tech CEO headshot'
  },
  {
    id: '7',
    src: 'https://picsum.photos/800/600?random=7',
    category: 'FAMILY',
    aspectRatio: 'aspect-[4/3]',
    alt: 'Candid family moment'
  },
  {
    id: '8',
    src: 'https://picsum.photos/800/1000?random=8',
    category: 'CREATIVE',
    aspectRatio: 'aspect-[4/5]',
    alt: 'Artistic portrait with shadow play'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "Pascal understood my casting type immediately. The shots aren't just pretty; they are getting me into rooms I couldn't access before.",
    author: "Elena R.",
    role: "Lead Actress, Vancouver Film"
  },
  {
    id: 't2',
    text: "As a realtor, trust is my currency. Pascal engineered a look that is approachable yet undeniably authoritative. The ROI was immediate.",
    author: "David C.",
    role: "Sotheby's International Realty"
  },
  {
    id: 't3',
    text: "I hate having my photo taken. Pascal made the process feel like a design workshop. Calm, precise, and surprisingly enjoyable.",
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
  email: "mailto:hello@pascal.photo"
};