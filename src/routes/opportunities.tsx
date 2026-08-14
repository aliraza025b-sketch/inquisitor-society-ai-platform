import { createFileRoute, Link } from "@tanstack/react-router";

import { Icon } from "@/components/site/Icon";
import { PageHeader, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Internships, Mentorship & Training" },
      {
        name: "description",
        content:
          "Explore Inquisitors Society internships, training modules, workshops, mentorship and career development pathways.",
      },
      { property: "og:title", content: "Inquisitors Society Opportunities" },
      {
        property: "og:description",
        content:
          "Curated avenues for professional and academic growth: placements, mentorship, workshops and industry exposure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpportunitiesPage,
});

const TRACKS = [
  {
    icon: "work",
    title: "Internships",
    body: "Immersive placements designed to bridge theoretical frameworks with practical industry application.",
    cta: "Explore placements",
  },
  {
    icon: "model_training",
    title: "Training opportunities",
    body: "Rigorous skill-building modules targeting methodological advancements and technical proficiencies.",
    cta: "View modules",
  },
  {
    icon: "groups",
    title: "Workshops",
    body: "Intensive, collaborative sessions focused on specialized topics and peer-driven problem solving.",
    cta: "Register now",
  },
  {
    icon: "psychology",
    title: "Mentorship",
    body: "Strategic guidance from distinguished alumni and industry leaders to navigate your academic trajectory.",
    cta: "Find a mentor",
  },
  {
    icon: "trending_up",
    title: "Career development",
    body: "Resources for portfolio construction, interview preparation, and long-term career strategizing.",
    cta: "Access resources",
  },
  {
    icon: "domain",
    title: "Industry exposure",
    body: "Direct engagement with corporate partners through site visits, seminars, and network building.",
    cta: "See schedule",
  },
];

function OpportunitiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Academic Advancement"
        eyebrowIcon="work"
        title="Cultivate your intellectual trajectory"
        description="Explore carefully curated avenues for professional and academic growth. Engage with leading minds, refine your expertise, and position yourself at the vanguard of innovation."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {TRACKS.map((t) => (
          <article
            key={t.title}
            className="flex flex-col rounded-3xl border border-outline-variant/70 bg-surface-container-lowest p-6 transition-colors hover:border-primary"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon name={t.icon} className="text-[24px]" />
            </span>
            <h2 className="mt-5 font-display text-lg font-bold text-on-surface">{t.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">{t.body}</p>
            <Link
              to="/ai"
              search={{ q: `Tell me about ${t.title.toLowerCase()} in the society.` }}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {t.cta}
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            Featured Opportunity
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">Example Opportunity</h2>
          <p className="mt-2 max-w-2xl text-sm opacity-90">
            Details to be announced. Example Organization.
          </p>
          <Link
            to="/ai"
            search={{ q: "Show me available internship opportunities." }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface px-5 py-3 text-sm font-semibold text-primary"
          >
            View Requirements
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}