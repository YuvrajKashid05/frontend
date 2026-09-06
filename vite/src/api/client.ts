const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/+$/, "");

let accessToken: string | null = null;
let refreshPromise: Promise<string> | null = null;

export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(message: string, status: number, code?: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const setAccessToken = (token: string | null) => { accessToken = token; };
export const clearAccessToken = () => { accessToken = null; };
export const getAccessToken = () => accessToken;

function getMessage(status: number, fallback: string) {
  if (status === 401) return "Your session has expired. Please sign in again.";
  if (status === 403) return "You don't have permission to perform this action.";
  if (status === 404) return "The requested content could not be found.";
  if (status === 409) return "This action conflicts with existing data.";
  if (status === 422) return "Please check the submitted information.";
  if (status === 429) return "Too many requests. Please try again shortly.";
  if (status >= 500) return "Something went wrong on the server. Please try again later.";
  return fallback;
}

async function parseResponse(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return undefined;
  try { return JSON.parse(text); } catch { return text; }
}

async function refreshAccessToken() {
  if (refreshPromise) return refreshPromise;
  refreshPromise = fetch(`${API_BASE_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
    headers: { Accept: "application/json" },
  }).then(async (response) => {
    const body = await parseResponse(response) as { data?: { accessToken?: string }; message?: string } | undefined;
    if (!response.ok || !body?.data?.accessToken) {
      throw new ApiError(getMessage(response.status, body?.message || "Unable to refresh session."), response.status, undefined, body);
    }
    setAccessToken(body.data.accessToken);
    return body.data.accessToken;
  }).finally(() => { refreshPromise = null; });
  return refreshPromise;
}

type RequestOptions = RequestInit & { skipAuthRefresh?: boolean };

async function request<T>(path: string, options: RequestOptions = {}, retry = false): Promise<T> {
  const controller = options.signal ? undefined : new AbortController();
  const headers = new Headers(options.headers);
  headers.set("Accept", "application/json");
  if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
  const body = options.body;
  if (body && !(body instanceof FormData) && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    signal: options.signal || controller?.signal,
    headers,
    credentials: "include",
  });

  const payload = await parseResponse(response) as { success?: boolean; message?: string; errors?: unknown; data?: T } | string | undefined;

  if (response.status === 401 && accessToken && !retry && !options.skipAuthRefresh && !path.includes("/auth/refresh")) {
    try {
      await refreshAccessToken();
      return request<T>(path, options, true);
    } catch {
      clearAccessToken();
    }
  }

  if (!response.ok) {
    const message = typeof payload === "object" && payload?.message ? payload.message : getMessage(response.status, "Request failed.");
    const details = typeof payload === "object" ? payload?.errors : undefined;
    throw new ApiError(message, response.status, undefined, details);
  }

  if (typeof payload === "object" && payload !== null && "data" in payload) return payload.data as T;
  return payload as T;
}

function withBody(body: unknown): BodyInit | undefined {
  if (body === undefined) return undefined;
  if (body instanceof FormData || typeof body === "string") return body;
  return JSON.stringify(body);
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "POST", body: withBody(body) }),
  put: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "PUT", body: withBody(body) }),
  patch: <T>(path: string, body?: unknown, options?: RequestOptions) => request<T>(path, { ...options, method: "PATCH", body: withBody(body) }),
  delete: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: "DELETE" }),
};

export { API_BASE_URL };
