import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-16 md:px-16 md:py-24"
        >
          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-current" /> Get started
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white text-balance md:text-5xl">
              Ready to modernize your finance function?
            </h2>
            <p className="mt-5 max-w-lg text-white/70 md:text-lg">
              Book a free 30-minute consultation. We'll assess your current setup and show you where the leverage is.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-white transition-colors"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See how we work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
