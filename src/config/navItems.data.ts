export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/works" },
  { title: "About", href: "/studio" },
  { title: "Let's Talk", href: "/contact" },
];

export const footerOtherItems: NavItem[] = [
  { title: "Term of Use", href: "/terms-of-service" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  // { title: "Licensing", href: "/licensing" },
  { title: "FAQ", href: "/contact/#faq-section" },
];
