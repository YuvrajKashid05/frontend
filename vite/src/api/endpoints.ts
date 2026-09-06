export const endpoints = {
  health: "/health",
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
  },
  users: {
    profile: "/users/profile",
    avatar: "/users/avatar",
    account: "/users/account",
  },
  topics: {
    base: "/topics",
    search: "/topics/search",
    publish: (id: string) => `/topics/${id}/publish`,
    byId: (id: string) => `/topics/${id}`,
  },
  learningPaths: {
    base: "/learning-path",
    byId: (id: string) => `/learning-path/${id}`,
    details: (id: string) => `/learning-path/${id}/details`,
    player: (id: string) => `/learning-path/${id}/player`,
    byTopic: (topicId: string) => `/learning-path/topic/${topicId}`,
    publishedByTopic: (topicId: string) => `/learning-path/topic/${topicId}/published`,
    contentByTopic: (topicId: string) => `/learning-path/topic/${topicId}/content`,
    publish: (id: string) => `/learning-path/${id}/publish`,
  },
  lessons: {
    base: "/learning-path-lessons",
    byId: (id: string) => `/learning-path-lessons/${id}`,
    byPath: (pathId: string) => `/learning-path-lessons/path/${pathId}`,
  },
  videos: {
    base: "/learning-videos",
    byId: (id: string) => `/learning-videos/${id}`,
    byLesson: (lessonId: string) => `/learning-videos/lesson/${lessonId}`,
    approvedByLesson: (lessonId: string) => `/learning-videos/lesson/${lessonId}/approved`,
    analysis: (id: string) => `/learning-videos/${id}/analysis`,
    status: (id: string) => `/learning-videos/${id}/status`,
  },
  progress: {
    me: "/progress/me",
    video: (videoId: string) => `/progress/video/${videoId}`,
  },
  pipeline: {
    start: "/pipeline/start",
    byId: (id: string) => `/pipeline/${id}`,
  },
} as const;
