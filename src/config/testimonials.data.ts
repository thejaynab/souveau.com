// Testimonials - commented out for now, can be re-enabled when real client testimonials are available
export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   quote: "Souveau helped us identify the core usability issues that were causing user churn. Their audit was thorough, practical, and immediately actionable.",
  //   author: "Client Name",
  //   role: "Product Manager",
  //   image: "https://i.pravatar.cc/150?img=11"
  // },
  // {
  //   id: 2,
  //   quote: "Working with Souveau gave us the outside perspective we needed. They cut through internal debates and focused us on what users actually needed.",
  //   author: "Client Name",
  //   role: "CEO",
  //   image: "https://i.pravatar.cc/150?img=5"
  // },
  // {
  //   id: 3,
  //   quote: "The design system Souveau built for us saved our team countless hours. Development is faster, more consistent, and our users notice the difference.",
  //   author: "Client Name",
  //   role: "Engineering Lead",
  //   image: "https://i.pravatar.cc/150?img=8"
  // },
];
