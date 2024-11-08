/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log("Login response data:", response.data); // Check if role is correct
  
      if (response.data.status === "success") {
        setUser(response.data.user); // Set correct user role
      }
    } catch (error) {
      console.error("Login failed", error);
      throw new Error("Login Failed");
    }
  };

  // Signup function
  const signup = async (email: string, password: string, role: string) => {
    try {
      const response = await axios.post("/api/auth/signup", { email, password, role });
      if (response.data.status === "success") {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Signup failed", error);
      throw new Error("Signup Failed");
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
