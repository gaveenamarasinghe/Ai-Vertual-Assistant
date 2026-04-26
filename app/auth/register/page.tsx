'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/utils/api';
import { useToast } from '@/components/Toast';

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!agreeTerms) {
      setError('Please agree to the Terms and Privacy Policy');
      showToast('Please agree to the Terms and Privacy Policy', 'error');
      return;
    }

    setLoading(true);

    try {
      await auth.register(name, email, password);
      showToast('Account Created Successfully! Redirecting to login...', 'success');
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      setError(message);
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-zinc-950">

      {/* Left - Branding */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-zinc-900">
        <img
          src="https://www.lawgicalindia.com/storage/posts/April2025/90i0HUcqsgtcT1Lvn1OR.jpg"
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

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm dark:bg-zinc-900 dark:text-white"
              />
            </div>

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
                minLength={6}
                className="mt-2 w-full rounded-xl border px-4 py-3 text-sm dark:bg-zinc-900 dark:text-white"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-zinc-500">
              <input 
                type="checkbox" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <p>
                I agree to Terms and Privacy Policy
              </p>
            </div>

            {/* Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-700 disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            {/* Login */}
            <p className="text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <a href="/auth/login" className="font-medium text-zinc-900 dark:text-white">
                Sign in
              </a>
            </p>

          </form>
        </main>
      </div>
    </div>
  );
}