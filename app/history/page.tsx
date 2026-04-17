"use client";

import { ChangeEvent, useMemo, useState } from "react";

interface HistoryItem {
  id: string;
  title: string;
  meta: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState("All Time");
  const [historyItems] = useState<HistoryItem[]>([
    { id: "1", title: "Weekly planning", meta: "Apr 17 • 1 message", createdAt: "2026-04-17" },
    { id: "2", title: "Reminders setup", meta: "Apr 14 • 3 messages", createdAt: "2026-04-14" },
    { id: "3", title: "Voice training", meta: "Apr 12 • 2 messages", createdAt: "2026-04-12" },
  ]);

  const filteredItems = useMemo(
    () =>
      historyItems.filter((item) => {
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) &&
          (range === "All Time" || item.meta.includes(range.replace("This ", "")))
        );
      }),
    [historyItems, query, range]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-50 px-6 py-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <main className="mx-auto max-w-7xl space-y-10">

        {/* HEADER */}
        <section className="rounded-[2rem] bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:bg-zinc-900 dark:shadow-black/30">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Conversation History
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
                Easily manage, revisit, and organize your AI conversations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                Export Data
              </button>
              <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-500">
                Clear Selected
              </button>
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="AI History"
            className="h-[240px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <h2 className="text-lg font-semibold">Your AI Activity</h2>
            <p className="text-xs opacity-80">Search • Manage • Revisit</p>
          </div>
        </div>

        {/* SEARCH + FILTER */}

        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-1/2">
            <input
              value={query}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-full border border-zinc-300 px-5 py-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">🔍</span>
          </div>

          <select
            value={range}
            onChange={(event) => setRange(event.target.value)}
            className="rounded-full border border-zinc-300 px-4 py-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </section>

        {/* HISTORY LIST */}
        <section className="space-y-4">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-xl dark:bg-zinc-900"
            >
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.meta}
                </p>
              </div>

              <div className="flex items-center gap-3 opacity-0 transition group-hover:opacity-100">
                <button className="rounded-full border border-zinc-300 px-4 py-2 text-xs text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                  View
                </button>
                <button className="rounded-full bg-indigo-600 px-4 py-2 text-xs text-white shadow-md transition hover:bg-indigo-500">
                  Open
                </button>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}
