import { useState, useEffect, type ReactNode } from 'react';
import type { ThemeContextType } from '@/types';
import { ThemeContext } from './ThemeContextDefinition';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('epic_games_theme');
    return (stored as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('epic_games_theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
