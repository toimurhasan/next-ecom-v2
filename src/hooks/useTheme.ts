import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored =
        typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      /* ignore */
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return "dark";
    return "light";
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return { theme, setTheme, toggle } as const;
}
