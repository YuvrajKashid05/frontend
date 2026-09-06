import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { UserVideoProgress } from "@/types/api";

export const getUserProgress = () => api.get<UserVideoProgress[]>(endpoints.progress.me);
export const getVideoProgress = (videoId: string) => api.get<UserVideoProgress | null>(endpoints.progress.video(videoId));
export const updateVideoProgress = (videoId: string, watchedSeconds: number) =>
  api.patch<UserVideoProgress>(endpoints.progress.video(videoId), { watchedSeconds });
