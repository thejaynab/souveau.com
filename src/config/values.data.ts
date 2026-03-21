export type Value = {
  title: string;
  description: string;
  icon: string;
  image?: ImageMetadata | string;
};

export const values: Value[] = [
  {
    title: 'Creative Excellence',
    description:
      "We push creative boundaries to deliver designs that inspire emotion and reflect the true essence of every brand we build.",
    icon: 'light',
    image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Strategic Thinking',
    description:
      'Every decision is driven by insight and purpose, ensuring each project aligns creativity with measurable business growth.',
    icon: 'brain',
  },
  {
    title: 'Meaningful Collaboration',
    description:
      "We believe great results come from teamwork, transparency, and shared vision between our team and our clients.",
    icon: 'handshake',
  },
  {
    title: 'Lasting Impact',
    description: 'We push creative boundaries to deliver designs that inspire emotion and reflect the true essence of every brand we build.',
    icon: 'stars',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  },
];
