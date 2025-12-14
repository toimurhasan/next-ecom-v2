export async function apiGet<T>(path: string) {
  const res = await fetch(path, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error("API error: " + res.status);
  return (await res.json()) as T;
}

export async function apiPost<T>(path: string, body: any) {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("API error: " + res.status);
  return (await res.json()) as T;
}
