"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("Signing in...");

    try {
      const data = await apiPost<{ user: { id: string; fullName: string; email: string } }>(
        "/api/auth/login",
        { email, password }
      );
      setStatus(`Welcome back, ${data.user.fullName}!`);
      router.push("/chat");
    } catch (exception) {
      setStatus("");
      setError(exception instanceof Error ? exception.message : "Unable to sign in.");
    }
  }

  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-950">

      {/* Left - Image / Branding */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-zinc-900">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI Background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-md text-center text-white px-6">
          <h2 className="text-3xl font-semibold">
            Welcome Back
          </h2>
          <p className="mt-4 text-sm text-zinc-300">
            Access your AI assistant, manage workflows, and explore powerful tools designed to boost your productivity.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <main className="w-full max-w-md">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Enter your credentials to access your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-white dark:focus:ring-zinc-700"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="/auth/forgot-password"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button type="submit" className="w-full rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
              Continue
            </button>

            {error ? (
              <p className="text-center text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}

            {status ? (
              <p className="text-center text-sm text-green-600 dark:text-green-400">{status}</p>
            ) : null}

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
              OR
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>

            {/* Social Login */}
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                Google
              </button>
              <button className="rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                GitHub
              </button>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Don’t have an account?{" "}
              <a
                href="/auth/register"
                className="font-medium text-zinc-900 hover:underline dark:text-white"
              >
                Sign up
              </a>
            </p>

          </form>
        </main>
      </div>
    </div>
  );
}