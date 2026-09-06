import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { Topic, TopicPage, TopicDifficulty } from "@/types/api";

export type CreateTopicInput = {
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  category: string;
  difficulty?: TopicDifficulty;
};

export const getPublishedTopics = (page = 1, limit = 4, signal?: AbortSignal) =>
  api.get<TopicPage>(`${endpoints.topics.base}?page=${page}&limit=${limit}`, { signal });
export const searchTopics = (q: string, signal?: AbortSignal) =>
  api.get<Topic[]>(`${endpoints.topics.search}?q=${encodeURIComponent(q)}`, { signal });
export const getTopicById = (id: string) => api.get<Topic>(endpoints.topics.byId(id));
export const createTopic = (input: CreateTopicInput) => api.post<Topic>(endpoints.topics.base, input);
export const publishTopic = (id: string) => api.patch<Topic>(endpoints.topics.publish(id));
