import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "@/components/layout/app-shell";
import ManagerLayout from "@/components/layout/manager-layout";
import PageLoader from "@/components/shared/page-loader";

// ============================================
// Public Pages
// ============================================

const Home = lazy(() => import("@/pages/public/home"));

// ============================================
// Authentication Pages
// ============================================

const Login = lazy(() => import("@/pages/auth/login"));
const Register = lazy(() => import("@/pages/auth/register"));
const ForgotPassword = lazy(() => import("@/pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("@/pages/auth/reset-password"));

// ============================================
// Student Pages
// ============================================

const StudentDashboard = lazy(() => import("@/pages/student/dashboard"));

const Explore = lazy(() => import("@/pages/student/explore"));

const MyLearning = lazy(() => import("@/pages/student/my-learning"));

const LearningGoals = lazy(() => import("@/pages/student/goals"));

const Progress = lazy(() => import("@/pages/student/progress"));

const History = lazy(() => import("@/pages/student/history"));

const Bookmarks = lazy(() => import("@/pages/student/bookmarks"));

const Settings = lazy(() => import("@/pages/student/settings"));

const VideoPlayer = lazy(() => import("@/pages/student/video-player"));

const LearningPath = lazy(() => import("@/pages/student/learning-path"));

const AITutor = lazy(() => import("@/pages/student/ai-tutor"));

const AIQuiz = lazy(() => import("@/pages/student/ai-quiz"));

// ============================================
// Manager Pages
// ============================================

const ManagerDashboard = lazy(() => import("@/pages/manager/dashboard"));

const ManagerTopics = lazy(() => import("@/pages/manager/topics"));

const ManagerPipeline = lazy(() => import("@/pages/manager/pipeline"));

const ManagerAnalysis = lazy(() => import("@/pages/manager/analysis"));

const ManagerLearningPaths = lazy(
  () => import("@/pages/manager/learning-paths"),
);

const ManagerAnalytics = lazy(() => import("@/pages/manager/analytics"));

const ManagerSettings = lazy(() => import("@/pages/manager/settings"));

// ============================================
// App
// ============================================

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ==========================================
            Public
        ========================================== */}

        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />

        {/* ==========================================
            Authentication
        ========================================== */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ==========================================
            Student Application
        ========================================== */}

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
              <Explore />
            </AppShell>
          }
        />

        <Route
          path="/my-learning"
          element={
            <AppShell>
              <MyLearning />
            </AppShell>
          }
        />

        <Route
          path="/goals"
          element={
            <AppShell>
              <LearningGoals />
            </AppShell>
          }
        />

        <Route
          path="/progress"
          element={
            <AppShell>
              <Progress />
            </AppShell>
          }
        />

        <Route
          path="/history"
          element={
            <AppShell>
              <History />
            </AppShell>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <AppShell>
              <Bookmarks />
            </AppShell>
          }
        />

        <Route
          path="/settings"
          element={
            <AppShell>
              <Settings />
            </AppShell>
          }
        />

        <Route
          path="/video/:id"
          element={
            <AppShell>
              <VideoPlayer />
            </AppShell>
          }
        />

        <Route
          path="/learning-path/:id"
          element={
            <AppShell>
              <LearningPath />
            </AppShell>
          }
        />

        <Route
          path="/ai-tutor"
          element={
            <AppShell>
              <AITutor />
            </AppShell>
          }
        />

        <Route
          path="/ai-quiz"
          element={
            <AppShell>
              <AIQuiz />
            </AppShell>
          }
        />

        {/* ==========================================
            Manager / Admin Workspace
        ========================================== */}

        <Route
          path="/manager"
          element={
            <ManagerLayout>
              <ManagerDashboard />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/topics"
          element={
            <ManagerLayout>
              <ManagerTopics />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/pipeline"
          element={
            <ManagerLayout>
              <ManagerPipeline />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/analysis"
          element={
            <ManagerLayout>
              <ManagerAnalysis />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/learning-paths"
          element={
            <ManagerLayout>
              <ManagerLearningPaths />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/analytics"
          element={
            <ManagerLayout>
              <ManagerAnalytics />
            </ManagerLayout>
          }
        />

        <Route
          path="/manager/settings"
          element={
            <ManagerLayout>
              <ManagerSettings />
            </ManagerLayout>
          }
        />

        {/* ==========================================
            Fallback
        ========================================== */}

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
}
