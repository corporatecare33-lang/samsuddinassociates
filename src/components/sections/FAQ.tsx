import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes Shamsuddin & Company's services unique?",
    a: "We combine seasoned CPAs with modern tooling to deliver accounting, tax, payroll, and CFO advisory under one roof — coordinated, proactive, and tailored to your growth stage.",
  },
  {
    q: "How can Shamsuddin & Company help my business save money?",
    a: "Through proactive tax planning, expense optimization, and financial forecasting, we consistently uncover savings that compound year over year while keeping you fully compliant.",
  },
  {
    q: "Is Shamsuddin & Company suitable for my business size and industry?",
    a: "Yes. We serve startups through mid-market companies across healthcare, technology, construction, manufacturing, retail, nonprofits, and professional services.",
  },
  {
    q: "How does Shamsuddin & Company's pricing work?",
    a: "We offer transparent, fixed-fee monthly packages tailored to your stage and scope — no surprise hourly invoices. Custom quotes are provided after a short discovery call.",
  },
  {
    q: "What accounting software does Shamsuddin & Company work with?",
    a: "We work with QuickBooks Online, Xero, NetSuite, Sage, and most major ERP and payroll platforms — including migrations between them.",
  },
  {
    q: "How does Shamsuddin & Company handle data security and confidentiality?",
    a: "All data is encrypted in transit and at rest, stored in SOC 2–compliant systems, and access is strictly role-based. Confidentiality is enforced by NDA across our team.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-navy-deep text-balance">
            Any Questions? Look Here
          </h2>
          <p className="mt-5 text-lg text-navy-deep/70 leading-relaxed">
            The most frequently asked questions about Shamsuddin & Company and our services.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 md:mt-20 max-w-[880px] flex flex-col gap-6">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                style={{ borderRadius: 28 }}
                className={`group border border-navy-deep/10 bg-white transition-colors duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "shadow-[0_20px_40px_-24px_rgba(72,20,136,0.25)] bg-mist/60"
                    : "hover:shadow-[0_15px_30px_-20px_rgba(11,20,50,0.2)] hover:bg-mist/40"
                }`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-5 px-5 md:px-8 py-4 md:py-5 text-left"
                >
                  <span className="font-display font-bold text-base md:text-[21px] text-navy-deep leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 grid place-items-center h-10 w-10 md:h-[50px] md:w-[50px] rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-gold text-white"
                        : "bg-navy-deep text-white group-hover:bg-gold"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 md:h-[18px] md:w-[18px] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-8 pb-5 md:pb-7 -mt-1 text-navy-deep/70 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
