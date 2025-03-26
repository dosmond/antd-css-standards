import useToken from "antd/es/theme/useToken";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [, token] = useToken();

  useEffect(() => {
    if (token) {
      const cssVars = Object.entries(token).reduce((acc, [key, value]) => {
        // Convert camelCase to kebab-case
        const cssVarName = key
          .replace(/([A-Z]+)/g, (match) => `-${match.toLowerCase()}`)
          .replace(/^-/, "");

        // Add px suffix for numeric values
        const cssValue = typeof value === "number" ? `${value}px` : value;

        return {
          ...acc,
          [`--${cssVarName}`]: cssValue,
        };
      }, {} as Record<string, string>);

      const styleSheet = document.createElement("style");
      styleSheet.textContent = `:root { ${Object.entries(cssVars)
        .map(([prop, value]) => `${prop}: ${value};`)
        .join(" ")} }`;

      document.head.appendChild(styleSheet);

      return () => {
        document.head.removeChild(styleSheet);
      };
    }
  }, [token]);

  return children;
}
