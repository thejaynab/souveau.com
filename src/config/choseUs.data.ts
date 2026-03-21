import tabletImage from '../assets/chose-us-tablet.webp';
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
    title: 'Accelerate Your Roadmap',
    description:
      "Fewer design/development cycles wasted on fixing the wrong things. We help you validate ideas with real data before you commit resources.",
    icon: 'clock',
    image: tabletImage,
  },
  {
    title: 'Reduce User Churn',
    description:
      'Users leave frustrating experiences quickly. We identify friction points and fix them so your users understand, trust, and stay with your product.',
    icon: 'chart',
  },
  {
    title: 'Increase Conversions',
    description:
      "When UX is smooth, people complete actions. Small design changes based on user insights often lead to major improvements in revenue.",
    icon: 'star',
  },
  {
    title: 'Gain Competitive Edge',
    description: 'In saturated markets, superior UX is a differentiator. We help you stand out by building products users actually want to use.',
    icon: 'lightning',
    image: teamImage,
  },
];
