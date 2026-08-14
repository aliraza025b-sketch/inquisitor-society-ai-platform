import { createFileRoute, Link } from "@tanstack/react-router";

import { Icon } from "@/components/site/Icon";
import { PageHeader, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Inquisitors Society Knowledge Repository" },
      {
        name: "description",
        content:
          "Curated learning materials, methodology guides, official documents, workshop archives and career resources for society members.",
      },
      { property: "og:title", content: "Inquisitors Society Knowledge Repository" },
      {
        property: "og:description",
        content:
          "Access curated academic guides, workshop materials and career resources from the Inquisitors Society.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  {
    icon: "school",
    title: "Learning Resources",
    body: "Curated courses, reading lists, and foundational materials across various disciplines.",
    cta: "Browse Catalog",
  },
  {
    icon: "directions",
    title: "Methodology Guides",
    body: "Standardized approaches to problem-solving, project management, and research.",
    cta: "View Guides",
  },
  {
    icon: "description",
    title: "Official Documents",
    body: "Society bylaws, meeting minutes, technical specifications, and policy archives.",
    cta: "Access Archives",
  },
  {
    icon: "construction",
    title: "Workshop Materials",
    body: "Presentations, coding exercises, and datasets from past technical workshops and masterclasses.",
    cta: "Download Materials",
  },
  {
    icon: "trending_up",
    title: "Career Resources",
    body: "Resume templates, interview preparation frameworks, and industry networking guides.",
    cta: "Prepare Now",
  },
  {
    icon: "article",
    title: "Society Publications",
    body: "Peer-reviewed articles, term papers, and collaborative research published by members.",
    cta: "Read Journal",
  },
];

function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Knowledge Repository"
        eyebrowIcon="menu_book"
        title="Resources for continuous learning"
        description="Access curated materials, academic guides, and professional development resources designed to foster continuous learning and innovation within the society."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {RESOURCES.map((r) => (
          <article
            key={r.title}
            className="group flex flex-col rounded-3xl border border-outline-variant/70 bg-surface-container-lowest p-6 transition-colors hover:border-primary"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon name={r.icon} className="text-[24px]" />
            </span>
            <h2 className="mt-5 font-display text-lg font-bold text-on-surface">{r.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">{r.body}</p>
            <Link
              to="/ai"
              search={{ q: `${r.title}: what is available?` }}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {r.cta}
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
  );
}