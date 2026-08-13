import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/about_/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Shamsuddin & Company" },
      { name: "description", content: "Why growth companies trust Shamsuddin & Company." },
      { property: "og:title", content: "Why Choose Us — Shamsuddin & Company" },
      { property: "og:description", content: "Why growth companies trust Shamsuddin & Company." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="About"
      title="Why Choose Us"
      description="Senior-led engagements, modern tooling, and outcomes measured by your growth."
    />
  ),
});
