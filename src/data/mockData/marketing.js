export const marketingNavLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#services", label: "Services" },
  { href: "#providers", label: "For Providers" },
  { href: "#about", label: "About" },
];

export const advantageCards = [
  {
    title: "Unrivaled Precision",
    copy:
      "Every interaction is calibrated for professional excellence, ensuring outcomes that exceed standard expectations.",
    icon: "spark",
    featured: true,
  },
  {
    title: "Absolute Reliability",
    copy:
      "Our verified ecosystem guarantees consistent performance and high-fidelity service delivery across all verticals.",
    icon: "shield",
  },
  {
    title: "Strategic Growth",
    copy:
      "Tools designed to scale your operational capacity, turning service management into a competitive advantage.",
    icon: "trend",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Find Your Match",
    copy:
      "Browse curated profiles of top-tier service providers vetted for professional excellence.",
  },
  {
    number: "02",
    title: "Book with Confidence",
    copy:
      "Schedule and confirm appointments using our integrated orchestration calendar.",
  },
  {
    number: "03",
    title: "Complete & Scale",
    copy:
      "Seamless payment and feedback loops designed to foster long-term professional partnerships.",
  },
];

export const trustItems = [
  {
    title: "Identity Verified",
    copy: "Multi-layer KYC verification for every professional.",
    icon: "fingerprint",
  },
  {
    title: "Secure Escrow",
    copy: "Payments protected until the orchestration is complete.",
    icon: "shield",
  },
  {
    title: "Curated Talent",
    copy: "Rigorous manual vetting of all service portfolios.",
    icon: "star",
  },
  {
    title: "Concierge Support",
    copy: "Executive assistance available around the clock.",
    icon: "headset",
  },
];

export const analyticsBars = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  height: `${20 + ((index * 17) % 60)}%`,
}));

export const enterpriseHighlights = [
  "Centralized workforce orchestration dashboard",
  "Real-time performance analytics & tracking",
  "Automated payroll and invoicing systems",
];

export const enterprisePanels = [
  {
    title: "Analytics",
    copy: "Deep insights into operational efficiency.",
    icon: "analytics",
  },
  {
    title: "Control",
    copy: "Full visibility across the provider network.",
    icon: "control",
    shifted: true,
  },
];

export const footerLinkGroups = [
  {
    title: "Company",
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  },
];
