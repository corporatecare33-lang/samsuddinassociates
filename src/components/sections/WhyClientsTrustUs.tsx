import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

const stats = [
  { value: "50%+", label: "Tax Savings Delivered" },
  { value: "150+", label: "Delivery Professionals" },
  { value: "18 days", label: "Avg. to Onboard" },
  { value: "5 yrs+", label: "Avg. Client Partnership" },
  { value: "20+", label: "Industries Served", full: true },
];

export function WhyClientsTrustUs() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        <div
          className="rounded-[36px] px-6 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20"
          style={{ backgroundColor: "#F7F4FF" }}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="inline-flex self-start items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
                Why Clients Trust Us
              </div>
              <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep">
                Credibility you can see before the first call.
              </h2>
              <p className="mt-6 text-lg text-navy-deep/70 leading-relaxed">
                Proof points from the same operating model: expert finance support, faster onboarding, long-term client relationships, and security standards built for sensitive financial work.
              </p>

              <div className="mt-10 md:mt-auto pt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] border border-navy-deep/5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep text-gold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-navy-deep/60">Verified</div>
                    <div className="font-display font-bold text-navy-deep">Clutch Top 1000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] border border-navy-deep/5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep text-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-navy-deep/60">Certified</div>
                    <div className="font-display font-bold text-navy-deep">AICPA SOC 2</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`${s.full ? "col-span-2" : ""} rounded-[24px] bg-white p-6 md:p-8 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] border border-navy-deep/5 flex flex-col justify-center min-h-[140px] md:min-h-[170px]`}
                >
                  <div className="font-display font-extrabold text-4xl md:text-5xl text-navy-deep tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm md:text-base text-navy-deep/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
