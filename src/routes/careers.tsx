import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Shamsuddin & Company" },
      { name: "description", content: "Join a senior-heavy team doing the best work of their careers — with clients who value it." },
      { property: "og:title", content: "Careers — Shamsuddin & Company" },
      { property: "og:description", content: "Join a senior-heavy team doing the best work of their careers — with clients who value it." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Careers"
      title="Do the best work of your career."
      showTitleInBreadcrumb={false}
    />
  ),
});
