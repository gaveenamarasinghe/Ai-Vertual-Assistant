"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) {
      setStatus("Please accept the terms before continuing.");
      return;
    }
    setStatus(`Account created for ${fullName}`);
  }

  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-950">

      {/* Left - Branding / Image */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-zinc-900">
        <img
          src="https://blogs.cisco.com/gcs/ciscoblogs/1/2024/07/AI_blog.png"
          alt="AI Platform"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="relative z-10 max-w-md px-6 text-white text-center">
          <h2 className="text-3xl font-semibold">
            Start Your Journey
          </h2>
          <p className="mt-4 text-sm text-zinc-300">
            Create your AI-powered workspace, manage tasks smarter, and experience next-level productivity.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <main className="w-full max-w-md">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Get started with your AI assistant platform.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                type="text"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Create a strong password"
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <input
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                type="checkbox"
                className="mt-1"
              />
              <p>
                I agree to the{" "}
                <a href="#" className="font-medium text-zinc-900 dark:text-white">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-zinc-900 dark:text-white">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Button */}
            <button type="submit" className="w-full rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
              Create Account
            </button>

            {status ? (
              <p className="text-center text-sm text-green-600 dark:text-green-400">{status}</p>
            ) : null}

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
              OR
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>

            {/* Social */}
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                Google
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                GitHub
              </button>
            </div>

            {/* Login */}
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="font-medium text-zinc-900 hover:underline dark:text-white"
              >
                Sign in
              </a>
            </p>

          </form>
        </main>
      </div>
    </div>
  );
}