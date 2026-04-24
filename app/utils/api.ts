const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface FetchOptions extends RequestInit {
  token?: string;
}

export async function fetchAPI(endpoint: string, options: FetchOptions = {}) {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

// Auth functions
export const auth = {
  register: async (name: string, email: string, password: string) => {
    const data = await fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },

  login: async (email: string, password: string) => {
    const data = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },

  logout: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await fetchAPI('/auth/logout', { token });
    }
    localStorage.removeItem('token');
  },

  getMe: async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/auth/me', { token });
  },

  getToken: () => localStorage.getItem('token'),
};

// Chat functions
export const chat = {
  sendMessage: async (message: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/chat/message', {
      method: 'POST',
      token,
      body: JSON.stringify({ message }),
    });
  },

  getHistory: async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/chat/history', { token });
  },

  clearChat: async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/chat/clear', { method: 'DELETE', token });
  },
};

// Reminder functions
export const reminders = {
  getAll: async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/user/reminders', { token });
  },

  create: async (title: string, description: string, date: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI('/user/reminders', {
      method: 'POST',
      token,
      body: JSON.stringify({ title, description, date }),
    });
  },

  update: async (id: string, data: { title?: string; description?: string; date?: string; completed?: boolean }) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI(`/user/reminders/${id}`, {
      method: 'PUT',
      token,
      body: JSON.stringify(data),
    });
  },

  delete: async (id: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    return fetchAPI(`/user/reminders/${id}`, { method: 'DELETE', token });
  },
};