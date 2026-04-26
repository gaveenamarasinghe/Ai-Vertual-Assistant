'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '@/utils/api';

interface User {
  name: string;
  email: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chat", href: "/chat" },
  { label: "Voice", href: "/voice" },
  { label: "Reminders", href: "/reminders" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "History", href: "/history" },
  { label: "Settings", href: "/settings" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname(); // 👈 track route changes

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // 🔥 Re-check auth on route change (important fix)
  useEffect(() => {
    checkAuth();
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-menu')) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const checkAuth = async () => {
    try {
      const token = auth.getToken();
      if (token) {
        const userData = await auth.getMe();
        setUser(userData.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.logout();
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="sticky top-0 z-60 border-b border-zinc-200 bg-white/95 backdrop-blur-xl dark:border-zinc-1000 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-zinc-950 transition hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
            AI
          </div>
          <div>
            <p className="text-base font-semibold leading-none">AI Assistant</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Productivity platform</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          {loading ? (
            <div className="h-10 w-20 animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-full" />
          ) : user ? (
            <div className="relative profile-menu">

              {/* Profile Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowProfileMenu(!showProfileMenu);
                }}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white font-medium text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <svg
                  className={`h-4 w-4 text-zinc-500 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

                  <div className="border-b border-zinc-200 p-5 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white font-semibold text-xl">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-lg font-medium text-zinc-900 dark:text-white">{user.name}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                    >
                      Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/auth/login"
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
              >
                Login
              </Link>

              {/* Signup */}
              <Link
                href="/auth/register"
                className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}