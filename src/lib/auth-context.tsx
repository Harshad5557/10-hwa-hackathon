"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ff-user");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return null;
        }
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("ff-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("ff-user");
    }
  }, [user]);

  const login = useCallback((email: string, password: string) => {
    // Simple validation - in production this would call an API
    if (email && password.length >= 8) {
      setUser({ name: email.split("@")[0], email });
      return true;
    }
    return false;
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    if (name && email && password.length >= 8) {
      setUser({ name, email });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}