export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Olmo revamped our website and branding, boosting customer inquiries by 55%. Their creativity, strategy, and attention to detail made the process seamless, exceeding our expectations!",
    author: "Joe Glodberg",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=11" // Placeholder
  },
  {
    id: 2,
    quote: "Olmo ransformed our website and brand—customer inquiries jumped 55%! Their creativity and strategic approach exceeded all expectations.",
    author: "Sarah Miller",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=5" // Placeholder
  },
  {
    id: 3,
    quote: "We saw a 37% increase in inquiries after Olmo redesign. Their blend of strategy, creativity, and precision made the entire experience effortless.",
    author: "David Chen",
    role: "Operations Director",
    image: "https://i.pravatar.cc/150?img=8" // Placeholder
  }
];
