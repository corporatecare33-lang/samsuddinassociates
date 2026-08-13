import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Shamsuddin & Company" },
      { name: "description", content: "Expert perspectives on finance, tax, and strategy." },
      { property: "og:title", content: "Insights — Shamsuddin & Company" },
      { property: "og:description", content: "Expert perspectives on finance, tax, and strategy." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Insights"
      description="Deep dives on tax planning, accounting, and financial strategy."
    />
  ),
});
