import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ConfigProvider } from "antd";
import { ThemeProvider } from "./ThemeProvider.tsx";
import { mainTheme } from "./themes.ts";
import { App as AntdApp } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={mainTheme}>
      <ThemeProvider>
        <AntdApp
          message={{ maxCount: 1 }}
          notification={{ maxCount: 4, stack: true }}
        >
          <App />
        </AntdApp>
      </ThemeProvider>
    </ConfigProvider>
  </StrictMode>
);
