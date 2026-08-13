import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Shamsuddin & Company" },
      { name: "description", content: "Playbooks, benchmarks, and perspectives from the operators and CPAs behind Shamsuddin & Company." },
      { property: "og:title", content: "Resources — Shamsuddin & Company" },
      { property: "og:description", content: "Playbooks, benchmarks, and perspectives from the operators and CPAs behind Shamsuddin & Company." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Perspectives from operators who close the books."
      showTitleInBreadcrumb={false}
    />
  ),
});
