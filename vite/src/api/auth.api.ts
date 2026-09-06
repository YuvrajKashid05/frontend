import { api, clearAccessToken, setAccessToken } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { User } from "@/types/api";

export type LoginInput = { email: string; password: string };
export type RegisterInput = { name: string; email: string; password: string };

type AuthPayload = { user: User; accessToken: string };

export async function login(input: LoginInput) {
  const data = await api.post<AuthPayload>(endpoints.auth.login, input);
  setAccessToken(data.accessToken);
  return data.user;
}

export async function register(input: RegisterInput) {
  const data = await api.post<AuthPayload>(endpoints.auth.register, input);
  setAccessToken(data.accessToken);
  return data.user;
}

export async function refresh() {
  const data = await api.post<{ accessToken: string }>(endpoints.auth.refresh, undefined, { skipAuthRefresh: true });
  setAccessToken(data.accessToken);
  return data.accessToken;
}

export async function logout() {
  try {
    await api.post(endpoints.auth.logout);
  } finally {
    clearAccessToken();
  }
}
