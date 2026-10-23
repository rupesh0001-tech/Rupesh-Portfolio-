"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme store for useSyncExternalStore
let themeListeners: Array<() => void> = [];

const themeStore = {
  getSnapshot: (): boolean => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark theme if no preference is saved
    return savedTheme !== "light";
  },
  getServerSnapshot: (): boolean => {
    // Return consistent value for SSR - default to dark
    return true;
  },
  subscribe: (listener: () => void): (() => void) => {
    themeListeners.push(listener);
    return () => {
      themeListeners = themeListeners.filter((l) => l !== listener);
    };
  },
  emitChange: () => {
    themeListeners.forEach((listener) => listener());
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDark = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  // Sync dark class with DOM when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const currentIsDark = themeStore.getSnapshot();
    const newIsDark = !currentIsDark;

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Notify subscribers of the change
    themeStore.emitChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Only export useTheme for the NavBar toggle button
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
