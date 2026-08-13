import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Shamsuddin & Company" },
      { name: "description", content: "Tailored financial solutions for every stage of business." },
      { property: "og:title", content: "Solutions — Shamsuddin & Company" },
      { property: "og:description", content: "Tailored financial solutions for every stage of business." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Solutions"
      title="Solutions"
      description="End-to-end financial solutions engineered around your growth stage and industry."
      showTitleInBreadcrumb={false}
    />
  ),
});
