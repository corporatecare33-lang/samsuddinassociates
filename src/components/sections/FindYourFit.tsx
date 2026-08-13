import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rows = [
  { label: "Stage", value: "Growth", pct: 55 },
  { label: "Systems", value: "QBO + BI", pct: 75 },
  { label: "Needs", value: "Tax + CFO", pct: 90 },
];

export function FindYourFit() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
              Find Your Fit
            </div>
            <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
              Tailored to your stage and scale
            </h2>
            <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
              From early-stage bookkeeping to larger-scale accounting, tax, and CFO support, we're built to meet you where you are and grow with you.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-4 font-display font-semibold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-deep w-full sm:w-auto justify-center"
            >
              Get a Custom Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ borderRadius: 32 }}
            className="bg-white p-8 md:p-10 border border-navy-deep/10 shadow-[0_25px_60px_-30px_rgba(11,20,50,0.25)]"
          >
            <div className="flex flex-col gap-7">
              {rows.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-navy-deep">
                      {r.label}
                    </span>
                    <span className="font-display font-bold text-navy-deep">
                      {r.value}
                    </span>
                  </div>
                  <div
                    className="mt-3 h-2.5 w-full rounded-full overflow-hidden"
                    style={{ backgroundColor: "#F0EAFB" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.pct}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 pt-6 border-t border-navy-deep/10 text-sm md:text-base text-navy-deep/60 leading-relaxed">
              Tell us your company stage, systems, and current pain points, and we'll guide you toward the right model.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
