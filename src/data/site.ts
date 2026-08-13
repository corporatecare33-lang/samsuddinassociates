export const site = {
  name: "Shamsuddin & Company",
  tagline: "Finance and accounting, engineered for growth.",
  nav: [
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  announcement: "New: 2026 tax planning guide — book a free consultation.",
} as const;

export const services = [
  { title: "Tax Consulting", desc: "Strategic tax planning that compounds year over year." },
  { title: "Accounting", desc: "Accurate books, closed on time, every month." },
  { title: "Bookkeeping", desc: "Clean ledgers with modern tooling and clear reporting." },
  { title: "Payroll", desc: "Compliant multi-state payroll without the paperwork." },
  { title: "Business Advisory", desc: "Guidance from operators who have scaled companies." },
  { title: "Financial Reporting", desc: "Board-ready reporting your investors will trust." },
  { title: "Virtual CFO", desc: "Fractional CFO leadership at a fraction of the cost." },
  { title: "Startup Consulting", desc: "From incorporation to Series B and beyond." },
] as const;

export const industries = [
  "Healthcare", "Technology", "Construction", "Manufacturing",
  "Retail", "Nonprofit", "Professional Services",
] as const;

export const stats = [
  { value: 1200, suffix: "+", label: "Clients served" },
  { value: 25, suffix: "yr", label: "Combined experience" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 40, suffix: "M+", label: "Tax savings delivered" },
] as const;
