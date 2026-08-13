import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Shamsuddin & Company" },
      { name: "description", content: "How we collect, use, and protect your information." },
      { property: "og:title", content: "Privacy Policy — Shamsuddin & Company" },
      { property: "og:description", content: "How we collect, use, and protect your information." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="Our commitment to protecting your privacy and safeguarding your data."
    />
  ),
});
