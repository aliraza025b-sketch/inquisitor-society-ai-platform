export type NavItem = { to: string; label: string; icon: string };

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/ai", label: "Inquisitor AI", icon: "smart_toy" },
  { to: "/opportunities", label: "Opportunities", icon: "work" },
  { to: "/events", label: "Events", icon: "calendar_month" },
  { to: "/resources", label: "Resources", icon: "menu_book" },
  { to: "/about", label: "About", icon: "info" },
];

export const SUGGESTED_QUERIES: { icon: string; text: string }[] = [
  { icon: "work", text: "How can I find internship opportunities?" },
  { icon: "event", text: "What events are coming up?" },
  { icon: "group_add", text: "How can I join the society?" },
  { icon: "school", text: "What workshops are available?" },
  { icon: "menu_book", text: "What resources can I access?" },
  { icon: "info", text: "Tell me about the Inquisitors Society." },
];

export const CHAT_CATEGORIES: {
  icon: string;
  label: string;
  prompt: string;
}[] = [
  { icon: "work", label: "Opportunities", prompt: "Find internship opportunities" },
  { icon: "event", label: "Events", prompt: "Show upcoming events" },
  {
    icon: "account_balance",
    label: "Society",
    prompt: "Tell me about Inquisitors Society",
  },
  {
    icon: "card_membership",
    label: "Membership",
    prompt: "How can I become a member?",
  },
  {
    icon: "library_books",
    label: "Resources",
    prompt: "Show me learning resources",
  },
  {
    icon: "model_training",
    label: "Workshops",
    prompt: "What workshops are available?",
  },
];

export const OUT_OF_SCOPE_ANSWER =
  "I don't currently have verified information about this in the Inquisitors Society knowledge base. Try asking about opportunities, events, resources, membership, or society activities.";

export type OpportunityCard = {
  tag: string;
  title: string;
  organization: string;
  location: string;
  term: string;
  eligibility: string;
  deadline: string;
};

export type EventCard = {
  tag: string;
  title: string;
  date: string;
  time: string;
  location: string;
};

export type ResourceCard = {
  icon: string;
  title: string;
  subtitle: string;
};