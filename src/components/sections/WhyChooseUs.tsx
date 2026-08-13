import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Lightbulb, Radar, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/common/Section";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const problems = [
  "Books that close weeks late — decisions made on stale numbers.",
  "Tax bills that surprise you every April.",
  "Fragmented tools, spreadsheets, and inbox-based approvals.",
  "No clear line of sight to cash, margin, or runway.",
];

const pillars = [
  {
    icon: Radar,
    title: "Always-on visibility",
    desc: "Live dashboards, monthly close by day five, and a partner-level review every quarter.",
  },
  {
    icon: Lightbulb,
    title: "Strategy, not just compliance",
    desc: "We plan for the year ahead — tax, cash, hiring — so nothing catches you off guard.",
  },
  {
    icon: Rocket,
    title: "Built to scale with you",
    desc: "From your first hire to Series B and beyond, one team handles every finance workflow.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why" tone="mist">
      <SectionHeading
        eyebrow="The problem"
        title="Founders lose sleep over the finance function."
        subtitle="Growing companies outgrow their bookkeeper long before they can afford a full finance team. That gap is where mistakes get expensive."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-3xl border border-border bg-white p-8 md:p-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-destructive">
            <AlertCircle className="h-4 w-4" /> Common friction
          </div>
          <ul className="space-y-4">
            {problems.map((p) => (
              <motion.li key={p} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <span className="text-sm leading-relaxed text-ink/80">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group flex items-start gap-5 rounded-2xl border border-border bg-white p-6 hover-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-deep text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy-deep flex items-center gap-2">
                  {title}
                  <CheckCircle2 className="h-4 w-4 text-gold-ink opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
          <Link
            to="/about"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink hover:gap-2.5 transition-all"
          >
            Learn how we work <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
