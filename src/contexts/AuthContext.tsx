import { useState, useEffect, type ReactNode } from 'react';
import type { User, AuthContextType } from '@/types';
import { authService } from '@/services/authService';
import { AuthContext } from './AuthContextDefinition';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const user = await authService.login(email, password);
    setUser(user);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const signup = async (email: string, password: string, username: string) => {
    const user = await authService.signup(email, password, username);
    setUser(user);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    signup,
    isAuthenticated: !!user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
