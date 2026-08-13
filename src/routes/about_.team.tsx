import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/about_/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Shamsuddin & Company" },
      { name: "description", content: "The specialists who make Shamsuddin & Company run." },
      { property: "og:title", content: "Our Team — Shamsuddin & Company" },
      { property: "og:description", content: "The specialists who make Shamsuddin & Company run." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="About"
      title="Our Team"
      description="Accountants, tax specialists, and advisors dedicated to client success."
    />
  ),
});
