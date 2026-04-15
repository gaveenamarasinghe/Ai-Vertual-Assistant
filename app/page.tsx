export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 dark:bg-zinc-950">
      <main className="mx-auto max-w-7xl rounded-[2rem] bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
              AI Assistant Platform
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white">
              Smart AI for Real Work, Voice Control & Automation
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Build, manage, and scale your productivity with an intelligent assistant that understands voice, automates tasks, and delivers insights — all in one seamless experience.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/chat"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
              >
                Start Chat
              </a>
              <a
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Create Account
              </a>
            </div>

            {/* FEATURES */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Voice AI",
                  desc: "Control tasks using natural voice conversations"
                },
                {
                  title: "Smart Automation",
                  desc: "Convert chats into tasks, reminders & workflows"
                },
                {
                  title: "Analytics",
                  desc: "Track productivity and performance insights"
                }
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-zinc-50 p-5 shadow-sm transition hover:shadow-md dark:bg-zinc-950">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* RIGHT IMAGE + CARD */}
          <section className="relative">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI Assistant Dashboard"
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-zinc-900 p-6 text-white shadow-xl">
              <h2 className="text-lg font-semibold">Included Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>• AI Chat + Voice Commands</li>
                <li>• Secure Authentication</li>
                <li>• Task & Reminder System</li>
                <li>• Dashboard & Analytics</li>
                <li>• User Settings & History</li>
              </ul>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
