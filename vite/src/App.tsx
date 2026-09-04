import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "@/components/layout/app-shell";

// Public
const LandingPage = lazy(() => import("@/pages/public/home"));

// Auth
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"));
const LoginPage = lazy(() => import("@/pages/auth/login"));
const RegisterPage = lazy(() => import("@/pages/auth/register"));
const ResetPasswordPage = lazy(() => import("@/pages/auth/reset-password"));

// Student
const AiQuizPage = lazy(() => import("@/pages/student/ai-quiz"));
const AiTutorPage = lazy(() => import("@/pages/student/ai-tutor"));
const BookmarksPage = lazy(() => import("@/pages/student/bookmarks"));
const StudentDashboard = lazy(() => import("@/pages/student/dashboard"));
const ExplorePage = lazy(() => import("@/pages/student/explore"));
const LearningGoalsPage = lazy(() => import("@/pages/student/goals"));
const HistoryPage = lazy(() => import("@/pages/student/history"));
const HomePage = lazy(() => import("@/pages/student/home"));
const LearningPathPage = lazy(() => import("@/pages/student/learning-path"));
const MyLearningPage = lazy(() => import("@/pages/student/my-learning"));
const ProgressPage = lazy(() => import("@/pages/student/progress"));
const SettingsPage = lazy(() => import("@/pages/student/settings"));
const VideoPlayerPage = lazy(() => import("@/pages/student/video-player"));

function RouteFallback() {
  return (
    <div className="flex min-h-full items-center justify-center bg-background px-4">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground" />
        Loading...
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Student */}
        <Route
          path="/home"
          element={
            <AppShell>
              <HomePage />
            </AppShell>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AppShell>
              <StudentDashboard />
            </AppShell>
          }
        />

        <Route
          path="/explore"
          element={
            <AppShell>
              <ExplorePage />
            </AppShell>
          }
        />

        <Route
          path="/my-learning"
          element={
            <AppShell>
              <MyLearningPage />
            </AppShell>
          }
        />

        <Route
          path="/goals"
          element={
            <AppShell>
              <LearningGoalsPage />
            </AppShell>
          }
        />

        <Route
          path="/progress"
          element={
            <AppShell>
              <ProgressPage />
            </AppShell>
          }
        />

        <Route
          path="/history"
          element={
            <AppShell>
              <HistoryPage />
            </AppShell>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <AppShell>
              <BookmarksPage />
            </AppShell>
          }
        />

        <Route
          path="/settings"
          element={
            <AppShell>
              <SettingsPage />
            </AppShell>
          }
        />

        <Route
          path="/video-player"
          element={
            <AppShell>
              <VideoPlayerPage />
            </AppShell>
          }
        />

        <Route
          path="/learning-path"
          element={
            <AppShell>
              <LearningPathPage />
            </AppShell>
          }
        />

        <Route
          path="/ai-tutor"
          element={
            <AppShell>
              <AiTutorPage />
            </AppShell>
          }
        />

        <Route
          path="/ai-quiz"
          element={
            <AppShell>
              <AiQuizPage />
            </AppShell>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
