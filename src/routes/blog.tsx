import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Home,
  Search,
  SearchX,
  X,
} from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { articles } from "@/data/articles";
import { fadeUp, stagger } from "@/lib/motion";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Shamsuddin & Company" },
      { name: "description", content: "Articles and updates from our team." },
      { property: "og:title", content: "Blog — Shamsuddin & Company" },
      { property: "og:description", content: "Articles and updates from our team." },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const featured = articles[0];
  const isDefaultView = category === "All" && query.trim() === "";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const gridArticles = isDefaultView ? filtered.filter((a) => a.slug !== featured.slug) : filtered;

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy-deep text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="container-page relative py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/60">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-white">Blog</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              <span className="h-px w-6 bg-current" /> Resources
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl max-w-4xl">
              Insights & Articles
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl leading-relaxed">
              Perspectives, updates, and playbooks from the Shamsuddin & Company team — written by the CPAs and advisors who do the work.
            </p>

            <div className="mt-10 max-w-xl">
              <label className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 transition-colors focus-within:border-gold/60 focus-within:bg-white/10">
                <Search className="h-4.5 w-4.5 shrink-0 text-white/50 transition-colors group-focus-within:text-gold" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  aria-label="Search articles"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none md:text-base"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </label>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section className="sticky top-20 z-10 border-b border-navy-deep/10 bg-white/90 backdrop-blur-sm">
          <div className="container-page">
            <div className="flex flex-wrap items-center gap-2.5 py-5">
              {CATEGORIES.map((c) => {
                const isActive = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "border-gold bg-gold text-navy-deep shadow-sm"
                        : "border-navy-deep/12 bg-white text-navy-deep/65 hover:border-gold/40 hover:text-navy-deep"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        {isDefaultView && (
          <section className="py-16 md:py-20">
            <div className="container-page">
              <motion.div
                key={`featured-label-${featured.slug}`}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink"
              >
                <span className="h-px w-8 bg-current" /> Featured
              </motion.div>
              <motion.div
                key={`featured-card-${featured.slug}`}
                variants={fadeUp}
                initial="hidden"
                animate="show"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  style={{ borderRadius: 40 }}
                  className="group grid overflow-hidden border border-navy-deep/10 bg-mist shadow-[0_25px_60px_-35px_rgba(11,20,50,0.35)] transition-all duration-300 hover:shadow-[0_30px_70px_-30px_rgba(72,20,136,0.35)] lg:grid-cols-2"
                >
                  <div className="relative h-64 overflow-hidden md:h-80 lg:h-full">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
                      {featured.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <h2 className="font-display text-2xl font-extrabold text-navy-deep text-balance md:text-3xl lg:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-5 text-navy-deep/70 leading-relaxed md:text-lg">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-sm text-navy-deep/55">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4" /> {featured.readTime}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> S&C Insights
                      </span>
                    </div>
                    <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* ARTICLE GRID */}
        <section className={isDefaultView ? "pb-20 md:pb-28" : "py-16 md:py-24"}>
          <div className="container-page">
            {!isDefaultView && (
              <p className="mb-8 text-sm text-navy-deep/60">
                {gridArticles.length} {gridArticles.length === 1 ? "article" : "articles"} found
                {query.trim() && (
                  <>
                    {" "}
                    for "<span className="font-semibold text-navy-deep">{query.trim()}</span>"
                  </>
                )}
              </p>
            )}

            {gridArticles.length === 0 ? (
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-navy-deep/15 bg-mist px-8 py-20 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-navy-deep/40 shadow-sm">
                  <SearchX className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-deep">No articles found</h3>
                <p className="max-w-sm text-navy-deep/60">
                  Try a different search term or browse another category.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <motion.div
                key={`${category}-${query.trim()}`}
                variants={stagger(0.08)}
                initial="hidden"
                animate="show"
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {gridArticles.map((a) => (
                  <motion.div key={a.slug} variants={fadeUp}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: a.slug }}
                      style={{ borderRadius: 32 }}
                      className="group relative flex h-full flex-col overflow-hidden bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(72,20,136,0.35)]"
                    >
                      <div className="relative overflow-hidden m-3" style={{ borderRadius: 24 }}>
                        <img
                          src={a.image}
                          alt={a.title}
                          loading="lazy"
                          className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
                          {a.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                        <h3 className="font-display font-bold text-lg text-navy-deep leading-snug">
                          {a.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm text-navy-deep/70 leading-relaxed">
                          {a.excerpt}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-navy-deep/10 pt-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-navy-deep/55">
                            <Clock className="h-3.5 w-3.5" /> {a.readTime}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-deep transition-colors group-hover:text-gold-ink">
                            Read
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
