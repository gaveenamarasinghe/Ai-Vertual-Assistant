export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Dashboard</h1>
              <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">Monitor usage metrics, review recent actions, and surface insights from assistant interactions.</p>
            </div>
            <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">Refresh data</button>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Total queries</h2>
            <p className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">1,240</p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">AI prompts processed this month.</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Productivity impact</h2>
            <p className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">38h</p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Estimated time saved across all sessions.</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/30 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Recent activity</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Reminder created for product launch</li>
              <li>• Voice command executed: open calendar</li>
              <li>• Chat session started with weekly plan</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
