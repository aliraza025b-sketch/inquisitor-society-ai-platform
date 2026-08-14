import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Icon } from "./Icon";
import { NAV_ITEMS } from "@/lib/inquisitor";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant/60 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Icon name="psychology" className="text-[20px]" filled />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-on-surface">
            Inquisitors Society
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "bg-primary/10 text-primary hover:bg-primary/10",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/ai"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-container sm:inline-flex"
          >
            <Icon name="auto_awesome" className="text-[18px]" />
            Ask Inquisitor AI
          </Link>
          <button
            type="button"
            aria-label="Notifications"
            className="hidden size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container sm:flex"
          >
            <Icon name="notifications" className="text-[22px]" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container sm:flex"
          >
            <Icon name="account_circle" className="text-[24px]" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-outline-variant/60 bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-on-surface-variant hover:bg-surface-container"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-primary/10 text-primary" }}
              >
                <Icon name={item.icon} className="text-[20px]" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}