export interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    text: string;
    cardBackground: string;
    border: string;
    highlight: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export const themes: Record<string, Theme> = {
  default: {
    name: "Default",
    colors: {
      primary: "#1890ff",
      background: "#ffffff",
      text: "#000000",
      cardBackground: "#ffffff",
      border: "#d9d9d9",
      highlight: "#e6f7ff",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
  },
  dark: {
    name: "Dark",
    colors: {
      primary: "#177ddc",
      background: "#141414",
      text: "#ffffff",
      cardBackground: "#1f1f1f",
      border: "#434343",
      highlight: "#111b26",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
  },
  compact: {
    name: "Compact",
    colors: {
      primary: "#1890ff",
      background: "#ffffff",
      text: "#000000",
      cardBackground: "#ffffff",
      border: "#d9d9d9",
      highlight: "#e6f7ff",
    },
    spacing: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    borderRadius: {
      small: "2px",
      medium: "4px",
      large: "6px",
    },
  },
  spacious: {
    name: "Spacious",
    colors: {
      primary: "#1890ff",
      background: "#ffffff",
      text: "#000000",
      cardBackground: "#ffffff",
      border: "#d9d9d9",
      highlight: "#e6f7ff",
    },
    spacing: {
      small: "16px",
      medium: "24px",
      large: "32px",
    },
    borderRadius: {
      small: "8px",
      medium: "12px",
      large: "16px",
    },
  },
};
