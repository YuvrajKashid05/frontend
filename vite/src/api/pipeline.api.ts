import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { PipelineJob } from "@/types/api";

export const startPipeline = (topicId: string) => api.post<PipelineJob>(endpoints.pipeline.start, { topicId });
export const getPipelineJob = (id: string) => api.get<PipelineJob>(endpoints.pipeline.byId(id));
