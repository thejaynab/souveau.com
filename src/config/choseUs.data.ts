import tabletImage  from '../assets/chose-us-tablet.webp';
import teamImage from '../assets/chose-us-team.webp';
import type { ImageMetadata } from "astro";

export type ChoseUs = {
  title: string;
  description: string;
  icon: string;
  image?: ImageMetadata | string;
};

export const choseUs: ChoseUs[] = [
  {
    title: 'Fast turnarounds',
    description:
      "Timelines are respected here. Expect quick handoffs, clear communication, and momentum that doesn't stall.",
    icon: 'clock',
    image: tabletImage,
  },
  {
    title: 'Design that Converts',
    description:
      'Good design looks great and works better. We prioritize performance and user goals.',
    icon: 'chart',
  },
  {
    title: 'Committed to Perfection',
    description:
      "We iterate and refine until the result is exactly what you need.",
    icon: 'star',
  },
  {
    title: 'Quality over quantity',
    description: 'We take on fewer projects so each one gets the attention, detail, and care it deserves.',
    icon: 'lightning',
    image: teamImage,
  },
];
