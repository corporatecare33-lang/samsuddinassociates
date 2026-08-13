import { motion } from "framer-motion";
import { Calculator, LineChart, Landmark } from "lucide-react";

const cards = [
  {
    icon: Calculator,
    title: "Early Stage",
    desc: "Bookkeeping, tax setup, compliance, and financial foundations for new and growing businesses.",
    accent: "from-violet-500 to-fuchsia-500",
    chipBg: "bg-violet-100",
    chipText: "text-violet-700",
    ring: "group-hover:border-violet-300",
    glow: "group-hover:shadow-[0_30px_60px_-20px_rgba(139,92,246,0.35)]",
    bar: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
  },
  {
    icon: LineChart,
    title: "Growth Stage",
    desc: "Financial reporting, payroll, budgeting, forecasting, and operational support for scaling companies.",
    accent: "from-emerald-500 to-teal-500",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-700",
    ring: "group-hover:border-emerald-300",
    glow: "group-hover:shadow-[0_30px_60px_-20px_rgba(16,185,129,0.35)]",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  {
    icon: Landmark,
    title: "Enterprise Solutions",
    desc: "Multi-entity accounting, CFO advisory, tax planning, compliance, and strategic financial leadership.",
    accent: "from-amber-500 to-orange-500",
    chipBg: "bg-amber-100",
    chipText: "text-amber-700",
    ring: "group-hover:border-amber-300",
    glow: "group-hover:shadow-[0_30px_60px_-20px_rgba(245,158,11,0.35)]",
    bar: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
];


export function BuiltToScale() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
            Built to Scale
          </div>
          <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
            From startup to enterprise, financial support that grows with your business.
          </h2>
          <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
            Whether you're launching a startup, expanding operations, or managing multiple entities, Shamsuddin & Company provides scalable accounting, tax, payroll, reporting, and advisory services that grow with your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {cards.map(({ icon: Icon, title, desc, accent, chipBg, chipText, ring, glow, bar }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ borderRadius: 30 }}
              className={`group relative h-full flex flex-col p-8 md:p-10 bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all duration-500 ease-out hover:-translate-y-2 ${glow} ${ring} overflow-hidden`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${chipBg} ${chipText} transition-all duration-500 group-hover:scale-105`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-7 font-display font-bold text-2xl tracking-tight text-navy-deep">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-navy-deep/70">{desc}</p>
              <div className="mt-auto pt-8">
                <div className={`h-[3px] w-0 rounded-full ${bar} transition-all duration-500 ease-out group-hover:w-12`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
