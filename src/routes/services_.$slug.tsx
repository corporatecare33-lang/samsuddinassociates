import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, slugToTitle } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const title = params?.slug ? slugToTitle(params.slug) : "Services";
    return {
      meta: [
        { title: `${title} — Shamsuddin & Company` },
        { name: "description", content: `${title} services for growing businesses.` },
        { property: "og:title", content: `${title} — Shamsuddin & Company` },
        { property: "og:description", content: `${title} services for growing businesses.` },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const title = slugToTitle(slug);
  return (
    <PlaceholderPage
      eyebrow="Services"
      title={title}
      description={`Premium ${title.toLowerCase()} solutions tailored to your growth stage — engineered by our senior advisors.`}
    />
  );
}
