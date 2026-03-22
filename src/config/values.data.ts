export type Value = {
  title: string;
  description: string;
  icon: string;
  image?: ImageMetadata | string;
};

export const values: Value[] = [
  {
    title: 'Practical Approach',
    description:
      "No fluff, no 80-page decks that collect dust. Every recommendation is something your team can act on immediately — practical, useful, and tied to real outcomes.",
    icon: 'light',
    image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'User-Centered Thinking',
    description:
      'Every decision is driven by what users actually need — not assumptions. Real data and user behavior validate whether your features solve actual problems.',
    icon: 'brain',
  },
  {
    title: 'Outside Perspective',
    description:
      "Internal teams are often too close to the product to see it clearly. Souveau brings a fresh, unbiased viewpoint — free from company politics and legacy thinking.",
    icon: 'handshake',
  },
  {
    title: 'Measurable Impact',
    description: 'The focus is always on outcomes that matter: lower churn, higher conversion rates, faster development cycles, and products users actually want to use.',
    icon: 'stars',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  },
];
