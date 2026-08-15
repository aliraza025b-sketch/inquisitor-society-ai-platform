import { createFileRoute, Link } from "@tanstack/react-router";

import { Icon } from "@/components/site/Icon";
import { PageShell } from "@/components/site/PageShell";
import { SUGGESTED_QUERIES } from "@/lib/inquisitor";
import markAsset from "@/assets/inquisitors-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inquisitors Society — Meet Inquisitor AI" },
      {
        name: "description",
        content:
          "Ask Inquisitor AI about internships, opportunities, events, workshops, resources and membership in the Inquisitors Society.",
      },
      { property: "og:title", content: "Inquisitors Society — Meet Inquisitor AI" },
      {
        property: "og:description",
        content:
          "Your intelligent assistant for society opportunities, events, resources and membership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <img
            src={markAsset.url}
            alt="Inquisitors Society logo"
            className="mx-auto h-20 w-auto object-contain"
          />
          <h1 className="mt-7 font-display text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl">
            Meet Inquisitor AI
          </h1>
          <p className="mt-4 text-lg font-medium text-on-surface-variant">
            Your intelligent assistant for the Inquisitors Society.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-on-surface-variant">
            Ask questions about internships, opportunities, events, workshops, resources,
            membership, and society activities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              <Icon name="forum" className="text-[18px]" />
              Start a Conversation
            </Link>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 rounded-full border border-outline px-6 py-3.5 text-sm font-semibold text-on-surface"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-on-surface">Suggested Queries</h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Tap to instantly ask Inquisitor AI.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUGGESTED_QUERIES.map((q) => (
            <Link
              key={q.text}
              to="/ai"
              search={{ q: q.text }}
              className="group flex items-start gap-4 rounded-3xl border border-outline-variant/70 bg-surface-container-lowest p-5 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={q.icon} className="text-[20px]" />
              </span>
              <span className="flex-1 text-sm font-semibold leading-relaxed text-on-surface">
                {q.text}
              </span>
              <Icon
                name="arrow_forward"
                className="text-[18px] text-on-surface-variant transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
