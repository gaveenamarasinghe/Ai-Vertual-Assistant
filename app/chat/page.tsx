"use client";

import { KeyboardEvent, useState } from "react";
import { apiPost } from "@/lib/api";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { speaker: "assistant", text: "Hello! I'm your AI assistant. Ask me anything or use voice input." },
    { speaker: "user", text: "What is my schedule for tomorrow?" },
  ]);
  const [error, setError] = useState("");

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    setError("");
    setMessages((current) => [...current, { speaker: "user", text: trimmed }]);
    setInput("");

    try {
      const data = await apiPost<{ reply: string }>("/api/chat", { message: trimmed });
      setMessages((current) => [...current, { speaker: "assistant", text: data.reply }]);
    } catch (exception) {
      setError(exception instanceof Error ? exception.message : "Unable to fetch a response.");
      setMessages((current) => [
        ...current,
        { speaker: "assistant", text: "Sorry, I couldn't fetch a response right now." },
      ]);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white px-6 py-8 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_1fr]">

        {/* SIDEBAR */}
        <aside className="rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Conversations
            </h2>
            <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-600">
              Live
            </span>
          </div>

          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Access recent chats instantly
          </p>

          <div className="mt-6 space-y-3">
            {[
              { label: "Weekly planning", date: "Apr 17" },
              { label: "Reminders setup", date: "Apr 14" },
              { label: "Voice training", date: "Apr 12" },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full rounded-xl bg-zinc-50 p-4 text-left transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  {item.label}
                </p>
                <p className="text-xs text-zinc-500">{item.date}</p>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CHAT */}
        <main className="flex flex-col rounded-3xl bg-white shadow-xl dark:bg-zinc-900">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-zinc-200 p-6 dark:border-zinc-800">
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                AI Chat Assistant
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Smart conversations with voice & memory
              </p>
            </div>

            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              🎤 Voice
            </button>
          </div>

          {/* IMAGE BANNER */}
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src="https://www.almawave.com/wp-content/uploads/2024/10/BLOG-CONVERSATION-STUDIO-3.webp"
              alt="AI Chat"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-6 text-white">
              <p className="text-sm">AI Powered Conversations</p>
              <h2 className="text-lg font-semibold">Ask Anything Instantly</h2>
            </div>
          </div>

          {/* CHAT MESSAGES */}
          <section className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((message, index) => (
              <div key={index} className={message.speaker === "assistant" ? "flex" : "flex justify-end"}>
                <div className={`max-w-xl rounded-2xl p-4 text-sm ${message.speaker === "assistant" ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white" : "bg-indigo-600 text-white"}`}>
                  {message.text}
                </div>
              </div>
            ))}

            {error ? (
              <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
                {error}
              </div>
            ) : null}
          </section>

          {/* INPUT */}
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                placeholder="Type your message..."
              />
              <button
                type="button"
                onClick={handleSend}
                className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Send
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
