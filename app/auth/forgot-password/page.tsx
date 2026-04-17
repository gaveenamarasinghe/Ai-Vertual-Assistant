"use client";

import { FormEvent, useState } from "react";
import { apiPost } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("Sending reset instructions...");

    try {
      const data = await apiPost<{ message: string }>("/api/auth/forgot-password", { email });
      setStatus(data.message);
    } catch (exception) {
      setStatus("");
      setError(exception instanceof Error ? exception.message : "Unable to send reset link.");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl shadow-zinc-200 dark:bg-zinc-900 dark:shadow-black/20">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">Reset your password</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Provide your account email and we’ll send instructions to restore access.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                type="email"
                placeholder="you@company.com"
              />
            </div>

            <button type="submit" className="w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              Send reset link
            </button>

            {error ? (
              <p className="text-center text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}

            {status ? (
              <p className="text-center text-sm text-green-600 dark:text-green-400">{status}</p>
            ) : null}

            <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Remembered your password? <a href="/auth/login" className="font-medium text-zinc-950 dark:text-white">Sign in</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
