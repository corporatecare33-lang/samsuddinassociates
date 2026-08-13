import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Shamsuddin & Company" },
      { name: "description", content: "Real client outcomes across industries." },
      { property: "og:title", content: "Case Studies — Shamsuddin & Company" },
      { property: "og:description", content: "Real client outcomes across industries." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Case Studies"
      description="How growth companies achieve measurable outcomes with Shamsuddin & Company."
    />
  ),
});
