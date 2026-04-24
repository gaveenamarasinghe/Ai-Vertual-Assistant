'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useRef,
} from 'react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

let toastId = 0;

/* ✅ AI-style formatter */
const formatMessage = (message: string, type: ToastType) => {
  switch (type) {
    case 'success':
      return `✔ ${message}`;
    case 'error':
      return `We couldn’t complete your request. ${message}`;
    case 'info':
      return `${message}`;
    default:
      return message;
  }
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Map<number, NodeJS.Timeout>>(new Map());

  const showToast = useCallback(
    (message: string, type: ToastType = 'success') => {
      const id = ++toastId;

      const formattedMessage = formatMessage(message, type);

      setToasts((prev) => [...prev, { id, message: formattedMessage, type }]);

      const timeout = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        timers.current.delete(id);
      }, 3500);

      timers.current.set(id, timeout);
    },
    []
  );

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));

    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-20 right-5 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-2xl border shadow-xl px-5 py-4 flex items-center gap-4 min-w-[280px] backdrop-blur-md transition-all duration-300 animate-fade-in ${
              toast.type === 'success'
                ? 'bg-white/90 dark:bg-zinc-900/90 border-zinc-200 dark:border-zinc-700'
                : toast.type === 'error'
                ? 'bg-red-50/90 dark:bg-red-900/30 border-red-200 dark:border-red-800'
                : 'bg-blue-50/90 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
            }`}
          >
            {/* Icon */}
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                toast.type === 'success'
                  ? 'bg-green-100 text-green-600'
                  : toast.type === 'error'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-blue-100 text-blue-600'
              }`}
            >
              {toast.type === 'success' && (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}

              {toast.type === 'error' && (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}

              {toast.type === 'info' && (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>

            {/* Message */}
            <p className="text-sm font-medium text-zinc-900 dark:text-white leading-relaxed">
              {toast.message}
            </p>

            {/* Close */}
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-auto text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      'useToast must be used within a ToastProvider (wrap your app in layout.tsx)'
    );
  }

  return context;
}