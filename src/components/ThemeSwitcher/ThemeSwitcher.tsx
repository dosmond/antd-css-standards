import { Select } from "antd";
import { themes } from "../../themes";
import styles from "./ThemeSwitcher.module.css";

interface ThemeSwitcherProps {
  onThemeChange: (themeKey: string) => void;
  currentTheme: string;
}

export const ThemeSwitcher = ({
  onThemeChange,
  currentTheme,
}: ThemeSwitcherProps) => {
  const themeOptions = Object.entries(themes).map(([key, theme]) => ({
    label: theme.token?.colorPrimary
      ? `${key.charAt(0).toUpperCase() + key.slice(1)} Theme`
      : key,
    value: key,
  }));

  return (
    <div className={styles.container}>
      <Select
        className={styles.select}
        value={currentTheme}
        onChange={onThemeChange}
        options={themeOptions}
      />
    </div>
  );
};
