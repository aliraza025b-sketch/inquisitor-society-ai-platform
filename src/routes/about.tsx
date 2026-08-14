import { createFileRoute, Link } from "@tanstack/react-router";

import { Icon } from "@/components/site/Icon";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Inquisitors Society — Learn, Innovate, Create" },
      {
        name: "description",
        content:
          "The Inquisitors Society fosters intellectual curiosity, technical excellence and professional development for its members.",
      },
      { property: "og:title", content: "About the Inquisitors Society" },
      {
        property: "og:description",
        content:
          "Our mission, vision and history: bridging academic theory and industry practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: "rocket_launch",
    title: "Our Mission",
    body: "To cultivate a dynamic environment where analytical minds can collaborate, experiment, and develop cutting-edge solutions. We strive to provide unparalleled resources and mentorship that transform potential into profound impact.",
  },
  {
    icon: "visibility",
    title: "Our Vision",
    body: "To be the leading catalyst for innovation, recognized globally for producing visionary leaders who navigate complexity with integrity and advanced technical proficiency.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-outline-variant/60 bg-surface-container-low">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-on-surface sm:text-5xl">
            About Inquisitors Society
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Learn • Innovate • Create
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-on-surface-variant">
            We are a premier organization dedicated to fostering intellectual curiosity, technical
            excellence, and professional development. Our community bridges the gap between
            theoretical knowledge and practical application, empowering members to thrive in
            rapidly evolving landscapes.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {PILLARS.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl border border-outline-variant/70 bg-surface-container-lowest p-8"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon name={p.icon} className="text-[26px]" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-on-surface">{p.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">{p.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-outline-variant/70 bg-surface-container-low p-8">
          <h2 className="font-display text-2xl font-bold text-on-surface">
            History &amp; Achievements
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-on-surface-variant">
            Founded by a small circle of students who believed that curiosity deserves
            infrastructure, the society has grown into a network of researchers, builders and
            industry mentors. Detailed milestones, awards and member publications are being
            compiled and will appear here as the archive is finalised.
          </p>
          <Link
            to="/ai"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Icon name="forum" className="text-[18px]" />
            Ask Inquisitor AI about the society
          </Link>
        </div>
      </section>
    </PageShell>
  );
}