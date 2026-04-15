export default function ChatPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Conversation History</h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Quickly reopen previous sessions and maintain context across workstreams.</p>
            </div>
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">Live</span>
          </div>

          <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
            {[
              { label: "Weekly planning overview", detail: "17 Apr" },
              { label: "Reminder workflow setup", detail: "14 Apr" },
              { label: "Voice assistant training", detail: "12 Apr" },
            ].map((item) => (
              <div key={item.label} className="py-4">
                <button className="w-full text-left text-sm text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
                  <span className="font-medium">{item.label}</span>
                  <span className="block text-xs text-zinc-500 dark:text-zinc-500">{item.detail}</span>
                </button>
              </div>
            ))}
          </div>
        </aside>

        <main className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-zinc-950 dark:text-white">AI Chat</h1>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">A customer-grade chat experience with voice-enabled interaction and contextual memory.</p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              🎤 Start voice input
            </button>
          </div>

          <section className="mt-10 space-y-4">
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Assistant</div>
              <p className="mt-4 text-base leading-7 text-zinc-900 dark:text-zinc-100">
                Hello! I’m your assistant for planning, reminders, and fast answers. Type a question or use the voice button to get started.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">You</div>
              <p className="mt-4 text-base leading-7 text-zinc-900 dark:text-zinc-100">What is the status of my schedule for tomorrow?</p>
            </article>
          </section>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <label className="sr-only" htmlFor="chat-input">Type a message</label>
            <div className="flex gap-3">
              <input id="chat-input" className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" placeholder="Ask your assistant anything..." />
              <button className="rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
