'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/utils/api';
import { useToast } from '@/app/components/Toast';

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await auth.login(email, password);
      showToast('Login Successful! ', 'success');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

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

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm dark:bg-zinc-900 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm dark:bg-zinc-900 dark:text-white"
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
            <button 
              type="submit" 
              disabled={loading}
              className="w-full rounded-full bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-700 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Continue'}
            </button>

            {/* Signup */}
            <p className="text-center text-sm text-zinc-500">
              Don’t have an account?{" "}
              <a href="/auth/register" className="font-medium text-zinc-900 dark:text-white">
                Sign up
              </a>
            </p>

          </form>
        </main>
      </div>
    </div>
  );
}