import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/about_/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Shamsuddin & Company" },
      { name: "description", content: "Meet the leadership team behind Shamsuddin & Company." },
      { property: "og:title", content: "Leadership — Shamsuddin & Company" },
      { property: "og:description", content: "Meet the leadership team behind Shamsuddin & Company." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="About"
      title="Leadership"
      description="Experienced partners guiding every engagement with strategic clarity and hands-on expertise."
    />
  ),
});
