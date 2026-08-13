import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Shamsuddin & Company" },
      { name: "description", content: "Answers to common questions about our services." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Resources"
      title="Frequently Asked Questions"
      description="Answers to the most common questions we receive from clients and partners."
    />
  ),
});
