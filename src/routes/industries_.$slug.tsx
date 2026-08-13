import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, slugToTitle } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/industries_/$slug")({
  head: ({ params }) => {
    const title = params?.slug ? slugToTitle(params.slug) : "Industries";
    return {
      meta: [
        { title: `${title} — Shamsuddin & Company` },
        { name: "description", content: `Financial expertise for the ${title.toLowerCase()} industry.` },
        { property: "og:title", content: `${title} — Shamsuddin & Company` },
        { property: "og:description", content: `Financial expertise for the ${title.toLowerCase()} industry.` },
      ],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const title = slugToTitle(slug);
  return (
    <PlaceholderPage
      eyebrow="Industries"
      title={title}
      description={`Sector-specific accounting, tax, and advisory services for ${title.toLowerCase()} companies.`}
    />
  );
}
