import { motion } from "framer-motion";
import {
  Users,
  FileBarChart2,
  ShieldCheck,
  Wallet,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const benefits = [
  {
    icon: Users,
    title: "Dedicated Financial Experts",
    desc: "Work directly with experienced accountants and advisors who understand your business.",
  },
  {
    icon: FileBarChart2,
    title: "Accurate Financial Reporting",
    desc: "Receive timely, reliable reports that support better business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Planning & Compliance",
    desc: "Stay compliant while optimizing your tax strategy throughout the year.",
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    desc: "Reliable payroll processing with full compliance and employee confidence.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Advisory",
    desc: "Strategic guidance, forecasting, budgeting, and financial planning for long-term growth.",
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Service",
    desc: "Modern accounting technology supported by real financial professionals.",
  },
];

export function WhyChoosePartner() {
  return (
    <Section id="why-partner" tone="light">
      <SectionHeading
        eyebrow="Why Choose Shamsuddin & Company"
        title="One trusted partner for every financial need."
        subtitle="From bookkeeping and payroll to tax planning, financial reporting, and strategic CFO advisory, Shamsuddin & Company provides one coordinated financial team to help businesses grow with confidence."
        align="center"
      />

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:gap-8 md:grid-cols-2 items-stretch"
      >
        {benefits.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="group h-full flex items-start gap-5 md:gap-6 p-8 md:p-10 bg-white border border-border transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] hover:shadow-[0_25px_50px_-20px_rgba(11,20,50,0.28)]"
            style={{ borderRadius: 30 }}
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-deep text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl md:text-2xl font-bold text-navy-deep">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
