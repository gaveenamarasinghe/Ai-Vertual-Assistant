import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const action = String(data.action || "").trim().toLowerCase();

  if (action === "start") {
    return NextResponse.json({ status: "listening", message: "Voice session started." });
  }

  if (action === "stop") {
    return NextResponse.json({ status: "idle", message: "Voice session stopped." });
  }

  return NextResponse.json({ status: "idle", message: "Ready to listen." });
}
