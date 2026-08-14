import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Icon } from "./Icon";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <Link
        to="/ai"
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] sm:hidden"
      >
        <Icon name="forum" className="text-[20px]" />
        Ask Inquisitor AI
      </Link>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  eyebrowIcon,
  title,
  description,
}: {
  eyebrow: string;
  eyebrowIcon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        <Icon name={eyebrowIcon} className="text-[16px]" />
        {eyebrow}
      </span>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-on-surface sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}