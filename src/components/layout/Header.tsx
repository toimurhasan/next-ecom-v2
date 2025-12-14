"use client";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          YourChoice
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-4"
        >
          <Link href="/categories" className="text-gray-700 dark:text-gray-300">
            Categories
          </Link>
          <Link href="/deals" className="text-gray-700 dark:text-gray-300">
            Deals
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link
              href="/categories"
              className="text-gray-700 dark:text-gray-300"
            >
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 dark:text-gray-300">
              Deals
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
