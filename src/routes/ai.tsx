import { createFileRoute, useSearch } from "@tanstack/react-router";

import { InquisitorChat } from "@/components/chat/InquisitorChat";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/ai")({
  validateSearch: (search: Record<string, unknown>): { q?: string } =>
    typeof search["q"] === "string" && search["q"] ? { q: search["q"] as string } : {},
  head: () => ({
    meta: [
      { title: "Inquisitor AI — Ask the Inquisitors Society Assistant" },
      {
        name: "description",
        content:
          "Chat with Inquisitor AI about Inquisitors Society internships, events, workshops, resources and membership.",
      },
      { property: "og:title", content: "Inquisitor AI — Society Assistant" },
      {
        property: "og:description",
        content:
          "Ask Inquisitor AI about opportunities, events, resources and membership in the Inquisitors Society.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiPage,
});

function AiPage() {
  const { q } = useSearch({ from: "/ai" });
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <SiteHeader />
      {q ? <InquisitorChat initialPrompt={q} /> : <InquisitorChat />}
    </div>
  );
}