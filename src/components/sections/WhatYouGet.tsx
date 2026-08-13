import { motion } from "framer-motion";
import {
  Compass,
  Calculator,
  Receipt,
  BookOpen,
  Scale,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

type Variant = "light" | "purple" | "gold" | "gold-soft";

const cards: {
  icon: typeof Compass;
  title: string;
  desc: string;
  variant: Variant;
}[] = [
  {
    icon: Compass,
    title: "CFO Advisory",
    desc: "Strategic financial leadership, forecasting, and board-ready guidance to help your business scale with confidence.",
    variant: "light",
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    desc: "Accurate, timely accounting and monthly closes that keep your financials clean, compliant, and decision-ready.",
    variant: "purple",
  },
  {
    icon: Receipt,
    title: "Business Tax Services",
    desc: "Proactive tax planning, filings, and compliance strategies designed to minimize liability and maximize opportunity.",
    variant: "gold",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    desc: "Reliable day-to-day bookkeeping with modern tooling, clean ledgers, and transparent monthly reporting.",
    variant: "gold-soft",
  },
  {
    icon: Scale,
    title: "Business Valuation Services",
    desc: "Independent valuations for transactions, planning, and reporting—grounded in defensible methodology.",
    variant: "purple",
  },
  {
    icon: Wallet,
    title: "Payroll Services",
    desc: "Compliant, accurate multi-state payroll processing that keeps your team paid and your filings on time.",
    variant: "light",
  },
];

const styles: Record<
  Variant,
  {
    card: string;
    icon: string;
    title: string;
    desc: string;
    arrow: string;
  }
> = {
  light: {
    card: "bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] hover:shadow-[0_25px_50px_-20px_rgba(11,20,50,0.28)]",
    icon: "bg-navy-deep/5 text-navy-deep",
    title: "text-navy-deep",
    desc: "text-navy-deep/70",
    arrow: "bg-navy-deep text-white group-hover:bg-gold group-hover:text-navy-deep",
  },
  purple: {
    card: "bg-navy-deep border border-navy-deep shadow-[0_10px_30px_-18px_rgba(72,20,136,0.5)] hover:shadow-[0_25px_50px_-20px_rgba(72,20,136,0.6)]",
    icon: "bg-white/10 text-gold",
    title: "text-white",
    desc: "text-white/75",
    arrow: "bg-gold text-navy-deep group-hover:bg-white",
  },
  gold: {
    card: "bg-gold border border-gold shadow-[0_10px_30px_-18px_rgba(201,162,39,0.5)] hover:shadow-[0_25px_50px_-20px_rgba(201,162,39,0.55)]",
    icon: "bg-navy-deep/10 text-navy-deep",
    title: "text-navy-deep",
    desc: "text-navy-deep/80",
    arrow: "bg-navy-deep text-gold group-hover:bg-white group-hover:text-navy-deep",
  },
  "gold-soft": {
    card: "bg-gold/15 border border-gold/25 shadow-[0_10px_30px_-18px_rgba(201,162,39,0.25)] hover:shadow-[0_25px_50px_-20px_rgba(201,162,39,0.35)]",
    icon: "bg-gold/25 text-navy-deep",
    title: "text-navy-deep",
    desc: "text-navy-deep/70",
    arrow: "bg-navy-deep text-gold group-hover:bg-gold group-hover:text-navy-deep",
  },
};

export function WhatYouGet() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
            What You Get
          </div>
          <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
            Complete financial clarity. Expert-backed confidence.
          </h2>
          <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
            Shamsuddin & Company combines bookkeeping, accounting, payroll, tax planning, financial reporting, and CFO advisory into one coordinated financial solution—helping businesses make confident decisions with complete financial visibility.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2 items-stretch"
        >
          {cards.map(({ icon: Icon, title, desc, variant }) => {
            const s = styles[variant];
            return (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                style={{ borderRadius: 30, transitionDuration: "250ms" }}
                className={`group relative h-full flex flex-col p-8 md:p-10 transition-all ease-out hover:-translate-y-1.5 overflow-hidden ${s.card}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${s.icon}`}>
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <button
                    type="button"
                    aria-label={`${title} details`}
                    className={`grid h-11 w-11 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 ${s.arrow}`}
                  >
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                  </button>
                </div>
                <h3 className={`mt-7 font-display font-bold text-2xl ${s.title}`}>
                  {title}
                </h3>
                <p className={`mt-3 leading-relaxed ${s.desc}`}>{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
