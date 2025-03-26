import { App as AntdApp } from "antd";

import { ConfigProvider } from "antd";
import { useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { themes } from "./themes";
import App from "./App";

export const Root = () => {
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
