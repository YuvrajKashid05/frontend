export type UserRole = "STUDENT" | "ADMIN" | "EDITOR" | "DEVELOPER";
export type TopicDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type TopicStatus = "DRAFT" | "PROCESSING" | "PUBLISHED" | "ARCHIVED";
export type LearningPathStatus = "DRAFT" | "PROCESSING" | "PUBLISHED" | "ARCHIVED";
export type VideoStatus = "PENDING" | "ANALYZING" | "APPROVED" | "REJECTED";
export type PipelineStatus = "PENDING" | "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED";

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  isVerified: boolean;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
};

export type Topic = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  thumbnail: string | null;
  category: string;
  difficulty: TopicDifficulty | null;
  status: TopicStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  learningPaths?: LearningPath[];
};

export type LearningPath = {
  id: string;
  title: string;
  description: string | null;
  topicId: string;
  status: LearningPathStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  topic?: Pick<Topic, "id" | "name" | "slug" | "thumbnail">;
  lessons?: LearningPathLesson[];
};

export type LearningPathLesson = {
  id: string;
  learningPathId: string;
  title: string;
  description: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  learningPath?: LearningPath;
  videos?: LearningVideo[];
};

export type LearningVideo = {
  id: string;
  lessonId: string;
  youtubeVideoId: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  channelName: string | null;
  channelId: string | null;
  durationSeconds: number | null;
  transcriptUrl: string | null;
  relevanceScore: number | null;
  qualityScore: number | null;
  difficultyScore: number | null;
  aiSummary: string | null;
  status: VideoStatus;
  createdAt: string;
  updatedAt: string;
  lesson?: LearningPathLesson;
  progress?: UserVideoProgress[];
};

export type UserVideoProgress = {
  id: string;
  userId: number;
  videoId: string;
  watchedSeconds: number;
  progressPercentage: number;
  isCompleted: boolean;
  lastWatchedAt: string | null;
  createdAt: string;
  updatedAt: string;
  video?: LearningVideo;
};

export type PipelineVideoCandidate = {
  id: string;
  pipelineJobId: string;
  youtubeVideoId: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  channelName: string | null;
  channelId: string | null;
  publishedAt: string | null;
  durationSeconds: number | null;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  metadataScore: number | null;
  aiScore: number | null;
  aiConfidence: number | null;
  finalScore: number | null;
  rank: number | null;
  transcriptAvailable: boolean;
  transcriptText: string | null;
  transcriptError: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PipelineJob = {
  id: string;
  topicId: string;
  status: PipelineStatus;
  progress: number;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
  topic?: Pick<Topic, "id" | "name" | "slug">;
  candidates?: PipelineVideoCandidate[];
};

export type TopicPage = {
  topics: Topic[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};
