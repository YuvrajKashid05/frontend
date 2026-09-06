import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { LearningPath } from "@/types/api";

export type CreateLearningPathInput = { title: string; description: string; topicId: string };
export const createLearningPath = (input: CreateLearningPathInput) => api.post<LearningPath>(endpoints.learningPaths.base, input);
export const getLearningPathById = (id: string) => api.get<LearningPath>(endpoints.learningPaths.byId(id));
export const getLearningPathsByTopicId = (topicId: string) => api.get<LearningPath[]>(endpoints.learningPaths.byTopic(topicId));
export const getPublishedPathsByTopicId = (topicId: string) => api.get<LearningPath[]>(endpoints.learningPaths.publishedByTopic(topicId));
export const getPublishedPathsWithLessons = (topicId: string) => api.get<LearningPath[]>(endpoints.learningPaths.contentByTopic(topicId));
export const getPublishedLearningPathDetails = (id: string) => api.get<LearningPath>(endpoints.learningPaths.details(id));
export const getLearningPathPlayer = (id: string) => api.get<LearningPath>(endpoints.learningPaths.player(id));
export const publishLearningPath = (id: string) => api.patch<LearningPath>(endpoints.learningPaths.publish(id));
