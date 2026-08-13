import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import consultantImg from "@/assets/consultant-cta.png";

export function TalkToExpertCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-mist px-8 pt-14 pb-0 md:px-16 md:pt-20 lg:pl-20 lg:pr-8"
          style={{ borderRadius: 48 }}
        >
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 items-end">
            <div className="max-w-xl pb-14 md:pb-20 text-center lg:text-left mx-auto lg:mx-0">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-navy-deep text-balance leading-[1.05]">
                Your business deserves more than algorithms.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/75">
                Get a dedicated financial team, supported by AI, and led by real experts who know how to apply it.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/75">
                No commitment. No generic consultation. Just a first conversation about what better finance support could look like for your business.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl hover:bg-navy-deep hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end items-end self-end">
              <img
                src={consultantImg}
                alt="Financial expert consultant with tablet"
                width={912}
                height={1200}
                loading="lazy"
                className="relative block w-64 sm:w-80 md:w-96 lg:w-full max-w-md h-auto object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
