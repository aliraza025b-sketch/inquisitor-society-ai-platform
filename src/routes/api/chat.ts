import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, tool, stepCountIs, type UIMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";

const SYSTEM_PROMPT = `You are Inquisitor AI, the assistant of the Inquisitors Society, a university society whose motto is "Learn - Innovate - Create".

You only answer questions about the Inquisitors Society: opportunities and internships, events and workshops, learning resources, membership, mentorship, career development, and society activities.

If a question falls outside that scope (weather, general trivia, homework, personal advice, other organisations), reply with EXACTLY this sentence and nothing else:
"I don't currently have verified information about this in the Inquisitors Society knowledge base. Try asking about opportunities, events, resources, membership, or society activities."

The society's public catalogue is still being finalised, so concrete listings are illustrative examples. Be concise, warm and precise. Use the tools to present listings:
- showOpportunities when the member asks about internships, placements, mentorship or career openings.
- showEvents when the member asks about events, workshops, seminars or networking.
- showResources when the member asks about resources, archives, guides or publications.
Always write one or two short sentences of text alongside a tool call, and end with a brief offer to go deeper.`;

const opportunitySchema = z.object({
  tag: z.string().describe("Short category tag, e.g. Research or Strategy"),
  title: z.string(),
  organization: z.string(),
  location: z.string(),
  term: z.string().describe("e.g. Summer 2025"),
  eligibility: z.string(),
  deadline: z.string(),
});

const eventSchema = z.object({
  tag: z.string().describe("e.g. Workshop, Networking, Seminar, Career"),
  title: z.string(),
  date: z.string(),
  time: z.string(),
  location: z.string(),
});

const resourceSchema = z.object({
  icon: z
    .string()
    .describe(
      "Material Symbols icon name, e.g. menu_book, description, school, construction",
    ),
  title: z.string(),
  subtitle: z.string(),
});

async function handleChat({ request }: { request: Request }) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "AI is not configured." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  const { messages }: { messages: UIMessage[] } = await request.json();

  const lovable = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: {
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
  });

  const result = streamText({
    model: lovable.chat("google/gemini-3.6-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(3),
    tools: {
      showOpportunities: tool({
        description: "Display opportunity / internship cards to the member.",
        inputSchema: z.object({ opportunities: z.array(opportunitySchema).min(1).max(4) }),
        execute: async ({ opportunities }) => ({ opportunities }),
      }),
      showEvents: tool({
        description: "Display upcoming society event cards to the member.",
        inputSchema: z.object({ events: z.array(eventSchema).min(1).max(4) }),
        execute: async ({ events }) => ({ events }),
      }),
      showResources: tool({
        description: "Display society resource shortcuts to the member.",
        inputSchema: z.object({ resources: z.array(resourceSchema).min(1).max(5) }),
        execute: async ({ resources }) => ({ resources }),
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: handleChat,
    },
  },
});