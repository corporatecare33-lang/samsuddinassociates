import { motion } from "framer-motion";
import {
  Calculator, BookOpen, ClipboardList, Wallet,
  Compass, LineChart, Briefcase, Rocket, ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/common/Section";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { services } from "@/data/site";

const icons = [Calculator, BookOpen, ClipboardList, Wallet, Compass, LineChart, Briefcase, Rocket];

export function ServicesPreview() {
  return (
    <Section id="services" tone="light">
      <SectionHeading
        eyebrow="Services"
        title="Every finance function, under one roof."
        subtitle="From day-to-day bookkeeping to board-level strategy, our specialists cover the full stack of finance and accounting."
      />
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div key={s.title} variants={fadeUp}>
              <Link
                to="/services"
                className="group block h-full rounded-2xl border border-border bg-white p-6 hover-lift"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-navy-deep/5 text-navy-deep transition-colors group-hover:bg-navy-deep group-hover:text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-ink">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
