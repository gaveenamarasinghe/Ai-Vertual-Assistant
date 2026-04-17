import { NextResponse } from "next/server";
import { readStore } from "@/lib/store";

export async function POST(request: Request) {
  const data = await request.json();
  const email = String(data.email || "").trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const store = readStore();
  const userFound = store.users.some((user) => user.email.toLowerCase() === email);

  return NextResponse.json({
    message: userFound
      ? "If an account exists for this email, reset instructions have been sent."
      : "If an account exists for this email, reset instructions have been sent.",
  });
}
