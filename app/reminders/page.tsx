"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiGet, apiPost } from "@/lib/api";

interface Reminder {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

export default function RemindersPage() {
  const [tasks, setTasks] = useState<Reminder[]>([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadReminders() {
      try {
        const data = await apiGet<Reminder[]>("/api/reminders");
        setTasks(data);
      } catch (exception) {
        setError(exception instanceof Error ? exception.message : "Unable to load reminders.");
      }
    }

    loadReminders();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title || !time) return;
    setError("");

    try {
      const reminder = await apiPost<Reminder>("/api/reminders", { title, time });
      setTasks((current) => [reminder, ...current]);
      setTitle("");
      setTime("");
      setShowForm(false);
    } catch (exception) {
      setError(exception instanceof Error ? exception.message : "Unable to add reminder.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white px-6 py-10 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-7xl rounded-[2rem] bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:bg-zinc-900 dark:shadow-black/30">

        {/* HEADER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Tasks & Reminders
            </h1>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
              Organize your day with AI-powered reminders, smart scheduling, and productivity insights.
            </p>
          </div>

          <button onClick={() => setShowForm(true)} className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500">
            + Add Reminder
          </button>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-abYKIweQ1e45dFqwVLZhhWxiv_jobdDadA&s"
            alt="Task Management"
            className="h-[260px] w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">

          {/* LEFT - TASK LIST */}
          <section className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-950">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  Upcoming Tasks
                </h2>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  Stay on track with your daily and scheduled activities.
                </p>
              </div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                {tasks.length} Active
              </span>
            </div>

            {error ? (
              <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
                {error}
              </div>
            ) : null}

            <div className="mt-6 space-y-4">
              {tasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-zinc-900"
                >
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {task.title}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{task.time}</p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            {showForm ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Task</label>
                  <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    placeholder="New task title"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Time</label>
                  <input
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    type="text"
                    placeholder="Tomorrow • 9:00 AM"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
                    Save Reminder
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="rounded-full border border-zinc-300 px-5 py-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button onClick={() => setShowForm(true)} className="w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                Add a new reminder
              </button>
            )}
          </section>

          {/* RIGHT - AI PANEL */}
          <aside className="relative rounded-3xl bg-zinc-950 p-8 text-white shadow-2xl dark:bg-zinc-800">
            <h2 className="text-xl font-semibold">AI Suggestions</h2>
            <p className="mt-3 text-sm text-zinc-300">
              Let AI help you plan smarter by suggesting tasks, reminders, and follow-ups automatically.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              <li>• Auto-schedule meetings based on availability</li>
              <li>• Generate follow-ups after conversations</li>
              <li>• Monthly and weekly task recommendations</li>
              <li>• Smart deadline predictions</li>
            </ul>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/10 p-4 text-xs text-zinc-300 backdrop-blur">
              AI-driven productivity • Smart reminders • Real-time updates
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
