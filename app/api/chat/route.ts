import { NextResponse } from "next/server";
import { readStore, writeStore } from "@/lib/store";

export async function POST(request: Request) {
  const data = await request.json();
  const message = String(data.message || "").trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const responseText = `I heard you say: ${message}. Here is a suggested update for your task list.`;
  const store = readStore();
  store.history.unshift({
    id: `${Date.now()}`,
    title: `Chat: ${message.slice(0, 28)}`,
    meta: `${new Date().toLocaleDateString()} • 1 message`,
    createdAt: new Date().toISOString(),
  });
  store.history = store.history.slice(0, 50);
  writeStore(store);

  return NextResponse.json({ reply: responseText });
}
