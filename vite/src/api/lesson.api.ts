import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { LearningPathLesson } from "@/types/api";

export type CreateLessonInput = { learningPathId: string; title: string; description: string; order: number };
export const createLesson = (input: CreateLessonInput) => api.post<LearningPathLesson>(endpoints.lessons.base, input);
export const getLessonById = (id: string) => api.get<LearningPathLesson>(endpoints.lessons.byId(id));
export const getLessonsByLearningPathId = (pathId: string) => api.get<LearningPathLesson[]>(endpoints.lessons.byPath(pathId));
