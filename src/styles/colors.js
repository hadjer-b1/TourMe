// Color theme constants for the application
export const colors = {
  // Primary colors
  primary: {
    orange: "#ff8c42",
    orangeLight: "#ffb366",
    orangeDark: "#e6772a",
    blue: "rgba(52, 219, 141, 1)",
    blueDark: "rgba(14, 69, 43, 1)",
    blueLight: "rgba(93, 226, 202, 1)",
  },

  // Background colors
  background: {
    light: "#ffffff",
    lightGray: "#f8f9fa",
    dark: "#1a1a2e",
    darkGray: "#2c2c2c",
    dim: "#3a3a3a",
  },

  // Text colors
  text: {
    light: "#333333",
    lightSecondary: "#666666",
    dark: "#ffffff",
    darkSecondary: "#cccccc",
    dim: "#e0e0e0",
    dimSecondary: "#b8b8b8",
  },

  // Elements colors
  ui: {
    border: "#e9ecef",
    borderDark: "#444444",
    shadow: "rgba(0, 0, 0, 0.1)",
    shadowDark: "rgba(0, 0, 0, 0.3)",
    overlay: "rgba(0, 0, 0, 0.6)",
    overlayLight: "rgba(255, 255, 255, 0.1)",
  },

  // Status colors
  status: {
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#5bc2d2ff",
  },
};

// Theme configurations
export const themes = {
  light: {
    name: "light",
    colors: {
      primary: colors.primary.orange,
      secondary: colors.primary.blue,
      background: colors.background.light,
      backgroundSecondary: colors.background.lightGray,
      text: colors.text.light,
      textSecondary: colors.text.lightSecondary,
      border: colors.ui.border,
      shadow: colors.ui.shadow,
    },
  },

  dark: {
    name: "dark",
    colors: {
      primary: colors.primary.orangeLight,
      secondary: colors.primary.blueDark,
      background: colors.background.dark,
      backgroundSecondary: colors.background.darkGray,
      text: colors.text.dark,
      textSecondary: colors.text.darkSecondary,
      border: colors.ui.borderDark,
      shadow: colors.ui.shadowDark,
    },
  },

  dim: {
    name: "dim",
    colors: {
      primary: colors.primary.orange,
      secondary: colors.primary.blueDark,
      background: colors.background.dim,
      backgroundSecondary: colors.background.darkGray,
      text: colors.text.dim,
      textSecondary: colors.text.dimSecondary,
      border: colors.ui.borderDark,
      shadow: colors.ui.shadowDark,
    },
  },
};

export default colors;
