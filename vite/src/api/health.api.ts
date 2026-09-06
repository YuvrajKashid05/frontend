import { api } from "@/api/client";
import { endpoints } from "@/api/endpoints";

export type HealthResponse = { success: true; message: string };
export const getHealth = () => api.get<HealthResponse>(endpoints.health);
