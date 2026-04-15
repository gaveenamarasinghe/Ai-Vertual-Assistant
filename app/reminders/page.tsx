export default function RemindersPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl rounded-3xl border border-zinc-200 bg-white p-12 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Tasks & Reminders</h1>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">Stay on top of your priorities with smart reminders and AI-driven suggestions.</p>
          </div>
          <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
            Add reminder
          </button>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Upcoming items</h2>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Manage tasks and reminders across projects and daily routines.</p>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">5 due</span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { title: "Review Q2 strategy", time: "Today · 3:00 PM" },
                { title: "Weekly sync with operations", time: "Tomorrow · 11:00 AM" },
                { title: "Update client reminder", time: "Friday · 9:30 AM" },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-white p-5 shadow-sm shadow-zinc-200/30 dark:bg-zinc-900 dark:shadow-black/10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-zinc-950 dark:text-white">{item.title}</p>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">AI suggestions</h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">The assistant can draft reminders, suggest due dates, and identify follow-up actions.</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Schedule review meetings automatically</li>
              <li>• Add follow-ups after client calls</li>
              <li>• Remind you of monthly reports</li>
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}
