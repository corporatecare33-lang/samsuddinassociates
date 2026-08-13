import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

const company = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

const servicesLinks = [
  { label: "Accounting", to: "/services/accounting" },
  { label: "Bookkeeping", to: "/services/bookkeeping" },
  { label: "Payroll", to: "/services/payroll" },
  { label: "Tax Consulting", to: "/services/tax-consulting" },
  { label: "Tax Planning", to: "/services/tax-planning" },
  { label: "VAT Services", to: "/services/vat-services" },
  { label: "Financial Reporting", to: "/services/financial-reporting" },
  { label: "Business Advisory", to: "/services/business-advisory" },
  { label: "Virtual CFO", to: "/services/virtual-cfo" },
  { label: "Startup Consulting", to: "/services/startup-consulting" },
  { label: "Audit Support", to: "/services/audit-support" },
  { label: "Compliance", to: "/services/compliance" },
] as const;

const resources = [
  { label: "Insights", to: "/insights" },
  { label: "Guides", to: "/guides" },
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "FAQ", to: "/faq" },
  { label: "Downloads", to: "/downloads" },
] as const;

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

type Col = { title: string; links: readonly { label: string; to: string }[] };
const columnGroups: Col[] = [
  { title: "Company", links: company },
  { title: "Services", links: servicesLinks },
  { title: "Resources", links: resources },
  { title: "Legal", links: legal },
];

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.79l-4.72-6.17L5.4 22H2.64l6.98-7.98L1.5 2h6.96l4.28 5.66L18.244 2Zm-1.19 18.2h1.86L7.03 3.7H5.05L17.054 20.2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1B003C] text-white/80">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          {/* LEFT COLUMN */}
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-navy-deep font-display font-extrabold">
                S
              </span>
              <span className="font-display font-extrabold text-white text-lg">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Finance and accounting, engineered for growth. Modern accounting, tax, bookkeeping, payroll and CFO advisory for ambitious businesses.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">Office</div>
                  <div className="mt-0.5">Dhaka, Bangladesh</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">Phone</div>
                  <a href="tel:+880000000000" className="mt-0.5 block hover:text-white transition">
                    +880 XXX XXX XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">Email</div>
                  <a href="mailto:info@shamsuddinandcompany.com" className="mt-0.5 block break-all hover:text-white transition">
                    info@shamsuddinandcompany.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Subscribe to our Newsletter
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 grid gap-2.5 sm:grid-cols-2"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-[0_10px_30px_-12px_rgba(212,175,55,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(212,175,55,0.8)] hover:bg-gold/95"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 min-w-0">
            {columnGroups.map((c) => (
              <div key={c.title} className="min-w-0">
                <h4 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to as any}
                        className="text-sm text-white/70 hover:text-white transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-3 lg:items-center">
          <p className="text-xs text-white/50 lg:justify-self-start">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2.5 text-xs text-white/60 lg:justify-self-center">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://digitalwebars.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-black px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(0,0,0,0.9)] hover:bg-black/90"
            >
              Digital Webars
            </a>
          </div>
          <div className="flex items-center gap-3 lg:justify-self-end">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:bg-gold hover:text-navy-deep hover:border-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
