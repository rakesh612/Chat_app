import { create } from "zustand";
//this is the store for the theme fetching and setting the theme in the local storage of the browser.
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));