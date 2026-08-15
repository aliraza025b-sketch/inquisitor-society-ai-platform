import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { EventCards, OpportunityCards, ResourceCards } from "@/components/chat/ChatCards";
import { Icon } from "@/components/site/Icon";
import markAsset from "@/assets/inquisitors-mark.png.asset.json";
import { CHAT_CATEGORIES } from "@/lib/inquisitor";
import type { EventCard, OpportunityCard, ResourceCard } from "@/lib/inquisitor";

function ToolParts({ message }: { message: UIMessage }) {
  return (
    <>
      {message.parts.map((part, index) => {
        if (part.type === "tool-showOpportunities" && part.state === "output-available") {
          const out = part.output as { opportunities: OpportunityCard[] };
          return <OpportunityCards items={out.opportunities} key={index} />;
        }
        if (part.type === "tool-showEvents" && part.state === "output-available") {
          const out = part.output as { events: EventCard[] };
          return <EventCards items={out.events} key={index} />;
        }
        if (part.type === "tool-showResources" && part.state === "output-available") {
          const out = part.output as { resources: ResourceCard[] };
          return <ResourceCards items={out.resources} key={index} />;
        }
        return null;
      })}
    </>
  );
}

export function InquisitorChat({ initialPrompt }: { initialPrompt?: string }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const sentInitial = useRef(false);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const focusInput = () => textareaRef.current?.focus();

  useEffect(() => {
    focusInput();
  }, []);

  useEffect(() => {
    if (status === "ready") focusInput();
  }, [status]);

  useEffect(() => {
    if (initialPrompt && !sentInitial.current) {
      sentInitial.current = true;
      void sendMessage({ text: initialPrompt });
    }
  }, [initialPrompt, sendMessage]);

  const ask = (text: string) => {
    void sendMessage({ text });
    setInput("");
    focusInput();
  };

  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="flex h-[calc(100svh-4rem)] flex-col bg-surface">
      <div className="flex items-center gap-3 border-b border-outline-variant/60 bg-surface-container-low px-4 py-3 sm:px-6">
        <img
          src={markAsset.url}
          alt="Inquisitors Society logo"
          className="size-10 object-contain"
        />
        <div className="min-w-0">
          <p className="font-display text-sm font-bold text-on-surface">Inquisitor AI</p>
          <p className="truncate text-xs text-on-surface-variant">
            Your intelligent Inquisitors Society assistant
          </p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Online
        </span>
      </div>

      <Conversation className="flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl gap-5 px-4 py-6 sm:px-6">
          <Message from="assistant">
            <MessageContent className="bg-transparent p-0 text-on-surface">
              <p className="font-display text-lg font-bold">
                Hello! I&apos;m Inquisitor AI. How can I help you today?
              </p>
              <p className="mt-1 text-sm text-on-surface-variant">
                I can help you explore opportunities, events, resources, membership information,
                workshops, and activities of the Inquisitors Society.
              </p>
              {messages.length === 0 && (
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {CHAT_CATEGORIES.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => ask(c.prompt)}
                      className="rounded-2xl border border-outline-variant/70 bg-surface-container-lowest p-3 text-left transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon name={c.icon} className="text-[18px]" />
                      </span>
                      <p className="mt-2 text-sm font-semibold text-on-surface">{c.label}</p>
                      <p className="text-xs text-on-surface-variant">&ldquo;{c.prompt}&rdquo;</p>
                    </button>
                  ))}
                </div>
              )}
            </MessageContent>
          </Message>

          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent
                className={
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent p-0 text-on-surface"
                }
              >
                {message.parts.map((part, i) =>
                  part.type === "text" ? (
                    <MessageResponse key={i}>{part.text}</MessageResponse>
                  ) : null,
                )}
                {message.role === "assistant" && <ToolParts message={message} />}
              </MessageContent>
            </Message>
          ))}

          {status === "submitted" && (
            <Shimmer className="text-sm">Consulting the society archives...</Shimmer>
          )}

          {error && (
            <p className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive">
              Something went wrong reaching Inquisitor AI. Please try again.
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t border-outline-variant/60 bg-surface-container-low px-4 py-3 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <PromptInput
            onSubmit={(message, event) => {
              event.preventDefault();
              const text = (message.text ?? "").trim();
              if (!text || busy) return;
              ask(text);
            }}
          >
            <PromptInputTextarea
              ref={textareaRef}
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="Ask about opportunities, events, resources..."
              value={input}
            />
            <PromptInputFooter className="justify-end">
              <PromptInputSubmit disabled={!input.trim() || busy} status={status} />
            </PromptInputFooter>
          </PromptInput>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-on-surface-variant">
            <Icon name="verified" className="text-[14px]" />
            Answers are based on official Inquisitors Society information.
          </p>
        </div>
      </div>
    </div>
  );
}