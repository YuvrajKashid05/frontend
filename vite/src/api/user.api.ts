import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { User } from "@/types/api";

export const getProfile = () => api.get<User>(endpoints.users.profile);
export const updateProfile = (input: { name: string }) => api.patch<User>(endpoints.users.profile, input);
export const updateAvatar = (input: { avatar: string }) => api.patch<User>(endpoints.users.avatar, input);
export const deleteAccount = () => api.delete(endpoints.users.account);
