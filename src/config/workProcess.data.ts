export type WorkProcess = {
  id: number;
  title: string;
  description: string;
};

export const workProcess: WorkProcess[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We start by understanding your product, users, business goals, and the problems you need solved. This includes stakeholder interviews, product walkthroughs, and reviewing any existing research.',
  },
  {
    id: 2,
    title: 'Analysis',
    description: 'We evaluate your current user experience through audits, heuristic evaluations, and data analysis. We identify friction points, usability issues, and opportunities for improvement.',
  },
  {
    id: 3,
    title: 'Recommendations',
    description: 'We deliver actionable, prioritized recommendations your team can implement immediately — focusing on the improvements that will actually move the needle on activation, retention, and conversions.',
  },
];
