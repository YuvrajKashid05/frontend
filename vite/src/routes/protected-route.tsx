import { Navigate, Outlet, useLocation } from "react-router-dom";
import PageLoader from "@/components/shared/page-loader";
import { useAuth } from "@/context/auth-context";
import type { UserRole } from "@/types/api";

export default function ProtectedRoute({ allowedRoles }: { allowedRoles?: UserRole[] }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <PageLoader />;
  if (!isAuthenticated || !user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "STUDENT" ? "/home" : "/manager"} replace />;
  }
  return <Outlet />;
}
