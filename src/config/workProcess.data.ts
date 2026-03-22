export type WorkProcess = {
  id: number;
  title: string;
  description: string;
};

export const workProcess: WorkProcess[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Every engagement starts with understanding your product, users, business goals, and the problems you need solved. This includes stakeholder interviews, product walkthroughs, and reviewing any existing research.',
  },
  {
    id: 2,
    title: 'Analysis',
    description: 'Your current user experience is evaluated through audits, heuristic evaluations, and data analysis — surfacing friction points, usability issues, and opportunities for improvement.',
  },
  {
    id: 3,
    title: 'Recommendations',
    description: 'You receive actionable, prioritized recommendations your team can implement immediately — focused on the improvements that will actually move the needle on activation, retention, and conversions.',
  },
];
