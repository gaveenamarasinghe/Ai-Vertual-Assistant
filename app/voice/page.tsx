export default function VoicePage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <main className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-white p-12 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Voice Assistant</h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">Operate the assistant through live speech, with feedback delivered in text and voice for a natural, hands-free workflow.</p>
          </div>
          <div className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">Ready to speak</div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Voice experience overview</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">Use voice commands for reminders, search, scheduling, and application actions without interrupting your flow.</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-semibold text-zinc-950 dark:text-white">Core capabilities</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Speech-to-text, text-to-speech feedback, intent recognition, and spoken command handling.</p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-semibold text-zinc-950 dark:text-white">Use cases</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>• Set reminders and schedule items quickly</li>
                  <li>• Ask for weather, appointments, and context</li>
                  <li>• Launch workflows or open applications by voice</li>
                </ul>
              </div>
            </div>
          </section>

          <aside className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/20">
            <div className="flex h-28 items-center justify-center rounded-3xl bg-zinc-950 text-5xl text-white dark:bg-white dark:text-zinc-950">🎤</div>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300">Activate the assistant and command it in natural language.</p>
            <button className="mt-8 w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              Start voice session
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
