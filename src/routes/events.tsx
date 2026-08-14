import { createFileRoute, Link } from "@tanstack/react-router";

import { Icon } from "@/components/site/Icon";
import { PageHeader, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Workshops, Networking & Career Fairs" },
      {
        name: "description",
        content:
          "Upcoming Inquisitors Society workshops, networking mixers and career events for members and alumni.",
      },
      { property: "og:title", content: "Inquisitors Society Events" },
      {
        property: "og:description",
        content:
          "Join professional development workshops, industry networking and collaborative sessions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  {
    tag: "Networking",
    title: "Example Networking Mixer",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "Location to be announced",
    body: "Connect with alumni and professionals across various sectors in a relaxed setting designed for meaningful conversations.",
  },
  {
    tag: "Career",
    title: "Upcoming Society Career Fair",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "Location to be announced",
    body: "Meet representatives from top-tier firms and innovative organizations looking for exceptional talent.",
  },
  {
    tag: "Seminar",
    title: "Example Research Seminar",
    date: "Date to be announced",
    time: "Time to be announced",
    location: "Location to be announced",
    body: "A member-led session exploring current research directions and collaborative project opportunities.",
  },
];

function EventsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Upcoming Schedule"
        eyebrowIcon="calendar_month"
        title="Society Events"
        description="Join us for professional development workshops, industry networking, and collaborative sessions designed to elevate your technical and interpersonal skills."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-outline-variant/70 bg-surface-container-low p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary-container px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-on-secondary-container">
              Featured
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
              Workshop
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-on-surface">
            Upcoming Society Event
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-on-surface-variant">
            An intensive deep-dive into modern technical architecture and problem-solving
            strategies. Led by industry veterans, this session focuses on practical applications
            and collaborative problem solving in high-stakes environments.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar_today" className="text-[16px]" />
              Date to be announced
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="location_on" className="text-[16px]" />
              Location to be announced
            </span>
          </div>
          <Link
            to="/ai"
            search={{ q: "What events are coming up?" }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Register Details
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </article>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="flex flex-col rounded-3xl border border-outline-variant/70 bg-surface-container-lowest p-6"
            >
              <span className="w-fit rounded-full bg-tertiary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-tertiary">
                {e.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-on-surface">{e.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">
                {e.body}
              </p>
              <div className="mt-4 space-y-1.5 text-xs text-on-surface-variant">
                <p className="inline-flex items-center gap-1.5">
                  <Icon name="calendar_today" className="text-[14px]" />
                  {e.date}
                </p>
                <p className="flex items-center gap-1.5">
                  <Icon name="schedule" className="text-[14px]" />
                  {e.time}
                </p>
                <p className="flex items-center gap-1.5">
                  <Icon name="location_on" className="text-[14px]" />
                  {e.location}
                </p>
              </div>
              <Link
                to="/ai"
                search={{ q: `Tell me more about the ${e.title}.` }}
                className="mt-5 rounded-full border border-primary px-4 py-2 text-center text-sm font-semibold text-primary"
              >
                RSVP
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}