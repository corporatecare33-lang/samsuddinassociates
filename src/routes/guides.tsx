import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Guides — Shamsuddin & Company" },
      { name: "description", content: "Practical playbooks for finance leaders." },
      { property: "og:title", content: "Guides — Shamsuddin & Company" },
      { property: "og:description", content: "Practical playbooks for finance leaders." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Guides"
      description="Actionable frameworks and templates for every stage of your business."
    />
  ),
});
