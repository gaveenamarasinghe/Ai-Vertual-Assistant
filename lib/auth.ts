import crypto from "crypto";
import { appSecret } from "@/lib/config";

export function hashPassword(password: string): string {
  return crypto.createHmac("sha256", appSecret).update(password).digest("hex");
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return hashPassword(password) === hashedPassword;
}
