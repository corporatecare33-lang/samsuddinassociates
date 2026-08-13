import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Shamsuddin & Company" },
      { name: "description", content: "How we use cookies on our website." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="How we use cookies and similar technologies on our website."
    />
  ),
});
