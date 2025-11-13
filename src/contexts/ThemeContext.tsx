import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';

const isValidTheme = (value: unknown): value is Theme => {
  return value === 'dark' || value === 'light';
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const initialTheme = isValidTheme(savedTheme)
        ? savedTheme
        : DEFAULT_THEME;
      document.documentElement.setAttribute('data-theme', initialTheme);
      return initialTheme;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: fix eslint error
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
