import { PortfolioItem, Testimonial } from './types';

export const IS_BOOKING_OPEN = true;

// Add dates in 'YYYY-MM-DD' format to block an entire day (e.g. '2026-03-03').
// To block a specific time, append the time, e.g. '2026-03-03-2pm' or 'YYYY-MM-DD-10am'.
// If all available times for a day are blocked individually, the whole day will gray out automatically.
export const UNAVAILABLE_DATES: string[] = [
  '2026-03-03-10am',
  '2026-03-10-10am',
  '2026-03-17-10am',

];

// Using placeholder images that mimic high-end portrait photography
export const PORTFOLIO_COLUMNS = [
  // Column 1
  [
    {
      id: '0',
      src: '/img/front20.png',
      category: 'ACTRESS',
      aspectRatio: 'aspect-[8/10]',
      alt: 'Artistic portrait with shadow play'
    },


    // {
    //   id: '6',
    //   src: '/img/front13.png',
    //   category: 'ARTIST',
    //   aspectRatio: 'aspect-[8/10]',
    //   alt: 'Tech CEO headshot'
    // },
    {
      id: '33',
      src: '/img/marcel.png',
      category: 'Artist',
      aspectRatio: 'aspect-[10/8]',
      alt: 'Executive portrait'
    },
    {
      id: '7',
      src: '/img/front19.png',
      category: 'FRIENDS & FAMILY',
      aspectRatio: 'aspect-[5/4]',
      alt: 'Candid family moment'
    },
  ],
  // Column 2
  [
    {
      id: '22',
      src: '/img/front22.png',
      category: 'THEATRICAL ACTOR',
      aspectRatio: 'aspect-[10/8]',
      alt: 'Intense cinematic headshot'
    },
    // {
    //   id: '3',
    //   src: '/img/family3.png',
    //   category: 'FAMILY',
    //   aspectRatio: 'aspect-[4/3]',
    //   alt: 'Outdoor natural light portrait'
    // },
    {
      id: '4342',
      src: '/img/download_inako_vera_web1.jpg',
      category: 'ACTRESS',
      aspectRatio: 'aspect-[10/8]',
      alt: 'Outdoor natural light portrait'
    },
    {
      id: '34365',
      src: '/img/download_rhys_madison_web1.jpg',
      category: 'ACTRESS',
      aspectRatio: 'aspect-[8/10]',
      alt: 'Rhys Madison Portrait'
    },

    {
      id: '4',
      src: '/img/download_jessica_wong_web2.jpg',
      category: 'LINKEDIN',
      aspectRatio: 'aspect-[10/8]',
      alt: 'Outdoor natural light portrait'
    },

  ],
  // Column 3
  [
    // {
    //   id: '44',
    //   src: '/img/family4.png',
    //   category: 'FAMILY',
    //   aspectRatio: 'aspect-[4/3]',
    //   alt: 'Fashion forward editorial shot'
    // },

    {
      id: '365',
      src: '/img/download_isis_vlotman_web2.jpg',
      category: 'ACTRESS',
      aspectRatio: 'aspect-[8/10]',
      alt: 'Isis Vlotman Portrait'
    },
    {
      id: '1',
      src: '/img/front21.png',
      category: 'MODEL / ACTOR',
      aspectRatio: 'aspect-[4/3]',
      alt: 'Dramatic actor headshot in black and white'
    },

    {
      id: '8',
      src: '/img/front9.png',
      category: 'DANCER',
      aspectRatio: 'aspect-[8/10]',
      alt: 'Artistic portrait with shadow play'
    },



  ]
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = PORTFOLIO_COLUMNS.flat();

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
    role: "Realtor in North Vancouver"
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