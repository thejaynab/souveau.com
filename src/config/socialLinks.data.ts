export type SocialLink = {
  href: string;
  label: string;
};

export type ContactInfo = {
  address: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
  phone: string;
  workingHours: string;
  workingDays: string;
};

export const socialLinks: SocialLink[] = [
  // { href: 'https://www.instagram.com/', label: 'Instagram' },
  // { href: 'https://www.facebook.com/', label: 'Facebook' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  // { href: 'https://twitter.com/', label: 'X.com' },
];


export const contactInfo: ContactInfo = {
  address: {
    street: "",
    city: "",
    country: "United States",
  },
  email: "hello@souveau.com",
  phone: "",
  workingHours: "Monday - Friday | 9AM - 5PM",
  workingDays: "Sat-Sun: Closed",
};
