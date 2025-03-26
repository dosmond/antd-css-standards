import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ConfigProvider } from "antd";
import { ThemeProvider } from "./ThemeProvider.tsx";
import { themes } from "./themes.ts";
import { App as AntdApp } from "antd";

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState("default");

  return (
    <ConfigProvider theme={themes[currentTheme]}>
      <ThemeProvider>
        <AntdApp
          message={{ maxCount: 1 }}
          notification={{ maxCount: 4, stack: true }}
        >
          <App onThemeChange={setCurrentTheme} currentTheme={currentTheme} />
        </AntdApp>
      </ThemeProvider>
    </ConfigProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
