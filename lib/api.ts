export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    method: "GET",
    cache: "no-store",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || "Request failed");
  }
  return data as T;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(path, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || "Request failed");
  }
  return data as T;
}
