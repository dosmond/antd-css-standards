import React, { createContext, useContext, useState, ReactNode } from "react";
import { Theme, themes } from "../themes/themeTypes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeKey: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.default);

  const setTheme = (themeKey: string) => {
    if (themes[themeKey]) {
      setCurrentTheme(themes[themeKey]);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
