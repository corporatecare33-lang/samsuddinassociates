import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Shamsuddin & Company" },
      { name: "description", content: "Transparent pricing for accounting, tax, and advisory services." },
      { property: "og:title", content: "Pricing — Shamsuddin & Company" },
      { property: "og:description", content: "Transparent pricing for accounting, tax, and advisory services." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Pricing"
      title="Pricing"
      description="Simple, transparent pricing built around the way modern businesses actually work."
      showTitleInBreadcrumb={false}
    />
  ),
});
