import { motion } from "framer-motion";
import { Bot, Building2, Sparkles, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "Automation Alone",
    desc: "Software increases speed but cannot replace financial judgment, compliance expertise, or business strategy.",
    highlighted: false,
  },
  {
    icon: Building2,
    title: "Traditional Accounting",
    desc: "Conventional firms provide expertise but often lack modern workflows, automation, and real-time reporting.",
    highlighted: false,
  },
  {
    icon: Sparkles,
    title: "Shamsuddin & Company",
    desc: "We combine expert accountants, tax professionals, and modern technology to deliver accurate, strategic, and scalable financial solutions.",
    highlighted: true,
  },
];

export function TheChallenge() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-navy-deep/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
            The Challenge
          </div>
          <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
            Growing businesses need trusted financial guidance—not automation alone.
          </h2>
          <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
            Modern businesses benefit from technology, but important financial decisions still require experienced accountants, tax professionals, and strategic advisors. Shamsuddin & Company combines modern technology with expert human guidance to deliver reliable financial solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {cards.map(({ icon: Icon, title, desc, highlighted }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ borderRadius: 32, transitionDuration: "250ms" }}
              className={
                highlighted
                  ? "group relative h-full flex flex-col p-8 md:p-10 bg-navy-deep text-white border border-navy-deep shadow-[0_10px_30px_-12px_rgba(11,20,50,0.25)] transition-all ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(11,20,50,0.45)] overflow-hidden"
                  : "group relative h-full flex flex-col p-8 md:p-10 bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all ease-out hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(11,20,50,0.28)]"
              }
            >
              {highlighted && (
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
              )}
              <div
                className={
                  highlighted
                    ? "relative grid h-14 w-14 place-items-center rounded-2xl bg-gold text-navy-deep"
                    : "grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-navy-deep transition-colors group-hover:bg-gold/25"
                }
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3
                className={
                  highlighted
                    ? "relative mt-7 font-display font-bold text-2xl text-white"
                    : "mt-7 font-display font-bold text-2xl text-navy-deep"
                }
              >
                {title}
              </h3>
              <p
                className={
                  highlighted
                    ? "relative mt-3 leading-relaxed text-white/75"
                    : "mt-3 leading-relaxed text-navy-deep/70"
                }
              >
                {desc}
              </p>
              {highlighted && (
                <div className="relative mt-auto pt-8 flex items-center gap-2 text-sm font-semibold text-gold">
                  Learn how we work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
