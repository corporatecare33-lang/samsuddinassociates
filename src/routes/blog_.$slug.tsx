import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, Home } from "lucide-react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { articles, getArticleBySlug } from "@/data/articles";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const article = params?.slug ? getArticleBySlug(params.slug) : undefined;
    const title = article ? article.title : "Article";
    const description = article ? article.excerpt : "Perspectives from the Shamsuddin & Company team.";
    return {
      meta: [
        { title: `${title} — Shamsuddin & Company` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Shamsuddin & Company` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <main className="bg-white">
          <section className="container-page py-24 text-center md:py-32">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-deep/10 bg-white px-3 py-1 text-xs font-semibold tracking-wider uppercase text-navy-deep/70">
              Articles
            </div>
            <h1 className="font-display text-3xl font-extrabold text-navy-deep md:text-5xl">
              Article not found
            </h1>
            <p className="mt-5 text-navy-deep/70 md:text-lg">
              We couldn't find the article you're looking for.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy-deep text-white">
          <div className="container-page relative py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/60">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-white/80">Articles</span>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-white">{article.title}</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              <span className="h-px w-6 bg-current" /> {article.category}
            </div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl max-w-4xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Shamsuddin & Company Insights
              </span>
            </div>
          </div>
        </section>

        {/* IMAGE + BODY */}
        <section className="py-16 md:py-24">
          <div className="container-page">
            <div className="mx-auto -mt-24 max-w-4xl overflow-hidden rounded-3xl border border-navy-deep/10 shadow-[0_25px_60px_-30px_rgba(11,20,50,0.35)] md:-mt-32">
              <img
                src={article.image}
                alt={article.title}
                className="h-[280px] w-full object-cover md:h-[420px]"
              />
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              {article.sections.map((s) => (
                <div key={s.heading} className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
                    {s.heading}
                  </h2>
                  {s.body.map((p, i) => (
                    <p key={i} className="mt-4 text-navy-deep/75 leading-relaxed md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <div className="mt-12 rounded-3xl border border-navy-deep/10 bg-mist p-8 md:p-10">
                <h3 className="font-display text-xl font-bold text-navy-deep">Key takeaways</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {article.takeaways.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-navy-deep/75 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy-deep/10 pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-gold-ink transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all articles
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-sm transition-all hover:-translate-y-0.5 hover:bg-navy-deep hover:text-white"
                >
                  Talk to an advisor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        {related.length > 0 && (
          <section className="bg-mist py-16 md:py-24">
            <div className="container-page">
              <h2 className="font-display text-2xl font-extrabold text-navy-deep md:text-4xl">
                More from our insights
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    style={{ borderRadius: 32 }}
                    className="group relative flex flex-col overflow-hidden bg-white border border-navy-deep/10 shadow-[0_10px_30px_-18px_rgba(11,20,50,0.18)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(72,20,136,0.35)]"
                  >
                    <div className="relative overflow-hidden m-3" style={{ borderRadius: 24 }}>
                      <img
                        src={a.image}
                        alt={a.title}
                        loading="lazy"
                        className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
                        {a.category}
                      </span>
                    </div>
                    <div className="px-6 pb-8 pt-2">
                      <h3 className="font-display font-bold text-lg text-navy-deep leading-snug">
                        {a.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
