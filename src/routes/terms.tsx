import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Shamsuddin & Company" },
      { name: "description", content: "The terms that govern the use of our services." },
      { property: "og:title", content: "Terms & Conditions — Shamsuddin & Company" },
      { property: "og:description", content: "The terms that govern the use of our services." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The terms that govern the use of Shamsuddin & Company services."
    />
  ),
});
