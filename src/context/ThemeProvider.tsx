"use client";
import React, { ReactNode, useEffect } from "react";
import useTheme from "../hooks/useTheme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  // ensure body variables align with theme (optional fallback to CSS vars)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return <>{children}</>;
}
