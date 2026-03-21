// Team data - commented out for now, can be re-enabled when team info is ready
import type { ImageMetadata } from "astro";
// import oliverImage from '../assets/team/oliver.webp';
// import sophieImage from '../assets/team/sophie.webp';
// import ethanImage from '../assets/team/ethan.webp';
// import audreyImage from '../assets/team/audrey.webp';

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
  // {
  //   name: 'Team Member',
  //   role: 'UX CONSULTANT',
  //   image: '',
  //   socials: [
  //     { icon: 'linkedin', url: 'https://www.linkedin.com/' },
  //   ],
  //   description: 'Description here.',
  // },
];
