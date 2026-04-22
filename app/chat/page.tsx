export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white px-6 py-8 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_1fr]">

        {/* SIDEBAR */}
        <aside className="flex flex-col rounded-3xl bg-white p-6 shadow-xl dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Conversations
            </h2>
            <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Live
            </span>
          </div>

          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Continue your recent chats
          </p>

          <div className="mt-6 space-y-3 overflow-y-auto">
            {[
              { label: "Weekly planning", date: "Apr 17" },
              { label: "Reminders setup", date: "Apr 14" },
              { label: "Voice training", date: "Apr 12" },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full rounded-xl bg-zinc-50 p-4 text-left transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  {item.label}
                </p>
                <p className="text-xs text-zinc-500">{item.date}</p>
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN CHAT */}
        <main className="flex h-[85vh] flex-col overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-zinc-900">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-zinc-200 p-6 dark:border-zinc-800">
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                AI Chat Assistant
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Voice-enabled smart conversations
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500">
              🎤 Voice
            </button>
          </div>

          {/* IMAGE HERO */}
          <div className="relative h-36 w-full">
            <img
              src="https://images.unsplash.com/photo-1676299081847-824916de030a"
              alt="AI Interface"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-lg font-semibold">AI Powered Chat</h2>
              <p className="text-xs opacity-80">Fast • Smart • Context-aware</p>
            </div>
          </div>

          {/* CHAT BODY */}
          <section className="flex-1 space-y-4 overflow-y-auto p-6">

            {/* ASSISTANT */}
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">AI</div>
              <div className="max-w-lg rounded-2xl bg-zinc-100 p-4 text-sm shadow-sm dark:bg-zinc-800">
                Hello! I'm your AI assistant. How can I help you today?
              </div>
            </div>

            {/* USER */}
            <div className="flex justify-end gap-3">
              <div className="max-w-lg rounded-2xl bg-indigo-600 p-4 text-sm text-white shadow-md">
                What is my schedule for tomorrow?
              </div>
            </div>

          </section>

          {/* INPUT */}
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <input
                className="flex-1 rounded-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                placeholder="Type your message..."
              />

              <button className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500">
                Send
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
