export type WorkProcess = {
  id: number;
  title: string;
  description: string;
};

export const workProcess: WorkProcess[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience.',
  },
  {
    id: 2,
    title: 'Planning',
    description: 'We create a roadmap to achieve your goals with clear milestones and deliverables.',
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Our team gets to work, implementing the plan with precision and attention to detail.',
  },
];
