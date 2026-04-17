export interface User {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

export interface HistoryEntry {
  id: string;
  title: string;
  meta: string;
  createdAt: string;
}

export interface Settings {
  voiceStyle: string;
  language: string;
  darkMode: boolean;
}

export interface StoreData {
  users: User[];
  reminders: Reminder[];
  history: HistoryEntry[];
  settings: Settings;
}
