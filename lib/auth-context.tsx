"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface StoredUser {
  name: string;
  email: string;
  password: string; // stored in plaintext for this static demo
}

export interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("shotorongi-auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    if (typeof window === "undefined") return false;
    const storedStr = localStorage.getItem("shotorongi-user");
    if (!storedStr) {
      return false;
    }
    try {
      const storedUser: StoredUser = JSON.parse(storedStr);
      if (storedUser.email === email && storedUser.password === password) {
        const authUser: User = { name: storedUser.name, email: storedUser.email };
        localStorage.setItem("shotorongi-auth", JSON.stringify(authUser));
        setUser(authUser);
        return true;
      }
    } catch {
      // parsing error
    }
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    if (typeof window === "undefined") return;
    const storedUser: StoredUser = { name, email, password };
    localStorage.setItem("shotorongi-user", JSON.stringify(storedUser));
    const authUser: User = { name, email };
    localStorage.setItem("shotorongi-auth", JSON.stringify(authUser));
    setUser(authUser);
  };

  const logout = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("shotorongi-auth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
