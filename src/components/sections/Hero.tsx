import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Play, BarChart3, Users, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { fadeUp, stagger } from "@/lib/motion";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* Background effects */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-white" />
        </svg>
      </div>

      <div className="container-page relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* LEFT — Copy */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Trusted by 1,200+ growing companies
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-[4.25rem]"
            >
              Expert-led.<br />
              <span className="text-gold">Modern accounting,</span><br />
              tax & CFO strategy.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              One expert team for tax, books, payroll, reporting, and CFO strategy —
              powered by modern tooling so your finance function scales with you.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-white transition-all"
              >
                Talk to an expert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-navy-deep">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                See how it works
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-white/60"
            >
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> AICPA member firm</span>
              <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gold" /> SOC 2 workflows</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> 98% retention</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Visual mock with floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Card frame */}
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 backdrop-blur-xl shadow-2xl shadow-black/40">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-deep aspect-[4/5] md:aspect-[5/6]">
                {/* Inner dashboard mock */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Q4 · Live</span>
                  </div>

                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs text-white/50">Monthly revenue</div>
                    <div className="mt-1 font-display text-2xl font-extrabold text-white md:text-3xl">
                      $<AnimatedCounter to={2480} />K
                    </div>
                    <div className="mt-1 text-xs font-semibold text-gold">+18.4% vs last quarter</div>
                  </div>

                  {/* Chart bars */}
                  <div className="mt-6 flex-1 flex items-end gap-2">
                    {[38, 52, 45, 68, 58, 82, 72, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex-1 rounded-t-md ${i === 7 ? "bg-gold" : "bg-white/15"}`}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[10px] text-white/40">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                    <span>May</span><span>Jun</span><span>Jul</span><span className="text-gold font-semibold">Aug</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chip: Fueling Growth */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -left-4 top-16 md:-left-10 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-2xl shadow-black/25"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold/15 text-gold-ink">
                <BarChart3 className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-bold text-navy-deep">Fueling Growth</div>
                <div className="text-[11px] text-muted-foreground">Maximize your potential</div>
              </div>
            </motion.div>

            {/* Floating chip: Clients */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -right-3 bottom-10 md:-right-8 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-2xl shadow-black/25"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-deep/5 text-navy-deep">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-bold text-navy-deep">+500 <span className="text-muted-foreground font-medium">clients</span></div>
                <div className="text-[11px] text-muted-foreground">Retained year over year</div>
              </div>
            </motion.div>

            {/* Play button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 md:h-20 md:w-20 place-items-center rounded-full bg-gold text-navy-deep shadow-2xl shadow-black/40 hover:scale-110 transition-transform"
              aria-label="Play intro"
            >
              <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
              <Play className="relative h-6 w-6 fill-current translate-x-0.5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
