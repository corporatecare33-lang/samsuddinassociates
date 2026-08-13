import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shamsuddin & Company" },
      { name: "description", content: "A modern accounting and financial consulting partner for ambitious teams — built by CPAs who have been operators." },
      { property: "og:title", content: "About — Shamsuddin & Company" },
      { property: "og:description", content: "A modern accounting and financial consulting partner for ambitious teams — built by CPAs who have been operators." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="About"
      title="Finance and accounting, engineered for growth."
      showTitleInBreadcrumb={false}
    />
  ),
});
