export const appSecret = process.env.APP_SECRET?.trim() || "development-secret";
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "/api";
export const appName = process.env.APP_NAME?.trim() || "AI Assistant Platform";
export const supportEmail = process.env.SUPPORT_EMAIL?.trim() || "support@ai-assistant.local";
export const isDevelopment = process.env.NODE_ENV !== "production";
