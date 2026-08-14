# Inquisitors Society — Web App

Build the six screens from the supplied HTML mockups as a real multi-page app, with a working Inquisitor AI assistant.

## Screens (routes)

- `/` — Home: "Meet Inquisitor AI" hero, two CTAs, "Suggested Queries" grid (6 cards) that jump into the chat with that question pre-asked.
- `/ai` — Inquisitor AI chat: full conversation view, suggestion chips, composer.
- `/opportunities` — "Cultivate Your Intellectual Trajectory": 6 category cards (Internships, Training, Workshops, Mentorship, Career development, Industry exposure) plus a featured opportunity panel.
- `/events` — Society Events: filter tabs (All / Workshops / Networking) and search, one featured event, grid of event cards with category tags, date/location and RSVP buttons.
- `/resources` — Resources page per the mockup.
- `/about` — Mission, Vision, History & Achievements.

Shared top nav (Home, Inquisitor AI, Opportunities, Events, Resources, About, an "Ask Inquisitor AI" button, notification/account icons) and footer, responsive with a mobile drawer. Placeholder copy from the mockups ("Example Opportunity", "Date to be announced") stays as-is.

## Design system

Port the Material-style teal palette from the mockups into semantic tokens in `src/styles.css`: primary `#006565`, primary-container `#008080`, secondary-container `#fcd400`, surface `#fcf8f9`, on-surface `#1b1b1c`, outline/outline-variant, plus the container and fixed variants the HTML uses — in light and dark values. Fonts: Manrope for display/headings and Inter for body, loaded via a `<link>` in the root route. Material Symbols Outlined for icons.

## Inquisitor AI (real, working)

- Enable Lovable Cloud so the assistant runs server-side with a hosted key.
- A server function streams responses from the Lovable AI Gateway with a system prompt scoping the assistant to the Inquisitors Society: opportunities, events, resources, membership, workshops. Out-of-scope questions get the mockup's fallback line: "I don't currently have verified information about this in the Inquisitors Society knowledge base. Try asking about opportunities, events, resources, membership, or society activities."
- Chat UI built on AI Elements primitives (conversation, message, prompt input, loading shimmer), styled to match the mockup: teal user bubbles, plain assistant text, suggestion chips, and the "Answers are based on official Inquisitors Society information." footnote.
- Conversation lives in page state for now (no accounts, no saved history).
- Empty state matches the mockups: greeting card plus a grid of six category prompts (Opportunities, Events, Society, Membership, Resources, Workshops), each firing its example question.
- Rich answers, not just text: when the assistant returns opportunities or events, it renders them as cards inside the reply — internship cards (role, organization, location, term, eligibility, deadline, bookmark, "View Details") and event cards (category tag, date, time, location, "Register Now") — plus resource shortcut rows like "Academic Archives". Implemented with a small tool/structured-output contract so the model emits card data the UI renders.
- Follow-up suggestion chips appear under an answer ("Show eligibility requirements", "Show application details", "Find related opportunities").
- Responsive: desktop is the full-page chat with the site header; on mobile it becomes the dedicated chat screen from the mockups (back arrow, "Inquisitor AI / University Society Assistant" title bar, overflow menu, safe-area padded composer). A floating "Ask Inquisitor AI" button on other pages links into it.
- Composer supports text send with mic/attach buttons shown as inert affordances, timestamps on messages, and the trust footnote ("Inquisitor AI can make mistakes. Verify important information.").

## Technical notes

- TanStack Start file routes, one file per page; shared `SiteHeader` / `SiteFooter` / `PageShell` components.
- Chat endpoint: streaming server function calling the gateway with `openai/gpt-5.6-terra`; the key never reaches the browser.
- Per-route `head()` metadata (unique title, description, OG tags) on every page.
- The mockups contain no images, so nothing needs hotlinking; icons come from the Material Symbols font.

## Not included

Notifications, accounts/login, and real event or opportunity data — those controls appear but stay inert until you ask for them.