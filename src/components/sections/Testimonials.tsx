import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Shamsuddin & Company transformed our financial operations. Their team handles our books, payroll, and tax planning with precision—so we can focus on scaling the business.",
    name: "Ayesha Rahman",
    role: "Managing Director",
    company: "Northline Logistics",
  },
  {
    quote:
      "The CFO advisory has been a game-changer. Clear forecasts, honest guidance, and reporting our board actually trusts. We finally have a real financial partner.",
    name: "Daniel Whitaker",
    role: "Founder",
    company: "Whitaker & Co.",
  },
  {
    quote:
      "From bookkeeping to strategic planning, everything is coordinated under one roof. Response times are fast and the quality of work is consistently excellent.",
    name: "Priya Menon",
    role: "CEO",
    company: "Meridian Health Group",
  },
  {
    quote:
      "Their proactive tax planning saved us more than we imagined. It feels less like an accountant and more like a long-term growth partner working alongside our team.",
    name: "Marcus Chen",
    role: "Finance Manager",
    company: "Arcadia Retail",
  },
  {
    quote:
      "Payroll and compliance used to be a monthly headache. Now it just works. Accurate, on time, and completely off our plate—exactly what we needed.",
    name: "Sofia Alvarez",
    role: "Operations Director",
    company: "Halcyon Studios",
  },
  {
    quote:
      "As a small business owner, I finally understand my numbers. The team explains everything clearly and helps me make smarter decisions every single quarter.",
    name: "James O'Connor",
    role: "Business Owner",
    company: "Ironbridge Contracting",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 2) % total);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 2 + total) % total);
  };

  const visible = [
    testimonials[index % total],
    testimonials[(index + 1) % total],
  ];

  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
              From Our Clients
            </div>
            <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
              Businesses trust Shamsuddin & Company to simplify finance and support growth.
            </h2>
            <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
              From startups to established companies, our clients rely on us for accurate accounting, proactive tax planning, reliable payroll, and strategic financial guidance that helps them make better business decisions.
            </p>
          </motion.div>

          <div className="flex gap-3 md:shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-white transition-all hover:bg-navy-deep/90 hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-white transition-all hover:bg-navy-deep/90 hover:-translate-y-0.5"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 md:mt-20 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:gap-8 md:grid-cols-2 items-stretch"
            >
              {visible.map((t, i) => (
                <div
                  key={`${index}-${i}`}
                  style={{ borderRadius: 30 }}
                  className="group relative h-full flex flex-col p-8 md:p-10 bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1.5 hover:bg-gold hover:border-gold hover:shadow-[0_25px_50px_-20px_rgba(201,162,39,0.55)] overflow-hidden"
                >
                  <div className="flex items-center gap-1 text-navy-deep">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-navy-deep/80">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto pt-8 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-gold font-display font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy-deep">
                        {t.name}
                      </div>
                      <div className="text-sm text-navy-deep/60">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                  <Quote
                    className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 text-navy-deep/10 transition-colors duration-300 group-hover:text-navy-deep"
                    strokeWidth={1}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
