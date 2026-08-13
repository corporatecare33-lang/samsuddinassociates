import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  ShieldCheck,
  Sparkles,
  LineChart,
  Users,
  Workflow,
  Clock,
  Award,
  Target,
  CheckCircle2,
  Quote,
  Briefcase,
  Star,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  afterContent?: React.ReactNode;
  showTitleInBreadcrumb?: boolean;
};

// Contextual copy keyed by eyebrow so every inner page reads native to its category.
const CONTEXTS: Record<
  string,
  {
    heroSub: string;
    featuresTitle: string;
    features: { icon: any; t: string; d: string }[];
    workflow: { t: string; d: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  Services: {
    heroSub:
      "A senior-led team delivering accounting, tax, and advisory as one coordinated engagement — engineered for how modern companies actually operate.",
    featuresTitle: "What's included in every engagement",
    features: [
      { icon: ShieldCheck, t: "Senior-led delivery", d: "A CPA-led team owns your relationship end-to-end — no juniors learning on your books." },
      { icon: Workflow, t: "Modern tooling", d: "Cloud accounting, real-time dashboards, and automation built into every workflow." },
      { icon: LineChart, t: "Board-ready reporting", d: "Monthly financials your investors and lenders trust, delivered on a fixed close calendar." },
      { icon: Target, t: "Proactive tax planning", d: "Quarterly strategy sessions surface savings before year-end, not after." },
      { icon: Users, t: "Dedicated point of contact", d: "One partner accountable for outcomes — plus a bench of specialists behind them." },
      { icon: Clock, t: "Response in one business day", d: "Written SLA on turnaround for every request, question, and filing." },
    ],
    workflow: [
      { t: "Discovery", d: "A 30-minute deep dive into your business, systems, and goals — no obligation." },
      { t: "Diagnostic", d: "We audit your books, tax posture, and tooling and deliver a written findings report." },
      { t: "Onboarding", d: "We migrate systems, standardize your chart of accounts, and set your close calendar." },
      { t: "Ongoing partnership", d: "Monthly close, quarterly strategy, and always-on advisory as you scale." },
    ],
    faqs: [
      { q: "How quickly can we get started?", a: "Most engagements are fully onboarded within 2–3 weeks of signing, including systems migration and historical clean-up." },
      { q: "Do you replace our in-house team?", a: "Either model works. We augment lean finance teams and also run finance end-to-end for companies without one." },
      { q: "What size company do you serve?", a: "Pre-seed startups through mid-market operators. Most clients sit between $2M and $150M in annual revenue." },
      { q: "How is pricing structured?", a: "Transparent, fixed-fee monthly retainers scoped to your stage and complexity. No surprise hourly invoices." },
    ],
  },
  Industries: {
    heroSub:
      "Industry-native finance expertise — accounting, tax, and advisory built around the operating realities of your sector.",
    featuresTitle: "Sector-specific capabilities",
    features: [
      { icon: Award, t: "Deep sector fluency", d: "Partners with 10+ years of sector-specific experience lead every engagement." },
      { icon: ShieldCheck, t: "Regulatory readiness", d: "Compliance frameworks and reporting workflows tuned to your industry's rules." },
      { icon: LineChart, t: "KPI benchmarking", d: "We benchmark your unit economics against private peers in the same category." },
      { icon: Workflow, t: "Systems expertise", d: "Certified in the ERPs and vertical platforms your industry actually runs on." },
      { icon: Target, t: "Tax credit capture", d: "We proactively surface R&D, energy, and sector-specific credits most firms miss." },
      { icon: Users, t: "Investor & lender fluency", d: "We speak the language of your capital providers — from term sheets to covenants." },
    ],
    workflow: [
      { t: "Sector scoping", d: "We map your business against sector-specific accounting, tax, and reporting needs." },
      { t: "System alignment", d: "Chart of accounts, KPIs, and dashboards restructured to your industry standard." },
      { t: "Compliance layer", d: "Filings, licenses, and regulatory reporting managed on your behalf." },
      { t: "Growth advisory", d: "Quarterly strategy sessions benchmarked against your sector peers." },
    ],
    faqs: [
      { q: "Do you have experience in my exact vertical?", a: "Very likely. We serve healthcare, tech, construction, manufacturing, retail, nonprofit, and professional services deeply — ask us for references in your niche." },
      { q: "Can you handle multi-entity structures?", a: "Yes — consolidations, intercompany eliminations, and multi-state or multi-country reporting are standard scope." },
      { q: "Do you support industry-specific software?", a: "We work with NetSuite, Sage Intacct, QuickBooks, Xero, and most vertical ERPs (Procore, ServiceTitan, Aspire, and more)." },
      { q: "What about industry-specific tax credits?", a: "We proactively evaluate R&D, WOTC, energy, and vertical-specific credits every year — they typically fund a large portion of our fees." },
    ],
  },
  Solutions: {
    heroSub:
      "End-to-end financial solutions engineered around your growth stage — from early revenue through IPO readiness.",
    featuresTitle: "How our solutions come together",
    features: [
      { icon: Sparkles, t: "Stage-matched scope", d: "The right depth of service for your stage — nothing over-engineered, nothing missing." },
      { icon: LineChart, t: "Unified reporting", d: "One monthly package covering GAAP financials, KPIs, and cash flow — reconciled and reviewed." },
      { icon: Target, t: "Strategic tax layer", d: "Federal, state, and international tax planning woven into every solution." },
      { icon: Workflow, t: "Systems that scale", d: "We select and implement the stack that supports the next 3 years of growth." },
      { icon: ShieldCheck, t: "Audit-ready posture", d: "Documentation, controls, and workpapers ready for external audit at any time." },
      { icon: Users, t: "Fractional leadership", d: "CFO, controller, and tax director expertise on demand — without the FTE cost." },
    ],
    workflow: [
      { t: "Assess", d: "We benchmark your finance function against your growth stage and gaps." },
      { t: "Design", d: "A written blueprint sequencing what to build, in what order, and why." },
      { t: "Build", d: "We implement systems, hire where needed, and stand up recurring processes." },
      { t: "Run", d: "We operate the function alongside you — quarterly reviews keep us aligned." },
    ],
    faqs: [
      { q: "Which solution fits my company?", a: "That depends on stage, capital structure, and complexity. A 30-minute call is usually enough to recommend the right fit." },
      { q: "Can solutions be customized?", a: "Yes. Every engagement is scoped to your reality — we don't force off-the-shelf packages onto real businesses." },
      { q: "Do you support venture-backed companies?", a: "Extensively. Investor reporting, 409A support, cap table hygiene, and audit prep are standard scope." },
      { q: "What about international operations?", a: "We support US-based companies with foreign subsidiaries, transfer pricing, and international tax coordination." },
    ],
  },
  Resources: {
    heroSub:
      "Playbooks, benchmarks, and perspectives from the operators and CPAs behind Shamsuddin & Company.",
    featuresTitle: "What you'll find here",
    features: [
      { icon: LineChart, t: "Operator playbooks", d: "Frameworks for close, forecasting, and reporting written by practitioners, not consultants." },
      { icon: Target, t: "Tax strategy briefs", d: "Timely updates on federal and state tax changes — with practical implications for your business." },
      { icon: Sparkles, t: "Industry benchmarks", d: "Anonymized unit economics from real clients across sectors." },
      { icon: Users, t: "Founder interviews", d: "Conversations with CFOs and founders about the finance decisions that shaped their growth." },
      { icon: Award, t: "Templates & tools", d: "Downloadable models, checklists, and templates you can put to work today." },
      { icon: ShieldCheck, t: "Regulatory alerts", d: "Rapid summaries when rules change — so you never learn about it during an audit." },
    ],
    workflow: [
      { t: "Subscribe", d: "One email per week — no filler, no promos." },
      { t: "Read", d: "Short, operator-focused, respectful of your time." },
      { t: "Apply", d: "Every piece ships with a template, checklist, or next step." },
      { t: "Ask", d: "Reply to any email to talk to the author directly." },
    ],
    faqs: [
      { q: "Is the content free?", a: "Yes. Every guide, playbook, and template is free to read and download." },
      { q: "Who writes the resources?", a: "Our partners and senior staff — CPAs and former CFOs who work with clients daily." },
      { q: "How often do you publish?", a: "New long-form pieces monthly and shorter briefs weekly, with rapid alerts when regulation changes." },
      { q: "Can I request a topic?", a: "Absolutely — the most-requested topics move to the top of the queue." },
    ],
  },
  Pricing: {
    heroSub:
      "Transparent, fixed-fee pricing built around the way modern businesses actually work — no hourly billing surprises.",
    featuresTitle: "How our pricing works",
    features: [
      { icon: CheckCircle2, t: "Fixed monthly fees", d: "One predictable line item covering scope agreed upfront — no minute-by-minute billing." },
      { icon: Sparkles, t: "Stage-matched packages", d: "Tiers for early stage, growth stage, and enterprise operators — not one-size-fits-all." },
      { icon: Workflow, t: "Bundled advisory", d: "Strategy sessions and quarterly reviews are included — not billed separately." },
      { icon: Target, t: "Tax filings included", d: "Federal and state entity returns are part of every retainer at Growth and above." },
      { icon: ShieldCheck, t: "No lock-in", d: "Month-to-month agreements. Cancel with 30 days' notice, no penalties." },
      { icon: Award, t: "Custom quotes", d: "Multi-entity, cross-border, and specialty scopes get a tailored quote after a discovery call." },
    ],
    workflow: [
      { t: "Discovery call", d: "Free 30-minute conversation to scope your business and current state." },
      { t: "Written proposal", d: "Line-item scope with a fixed monthly number — no verbal quotes." },
      { t: "Kick-off", d: "Countersigned agreement, systems access, and a written 30-day plan." },
      { t: "Monthly retainer", d: "One predictable invoice, quarterly true-ups only if scope changes." },
    ],
    faqs: [
      { q: "What does it cost?", a: "Most engagements land between $2,500 and $12,000 per month, depending on stage and scope. A written quote takes one call." },
      { q: "Are tax filings extra?", a: "For Growth and Enterprise tiers, all federal and state entity filings are included. Early stage tiers price returns separately for transparency." },
      { q: "Can I mix and match services?", a: "Yes. Most clients start with the core package and add services (payroll, CFO, R&D credit) as they grow." },
      { q: "Do you offer one-time projects?", a: "Yes — clean-ups, audits, migrations, and diligence prep are common one-off engagements." },
    ],
  },
  About: {
    heroSub:
      "A modern accounting and financial consulting partner for ambitious teams — built by CPAs who have also been operators.",
    featuresTitle: "What we stand for",
    features: [
      { icon: Award, t: "Senior-led, always", d: "Partners own every engagement — not delegated to interns or offshored." },
      { icon: Users, t: "Long-term partnership", d: "98% client retention. Most engagements last 5+ years." },
      { icon: Sparkles, t: "Craft, not volume", d: "We take on a limited number of new clients each quarter to protect quality." },
      { icon: ShieldCheck, t: "Independence & integrity", d: "We say no to work that doesn't serve your interests, even if it costs us the engagement." },
      { icon: Workflow, t: "Modern operators", d: "Every partner has run finance functions inside operating companies — we speak your language." },
      { icon: LineChart, t: "Outcome-driven", d: "We measure ourselves by your growth, savings, and reporting confidence — not billable hours." },
    ],
    workflow: [
      { t: "Founded on craft", d: "Built by CPAs and former CFOs who wanted to raise the bar on modern accounting." },
      { t: "Operator DNA", d: "Every partner has led finance inside a real operating company — not just audited them." },
      { t: "Modern by default", d: "Cloud-first stack, real-time dashboards, and clear communication baked in from day one." },
      { t: "Client-first economics", d: "Fixed fees, no hourly billing, and a written SLA on responsiveness." },
    ],
    faqs: [
      { q: "Where are you based?", a: "Headquartered in New York with a fully remote-first team across the US. We serve clients nationally and internationally." },
      { q: "How large is the firm?", a: "A senior-heavy team of CPAs, tax specialists, and advisors — deliberately kept small enough that every client works with a partner directly." },
      { q: "Who are your typical clients?", a: "Ambitious operators from pre-seed startups through mid-market companies — with a bias toward founder- and PE-backed businesses." },
      { q: "How do I meet the team?", a: "Book a discovery call. You'll be introduced to the partner who would own your engagement — no sales handoffs." },
    ],
  },
  Careers: {
    heroSub:
      "Join a senior-heavy team of CPAs, operators, and advisors doing the best work of their careers — with clients who value it.",
    featuresTitle: "Why people join us",
    features: [
      { icon: Award, t: "Senior-heavy team", d: "You'll work alongside partners who are still hands-on with client work — not layers of management above you." },
      { icon: Sparkles, t: "Interesting clients", d: "Venture-backed founders, PE portfolio companies, and category-defining operators." },
      { icon: Users, t: "Real ownership", d: "Own engagements end-to-end from year one, with the mentorship to do it well." },
      { icon: Clock, t: "Sustainable pace", d: "We turn down work to protect team quality of life — no busy-season death marches." },
      { icon: LineChart, t: "Real compensation", d: "Above-market base, transparent bonus structure, and equity for senior roles." },
      { icon: Workflow, t: "Modern stack", d: "Cloud accounting, automation, and AI tools — not spreadsheets and PDFs." },
    ],
    workflow: [
      { t: "Apply", d: "Send a short intro and your resume — cover letters optional." },
      { t: "Screen", d: "30-minute conversation with a partner about your background and goals." },
      { t: "Interview", d: "Two working sessions with the team you'd join — no take-home tests longer than an hour." },
      { t: "Offer", d: "Decision within one week. Onboarding starts on your terms." },
    ],
    faqs: [
      { q: "Are you fully remote?", a: "Yes. Remote-first with optional co-working stipends. Team meets in person quarterly." },
      { q: "Do you sponsor CPA candidates?", a: "Yes — study time, exam fees, and bonuses on passing are standard for eligible roles." },
      { q: "What roles are open?", a: "Senior accountants, tax managers, and CFO advisors on a rolling basis. Reach out even if you don't see your role listed." },
      { q: "Do you hire internationally?", a: "US-based roles today. International contractors considered case-by-case." },
    ],
  },
  Legal: {
    heroSub:
      "The policies and terms that govern your relationship with Shamsuddin & Company — written in plain language.",
    featuresTitle: "What this covers",
    features: [
      { icon: ShieldCheck, t: "Your data", d: "How we collect, store, and protect information you share with us." },
      { icon: Users, t: "Your rights", d: "How to access, correct, or delete the data we hold about you." },
      { icon: Workflow, t: "Our practices", d: "The systems and processes we use to keep information confidential and secure." },
      { icon: Target, t: "Third parties", d: "The vetted vendors we rely on and how we govern them." },
      { icon: CheckCircle2, t: "Compliance", d: "How we meet applicable privacy and confidentiality standards." },
      { icon: Award, t: "Transparency", d: "Plain-language explanations — not dense legal boilerplate." },
    ],
    workflow: [
      { t: "Read", d: "Skim or read in full — the structure follows the questions clients ask most." },
      { t: "Ask", d: "Email us any question directly — we reply within one business day." },
      { t: "Request", d: "Data access and deletion requests are honored within 30 days." },
      { t: "Stay informed", d: "We notify affected clients directly of any material change." },
    ],
    faqs: [
      { q: "Who owns the data I share?", a: "You do. We process it under our engagement terms and never resell or share it outside the scope of our work for you." },
      { q: "How can I request my data?", a: "Email us and we'll return a full export within 30 days at no cost." },
      { q: "Do you use my data for AI training?", a: "No. Client data is never used to train third-party AI models." },
      { q: "How do you handle breaches?", a: "We notify affected clients directly and in writing as required by law — with clear next steps." },
    ],
  },
};

const DEFAULT_CTX = CONTEXTS.Services;

const TEAM_STATS = [
  { icon: Users, value: "15+", label: "Team Members" },
  { icon: Briefcase, value: "6+", label: "Departments" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

const TEAM = [
  { name: "Farhan Ahmed", image: "/team/farhan-ahmed.png", tag: "Team Leader", role: "Managing Partner", dept: "Executive", location: "New York, USA", years: "12+ Years" },
  { name: "Nusrat Karim", image: "/team/nusrat-karim.png", role: "Tax Director", dept: "Tax Advisory", location: "New York, USA", years: "9+ Years" },
  { name: "Imran Chowdhury", image: "/team/imran-chowdhury.png", role: "Audit & Assurance Lead", dept: "Audit", location: "Boston, USA", years: "10+ Years" },
  { name: "Sabrina Islam", image: "/team/sabrina-islam.png", role: "Client Success Partner", dept: "Client Success", location: "Chicago, USA", years: "7+ Years" },
];

const TESTIMONIALS = [
  {
    q: "The transition felt effortless. Within a month we had a real close calendar, real dashboards, and a partner I could actually call.",
    a: "Head of Finance",
    r: "Series B SaaS company",
  },
  {
    q: "They uncovered credits our previous firm missed for three years running. The fee paid for itself before the year was out.",
    a: "Founder & CEO",
    r: "Growth-stage manufacturer",
  },
  {
    q: "Board reporting used to be a scramble. Now it's a review — the numbers are trusted, and we spend the meeting on strategy.",
    a: "Chief Operating Officer",
    r: "PE-backed services firm",
  },
];

export function PlaceholderPage({ eyebrow, title, description, breadcrumbs, afterContent, showTitleInBreadcrumb = true }: Props) {
  const ctx = (eyebrow && CONTEXTS[eyebrow]) || DEFAULT_CTX;
  const crumbs: Crumb[] = breadcrumbs ?? (eyebrow ? [{ label: eyebrow }] : []);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy-deep text-white">
          <div className="container-page relative py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/60">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              {crumbs.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                  {c.to ? (
                    <Link to={c.to as any} className="hover:text-white transition-colors">{c.label}</Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                </span>
              ))}
              {showTitleInBreadcrumb && (
                <>
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                  <span className="text-white">{title}</span>
                </>
              )}
            </nav>

            {eyebrow && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <span className="h-px w-6 bg-current" /> {eyebrow}
              </div>
            )}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl max-w-4xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl leading-relaxed">
              {description || ctx.heroSub}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 md:py-28">
          <div className="container-page">
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                <span className="h-px w-8 bg-current" /> Capabilities
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-extrabold text-navy-deep text-balance md:text-5xl">
                {ctx.featuresTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-navy-deep/70 md:text-lg leading-relaxed">
                Built to slot into how your business already runs — with the depth to grow alongside you.
              </motion.p>
            </motion.div>
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {ctx.features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.t}
                    variants={fadeUp}
                    className="group relative overflow-hidden rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-[0_10px_30px_-24px_rgba(72,20,136,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-24px_rgba(72,20,136,0.35)]"
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-navy-deep/10 bg-gold/10 text-gold-ink transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-navy-deep">{f.t}</h3>
                    <p className="mt-3 text-navy-deep/70 leading-relaxed">{f.d}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep">
                      <span className="h-[3px] w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-10" />
                      <span className="opacity-70 transition-opacity duration-300 group-hover:opacity-100">Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* TEAM (About page only) */}
        {eyebrow === "About" && (
          <section className="py-20 md:py-28">
            <div className="container-page">
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
              >
                <div className="max-w-2xl">
                  <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                    <Users className="h-3.5 w-3.5" /> Our Team
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="font-display text-3xl font-extrabold text-navy-deep text-balance md:text-5xl">
                    Business Expertise In Our Team
                  </motion.h2>
                  <motion.p variants={fadeUp} className="mt-5 text-navy-deep/70 md:text-lg leading-relaxed">
                    Senior CPAs and advisors working together to help your business grow smarter and achieve more.
                  </motion.p>
                </div>
                <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-4 md:gap-6">
                  {TEAM_STATS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.label}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-navy-deep/10 bg-white px-3 py-3 text-center shadow-[0_10px_30px_-24px_rgba(11,20,50,0.25)] sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left"
                      >
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold-ink sm:h-10 sm:w-10">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <div className="font-display text-base font-extrabold leading-none text-navy-deep sm:text-lg">{s.value}</div>
                          <div className="mt-1 text-[11px] leading-tight text-navy-deep/60 sm:text-xs">{s.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>

              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-14 grid gap-6 md:grid-cols-2"
              >
                {TEAM.map((m) => (
                  <motion.div
                    key={m.name}
                    variants={fadeUp}
                    className="group flex flex-col gap-5 rounded-3xl border border-navy-deep/10 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(11,20,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-24px_rgba(72,20,136,0.25)] sm:flex-row sm:gap-6 sm:p-6 md:p-7"
                  >
                    <div className="h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-mist sm:h-28 sm:w-28">
                      <img
                        src={m.image}
                        alt={`${m.name}, ${m.role}`}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-navy-deep">{m.name}</h3>
                        {m.tag && (
                          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-ink">
                            {m.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-navy-deep/70">{m.role}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-navy-deep/10 pt-4 text-xs text-navy-deep/60">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" /> {m.dept}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {m.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" /> {m.years}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <a
                          href="#"
                          aria-label={`${m.name} on LinkedIn`}
                          className="grid h-8 w-8 place-items-center rounded-full bg-navy-deep/5 text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href="#"
                          aria-label={`Email ${m.name}`}
                          className="grid h-8 w-8 place-items-center rounded-full bg-navy-deep/5 text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href="#"
                          aria-label={`Call ${m.name}`}
                          className="grid h-8 w-8 place-items-center rounded-full bg-navy-deep/5 text-navy-deep transition-colors hover:bg-navy-deep hover:text-white"
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 flex flex-col items-start gap-6 rounded-3xl border border-navy-deep/10 bg-mist p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold-ink">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-navy-deep">Join Our Growing Team</div>
                    <p className="text-sm text-navy-deep/60">Explore career opportunities and be part of our mission.</p>
                  </div>
                </div>
                <Link
                  to="/careers"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy"
                >
                  View Open Positions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* WORKFLOW / HOW IT WORKS */}
        <section className="bg-mist py-20 md:py-28">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  <span className="h-px w-8 bg-current" /> How it works
                </div>
                <h2 className="font-display text-3xl font-extrabold text-navy-deep text-balance md:text-5xl">
                  A clear path from first call to steady state.
                </h2>
                <p className="mt-5 text-navy-deep/70 leading-relaxed md:text-lg">
                  Four milestones designed to give you clarity, momentum, and outcomes you can measure.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition-colors"
                >
                  Start the conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.ol
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative grid gap-6 md:grid-cols-2"
              >
                {ctx.workflow.map((s, i) => (
                  <motion.li
                    key={s.t}
                    variants={fadeUp}
                    className="relative rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-[0_10px_30px_-24px_rgba(11,20,50,0.25)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep font-display text-sm font-bold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg font-bold text-navy-deep">{s.t}</h3>
                    </div>
                    <p className="mt-4 text-navy-deep/70 leading-relaxed">{s.d}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 md:py-28">
          <div className="container-page">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                <span className="h-px w-8 bg-current" /> From our clients
              </div>
              <h2 className="font-display text-3xl font-extrabold text-navy-deep text-balance md:text-5xl">
                Trusted by operators who care about the numbers.
              </h2>
            </motion.div>
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-14 grid gap-6 md:grid-cols-3"
            >
              {TESTIMONIALS.map((t) => (
                <motion.figure
                  key={t.q}
                  variants={fadeUp}
                  className="relative flex h-full flex-col rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-[0_10px_30px_-24px_rgba(72,20,136,0.25)]"
                >
                  <Quote className="h-8 w-8 text-gold" />
                  <blockquote className="mt-5 flex-1 text-navy-deep/85 leading-relaxed">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-deep/10 pt-5 text-sm">
                    <div className="font-semibold text-navy-deep">{t.a}</div>
                    <div className="text-navy-deep/60">{t.r}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-20 md:py-28">
          <div className="container-page">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                <span className="h-px w-8 bg-current" /> FAQ
              </div>
              <h2 className="font-display text-3xl font-extrabold text-navy-deep text-balance md:text-5xl">
                Questions people ask before starting.
              </h2>
            </motion.div>
            <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
              {ctx.faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={f.q}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className={`cursor-pointer overflow-hidden rounded-3xl border border-navy-deep/10 bg-white transition-all duration-300 ${
                      isOpen ? "shadow-[0_20px_40px_-24px_rgba(72,20,136,0.25)]" : "hover:shadow-[0_15px_30px_-20px_rgba(11,20,50,0.18)]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
                    >
                      <span className="font-display text-base font-bold text-navy-deep md:text-lg">{f.q}</span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition-all duration-300 ${
                          isOpen ? "bg-gold" : "bg-navy-deep"
                        }`}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-navy-deep/70 leading-relaxed md:px-8 md:pb-7">{f.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {afterContent}
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((s) => (s.toLowerCase() === "cfo" ? "CFO" : s.charAt(0).toUpperCase() + s.slice(1)))
    .join(" ");
}
