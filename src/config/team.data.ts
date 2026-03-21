import type { ImageMetadata } from "astro";
import oliverImage from '../assets/team/oliver.webp';
import sophieImage from '../assets/team/sophie.webp';
import ethanImage from '../assets/team/ethan.webp';
import audreyImage from '../assets/team/audrey.webp';

export type Social = {
  icon: string;
  url: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: ImageMetadata | string;
  socials: Social[];
  description: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Oliver Bennett',
    role: 'CEO, FOUNDER',
    image: oliverImage,
    socials: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { icon: 'instagram', url: 'https://www.instagram.com/' },
      // { icon: 'twitter', url: 'https://twitter.com/' },
    ],
    description:
      'Visionary leader driving innovation and strategic growth for the studio, ensuring every project meets the highest standards of excellence.',
  },
  {
    name: 'Sophie Harrison',
    role: 'MARKETING MANAGER',
    image: sophieImage,
    socials: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { icon: 'instagram', url: 'https://www.instagram.com/' },
      // { icon: 'twitter', url: 'https://twitter.com/' },
    ],
    description:
      'Expert in brand storytelling and digital marketing strategies, connecting brands with their ideal audiences through compelling narratives.',
  },
  {
    name: 'Ethan Crawford',
    role: 'LEAD DESIGNER',
    image: ethanImage,
    socials: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { icon: 'instagram', url: 'https://www.instagram.com/' },
      // { icon: 'twitter', url: 'https://twitter.com/' },
    ],
    description:
      'Creative mind behind our most iconic visual identities and user experiences, blending aesthetics with functionality seamlessly.',
  },
  {
    name: 'Audrey Sinclair',
    role: 'LEAD DEVELOPER',
    image: audreyImage,
    socials: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/' },
      { icon: 'instagram', url: 'https://www.instagram.com/' },
      // { icon: 'twitter', url: 'https://twitter.com/' },
    ],
    description:
      'Full-stack wizard turning complex requirements into seamless digital solutions, focusing on performance, scalability, and clean code.',
  },
];
