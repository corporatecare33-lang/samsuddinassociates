import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

function useSlidesPerView() {
  const [spv, setSpv] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setSpv(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return spv;
}

export function LatestArticles() {
  const spv = useSlidesPerView();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = articles.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  // Build looped array so we can always show `spv` cards from `index`
  const visible = Array.from({ length: spv }, (_, i) => articles[(index + i) % total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
              Latest Articles
            </div>
            <h2 className="mt-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-navy-deep text-balance">
              Latest Articles
            </h2>
            <p className="mt-5 text-lg text-navy-deep/70 leading-relaxed">
              We cover industry changes and deep-dive into financial strategies.
            </p>
          </motion.div>

          <div className="flex gap-3 md:shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous articles"
              className="group grid h-12 w-12 place-items-center rounded-full bg-white border border-navy-deep/10 text-navy-deep shadow-sm transition-all duration-300 hover:bg-gold hover:border-gold hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5 text-navy-deep transition-colors duration-300 group-hover:text-navy-deep" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next articles"
              className="group grid h-12 w-12 place-items-center rounded-full bg-white border border-navy-deep/10 text-navy-deep shadow-sm transition-all duration-300 hover:bg-gold hover:border-gold hover:-translate-y-0.5"
            >
              <ArrowRight className="h-5 w-5 text-navy-deep transition-colors duration-300 group-hover:text-navy-deep" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="mt-14 md:mt-20"
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 md:gap-8"
            style={{ gridTemplateColumns: `repeat(${spv}, minmax(0, 1fr))` }}
          >
            {visible.map((a, i) => (
              <Link
                key={`${index}-${i}`}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                style={{ borderRadius: 32 }}
                className="group relative flex flex-col overflow-hidden bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(72,20,136,0.35)]"
              >
                <div
                  className="relative overflow-hidden m-3"
                  style={{ borderRadius: 24 }}
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
                    {a.category}
                  </span>
                </div>
                <div className="px-6 pb-8 pt-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-navy-deep leading-snug transition-colors duration-300 group-hover:text-[color:var(--navy-deep)]">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-navy-deep/70 leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
