import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "@/components/layout/app-shell";

import ForgotPasswordPage from "@/pages/auth/forgot-password";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import ResetPasswordPage from "@/pages/auth/reset-password";

import LandingPage from "@/pages/public/home";

import AiQuizPage from "@/pages/student/ai-quiz";
import AiTutorPage from "@/pages/student/ai-tutor";
import StudentDashboard from "@/pages/student/dashboard";
import ExplorePage from "@/pages/student/explore";
import LearningGoalsPage from "@/pages/student/goals";
import HistoryPage from "@/pages/student/history";
import HomePage from "@/pages/student/home";
import LearningPathPage from "@/pages/student/learning-path";
import MyLearningPage from "@/pages/student/my-learning";
import ProgressPage from "@/pages/student/progress";
import SettingsPage from "@/pages/student/settings";
import VideoPlayerPage from "@/pages/student/video-player";
import BookmarksPage from "./pages/student/bookmarks";

function App() {
  return (
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

      {/* Temporary placeholders */}
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
  );
}

export default App;
