import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Shamsuddin & Company" },
      { name: "description", content: "Important disclaimers regarding our services and content." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Legal"
      title="Disclaimer"
      description="Important disclaimers regarding our services, content, and website."
    />
  ),
});
