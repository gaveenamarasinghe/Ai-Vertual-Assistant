export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <main className="mx-auto max-w-6xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Conversation history</h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">Locate your previous chats, export conversation transcripts, or remove sessions you no longer need.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">Export history</button>
            <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">Clear selected</button>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {[
            { title: "Travel planning review", meta: "Apr 14 · 12 messages" },
            { title: "Reminder workflow setup", meta: "Apr 13 · 8 messages" },
            { title: "Voice assistant onboarding", meta: "Apr 12 · 6 messages" },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-zinc-50 p-6 dark:bg-zinc-950">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h2>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.meta}</p>
                </div>
                <button className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">View details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
