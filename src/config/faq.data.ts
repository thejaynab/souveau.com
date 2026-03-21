export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'What services does Souveau offer?',
    answer:
      'We offer UX consulting services focused on application development, including UX/UI audits, design systems, research analysis, information architecture, user workflow mapping, heuristic evaluations, and UX strategy. We work with both new and existing applications.',
  },
  {
    question: 'What is the difference between a UX designer and a UX consultant?',
    answer:
      'A UX designer is focused on creating screens, flows, and visual interactions. A UX consultant works at a more strategic level — helping define product direction, validate assumptions, improve usability, and align user needs with business goals.',
  },
  {
    question: 'When should I hire a UX consultant?',
    answer:
      "If you're seeing poor activation, retention, or user confusion but don't know why, it's time. It's also valuable during MVP planning, before major redesigns, or when support is getting basic how-to questions. If you've redesigned multiple times with slight improvements, you may need strategy — not another UI.",
  },
  {
    question: 'Do you work with businesses in any industry?',
    answer:
      'Yes, we work with agencies, companies, non-profit organizations, and more — everything from startups to fully realized applications in need of refresh or foundational work. Our adaptable approach allows us to understand unique challenges regardless of the sector.',
  },
  {
    question: 'Can UX consulting be done remotely?',
    answer:
      'Absolutely. Most UX audits, interviews, and testing can be conducted remotely using digital tools like Zoom, Figma, Maze, and Hotjar. We work with clients across the United States.',
  },
  {
    question: "What's your refund policy?",
    answer:
      "Because this is a bespoke service, refunds aren't possible — but we do everything we can to make your decision low-risk. There's zero obligation to continue beyond what you've paid for. You get exactly what you purchased — no lock-ins, no long-term commitments.",
  },
];
