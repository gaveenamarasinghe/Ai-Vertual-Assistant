"use client";

import { useState } from "react";

export default function VoicePage() {
  const [isListening, setIsListening] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function toggleListening() {
    const action = isListening ? "stop" : "start";
    setIsListening(action === "start");
    setStatusMessage(action === "start" ? "Voice session started locally." : "Voice session stopped.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white px-6 py-10 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-6xl rounded-[2rem] bg-white p-10 shadow-2xl shadow-zinc-200/40 dark:bg-zinc-900 dark:shadow-black/30">

        {/* HEADER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Voice Assistant
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
              Control your workflow using natural speech. Get real-time responses with voice and text powered by intelligent AI.
            </p>
          </div>

          <div className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${isListening ? "bg-green-500/10 text-green-600" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>
            <span className={`h-2 w-2 rounded-full ${isListening ? "bg-green-500 animate-pulse" : "bg-zinc-400"}`} />
            {isListening ? "Listening Ready" : "Ready to listen"}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <section className="space-y-6">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://static-www.adweek.com/wp-content/uploads/2022/08/ai-voice-chatbots-realistic-2022.jpg?w=1200"
                alt="Voice AI"
                className="h-[260px] w-full object-cover"
              />
            </div>

            {/* INFO CARDS */}
            <div className="rounded-3xl bg-zinc-50 p-6 dark:bg-zinc-950">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Voice Capabilities
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Advanced speech recognition combined with AI understanding allows seamless communication and task execution.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                  <p className="font-semibold text-zinc-900 dark:text-white">Speech to Text</p>
                  <p className="text-xs text-zinc-500 mt-1">Convert voice into accurate commands instantly</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                  <p className="font-semibold text-zinc-900 dark:text-white">AI Understanding</p>
                  <p className="text-xs text-zinc-500 mt-1">Recognizes intent and context intelligently</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                  <p className="font-semibold text-zinc-900 dark:text-white">Voice Feedback</p>
                  <p className="text-xs text-zinc-500 mt-1">Responds naturally with audio output</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-zinc-900">
                  <p className="font-semibold text-zinc-900 dark:text-white">Automation</p>
                  <p className="text-xs text-zinc-500 mt-1">Execute tasks without manual input</p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE CONTROL PANEL */}
          <aside className="relative rounded-3xl bg-zinc-950 p-8 text-white shadow-2xl dark:bg-zinc-800">

            {/* MIC UI */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 text-5xl backdrop-blur">
                🎤
              </div>

              <h3 className="mt-6 text-lg font-semibold">Start Speaking</h3>
              <p className="mt-2 text-center text-sm text-zinc-300">
                Tap the button and interact with your assistant using natural language.
              </p>

              <button
                type="button"
                onClick={toggleListening}
                className="mt-8 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                {isListening ? "Stop Voice Session" : "Start Voice Session"}
              </button>

              {statusMessage ? (
                <p className="mt-4 text-center text-sm text-zinc-200 dark:text-zinc-300">
                  {statusMessage}
                </p>
              ) : null}
            </div>

            {/* FLOATING STATUS */}
            <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white/10 p-4 text-xs text-zinc-300 backdrop-blur">
              Real-time processing • Low latency • Secure voice handling
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
