import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { clearAccessToken } from "@/api/client";
import { login as loginRequest, logout as logoutRequest, refresh as refreshRequest, register as registerRequest, type LoginInput, type RegisterInput } from "@/api/auth.api";
import { getProfile } from "@/api/user.api";
import type { User } from "@/types/api";

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (input: LoginInput) => Promise<User>;
  register: (input: RegisterInput) => Promise<User>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<boolean>;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSession = async () => {
    try {
      await refreshRequest();
      const profile = await getProfile();
      setUser(profile);
      return true;
    } catch {
      clearAccessToken();
      setUser(null);
      return false;
    }
  };

  useEffect(() => {
    let active = true;
    void refreshSession().finally(() => {
      if (active) setIsLoading(false);
    });
    return () => { active = false; };
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    login: async (input) => {
      const nextUser = await loginRequest(input);
      setUser(nextUser);
      return nextUser;
    },
    register: async (input) => {
      const nextUser = await registerRequest(input);
      setUser(nextUser);
      return nextUser;
    },
    logout: async () => {
      await logoutRequest();
      setUser(null);
    },
    refreshSession,
    setUser,
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
