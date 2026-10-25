import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const rootElement = document.getElementById("root");

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light";
};

const initialState = {
  mode: getInitialTheme(),
};

// Helper function to apply theme to DOM
const applyThemeToDOM = (theme) => {
  if (rootElement) {
    // Remove both possible classes to ensure clean state
    rootElement.classList.remove("light", "dark");
    // Add the current theme class
    rootElement.classList.add(theme);
  }
};

// Apply initial theme
applyThemeToDOM(initialState.mode);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      applyThemeToDOM(state.mode);
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action) => {
      if (action.payload !== "light" && action.payload !== "dark") return;
      state.mode = action.payload;
      applyThemeToDOM(state.mode);
      localStorage.setItem("theme", state.mode);
    },
    applyTheme: (state) => {
      // Reapply current theme (useful for initialization)
      applyThemeToDOM(state.mode);
    },
  },
});

// Basic selector for theme mode
export const selectThemeMode = (state) => state.theme?.mode || "light";

// Comprehensive theme selector for compatibility with your existing code
export const selectCurrentTheme = createSelector(
  [(state) => state.theme],
  (theme) => {
    if (!theme) return { mode: "light" };

    return {
      mode: theme.mode,
    };
  }
);

export const { toggleTheme, setTheme, applyTheme } = themeSlice.actions;
export default themeSlice.reducer;
