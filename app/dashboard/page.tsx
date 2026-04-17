"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    queries: 1240,
    hours: 38,
    sessions: 24,
  });

  const refresh = () => {
    setStats({
      queries: 1200 + Math.floor(Math.random() * 200),
      hours: 30 + Math.floor(Math.random() * 20),
      sessions: 18 + Math.floor(Math.random() * 10),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white px-6 py-10 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-7xl space-y-10">

        {/* HEADER */}
        <section className="rounded-[2rem] bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:bg-zinc-900 dark:shadow-black/30">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Dashboard Overview
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
                Track your AI assistant performance, monitor activity, and gain insights to boost productivity.
              </p>
            </div>

            <button onClick={refresh} className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500">
              Refresh Data
            </button>
          </div>
        </section>

        {/* HERO IMAGE */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Dashboard Analytics"
            className="h-[260px] w-full object-cover"
          />
        </div>

        {/* STATS */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Total Queries</p>
            <h2 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-white">
              {stats.queries}
            </h2>
            <p className="mt-2 text-xs text-green-600">+12% this month</p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Time Saved</p>
            <h2 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-white">
              38h
            </h2>
            <p className="mt-2 text-xs text-green-600">Efficiency increased</p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl dark:bg-zinc-900">
            <p className="text-sm text-zinc-500">Active Sessions</p>
            <h2 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-white">
              24
            </h2>
            <p className="mt-2 text-xs text-blue-600">Currently running</p>
          </div>
        </section>

        {/* ACTIVITY + INSIGHTS */}
        <section className="grid gap-6 lg:grid-cols-2">

          {/* ACTIVITY */}
          <div className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Recent Activity
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <li className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                Reminder created for product launch
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                Voice command executed: open calendar
              </li>
              <li className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                Chat session started with weekly plan
              </li>
            </ul>
          </div>

          {/* INSIGHTS PANEL */}
          <div className="relative rounded-3xl bg-zinc-950 p-8 text-white shadow-2xl dark:bg-zinc-800">
            <h2 className="text-xl font-semibold">AI Insights</h2>
            <p className="mt-3 text-sm text-zinc-300">
              Your assistant identifies patterns and suggests ways to improve productivity.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              <li>• Peak usage at 10 AM daily</li>
              <li>• Most used feature: Voice Commands</li>
              <li>• Frequent task: Scheduling meetings</li>
              <li>• Suggestion: Automate recurring reminders</li>
            </ul>

            <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/10 p-4 text-xs text-zinc-300 backdrop-blur">
              Real-time analytics • Smart insights • AI optimization
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
