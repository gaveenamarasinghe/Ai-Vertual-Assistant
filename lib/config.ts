export const appSecret = process.env.APP_SECRET ?? "development-secret";
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api";
export const appName = process.env.APP_NAME ?? "AI Assistant Platform";
export const supportEmail = process.env.SUPPORT_EMAIL ?? "support@ai-assistant.local";
export const isDevelopment = process.env.NODE_ENV !== "production";
