export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 dark:bg-zinc-950">
      <main className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-white p-12 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Settings</h1>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">Configure your profile, voice interface, language, and display preferences.</p>
          </div>
          <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
            Save changes
          </button>
        </div>

        <div className="mt-10 space-y-8">
          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Profile</h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Manage user identity and account details for your assistant profile.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" placeholder="Full name" />
              <input className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" placeholder="Email address" />
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Voice preferences</h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Choose the tone and language of your voice assistant for consistent interactions.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Voice style</span>
                <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Casual</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Language</span>
                <select className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Theme</h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Select the interface theme that best fits your workflow.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">Light</button>
              <button className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">Dark</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
