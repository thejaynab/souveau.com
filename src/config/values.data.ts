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
      "Our approach is 100% practical, useful, and actionable. We don't deliver fluff — every recommendation is something your team can act on immediately.",
    icon: 'light',
    image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'User-Centered Thinking',
    description:
      'Every decision is driven by what users actually need — not assumptions. We use real data and user behavior to validate whether your features solve actual problems.',
    icon: 'brain',
  },
  {
    title: 'Strategic Partnership',
    description:
      "We step in as a partner, not a vendor. Our work is balanced, unbiased, and brings a fresh perspective free from internal politics.",
    icon: 'handshake',
  },
  {
    title: 'Measurable Impact',
    description: 'We focus on outcomes that matter: lower churn, higher conversion rates, faster development cycles, and products users actually want to use.',
    icon: 'stars',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  },
];
