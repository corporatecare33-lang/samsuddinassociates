import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/site";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Shamsuddin & Company" },
      { name: "description", content: "Industry-specific finance expertise across healthcare, technology, construction, manufacturing, retail, and more." },
      { property: "og:title", content: "Industries — Shamsuddin & Company" },
      { property: "og:description", content: "Industry-specific finance expertise across healthcare, technology, construction, manufacturing, retail, and more." },
    ],
  }),
  component: IndustriesPage,
});

function slugify(t: string) {
  return t.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const BLURBS: Record<string, string> = {
  Healthcare: "Practices, groups, and health-tech operators — with fluency in reimbursement, compliance, and payer complexity.",
  Technology: "Venture-backed SaaS and platform businesses — ARR reporting, 409A support, and IPO-ready posture.",
  Construction: "Contractors and developers — WIP, job costing, and multi-state licensing done right.",
  Manufacturing: "Producers with inventory complexity — costing, margin analysis, and R&D credit capture.",
  Retail: "Brick-and-mortar, DTC, and marketplace sellers — sales tax, inventory, and channel-level margin visibility.",
  Nonprofit: "990-ready books, grant compliance, and board reporting that builds donor confidence.",
  "Professional Services": "Agencies and firms billing time or retainers — utilization, WIP, and partner economics on lock.",
};

function IndustriesCatalog() {
  return (
    <section className="border-t border-navy-deep/10 bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
            <span className="h-px w-8 bg-current" /> Sectors we serve
          </div>
          <h2 className="font-display text-3xl font-extrabold text-navy-deep md:text-5xl">
            Deep expertise across the industries we serve.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i}
              to="/industries/$slug"
              params={{ slug: slugify(i) }}
              className="group flex flex-col rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-[0_10px_30px_-24px_rgba(72,20,136,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-24px_rgba(72,20,136,0.35)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">Industry</div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-deep">{i}</h3>
              <p className="mt-3 flex-1 text-navy-deep/70 leading-relaxed">{BLURBS[i] || "Sector-specific accounting, tax, and advisory tuned to your operating reality."}</p>
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

function IndustriesPage() {
  return (
    <PlaceholderPage
      eyebrow="Industries"
      title="Finance expertise, tuned to your sector."
      description="We speak the operating language of every industry we serve — from healthcare and technology to construction and nonprofits."
      showTitleInBreadcrumb={false}
      afterContent={<IndustriesCatalog />}
    />
  );
}
