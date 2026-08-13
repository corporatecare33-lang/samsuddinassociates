import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Shamsuddin & Company" },
      { name: "description", content: "Free templates, checklists, and guides." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Downloads"
      description="Free templates, checklists, and financial playbooks from our team."
    />
  ),
});
