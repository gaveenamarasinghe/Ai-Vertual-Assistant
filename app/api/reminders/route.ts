import { NextResponse } from "next/server";
import { readStore, writeStore } from "@/lib/store";

export async function GET() {
  const store = readStore();
  return NextResponse.json(store.reminders);
}

export async function POST(request: Request) {
  const data = await request.json();
  const title = String(data.title || "").trim();
  const time = String(data.time || "").trim();

  if (!title || !time) {
    return NextResponse.json({ error: "Title and time are required." }, { status: 400 });
  }

  const store = readStore();
  const reminder = {
    id: `${Date.now()}`,
    title,
    time,
    completed: false,
  };

  store.reminders.unshift(reminder);
  writeStore(store);

  return NextResponse.json(reminder, { status: 201 });
}
