import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Technology handles the routine work",
    desc: "Automation helps organize transactions, bookkeeping, reconciliation, and recurring financial workflows efficiently.",
  },
  {
    n: "02",
    title: "Experts review and advise",
    desc: "Experienced accountants and tax professionals review the work, ensure compliance, and provide strategic recommendations.",
  },
  {
    n: "03",
    title: "Better insights for better decisions",
    desc: "Receive accurate reports, financial clarity, forecasting, and practical guidance that helps your business grow.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-deep py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-gold">
            How It Works
          </div>
          <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
            Technology powers the workflow. Experts deliver the strategy.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Our technology streamlines bookkeeping, reporting, payroll, and financial processes, while experienced accountants and advisors review, validate, and guide every important financial decision.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {steps.map(({ n, title, desc }) => (
            <motion.div
              key={n}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ borderRadius: 30, transitionDuration: "250ms" }}
              className="group relative h-full flex flex-col p-8 md:p-10 bg-white/[0.04] border border-white/10 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)] transition-all ease-out hover:-translate-y-1.5 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gold text-navy-deep font-display font-bold text-lg">
                {n}
              </div>
              <h3 className="mt-7 font-display font-bold text-2xl text-white">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
