import fs from "fs";
import path from "path";
import { StoreData } from "@/lib/types";

const storePath = path.join(process.cwd(), "data", "store.json");

const defaultStore: StoreData = {
  users: [],
  reminders: [
    { id: "1", title: "Review Q2 Strategy", time: "Today • 3:00 PM", completed: false },
    { id: "2", title: "Team Meeting", time: "Tomorrow • 11:00 AM", completed: false },
    { id: "3", title: "Client Follow-up", time: "Friday • 9:30 AM", completed: false },
  ],
  history: [
    { id: "1", title: "Travel Planning Review", meta: "Apr 14 • 12 messages", createdAt: new Date().toISOString() },
    { id: "2", title: "Reminder Workflow Setup", meta: "Apr 13 • 8 messages", createdAt: new Date().toISOString() },
    { id: "3", title: "Voice Assistant Onboarding", meta: "Apr 12 • 6 messages", createdAt: new Date().toISOString() },
  ],
  settings: {
    voiceStyle: "Professional",
    language: "English",
    darkMode: false,
  },
};

function ensureDataDirectory() {
  const dir = path.dirname(storePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function readStore(): StoreData {
  ensureDataDirectory();

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify(defaultStore, null, 2), "utf8");
    return defaultStore;
  }

  try {
    const file = fs.readFileSync(storePath, "utf8");
    const parsed = JSON.parse(file) as StoreData;
    return {
      ...defaultStore,
      ...parsed,
      reminders: parsed.reminders ?? defaultStore.reminders,
      history: parsed.history ?? defaultStore.history,
      users: parsed.users ?? defaultStore.users,
      settings: parsed.settings ?? defaultStore.settings,
    };
  } catch {
    return defaultStore;
  }
}

export function writeStore(store: StoreData): StoreData {
  ensureDataDirectory();
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");
  return store;
}
