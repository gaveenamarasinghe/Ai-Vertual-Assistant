import { NextResponse } from "next/server";
import { readStore, writeStore } from "@/lib/store";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const data = await request.json();
  const fullName = String(data.fullName || "").trim();
  const email = String(data.email || "").trim().toLowerCase();
  const password = String(data.password || "").trim();

  if (!fullName || !email || !password) {
    return NextResponse.json({ error: "Full name, email, and password are required." }, { status: 400 });
  }

  const store = readStore();
  const existingUser = store.users.find((user) => user.email.toLowerCase() === email);
  if (existingUser) {
    return NextResponse.json({ error: "Email is already registered." }, { status: 409 });
  }

  const newUser = {
    id: `${Date.now()}`,
    fullName,
    email,
    passwordHash: hashPassword(password),
  };

  store.users.push(newUser);
  writeStore(store);

  return NextResponse.json({
    user: {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
    },
  });
}
