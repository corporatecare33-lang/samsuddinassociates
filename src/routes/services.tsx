import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shamsuddin & Company" },
      { name: "description", content: "Tax, accounting, payroll, virtual CFO, and advisory services engineered for growth." },
      { property: "og:title", content: "Services — Shamsuddin & Company" },
      { property: "og:description", content: "Tax, accounting, payroll, virtual CFO, and advisory services engineered for growth." },
    ],
  }),
  component: ServicesPage,
});

function slugify(t: string) {
  return t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ServicesCatalog() {
  return (
    <section className="border-t border-navy-deep/10 bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
            <span className="h-px w-8 bg-current" /> Full catalog
          </div>
          <h2 className="font-display text-3xl font-extrabold text-navy-deep md:text-5xl">
            Every service, delivered by one senior team.
          </h2>
          <p className="mt-5 text-navy-deep/70 leading-relaxed md:text-lg">
            Pick the services you need today — add more as you scale.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services/$slug"
              params={{ slug: slugify(s.title) }}
              className="group flex flex-col rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-[0_10px_30px_-24px_rgba(72,20,136,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-24px_rgba(72,20,136,0.35)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">Service</div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-3 flex-1 text-navy-deep/70 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep">
                <span className="h-[3px] w-8 rounded-full bg-gold transition-all duration-300 group-hover:w-12" />
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <PlaceholderPage
      eyebrow="Services"
      title="One team for every finance need."
      description="Tax, accounting, payroll, CFO advisory, and everything in between — coordinated by senior partners and delivered on a modern stack."
      showTitleInBreadcrumb={false}
      afterContent={<ServicesCatalog />}
    />
  );
}
