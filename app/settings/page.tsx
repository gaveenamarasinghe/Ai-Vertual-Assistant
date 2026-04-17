"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "@/lib/api";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [voiceStyle, setVoiceStyle] = useState("Professional");
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await apiGet<{ voiceStyle: string; language: string; darkMode: boolean }>("/api/settings");
        setVoiceStyle(data.voiceStyle);
        setLanguage(data.language);
        setDarkMode(data.darkMode);
      } catch (exception) {
        setError(exception instanceof Error ? exception.message : "Unable to load settings.");
      }
    }

    loadSettings();
  }, []);

  async function saveChanges() {
    setError("");
    setStatus("Saving settings...");

    try {
      await apiPost("/api/settings", {
        voiceStyle,
        language,
        darkMode,
      });
      setStatus("Settings saved successfully.");
    } catch (exception) {
      setStatus("");
      setError(exception instanceof Error ? exception.message : "Unable to save settings.");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-10 dark:bg-zinc-950">
      <main className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/20">

        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-zinc-200 pb-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Settings
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Manage your account preferences and personalize your experience.
            </p>
          </div>

          <button onClick={saveChanges} className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            Save Changes
          </button>
        </div>

        {/* Sections */}
        {error ? (
          <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
            {error}
          </div>
        ) : null}

        <div className="mt-8 space-y-10">

          {/* Profile Section */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Profile Information
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Update your personal details and contact information.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                type="text"
                placeholder="Full name"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-zinc-200 dark:border-zinc-800"></div>

          {/* Voice Section */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Voice Preferences
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Customize how your assistant communicates with you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <select
                value={voiceStyle}
                onChange={(event) => setVoiceStyle(event.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              >
                <option>Professional</option>
                <option>Friendly</option>
                <option>Casual</option>
              </select>

              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              >
                <option>English</option>
                <option>Sinhala</option>
                <option>Tamil</option>
              </select>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-zinc-200 dark:border-zinc-800"></div>

          {/* Theme Section */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Appearance
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Choose how the interface looks for you.
              </p>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 dark:border-zinc-700 dark:bg-zinc-900">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Dark Mode
              </span>

              {/* Toggle Switch */}
              <button
                type="button"
                onClick={() => setDarkMode((current) => !current)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${darkMode ? "bg-indigo-600" : "bg-zinc-300 dark:bg-zinc-700"}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </section>

          {status ? (
            <div className="rounded-2xl bg-green-50 p-4 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
              {status}
            </div>
          ) : null}

        </div>
      </main>
    </div>
  );
}