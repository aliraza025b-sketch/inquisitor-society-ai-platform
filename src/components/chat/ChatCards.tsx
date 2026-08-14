import { Icon } from "@/components/site/Icon";
import type { EventCard, OpportunityCard, ResourceCard } from "@/lib/inquisitor";

export function OpportunityCards({ items }: { items: OpportunityCard[] }) {
  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {items.map((o, i) => (
        <article
          key={`${o.title}-${i}`}
          className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-4 shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
              {o.tag}
            </span>
            <Icon name="bookmark_border" className="text-[20px] text-on-surface-variant" />
          </div>
          <h4 className="mt-3 font-display text-base font-bold text-on-surface">{o.title}</h4>
          <p className="text-sm text-on-surface-variant">{o.organization}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-on-surface-variant">
            <span className="inline-flex items-center gap-1">
              <Icon name="location_on" className="text-[14px]" />
              {o.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="schedule" className="text-[14px]" />
              {o.term}
            </span>
          </div>
          <p className="mt-3 text-xs text-on-surface-variant">
            <span className="font-semibold text-on-surface">Eligibility:</span> {o.eligibility}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-outline-variant/60 pt-3">
            <span className="text-xs font-semibold text-secondary">Deadline: {o.deadline}</span>
            <span className="text-xs font-semibold text-primary">View Details</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function EventCards({ items }: { items: EventCard[] }) {
  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {items.map((e, i) => (
        <article
          key={`${e.title}-${i}`}
          className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-4 shadow-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-tertiary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-tertiary">
              {e.tag}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-on-surface-variant">
              <Icon name="calendar_today" className="text-[14px]" />
              {e.date}
            </span>
          </div>
          <h4 className="mt-3 font-display text-base font-bold text-on-surface">{e.title}</h4>
          <div className="mt-2 space-y-1 text-xs text-on-surface-variant">
            <p className="inline-flex items-center gap-1">
              <Icon name="schedule" className="text-[14px]" />
              {e.time}
            </p>
            <p className="inline-flex items-center gap-1">
              <Icon name="location_on" className="text-[14px]" />
              {e.location}
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            Register Now
          </button>
        </article>
      ))}
    </div>
  );
}

export function ResourceCards({ items }: { items: ResourceCard[] }) {
  return (
    <div className="mt-3 space-y-2">
      {items.map((r, i) => (
        <div
          key={`${r.title}-${i}`}
          className="flex items-center gap-3 rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon name={r.icon} className="text-[20px]" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-on-surface">{r.title}</p>
            <p className="truncate text-xs text-on-surface-variant">{r.subtitle}</p>
          </div>
          <Icon name="chevron_right" className="text-[20px] text-on-surface-variant" />
        </div>
      ))}
    </div>
  );
}