import { lazy } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import AppShell from "@/components/layout/app-shell";
import ManagerLayout from "@/components/layout/manager-layout";
import ProtectedRoute from "@/routes/protected-route";

const studentPages = {
  home: lazy(() => import("@/pages/student/home")),
  dashboard: lazy(() => import("@/pages/student/dashboard")),
  explore: lazy(() => import("@/pages/student/explore")),
  myLearning: lazy(() => import("@/pages/student/my-learning")),
  goals: lazy(() => import("@/pages/student/goals")),
  aiTutor: lazy(() => import("@/pages/student/ai-tutor")),
  aiQuiz: lazy(() => import("@/pages/student/ai-quiz")),
  progress: lazy(() => import("@/pages/student/progress")),
  history: lazy(() => import("@/pages/student/history")),
  bookmarks: lazy(() => import("@/pages/student/bookmarks")),
  settings: lazy(() => import("@/pages/student/settings")),
  notifications: lazy(() => import("@/pages/student/notifications")),
  learningPath: lazy(() => import("@/pages/student/learning-path")),
  videoPlayer: lazy(() => import("@/pages/student/video-player")),
};

const managerPages = {
  dashboard: lazy(() => import("@/pages/manager/dashboard")),
  topics: lazy(() => import("@/pages/manager/topics")),
  pipeline: lazy(() => import("@/pages/manager/pipeline")),
  analysis: lazy(() => import("@/pages/manager/analysis")),
  learningPaths: lazy(() => import("@/pages/manager/learning-paths")),
  analytics: lazy(() => import("@/pages/manager/analytics")),
  settings: lazy(() => import("@/pages/manager/settings")),
};

function StudentLayout() {
  return <AppShell><Outlet /></AppShell>;
}

function ManagerRouteLayout() {
  return <ManagerLayout><Outlet /></ManagerLayout>;
}

export function ProtectedRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={["STUDENT"]} />}>
      <Route element={<StudentLayout />}>
        <Route path="/home" element={<studentPages.home />} />
        <Route path="/dashboard" element={<studentPages.dashboard />} />
        <Route path="/explore" element={<studentPages.explore />} />
        <Route path="/my-learning" element={<studentPages.myLearning />} />
        <Route path="/goals" element={<studentPages.goals />} />
        <Route path="/ai-tutor" element={<studentPages.aiTutor />} />
        <Route path="/ai-quiz" element={<studentPages.aiQuiz />} />
        <Route path="/progress" element={<studentPages.progress />} />
        <Route path="/history" element={<studentPages.history />} />
        <Route path="/bookmarks" element={<studentPages.bookmarks />} />
        <Route path="/settings" element={<studentPages.settings />} />
        <Route path="/notifications" element={<studentPages.notifications />} />
        <Route path="/learning-path/:id" element={<studentPages.learningPath />} />
        <Route path="/video/:id" element={<studentPages.videoPlayer />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>
    </Route>
  );
}

export function ManagerRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={["ADMIN", "EDITOR", "DEVELOPER"]} />}>
      <Route element={<ManagerRouteLayout />}>
        <Route path="/manager" element={<managerPages.dashboard />} />
        <Route path="/manager/topics" element={<managerPages.topics />} />
        <Route path="/manager/pipeline" element={<managerPages.pipeline />} />
        <Route path="/manager/analysis" element={<managerPages.analysis />} />
        <Route path="/manager/learning-paths" element={<managerPages.learningPaths />} />
        <Route path="/manager/analytics" element={<managerPages.analytics />} />
        <Route path="/manager/settings" element={<managerPages.settings />} />
      </Route>
    </Route>
  );
}
