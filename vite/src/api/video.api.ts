import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { LearningVideo, VideoStatus } from "@/types/api";

export type CreateVideoInput = {
  lessonId: string;
  youtubeVideoId: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  channelName?: string;
  channelId?: string;
  durationSeconds?: number;
};
export type UpdateVideoAnalysisInput = {
  relevanceScore: number;
  qualityScore: number;
  difficultyScore: number;
  aiSummary?: string;
  status: VideoStatus;
};
export const createVideo = (input: CreateVideoInput) => api.post<LearningVideo>(endpoints.videos.base, input);
export const getVideoById = (id: string) => api.get<LearningVideo>(endpoints.videos.byId(id));
export const getVideosByLessonId = (lessonId: string) => api.get<LearningVideo[]>(endpoints.videos.byLesson(lessonId));
export const getApprovedVideosByLessonId = (lessonId: string) => api.get<LearningVideo[]>(endpoints.videos.approvedByLesson(lessonId));
export const updateVideoAnalysis = (id: string, input: UpdateVideoAnalysisInput) => api.patch<LearningVideo>(endpoints.videos.analysis(id), input);
export const updateVideoStatus = (id: string, status: VideoStatus) => api.patch<LearningVideo>(endpoints.videos.status(id), { status });
