import { NextResponse } from "next/server";
import { readStore } from "@/lib/store";
import { verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const data = await request.json();
  const email = String(data.email || "").trim().toLowerCase();
  const password = String(data.password || "").trim();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const store = readStore();
  const user = store.users.find((item) => item.email.toLowerCase() === email);

  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}
