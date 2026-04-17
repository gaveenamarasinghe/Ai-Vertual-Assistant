import { NextResponse } from "next/server";
import { readStore, writeStore } from "@/lib/store";

export async function GET() {
  const store = readStore();
  return NextResponse.json(store.settings);
}

export async function POST(request: Request) {
  const data = await request.json();
  const voiceStyle = String(data.voiceStyle || "Professional").trim();
  const language = String(data.language || "English").trim();
  const darkMode = Boolean(data.darkMode);

  const store = readStore();
  store.settings = {
    voiceStyle,
    language,
    darkMode,
  };

  writeStore(store);
  return NextResponse.json(store.settings);
}
