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

  const [registeredUsers, setRegisteredUsers] = useState<{ name: string; email: string; password: string }[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ff-registered-users");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("ff-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("ff-user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("ff-registered-users", JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const login = useCallback((email: string, password: string) => {
    // Only registered users can sign in
    const found = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({ name: found.name, email: found.email });
      return true;
    }
    return false;
  }, [registeredUsers]);

  const register = useCallback((name: string, email: string, password: string) => {
    if (!name || !email || password.length < 8) return false;
    // Check if user already exists
    if (registeredUsers.some((u) => u.email === email)) return false;
    const newUser = { name, email, password };
    setRegisteredUsers((prev) => [...prev, newUser]);
    setUser({ name, email });
    return true;
  }, [registeredUsers]);

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